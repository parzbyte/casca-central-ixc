// Gera dist/casca-app.js: o CSS embutido e as duas cascas num arquivo só, para o app injetar no início da página.
// As cores e a logo do provedor entram pelo app (window.__CASCA_CFG__), não aqui.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ler = f => fs.readFileSync(path.join(raiz, 'casca', f), 'utf8');
const css = ler('casca.css');
// morphicons (MIT) e PulsoIcon (ISC) vêm antes das cascas: sem eles os ícones só não animam
const morph = ler('morph.js');
const pulso = ler('pulso.js');
// cada casca só liga na Central dela: casca.js na antiga (/central_assinante_web/), casca-nova.js na nova (/central-assinante/)
const antiga = ler('casca.js');
const nova = ler('casca-nova.js');
const pacote = `/* casca da Central do Assinante do IXC, gerado por ferramentas/empacotar.mjs; não editar */\n(function(){ if (!window.__CASCA_CSS__) window.__CASCA_CSS__ = ${JSON.stringify(css)}; })();\n${morph}\n${pulso}\n${antiga}\n${nova}\n`;
const saida = path.join(raiz, 'dist', 'casca-app.js');
fs.mkdirSync(path.dirname(saida), { recursive: true });
fs.writeFileSync(saida, pacote);
console.log('ok', saida, fs.statSync(saida).size, 'bytes');

// gerador.html: a página do gerador com a casca e os modelos do espelho dentro, para abrir direto do disco
const modelos = {};
for (const tipo of ['antiga', 'nova']) {
  modelos[tipo] = {};
  for (const f of ['index.php', '.htaccess', '.user.ini', 'casca-pc.css', 'casca-pc.js']) modelos[tipo][f] = fs.readFileSync(path.join(raiz, 'espelho', tipo, f), 'utf8');
}
const dentroDoScript = s => s.replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '<\\!--').replace(new RegExp('\\u2028', 'g'), '\\u2028').replace(new RegExp('\\u2029', 'g'), '\\u2029');
const pagina = fs.readFileSync(path.join(raiz, 'gerador', 'pagina.html'), 'utf8');
const gerarJs = fs.readFileSync(path.join(raiz, 'gerador', 'gerar.js'), 'utf8');
if (!pagina.includes('/*__ARQUIVOS__*/null') || !pagina.includes('/*__GERAR_JS__*/')) throw new Error('gerador/pagina.html sem os marcadores');
// Pix de apoio: o QR Code e o copia e cola ficam em apoie/ (o mesmo QR que o LEIAME mostra)
const pixQr = fs.readFileSync(path.join(raiz, 'apoie', 'pix-qr.svg'), 'utf8').replace(/<title>.*?<\/title>/, '').replace('<svg ', '<svg role="img" aria-label="QR Code do Pix" ');
const pixCopia = fs.readFileSync(path.join(raiz, 'apoie', 'pix-copia-e-cola.txt'), 'utf8').trim();
if (!/^000201.*6304[0-9A-F]{4}$/.test(pixCopia) || /['\\]/.test(pixCopia)) throw new Error('apoie/pix-copia-e-cola.txt inválido');
const html = pagina
  .replace('/*__ARQUIVOS__*/null', () => dentroDoScript(JSON.stringify({ casca: pacote, modelos })))
  .replace('/*__GERAR_JS__*/', () => dentroDoScript(gerarJs))
  .replace('<!--__PIX_QR__-->', () => pixQr)
  .replace('/*__PIX_COPIA__*/', () => pixCopia);
const saidaHtml = path.join(raiz, 'gerador.html');
fs.writeFileSync(saidaHtml, html);
console.log('ok', saidaHtml, fs.statSync(saidaHtml).size, 'bytes');
