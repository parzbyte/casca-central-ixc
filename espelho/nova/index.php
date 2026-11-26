<?php
declare(strict_types=1);

/*
 * Espelho da Central do Assinante (IXC) de {{NOME}}, gerado pelo gerador da casca em {{GERADO_EM}}.
 *
 * Tudo o que chega em {{ESPELHO_BASE}}/... é repassado para https://{{ORIGEM_HOST}}{{ORIGEM_BASE}}/...
 * e a resposta volta com os endereços trocados para o espelho. Nas páginas HTML entram a casca
 * (_espelho/casca-app.js, com as cores do provedor) e a adaptação para PC (_espelho/casca-pc.css e .js).
 *
 * Segurança:
 *  - o destino é sempre o host fixo abaixo; o caminho pedido só pode acrescentar um caminho depois dele;
 *  - nada de corpo, senha, cookie ou token é gravado em log; erros registram só o código do cURL;
 *  - os cookies da origem ganham o prefixo "cx_" e Path={{ESPELHO_BASE}}/, e só esses voltam para a origem
 *    (os cookies do resto do site do provedor nunca saem daqui).
 */

// configuração
const ORIGEM_HOST   = '{{ORIGEM_HOST}}';
const ORIGEM_BASE   = '{{ORIGEM_BASE}}';
const ESPELHO_BASE  = '{{ESPELHO_BASE}}';
// hosts aceitos para montar os endereços absolutos do espelho (o primeiro é o padrão)
const HOSTS_PERMITIDOS = {{HOSTS_PHP}};
const PREFIXO_COOKIE   = 'cx_';
const LIMITE_CORPO     = 10 * 1024 * 1024;   // corpo do pedido (formulários, anexos de atendimento)
const LIMITE_RESPOSTA  = 30 * 1024 * 1024;   // resposta da origem (o PDF do boleto vem em base64 dentro de JSON)
const TEMPO_CONEXAO    = 10;                 // segundos para conectar na origem
const TEMPO_TOTAL      = 45;                 // segundos para a resposta inteira
const REPASSAR_IP      = true;               // manda o IP do cliente em X-Forwarded-For (a origem pode ignorar)
const METODOS          = ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'];

// cores, logo e opções da casca (mesmo formato do window.__CASCA_CFG__ que o app monta)
function cascaCfg(): array
{
    return (array) json_decode('{{CFG_JSON}}', true);
}

// utilidades
ini_set('display_errors', '0');
header('X-Frame-Options: SAMEORIGIN');
header("Content-Security-Policy: frame-ancestors 'self'");
ini_set('default_mimetype', ''); // sem Content-Type inventado quando a origem não manda um
header_remove('X-Powered-By');

function falhar(int $codigo, string $titulo, string $texto): void
{
    http_response_code($codigo);
    header('Content-Type: text/html; charset=UTF-8');
    header('Cache-Control: no-store');
    $t = htmlspecialchars($titulo, ENT_QUOTES, 'UTF-8');
    $x = htmlspecialchars($texto, ENT_QUOTES, 'UTF-8');
    echo '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        . '<title>' . $t . '</title></head><body style="font-family:system-ui,sans-serif;background:#f4f4f2;color:#17161b;display:grid;place-items:center;min-height:100vh;margin:0;padding:16px;box-sizing:border-box">'
        . '<div style="max-width:420px;background:#fff;border-radius:20px;padding:28px 24px;box-shadow:0 10px 30px rgba(36,9,61,.12);text-align:center">'
        . '<h1 style="font-size:20px;margin:0 0 8px">' . $t . '</h1><p style="margin:0 0 18px;color:#4a4953">' . $x . '</p>'
        . '<a href="' . ESPELHO_BASE . '/" style="display:inline-block;background:{{COR}};color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600">Tentar de novo</a>'
        . '</div></body></html>';
    exit;
}

function ehHttps(): bool
{
    if (!empty($_SERVER['HTTPS']) && strtolower((string) $_SERVER['HTTPS']) !== 'off') return true;
    if ((string) ($_SERVER['SERVER_PORT'] ?? '') === '443') return true;
    return strtolower((string) ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '')) === 'https';
}

// origem pública do espelho (esquema + host), usada para trocar os endereços absolutos
function origemEspelho(): string
{
    $host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
    if (!in_array($host, HOSTS_PERMITIDOS, true)) $host = HOSTS_PERMITIDOS[0];
    $local = preg_match('/^(127\.0\.0\.1|localhost)(:\d+)?$/', $host) === 1;
    return ((ehHttps() || !$local) ? 'https' : 'http') . '://' . $host;
}

/*
 * Troca os endereços da origem pelos do espelho em qualquer texto (HTML, JS, CSS, JSON, Location).
 * Cobre a forma normal e a escapada do JSON ("https:\/\/host\/central-assinante").
 */
function reescreverTexto(string $s, string $origemEsp): string
{
    if ($s === '') return $s;
    $hostEsp = (string) preg_replace('#^https?://#', '', $origemEsp);
    $h = preg_quote(ORIGEM_HOST, '#');
    $b = preg_quote(ORIGEM_BASE, '#');
    $bEsc = str_replace('/', '\\\\/', $b); // \/central-assinante dentro do padrão
    $fim = '(?![\w-])';
    $s = (string) preg_replace_callback(
        [
            '#https?://' . $h . $b . $fim . '#i',
            '#https?:\\\\/\\\\/' . $h . $bEsc . $fim . '#i',
            '#(?<![\w:])//' . $h . $b . $fim . '#i',
            '#(?<![\w:])\\\\/\\\\/' . $h . $bEsc . $fim . '#i',
        ],
        static function (array $m) use ($origemEsp, $hostEsp): string {
            $esc = strpos($m[0], '\\/') !== false;
            $abs = stripos($m[0], 'http') === 0;
            $saida = ($abs ? $origemEsp : '//' . $hostEsp) . ESPELHO_BASE;
            return $esc ? str_replace('/', '\\/', $saida) : $saida;
        },
        $s
    );
    // caminho sem host: "/central-assinante/..." e "\/central-assinante\/..."
    $s = (string) preg_replace('#(?<![\w.-])' . $b . $fim . '#', ESPELHO_BASE, $s);
    $s = (string) preg_replace('#(?<![\w.-])' . $bEsc . $fim . '#', str_replace('/', '\\/', ESPELHO_BASE), $s);
    return $s;
}

function reescreverLocation(string $loc, string $origemEsp): string
{
    $loc = trim($loc);
    if ($loc === '/') return ESPELHO_BASE . '/'; // a origem manda para a raiz dela (troca de idioma, por exemplo)
    $nova = reescreverTexto($loc, $origemEsp);
    // "/central" sem barra: o cookie (Path=/central/) não valeria; vai direto para "/central/"
    $semQuery = preg_replace('#[?\#].*$#', '', $nova);
    if ($semQuery === ESPELHO_BASE || $semQuery === $origemEsp . ESPELHO_BASE) {
        $nova = substr_replace($nova, '/', strlen((string) $semQuery), 0);
    }
    return $nova;
}

// Set-Cookie da origem -> cookie do espelho (prefixo, sem Domain, Path=/central/)
function reescreverCookie(string $linha, bool $https): ?string
{
    $partes = explode(';', $linha);
    $nv = trim((string) array_shift($partes));
    $p = strpos($nv, '=');
    if ($p === false || $p === 0) return null;
    $nome = substr($nv, 0, $p);
    if (!preg_match('/^[!#$%&\'*+\-.^_`|~0-9A-Za-z]+$/', $nome)) return null;
    $saida = PREFIXO_COOKIE . $nv . '; Path=' . ESPELHO_BASE . '/';
    $sameSite = 'Lax';
    $httpOnly = false;
    foreach ($partes as $a) {
        $a = trim($a);
        if ($a === '') continue;
        $k = strtolower(trim(explode('=', $a, 2)[0]));
        $v = trim(explode('=', $a, 2)[1] ?? '');
        if ($k === 'expires' || $k === 'max-age') $saida .= '; ' . $a;
        elseif ($k === 'httponly') $httpOnly = true;
        elseif ($k === 'samesite' && in_array(strtolower($v), ['lax', 'strict', 'none'], true)) $sameSite = ucfirst(strtolower($v));
        // domain, path, secure, partitioned e outros: descartados (o espelho define os seus)
    }
    if ($sameSite === 'None' && !$https) $sameSite = 'Lax';
    if ($httpOnly) $saida .= '; HttpOnly';
    $saida .= '; SameSite=' . $sameSite;
    if ($https) $saida .= '; Secure';
    return $saida;
}

// achata $_POST/$_FILES (ex.: "anexo[0]") para o cURL montar o multipart de novo
function achatar(array $dados, string $prefixo = ''): array
{
    $saida = [];
    foreach ($dados as $k => $v) {
        $chave = $prefixo === '' ? (string) $k : $prefixo . '[' . $k . ']';
        if (is_array($v)) $saida += achatar($v, $chave);
        else $saida[$chave] = (string) $v;
    }
    return $saida;
}

function arquivosParaCurl(array $files): array
{
    $saida = [];
    $um = static function (string $chave, $tmp, $nome, $tipo, $erro) use (&$saida, &$um): void {
        if (is_array($tmp)) {
            foreach ($tmp as $i => $t) $um($chave . '[' . $i . ']', $t, $nome[$i] ?? '', $tipo[$i] ?? '', $erro[$i] ?? 4);
            return;
        }
        if ((int) $erro === UPLOAD_ERR_OK && is_uploaded_file((string) $tmp)) {
            $saida[$chave] = new CURLFile((string) $tmp, (string) $tipo ?: 'application/octet-stream', (string) $nome);
        }
    };
    foreach ($files as $campo => $f) $um((string) $campo, $f['tmp_name'] ?? '', $f['name'] ?? '', $f['type'] ?? '', $f['error'] ?? 4);
    return $saida;
}

// pedido
$metodo = strtoupper((string) ($_SERVER['REQUEST_METHOD'] ?? 'GET'));
if (!in_array($metodo, METODOS, true)) falhar(405, 'Método não permitido', 'Este endereço não aceita esse tipo de pedido.');

$uri = (string) ($_SERVER['REQUEST_URI'] ?? '/');
$q = strpos($uri, '?');
$caminho = $q === false ? $uri : substr($uri, 0, $q);
$query = $q === false ? '' : substr($uri, $q + 1);

if (strncmp($caminho, ESPELHO_BASE, strlen(ESPELHO_BASE)) !== 0) falhar(404, 'Página não encontrada', 'Endereço fora da Central do Assinante.');
$resto = substr($caminho, strlen(ESPELHO_BASE));
if ($resto === '') {
    header('Location: ' . ESPELHO_BASE . '/' . ($query !== '' ? '?' . $query : ''), true, 301);
    exit;
}
// o caminho só pode continuar a Central: nada de "..", barra invertida, "//", caracteres de controle ou outro host
$decod = rawurldecode($resto);
if (
    $resto[0] !== '/'
    || !preg_match('#^/[A-Za-z0-9\-._~!$&\'()*+,;=:@/%]*$#', $resto)
    || strpos($resto, '//') !== false
    || strpos($decod, '..') !== false
    || strpos($decod, '\\') !== false
    || preg_match('/[\x00-\x1f\x7f]/', $decod)
    || preg_match('/[\x00-\x20\x7f"<>\\\\^`{|}]/', $query)
) {
    falhar(400, 'Endereço inválido', 'O endereço pedido não é aceito pela Central.');
}
if (preg_match('#^/_espelho(/|$)#', $resto)) falhar(404, 'Arquivo não encontrado', 'Este arquivo do espelho não existe.');

$destino = 'https://' . ORIGEM_HOST . ORIGEM_BASE . $resto . ($query !== '' ? '?' . $query : '');
$https = ehHttps();
$origemEsp = origemEspelho();

// cabeçalhos repassados (lista fechada)
$cab = ['Expect:'];
$copiar = [
    'HTTP_ACCEPT' => 'Accept', 'HTTP_ACCEPT_LANGUAGE' => 'Accept-Language', 'HTTP_USER_AGENT' => 'User-Agent',
    'HTTP_X_REQUESTED_WITH' => 'X-Requested-With', 'HTTP_IF_NONE_MATCH' => 'If-None-Match',
    'HTTP_IF_MODIFIED_SINCE' => 'If-Modified-Since', 'HTTP_RANGE' => 'Range', 'HTTP_CACHE_CONTROL' => 'Cache-Control',
];
foreach ($copiar as $chave => $nome) {
    if (isset($_SERVER[$chave]) && $_SERVER[$chave] !== '') $cab[] = $nome . ': ' . str_replace(["\r", "\n"], '', (string) $_SERVER[$chave]);
}
// Referer e Origin apontam para a origem (a Central confere de onde veio o pedido)
$baseEsp = $origemEsp . ESPELHO_BASE;
$ref = (string) ($_SERVER['HTTP_REFERER'] ?? '');
if ($ref !== '' && strncmp($ref, $baseEsp, strlen($baseEsp)) === 0) {
    $cab[] = 'Referer: https://' . ORIGEM_HOST . ORIGEM_BASE . str_replace(["\r", "\n"], '', substr($ref, strlen($baseEsp)));
}
// Origin só é trocado pelo da Central quando o pedido nasceu no próprio espelho. Pedido que grava vindo de
// outro site é recusado aqui: trocar o Origin dele anularia a conferência da Central contra pedido forjado.
if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origemPedido = strtolower(rtrim((string) $_SERVER['HTTP_ORIGIN'], '/'));
    if ($origemPedido === strtolower($origemEsp)) $cab[] = 'Origin: https://' . ORIGEM_HOST;
    elseif (!in_array($metodo, ['GET', 'HEAD'], true)) falhar(403, 'Pedido recusado', 'Este pedido não veio da Central do Assinante.');
}
if (REPASSAR_IP && !empty($_SERVER['REMOTE_ADDR']) && filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
    $cab[] = 'X-Forwarded-For: ' . $_SERVER['REMOTE_ADDR'];
}
// cookies: só os do espelho (cx_*), sem o prefixo; o primeiro de cada nome vence (Path mais específico)
$cookies = [];
foreach (explode(';', (string) ($_SERVER['HTTP_COOKIE'] ?? '')) as $par) {
    $par = trim($par);
    if (strncmp($par, PREFIXO_COOKIE, strlen(PREFIXO_COOKIE)) !== 0) continue;
    $nv = substr($par, strlen(PREFIXO_COOKIE));
    $p = strpos($nv, '=');
    if ($p === false || $p === 0) continue;
    $nome = substr($nv, 0, $p);
    if (!isset($cookies[$nome])) $cookies[$nome] = $nv;
}
if ($cookies) $cab[] = 'Cookie: ' . str_replace(["\r", "\n"], '', implode('; ', $cookies));

// corpo
$corpo = null;
if (!in_array($metodo, ['GET', 'HEAD'], true)) {
    $tam = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
    if ($tam > LIMITE_CORPO) falhar(413, 'Envio grande demais', 'O arquivo ou formulário passou do limite aceito.');
    $tipo = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
    $bruto = (string) file_get_contents('php://input', false, null, 0, LIMITE_CORPO + 1);
    if (strlen($bruto) > LIMITE_CORPO) falhar(413, 'Envio grande demais', 'O arquivo ou formulário passou do limite aceito.');
    if ($bruto === '' && stripos($tipo, 'multipart/form-data') === 0 && ($_POST || $_FILES)) {
        // o PHP já desmontou o multipart (enable_post_data_reading ligado): o cURL monta de novo com boundary próprio
        $corpo = achatar($_POST) + arquivosParaCurl($_FILES);
    } else {
        $corpo = $bruto;
        if ($tipo !== '') $cab[] = 'Content-Type: ' . str_replace(["\r", "\n"], '', $tipo);
    }
}

// chamada à origem
$cabResp = [];
$conteudo = '';
$grande = false;
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL            => $destino,
    CURLOPT_CUSTOMREQUEST  => $metodo,
    CURLOPT_HTTPHEADER     => $cab,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_ENCODING       => '',          // aceita gzip/deflate e entrega o corpo já descompactado
    CURLOPT_CONNECTTIMEOUT => TEMPO_CONEXAO,
    CURLOPT_TIMEOUT        => TEMPO_TOTAL,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_NOBODY         => $metodo === 'HEAD',
    CURLOPT_HEADERFUNCTION => static function ($c, string $linha) use (&$cabResp): int {
        $t = rtrim($linha, "\r\n");
        if (stripos($t, 'HTTP/') === 0) { $cabResp = []; return strlen($linha); } // novo bloco (100 Continue etc.)
        $p = strpos($t, ':');
        if ($p !== false) $cabResp[] = [strtolower(trim(substr($t, 0, $p))), trim(substr($t, $p + 1))];
        return strlen($linha);
    },
    CURLOPT_WRITEFUNCTION  => static function ($c, string $dados) use (&$conteudo, &$grande): int {
        if (strlen($conteudo) + strlen($dados) > LIMITE_RESPOSTA) { $grande = true; return 0; }
        $conteudo .= $dados;
        return strlen($dados);
    },
]);
if (defined('CURLOPT_PROTOCOLS_STR')) {
    curl_setopt($ch, CURLOPT_PROTOCOLS_STR, 'https');
} else {
    curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTPS);
}
// no Windows (teste local) o PHP não traz lista de certificados: usa a do sistema, sem desligar a verificação
if (PHP_OS_FAMILY === 'Windows' && defined('CURLSSLOPT_NATIVE_CA')) curl_setopt($ch, CURLOPT_SSL_OPTIONS, CURLSSLOPT_NATIVE_CA);
if ($corpo !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, $corpo);

$ok = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$erro = curl_errno($ch);
curl_close($ch);

if ($grande) falhar(502, 'Resposta grande demais', 'A Central devolveu um arquivo maior do que o espelho aceita.');
if ($ok === false || $status === 0) {
    error_log('central-espelho: falha ao falar com a origem (curl ' . $erro . ')'); // sem URL, corpo ou cookies
    $tempo = in_array($erro, [CURLE_OPERATION_TIMEDOUT], true);
    falhar(502, $tempo ? 'A Central demorou para responder' : 'A Central está fora do ar',
        'Não conseguimos falar com a Central do Assinante agora. Tente de novo em alguns minutos.');
}

// resposta
$tipoResp = '';
foreach ($cabResp as [$n, $v]) if ($n === 'content-type') $tipoResp = $v;
$ehTexto = preg_match('#^\s*(text/(html|css|javascript|plain|xml)|application/(javascript|x-javascript|ecmascript|json|xml|ld\+json|manifest\+json|problem\+json)|image/svg\+xml)#i', $tipoResp) === 1;
$ehHtml = preg_match('#^\s*text/html#i', $tipoResp) === 1;

$passar = ['content-type', 'cache-control', 'expires', 'pragma', 'last-modified', 'etag', 'content-disposition',
    'content-language', 'x-content-type-options', 'x-frame-options', 'referrer-policy', 'retry-after',
    'accept-ranges', 'content-range'];

http_response_code($status);
$temReferrer = false;
foreach ($cabResp as [$n, $v]) {
    $v = str_replace(["\r", "\n"], '', $v);
    if ($n === 'set-cookie') {
        $c = reescreverCookie($v, $https);
        if ($c !== null) header('Set-Cookie: ' . $c, false);
    } elseif ($n === 'location') {
        header('Location: ' . reescreverLocation($v, $origemEsp));
    } elseif (in_array($n, $passar, true)) {
        if ($ehTexto && in_array($n, ['etag', 'last-modified', 'content-range', 'accept-ranges'], true) && $ehHtml) continue; // HTML muda com a injeção
        if ($n === 'content-disposition' || $n === 'content-type') $v = reescreverTexto($v, $origemEsp);
        if ($n === 'referrer-policy') $temReferrer = true;
        $nomeOriginal = implode('-', array_map('ucfirst', explode('-', $n)));
        header($nomeOriginal . ': ' . $v, $n !== 'cache-control' && $n !== 'pragma');
    }
}
if (!$temReferrer) header('Referrer-Policy: strict-origin-when-cross-origin');

if ($metodo === 'HEAD' || $status === 204 || $status === 304) exit;

if ($ehTexto) {
    $conteudo = reescreverTexto($conteudo, $origemEsp);
    if ($ehHtml && preg_match('/<(?:!doctype\s+html|html|head)\b/i', substr($conteudo, 0, 2048))) {
        $dir = __DIR__ . '/_espelho/';
        $v = static fn(string $f): string => is_file($dir . $f) ? (string) filemtime($dir . $f) : '0';
        $e = ESPELHO_BASE . '/_espelho/';
        $injecao = "\n<script>window.__CASCA_CFG__=" . json_encode(cascaCfg(), JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . ";</script>\n"
            . '<script src="' . $e . 'casca-app.js?v=' . $v('casca-app.js') . '"></script>' . "\n"
            . '<link rel="stylesheet" href="' . $e . 'casca-pc.css?v=' . $v('casca-pc.css') . '">' . "\n"
            . '<script src="' . $e . 'casca-pc.js?v=' . $v('casca-pc.js') . '" defer></script>' . "\n";
        $n = 0;
        $conteudo = (string) preg_replace('/<head\b[^>]*>/i', '$0' . str_replace(['\\', '$'], ['\\\\', '\\$'], $injecao), $conteudo, 1, $n);
        if ($n === 0) $conteudo = (string) preg_replace('/<html\b[^>]*>/i', '$0' . str_replace(['\\', '$'], ['\\\\', '\\$'], $injecao), $conteudo, 1, $n);
        if ($n === 0) $conteudo = $injecao . $conteudo;
    }
}

header('Content-Length: ' . strlen($conteudo));
echo $conteudo;
