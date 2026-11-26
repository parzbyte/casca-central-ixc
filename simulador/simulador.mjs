import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { abrirNavegador, acharNavegador } from './cdp.mjs';

// Simulador: a Central do Assinante de verdade, num Chrome com janela em formato de celular, com a casca injetada
// antes dos scripts da página (como o WebView do app fará). Quem entra com a conta é a pessoa, na janela.
// --mapear: a cada rota nova grava a estrutura da tela (sem valores pessoais) e uma foto em simulador/mapa/.

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opcao = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const cfgArq = path.join(raiz, 'simulador', 'config.json');
const cfg = fs.existsSync(cfgArq) ? JSON.parse(fs.readFileSync(cfgArq, 'utf8')) : {};
const url = opcao('--url') || cfg.central_url;
if (!url) { console.error('Informe a Central: --url https://seu.provedor/central_assinante_web/ (ou central_url em simulador/config.json)'); process.exit(2); }
const largura = Number(opcao('--largura')) || Number(cfg.largura) || 390, altura = Number(opcao('--altura')) || Number(cfg.altura) || 844;
const letraApp = Number(opcao('--letra')) || 1;
const semCasca = args.includes('--sem-casca');
const mapear = args.includes('--mapear');
// --app: imita o WebView do app (user agent com WAApp/, cores do provedor e uma ponte falsa que só registra os pedidos)
const modoApp = args.includes('--app');
const corApp = opcao('--cor') || '#2563EB';
// --logo arquivo.png e --nome "Provedor": a logo e o nome do provedor, como o app passa (CFG.logo vence a da Central)
const logoApp = (() => { const f = opcao('--logo'); if (!f) return ''; const ext = path.extname(f).slice(1).toLowerCase(); return 'data:image/' + (ext === 'svg' ? 'svg+xml' : ext === 'jpg' ? 'jpeg' : ext || 'png') + ';base64,' + fs.readFileSync(f).toString('base64'); })();
const nomeApp = opcao('--nome') || '';
// --logo-branca arquivo.png (a logo toda branca do provedor) ou --logo-estilo branca (deixa a logo de sempre branca)
const logoBranca = (() => { const f = opcao('--logo-branca'); if (!f) return ''; const ext = path.extname(f).slice(1).toLowerCase(); return 'data:image/' + (ext === 'svg' ? 'svg+xml' : ext === 'jpg' ? 'jpeg' : ext || 'png') + ';base64,' + fs.readFileSync(f).toString('base64'); })();
const logoEstilo = opcao('--logo-estilo') || '';
const pastaCasca = path.join(raiz, 'casca');
const pastaMapa = path.join(raiz, 'simulador', 'mapa');
const log = (...a) => console.log(new Date().toTimeString().slice(0, 8), ...a);

// janela "como entrar" (CFG.avisoLogin). --aviso-login "texto" ou aviso_login no config.json; "" = sem janela
function avisoLogin() {
  const t = opcao('--aviso-login') ?? (cfg.aviso_login && cfg.aviso_login.texto) ?? '';
  return t ? { titulo: (cfg.aviso_login && cfg.aviso_login.titulo) || 'Primeiro acesso?', pergunta: (cfg.aviso_login && cfg.aviso_login.pergunta) || 'Quer ver como entrar na Central do Assinante?', texto: t } : null;
}

function fonteCasca() {
  const css = fs.readFileSync(path.join(pastaCasca, 'casca.css'), 'utf8');
  const js = fs.readFileSync(path.join(pastaCasca, 'casca.js'), 'utf8');
  const morph = fs.readFileSync(path.join(pastaCasca, 'morph.js'), 'utf8');
  const nova = fs.readFileSync(path.join(pastaCasca, 'casca-nova.js'), 'utf8');
  const app = modoApp ? `window.__CASCA_CFG__ = ${JSON.stringify({ primaria: corApp, app: true, ...(logoApp ? { logo: logoApp } : {}), ...(nomeApp ? { nome: nomeApp } : {}), ...(logoBranca ? { logoBranca } : {}), ...(logoEstilo ? { logoEstilo } : {}), escalaLetra: letraApp, avisoVisitante: cfg.aviso_visitante ?? 'Ainda não é nosso cliente? Toque no botão para falar com nossa equipe', avisoLogin: avisoLogin() })}; window.WAAppNativo = { postMessage: m => { (window.__pedidosApp = window.__pedidosApp || []).push(m); console.log('[app] ' + m); } };\n` : '';
  // --sorteio "Título": demonstração do sorteio do app (atalho + bilhete), entregue à casca como o app faz; nada é registrado
  const tituloSorteio = opcao('--sorteio');
  const demoSorteio = modoApp && tituloSorteio ? `\n(() => { const d = ${JSON.stringify({ ativo: true, encerrado: false, ganhou: false, bilhete: { numero: 27, em: Math.floor(Date.now() / 1000), plataforma: 'android' }, sorteio: { titulo: tituloSorteio, quando: opcao('--sorteio-quando') || new Date(Date.now() + 20 * 86400000).toISOString(), insta: '' } })};
  let n = 0; (function t() { const c = window.__cascaNova || window.__casca; if (c && c.sorteio) c.sorteio(d); else if (n++ < 60) setTimeout(t, 250); })(); })();` : '';
  return `(() => { window.__CASCA_CSS__ = ${JSON.stringify(css)}; })();\n${app}${morph}\n${js}\n${nova}${demoSorteio}`;
}

// Estrutura da tela atual, SEM valores: rotas do roteador, chaves do estado do Vue, cartões e botões.
const JS_MAPEAR = `(() => {
  const txt = e => (e && e.textContent || '').replace(/\\s+/g, ' ').trim();
  const generico = s => s.replace(/\\d[\\d.\\-\\/ ]{5,}/g, '#').slice(0, 40); // nunca números longos (CPF, valores, datas)
  const chaves = o => { try { return Object.keys(o || {}).slice(0, 80); } catch (e) { return []; } };
  const r = { url: location.pathname + location.hash, rota: null, rotas: null, app: null, componentes: [], cards: [], blocos: [], estilos: [] };
  try { if (window.router && router.history) { r.rota = router.history.current.path; r.rotas = (router.options && router.options.routes || []).map(x => ({ path: x.path, name: x.name || null, filhos: (x.children || []).map(c => c.path) })); } } catch (e) {}
  try { if (window.app) r.app = { dataKeys: chaves(app.$data), login: app.login, loading: app.loading, computedKeys: chaves(app.$options && app.$options.computed) }; } catch (e) {}
  try { for (const m of router.history.current.matched || []) { const inst = m.instances && m.instances.default; r.componentes.push({ path: m.path, nome: inst && inst.$options && (inst.$options.name || inst.$options._componentTag) || null, dataKeys: chaves(inst && inst.$data), methods: chaves(inst && inst.$options && inst.$options.methods) }); } } catch (e) {}
  for (const c of document.querySelectorAll('.card')) {
    r.cards.push({ classes: c.className.slice(0, 120), titulo: generico(txt(c.querySelector('.card-header .title, .card-header h4, .card-title'))),
      cabecalho: [...c.querySelectorAll('.card-header *')].filter(e => e.children.length === 0).map(e => e.className.slice(0, 40) + ':' + generico(txt(e))).slice(0, 12),
      botoes: [...c.querySelectorAll('button, a.btn, .btn')].map(b => ({ cls: b.className.slice(0, 60), txt: generico(txt(b)) })).slice(0, 20),
      tabelas: [...c.querySelectorAll('table')].map(t => ({ cabecalhos: [...t.querySelectorAll('th')].map(txt), linhas: t.querySelectorAll('tbody tr').length, tds: [...(t.querySelector('tbody tr') || { children: [] }).children].map(td => td.getAttribute('data-th') || td.className.slice(0, 30)) })),
      filhos: [...c.children].map(e => e.tagName.toLowerCase() + '.' + e.className.slice(0, 60)) });
  }
  for (const e of document.querySelectorAll('header, nav, footer, .navbar, .sidebar, .main-panel, .content, .wrapper, [class*="menu"], [class*="header"], [class*="footer"]')) {
    if (r.blocos.length < 40) r.blocos.push({ tag: e.tagName.toLowerCase(), cls: e.className.toString().slice(0, 100), id: e.id || null, visivel: !!e.offsetParent, textos: [...e.querySelectorAll('a, button, span')].map(x => generico(txt(x))).filter(Boolean).slice(0, 15) });
  }
  try { r.estilos = [...document.styleSheets].map(s => s.href).filter(Boolean).map(h => h.replace(location.origin, '')); } catch (e) {}
  try { r.storageKeys = { session: Object.keys(sessionStorage), local: Object.keys(localStorage) }; } catch (e) {}
  r.globais = ['app', 'router', 'HotsiteWeb', '__SERVER__', '__DADOS_CLIENTE__', '__PARAMETROS__', 'Vue', 'jQuery', 'md5', 'iziToast'].filter(g => typeof window[g] !== 'undefined');
  return r;
})()`;

const JS_ESTADO = `(() => { try { return { rota: window.router && router.history ? router.history.current.path : location.pathname + location.hash, loading: !!(window.app && app.loading), login: window.app ? app.login : null, casca: document.documentElement.getAttribute('data-casca') }; } catch (e) { return { rota: location.pathname, erro: e.message }; } })()`;

async function principal() {
  const navegador = acharNavegador();
  if (!navegador) { console.error('Nenhum Chrome/Edge encontrado.'); process.exit(1); }
  const aba = await abrirNavegador(navegador, { perfil: path.join(raiz, 'simulador', 'perfil'), largura, altura, log });
  aba.aoFechar(() => { log('Navegador fechado. Fim.'); process.exit(0); });
  // Ctrl+C / encerramento do processo fecha o Chrome também; senão ele fica preso ao perfil e o próximo start falha
  for (const s of ['SIGINT', 'SIGTERM', 'SIGHUP']) process.on(s, async () => { try { await aba.fechar(); } catch {} process.exit(0); });
  await aba.celular();
  let idInjecao = null;
  if (!semCasca) { idInjecao = await aba.injetarNoInicio(fonteCasca()); log('Casca injetada (casca.css + casca.js). Salve um deles e a página recarrega.'); }
  else log('Modo --sem-casca: a Central como ela é.');
  log('Abrindo ' + url + ' ... entre com a sua conta na janela do navegador.');
  await aba.ir(url);

  // recarrega a casca ao salvar
  if (!semCasca) {
    let t = null;
    fs.watch(pastaCasca, () => { clearTimeout(t); t = setTimeout(async () => {
      try { if (idInjecao) await aba.tirarInjecao(idInjecao); idInjecao = await aba.injetarNoInicio(fonteCasca()); await aba.recarregar(); log('casca atualizada, página recarregada.'); }
      catch (e) { log('não deu para recarregar a casca:', e.message); }
    }, 300); });
  }

  // canal de comandos: um arquivo simulador/comandos/<nome>.js é executado na página (JS puro, com await) e o
  // resultado vai para simulador/mapa/resultado-<nome>.json; o arquivo vira <nome>.js.feito
  const pastaCmd = path.join(raiz, 'simulador', 'comandos');
  fs.mkdirSync(pastaCmd, { recursive: true }); fs.mkdirSync(pastaMapa, { recursive: true });
  let rodandoCmd = false, pendenteCmd = false;
  const rodarComandos = async () => {
    if (rodandoCmd) { pendenteCmd = true; return; }
    rodandoCmd = true;
    try { await rodarComandosAgora(); } finally { rodandoCmd = false; if (pendenteCmd) { pendenteCmd = false; setTimeout(rodarComandos, 100); } }
  };
  const rodarComandosAgora = async () => {
    for (const arq of fs.readdirSync(pastaCmd).filter(a => a.endsWith('.js'))) {
      const nome = arq.slice(0, -3); const caminho = path.join(pastaCmd, arq);
      let res;
      try { res = await aba.js('(async () => { ' + fs.readFileSync(caminho, 'utf8') + '\n })()'); }
      catch (e) { res = { erro: e.message }; }
      fs.writeFileSync(path.join(pastaMapa, 'resultado-' + nome + '.json'), JSON.stringify(res, null, 2));
      try { fs.renameSync(caminho, caminho + '.feito'); } catch {}
      log('comando', nome, '->', 'simulador/mapa/resultado-' + nome + '.json', res && res.erro ? '(ERRO: ' + res.erro + ')' : '');
      if (args.includes('--foto-apos-comando')) { try { fs.writeFileSync(path.join(pastaMapa, 'foto-' + nome + '.png'), await aba.foto()); } catch {} }
    }
  };
  fs.watch(pastaCmd, () => setTimeout(rodarComandos, 200));
  setTimeout(rodarComandos, 4000); // comandos já presentes ao abrir

  // acompanha a rota; com --mapear grava estrutura + foto por rota (uma vez por rota, com a tela pronta)
  if (mapear) fs.mkdirSync(pastaMapa, { recursive: true });
  let ultima = null, mapeadas = new Set(), estavel = 0;
  setInterval(async () => {
    let e; try { e = await aba.js(JS_ESTADO); } catch { return; }
    if (!e) return;
    if (e.rota !== ultima) { ultima = e.rota; estavel = 0; log('rota:', e.rota, e.login === false ? '(logado)' : e.login === true ? '(login)' : '', 'casca=' + e.casca); }
    else estavel++;
    if (mapear && !e.loading && estavel >= 2 && !mapeadas.has(e.rota)) {
      mapeadas.add(e.rota);
      try {
        const m = await aba.js(JS_MAPEAR);
        const nome = (e.rota || '/').replace(/^.*central_assinante_web/, '').replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '') || 'raiz';
        fs.writeFileSync(path.join(pastaMapa, nome + '.json'), JSON.stringify(m, null, 2));
        fs.writeFileSync(path.join(pastaMapa, nome + (semCasca ? '-original' : '-casca') + '.png'), await aba.foto());
        log('mapa gravado: simulador/mapa/' + nome + '.json (' + m.cards.length + ' cartões, ' + m.componentes.length + ' componentes)');
      } catch (err) { log('mapa falhou em', e.rota, '-', err.message); mapeadas.delete(e.rota); }
    }
  }, 1000);
}

principal().catch(e => { console.error('Erro:', e.message); process.exit(1); });
