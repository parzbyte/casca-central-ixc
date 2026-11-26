// Casca no PC (só no espelho, não vai para o app), para a Central antiga do IXC (/central_assinante_web/).
// No celular a casca navega pela grade de atalhos, pela barra de baixo e pela gaveta do "Mais". Em tela larga
// (>= 900 px) a própria gaveta vira a barra lateral fixa: os itens, o perfil e o "Sair" são os que a casca já monta
// conforme o que o provedor liberou na Central. O visual fica no casca-pc.css; aqui só se pede a gaveta e se marca
// a página atual.
(() => {
  if (window.__cascaPc) return;
  window.__cascaPc = true;
  const CFG = window.__CASCA_CFG__ || {};
  if (CFG.app || /WAApp\//.test(navigator.userAgent || '')) return;
  const LARGA = window.matchMedia('(min-width: 900px)');
  const html = document.documentElement;
  const logado = () => { const m = html.getAttribute('data-casca-modo'); return m === 'propria' || m === 'moldura'; };

  let pedindo = false, rotaDesenhada = null;
  // a gaveta só existe depois de um toque no "menu" da casca: o mesmo toque é dado aqui, e o CSS a mantém à vista
  function pedirGaveta() {
    if (pedindo) return;
    const b = document.querySelector('#casca-raiz [data-acao="menu"]');
    if (!b) return;
    pedindo = true;
    try { b.click(); } finally { setTimeout(() => { pedindo = false; }, 60); }
  }
  function marcar() {
    const r = html.getAttribute('data-rota') || '/';
    document.querySelectorAll('#casca-gaveta nav a[data-ir]').forEach(a => {
      const p = a.getAttribute('data-ir');
      const ativo = r === p || (p !== '/' && r.indexOf(p) === 0);
      a.classList.toggle('ativo', ativo);
      if (ativo) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  function montar() {
    if (!(LARGA.matches && logado())) { html.removeAttribute('data-casca-pc'); rotaDesenhada = null; return; }
    html.setAttribute('data-casca-pc', '');
    const r = html.getAttribute('data-rota') || '/';
    const g = document.querySelector('#casca-gaveta .casca-gaveta-painel');
    if (!g || rotaDesenhada === null) { pedirGaveta(); rotaDesenhada = r; setTimeout(marcar, 80); return; }
    if (r !== rotaDesenhada) { rotaDesenhada = r; marcar(); }
  }

  const ligar = () => {
    montar();
    new MutationObserver(montar).observe(html, { attributes: true, attributeFilter: ['data-casca-modo', 'data-rota'] });
    // a casca redesenha a tela (e o botão do menu) depois de carregar os dados: confere de novo quando o conteúdo muda
    const alvo = () => { const r = document.getElementById('casca-raiz'); if (r && !r.__cascaPc) { r.__cascaPc = true; new MutationObserver(() => { if (!document.querySelector('#casca-gaveta .casca-gaveta-painel')) montar(); }).observe(r, { childList: true }); } };
    alvo(); setInterval(() => { alvo(); if (LARGA.matches && logado() && !document.querySelector('#casca-gaveta .casca-gaveta-painel')) montar(); }, 1500);
    if (LARGA.addEventListener) LARGA.addEventListener('change', montar); else LARGA.addListener(montar);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ligar); else ligar();
})();
