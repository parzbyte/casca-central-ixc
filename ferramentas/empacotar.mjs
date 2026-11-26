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
const saida = process.argv[2] || path.join(raiz, 'dist', 'casca-app.js');
fs.mkdirSync(path.dirname(saida), { recursive: true });
fs.writeFileSync(saida, `/* casca da Central do Assinante do IXC, gerado por ferramentas/empacotar.mjs; não editar */\n(function(){ if (!window.__CASCA_CSS__) window.__CASCA_CSS__ = ${JSON.stringify(css)}; })();\n${morph}\n${pulso}\n${antiga}\n${nova}\n`);
console.log('ok', saida, fs.statSync(saida).size, 'bytes');
