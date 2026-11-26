// Casca da Central NOVA do IXC (/central-assinante/, páginas do servidor com Bootstrap/jQuery). Mesmo visual da
// casca da Central antiga (casca.css), outro motor: aqui cada tela é um endereço, então a casca lê o HTML que veio do
// servidor e desenha a tela dela por cima; as ações usam as funções da própria Central (objPaymentBill,
// objIXCDownloadPdf, Helper) ou os endereços dela. Mapa das telas: docs/central-nova.md.
(() => {
  if (window.__cascaNova) return;
  if (location.pathname.indexOf('/central-assinante') !== 0) return;
  // A tabela de faturas da Central (DataTables) abre um alert() quando não carrega o arquivo de tradução; o alerta trava a
  // página até alguém tocar em OK. Só esse aviso técnico é engolido; os outros alertas da Central continuam normais.
  try {
    const alertaOriginal = window.alert;
    window.alert = function (m) { if (/^DataTables warning/i.test(String(m || ''))) { try { console.warn(String(m)); } catch (e) {} return; } return alertaOriginal.apply(this, arguments); };
  } catch (e) {}
  const VERSAO = 'nova-1';
  const CFG = Object.assign({ primaria: '#2563EB', nome: '' }, window.__CASCA_CFG__ || {});

  // logo branca no topo colorido (pedido do provedor): CFG.logoBranca = arquivo da logo toda branca; CFG.logoEstilo = 'branca'
  // deixa a logo de sempre branca. Nos dois casos a logo fica maior e sem a caixa branca em volta.
  const marcarLogo = () => { try { if ((CFG.logoBranca || CFG.logoEstilo === 'branca') && !document.documentElement.hasAttribute('data-casca-logo')) document.documentElement.setAttribute('data-casca-logo', CFG.logoBranca ? 'arquivo' : 'branca'); } catch (e) {} };
  marcarLogo();
  const APP = !!CFG.app || /WAApp\//.test(navigator.userAgent || '');
  // textos trocados pelo provedor (CFG.textos); vazio = o texto padrão
  const TX = (CFG.textos && typeof CFG.textos === 'object') ? CFG.textos : {};
  const tx = (k, padrao) => (typeof TX[k] === 'string' && TX[k].trim()) ? TX[k].trim().slice(0, 80) : padrao;
  const txe = (k, padrao) => esc(tx(k, padrao));
  const BASE = '/central-assinante';
  const rota = () => (location.pathname.slice(BASE.length) || '/').replace(/\/+$/, '') || '/';

  // cores (mesma conta da casca antiga)
  const hex = c => { const m = /^#?([0-9a-f]{6})$/i.exec(String(c || '')); return m ? m[1] : '04863d'; };
  const misturar = (c, alvo, t) => '#' + [0, 2, 4].map(i => Math.round(parseInt(hex(c).substr(i, 2), 16) * (1 - t) + alvo * t).toString(16).padStart(2, '0')).join('');
  CFG.primariaEscura = CFG.primariaEscura || misturar(CFG.primaria, 0, 0.28);
  CFG.primariaClara = CFG.primariaClara || misturar(CFG.primaria, 255, 0.88);

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const txt = e => (e && e.textContent || '').replace(/\s+/g, ' ').trim();
  const avisarApp = o => { try { if (window.WAAppNativo) { window.WAAppNativo.postMessage(JSON.stringify(o)); return true; } } catch (e) {} return false; };
  const ir = c => { if (c === 'sair' || c === '/sair') return sair(); location.href = BASE + c; };
  // a barra de cima da Central (com o "Sair") fica escondida: a casca abre o aviso de saída da própria Central
  const sair = () => {
    const m = document.querySelector('#logoutModal');
    if (m && window.bootstrap && bootstrap.Modal) { if (m.closest('#wrapper')) document.body.appendChild(m); return bootstrap.Modal.getOrCreateInstance(m).show(); } // o aviso mora dentro do #wrapper, que a casca esconde
    const f = document.querySelector('form[action$="/logout"]');
    if (f && confirm('Sair da conta?')) { esquecerCredenciais(); f.submit(); }
  };
  // o aviso de saída da própria Central envia o formulário de logout: sair apaga o login guardado no app
  document.addEventListener('submit', e => { if (e.target && e.target.matches && e.target.matches('form[action$="/logout"]')) esquecerCredenciais(); }, true);

  // aparelhos conectados ao roteador (ACS): tela própria só quando a página veio no formato conhecido
  const ehRede = r => /^\/conectados\/\d+$/.test(r) && !!document.querySelector('.card-device, .connect-device');
  // endereço que a Central põe na barra ao abrir "Alterar dispositivo"; aberto direto, é uma página não encontrada
  const ROTA_ALTERAR = '/dispositivos-conexoes/alterar';
  // lista dos roteadores do cliente (ACS), de onde se chega aos aparelhos conectados
  const ehRoteadores = r => r === '/dispositivos-conexoes' && !!document.querySelector('.card-device');
  // telas próprias; o resto aparece na moldura (página original com o nosso cabeçalho)
  const PROPRIAS = r => r === '/' || r === '/inicio' || r === '/faturas' || /^\/fatura\/\d+\/pagamento$/.test(r) || /^\/faturas\/\d+\/pagamento\/(pix|boleto)$/.test(r) || ehRede(r) || ehRoteadores(r);
  const TITULOS = [[/^\/meu-plano/, 'Meu plano'], [/^\/suporte\/novo-atendimento/, 'Novo atendimento'], [/^\/suporte/, 'Atendimento'], [/^\/notas-fiscais/, 'Notas fiscais'],
    [/^\/consumo/, 'Consumo'], [/^\/relatorios/, 'Relatórios'], [/^\/configuracoes/, 'Meus dados'], [/^\/teste-velocidade/, 'Teste de velocidade'], [/^\/faturas/, 'Minhas faturas']];

  // visual: casca.css com as cores do provedor + o pedaço desta Central
  const CSS_NOVA = `
html[data-casca-nova] body { background: var(--casca-fundo) !important; }
html[data-casca-nova="propria"] #wrapper { display: none !important; }
html[data-casca-nova="moldura"] #accordionSidebar, html[data-casca-nova="moldura"] .topbar, html[data-casca-nova="moldura"] footer.sticky-footer, html[data-casca-nova="moldura"] .scroll-to-top { display: none !important; }
html[data-casca-nova="moldura"] #content-wrapper { background: var(--casca-fundo) !important; }
html[data-casca-nova="moldura"] #content > .container-fluid { padding: 14px 16px 24px !important; }
html[data-casca-nova="moldura"] #content iframe { height: calc(100dvh - 65px) !important; flex: none !important; }
html[data-casca-nova] #content .card { border-radius: 18px !important; border: 1px solid var(--casca-borda) !important; box-shadow: var(--casca-sombra) !important; }
html[data-casca-nova] #content .btn.button-primary, html[data-casca-nova] #content .btn-primary { background: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; color: #fff !important; border-radius: 999px !important; }
html[data-casca-nova] #content .btn.button-secondary, html[data-casca-nova] .modal .btn.button-secondary { border-radius: 999px !important; background: #fff !important; color: var(--casca-primaria-escura) !important; border: 1.5px solid var(--casca-primaria) !important; }
html[data-casca-nova] .modal .btn.button-primary, html[data-casca-nova] .modal .btn-primary { border-radius: 999px !important; background: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; color: #fff !important; }
html[data-casca-nova] .modal-content { border-radius: 22px !important; border: 0 !important; }
html[data-casca-nova] .modal-footer { gap: 10px; } html[data-casca-nova] .modal-footer > * { margin: 0 !important; }
html[data-casca-nova] #content .btn.button-secondary svg, html[data-casca-nova] #content .btn.button-secondary i { color: var(--casca-primaria) !important; fill: currentColor; }
html[data-casca-nova-boot] body { visibility: hidden !important; }
.casca-cartao-op[hidden] { display: none !important; }
/* entrada (deslogado): etapa 1 é tela da casca; senha/cadastro só com o tema */
html[data-casca-nova="login"] body > *:not(#casca-login):not(#casca-avisos):not(.toast-container):not(.toast) { visibility: hidden !important; }
html[data-casca-nova="login"] .toast-container, html[data-casca-nova="login"] .toast, html[data-casca-nova] #casca-avisos { z-index: 3000 !important; }
/* a Central anima todo <circle> da página (o spinner dela); os ícones da casca ficam de fora */
#casca-raiz svg circle, #casca-login svg circle, .casca-folha svg circle, #casca-avisos svg circle { animation: none !important; stroke: currentColor !important; stroke-width: 2px !important; stroke-dasharray: none !important; stroke-dashoffset: 0 !important; }
.casca-login-erro { background: #FDECEC; color: #A61B1B; border-radius: 14px; padding: 12px 14px; font-size: 14px; font-weight: 600; line-height: 1.35; }
#casca-login a.casca-btn { text-decoration: none; display: flex; justify-content: center; align-items: center; }
html[data-casca-nova="entrada"] body { font-family: 'Inter', system-ui, sans-serif !important; background: #f6f7f9 !important; }
html[data-casca-nova="entrada"] h1 { font-weight: 700 !important; letter-spacing: -0.02em; }
html[data-casca-nova="entrada"] .btn.button-primary, html[data-casca-nova="entrada"] .btn-primary { background: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; color: #fff !important; border-radius: 999px !important; padding: 12px 24px !important; font-weight: 600 !important; justify-content: center; }
html[data-casca-nova="entrada"] .btn.button-secondary { background: #fff !important; color: var(--casca-primaria-escura) !important; border: 1.5px solid var(--casca-primaria) !important; border-radius: 999px !important; }
html[data-casca-nova="entrada"] .form-control { border-radius: 14px !important; padding: 12px 14px !important; font-size: 16px !important; }
html[data-casca-nova="entrada"] .form-control:focus { border-color: var(--casca-primaria) !important; box-shadow: 0 0 0 3px var(--casca-primaria-clara) !important; }
html[data-casca-nova="entrada"] .form-check-input:checked { background-color: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; }
html[data-casca-nova="entrada"] a { color: var(--casca-primaria-escura); }
html[data-casca-nova="entrada"] header { background: var(--casca-primaria) !important; padding: calc(18px + env(safe-area-inset-top)) 0 44px !important; border-radius: 0 0 28px 28px; box-shadow: none !important; }
html[data-casca-nova="entrada"] header img { max-height: 40px; width: auto; }
html[data-casca-nova="entrada"] header img:not(.casca-logo-provedor) { filter: brightness(0) invert(1); }
html[data-casca-nova="entrada"] header img.casca-logo-provedor { background: #fff; border-radius: 12px; padding: 5px 10px; max-height: 44px; }
html[data-casca-logo][data-casca-nova="entrada"] header img.casca-logo-provedor { background: none; padding: 0; max-height: 48px; }
html[data-casca-logo="branca"][data-casca-nova="entrada"] header img.casca-logo-provedor { filter: brightness(0) invert(1); }
html[data-casca-nova="entrada"] header a, html[data-casca-nova="entrada"] header a:visited { color: #fff !important; font-weight: 600; text-decoration: none !important; line-height: 40px; }
html[data-casca-nova="entrada"] footer.footer-ini, html[data-casca-nova="entrada"] .custom-col, html[data-casca-nova="entrada"] .business, html[data-casca-nova="entrada"] .img-ini, html[data-casca-nova="entrada"] .country-icons { display: none !important; }
html[data-casca-nova="entrada"] .recovery-orientation, html[data-casca-nova="entrada"] .login-contents { background: #fff; border-radius: 24px; box-shadow: 0 12px 40px rgba(17,17,17,0.10); padding: 24px 20px !important; margin: -28px 4px 24px !important; width: auto !important; max-width: 560px; }
html[data-casca-nova="entrada"] .recovery-orientation h1, html[data-casca-nova="entrada"] .login-contents h1 { font-size: 24px !important; }
html[data-casca-nova="entrada"] .recovery-orientation p, html[data-casca-nova="entrada"] .login-contents p { color: #5b5f66; font-size: 15px; }
html[data-casca-nova="entrada"] .container > .row > [class*="col-"].mt-5 { margin-top: 0 !important; }
html[data-casca-nova="entrada"] .btn-recovery .btn, html[data-casca-nova="entrada"] .recovery-orientation .btn, html[data-casca-nova="entrada"] .login-contents .btn { width: 100% !important; display: flex !important; justify-content: center; align-items: center; }
html[data-casca-nova="entrada"] header { padding-bottom: 60px !important; height: auto !important; }
html[data-casca-nova="entrada"] .recovery-orientation form { margin-bottom: 0 !important; }
html[data-casca-nova="entrada"] .recovery-orientation, html[data-casca-nova="entrada"] .login-contents { height: auto !important; min-height: 0 !important; margin-top: -32px !important; }
html[data-casca-nova="entrada"] .recovery-orientation > :first-child, html[data-casca-nova="entrada"] .login-contents > :first-child { margin-top: 0 !important; padding-top: 0 !important; }
html[data-casca-nova="entrada"] .recovery-orientation .mb-5, html[data-casca-nova="entrada"] .login-contents .mb-5 { margin-bottom: 20px !important; }
html[data-casca-nova="entrada"] .recovery-orientation form, html[data-casca-nova="entrada"] .recovery-orientation .login-form, html[data-casca-nova="entrada"] .btn-recovery { margin-top: 12px !important; padding-top: 0 !important; }
html[data-casca-nova="entrada"] .btn-recovery > [class*="col-"] { margin-bottom: 10px !important; }
html[data-casca-nova="entrada"] :is(h1, h2, h3, h4, p, label, input, select, textarea, button, a, span, strong, small) { font-family: inherit !important; }
html[data-casca-nova="entrada"] input[type=radio], html[data-casca-nova="entrada"] input[type=checkbox] { accent-color: var(--casca-primaria); }
html[data-casca-nova="entrada"] .form-check-input:checked[type=radio] { background-color: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; }
html[data-casca-nova="entrada"] .recovery-orientation .mt-5, html[data-casca-nova="entrada"] .recovery-orientation .my-5 { margin-top: 16px !important; }
html[data-casca-nova="entrada"] .recovery-orientation .mb-5, html[data-casca-nova="entrada"] .recovery-orientation .my-5 { margin-bottom: 16px !important; }
html[data-casca-nova="entrada"] .link-underscore-recover { float: none !important; display: inline-block; margin-top: 8px; }
#casca-raiz a.casca-link { color: var(--casca-primaria-escura); }
html[data-casca-nova="propria"] #casca-raiz.casca-nova-raiz { min-height: 100vh; padding-bottom: ${APP ? 24 : 96}px; }
/* aparelhos conectados (ACS) */
#casca-raiz .casca-rede-resumo { flex-direction: row; align-items: center; gap: 14px; background: var(--casca-primaria); border-color: transparent; color: #fff; }
#casca-raiz .casca-rede-resumo .casca-sub { color: rgba(255,255,255,.82); }
#casca-raiz .casca-rede-resumo strong { font-size: 16px; display: block; }
#casca-raiz .casca-rede-num { font-size: 44px; font-weight: 800; line-height: 1; letter-spacing: -.03em; font-variant-numeric: tabular-nums; }
#casca-raiz .casca-rede-resumo.vazio { background: var(--casca-cartao); border-color: var(--casca-borda); color: var(--casca-texto); }
#casca-raiz .casca-rede-resumo.vazio .casca-sub { color: var(--casca-texto-2); }
#casca-raiz .casca-rede-txt { flex: 1; min-width: 0; display: block; }
#casca-raiz .casca-rede-vivo { width: 12px; height: 12px; border-radius: 50%; background: #3DDC84; box-shadow: 0 0 0 0 rgba(61,220,132,.7); animation: casca-rede-pulso 2s ease-out infinite; flex: 0 0 auto; margin-right: 4px; }
@keyframes casca-rede-pulso { to { box-shadow: 0 0 0 12px rgba(61,220,132,0); } }
#casca-raiz .casca-rede-lista { padding: 4px 16px; gap: 0; }
#casca-raiz .casca-rede-item + .casca-rede-item { border-top: 1px solid var(--casca-borda); }
#casca-raiz .casca-rede-item > summary { list-style: none; display: flex; align-items: center; gap: 12px; padding: 12px 0; cursor: pointer; min-height: 44px; }
#casca-raiz .casca-rede-item > summary::-webkit-details-marker { display: none; }
#casca-raiz .casca-rede-item > summary::after { content: ""; width: 8px; height: 8px; border-right: 2px solid var(--casca-texto-3); border-bottom: 2px solid var(--casca-texto-3); transform: rotate(45deg); transition: transform .18s ease; flex: 0 0 auto; margin: -4px 4px 0 0; }
#casca-raiz .casca-rede-item[open] > summary::after { transform: rotate(-135deg); margin-top: 4px; }
#casca-raiz .casca-rede-item strong { display: block; font-size: 15.5px; font-weight: 700; overflow-wrap: anywhere; }
#casca-raiz .casca-rede-item dl { margin: 0 0 12px 54px; padding: 10px 12px; background: var(--casca-fundo); border-radius: 12px; display: grid; gap: 6px; }
#casca-raiz .casca-rede-item dl > div { display: flex; justify-content: space-between; gap: 12px; font-size: 13px; }
#casca-raiz .casca-rede-item dt { color: var(--casca-texto-2); font-weight: 500; flex: 0 0 auto; }
#casca-raiz .casca-rede-item dd { margin: 0; font-weight: 600; text-align: right; overflow-wrap: anywhere; }
/* roteadores (ACS) */
#casca-raiz .casca-roteador { gap: 12px; }
#casca-raiz .casca-roteador-cab { display: flex; align-items: center; gap: 12px; }
#casca-raiz .casca-roteador-cab strong { display: block; font-size: 16px; font-weight: 700; overflow-wrap: anywhere; }
#casca-raiz .casca-pilula { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 999px; font-size: 12.5px; font-weight: 700; }
#casca-raiz .casca-pilula::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
#casca-raiz .casca-pilula.on { background: var(--casca-ok-claro); color: var(--casca-ok); }
#casca-raiz .casca-pilula.off { background: #FDECEC; color: #B3261E; }
#casca-raiz .casca-roteador-local { display: flex; gap: 8px; align-items: flex-start; font-size: 13px; line-height: 1.4; color: var(--casca-texto-2); }
#casca-raiz .casca-roteador-local svg { width: 16px !important; height: 16px !important; flex: 0 0 auto; margin-top: 1px; }
#casca-raiz .casca-roteador-aviso { margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--casca-aviso-claro); color: var(--casca-aviso); font-size: 13px; line-height: 1.4; }
#casca-raiz .casca-roteador-acoes { display: flex; gap: 8px; flex-wrap: wrap; }
#casca-raiz .casca-roteador-acoes .casca-btn { flex: 1 1 140px; padding: 0 12px; font-size: 14px; }
html[data-casca-nova] #modalChangeDevice .modal-content { border: 0 !important; border-radius: 24px !important; padding: 6px 4px 8px !important; font-family: var(--casca-fonte) !important; }
html[data-casca-nova] #modalChangeDevice .modal-title { font-size: 19px !important; font-weight: 800 !important; font-family: var(--casca-fonte) !important; }
html[data-casca-nova] #modalChangeDevice hr { display: none !important; }
html[data-casca-nova] #modalChangeDevice .modal-content { height: auto !important; max-height: none !important; overflow: visible !important; }
html[data-casca-nova] #modalChangeDevice .modal-header { border-bottom: 0 !important; padding-bottom: 4px !important; }
html[data-casca-nova] #modalChangeDevice .modal-body { height: auto !important; max-height: none !important; overflow: visible !important; padding-bottom: 14px !important; }
html[data-casca-nova] #modalChangeDevice .form-label { font-size: 13.5px !important; font-weight: 700 !important; color: var(--casca-texto-2) !important; margin-bottom: 6px !important; font-family: var(--casca-fonte) !important; }
html[data-casca-nova] #modalChangeDevice .form-select, html[data-casca-nova] #modalChangeDevice .form-control { min-height: 50px !important; border-radius: 14px !important; border: 1px solid var(--casca-borda) !important; font-size: 16px !important; font-family: var(--casca-fonte) !important; box-shadow: none !important; }
html[data-casca-nova] #modalChangeDevice .form-select:focus, html[data-casca-nova] #modalChangeDevice .form-control:focus { border-color: var(--casca-primaria) !important; box-shadow: 0 0 0 3px var(--casca-primaria-clara) !important; }
html[data-casca-nova] #modalChangeDevice .form-select:disabled { background-color: var(--casca-fundo) !important; color: var(--casca-texto) !important; opacity: 1 !important; }
html[data-casca-nova] #modalChangeDevice .modal-body p { font-size: 12.5px !important; line-height: 1.45 !important; color: var(--casca-texto-3) !important; }
html[data-casca-nova] #modalChangeDevice .btn.button-primary { width: 100% !important; min-height: 50px !important; border-radius: 999px !important; font-weight: 700 !important; font-size: 16px !important; }
#casca-pix .casca-folha-txt { margin: 0 0 14px; font-size: 14.5px; line-height: 1.5; color: var(--casca-texto-2); }
#casca-pix .casca-folha-txt ~ .casca-btn + .casca-btn { margin-top: 8px; }
@media (prefers-reduced-motion: reduce) { #casca-raiz .casca-rede-vivo { animation: none; } #casca-raiz .casca-rede-item > summary::after { transition: none; } }
`;
  const aplicarCss = () => {
    let st = $('#casca-css'); if (!st) { st = document.createElement('style'); st.id = 'casca-css'; (document.head || document.documentElement).appendChild(st); }
    const css = (window.__CASCA_CSS__ || '').replace(/%%PRIMARIA%%/g, CFG.primaria).replace(/%%PRIMARIA_ESCURA%%/g, CFG.primariaEscura).replace(/%%PRIMARIA_CLARA%%/g, CFG.primariaClara) + CSS_NOVA;
    if (st.textContent !== css) st.textContent = css;
    if (!$('#casca-fonte')) { const l = document.createElement('link'); l.id = 'casca-fonte'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'; (document.head || document.documentElement).appendChild(l); }
  };
  // até desenhar, a página original fica invisível nas telas próprias (sem "piscar"); rede de segurança de 6 s
  // injetada no começo da página, ainda pode não existir o <html>: marca assim que ele aparecer
  const quandoHtml = fn => { if (document.documentElement) return fn(); const ob = new MutationObserver(() => { if (document.documentElement) { ob.disconnect(); fn(); } }); ob.observe(document, { childList: true, subtree: true }); };
  // o estilo vai aqui, no começo da página: o CSS completo só entra quando a casca desenha, tarde demais para esconder o original
  quandoHtml(() => {
    const h = document.documentElement; h.setAttribute('data-casca-nova-boot', '');
    const sb = document.createElement('style'); sb.id = 'casca-nova-boot';
    sb.textContent = 'html[data-casca-nova-boot]{background:#F4F4F2!important}html[data-casca-nova-boot] body{visibility:hidden!important}'
      + 'html[data-casca-nova-boot]::after{content:"";position:fixed;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:4px solid #EEE;border-top-color:' + CFG.primaria + ';animation:cascaNovaBoot .8s linear infinite}'
      + '@keyframes cascaNovaBoot{to{transform:rotate(360deg)}}';
    h.appendChild(sb);
    setTimeout(() => h.removeAttribute('data-casca-nova-boot'), 6000);
  });

  // ícones (os mesmos da casca antiga)
  const svg = d => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  const ICONE = {
    fatura: svg('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'),
    contrato: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
    nota: svg('<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>'),
    consumo: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    chat: svg('<path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12z"/>'),
    relatorio: svg('<path d="M4 4h16v16H4z"/><path d="M8 16V11M12 16V8M16 16v-3"/>'),
    presente: svg('<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M7.5 8a2.5 2.5 0 1 1 4.5-1.5A2.5 2.5 0 1 1 16.5 8"/>'),
    wifi: svg('<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0"/><circle cx="12" cy="19.5" r="1"/>'),
    velocidade: svg('<path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14" r="1.5"/>'),
    sair: svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>'),
    pessoa: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
    voltar: svg('<path d="M15 6l-6 6 6 6"/>'),
    pix: svg('<path d="M12 2l4 4-4 4-4-4z"/><path d="M12 14l4 4-4 4-4-4z"/><path d="M2 12l4-4 4 4-4 4z"/><path d="M14 12l4-4 4 4-4 4z"/>'),
    pdf: svg('<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>'),
    cartao: svg('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'),
    copiar: svg('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'),
    fechar: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    ok: svg('<path d="M5 12l5 5L20 7"/>'),
    alerta: svg('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'),
    // aparelhos da rede (tela "Aparelhos conectados")
    tv: svg('<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),
    pc: svg('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20M9.5 16.5l-.5 3.5M14.5 16.5l.5 3.5"/>'),
    celular: svg('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>'),
    tablet: svg('<rect x="4" y="2.5" width="16" height="19" rx="2.5"/><path d="M11 18.5h2"/>'),
    console: svg('<path d="M7 8h10a5 5 0 0 1 4.9 4l.9 4.4a2.3 2.3 0 0 1-4 2L16.5 16h-9l-2.3 2.4a2.3 2.3 0 0 1-4-2l.9-4.4A5 5 0 0 1 7 8z"/><path d="M7 11v3M5.5 12.5h3M15.5 12.5h.01M18 11.5h.01"/>'),
    impressora: svg('<path d="M7 8V3h10v5"/><rect x="3" y="8" width="18" height="9" rx="2"/><path d="M7 14h10v7H7z"/>'),
    casa: svg('<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 15.5a3.5 3.5 0 0 1 5 0M12 18h.01"/>'),
    maquininha: svg('<rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M9 6h6v4H9zM9.5 14h.01M12 14h.01M14.5 14h.01M9.5 17h.01M12 17h.01M14.5 17h.01"/>'),
    aparelho: svg('<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M9 20h6M12 16v4"/><path d="M9.5 11.5a3.5 3.5 0 0 1 5 0M12 13.3h.01"/>'),
    atualizar: svg('<path d="M20 11a8 8 0 0 0-14.3-4.5L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.5l1.7-2M20 20v-4.5h-4.5"/>'),
    roteador: svg('<rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 16.5h.01M10.5 16.5h.01M9 9.5a4.5 4.5 0 0 1 6 0M6.5 7a8 8 0 0 1 11 0M12 13v-1.5"/>'),
    chave: svg('<circle cx="8" cy="15" r="4.5"/><path d="M11.3 11.7L20 3M16.5 6.5l3 3M14 9l2 2"/>'),
    local: svg('<path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  };
  // ícones animados (PulsoIcon, casca/pulso.js): mesmo nome, desenho novo que anima no toque; sem o pacote, ficam os de cima
  const PI = window.WAIcones;
  if (PI) try { for (const k of Object.keys(ICONE)) { const m = PI.marcacao(k); if (m) ICONE[k] = m; } PI.observar(); } catch (e) {}

  // avisos curtos
  // mesmo formato dos avisos da casca antiga (casca.css: .casca-aviso ok / erro / info)
  function aviso(titulo, texto, cor) {
    let box = $('#casca-avisos'); if (!box) { box = document.createElement('div'); box.id = 'casca-avisos'; box.setAttribute('aria-live', 'polite'); document.body.appendChild(box); }
    const tipo = cor === 'green' ? 'ok' : cor === 'red' ? 'erro' : 'info';
    const el = document.createElement('div'); el.className = 'casca-aviso ' + tipo;
    el.innerHTML = '<span class="casca-ico">' + (tipo === 'ok' ? ICONE.ok : ICONE.alerta) + '</span><span class="casca-aviso-txt"><strong>' + esc(titulo) + '</strong><span>' + esc(texto) + '</span></span><button aria-label="Fechar">' + ICONE.fechar + '</button>';
    el.querySelector('button').onclick = () => el.remove();
    box.innerHTML = ''; box.appendChild(el);
    setTimeout(() => { el.classList.add('saindo'); setTimeout(() => el.remove(), 300); }, 4000);
  }
  const copiar = (texto, msg) => {
    const ok = () => aviso('Copiado', msg, 'green');
    const falha = () => aviso('Não deu para copiar', 'Toque e segure no código para copiar.', 'red');
    const planoB = () => { try { const t = document.createElement('textarea'); t.value = texto; t.readOnly = true; t.style.cssText = 'position:fixed;top:0;left:0;opacity:0'; document.body.appendChild(t); t.select(); t.setSelectionRange(0, texto.length); const fez = document.execCommand('copy'); t.remove(); fez ? ok() : falha(); } catch (e) { falha(); } };
    try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(ok, planoB); else planoB(); } catch (e) { planoB(); }
  };

  // dados lidos das páginas do servidor
  const nomeCliente = (d = document) => { const t = txt($('.topbar', d) || d.body); const m = /Ol[aá],\s*([^\n]+?)(?:\s{2,}|Sair|$)/i.exec(t); return m ? m[1].trim() : ''; };
  const primeiroNome = s => { const p = String(s || '').trim().split(/\s+/)[0] || ''; return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase(); };
  const logo = () => { if (CFG.logoBranca) return CFG.logoBranca; if (CFG.logo) return CFG.logo; const i = $('#accordionSidebar img'); return i ? i.getAttribute('src') : ''; }; // logo do app vence a da Central (empresa ligada)
  const idDe = s => { const m = /\/(?:fatura|faturas|print-bill)\/(\d+)/.exec(String(s || '')); return m ? m[1] : ''; };
  // linhas da tabela de faturas (#billing-table): status, valor, vencimento e o id (do botão Pagar/Imprimir)
  const lerFaturas = d => $$('#billing-table tbody tr', d).map(tr => {
    const c = $$('td', tr); const acoes = $$('button, a', tr).map(b => (b.getAttribute('onclick') || '') + ' ' + (b.getAttribute('href') || '')).join(' ');
    return { status: txt(c[0]), valor: txt(c[1]), venc: txt(c[2]), id: idDe(acoes) };
  }).filter(f => f.id);
  // cada Central escreve de um jeito: "Em aberto", "A vencer", "A pagar", "Vencido", "Atrasada", "Pago", "Recebido"…
  const statusDe = f => { const t = String(f.status || '');
    if (/vencid|atras/i.test(t)) return 'vencida';
    if (/abert|a vencer|a pagar|pendent|emitid|aguard/i.test(t)) return vencida(f.venc) ? 'vencida' : 'aberta';
    if (/pag|receb|quit|liquid|baixad/i.test(t)) return 'paga';
    return 'neutro'; };
  const vencida = v => { const m = /(\d{2})\/(\d{2})\/(\d{4})/.exec(v || ''); return m ? new Date(+m[3], +m[2] - 1, +m[1], 23, 59) < new Date() : false; };
  const ROTULO = { vencida: 'Vencida', aberta: 'Em aberto', paga: 'Paga', neutro: '' };
  const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const mesDe = v => { const m = /(\d{2})\/(\d{2})\/(\d{4})/.exec(v || ''); return m ? MESES[+m[2] - 1] + ' de ' + m[3] : ''; };
  const etiqueta = st => ROTULO[st] ? '<span class="casca-etiqueta ' + st + '">' + ROTULO[st] + '</span>' : '';
  const buscarPagina = async caminho => { const r = await fetch(BASE + caminho, { credentials: 'include' }); if (!r.ok) throw new Error('http ' + r.status); return new DOMParser().parseFromString(await r.text(), 'text/html'); };

  // montagem
  let raiz = null;
  const montarRaiz = () => { raiz = $('#casca-raiz'); if (!raiz) { raiz = document.createElement('div'); raiz.id = 'casca-raiz'; raiz.className = 'casca-nova-raiz'; document.body.insertBefore(raiz, document.body.firstChild); } return raiz; };
  const cabecalho = (titulo, voltar) => '<div class="casca-cab-pagina"><a class="casca-icone-btn" data-ir="' + (voltar || '/inicio') + '" aria-label="Voltar">' + ICONE.voltar + '</a><h1>' + esc(titulo) + '</h1><span class="casca-icone-btn" style="visibility:hidden"></span></div>';

  // menu: os links da barra lateral da Central vão para o "Mais" do app (sem o ☰ no app)
  const menuDaCentral = () => $$('#accordionSidebar a[href^="' + BASE + '/"]').map(a => ({ r: '!' + a.getAttribute('href').slice(BASE.length), t: txt(a) })).filter(x => x.t && !/^!\/(inicio|faturas)?$/.test(x.r)).concat($('form[action$="/logout"]') ? [{ r: '!sair', t: 'Sair' }] : []);

  // atalhos do Início: os mesmos itens da barra lateral da Central (o que o provedor liga no IXC aparece aqui também);
  // sem barra lateral legível, os de sempre
  const iconeDe = t => /fatura|boleto|financ/i.test(t) ? 'fatura' : /plano|contrato/i.test(t) ? 'contrato' : /nota/i.test(t) ? 'nota'
    : /consumo|extrato/i.test(t) ? 'consumo' : /suporte|atendimento|chamado|ticket/i.test(t) ? 'chat' : /dispositiv|conex|wi-?fi|roteador|rede/i.test(t) ? 'wifi'
    : /velocidade|speed/i.test(t) ? 'velocidade' : /relat|declara/i.test(t) ? 'relatorio' : 'contrato';
  const ATALHOS_PADRAO = [['/faturas', 'Faturas'], ['/meu-plano', 'Meu plano'], ['/notas-fiscais', 'Notas fiscais'], ['/consumo', 'Consumo'], ['/suporte', 'Suporte'], ['/relatorios', 'Relatórios']];
  const atalhosDaCentral = nFaturas => {
    const vistos = {};
    let l = $$('#accordionSidebar a[href^="' + BASE + '/"]').map(a => [a.getAttribute('href').slice(BASE.length).replace(/[?#].*$/, '').replace(/\/$/, ''), txt(a)])
      .filter(x => x[0] && x[1] && !/^\/(inicio|configuracoes|sair|logout)?$/.test(x[0]) && !vistos[x[0]] && (vistos[x[0]] = 1));
    if (l.length < 2) l = ATALHOS_PADRAO;
    // semSuporte: quando o app já tem o atendimento próprio, o Suporte da Central sai dos atalhos
    if (APP && CFG.semSuporte) l = l.filter(x => !/^\/suporte/.test(x[0]));
    const r = l.map(x => [x[0], x[1], iconeDe(x[1] + ' ' + x[0]), /^\/faturas$/.test(x[0]) ? nFaturas : 0]);
    if (APP) r.push(['!atendimento', 'Atendimento', 'chat', 0]); // no app, o chat é a aba nativa
    return r;
  };

  let sessaoEnviada = '';
  // logado no app: entrega o jwt ao app nativo (para o app usar a mesma sessão, se quiser)
  const avisarSessao = () => {
    if (!APP) return;
    let jwt = ''; try { jwt = localStorage.getItem('ixc_jwt') || ''; } catch (e) {}
    if (/^[\w-]+\.[\w-]+\.[\w-]+$/.test(jwt) && jwt !== sessaoEnviada) { sessaoEnviada = jwt; avisarApp({ acao: 'central_sessao', sessao: jwt }); }
  };

  async function telaInicio() {
    const nome = primeiroNome(nomeCliente());
    let fats = [], falhou = false;
    try { const d = await buscarPagina('/faturas'); if ($('input[type=password]', d)) falhou = true; else fats = lerFaturas(d); } catch (e) { falhou = true; } // tela de login no lugar das faturas: a sessão venceu
    const abertas = fats.filter(f => statusDe(f) !== 'paga' && statusDe(f) !== 'neutro');
    const f = abertas[0] || null, st = f ? statusDe(f) : '';
    const atalhos = atalhosDaCentral(abertas.length);
    const lg = logo();
    return '<div class="casca-topo"><div class="casca-topo-linha">' + (lg ? '<span class="casca-logo"><img src="' + esc(lg) + '" alt=""></span>' : '<span class="casca-logo-nome">' + esc(CFG.nome || '') + '</span>')
      + '<span class="casca-topo-botoes"><a class="casca-icone-btn" data-ir="/configuracoes" aria-label="Meus dados">' + ICONE.pessoa + '</a><a class="casca-icone-btn" data-ir="sair" aria-label="Sair">' + ICONE.sair + '</a></span></div>'
      + '<div class="casca-ola"><span>Olá,</span><strong>' + esc(nome || 'cliente') + '</strong></div></div><div class="casca-corpo">'
      + (f ? '<div class="casca-card casca-fatura ' + st + '"><div class="casca-fatura-cab"><div><span class="casca-rotulo">Fatura de ' + esc(mesDe(f.venc) || 'referência') + '</span><span class="casca-valor">' + esc(f.valor) + '</span><span class="casca-sub">' + (st === 'vencida' ? 'Venceu em ' : 'Vence em ') + esc(f.venc) + '</span></div>' + etiqueta(st) + '</div>'
          + '<div class="casca-botoes"><a class="casca-btn pri" data-ir="/fatura/' + f.id + '/pagamento?casca=pix">' + ICONE.pix + txe('pix', 'Pagar com PIX') + '</a>' + '<details class="casca-outras"><summary>' + txe('outras', 'Outras formas de pagamento') + '</summary><div class="casca-outras-itens">' + '<a class="casca-btn sec" data-ir="/fatura/' + f.id + '/pagamento?casca=boleto">' + ICONE.pdf + txe('boleto', 'Boleto') + '</a>' + opcaoCartao(f.id) + '</div></details>' + '</div>'
          + (abertas.length > 1 ? '<a class="casca-mais" data-ir="/faturas">Ver as ' + abertas.length + ' faturas em aberto</a>' : '') + '</div>'
        : falhou ? '<div class="casca-card casca-vazio">' + ICONE.alerta + '<strong>Não deu para carregar suas faturas</strong><span class="casca-sub">Confira a internet e tente de novo.</span><a class="casca-btn sec" data-ir="/faturas">Ver minhas faturas</a></div>'
        : '<div class="casca-card casca-vazio">' + ICONE.ok + '<strong>Tudo em dia</strong><span class="casca-sub">Nenhuma fatura em aberto</span></div>')
      + '<div class="casca-grade">' + atalhos.map(a => '<a class="casca-atalho" data-ir="' + esc(a[0]) + '"><span class="casca-ico">' + ICONE[a[2]] + '</span><span>' + txe('atalho:' + a[0], a[1]) + '</span>' + (tx('atalhoSub:' + a[0], '') ? '<small class="casca-atalho-sub">' + txe('atalhoSub:' + a[0], '') + '</small>' : '') + (a[3] ? '<b class="casca-badge">' + a[3] + '</b>' : '') + '</a>').join('') + '</div></div>';
  }

  // Cartão: o formulário é o da própria Central (parcelas, recorrência e captcha ficam com ela; a casca nunca toca nos dados
  // do cartão). A opção só aparece quando a Central do provedor tem o botão de cartão na página de pagamento.
  // Quando a Central oferece a recorrência no cartão (a caixa "pagamento recorrente" do formulário), o botão diz isso.
  const temRecorrencia = d => !!$('[data-display-method-content="credit_card"]', d) && (/recorr[eê]n/i.test(((($('#content', d) || d.body || {}).textContent) || '')) || !!$('#flexCheckDefault', d));
  const rotuloCartao = rec => tx('cartao', rec ? 'Cartão de crédito (recorrência)' : 'Cartão de crédito');
  const CARTAO_LIGADO = CFG.cartao !== false;
  const opcaoCartao = id => '<a class="casca-btn sec casca-cartao-op" hidden data-id="' + id + '" data-ir="/fatura/' + id + '/pagamento?casca=cartao">' + ICONE.cartao + '<span class="casca-cartao-rot">' + esc(rotuloCartao(false)) + '</span></a>';
  async function revelarCartao() {
    const ops = $$('.casca-cartao-op'); if (!ops.length) return;
    let tem = ''; try { tem = sessionStorage.getItem('cascaNovaCartao2') || ''; } catch (e) {}
    if (!tem) {
      try { const d = await buscarPagina('/fatura/' + ops[0].getAttribute('data-id') + '/pagamento'); tem = $('[data-display-method-content="credit_card"]', d) ? (temRecorrencia(d) ? 'R' : 'S') : 'N'; } catch (e) { return; }
      try { sessionStorage.setItem('cascaNovaCartao2', tem); } catch (e) {}
    }
    if (CARTAO_LIGADO && (tem === 'S' || tem === 'R')) ops.forEach(o => { o.hidden = false; const r = $('.casca-cartao-rot', o); if (r) r.textContent = rotuloCartao(tem === 'R'); });
  }
  function abrirCartao() {
    const bt = $('[data-display-method-content="credit_card"]'); if (!bt) return;
    document.documentElement.setAttribute('data-casca-nova', 'moldura');
    raiz.innerHTML = cabecalho(rotuloCartao(temRecorrencia(document)), location.pathname.slice(BASE.length));
    bt.click();
    if (bt.parentElement) bt.parentElement.style.display = 'none'; // os botões de PIX e boleto da Central saem da frente
  }

  function telaFaturas() {
    const fats = lerFaturas(document);
    let html = cabecalho(tx('tituloFaturas', 'Minhas faturas')) + '<div class="casca-corpo">';
    if (!fats.length) html += '<div class="casca-card casca-vazio">' + ICONE.ok + '<strong>Tudo em dia</strong><span class="casca-sub">Nenhuma fatura em aberto</span></div>';
    fats.forEach(f => {
      const st = statusDe(f), aberta = st === 'vencida' || st === 'aberta';
      html += '<div class="casca-card casca-fatura-item ' + st + '"><div class="casca-fatura-cab"><div><strong>' + esc(mesDe(f.venc) ? mesDe(f.venc).replace(/^./, c => c.toUpperCase()) : 'Fatura') + '</strong><span class="casca-sub">' + (st === 'vencida' ? 'Venceu em ' : st === 'paga' ? 'Paga · venc. ' : 'Vence em ') + esc(f.venc) + '</span></div><div class="casca-dir"><span class="casca-valor-sm">' + esc(f.valor) + '</span>' + etiqueta(st) + '</div></div>'
        + (aberta ? '<div class="casca-acoes-fatura"><div class="casca-acao-col"><a class="casca-btn pri" data-ir="/fatura/' + f.id + '/pagamento?casca=pix">' + ICONE.pix + txe('pix', 'Pagar com PIX') + '</a><a class="casca-link" data-ir="/fatura/' + f.id + '/pagamento?casca=copiarpix">' + ICONE.copiar + txe('copiarPix', 'Copiar PIX') + '</a></div>'
          + '<details class="casca-outras"><summary>' + txe('outras', 'Outras formas de pagamento') + '</summary><div class="casca-outras-itens">' + '<div class="casca-acao-col"><a class="casca-btn sec" data-ir="/fatura/' + f.id + '/pagamento?casca=boleto">' + ICONE.pdf + txe('boleto', 'Boleto') + '</a><button class="casca-link" data-acao="copiar-boleto" data-id="' + f.id + '">' + ICONE.copiar + txe('copiarBoleto', 'Copiar código') + '</button></div>' + opcaoCartao(f.id) + '</div></details>' + '</div>' : '')
        + '</div>';
    });
    // os filtros da Central (contrato e status) continuam valendo: "Ver faturas pagas" usa o mesmo endereço
    html += '<a class="casca-mais" data-ir="/faturas/status=R">' + txe('verPagas', 'Ver faturas pagas') + '</a>';
    return html + '<p class="casca-nota">' + txe('notaFaturas', 'Pagou e ainda aparece em aberto? O banco pode levar até 1 dia útil para avisar o provedor.') + '</p></div>';
  }

  // aparelhos conectados ao roteador (página /conectados/<id> da Central, dados do ACS)
  // A Central lista tudo o que o roteador já viu, com "Unknown" e linhas vazias. Aqui aparecem só os que estão
  // conectados agora, com um nome que a pessoa entende e um ícone do tipo de aparelho (deduzido do nome e do fabricante).
  const MARCAS = [[/giga-?byte/i, 'Gigabyte'], [/asus/i, 'Asus'], [/micro-star/i, 'MSI'], [/hewlett|^hp\b/i, 'HP'], [/dell/i, 'Dell'], [/motorola/i, 'Motorola'], [/lenovo/i, 'Lenovo'],
    [/samsung/i, 'Samsung'], [/xiaomi/i, 'Xiaomi'], [/apple/i, 'Apple'], [/^lg\b/i, 'LG'], [/tcl/i, 'TCL'], [/sony/i, 'Sony'], [/intelbras/i, 'Intelbras'], [/intel/i, 'Intel'], [/realtek/i, 'Realtek'],
    [/tp-?link/i, 'TP-Link'], [/^pax\b/i, 'PAX'], [/espressif/i, 'Espressif'], [/amazon/i, 'Amazon'], [/google/i, 'Google'], [/huawei/i, 'Huawei'], [/positivo/i, 'Positivo'], [/multilaser/i, 'Multilaser'],
    [/philco/i, 'Philco'], [/hisense/i, 'Hisense'], [/roku/i, 'Roku'], [/nintendo/i, 'Nintendo'], [/microsoft/i, 'Microsoft'], [/epson/i, 'Epson'], [/canon/i, 'Canon'], [/realme/i, 'Realme'], [/oppo/i, 'Oppo'], [/tuya/i, 'Tuya'], [/hikvision/i, 'Hikvision'], [/acer/i, 'Acer']];
  const marcaDe = fab => { fab = String(fab || '').trim(); if (!fab) return ''; const m = MARCAS.find(x => x[0].test(fab)); if (m) return m[1];
    const p = fab.replace(/[,(].*$/, '').replace(/\b(co|ltd|inc|corp|corporation|company|technology|technologies|electronics|limited|llc|gmbh)\b\.?/ig, '').trim().split(/\s+/).slice(0, 2).join(' ');
    return p ? p.toLowerCase().replace(/(^|[\s-])\S/g, c => c.toUpperCase()).slice(0, 22) : ''; };
  const TIPOS = { tv: 'TV', console: 'Videogame', tablet: 'Tablet', celular: 'Celular', pc: 'Computador', impressora: 'Impressora', maquininha: 'Maquininha de cartão', casa: 'Casa inteligente', aparelho: 'Aparelho' };
  const tipoDe = (nome, fab) => {
    if (/tv\b|webos|bravia|roku|chromecast|fire ?tv|tizen|smart ?tv|tv ?box|mi ?box/i.test(nome) || /lg innotek|^tcl|hisense|roku|vizio|skyworth/i.test(fab)) return 'tv';
    if (/playstation|\bps[345]\b|xbox|nintendo|switch/i.test(nome) || /nintendo|sony interactive/i.test(fab)) return 'console';
    if (/ipad|tablet|\btab\b|galaxy ?tab/i.test(nome)) return 'tablet';
    if (/iphone|android|galaxy|redmi|\bpoco|\bmoto|xiaomi|pixel|phone|celular|\bsm-|huawei|realme|oppo/i.test(nome) || /motorola mobility|xiaomi|oppo|vivo mobile|realme|oneplus|huawei device|hmd global/i.test(fab)) return 'celular';
    if (/desktop|laptop|notebook|\bpc\b|macbook|imac|thinkpad|ideapad|inspiron/i.test(nome) || /giga-?byte|asustek|micro-star|\bdell\b|hewlett|intel corp|realtek|liteon|azurewave|hon hai|\bacer\b|positivo|compal|quanta|wistron/i.test(fab)) return 'pc';
    if (/printer|impressora|epson|canon|brother|deskjet|laserjet|^hp[0-9a-f]{6}/i.test(nome) || /epson|canon|brother/i.test(fab)) return 'impressora';
    if (/^pax\b|ingenico|verifone|gertec/i.test(fab)) return 'maquininha';
    if (/alexa|\becho\b|google ?home|\bnest\b|\bcam|lampada|\bplug\b|tuya|\besp[-_]?\d|sonoff/i.test(nome) || /espressif|tuya|hikvision|dahua|intelbras|amazon tech|sonoff/i.test(fab)) return 'casa';
    return 'aparelho';
  };
  function lerAparelhos(doc) {
    return $$('.card-device', doc).map(c => {
      const campo = rot => { const d = $$('.device-content .d-flex', c).find(x => txt($('.text-item', x)).toLowerCase().indexOf(rot) === 0); return d ? txt($('.text-item-result', d)) : ''; };
      const bruto = txt($('h4', c)), fab = campo('fabricante'), con = campo('conex');
      const semNome = !bruto || /^(unknown|desconhecido|\*|-|n\/?a)$/i.test(bruto);
      const tipo = tipoDe(semNome ? '' : bruto, fab), marca = marcaDe(fab);
      return { on: !!$('.status-on', c), tipo, marca, semNome, fab, ip: campo('endereço ip'), mac: campo('endereço mac'), cabo: !!con && !/wireless|wi-?fi|wlan/i.test(con),
        nome: !semNome ? bruto : tipo !== 'aparelho' ? TIPOS[tipo] + (marca ? ' ' + marca : '') : marca ? 'Aparelho ' + marca : 'Aparelho sem nome' };
    });
  }
  function telaConectados() {
    const todos = lerAparelhos(document), on = todos.filter(a => a.on), fora = todos.length - on.length;
    let html = cabecalho(tx('tituloRede', 'Aparelhos conectados'), '/dispositivos-conexoes') + '<div class="casca-corpo casca-rede">';
    html += '<div class="casca-card casca-rede-resumo' + (on.length ? '' : ' vazio') + '"><span class="casca-rede-num">' + on.length + '</span><div class="casca-rede-txt"><strong>' + (on.length === 1 ? 'aparelho conectado agora' : 'aparelhos conectados agora') + '</strong><span class="casca-sub">'
      + (on.length ? 'Usando a sua internet neste momento' : 'Nenhum aparelho está usando a sua internet neste momento') + '</span></div>' + (on.length ? '<span class="casca-rede-vivo" aria-hidden="true"></span>' : '') + '</div>';
    if (on.length) {
      html += '<div class="casca-card casca-rede-lista">';
      on.forEach(a => {
        const sub = [a.semNome ? (a.tipo === 'aparelho' ? 'Não informou o nome' : '') : a.tipo === 'aparelho' ? '' : TIPOS[a.tipo], a.semNome ? '' : a.marca, a.cabo ? 'Cabo' : 'Wi-Fi'].filter(Boolean).join(' · ');
        const linha = (r, v) => v ? '<div><dt>' + r + '</dt><dd>' + esc(v) + '</dd></div>' : '';
        html += '<details class="casca-rede-item"><summary><span class="casca-ico">' + ICONE[a.tipo] + '</span><span class="casca-rede-txt"><strong>' + esc(a.nome) + '</strong><span class="casca-sub">' + esc(sub) + '</span></span></summary>'
          + '<dl>' + linha('Fabricante', a.fab) + linha('Conexão', a.cabo ? 'Cabo de rede' : 'Wi-Fi') + linha('Endereço IP', a.ip) + linha('Endereço MAC', a.mac) + '</dl></details>';
      });
      html += '</div>';
    }
    html += '<a class="casca-btn sec largo" data-acao="recarregar">' + ICONE.atualizar + 'Atualizar lista</a>';
    return html + '<p class="casca-nota">' + (fora ? (fora === 1 ? 'Outro aparelho já usou a sua rede e está desconectado agora. ' : 'Outros ' + fora + ' aparelhos já usaram a sua rede e estão desconectados agora. ') : '')
      + 'Não reconhece algum aparelho? Troque a senha do seu Wi-Fi.</p></div>';
  }

  // roteadores do cliente (página /dispositivos-conexoes da Central)
  // Cada roteador vira um cartão com a situação e as três ações da Central à vista (na original ficam escondidas
  // atrás de um toque no nome). As ações continuam sendo as da Central: a casca só aciona os botões originais.
  function lerRoteadores(doc) {
    return $$('.card-device', doc).map(c => {
      const campo = rot => { const d = $$('.device-content .d-flex', c).find(x => txt($('.text-item', x)).toLowerCase().indexOf(rot) === 0); return d ? txt($('.text-item-result', d)) : ''; };
      const link = $('a[href*="/conectados/"]', c);
      return { nome: txt($('h4', c)) || 'Roteador', on: !!$('.status-on', c), login: campo('login'), endereco: campo('endereço'), modelo: campo('modelo'), fab: campo('fabricante'),
        conectados: link ? link.getAttribute('href').slice(BASE.length) : '', alterar: $('button.button-modal, button[onclick*="ChangeDevice"]', c), reiniciar: $('button[onclick*="RebootDevice"]', c) };
    });
  }
  let roteadores = [];
  function telaRoteadores() {
    roteadores = lerRoteadores(document);
    let html = cabecalho(tx('tituloRoteadores', 'Meu Wi-Fi'), '/inicio') + '<div class="casca-corpo casca-rede">';
    roteadores.forEach((r, i) => {
      html += '<div class="casca-card casca-roteador"><div class="casca-roteador-cab"><span class="casca-ico">' + ICONE.roteador + '</span><div class="casca-rede-txt"><strong>' + esc(r.nome) + '</strong>'
        + (r.login ? '<span class="casca-sub">Login ' + esc(r.login) + '</span>' : '') + '</div><span class="casca-pilula ' + (r.on ? 'on' : 'off') + '">' + (r.on ? 'Online' : 'Offline') + '</span></div>'
        + (r.endereco ? '<div class="casca-roteador-local">' + ICONE.local + '<span>' + esc(r.endereco.replace(/\s*\|\s*/g, ' · ')) + '</span></div>' : '')
        + (r.on ? '' : '<p class="casca-roteador-aviso">O roteador está desligado ou sem sinal. Confira se ele está na tomada e com as luzes acesas.</p>')
        + (r.conectados ? '<a class="casca-btn pri largo" data-ir="' + esc(r.conectados) + '">' + ICONE.wifi + 'Ver aparelhos conectados</a>' : '')
        + '<div class="casca-roteador-acoes">' + (r.alterar ? '<a class="casca-btn sec" data-acao="rot-alterar" data-i="' + i + '">' + ICONE.chave + 'Alterar Wi-Fi</a>' : '')
        + (r.reiniciar ? '<a class="casca-btn sec" data-acao="rot-reiniciar" data-i="' + i + '">' + ICONE.atualizar + 'Reiniciar</a>' : '') + '</div></div>';
    });
    return html + '<p class="casca-nota">Internet lenta ou caindo? Reiniciar o roteador resolve a maioria dos casos.</p></div>';
  }
  // os avisos da Central (resultado de reiniciar ou de trocar a senha) também aparecem no formato da casca
  function espelharAvisosCentral() {
    const t = window.ixcToast; if (!t || t.__casca || typeof t.show !== 'function') return;
    const original = t.show.bind(t); t.__casca = true;
    t.show = function (msg, flag) { let erro = false; try { erro = flag === IXCToast.FLAG_ERROR; } catch (e) {}
      try { aviso(erro ? 'Não deu certo' : 'Pronto', String(msg || ''), erro ? 'red' : 'green'); } catch (e) {} return original(msg, flag); };
  }
  // nome de rede com acento chega da Central com a codificação trocada ("JoÃ£o"): desfaz só quando o texto tem esse padrão
  const semMojibake = s => { s = String(s || ''); if (!/[ÃÂ][\u0080-¿]/.test(s)) return s; try { const r = decodeURIComponent(escape(s)); return r.indexOf('�') < 0 ? r : s; } catch (e) { return s; } };
  // janela "Alterar dispositivo" da Central: mesmos campos e mesmo envio, com palavras de quem não é técnico
  function arrumarJanelaWifi() {
    const m = $('#modalChangeDevice'); if (!m) return;
    const rot = (el, t) => { if (el && txt(el) !== t) el.textContent = t; };
    rot($('.modal-title', m), 'Alterar Wi-Fi');
    const ls = $$('label.form-label', m);
    rot(ls[0], 'Roteador'); rot(ls[1], 'Qual rede você quer alterar?'); rot(ls[2], 'Novo nome da rede'); rot(ls[3], 'Nova senha'); rot(ls[4], 'Repita a nova senha');
    const ph = (sel, t) => { const e = $(sel, m); if (e) e.placeholder = t; };
    ph('#ssidInput', 'Nome que aparece na lista de redes'); ph('#password', 'Mínimo de 8 caracteres'); ph('#confirmPassword', 'Digite a senha de novo');
    const sel = $('#contractSelect', m), nome = $('#ssidInput', m);
    const redes = () => { if (!sel) return; [...sel.options].forEach(o => { const t = o.getAttribute('data-ssid') ? semMojibake(o.textContent) : 'Escolha a rede'; if (o.textContent !== t) o.textContent = t; }); };
    redes();
    if (sel && !sel.__casca) { sel.__casca = true;
      new MutationObserver(redes).observe(sel, { childList: true }); // as redes chegam depois, pelo pedido da Central
      sel.addEventListener('change', () => setTimeout(() => { if (nome && nome.value !== semMojibake(nome.value)) nome.value = semMojibake(nome.value); }, 0));
    }
  }
  function acaoRoteador(a, i) {
    const r = roteadores[i]; if (!r) return;
    espelharAvisosCentral();
    if (a === 'rot-alterar') {
      if (r.alterar) r.alterar.click();
      arrumarJanelaWifi();
      // a Central troca o endereço para .../alterar ao abrir a janela; recarregar ali dá "página não encontrada"
      const voltar = () => { if (rota() === ROTA_ALTERAR) try { history.replaceState(history.state, '', BASE + '/dispositivos-conexoes'); } catch (e) {} };
      voltar(); setTimeout(voltar, 300); setTimeout(voltar, 1500);
      return;
    }
    const m = folha(cabFolha('Reiniciar o roteador?') + '<p class="casca-folha-txt">A internet de todos os aparelhos cai por cerca de 2 minutos e volta sozinha. Chamadas e jogos em andamento são interrompidos.</p>'
      + '<button class="casca-btn pri largo" data-folha="confirmar">' + ICONE.atualizar + 'Reiniciar agora</button><button class="casca-btn sec largo" data-folha="fechar">Agora não</button>');
    m.querySelector('[data-folha="confirmar"]').onclick = () => { fecharFolha(); if (r.reiniciar) r.reiniciar.click(); };
  }

  // página de pagamento: resumo + PIX (gerado pela própria Central) + boleto (linha digitável já vem na página)
  function telaPagamento() {
    const id = idDe(location.pathname);
    const linhas = $$('#content .card td, #content .card .col, #content .card p, #content .card span').map(txt).filter(Boolean);
    // a página traz "1200.00": vira "1.200,00"
    const bruto = linhas.find(t => /^\d+[.,]\d{2}$/.test(t)) || '';
    const valor = bruto ? Number(bruto.replace(',', '.')).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '';
    const venc = linhas.find(t => /^\d{2}\/\d{2}\/\d{4}$/.test(t)) || '';
    const st = /abert/i.test($$('#content .card').map(txt).join(' ')) ? (vencida(venc) ? 'vencida' : 'aberta') : 'neutro';
    const temPix = !!$('[data-display-method-content="pix"]'), temBoleto = !!$('#barcodeText'), temCartao = CARTAO_LIGADO && !!$('[data-display-method-content="credit_card"]');
    return cabecalho('Pagamento', '/faturas') + '<div class="casca-corpo"><div class="casca-card casca-fatura ' + st + '"><div class="casca-fatura-cab"><div><span class="casca-rotulo">Fatura de ' + esc(mesDe(venc) || 'referência') + '</span><span class="casca-valor">' + (valor ? 'R$ ' + esc(valor) : '') + '</span><span class="casca-sub">' + (st === 'vencida' ? 'Venceu em ' : 'Vence em ') + esc(venc) + '</span></div>' + etiqueta(st) + '</div>'
      + '<div class="casca-acoes-fatura">'
      + (temPix ? '<div class="casca-acao-col"><button class="casca-btn pri" data-acao="pix">' + ICONE.pix + txe('pix', 'Pagar com PIX') + '</button><button class="casca-link" data-acao="pix-copiar">' + ICONE.copiar + txe('copiarPix', 'Copiar PIX') + '</button></div>' : '')
      + (temBoleto || temCartao ? (temPix ? '<details class="casca-outras"><summary>' + txe('outras', 'Outras formas de pagamento') + '</summary><div class="casca-outras-itens">' : '')
        + (temBoleto ? '<div class="casca-acao-col"><button class="casca-btn sec" data-acao="boleto">' + ICONE.pdf + txe('boleto', 'Boleto') + '</button><button class="casca-link" data-acao="boleto-copiar">' + ICONE.copiar + txe('copiarBoleto', 'Copiar código') + '</button></div>' : '')
        + (temCartao ? '<button class="casca-btn sec" data-acao="cartao">' + ICONE.cartao + esc(rotuloCartao(temRecorrencia(document))) + '</button>' : '')
        + (temPix ? '</div></details>' : '') : '')
      + '</div></div></div>' + (id ? '' : '');
  }

  // folha do PIX e do boleto
  let relogioPix = null;
  function folha(html) {
    pixVezNova++; clearInterval(relogioPix); // outra folha (boleto) cancela um PIX que ainda estava gerando
    let m = $('#casca-pix'); if (!m) { m = document.createElement('div'); m.id = 'casca-pix'; document.body.appendChild(m); }
    m.innerHTML = '<div class="casca-folha-fundo" data-folha="fechar"></div><div class="casca-folha-painel casca-pix-painel" role="dialog" aria-modal="true">' + html + '</div>';
    $$('[data-folha="fechar"]', m).forEach(b => b.onclick = fecharFolha);
    requestAnimationFrame(() => m.classList.add('aberta'));
    return m;
  }
  let pixVezNova = 0, pixGerando = false;
  function fecharFolha() { const m = $('#casca-pix'); if (m) m.classList.remove('aberta'); clearInterval(relogioPix); pixVezNova++; }
  const cabFolha = t => '<div class="casca-pix-cab"><strong>' + esc(t) + '</strong><button class="casca-icone-btn" data-folha="fechar" aria-label="Fechar">' + ICONE.fechar + '</button></div>';
  const visivel = e => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length));

  async function abrirPix(copiarAoChegar) {
    const m = folha(cabFolha(tx('pix', 'Pagar com PIX')) + '<div class="casca-carregando"><span></span>Gerando o PIX…</div>');
    const btn = $('[data-display-method-content="pix"]');
    if (!btn) { m.querySelector('.casca-folha-painel').innerHTML = cabFolha(tx('pix', 'Pagar com PIX')) + '<div class="casca-vazio-pix">' + ICONE.alerta + '<strong>PIX indisponível nesta fatura</strong></div>'; return; }
    // vez: toque duplo ou folha fechada no meio cancelam a espera anterior (sem PIX gerado 2 vezes nem relógio solto)
    const vez = ++pixVezNova;
    const codigoEl = $('#copy-paste-pix-code');
    if (!(codigoEl && txt(codigoEl).length > 30) && !pixGerando) { pixGerando = true; setTimeout(() => { pixGerando = false; }, 20000); btn.click(); } // a própria Central gera o PIX (get-pix-data)
    const t0 = Date.now();
    while (Date.now() - t0 < 20000) { if (vez !== pixVezNova) return; const c = $('#copy-paste-pix-code'); if (c && txt(c).length > 30) break; await new Promise(r => setTimeout(r, 250)); }
    pixGerando = false;
    if (vez !== pixVezNova) return;
    const codigo = txt($('#copy-paste-pix-code')), qr = ($('#qrcode-pix-img') || {}).src || '';
    const painel = m.querySelector('.casca-folha-painel');
    if (!codigo) { painel.innerHTML = cabFolha(tx('pix', 'Pagar com PIX')) + '<div class="casca-vazio-pix">' + ICONE.alerta + '<strong>Não foi possível gerar o PIX agora</strong><span class="casca-sub">Tente o boleto ou fale com o provedor.</span></div>'; $$('[data-folha="fechar"]', m).forEach(b => b.onclick = fecharFolha); return; }
    painel.innerHTML = cabFolha(tx('pix', 'Pagar com PIX'))
      + (qr ? '<div class="casca-qr"><img src="' + esc(qr) + '" alt="QR Code do PIX"></div>' : '')
      + '<span class="casca-sub centro">Aponte a câmera do app do banco ou copie o código.</span>'
      + '<div class="casca-codigo">' + esc(codigo) + '</div><button class="casca-btn pri largo" data-folha="copiar">' + ICONE.copiar + txe('copiarCodigoPix', 'Copiar código Pix') + '</button>'
      + '<span class="casca-sub centro" data-folha="tempo"></span>';
    $$('[data-folha="fechar"]', m).forEach(b => b.onclick = fecharFolha);
    m.querySelector('[data-folha="copiar"]').onclick = () => copiar(codigo, 'Código PIX copiado. Cole no app do seu banco.');
    clearInterval(relogioPix);
    relogioPix = setInterval(() => {
      const tempo = txt($('#time-pix')), el = m.querySelector('[data-folha="tempo"]');
      if (el) el.textContent = tempo ? 'Este código vale por mais ' + tempo : '';
      // a Central confere o pagamento sozinha (get-status-bill) e mostra a confirmação: a casca acompanha
      if (visivel($('#content-confirmation-payment'))) { clearInterval(relogioPix); painel.innerHTML = cabFolha('Pagamento confirmado') + '<div class="casca-vazio-pix">' + ICONE.ok + '<strong>Recebemos o seu PIX!</strong><span class="casca-sub">Obrigado. A fatura já aparece como paga.</span></div>'; $$('[data-folha="fechar"]', m).forEach(b => b.onclick = () => { fecharFolha(); ir('/faturas'); }); }
      else if (visivel($('#contents-time-expired'))) { clearInterval(relogioPix); painel.innerHTML = cabFolha('Código expirado') + '<div class="casca-vazio-pix">' + ICONE.alerta + '<strong>O código PIX expirou</strong><span class="casca-sub">Gere um novo para pagar.</span></div><button class="casca-btn pri largo" data-folha="novo">Gerar novo PIX</button>'; $$('[data-folha="fechar"]', m).forEach(b => b.onclick = fecharFolha); m.querySelector('[data-folha="novo"]').onclick = () => location.reload(); }
    }, 1000);
    if (copiarAoChegar) copiar(codigo, 'Código PIX copiado. Cole no app do seu banco.');
  }

  function abrirBoleto() {
    const linha = txt($('#barcodeText'));
    const m = folha(cabFolha('Pagar com boleto') + (linha ? '<span class="casca-sub">Linha digitável</span><div class="casca-codigo">' + esc(linha) + '</div>'
      + '<button class="casca-btn pri largo" data-folha="copiar">' + ICONE.copiar + txe('copiarCodigoBarras', 'Copiar código de barras') + '</button>' : '<div class="casca-vazio-pix">' + ICONE.alerta + '<strong>Código de barras indisponível</strong></div>')
      + '<button class="casca-btn sec largo" data-folha="pdf">' + ICONE.pdf + 'Baixar o boleto (PDF)</button>');
    const c = m.querySelector('[data-folha="copiar"]'); if (c) c.onclick = () => copiar(linha.replace(/[.\s]/g, ''), 'Código de barras copiado. Cole no app do seu banco.');
    m.querySelector('[data-folha="pdf"]').onclick = () => imprimirBoleto(idDe(location.pathname));
  }
  function imprimirBoleto(id) {
    try { if (window.objIXCDownloadPdf && id) { objIXCDownloadPdf.downloadArchivePdf(BASE + '/print-bill/' + id); aviso('Boleto', 'Baixando o PDF da fatura…', 'blue'); return; } } catch (e) {}
    const b = $$('button').find(x => /print-bill/.test(x.getAttribute('onclick') || '')); if (b) b.click();
  }
  // copiar o código de barras direto da lista: a linha digitável vem pronta na página de pagamento
  async function copiarBoletoDaLista(id) {
    try { const d = await buscarPagina('/fatura/' + id + '/pagamento'); const l = txt($('#barcodeText', d)); if (l) return copiar(l.replace(/[.\s]/g, ''), 'Código de barras copiado. Cole no app do seu banco.'); } catch (e) {}
    ir('/fatura/' + id + '/pagamento?casca=boleto');
  }

  // manter conectado (só no app)
  // Com "Manter conectado" marcado, a casca entrega login e senha ao app quando a pessoa entra; o app guarda no cofre
  // do aparelho (Keystore/Keychain) e só confirma quando a Central abre logada. Quando a Central pedir login de novo
  // (o celular fechou o app ou o IXC venceu a sessão), a casca pede ao app e entra sozinha. Senha recusada ou "Sair":
  // o app apaga o que guardou. Nada disso vai para servidor nenhum.
  const LEMBRAR = { cred: null, respondeu: false, pedido: false, okEnviado: false };
  const ssGet = k => { try { return sessionStorage.getItem(k) || ''; } catch (e) { return ''; } };
  const ssSet = (k, v) => { try { if (v === '') sessionStorage.removeItem(k); else sessionStorage.setItem(k, String(v)); } catch (e) {} };
  const pedirCredenciais = () => { if (!APP || LEMBRAR.pedido) return; LEMBRAR.pedido = true; if (!avisarApp({ acao: 'central_cred_pedir' })) LEMBRAR.respondeu = true; };
  const esquecerCredenciais = () => { LEMBRAR.cred = null; ssSet('cascaAuto', ''); avisarApp({ acao: 'central_cred_esquecer' }); };
  const guardarCredenciais = (usuario, senha) => { if (APP && usuario && senha) avisarApp({ acao: 'central_cred_guardar', usuario: String(usuario).trim().slice(0, 120), senha: String(senha).slice(0, 200) }); };
  const lembrarOk = () => { ssSet('cascaAuto', ''); if (APP && !LEMBRAR.okEnviado) { LEMBRAR.okEnviado = true; avisarApp({ acao: 'central_cred_ok' }); } };
  const telaEntrando = () => '<div class="casca-login-topo"><span class="casca-login-ola">Central do Assinante</span></div><div class="casca-login-cartao casca-entrando"><span class="casca-girando"></span><strong>Entrando na sua conta…</strong></div>';

  // entrada (deslogado)
  // A Central nova entra em duas etapas: /login (e-mail ou o login do provedor + "manter conectado") e /senha (form
  // para /auth). A casca desenha a tela dela por cima e, ao entrar, preenche e envia o formulário original da Central.
  // A senha só passa do campo da casca para o campo da Central, nada é guardado.
  const formEntrada = () => {
    const s = $('form[action$="/auth"]'); if (s && s.elements.password) return { f: s, etapa: 'senha' };
    const f = $('form[action$="/login"]'); return f && f.elements.username ? { f, etapa: 'login' } : null;
  };
  const OLHO = (PI && PI.marcacao('olho')) || svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>');
  function telaLogin({ f, etapa }) {
    const img = $('.login-contents img.logo-img, img.logo-img'); const lg = CFG.logo || (img ? img.getAttribute('src') : '');
    try { if (lg) sessionStorage.setItem('cascaNovaLogo', lg); } catch (e) {}
    const cadastro = $('a[href$="/cadastro"]'), esqueci = $('a[href$="/recuperar-senha"]'), cancelar = $$('.login-contents a').find(a => /^cancelar$/i.test(txt(a)));
    const erro = $$('.login-contents .alert, .login-contents .invalid-feedback, .login-contents .text-danger').map(txt).filter(Boolean).join(' ');
    let corpo;
    if (etapa === 'senha') {
      const quem = f.elements.username ? f.elements.username.value : '';
      corpo = '<strong class="casca-login-titulo">Digite sua senha</strong>' + (quem ? '<p class="casca-sub">Entrando como <b>' + esc(quem) + '</b></p>' : '')
        + (erro ? '<div class="casca-login-erro">' + esc(erro) + '</div>' : '')
        + '<label>Senha<span class="casca-senha"><input name="senha" type="password" autocomplete="current-password" required><button type="button" data-acao="login-ver-senha" aria-label="Mostrar senha">' + OLHO + '</button></span></label>'
        + '<button class="casca-btn pri largo" type="submit">Entrar</button>'
        + (esqueci ? '<a class="casca-link centro" href="' + esc(esqueci.getAttribute('href')) + '">Esqueci minha senha</a>' : '')
        + '<a class="casca-link centro" href="' + esc(cancelar ? cancelar.getAttribute('href') : BASE + '/') + '">Entrar com outra conta</a>';
    } else {
      const campo = f.elements.username, manter = f.elements.manter_conectado;
      const rotulo = txt($('label[for="' + campo.id + '"]', f)) || 'Login';
      try { sessionStorage.setItem('cascaNovaRotulo', rotulo); } catch (e) {}
      corpo = '<strong class="casca-login-titulo">Entrar</strong><p class="casca-sub">Acesse suas faturas, contratos e atendimentos.</p>'
        + (erro ? '<div class="casca-login-erro">' + esc(erro) + '</div>' : '')
        + '<label>' + esc(rotulo) + '<input name="user" type="' + (campo.type === 'email' ? 'email' : 'text') + '" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="' + esc(/e-?mail/i.test(rotulo) ? 'seu@email.com' : '') + '" value="' + esc(campo.value) + '" required></label>'
        + (manter ? '<label class="casca-check"><input type="checkbox" name="manter"' + (manter.checked || APP ? ' checked' : '') + '><span>' + (APP ? 'Manter conectado neste celular' : 'Manter conectado') + '</span></label>' : '')
        + '<button class="casca-btn pri largo" type="submit">Continuar</button>'
        + (CFG.avisoLogin && CFG.avisoLogin.texto ? '<button class="casca-link centro casca-login-ajuda" type="button" data-acao="login-ajuda">' + esc(CFG.avisoLogin.titulo || 'Primeiro acesso?') + ' Veja como entrar</button>' : '');
    }
    return '<div class="casca-login-topo">' + (lg ? '<span class="casca-logo grande"><img src="' + esc(lg) + '" alt=""></span>' : '<span class="casca-logo-nome">' + esc(CFG.nome || '') + '</span>') + '<span class="casca-login-ola">Central do Assinante</span></div>'
      + '<div class="casca-login-cartao"><form class="casca-login-form" data-form="login-nova">' + corpo + '</form></div>'
      + (etapa === 'senha' ? '' : APP && CFG.avisoVisitante
        ? '<div class="casca-login-visitante"><strong>' + esc(CFG.avisoVisitante) + '</strong><button class="casca-btn sec largo" type="button" data-acao="login-falar">Falar com a gente</button></div>'
        : cadastro ? '<div class="casca-login-visitante"><strong>Ainda não é cliente?</strong><a class="casca-btn sec largo" href="' + esc(cadastro.getAttribute('href')) + '">Faça seu cadastro</a></div>' : '');
  }
  function desenharLogin(ent) {
    const { f, etapa } = ent;
    let box = $('#casca-login');
    if (!box) { box = document.createElement('div'); box.id = 'casca-login'; document.body.appendChild(box); }
    const mostrarEntrando = () => { if (box.dataset.estado !== 'entrando') { box.innerHTML = telaEntrando(); box.dataset.estado = 'entrando'; } };
    if (APP && !LEMBRAR.respondeu) {
      const primeira = !LEMBRAR.pedido; pedirCredenciais();
      if (!LEMBRAR.respondeu) { mostrarEntrando(); if (primeira) setTimeout(() => { if (!LEMBRAR.respondeu) { LEMBRAR.respondeu = true; desenhar(); } }, 1500); return; }
    }
    if (APP && LEMBRAR.cred) {
      const n = +ssGet('cascaAuto') || 0, erro = $$('.login-contents .alert, .login-contents .invalid-feedback, .login-contents .text-danger').map(txt).filter(Boolean).join(' ');
      const mesmo = etapa !== 'senha' || n > 0 || !f.elements.username || f.elements.username.value === LEMBRAR.cred.usuario;
      // erro na tela de login é a Central recusando; três voltas sem entrar (rede caindo) só param de tentar, sem apagar
      if (erro) esquecerCredenciais();
      else if (n >= 3) LEMBRAR.cred = null;
      else if (mesmo) {
        ssSet('cascaAuto', n + 1); mostrarEntrando();
        if (etapa === 'senha') f.elements.password.value = LEMBRAR.cred.senha;
        else { f.elements.username.value = LEMBRAR.cred.usuario; if (f.elements.manter_conectado) f.elements.manter_conectado.checked = true; }
        const ok = $('button[type=submit]', f);
        setTimeout(() => { try { if (f.requestSubmit) f.requestSubmit(ok || undefined); else if (ok) ok.click(); else f.submit(); } catch (err) { f.submit(); } }, 60);
        return;
      }
    }
    box.innerHTML = telaLogin(ent);
    const meu = box.querySelector('form');
    meu.addEventListener('submit', e => {
      e.preventDefault();
      if (etapa === 'senha') {
        if (!meu.elements.senha.value) return;
        f.elements.password.value = meu.elements.senha.value;
        if (APP && ssGet('cascaLembrar') !== 'N') guardarCredenciais(ssGet('cascaLembrarU') || (f.elements.username && f.elements.username.value), meu.elements.senha.value);
      } else {
        const user = meu.elements.user.value.trim(); if (!user) return;
        f.elements.username.value = user;
        if (f.elements.manter_conectado && meu.elements.manter) f.elements.manter_conectado.checked = meu.elements.manter.checked;
        if (APP) { const fica = !meu.elements.manter || meu.elements.manter.checked; ssSet('cascaLembrar', fica ? 'S' : 'N'); ssSet('cascaLembrarU', fica ? user : ''); if (!fica) esquecerCredenciais(); }
      }
      const b = meu.querySelector('button[type=submit]'), rot = b.textContent; b.disabled = true; b.textContent = 'Entrando…';
      const enviar = $('button[type=submit]', f);
      try { if (f.requestSubmit) f.requestSubmit(enviar || undefined); else if (enviar) enviar.click(); else f.submit(); } catch (err) { f.submit(); }
      setTimeout(() => { b.disabled = false; b.textContent = rot; }, 8000); // se a Central responder sem trocar de página
    });
    box.dataset.estado = '';
    box.onclick = e => { // um ouvinte só: o login é redesenhado várias vezes
      const el = e.target.closest('[data-acao]'); if (!el) return;
      if (el.dataset.acao === 'login-ver-senha') { const s = meu.elements.senha; s.type = s.type === 'password' ? 'text' : 'password'; return; }
      if (el.dataset.acao === 'login-ajuda') aviso((CFG.avisoLogin && CFG.avisoLogin.titulo) || 'Primeiro acesso?', (CFG.avisoLogin && CFG.avisoLogin.texto) || '', 'blue');
      if (el.dataset.acao === 'login-falar') { if (!avisarApp({ acao: 'ir_aba', aba: 'atendimento' })) location.href = $('a[href$="/cadastro"]') ? $('a[href$="/cadastro"]').href : location.href; }
    };
    if (etapa === 'senha') setTimeout(() => { try { meu.elements.senha.focus(); } catch (e) {} }, 300);
  }

  // "Recupere sua senha" da Central pede o "login", mas quando o provedor entra por e-mail (o rótulo da tela de
  // entrada diz "E-mail") o cliente não sabe o que digitar. Reescreve os textos para pedir o e-mail. O rótulo vem da
  // tela de entrada (guardado ao passar por ela) ou, se a pessoa chegou direto, da própria página de entrada.
  async function recuperarComEmail() {
    const campo = $('form[action*="/recuperar-senha/"] input[name="login"]'); if (!campo || campo.dataset.cascaEmail) return;
    campo.dataset.cascaEmail = '1';
    let rotulo = ''; try { rotulo = sessionStorage.getItem('cascaNovaRotulo') || ''; } catch (e) {}
    if (!rotulo) try {
      const d = new DOMParser().parseFromString(await (await fetch(BASE + '/', { credentials: 'same-origin' })).text(), 'text/html');
      const u = d.querySelector('form[action$="/login"] [name="username"]');
      rotulo = u ? txt(d.querySelector('label[for="' + u.id + '"]')) : '';
      if (rotulo) try { sessionStorage.setItem('cascaNovaRotulo', rotulo); } catch (e) {}
    } catch (e) {}
    if (!/e-?mail/i.test(rotulo)) return;
    const form = campo.form, lb = campo.id && $('label[for="' + campo.id + '"]', form);
    if (lb) lb.textContent = 'E-mail';
    campo.placeholder = 'Digite o seu e-mail';
    campo.setAttribute('autocomplete', 'email'); campo.setAttribute('inputmode', 'email'); campo.setAttribute('autocapitalize', 'none');
    const p = $$('p').find(e => /login utilizado/i.test(txt(e)));
    if (p) p.textContent = 'Digite o e-mail que você usa para entrar na Central do Assinante e localizaremos seu cadastro.';
    const esq = $$('a').find(a => /^esqueci meu login$/i.test(txt(a)));
    if (esq) esq.textContent = 'Esqueci meu e-mail';
  }

  // desenhar
  let desenhando = false;
  async function desenhar() {
    marcarLogo();
    if (desenhando) return; desenhando = true;
    try {
      aplicarCss();
      const html = document.documentElement, r = rota();
      if (r === ROTA_ALTERAR) { location.replace(BASE + '/dispositivos-conexoes'); return; } // quem recarregou com a janela "Alterar" aberta volta para a lista
      if (!$('#accordionSidebar')) { // deslogado: login e senha com tela da casca; o resto (cadastro, recuperar senha) só com o tema
        html.setAttribute('data-casca', 'on');
        const f = formEntrada();
        html.setAttribute('data-casca-nova', f ? 'login' : 'entrada');
        if (f) desenharLogin(f);
        else { let lg = ''; try { lg = sessionStorage.getItem('cascaNovaLogo') || ''; } catch (e) {}
          const h = $('header img'); if (h && lg && !h.classList.contains('casca-logo-provedor')) { h.src = lg; h.classList.add('casca-logo-provedor'); }
          if (/^\/recuperar-senha\/?$/.test(r)) recuperarComEmail(); }
        return;
      }
      html.setAttribute('data-casca', 'on');
      avisarSessao();
      lembrarOk();
      if (APP) { avisarApp({ acao: 'menu_central', itens: menuDaCentral() }); if (r === '/' || r === '/inicio') avisarApp({ acao: 'aba_ativa', aba: 'inicio' }); else if (/^\/fatura/.test(r)) avisarApp({ acao: 'aba_ativa', aba: 'faturas' }); }
      montarRaiz();
      if (PROPRIAS(r)) {
        html.setAttribute('data-casca-nova', 'propria');
        raiz.innerHTML = ehRede(r) ? telaConectados() : ehRoteadores(r) ? telaRoteadores() : r === '/faturas' ? telaFaturas() : /pagamento/.test(r) ? telaPagamento() : await telaInicio();
        const q = new URLSearchParams(location.search).get('casca') || (/\/pix$/.test(r) ? 'pix' : /\/boleto$/.test(r) ? 'boleto' : '');
        if (q === 'pix' || q === 'copiarpix') abrirPix(q === 'copiarpix'); else if (q === 'boleto') abrirBoleto(); else if (q === 'cartao') abrirCartao();
        revelarCartao();
      } else {
        html.setAttribute('data-casca-nova', 'moldura');
        // título: o nosso; sem ele, o nome do item na barra lateral da Central (o que o provedor tiver a mais)
        const daLateral = () => { const a = $$('#accordionSidebar a[href^="' + BASE + '/"]').find(x => r.indexOf(x.getAttribute('href').slice(BASE.length).replace(/\/$/, '')) === 0 && x.getAttribute('href').slice(BASE.length).replace(/\/$/, '')); return a ? txt(a) : ''; };
        const t = (TITULOS.find(x => x[0].test(r)) || [0, daLateral() || 'Central do Assinante'])[1];
        raiz.innerHTML = cabecalho(t, /^\/suporte\/./.test(r) ? '/suporte' : '/inicio');
      }
    } catch (e) { window.__cascaErro = String(e && e.stack || e).slice(0, 400); document.documentElement.setAttribute('data-casca-nova', 'moldura'); }
    finally { desenhando = false; document.documentElement.removeAttribute('data-casca-nova-boot'); if (APP) requestAnimationFrame(() => avisarApp({ acao: 'casca_pronta' })); }
  }

  // toques
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-ir], [data-acao]'); if (!el || !el.closest('#casca-raiz')) return;
    e.preventDefault();
    const destino = el.getAttribute('data-ir');
    if (destino) {
      if (destino === '!atendimento') { if (!avisarApp({ acao: 'ir_aba', aba: 'atendimento' })) ir('/suporte'); return; }
      return ir(destino);
    }
    const a = el.getAttribute('data-acao');
    if (a === 'recarregar') return location.reload();
    if (a === 'rot-alterar' || a === 'rot-reiniciar') return acaoRoteador(a, Number(el.getAttribute('data-i')));
    if (a === 'pix') return abrirPix(false);
    if (a === 'pix-copiar') return abrirPix(true);
    if (a === 'boleto') return abrirBoleto();
    if (a === 'cartao') return abrirCartao();
    if (a === 'boleto-copiar') { const l = txt($('#barcodeText')); return l ? copiar(l.replace(/[.\s]/g, ''), 'Código de barras copiado. Cole no app do seu banco.') : abrirBoleto(); }
    if (a === 'copiar-boleto') return copiarBoletoDaLista(el.getAttribute('data-id'));
  }, true);

  window.__cascaNova = { versao: VERSAO, rota, desenhar, credenciais: c => { LEMBRAR.respondeu = true; LEMBRAR.cred = c && c.usuario && c.senha ? { usuario: String(c.usuario), senha: String(c.senha) } : null; if (!$('#accordionSidebar')) desenhar(); }, irPara: c => ir(String(c || '/inicio').replace(/^!/, '')) };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', desenhar); else desenhar();
})();

// botões da casca são <a data-ir>/<a data-acao> sem href: o leitor de tela (TalkBack/VoiceOver) passa a anunciar "botão"
// e o teclado alcança e aciona com Enter/Espaço
(() => {
  if (window.__cascaA11y) return; window.__cascaA11y = true;
  const SEL = 'a[data-ir]:not([href]):not([role]), a[data-acao]:not([href]):not([role])';
  let vez = 0;
  const marcar = () => { vez = 0; try { document.querySelectorAll(SEL).forEach(a => { a.setAttribute('role', 'button'); a.tabIndex = 0; }); } catch (e) {} };
  const agendar = () => { if (!vez) vez = setTimeout(marcar, 250); };
  const ligar = () => { marcar(); try { new MutationObserver(agendar).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {} };
  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const a = e.target && e.target.closest && e.target.closest('a[data-ir], a[data-acao]');
    if (a && !a.hasAttribute('href')) { e.preventDefault(); a.click(); }
  }, true);
  if (document.documentElement) ligar(); else document.addEventListener('DOMContentLoaded', ligar);
})();
