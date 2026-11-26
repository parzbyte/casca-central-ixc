// Gerador da casca: monta a pasta do espelho para a Central antiga e a nova e confere o .zip, o PHP e os erros.
// Rodar depois de node ferramentas/empacotar.mjs. Com o PHP instalado, também confere a sintaxe e sobe o espelho.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import http from 'node:http';
import { execFileSync, spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gerador-casca-'));
let falhas = 0, total = 0;
const ok = (c, nome, extra) => { total++; if (!c) falhas++; console.log((c ? '  ok  ' : '  FALHA  ') + nome + (c || extra === undefined ? '' : ' -> ' + JSON.stringify(extra).slice(0, 300))); };

const ctx = {}; vm.createContext(Object.assign(ctx, { TextEncoder, URL, globalThis: ctx }));
vm.runInContext(fs.readFileSync(path.join(raiz, 'gerador', 'gerar.js'), 'utf8'), ctx);
const G = ctx.GeradorCasca;

const modelos = {};
for (const t of ['antiga', 'nova']) { modelos[t] = {}; for (const f of ['index.php', '.htaccess', '.user.ini', 'casca-pc.css', 'casca-pc.js']) modelos[t][f] = fs.readFileSync(path.join(raiz, 'espelho', t, f), 'utf8'); }
const casca = fs.readFileSync(path.join(raiz, 'dist', 'casca-app.js'), 'utf8');
const A = { casca, modelos };
const PNG = new Uint8Array(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'));
const base = { nome: "Rede D'Teste */", cor: '#7A1FA2', site: 'redeteste.com.br', logo: { tipo: 'image/png', bytes: PNG }, hoje: '2026-11-26' };
const txt = d => typeof d === 'string' ? d : Buffer.from(d).toString('utf8');
let php = ''; try { execFileSync('php', ['-v'], { stdio: 'ignore' }); php = 'php'; } catch {}

// lê o .zip gerado (método store) para conferir que abre
function lerZip(b) {
  const buf = Buffer.from(b), fim = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  const n = buf.readUInt16LE(fim + 10), off = buf.readUInt32LE(fim + 16), saida = {};
  let p = off;
  for (let i = 0; i < n; i++) {
    const tam = buf.readUInt32LE(p + 20), nl = buf.readUInt16LE(p + 28), loc = buf.readUInt32LE(p + 42), nome = buf.subarray(p + 46, p + 46 + nl).toString('utf8');
    const lnl = buf.readUInt16LE(loc + 26), lex = buf.readUInt16LE(loc + 28);
    saida[nome] = buf.subarray(loc + 30 + lnl + lex, loc + 30 + lnl + lex + tam);
    p += 46 + nl + buf.readUInt16LE(p + 30) + buf.readUInt16LE(p + 32);
  }
  return saida;
}

console.log('1. Tipo da Central pelo link');
ok(G.centralDoLink('https://ixc.p.com.br/central_assinante_web/')?.tipo === 'antiga', 'Central antiga');
ok(G.centralDoLink('https://p.com.br/central-assinante/login')?.tipo === 'nova', 'Central nova');
ok(G.centralDoLink('https://p.com.br/sub/central-assinante/')?.base === '/sub/central-assinante', 'Central nova em subpasta');
ok(G.centralDoLink('http://ixc.p.com.br/central_assinante_web/') === null, 'sem https: recusa');
ok(G.centralDoLink('https://p.com.br/') === null, 'sem caminho da Central: recusa');
ok(G.centralDoLink("https://p.com.br/x';file_put_contents('p',1);//central-assinante/") === null && G.centralDoLink('https://p.com.br/a$b/central-assinante/') === null, 'caminho com aspa ou código PHP: recusa');

console.log('2. Central antiga');
const a = G.gerar(Object.assign({ central: 'https://ixc.redeteste.com.br/central_assinante_web/', logoEstiloBranca: true, semCartao: true }, base), A);
const za = lerZip(G.zip(a.entradas));
const nomesA = Object.keys(za).sort();
ok(JSON.stringify(nomesA) === JSON.stringify(['central_assinante_web/.htaccess', 'central_assinante_web/.user.ini', 'central_assinante_web/_espelho/casca-app.js', 'central_assinante_web/_espelho/casca-pc.css', 'central_assinante_web/_espelho/casca-pc.js', 'central_assinante_web/_espelho/logo.png', 'central_assinante_web/index.php']), 'zip abre com a pasta inteira', nomesA);
const phpA = za['central_assinante_web/index.php'].toString('utf8');
ok(!/\{\{[A-Z_]+\}\}/.test(phpA), 'nenhum marcador sobrando no PHP');
ok(phpA.includes("const ORIGEM_HOST   = 'ixc.redeteste.com.br';") && phpA.includes("const ESPELHO_BASE  = '/central_assinante_web';"), 'origem e caminho do espelho');
ok(phpA.includes("['redeteste.com.br', 'www.redeteste.com.br']"), 'domínio com e sem www');
ok(!/CHAT|casca-chat/.test(phpA), 'sem chat');
ok(Buffer.compare(za['central_assinante_web/_espelho/logo.png'], Buffer.from(PNG)) === 0, 'logo igual à enviada');
ok(a.cfg.primaria === '#7A1FA2' && a.cfg.logoEstilo === 'branca' && a.cfg.cartao === false && a.cfg.logo === '/central_assinante_web/_espelho/logo.png', 'configuração da casca', a.cfg);
ok(/--esp-acento: #7A1FA2/.test(za['central_assinante_web/_espelho/casca-pc.css'].toString('utf8')), 'cor no CSS de PC');
ok(a.endereco === 'https://redeteste.com.br/central_assinante_web/', 'endereço final', a.endereco);

console.log('3. Central nova');
const n = G.gerar(Object.assign({ central: 'https://redeteste.com.br/central-assinante/' }, base), A);
const zn = lerZip(G.zip(n.entradas));
const cascaN = zn['central/_espelho/casca-app.js'].toString('utf8');
ok(n.pasta === 'central' && !!zn['central/index.php'], 'pasta /central/');
ok(/const BASE = '\/central';/.test(cascaN) && !/\/central-assinante(?![\w-])/.test(cascaN), 'casca da Central nova aponta para /central');
ok(/central_assinante_web/.test(cascaN), 'casca da Central antiga continua no pacote');
const phpN = zn['central/index.php'].toString('utf8');
ok(phpN.includes("const ORIGEM_BASE   = '/central-assinante';"), 'origem da Central nova');

console.log('4. Erros');
const erro = d => { try { G.gerar(Object.assign({}, base, { central: 'https://ixc.redeteste.com.br/central_assinante_web/' }, d), A); return ''; } catch (e) { return e.message; } };
ok(/link precisa/.test(erro({ central: 'https://redeteste.com.br/' })), 'link que não é da Central');
ok(/formato #RRGGBB/.test(erro({ cor: 'roxo' })), 'cor inválida');
ok(/domínio|Endereço do site/.test(erro({ site: 'meu site' })), 'domínio inválido');
ok(/domínio do site/.test(erro({ site: '' })), 'sem domínio');
ok(/Envie a logo/.test(erro({ logo: null })), 'sem logo');
ok(/1 MB/.test(erro({ logo: { tipo: 'image/png', bytes: new Uint8Array(1024 * 1024 + 1) } })), 'logo grande demais');
ok(/nome do provedor/.test(erro({ nome: '  ' })), 'sem nome');

console.log('5. Nome com aspas e */ não quebra o PHP');
ok(!phpA.includes("D'Teste */") && phpA.includes("D\\'Teste"), 'aspas escapadas e */ tirado');

if (php) {
  console.log('6. PHP');
  for (const [z, pasta] of [[za, 'central_assinante_web'], [zn, 'central']]) {
    const d = path.join(tmp, 'site', pasta); fs.mkdirSync(path.join(d, '_espelho'), { recursive: true });
    for (const [nome, dados] of Object.entries(z)) fs.writeFileSync(path.join(tmp, 'site', nome), dados);
    let valido = true; try { execFileSync(php, ['-l', path.join(d, 'index.php')], { stdio: 'ignore' }); } catch { valido = false; }
    ok(valido, 'sintaxe do PHP (' + pasta + ')');
  }
  // sobe o espelho da Central antiga com o servidor do PHP: a origem de teste não existe, então ele tem que responder
  // com a página de "fora do ar" (sem vazar erro do PHP) e recusar caminho com ".."
  const porta = 8795, srv = spawn(php, ['-S', '127.0.0.1:' + porta, path.join(tmp, 'site', 'central_assinante_web', 'index.php')], { cwd: path.join(tmp, 'site'), stdio: 'ignore' });
  const pedir = c => new Promise(r => http.get({ host: '127.0.0.1', port: porta, path: c, headers: { Host: 'redeteste.com.br' } }, res => { let b = ''; res.on('data', x => b += x); res.on('end', () => r({ s: res.statusCode, b })); }).on('error', () => r({ s: 0, b: '' })));
  let r = { s: 0 }; for (let i = 0; i < 30 && !r.s; i++) { await new Promise(x => setTimeout(x, 200)); r = await pedir('/central_assinante_web/'); }
  ok(r.s === 502 && /fora do ar|demorou/.test(r.b) && !/Fatal|Warning|Notice/.test(r.b), 'origem fora do ar: página amigável', { s: r.s, b: r.b.slice(0, 200) });
  r = await pedir('/central_assinante_web/%2e%2e/x');
  ok(r.s === 400, 'caminho com ".." recusado', r.s);
  r = await pedir('/outra-coisa/');
  ok(r.s === 404, 'fora da Central: 404', r.s);
  srv.kill();
} else console.log('(sem PHP no computador: pulei a sintaxe e o teste do servidor)');

fs.rmSync(tmp, { recursive: true, force: true });
console.log(falhas ? `\n${falhas} de ${total} falharam.` : `\nTUDO OK (${total} verificações).`);
process.exitCode = falhas ? 1 : 0;
