// Casca no PC (só no espelho, não vai para o app). No celular a casca navega pela grade de atalhos e pelo botão
// Voltar; em tela larga (>= 900 px) entra uma barra lateral com os mesmos itens do menu da própria Central
// (#accordionSidebar, que a casca esconde). O visual fica no casca-pc.css; aqui só se monta a lista.
(() => {
  if (window.__cascaPc) return;
  window.__cascaPc = true;
  const CFG = window.__CASCA_CFG__ || {};
  if (CFG.app || /WAApp\//.test(navigator.userAgent || '')) return;
  const BASE = '/central';
  const LARGA = window.matchMedia('(min-width: 900px)');
  const html = document.documentElement;

  const svg = d => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  const ICONE = {
    inicio: svg('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'),
    fatura: svg('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'),
    contrato: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
    nota: svg('<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>'),
    consumo: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    chat: svg('<path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12z"/>'),
    relatorio: svg('<path d="M4 4h16v16H4z"/><path d="M8 16V11M12 16V8M16 16v-3"/>'),
    wifi: svg('<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0"/><circle cx="12" cy="19.5" r="1"/>'),
    velocidade: svg('<path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14" r="1.5"/>'),
    pessoa: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
    sair: svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>'),
  };
  const iconeDe = t => /in[ií]cio|home/i.test(t) ? 'inicio' : /fatura|boleto|financ/i.test(t) ? 'fatura' : /plano|contrato/i.test(t) ? 'contrato'
    : /nota/i.test(t) ? 'nota' : /consumo|extrato/i.test(t) ? 'consumo' : /suporte|atendimento|chamado|ticket/i.test(t) ? 'chat'
    : /dispositiv|conex|wi-?fi|roteador|rede/i.test(t) ? 'wifi' : /velocidade|speed/i.test(t) ? 'velocidade'
    : /relat|declara/i.test(t) ? 'relatorio' : /configura|meus dados|perfil|conta/i.test(t) ? 'pessoa' : 'contrato';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const txt = e => (e && e.textContent || '').replace(/\s+/g, ' ').trim();
  const rota = p => (String(p || '').slice(BASE.length).replace(/[?#].*$/, '').replace(/\/+$/, '')) || '/inicio';

  let nav = null;
  function itens() {
    const vistos = {};
    const l = [...document.querySelectorAll('#accordionSidebar a[href^="' + BASE + '/"]')]
      .map(a => [rota(a.getAttribute('href')), txt(a)])
      .filter(x => x[1] && !/^\/(sair|logout)$/.test(x[0]) && !vistos[x[0]] && (vistos[x[0]] = 1));
    if (!vistos['/inicio']) l.unshift(['/inicio', 'Início']);
    return l;
  }
  function montar() {
    const modo = html.getAttribute('data-casca-nova');
    const logado = !!document.querySelector('#accordionSidebar') && (modo === 'propria' || modo === 'moldura');
    if (!logado) { if (nav) { nav.remove(); nav = null; } html.removeAttribute('data-casca-pc'); return; }
    if (!nav) {
      nav = document.createElement('nav');
      nav.id = 'casca-pc-nav';
      nav.setAttribute('aria-label', 'Menu da Central');
      const im = document.querySelector('#accordionSidebar img');
      const lg = CFG.logo || (im ? im.getAttribute('src') : '') || '';
      nav.innerHTML = '<a class="casca-pc-marca" href="' + BASE + '/inicio">' + (lg ? '<img src="' + esc(lg) + '" alt="' + esc(CFG.nome || 'Início') + '">' : '<strong>' + esc(CFG.nome || 'Central') + '</strong>') + '</a>'
        + '<span class="casca-pc-rotulo">Central do Assinante</span>'
        + '<div class="casca-pc-itens">' + itens().map(x => '<a href="' + BASE + esc(x[0]) + '" data-rota="' + esc(x[0]) + '">' + ICONE[iconeDe(x[1] + ' ' + x[0])] + '<span>' + esc(x[1]) + '</span></a>').join('') + '</div>'
        + '<button type="button" class="casca-pc-sair">' + ICONE.sair + '<span>Sair</span></button>';
      nav.querySelector('.casca-pc-sair').addEventListener('click', () => {
        if (window.__cascaNova && window.__cascaNova.irPara) window.__cascaNova.irPara('sair');
        else location.href = BASE + '/logout';
      });
      document.body.appendChild(nav);
    }
    const r = rota(location.pathname);
    nav.querySelectorAll('a[data-rota]').forEach(a => {
      const p = a.getAttribute('data-rota');
      const ativo = r === p || r.indexOf(p + '/') === 0 || (p === '/faturas' && /^\/fatura\//.test(r)) || (p === '/inicio' && r === '/');
      a.classList.toggle('ativo', ativo);
      if (ativo) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    if (LARGA.matches) html.setAttribute('data-casca-pc', ''); else html.removeAttribute('data-casca-pc');
  }

  const ligar = () => {
    montar();
    let ultima = location.pathname;
    setInterval(() => { if (location.pathname !== ultima) { ultima = location.pathname; montar(); } }, 400);
    new MutationObserver(montar).observe(html, { attributes: true, attributeFilter: ['data-casca-nova'] });
    if (LARGA.addEventListener) LARGA.addEventListener('change', montar); else LARGA.addListener(montar);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ligar); else ligar();
})();
