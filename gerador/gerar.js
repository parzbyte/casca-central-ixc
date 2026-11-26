// Monta a pasta do espelho (Central do IXC com a casca) a partir do link da Central, da logo e da cor.
// Roda no navegador (gerador.html) e no Node (testes): não usa nada além de JavaScript puro.
(function (raiz) {
  const HEX = /^#[0-9a-f]{6}$/i;
  const HOST = /^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;
  const LOGOS = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/svg+xml': 'svg' };

  const TIPOS = {
    antiga: { pasta: 'central_assinante_web', espelho: '/central_assinante_web', nome: 'Central antiga do IXC (a azul, /central_assinante_web/)' },
    nova: { pasta: 'central', espelho: '/central', nome: 'Central nova do IXC (/central-assinante/)' },
  };

  // tipo da Central pelo caminho do link: a antiga fica em /central_assinante_web/, a nova em /central-assinante/
  function centralDoLink(link) {
    let u; try { u = new URL(String(link || '').trim()); } catch (e) { return null; }
    if (u.protocol !== 'https:' || !HOST.test(u.hostname)) return null;
    const p = u.pathname;
    if (/\/central_assinante_web(\/|$)/.test(p)) return { tipo: 'antiga', host: u.host, base: '/central_assinante_web' };
    const m = /^(.*?\/central-assinante)(\/|$)/.exec(p);
    if (m) return { tipo: 'nova', host: u.host, base: m[1] };
    return null;
  }

  function misturar(hex, com, quanto) {
    const a = hex.slice(1).match(/../g).map(x => parseInt(x, 16)), b = com.slice(1).match(/../g).map(x => parseInt(x, 16));
    return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * quanto).toString(16).padStart(2, '0')).join('');
  }

  // domínios do site onde a pasta vai ficar, com e sem www
  function lerHosts(texto) {
    const l = String(texto || '').split(/[\s,;]+/).map(h => h.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/[/?#].*$/, '')).filter(Boolean);
    const ruins = l.filter(h => !HOST.test(h));
    if (ruins.length) throw new Error('Endereço do site inválido: ' + ruins.join(', ') + '. Escreva só o domínio, por exemplo provedor.com.br.');
    const todos = [];
    for (const h of l) for (const v of [h, h.startsWith('www.') ? h.slice(4) : 'www.' + h]) if (!todos.includes(v)) todos.push(v);
    return todos;
  }

  const phpAspas = s => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const jsonSeguro = o => JSON.stringify(o).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  const troca = (s, mapa) => s.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => { if (!(k in mapa)) throw new Error('Modelo com marcador desconhecido: ' + k); return mapa[k]; });

  // dados: { central, nome, cor, site, logo: { tipo, bytes: Uint8Array }, logoBranca, semCartao, hoje }
  // arquivos: { casca: texto de dist/casca-app.js, modelos: { antiga: {...}, nova: {...} } }
  // devolve { tipo, pasta, entradas: [{ nome, dados: string | Uint8Array }], cfg }
  function gerar(dados, arquivos) {
    const info = centralDoLink(dados.central);
    if (!info) throw new Error('O link precisa ser da Central do Assinante do IXC, começando com https:// e com /central_assinante_web/ (antiga) ou /central-assinante/ (nova) no caminho.');
    const T = TIPOS[info.tipo], M = arquivos.modelos[info.tipo];
    const nome = String(dados.nome || '').replace(/\*\//g, '').replace(/[\r\n]+/g, ' ').trim().slice(0, 60);
    if (!nome) throw new Error('Escreva o nome do provedor.');
    const cor = String(dados.cor || '').trim();
    if (!HEX.test(cor)) throw new Error('A cor precisa estar no formato #RRGGBB.');
    const hosts = lerHosts(dados.site);
    if (!hosts.length) throw new Error('Escreva o domínio do site onde a Central vai ficar, por exemplo provedor.com.br.');
    const ext = dados.logo && LOGOS[dados.logo.tipo];
    if (!ext || !dados.logo.bytes || !dados.logo.bytes.length) throw new Error('Envie a logo em PNG, JPG, WebP ou SVG.');
    if (dados.logo.bytes.length > 1024 * 1024) throw new Error('A logo passou de 1 MB. Use uma versão menor.');
    const extBranca = dados.logoBranca && LOGOS[dados.logoBranca.tipo];
    if (dados.logoBranca && (!extBranca || dados.logoBranca.bytes.length > 1024 * 1024)) throw new Error('A logo branca precisa ser PNG, JPG, WebP ou SVG de até 1 MB.');

    const cfg = { primaria: cor, nome, logo: T.espelho + '/_espelho/logo.' + ext };
    if (extBranca) cfg.logoBranca = T.espelho + '/_espelho/logo-branca.' + extBranca;
    else if (dados.logoEstiloBranca) cfg.logoEstilo = 'branca';
    if (dados.semCartao) cfg.cartao = false;

    const php = troca(M['index.php'], {
      NOME: nome, GERADO_EM: dados.hoje || new Date().toISOString().slice(0, 10), ORIGEM_HOST: info.host, ORIGEM_BASE: info.base,
      ESPELHO_BASE: T.espelho, HOSTS_PHP: '[' + hosts.map(h => "'" + phpAspas(h) + "'").join(', ') + ']',
      CFG_JSON: phpAspas(jsonSeguro(cfg)), COR: cor,
    });

    let casca = arquivos.casca;
    if (info.tipo === 'nova') {
      // a Central nova fica no site em /central/: a casca dela passa a reconhecer esse caminho
      casca = casca.replace(/\/central-assinante(?![\w-])/g, '/central');
      if (!/const BASE = '\/central';/.test(casca)) throw new Error('A casca da Central nova mudou: confira casca-nova.js antes de gerar.');
    } else if (!/\/central_assinante_web/.test(casca)) throw new Error('A casca da Central antiga mudou: confira casca.js antes de gerar.');

    const funda = misturar(cor, '#000000', 0.45), fim = misturar(funda, '#111111', 0.55);
    const css = ':root { --esp-funda: ' + funda + '; --esp-fim: ' + fim + '; --esp-acento: ' + cor + '; }\n' + M['casca-pc.css'];
    const P = T.pasta + '/', E = P + '_espelho/';
    const entradas = [
      { nome: P + 'index.php', dados: php },
      { nome: P + '.htaccess', dados: M['.htaccess'] },
      { nome: P + '.user.ini', dados: M['.user.ini'] },
      { nome: E + 'casca-app.js', dados: casca },
      { nome: E + 'casca-pc.css', dados: css },
      { nome: E + 'casca-pc.js', dados: M['casca-pc.js'] },
      { nome: E + 'logo.' + ext, dados: dados.logo.bytes },
    ];
    if (extBranca) entradas.push({ nome: E + 'logo-branca.' + extBranca, dados: dados.logoBranca.bytes });
    return { tipo: info.tipo, tipoNome: T.nome, pasta: T.pasta, hosts, entradas, cfg, endereco: 'https://' + hosts[0].replace(/^www\./, '') + T.espelho + '/' };
  }

  // ZIP sem compressão (método "store"): o bastante para uma pasta pequena e sem depender de biblioteca
  const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc32 = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  function zip(entradas) {
    const enc = new TextEncoder(), partes = [], central = [];
    let pos = 0;
    const d = new Date(), hora = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1), dia = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    for (const e of entradas) {
      const nome = enc.encode(e.nome), dados = typeof e.dados === 'string' ? enc.encode(e.dados) : e.dados, crc = crc32(dados);
      const loc = new DataView(new ArrayBuffer(30));
      loc.setUint32(0, 0x04034b50, true); loc.setUint16(4, 20, true); loc.setUint16(6, 0x0800, true); loc.setUint16(8, 0, true);
      loc.setUint16(10, hora, true); loc.setUint16(12, dia, true); loc.setUint32(14, crc, true);
      loc.setUint32(18, dados.length, true); loc.setUint32(22, dados.length, true); loc.setUint16(26, nome.length, true); loc.setUint16(28, 0, true);
      const cen = new DataView(new ArrayBuffer(46));
      cen.setUint32(0, 0x02014b50, true); cen.setUint16(4, 20, true); cen.setUint16(6, 20, true); cen.setUint16(8, 0x0800, true); cen.setUint16(10, 0, true);
      cen.setUint16(12, hora, true); cen.setUint16(14, dia, true); cen.setUint32(16, crc, true); cen.setUint32(20, dados.length, true); cen.setUint32(24, dados.length, true);
      cen.setUint16(28, nome.length, true); cen.setUint32(42, pos, true);
      partes.push(new Uint8Array(loc.buffer), nome, dados); central.push(new Uint8Array(cen.buffer), nome);
      pos += 30 + nome.length + dados.length;
    }
    const tamCentral = central.reduce((s, p) => s + p.length, 0);
    const fim = new DataView(new ArrayBuffer(22));
    fim.setUint32(0, 0x06054b50, true); fim.setUint16(8, entradas.length, true); fim.setUint16(10, entradas.length, true);
    fim.setUint32(12, tamCentral, true); fim.setUint32(16, pos, true);
    const tudo = [...partes, ...central, new Uint8Array(fim.buffer)], saida = new Uint8Array(tudo.reduce((s, p) => s + p.length, 0));
    let o = 0; for (const p of tudo) { saida.set(p, o); o += p.length; }
    return saida;
  }

  raiz.GeradorCasca = { centralDoLink, gerar, zip, lerHosts, TIPOS, LOGOS };
})(typeof window !== 'undefined' ? window : globalThis);
