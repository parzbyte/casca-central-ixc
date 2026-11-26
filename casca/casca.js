// Casca da Central do Assinante. V2. Injetado ANTES dos scripts da página (como um WKUserScript no app).
// A Central do IXC vira só o motor: ela busca os dados e executa as ações; a casca desenha 100% do que o
// cliente vê (telas, menu, avisos, PIX) lendo o estado do Vue e repassando as ações aos métodos/botões dela.
// Rota sem tela própria: a página original aparece numa moldura nossa (cabeçalho + barra), com o tema.
// Fora da Central do IXC, não faz nada; se uma tela falhar ao desenhar, cai na moldura.
(() => {
  if (window.__casca) return;
  // Só a Central antiga (Vue, em /central_assinante_web/). A Central nova do IXC (/central-assinante/, páginas do
  // servidor) é outra coisa: a casca fica de fora e ela aparece como é, sem esconder nada nem recolorir.
  if (location.pathname.indexOf('/central_assinante_web') < 0) return;
  const VERSAO = '2.1';
  // Até a casca desenhar a primeira tela, a Central original fica invisível (nada de "piscar" a tela antiga).
  // Rede de segurança: 8 s depois, mostra o que houver.
  try {
    document.documentElement.setAttribute('data-casca-boot', '');
    const sb = document.createElement('style'); sb.id = 'casca-boot';
    sb.textContent = 'html[data-casca-boot] body{visibility:hidden!important;background:#F4F4F2!important}html[data-casca-boot]{background:#F4F4F2}'
      + 'html[data-casca-boot]::after{content:"";position:fixed;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:4px solid #EEE;border-top-color:' + ((window.__CASCA_CFG__ || {}).primaria || '#E11D2E') + ';animation:cascaBoot .8s linear infinite;visibility:visible}'
      + '@keyframes cascaBoot{to{transform:rotate(360deg)}}';
    document.documentElement.appendChild(sb);
    setTimeout(() => document.documentElement.removeAttribute('data-casca-boot'), 8000);
  } catch (e) {}
  const CSS = () => window.__CASCA_CSS__ || '';
  const CFG = Object.assign({ primaria: '#2563EB', nome: '' }, window.__CASCA_CFG__ || {});

  // logo branca no topo colorido (pedido do provedor): CFG.logoBranca = arquivo da logo toda branca; CFG.logoEstilo = 'branca'
  // deixa a logo de sempre branca. Nos dois casos a logo fica maior e sem a caixa branca em volta.
  const marcarLogo = () => { try { if ((CFG.logoBranca || CFG.logoEstilo === 'branca') && !document.documentElement.hasAttribute('data-casca-logo')) document.documentElement.setAttribute('data-casca-logo', CFG.logoBranca ? 'arquivo' : 'branca'); } catch (e) {} };
  marcarLogo();
  // Dentro do app (WebView com "WAApp/" no user agent): a barra de baixo é a do app, e "Atendimento" abre a aba do webchat.
  const APP = !!CFG.app || /WAApp\//.test(navigator.userAgent || '');
  // textos trocados pelo provedor (CFG.textos); vazio = o texto padrão
  const TX = (CFG.textos && typeof CFG.textos === 'object') ? CFG.textos : {};
  const tx = (k, padrao) => (typeof TX[k] === 'string' && TX[k].trim()) ? TX[k].trim().slice(0, 80) : padrao;
  const txe = (k, padrao) => esc(tx(k, padrao));
  // cores derivadas da primária quando o app só manda uma (escura para texto/realce, clara para fundos)
  const misturar = (hex, alvo, t) => { const h = String(hex).replace('#', ''); if (!/^[0-9a-f]{6}$/i.test(h)) return hex; const c = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); return '#' + c.map(v => Math.round(v + (alvo - v) * t).toString(16).padStart(2, '0')).join(''); };
  if (!CFG.primariaEscura) CFG.primariaEscura = misturar(CFG.primaria, 0, 0.28);
  if (!CFG.primariaClara) CFG.primariaClara = misturar(CFG.primaria, 255, 0.88);
  try { if (APP) document.documentElement.setAttribute('data-casca-app', ''); } catch (e) {}
  const avisarApp = obj => { try { if (window.WAAppNativo) { window.WAAppNativo.postMessage(JSON.stringify(obj)); return true; } } catch (e) {} return false; };
  // a página desenhada: o app tira a cobertura que põe por cima da Central enquanto uma página nova carrega
  const casca_pronta = () => { if (APP) requestAnimationFrame(() => avisarApp({ acao: 'casca_pronta' })); };
  // A Central, ao abrir uma página do zero, termina o próprio arranque mandando para "/" (condicoesRotas/criarSessao).
  // Guarda o endereço com que a página abriu para voltar a ele depois desse redirecionamento (ex.: aba Faturas do app).
  let rotaPedida = (() => { try { const p = location.pathname.replace(/^.*central_assinante_web/, '') || '/'; return /^\/(login|trocarSenha|cadastro_login|erro)?\/?$/.test(p) ? null : p.replace(/\/$/, ''); } catch (e) { return null; } })();

  // utilidades
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = v => { if (v == null || v === '') return NaN; const s = String(v).replace(/R\$\s*/, '').trim(); if (/^-?\d+(\.\d+)?$/.test(s)) return parseFloat(s); return parseFloat(s.replace(/\./g, '').replace(',', '.')); };
  const dinheiro = v => { if (v == null || v === '') return ''; if (/R\$/.test(String(v))) return String(v).trim(); const n = num(v); return isNaN(n) ? String(v) : 'R$ ' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
  const dataIso = v => { if (!v) return ''; const s = String(v).slice(0, 10); const m = /^(\d{2})\/(\d{2})\/(\d{4})/.exec(s); return m ? m[3] + '-' + m[2] + '-' + m[1] : s; };
  const dataBr = v => { const s = dataIso(v); const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s); return m && m[1] !== '0000' ? m[3] + '/' + m[2] + '/' + m[1] : ''; };
  const hoje = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const mesNome = iso => { const p = dataIso(iso).split('-'); return p.length === 3 && p[1] !== '00' ? MESES[parseInt(p[1], 10) - 1] + ' de ' + p[0] : ''; };
  const capital = s => String(s || '').toLowerCase().replace(/(^|\s)\S/g, c => c.toUpperCase());
  const primeiroNome = s => capital(String(s || '').trim().split(/\s+/)[0]);
  const svg = d => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  const ICONE = {
    fatura: svg('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'),
    contrato: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
    consumo: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    velocidade: svg('<path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14" r="1.5"/>'),
    nota: svg('<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>'),
    chat: svg('<path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12z"/>'),
    casa: svg('<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/>'),
    cadeado: svg('<path class="casca-morph" d="' + 'M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4' + '"/>'),
    pix: svg('<path d="M12 2l4 4-4 4-4-4z"/><path d="M12 14l4 4-4 4-4-4z"/><path d="M2 12l4-4 4 4-4 4z"/><path d="M14 12l4-4 4 4-4 4z"/>'),
    copiar: svg('<path class="casca-morph" d="' + 'M11 9h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' + '"/>'),
    pdf: svg('<path class="casca-morph" d="' + 'M12 3v12M7 10l5 5 5-5M4 19h16' + '"/>'),
    cartao: svg('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'),
    seta: svg('<path d="M9 6l6 6-6 6"/>'),
    voltar: svg('<path d="M15 6l-6 6 6 6"/>'),
    pessoa: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
    relogio: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    fechar: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    sair: svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>'),
    ok: svg('<path d="M5 12l5 5L20 7"/>'),
    alerta: svg('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'),
    mais: svg('<path d="M12 5v14M5 12h14"/>'),
    presente: svg('<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M7.5 8a2.5 2.5 0 1 1 4.5-1.5A2.5 2.5 0 1 1 16.5 8"/>'),
    fone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'),
    relatorio: svg('<path d="M4 4h16v16H4z"/><path d="M8 16V11M12 16V8M16 16v-3"/>'),
    wifi: svg('<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0"/><circle cx="12" cy="19.5" r="1"/>'),
    lapis: svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
  };
  // ícones animados (PulsoIcon, casca/pulso.js): os parados ganham o desenho novo, que anima no toque. Os que já mudam
  // de forma pelo morph (cadeado, copiar, boleto) ficam como estão, porque contam o que aconteceu (copiou, carregando).
  try {
    const PI = window.WAIcones;
    if (PI) { for (const k of Object.keys(ICONE)) { if (/casca-morph/.test(ICONE[k])) continue; const m = PI.marcacao(k); if (m) ICONE[k] = m; } PI.observar(); }
  } catch (e) {}

  // ícones animados (morphicons, MIT; casca/morph.js vai embutido no pacote)
  // O ícone muda de forma para contar o que aconteceu: copiar → ✓, boleto → carregando → ✓, cadeado fecha → abre.
  // Com "reduzir movimento" do aparelho, troca sem animar. Sem a biblioteca, nada muda.
  const FORMA = {
    copiar: 'M11 9h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
    pdf: 'M12 3v12M7 10l5 5 5-5M4 19h16',
    ok: 'M5 12l5 5L20 7',
    carregando: 'M21 12a9 9 0 1 1-6.2-8.6',
    cadeado: 'M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4',
    aberto: 'M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 7.9-.8',
  };
  const morfar = (el, forma, depois) => {
    const p = el && el.querySelector('path.casca-morph'); if (!p || !FORMA[forma]) return;
    const s = p.closest('svg'); if (s) s.classList.toggle('casca-girando', forma === 'carregando');
    try {
      if (!p.__morph && window.WA_MORPH && window.WA_MORPH.createMorph) p.__morph = window.WA_MORPH.createMorph(p, p.getAttribute('d'), { reducedMotion: 'user' });
      if (p.__morph) p.__morph.morphTo(FORMA[forma]); else p.setAttribute('d', FORMA[forma]);
    } catch (e) { p.setAttribute('d', FORMA[forma]); }
    clearTimeout(p.__volta);
    if (depois) p.__volta = setTimeout(() => { if (p.isConnected) morfar(el, depois[0], depois.slice(1).length ? depois.slice(1) : null); }, depois.ms || 1600);
  };
  // sequências: [forma, ...próximas] com o tempo de cada passo
  const seq = (formas, ms) => Object.assign(formas, { ms });

  // a Central
  const ehCentral = () => { try { return !!(window.router && window.router.history && window.app); } catch (e) { return false; } };
  const rota = () => { try { return window.router.history.current.path.replace(/^.*central_assinante_web/, '') || '/'; } catch (e) { return location.pathname.replace(/^.*central_assinante_web/, '') || '/'; } };
  const inst = () => { try { return window.router.history.current.matched[0].instances.default || null; } catch (e) { return null; } };
  const parametros = () => { try { return JSON.parse(sessionStorage.getItem('parametros') || localStorage.getItem('parametros') || '{}') || {}; } catch (e) { return {}; } };
  const dadosCliente = () => { try { return JSON.parse(sessionStorage.getItem('dados') || localStorage.getItem('dados') || '{}') || {}; } catch (e) { return {}; } };
  // "!" na frente = navegar dentro da Central mesmo no app (ex.: chamados técnicos do IXC)
  const ir = caminho => { fecharGaveta(); const interno = caminho[0] === '!'; caminho = caminho.replace(/^!/, '');
    if (APP && !interno && caminho === '/atendimentos' && avisarApp({ acao: 'ir_aba', aba: 'atendimento' })) return;
    try { window.router.push('/central_assinante_web' + caminho); } catch (e) { location.href = '/central_assinante_web' + caminho; } };
  // logo do provedor vinda do app (CFG.logo) vence a da Central: provedor que usa o IXC de uma empresa ligada tem logo própria
  const logoProvedor = () => { if (CFG.logoBranca) return CFG.logoBranca; if (CFG.logo) return CFG.logo; try { const l = $('.topbar .logo'); const bg = l && getComputedStyle(l).backgroundImage; const m = bg && /url\("?(.+?)"?\)/.exec(bg); return m ? m[1] : (window.app && app.img_logo_base) || ''; } catch (e) { return ''; } };
  const sim = v => String(v || '').toUpperCase() === 'S';
  const habil = (p, k) => String(p[k] || 'S').toUpperCase() !== 'N';
  const abrirModal = id => { try { if (window.jQuery && jQuery.fn.modal) jQuery('#' + id).modal('show'); } catch (e) {} };

  // faturas
  const statusFatura = f => { const st = String(f.status || '').toUpperCase(); if (st === 'R') return 'paga'; if (st === 'C') return 'cancelada'; if (st === 'P') return 'parcial'; const v = dataIso(f.data_vencimento); return v && v < hoje() ? 'vencida' : 'aberta'; };
  const ROTULO_FAT = { paga: 'Paga', cancelada: 'Cancelada', parcial: 'Parcial', vencida: 'Vencida', aberta: 'Em aberto' };
  const faturasInicio = i => { try { const n = i.faturas && i.faturas.notifi_dash; return Array.isArray(n) ? n : []; } catch (e) { return []; } };
  const gruposFaturas = i => { try { const f = i.faturas && i.faturas.faturas; return f && !Array.isArray(f) ? Object.keys(f).map(k => Object.assign({ chave: k }, f[k])) : []; } catch (e) { return []; } };
  const valorFatura = f => dinheiro(num(f.valor_aberto) > 0 ? f.valor_aberto : f.valor);
  // contratos
  const todosContratos = i => { try { return (i.planos && i.planos.planos) || []; } catch (e) { return []; } };
  const contratoAtivo = i => { try { const p = i.planos; return (p.ativo && p.ativo[0]) || (p.planos && p.planos[0]) || null; } catch (e) { return null; } };
  const bloqueado = c => /^(CA|CM|FA)$/i.test(String(c && c.status_internet || ''));
  const podeDesbloquear = c => bloqueado(c) && String(c.desbloqueio_confianca || '').toUpperCase() !== 'N' && !sim(c.desbloqueio_confianca_ativo);
  const contratosBloqueados = i => todosContratos(i).filter(bloqueado);
  // mesmas regras do planos.vue da Central: suspender só se o IXC liberar a suspensão temporária para o cliente
  const flagsPlanos = i => { try { return i.planos || {}; } catch (e) { return {}; } };
  const suspenso = c => sim(c && c.contrato_suspenso);
  const podeSuspender = (i, c) => { const pl = flagsPlanos(i); return sim(pl.mostra_central_assinante) && sim(pl.suspensao_temporaria) && c && String(c.contrato_suspenso || 'N').toUpperCase() === 'N'; };
  const podeLiberarVelocidade = c => c && String(c.status_internet || '').toUpperCase() === 'FA' && String(c.status_velocidade || '').toUpperCase() === 'R' && String(c.pode_liberar || '').toUpperCase() !== 'N';
  // blocos da tela inicial que o IXC liga e desliga (home.vue: mostrar_fatura / mostrar_plano); versão sem o campo mostra
  const blocoInicio = (i, k) => { const v = i ? i[k] : undefined; return v === undefined || v === null || sim(v); };
  const STATUS_NET = { A: ['Ativo', 'ok'], CM: ['Bloqueado', 'alerta'], CA: ['Bloqueado', 'alerta'], FA: ['Em atraso', 'alerta'], AA: ['Aguardando assinatura', 'aviso'], D: ['Desativado', 'neutro'], DE: ['Expirado', 'neutro'] };
  const statusNet = c => STATUS_NET[String(c && c.status_internet || '').toUpperCase()] || [String(c && c.status_internet || '-'), 'neutro'];
  const consumoPrincipal = i => { try { return (i.consumos && i.consumos.consumo_mensal && i.consumos.consumo_mensal[0]) || null; } catch (e) { return null; } };

  // peças comuns
  // no app o ☰ sai: o "Mais" da barra nativa recebe os itens da gaveta (menu_central)
  const botaoMenu = () => APP ? '' : '<button class="casca-icone-btn" data-acao="menu" aria-label="Menu">' + ICONE.menu + '</button>';
  const cabecalho = (titulo, voltar = '/') => '<div class="casca-cab-pagina"><a class="casca-icone-btn" data-ir="' + voltar + '" aria-label="Voltar">' + ICONE.voltar + '</a><h1>' + esc(titulo) + '</h1>' + botaoMenu() + '</div>';
  const vazio = (titulo, texto, icone = 'ok') => '<div class="casca-card casca-vazio"><span class="casca-ico">' + ICONE[icone] + '</span><strong>' + esc(titulo) + '</strong><span class="casca-sub">' + esc(texto) + '</span></div>';
  const etiqueta = (t, cls) => '<span class="casca-etiqueta ' + cls + '">' + esc(t) + '</span>';
  const menuItens = () => {
    const p = parametros();
    return [
      { r: '/', t: 'Início', i: 'casa' },
      habil(p, 'habilitar_financeiro') && { r: '/faturas', t: 'Faturas', i: 'fatura' },
      habil(p, 'habilitar_contratos') && { r: '/planos', t: 'Contratos', i: 'contrato' },
      habil(p, 'mostra_menu_nota_app') && { r: '/notas', t: 'Notas fiscais', i: 'nota' },
      habil(p, 'habilitar_extrato_internet') && { r: '/consumos', t: 'Consumo', i: 'consumo' },
      sim(p.habilitar_menu_conexao) && { r: '/connections', t: 'Conexões', i: 'wifi' },
      (window.app && app.showSpeedTest) && { r: '/speed_test', t: 'Teste de velocidade', i: 'velocidade' },
      APP ? { r: '/atendimentos', t: 'Atendimento', i: 'chat' } : (habil(p, 'habilitar_suporte') && { r: '/atendimentos', t: 'Atendimento', i: 'chat' }),
      APP && habil(p, 'habilitar_suporte') && { r: '!/atendimentos', t: 'Chamados técnicos', i: 'lapis' },
      habil(p, 'habilitar_declaracao_debitos') && { r: '/relatorios', t: 'Relatórios', i: 'relatorio' },
      // cartão desligado (CFG.cartao === false): o provedor não usa cobrança no cartão, então a recorrência some
      CFG.cartao !== false && sim(p.habilitar_recorrencia) && { r: '/configuracoes', t: 'Pagamento recorrente', i: 'cartao' },
    ].filter(Boolean);
  };
  const navInferior = () => {
    if (APP) return '';
    const p = parametros(); const r = rota();
    const itens = [{ r: '/', t: 'Início', i: 'casa' }, habil(p, 'habilitar_financeiro') && { r: '/faturas', t: 'Faturas', i: 'fatura' }, habil(p, 'habilitar_suporte') && { r: '/atendimentos', t: 'Atendimento', i: 'chat' }, { acao: 'menu', t: 'Mais', i: 'menu' }].filter(Boolean);
    return '<nav class="casca-nav" style="grid-template-columns:repeat(' + itens.length + ',minmax(0,1fr))" aria-label="Seções">' + itens.map(x => '<a ' + (x.acao ? 'data-acao="' + x.acao + '"' : 'data-ir="' + x.r + '"') + ' class="' + (x.r && (r === x.r || (x.r !== '/' && r.startsWith(x.r))) ? 'ativo' : '') + '">' + ICONE[x.i] + '<span>' + x.t + '</span></a>').join('') + '</nav>';
  };

  // telas
  function telaInicio(i) {
    const p = parametros(); const dc = dadosCliente();
    const nome = primeiroNome((window.app && app.cliente_nome) || dc.fantasia || dc.razao || '');
    const contrato = contratoAtivo(i); const cons = consumoPrincipal(i);
    const fats = faturasInicio(i); const f = fats[0] || null; const st = f ? statusFatura(f) : null;
    const bloq = contratosBloqueados(i).filter(c => podeDesbloquear(c) && !suspenso(c) && !podeLiberarVelocidade(c));
    const lento = todosContratos(i).filter(podeLiberarVelocidade);
    const verFatura = blocoInicio(i, 'mostrar_fatura'), verPlano = blocoInicio(i, 'mostrar_plano');
    const nAtend = (() => { try { return (i.atendimentos.atendimentos_abertos || []).length; } catch (e) { return 0; } })();
    const chips = [];
    if (contrato) { const [t, cls] = statusNet(contrato); chips.push('<span class="casca-chip"><span class="casca-ponto ' + cls + '"></span>Nº ' + esc(contrato.id) + ' · ' + esc(t) + '</span>'); }
    const plano = (cons && cons.plano) || (contrato && (contrato.descricao_aux_plano_venda || contrato.contrato)) || '';
    if (plano && verPlano) chips.push('<span class="casca-chip casca-chip-plano">' + esc(plano) + '</span>');
    const atalhos = menuItens().filter(m => m.r !== '/' && m.r[0] !== '!' && m.r !== '/relatorios' && m.r !== '/configuracoes').slice(0, 6).map(m => Object.assign({}, m, { badge: m.r === '/faturas' ? fats.length : m.r === '/atendimentos' ? nAtend : 0 }));
    const logo = logoProvedor();
    return '<div class="casca-topo">'
      + '<div class="casca-topo-linha">' + (logo ? '<span class="casca-logo"><img src="' + esc(logo) + '" alt=""></span>' : '<span class="casca-logo-nome">' + esc(CFG.nome || '') + '</span>')
      + '<span class="casca-topo-botoes"><a class="casca-icone-btn" data-ir="/dados_cliente" aria-label="Meus dados">' + ICONE.pessoa + '</a>' + botaoMenu() + '</span></div>'
      + '<div class="casca-ola"><span>Olá,</span><strong>' + esc(nome || 'cliente') + '</strong></div>'
      + (chips.length ? '<div class="casca-chips">' + chips.join('') + '</div>' : '')
      + '</div><div class="casca-corpo">'
      + (bloq.length ? '<button class="casca-card casca-linha casca-destaque" data-acao="desbloquear" data-contrato="' + esc(bloq[0].id) + '"><span class="casca-ico">' + ICONE.cadeado + '</span><span class="casca-linha-txt"><strong>Internet bloqueada</strong><span>Toque para liberar em confiança enquanto paga</span></span>' + ICONE.seta + '</button>' : '')
      + (lento.length ? '<button class="casca-card casca-linha casca-destaque" data-acao="liberar-velocidade" data-contrato="' + esc(lento[0].id) + '"><span class="casca-ico">' + ICONE.velocidade + '</span><span class="casca-linha-txt"><strong>Velocidade reduzida</strong><span>Toque para liberar a velocidade por um tempo enquanto paga</span></span>' + ICONE.seta + '</button>' : '')
      + (!verFatura ? '' : f ? '<div class="casca-card casca-fatura ' + st + '">'
          + '<div class="casca-fatura-cab"><div><span class="casca-rotulo">Fatura de ' + esc(mesNome(f.data_vencimento) || 'referência') + '</span><span class="casca-valor">' + esc(valorFatura(f)) + '</span><span class="casca-sub">' + (st === 'vencida' ? 'Venceu em ' : 'Vence em ') + esc(dataBr(f.data_vencimento)) + '</span></div>' + etiqueta(ROTULO_FAT[st], st) + '</div>'
          + '<div class="casca-botoes">' + (sim(p.pix_habilitar) ? '<button class="casca-btn pri" data-acao="pix" data-idx="0">' + ICONE.pix + txe('pix', 'Pagar com PIX') + '</button>' + '<details class="casca-outras"><summary>' + txe('outras', 'Outras formas de pagamento') + '</summary><div class="casca-outras-itens">' + '<button class="casca-btn sec" data-acao="pdf" data-idx="0">' + ICONE.pdf + txe('boleto', 'Boleto') + '</button>' + '</div></details>' : '<button class="casca-btn sec" data-acao="pdf" data-idx="0">' + ICONE.pdf + txe('boleto', 'Boleto') + '</button>') + '</div>'
          + (fats.length > 1 ? '<a class="casca-mais" data-ir="/faturas">Ver as ' + fats.length + ' faturas em aberto ' + ICONE.seta + '</a>' : '')
        + '</div>' : vazio('Tudo em dia', 'Nenhuma fatura em aberto'))
      + '<div class="casca-grade">' + atalhos.map(a => '<a class="casca-atalho" data-ir="' + a.r + '"><span class="casca-ico">' + ICONE[a.i] + '</span><span>' + txe('atalho:' + a.r, a.t) + '</span>' + (tx('atalhoSub:' + a.r, '') ? '<small class="casca-atalho-sub">' + txe('atalhoSub:' + a.r, '') + '</small>' : '') + (a.badge ? '<b class="casca-badge">' + a.badge + '</b>' : '') + '</a>').join('')
        + '</div>'
      + (cons && verPlano ? '<div class="casca-card casca-plano"><span class="casca-rotulo">Seu plano</span><strong>' + esc(cons.plano || plano) + '</strong><span class="casca-sub">' + esc([cons.endereco, cons.numero_endereco].filter(Boolean).join(', ')) + '</span></div>' : '')
      + contatoCard(p)
      + '</div>';
  }
  const contatoCard = p => {
    if (!sim(p.habilitar_contato)) return '';
    const itens = [p.whatsapp_link && '<a class="casca-btn sec" href="' + esc(/^https?:\/\//i.test(p.whatsapp_link || '') ? p.whatsapp_link : '#') + '" target="_blank" rel="noopener">' + ICONE.chat + 'WhatsApp</a>', p.telefone_contato && '<a class="casca-btn sec" href="tel:' + esc(String(p.telefone_contato).replace(/[^\d+]/g, '')) + '">' + ICONE.fone + 'Ligar</a>'].filter(Boolean);
    return itens.length ? '<div class="casca-card"><span class="casca-rotulo">Fale com a gente</span><div class="casca-botoes">' + itens.join('') + '</div></div>' : '';
  };

  let recorrenciaFeita = false, recorrenciaDesde = 0;
  const marcarRecorrencia = nova => {
    if (nova) { recorrenciaFeita = false; recorrenciaDesde = Date.now(); }
    if (recorrenciaFeita || Date.now() - recorrenciaDesde > 15000) return;
    const caixa = $$('.main-panel input[type="checkbox"]').find(c => /recorr/i.test(((c.closest('label') || c.parentElement || {}).textContent || '') + ' ' + (c.id || '') + ' ' + (c.name || '')));
    if (!caixa) return setTimeout(agendar, 400);
    recorrenciaFeita = true;
    // destaca a opção; quem marca é o cliente (cobrança recorrente precisa da escolha dele)
    const rot = caixa.closest('label') || caixa.parentElement; if (rot) rot.classList.add('casca-destaque');
  };
  // botões de uma fatura em aberto: cada "Copiar" fica embaixo do seu botão; sem PIX, a coluna do boleto ocupa tudo
  const acoesFaturaItem = (p, f) => {
    const pix = sim(p.pix_habilitar), cartao = sim(p.credit_card_habilitar);
    const col = (btn, copia) => '<div class="casca-acao-col">' + btn + (copia || '') + '</div>';
    return '<div class="casca-acoes-fatura' + (pix ? '' : ' uma') + '">'
      + (pix ? col('<button class="casca-btn pri" data-acao="pix-grupo">' + ICONE.pix + txe('pix', 'Pagar com PIX') + '</button>', '<button class="casca-link" data-acao="pixcopiar-grupo">' + ICONE.copiar + txe('copiarPix', 'Copiar PIX') + '</button>') : '')
      + (pix ? '<details class="casca-outras"><summary>' + txe('outras', 'Outras formas de pagamento') + '</summary><div class="casca-outras-itens">' : '')
      + col('<button class="casca-btn sec" data-acao="pdf-grupo">' + ICONE.pdf + txe('boleto', 'Boleto') + '</button>', f.linha_digitavel ? '<button class="casca-link" data-acao="copiar-grupo">' + ICONE.copiar + txe('copiarBoleto', 'Copiar código') + '</button>' : '')
      + (cartao ? '<button class="casca-link casca-acao-cartao" data-acao="cartao-grupo">' + ICONE.cartao + 'Pagar com cartão</button>' : '')
      + (pix ? '</div></details>' : '')
      + '</div>';
  };

  function telaFaturas(i) {
    const p = parametros(); const grupos = gruposFaturas(i);
    let html = cabecalho(tx('tituloFaturas', 'Minhas faturas')) + '<div class="casca-corpo">';
    if (!grupos.length) html += vazio('Tudo em dia', 'Nenhuma fatura em aberto');
    for (const g of grupos) {
      const lista = Array.isArray(g.fatura) ? g.fatura : [];
      html += '<div class="casca-grupo"><span class="casca-rotulo">Contrato ' + esc(g.chave) + (g.descricao ? ' · ' + esc(g.descricao) : '') + '</span>';
      if (!lista.length) html += vazio('Tudo em dia', 'Nenhuma fatura em aberto neste contrato');
      lista.forEach((f, idx) => {
        const st = statusFatura(f); const aberta = st === 'vencida' || st === 'aberta' || st === 'parcial';
        html += '<div class="casca-card casca-fatura-item ' + st + '" data-grupo="' + esc(g.chave) + '" data-idx="' + idx + '">'
          + '<div class="casca-fatura-cab"><div><strong>' + esc(capital(mesNome(f.data_vencimento)) || ('Documento ' + f.documento)) + '</strong><span class="casca-sub">' + (st === 'vencida' ? 'Venceu em ' : st === 'paga' ? 'Paga · venc. ' : 'Vence em ') + esc(dataBr(f.data_vencimento)) + '</span></div><div class="casca-dir"><span class="casca-valor-sm">' + esc(valorFatura(f)) + '</span>' + etiqueta(ROTULO_FAT[st], st) + '</div></div>'
          + (aberta ? acoesFaturaItem(p, f) : '')
          + '</div>';
      });
      html += '</div>';
    }
    return html + '<p class="casca-nota">' + txe('notaFaturas', 'Pagou e ainda aparece em aberto? O banco pode levar até 1 dia útil para avisar o provedor.') + '</p></div>';
  }

  // Assinatura, como na Central: contrato "Aguardando assinatura" (AA) e termo com assinado = N. Com a assinatura digital
  // integrada do IXC abre o link dela (assinarContratoDigital); sem ela, o quadro de assinatura da própria Central (#assinarContrato).
  const contratoAssinavel = c => String(c.status_internet || '') === 'AA' && (c.integracao_assinatura_digital !== 'S' || !!c.url_assinatura_digital);
  const termosAssinaveis = i => { try { const t = i.planos.subcontratos.termos; return (Array.isArray(t) ? t : []).map((x, k) => Object.assign({ k }, x)).filter(x => x.assinado === 'N' && (x.integracao_assinatura_digital !== 'S' || !!x.url_assinatura_digital)); } catch (e) { return []; } };
  // Suspensão temporária: os quadros são os da própria Central (#modalSuspensao / #modalRemoveSuspensao, no index);
  // eles leem os dados da raiz (app), então preenche lá (e na página, como o planos.vue faz) antes de abrir.
  function suspensao(i, c, suspender) {
    const pl = flagsPlanos(i), alvos = [window.app, i].filter(Boolean);
    const por = (k, v) => alvos.forEach(o => { try { o[k] = v; } catch (e) {} });
    try {
      por('id_contrato', c.id);
      if (suspender) {
        por('intervalo_entre_suspensao', pl.intervalo_entre_suspensao); por('prolonga_fidelidade_tempo_suspensao', pl.prolonga_fidelidade_tempo_suspensao); por('tempo_min_suspensao', pl.tempo_min_suspensao);
        if (!document.getElementById('modalSuspensao')) return aviso('Suspensão', 'A Central deste provedor não tem a suspensão pela internet. Fale com o atendimento.', 'red');
        abrirModal('modalSuspensao');
      } else {
        por('data_inicial', c.data_inicial_suspensao); por('data_final', c.data_final_suspensao); por('total_dias_suspensao', c.total_dias_suspensao);
        if (typeof window.organizarModalRemoverSuspensao === 'function') window.organizarModalRemoverSuspensao(c.dias_suspensos, c.proporcional);
        if (!document.getElementById('modalRemoveSuspensao')) return aviso('Suspensão', 'Para remover a suspensão, fale com o atendimento.', 'red');
        abrirModal('modalRemoveSuspensao');
      }
    } catch (e) { aviso('Erro', 'Não consegui abrir a suspensão. Tente de novo.', 'red'); }
  }
  function assinar(i, alvo, termo) {
    try {
      if (alvo.integracao_assinatura_digital === 'S') { if (typeof i.assinarContratoDigital === 'function') i.assinarContratoDigital(alvo.url_assinatura_digital); else window.open(alvo.url_assinatura_digital, '_blank'); return; }
      i.id_contrato_assinatura = termo ? alvo.id_contrato : alvo.id; i.assinatura_termo = !!termo;
      i.id_termo = termo ? alvo.id_termo : null; i.cliente_contrato_assinatura_termo_id = termo ? alvo.id : null;
      abrirModal('assinarContrato');
    } catch (e) {}
  }

  function telaContratos(i) {
    const p = parametros(); const lista = todosContratos(i); const termos = termosAssinaveis(i);
    let html = cabecalho('Contratos') + '<div class="casca-corpo">';
    const pendentes = lista.filter(contratoAssinavel).length + termos.length;
    if (pendentes > 0) html += '<div class="casca-card casca-linha casca-destaque"><span class="casca-ico">' + ICONE.lapis + '</span><span class="casca-linha-txt"><strong>' + (pendentes === 1 ? 'Falta 1 assinatura' : 'Faltam ' + pendentes + ' assinaturas') + '</strong><span>Toque em "Assinar" para assinar pelo celular</span></span></div>';
    for (const t of termos) html += '<div class="casca-card"><div class="casca-fatura-cab"><div><span class="casca-rotulo">Termo · contrato ' + esc(t.id_contrato) + '</span><strong class="casca-titulo-card">' + esc(t.cliente_contrato_modelo_descricao || 'Termo') + '</strong></div>' + etiqueta('Aguardando assinatura', 'aviso') + '</div>'
      + '<button class="casca-btn pri largo" data-acao="assinar-termo" data-k="' + t.k + '">' + ICONE.lapis + 'Assinar termo</button>'
      + '<div class="casca-botoes"><button class="casca-btn sec" data-acao="ver-termo" data-k="' + t.k + '">' + ICONE.contrato + 'Ver termo</button></div></div>';
    if (!lista.length) html += vazio('Nenhum contrato', 'Não encontramos contratos no seu cadastro', 'alerta');
    for (const c of lista) {
      const [t, cls] = suspenso(c) ? ['Suspenso', 'neutro'] : statusNet(c);
      const linhas = [['Plano', c.descricao_aux_plano_venda && c.descricao_aux_plano_venda !== c.contrato ? c.descricao_aux_plano_venda : ''], ['Valor', num(c.valor_unitario) > 0 ? dinheiro(c.valor_unitario) + '/mês' : ''], ['Ativado em', dataBr(c.data_ativacao)], ['Fidelidade até', dataBr(c.data_validade)],
        ['Suspenso', suspenso(c) && (c.data_inicial_suspensao || c.data_final_suspensao) ? [c.data_inicial_suspensao, c.data_final_suspensao].filter(Boolean).map(d => /-/.test(d) ? dataBr(d) : d).join(' até ') : '']].filter(x => x[1]);
      html += '<div class="casca-card">'
        + '<div class="casca-fatura-cab"><div><span class="casca-rotulo">Contrato ' + esc(c.id) + '</span><strong class="casca-titulo-card">' + esc(c.contrato || '') + '</strong></div>' + etiqueta(t, cls) + '</div>'
        + '<dl class="casca-dl">' + linhas.map(([k, v]) => '<div><dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd></div>').join('') + '</dl>'
        + (contratoAssinavel(c) ? '<button class="casca-btn pri largo" data-acao="assinar" data-contrato="' + esc(c.id) + '">' + ICONE.lapis + 'Assinar contrato</button>' : '')
        + (podeDesbloquear(c) && !suspenso(c) && !podeLiberarVelocidade(c) ? '<button class="casca-btn pri largo" data-acao="desbloquear" data-contrato="' + esc(c.id) + '">' + ICONE.cadeado + 'Desbloquear em confiança</button>' : '')
        + (podeLiberarVelocidade(c) ? '<button class="casca-btn pri largo" data-acao="liberar-velocidade" data-contrato="' + esc(c.id) + '">' + ICONE.velocidade + 'Liberar a velocidade por um tempo</button>' : '')
        + (suspenso(c) ? '<button class="casca-btn pri largo" data-acao="remover-suspensao" data-contrato="' + esc(c.id) + '">' + ICONE.cadeado + 'Remover a suspensão</button>' : '')
        + '<div class="casca-botoes"><button class="casca-btn sec" data-acao="ver-contrato" data-contrato="' + esc(c.id) + '">' + ICONE.contrato + 'Ver contrato</button>'
        + (sim(p.exibir_detalhamento_financeiro) ? '<button class="casca-btn sec" data-acao="detalhamento" data-contrato="' + esc(c.id) + '">' + ICONE.fatura + 'Financeiro</button>' : '')
        + (podeSuspender(i, c) ? '<button class="casca-btn sec" data-acao="suspender" data-contrato="' + esc(c.id) + '">' + ICONE.relogio + 'Suspender por um tempo</button>' : '') + '</div>'
        + '</div>';
    }
    return html + '</div>';
  }

  // Consumo: séries que a Central já carrega (GB por período); gráfico de barras nosso em SVG.
  let consumoAba = 'mensal', consumoLogin = 0;
  const SERIES = { diario: ['consumo_diario', 'Por dia'], semanal: ['consumo_ultima_semana', 'Última semana'], mensal: ['consumo_mensal', 'Por mês'] };
  const serie = (i, aba) => { try { const lista = i.consumos[SERIES[aba][0]] || []; return lista; } catch (e) { return []; } };
  const gb = v => { const n = parseFloat(String(v == null ? '' : v).replace(/,/g, '')); return isNaN(n) ? 0 : n; };
  function grafico(item) {
    const c = (item && item.consumo_login) || {}; const chaves = Object.keys(c);
    const rot = c[chaves.find(k => Array.isArray(c[k]) && !/^consumos_/.test(k))] || [];
    const down = (c.consumos_download || []).map(gb), up = (c.consumos_upload || []).map(gb);
    const n = Math.max(rot.length, down.length); if (!n) return '<p class="casca-sub">Sem dados de consumo para este período.</p>';
    const max = Math.max(1, ...down, ...up); const L = 320, A = 150, larg = L / n, b = Math.max(3, larg * 0.32);
    let barras = '', rotulos = '';
    for (let k = 0; k < n; k++) {
      const x = k * larg + larg / 2; const hd = (down[k] || 0) / max * A, hu = (up[k] || 0) / max * A;
      barras += '<rect x="' + (x - b - 1).toFixed(1) + '" y="' + (A - hd).toFixed(1) + '" width="' + b.toFixed(1) + '" height="' + hd.toFixed(1) + '" rx="2" class="d"/><rect x="' + (x + 1).toFixed(1) + '" y="' + (A - hu).toFixed(1) + '" width="' + b.toFixed(1) + '" height="' + hu.toFixed(1) + '" rx="2" class="u"/>';
      // os nomes dos meses ficam fora do SVG: o gráfico estica para caber na largura e o texto dentro dele esticava junto
      rotulos += '<span>' + ((n <= 12 || k % Math.ceil(n / 12) === 0) ? esc((s => s.includes('/') ? s.split('/').pop().slice(0, 3) : s.slice(0, 5))(String(rot[k] || ''))) : '') + '</span>';
    }
    const tot = a => a.reduce((s, v) => s + v, 0);
    return '<svg class="casca-grafico" viewBox="0 0 ' + L + ' ' + A + '" preserveAspectRatio="none" role="img" aria-label="Gráfico de consumo">' + barras + '</svg>'
      + '<div class="casca-grafico-rotulos" aria-hidden="true" style="grid-template-columns:repeat(' + n + ',minmax(0,1fr))">' + rotulos + '</div>'
      + '<div class="casca-legenda"><span><i class="d"></i>Download ' + tot(down).toFixed(1).replace('.', ',') + ' GB</span><span><i class="u"></i>Upload ' + tot(up).toFixed(1).replace('.', ',') + ' GB</span></div>';
  }
  function telaConsumo(i) {
    const lista = serie(i, consumoAba); const logins = serie(i, 'mensal');
    const item = lista[consumoLogin] || lista[0];
    let html = cabecalho('Consumo') + '<div class="casca-corpo">';
    if (logins.length > 1) html += '<div class="casca-abas">' + logins.map((l, k) => '<button data-acao="consumo-login" data-k="' + k + '" class="' + (k === consumoLogin ? 'ativo' : '') + '">' + esc([l.endereco, l.numero_endereco].filter(Boolean).join(', ') || l.login) + '</button>').join('') + '</div>';
    html += '<div class="casca-abas">' + Object.keys(SERIES).map(k => '<button data-acao="consumo-aba" data-aba="' + k + '" class="' + (k === consumoAba ? 'ativo' : '') + '">' + SERIES[k][1] + '</button>').join('') + '</div>';
    html += '<div class="casca-card">' + (item ? '<span class="casca-rotulo">' + esc(item.plano || '') + '</span>' + grafico(item) : '<p class="casca-sub">Sem dados de consumo.</p>') + '</div>';
    if (item && (item.endereco || item.login)) html += '<div class="casca-card"><span class="casca-rotulo">Conexão</span><strong>' + esc(item.login || '') + '</strong><span class="casca-sub">' + esc([item.endereco, item.numero_endereco].filter(Boolean).join(', ')) + '</span></div>';
    return html + '</div>';
  }

  function telaAtendimentos(i) {
    const a = (i.atendimentos && i.atendimentos.atendimentos) || [];
    let html = cabecalho('Atendimento') + '<div class="casca-corpo"><button class="casca-btn pri largo" data-ir="/atendimentos/novo_atendimento">' + ICONE.mais + 'Abrir novo atendimento</button>';
    if (!a.length) html += vazio('Nenhum atendimento', 'Quando você abrir um chamado, ele aparece aqui', 'chat');
    for (const t of a) {
      const aberto = !/finaliz|fechad|solucion/i.test(String(t.status_por_extenso || t.su_status || ''));
      html += '<a class="casca-card casca-linha" data-ir="/atendimentos/mensagens/' + encodeURIComponent(t.id) + '"><span class="casca-ico">' + ICONE.chat + '</span><span class="casca-linha-txt"><strong>' + esc(t.titulo || 'Atendimento') + '</strong><span>Protocolo ' + esc(t.protocolo || t.id) + ' · ' + esc(t.data_criacao_formatada || dataBr(t.data_criacao)) + '</span></span>'
        + etiqueta(t.status_por_extenso || (aberto ? 'Aberto' : 'Finalizado'), aberto ? 'aviso' : 'neutro') + (num(t.mensagens_nao_lida_cli) > 0 ? '<b class="casca-badge rel">' + esc(t.mensagens_nao_lida_cli) + '</b>' : '') + '</a>';
    }
    return html + '</div>';
  }

  // Novo atendimento: o formulário é nosso; ao enviar, os valores vão para o estado do Vue e o botão original
  // "Enviar ticket" é clicado (a Central valida, cria o protocolo e avisa).
  function telaNovoAtendimento(i) {
    const at = i.atendimentos || {}; const deps = at.departamento_novo_atendimento || []; const ass = at.assunto_novo_atendimento || [];
    if (!deps.length && !ass.length) return null;
    return cabecalho('Novo atendimento', '/atendimentos') + '<div class="casca-corpo"><form class="casca-card casca-form" data-form="novo-atendimento">'
      + (deps.length ? '<label>Departamento<select name="departamento_id" required><option value="">Escolha</option>' + deps.map(d => '<option value="' + esc(d.id) + '">' + esc(capital(d.setor)) + '</option>').join('') + '</select></label>' : '')
      + (ass.length ? '<label>Assunto<select name="assunto_id" required><option value="">Escolha</option>' + ass.map(d => '<option value="' + esc(d.id) + '">' + esc(capital(d.assunto)) + '</option>').join('') + '</select></label>' : '')
      + '<label>Título<input name="titulo" required maxlength="120" placeholder="Ex.: internet lenta à noite"></label>'
      + '<label>Mensagem<textarea name="mensagem" required rows="5" placeholder="Conte o que está acontecendo"></textarea></label>'
      + '<button class="casca-btn pri largo" type="submit">Enviar</button>'
      + (at.protocolo_novo_atendimento ? '<span class="casca-sub">Protocolo ' + esc(at.protocolo_novo_atendimento) + '</span>' : '')
      + '</form></div>';
  }

  // Conversa de um chamado: mensagens que a Central carregou (getMensagens) em balões; resposta pelo enviarMensagem dela.
  function telaMensagens(i) {
    const a = i.atendimentos || {}; const at = a.atendimento; const ms = Array.isArray(a.mensagens) ? a.mensagens : null;
    if (!at || !ms) return null;
    const baloes = ms.map((m, k) => {
      if (k === 0) return '<div class="casca-msg-desc"><span class="casca-rotulo">Descrição</span><p>' + esc(m.mensagem) + '</p><small>' + esc([m.data_label, m.data_hora].filter(Boolean).join(' ')) + '</small></div>';
      const eu = String(m.letra_nome || '').toUpperCase() === 'V';
      return '<div class="casca-balao ' + (eu ? 'eu' : 'eles') + '">' + (eu ? '' : '<strong>' + esc(capital(m.operador_nome || 'Atendente')) + '</strong>') + '<p>' + esc(m.mensagem) + '</p><small>' + esc([m.data_label, m.data_hora].filter(Boolean).join(' ')) + '</small></div>';
    }).join('');
    const fechado = /solucion|finaliz|fechad|cancel/i.test(String(at.status_text || ''));
    return cabecalho('Atendimento', '/atendimentos') + '<div class="casca-corpo">'
      + '<div class="casca-card"><span class="casca-rotulo">Protocolo ' + esc(at.protocolo) + '</span><strong class="casca-titulo-card">' + esc(at.titulo || '') + '</strong>' + etiqueta(at.status_text || '', fechado ? 'neutro' : 'aviso') + '</div>'
      + '<div class="casca-conversa">' + baloes + '</div>'
      + '<form class="casca-card casca-form casca-responder" data-form="mensagem"><label>Responder<textarea name="mensagem" rows="3" required placeholder="Escreva sua mensagem"></textarea></label><button class="casca-btn pri largo" type="submit"' + (i.enviar_mensagem ? ' disabled' : '') + '>' + (i.enviar_mensagem ? '<span class="casca-girando"></span>Enviando…' : 'Enviar mensagem') + '</button></form>'
      + '</div>';
  }

  function telaNotas(i) {
    const n = Array.isArray(i.notas) ? i.notas : [];
    let html = cabecalho('Notas fiscais') + '<div class="casca-corpo">';
    if (!n.length) html += vazio('Nenhuma nota', 'As notas fiscais aparecem aqui quando emitidas', 'nota');
    n.forEach((x, k) => {
      html += '<div class="casca-card casca-linha"><span class="casca-ico">' + ICONE.nota + '</span><span class="casca-linha-txt"><strong>Nota ' + esc(x.numero_nf || x.documento || x.id) + '</strong><span>' + esc(x.data_emissao_formatada || dataBr(x.data_emissao)) + ' · ' + esc(x.valor_total_formatado || dinheiro(x.valor_total)) + '</span></span>'
        + '<button class="casca-btn sec quadrado" data-acao="nota" data-k="' + k + '" aria-label="Baixar nota">' + ICONE.pdf + '</button></div>';
    });
    if (i.carregar_mais_notas) html += '<button class="casca-btn sec largo" data-acao="mais-notas">Carregar mais</button>';
    return html + '</div>';
  }

  // Meus dados: resumo, edição e troca de senha nossos. Os campos visíveis seguem a configuração do IXC
  // (cad_cli_*: E esconde, O obrigatório); salvar grava no estado do Vue e chama salvar() da Central (é uma
  // solicitação que o provedor analisa); a senha usa setSenhaAtualParaMD5 + alterarSenha da Central.
  let dadosModo = 'ver';
  const CAMPOS_DADOS = [
    ['razao', 'Nome completo', null, 'text'], ['fantasia', 'Como prefere ser chamado', 'cad_cli_fantasia', 'text'], ['data_nascimento_formatada', 'Data de nascimento', 'cad_cli_data_nascimento', 'text', 'numeric'],
    ['telefone_celular', 'Celular', 'cad_cli_celular', 'tel'], ['fone', 'Telefone', 'cad_cli_telefone', 'tel'], ['telefone_comercial', 'Telefone comercial', 'cad_cli_telefone_comercial', 'tel'],
    ['cep', 'CEP', 'cad_cli_cep', 'text', 'numeric'], ['endereco', 'Endereço', 'cad_cli_endereco', 'text'], ['numero', 'Número', 'cad_cli_numero', 'text'], ['bairro', 'Bairro', 'cad_cli_bairro', 'text'],
    ['complemento', 'Complemento', 'cad_cli_complemento', 'text'], ['referencia', 'Referência', 'cad_cli_referencia', 'text'],
  ];
  function telaDadosEditar(i) {
    const d = i.dados_cliente || {}; const flag = k => (k ? String(i[k] || '').toUpperCase() : 'O');
    const campos = CAMPOS_DADOS.filter(c => flag(c[2]) !== 'E').map(c => '<label><span>' + esc(c[1]) + (flag(c[2]) === 'O' ? ' <small>· obrigatório</small>' : '') + '</span><input name="' + c[0] + '" type="' + c[3] + '"' + (c[4] ? ' inputmode="' + c[4] + '"' : '') + ' value="' + esc(d[c[0]] || '') + '"' + (flag(c[2]) === 'O' ? ' required' : '') + '></label>').join('');
    const cidade = flag('cad_cli_cidade') !== 'E' && Array.isArray(i.estados) ? '<label>Estado<select name="uf_id">' + '<option value="">Selecione</option>' + i.estados.map(e => '<option value="' + esc(e.id) + '"' + (String(e.id) === String(d.uf_id) ? ' selected' : '') + '>' + esc(e.sigla) + '</option>').join('') + '</select></label>'
      + '<label>Cidade<input name="cidade_nome" list="casca-cidades" value="' + esc(d.cidade_nome || '') + '"><datalist id="casca-cidades">' + (i.cidades || []).slice(0, 600).map(c => '<option value="' + esc(c.nome) + '">').join('') + '</datalist></label>' : '';
    return cabecalho('Editar dados', '/dados_cliente') + '<div class="casca-corpo"><form class="casca-card casca-form" data-form="dados">' + campos + cidade
      + '<p class="casca-sub">A alteração vai para análise do provedor antes de valer.</p><button class="casca-btn pri largo" type="submit"' + (i.loading ? ' disabled' : '') + '>Enviar alteração</button><button class="casca-btn sec largo" type="button" data-acao="dados-ver">Cancelar</button></form></div>';
  }
  function telaDadosSenha(i) {
    return cabecalho('Trocar senha', '/dados_cliente') + '<div class="casca-corpo"><form class="casca-card casca-form" data-form="senha">'
      + '<label>Senha atual<input name="atual" type="password" autocomplete="current-password" required></label>'
      + '<label>Nova senha<input name="nova" type="password" autocomplete="new-password" required minlength="8"></label>'
      + '<label>Repita a nova senha<input name="repetir" type="password" autocomplete="new-password" required minlength="8"></label>'
      + '<p class="casca-sub">Use ao menos 8 caracteres, com letras maiúsculas, minúsculas e números.</p>'
      + '<button class="casca-btn pri largo" type="submit"' + (i.atualizando_dados_senha ? ' disabled' : '') + '>' + (i.atualizando_dados_senha ? '<span class="casca-girando"></span>Salvando…' : 'Salvar nova senha') + '</button><button class="casca-btn sec largo" type="button" data-acao="dados-ver">Cancelar</button></form></div>';
  }
  function telaDados(i) {
    if (dadosModo === 'editar') return telaDadosEditar(i);
    if (dadosModo === 'senha') return telaDadosSenha(i);
    const d = i.dados_cliente || dadosCliente(); const p = parametros();
    const linhas = [['Nome', d.razao], ['Como prefere ser chamado', d.fantasia], [/@/.test(d.hotsite_email || '') ? 'E-mail de acesso' : 'Login', d.hotsite_email], ['Celular', d.telefone_celular], ['Telefone', d.fone !== d.telefone_celular ? d.fone : ''], ['Endereço', [d.endereco, d.numero, d.bairro].filter(Boolean).join(', ')], ['Cidade', [d.cidade_nome, d.uf_sigla].filter(Boolean).join(' - ')], ['CEP', d.cep]].filter(x => x[1] && String(x[1]).trim());
    return cabecalho('Meus dados') + '<div class="casca-corpo">'
      + '<div class="casca-card casca-perfil"><span class="casca-avatar">' + esc(primeiroNome(d.fantasia || d.razao).slice(0, 1)) + '</span><strong>' + esc(capital(d.fantasia || d.razao)) + '</strong></div>'
      + '<div class="casca-card"><dl class="casca-dl">' + linhas.map(([k, v]) => '<div><dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd></div>').join('') + '</dl></div>'
      + '<div class="casca-botoes"><button class="casca-btn sec" data-acao="dados-editar">' + ICONE.lapis + 'Editar dados</button>' + (habil(p, 'habilitar_altera_senha') && (window.app && app.tipo_login) !== 'C' ? '<button class="casca-btn sec" data-acao="dados-senha">' + ICONE.cadeado + 'Trocar senha</button>' : '') + '</div>'
      + (i.mostrar_privacidade && !(window.app && app.oner == 1) ? (() => { const o = document.getElementById('acesso_automatico'); return '<label class="casca-card casca-linha casca-opcao"><input type="checkbox" data-acao="acesso-automatico"' + (o && o.checked ? ' checked' : '') + '><span class="casca-linha-txt"><strong>Entrar sozinho na rede de casa</strong><span>Conectado à internet do provedor, a Central abre sem pedir a senha</span></span></label>'; })() : '')
      + '<button class="casca-btn sec largo perigo" data-acao="sair">' + ICONE.sair + 'Sair da conta</button>'
      + '</div>';
  }

  const TELAS = { '/': telaInicio, '/faturas': telaFaturas, '/planos': telaContratos, '/consumos': telaConsumo, '/atendimentos': telaAtendimentos, '/atendimentos/novo_atendimento': telaNovoAtendimento, '/notas': telaNotas, '/dados_cliente': telaDados };
  const TITULOS = [[/^\/atendimentos\/mensagens/, 'Atendimento', '/atendimentos'], [/^\/faturas\/pagamentos/, 'Pagamento', '/faturas'], [/^\/faturas\/recorrencia/, 'Pagamento recorrente', '/faturas'], [/^\/speed_test/, 'Teste de velocidade', '/'], [/^\/connections/, 'Conexões', '/'], [/^\/configuracoes/, 'Pagamento recorrente', '/'], [/^\/relatorios/, 'Relatórios', '/'], [/^\/dados_cliente/, 'Meus dados', '/dados_cliente'], [/^\/trocarSenha/, 'Trocar senha', '/'], [/.*/, '', '/']];

  // menu (gaveta)
  function gavetaHtml() {
    const dc = dadosCliente(); const r = rota(); const p = parametros(); const logo = logoProvedor();
    const contato = sim(p.habilitar_contato) ? [p.whatsapp_link && '<a href="' + esc(/^https?:\/\//i.test(p.whatsapp_link || '') ? p.whatsapp_link : '#') + '" target="_blank" rel="noopener">' + ICONE.chat + '<span>WhatsApp</span></a>', p.telefone_contato && '<a href="tel:' + esc(String(p.telefone_contato).replace(/[^\d+]/g, '')) + '">' + ICONE.fone + '<span>Ligar para o provedor</span></a>'].filter(Boolean).join('') : '';
    return '<div class="casca-gaveta-fundo" data-acao="fechar-menu"></div><aside class="casca-gaveta-painel" role="dialog" aria-label="Menu">'
      + '<div class="casca-gaveta-topo">' + (logo ? '<span class="casca-logo"><img src="' + esc(logo) + '" alt=""></span>' : '') + '<button class="casca-icone-btn" data-acao="fechar-menu" aria-label="Fechar">' + ICONE.fechar + '</button></div>'
      + '<a class="casca-gaveta-perfil" data-ir="/dados_cliente"><span class="casca-avatar">' + esc(primeiroNome(dc.fantasia || dc.razao).slice(0, 1)) + '</span><span><strong>' + esc(capital(dc.fantasia || dc.razao)) + '</strong><small>Ver meus dados</small></span></a>'
      + '<nav>' + menuItens().map(m => '<a data-ir="' + m.r + '" class="' + (r === m.r || (m.r !== '/' && r.startsWith(m.r)) ? 'ativo' : '') + '">' + ICONE[m.i] + '<span>' + esc(m.t) + '</span></a>').join('') + '</nav>'
      + (contato ? '<div class="casca-gaveta-sec"><span class="casca-rotulo">Fale com a gente</span>' + contato + '</div>' : '')
      + '<a class="casca-gaveta-sair" data-acao="sair">' + ICONE.sair + '<span>Sair</span></a>'
      + '</aside>';
  }
  const abrirGaveta = () => { let g = $('#casca-gaveta'); if (!g) { g = document.createElement('div'); g.id = 'casca-gaveta'; document.body.appendChild(g); } g.innerHTML = gavetaHtml(); requestAnimationFrame(() => g.classList.add('aberta')); setTimeout(() => g.classList.add('aberta'), 30); };
  function fecharGaveta() { const g = $('#casca-gaveta'); if (g) g.classList.remove('aberta'); }

  // avisos (no lugar dos toasts da Central)
  function aviso(titulo, mensagem, cor, ms) {
    let box = $('#casca-avisos'); if (!box) { box = document.createElement('div'); box.id = 'casca-avisos'; box.setAttribute('aria-live', 'polite'); document.body.appendChild(box); }
    const tipo = /green|verde/i.test(cor || '') ? 'ok' : /red|vermelh/i.test(cor || '') ? 'erro' : 'info';
    const el = document.createElement('div'); el.className = 'casca-aviso ' + tipo;
    el.innerHTML = '<span class="casca-ico">' + (tipo === 'ok' ? ICONE.ok : ICONE.alerta) + '</span><span class="casca-aviso-txt">' + (titulo ? '<strong>' + esc(String(titulo).replace(/!$/, '')) + '</strong>' : '') + '<span>' + esc(mensagem || '') + '</span></span><button aria-label="Fechar">' + ICONE.fechar + '</button>';
    el.querySelector('button').onclick = () => el.remove();
    box.innerHTML = ''; box.appendChild(el);
    setTimeout(() => { el.classList.add('saindo'); setTimeout(() => el.remove(), 300); }, Math.min(Math.max(parseInt(ms, 10) || 4000, 2500), 7000));
  }
  let toastTrocado = false;
  const trocarToast = () => {
    if (toastTrocado) return;
    // a Central declara `class HotsiteWeb` no escopo global léxico: não vira window.HotsiteWeb, mas o nome é visível
    let H = null; try { H = typeof HotsiteWeb === 'function' ? HotsiteWeb : null; } catch (e) {}
    if (!H) return;
    const orig = H.prototype.criarToast;
    H.prototype.criarToast = function (timeout, title, message, icon, color) {
      if (document.documentElement.getAttribute('data-casca') !== 'on') return orig.apply(this, arguments);
      try { if (window.iziToast) iziToast.destroy(); } catch (e) {}
      aviso(title, message, color, timeout);
    };
    toastTrocado = true;
  };

  // confirmação
  function informar(titulo, texto) {
    let m = $('#casca-folha'); if (!m) { m = document.createElement('div'); m.id = 'casca-folha'; document.body.appendChild(m); }
    m.innerHTML = '<div class="casca-folha-fundo"></div><div class="casca-folha-painel" role="dialog"><strong class="casca-folha-titulo">' + esc(titulo) + '</strong><p>' + esc(texto) + '</p><button class="casca-btn pri largo" data-f="ok">Entendi</button></div>';
    m.classList.add('aberta');
    const fechar = () => m.classList.remove('aberta');
    m.querySelector('.casca-folha-fundo').onclick = fechar; m.querySelector('[data-f="ok"]').onclick = fechar;
  }

  // tela proporcional: largura real e escala de letra do aparelho
  // O desenho foi feito para 390px de largura. A casca escala tudo na mesma proporção (zoom) para a tela do cliente;
  // com letra grande no Android (escalaLetra que o app manda), cresce um pouco mais e troca para o modelo "grande"
  // (atalhos em 2 colunas, botões empilhados), em vez de inflar só o texto e espremer os botões.
  let tamAnterior = '';
  function ajustarTela() {
    const html = document.documentElement;
    const w = Math.max(280, Math.min(window.innerWidth || 390, 900));
    const letra = Math.max(0.85, Math.min(Number(CFG.escalaLetra) || 1, 2));
    // a escala segue só a largura (o desenho cabe sempre na tela); a letra grande só troca o arranjo, sem inflar
    const zoom = +Math.max(0.82, Math.min(w / 390, 1.1)).toFixed(3);
    const util = w / zoom; // largura que sobra para o desenho, em px da casca
    const tam = (letra >= 1.15 || util < 340) ? 'grande' : (util < 370 ? 'compacto' : 'normal');
    const chave = tam + '|' + zoom;
    if (chave === tamAnterior) return;
    tamAnterior = chave;
    html.setAttribute('data-casca-tam', tam);
    html.style.setProperty('--casca-zoom', String(zoom));
  }
  window.addEventListener('resize', () => { tamAnterior = ''; ajustarTela(); });

  function confirmar(titulo, texto, rotuloOk, aoConfirmar) {
    let m = $('#casca-folha'); if (!m) { m = document.createElement('div'); m.id = 'casca-folha'; document.body.appendChild(m); }
    m.innerHTML = '<div class="casca-folha-fundo"></div><div class="casca-folha-painel" role="dialog"><strong class="casca-folha-titulo">' + esc(titulo) + '</strong><p>' + esc(texto) + '</p><div class="casca-botoes"><button class="casca-btn sec" data-f="nao">Cancelar</button><button class="casca-btn pri" data-f="sim">' + esc(rotuloOk) + '</button></div></div>';
    m.classList.add('aberta');
    const fechar = () => m.classList.remove('aberta');
    m.querySelector('.casca-folha-fundo').onclick = fechar; m.querySelector('[data-f="nao"]').onclick = fechar;
    m.querySelector('[data-f="sim"]').onclick = () => { fechar(); aoConfirmar(); };
  }

  // PIX: a Central gera (getDadosPix) e preenche o modal dela; a casca mostra a nossa tela
  function lerPix() {
    const qr = $('#qrCodePix img'); const cc = $('#qrCodePixCopiaECola'); const h = $('#headerPix');
    let codigo = '';
    if (cc) { const campo = $('input, textarea', cc); codigo = (campo && campo.value) || ''; if (!codigo) { const m = /0002\d{2}\S{20,}/.exec(cc.textContent || ''); codigo = m ? m[0] : ''; } }
    const txt = (h && h.textContent) || '';
    const valor = (/Valor:\s*(R\$\s*[\d.,]+)/i.exec(txt) || [])[1] || '';
    const validade = (/v[áa]lido at[ée]:\s*([^()]+)/i.exec(txt) || [])[1] || '';
    return { qr: qr ? qr.src : '', codigo: codigo.trim(), valor, validade: validade.trim() };
  }
  function mostrarPix(f, copiarAoChegar) {
    document.documentElement.setAttribute('data-casca-pix', 'on');
    let m = $('#casca-pix'); if (!m) { m = document.createElement('div'); m.id = 'casca-pix'; document.body.appendChild(m); }
    const desenhar = (d, carregando) => {
      m.innerHTML = '<div class="casca-folha-fundo" data-pix="fechar"></div><div class="casca-folha-painel casca-pix-painel" role="dialog" aria-label="Pagar com PIX">'
        + '<div class="casca-pix-cab"><strong>' + txe('pix', 'Pagar com PIX') + '</strong><button class="casca-icone-btn" data-pix="fechar" aria-label="Fechar">' + ICONE.fechar + '</button></div>'
        + (carregando ? '<div class="casca-carregando"><span></span>Gerando o PIX…</div>'
          : (d.codigo || d.qr) ? '<span class="casca-valor centro">' + esc(f ? valorFatura(f) : dinheiro(d.valor)) + '</span>' + (f ? '<span class="casca-sub centro">Fatura de ' + esc(mesNome(f.data_vencimento)) + '</span>' : '')
            + (d.qr ? '<div class="casca-qr"><img src="' + esc(d.qr) + '" alt="QR Code do PIX"></div>' : '')
            + '<span class="casca-sub centro">Aponte a câmera do app do banco ou copie o código.</span>'
            + (d.codigo ? '<div class="casca-codigo">' + esc(d.codigo) + '</div><button class="casca-btn pri largo" data-pix="copiar">' + ICONE.copiar + txe('copiarCodigoPix', 'Copiar código Pix') + '</button>' : '')
            + (d.validade && !/indetermin/i.test(d.validade) ? '<span class="casca-sub centro">Válido até ' + esc(d.validade) + '</span>' : '')
          : '<div class="casca-vazio-pix">' + ICONE.alerta + '<strong>Não foi possível gerar o PIX agora</strong><span class="casca-sub">Tente o boleto ou fale com o provedor.</span></div>')
        + '</div>';
      m.classList.add('aberta');
      m.querySelectorAll('[data-pix="fechar"]').forEach(b => b.onclick = fecharPix);
      const c = m.querySelector('[data-pix="copiar"]'); if (c) c.onclick = () => { copiar(d.codigo, 'Código PIX copiado. Cole no app do seu banco.'); morfar(c, 'ok', seq(['copiar'], 1800)); };
      if (copiarAoChegar && !carregando && d.codigo && c) { copiarAoChegar = false; c.onclick(); }
    };
    desenhar({}, true);
    // limpa o que sobrou de um PIX anterior para não mostrar o código velho
    ['qrCodePix', 'qrCodePixCopiaECola', 'headerPix'].forEach(id => { const e = document.getElementById(id); if (e) e.innerHTML = ''; });
    const vez = ++pixVez; clearInterval(pixTimer);
    let n = 0; const t = pixTimer = setInterval(() => { if (vez !== pixVez) { clearInterval(t); return; } const d = lerPix(); n++; const loading = $('#pixLoading'); const pronto = d.codigo || d.qr || (n > 8 && loading && loading.style.display === 'none'); if (pronto || n > 80) { clearInterval(t); desenhar(d, false); } }, 250);
  }
  let pixVez = 0, pixTimer = null; // cada abertura do PIX tem a sua vez: resposta atrasada de outra fatura é ignorada
  function fecharPix() { pixVez++; clearInterval(pixTimer); const m = $('#casca-pix'); if (m) m.classList.remove('aberta'); const b = $('#botaoFecharModalPix'); if (b) b.click(); setTimeout(() => { document.documentElement.removeAttribute('data-casca-pix'); $$('.modal-backdrop').forEach(x => x.remove()); document.body.classList.remove('modal-open'); }, 350); }
  function copiar(texto, msg) {
    const ok = () => aviso('Copiado', msg, 'green');
    const falha = () => aviso('Não deu para copiar', 'Toque e segure no código para copiar.', 'red');
    const planoB = () => { try { const t = document.createElement('textarea'); t.value = texto; t.readOnly = true; t.style.cssText = 'position:fixed;top:0;left:0;opacity:0'; document.body.appendChild(t); t.select(); t.setSelectionRange(0, texto.length); const fez = document.execCommand('copy'); t.remove(); fez ? ok() : falha(); } catch (e) { falha(); } };
    try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(ok, planoB); else planoB(); } catch (e) { planoB(); }
  }

  // ações (sempre pela própria Central)
  const linhaOriginalInicio = idx => { const card = $$('.card').find(c => /faturas/i.test(($('.card-header', c) || {}).textContent || '')); return card ? $$('tbody tr', card)[idx] || null : null; };
  const clicarEm = (tr, sel) => { const b = tr && $(sel, tr); if (b) { b.click(); return true; } return false; };
  const SEL_PIX = '#btn_imprimir_pix_home, #btn_imprimir_pix, button[data-target="#modalPix"]';
  const SEL_PDF = '#btn_imprimir_fat_home, #btn_imprimir_fat, button[data-target="#modalImpressao"]';
  // A rotina de PIX da Central (HotsiteWeb.imprimirPix) desabilita "o botão de PIX" que achar por id; fora da tela
  // inicial nenhum existe e ela quebra antes de buscar o código. Um botão escondido com um dos ids resolve.
  const garantirBotaoPix = () => {
    if (['botaoImprimirPixConsultarFatura', 'btn_imprimir_pix', 'btn_imprimir_pix_home', 'btn_imprimir_pix_home_', 'btn_imprimir_pix_'].some(id => document.getElementById(id))) return;
    const b = document.createElement('button'); b.id = 'btn_imprimir_pix_'; b.type = 'button'; b.style.display = 'none'; b.setAttribute('aria-hidden', 'true'); document.body.appendChild(b);
  };
  const acoesFatura = {
    pix(i, f, tr, copiarAoChegar) {
      garantirBotaoPix();
      mostrarPix(f, copiarAoChegar);
      setTimeout(() => { try { (i && i.imprimirPix ? i.imprimirPix(f.id) : new HotsiteWeb().imprimirPix(f.id)); } catch (e) { window.__cascaErro = 'pix: ' + e.message; } const b = $('#btn_imprimir_pix_'); if (b) b.removeAttribute('disabled'); }, 60);
    },
    // no celular a Central baixa o PDF direto (o app entrega o arquivo); a casca só avisa
    pdf(i, f, tr) { aviso('Boleto', 'Baixando o PDF da fatura de ' + (mesNome(f.data_vencimento) || 'referência') + '…', 'blue', 4000); if (!clicarEm(tr, SEL_PDF)) { try { i.imprimirFatura(f.id); abrirModal('modalImpressao'); } catch (e) {} } },
    pixcopiar(i, f, tr) { acoesFatura.pix(i, f, tr, true); },
    copiar(i, f) { if (f.linha_digitavel) copiar(String(f.linha_digitavel).replace(/[.\s]/g, ''), 'Código de barras copiado. Cole no app do seu banco.'); },
    cartao(i, f, tr) {
      const a = tr && tr.querySelector('a[href*="/faturas/pagamentos/"]');
      const caminho = a ? a.getAttribute('href').replace(/^.*central_assinante_web/, '') : '/faturas/pagamentos/' + encodeURIComponent(f.id);
      ir(caminho);
    },
  };
  const acaoGrupo = (i, chave, idx, qual) => {
    let f = null; try { f = i.faturas.faturas[chave].fatura[idx]; } catch (e) {}
    if (!f) return;
    if (qual === 'copiar') return acoesFatura[qual](i, f);
    if (qual === 'pixcopiar') return acoesFatura.pixcopiar(i, f, null);
    try { const g = i.faturas.faturas[chave]; if (g && g.mostrar_detalhes === false) g.mostrar_detalhes = true; } catch (e) {}
    setTimeout(() => {
      const card = $$('.main-panel .card').find(c => new RegExp('ID:\\s*' + chave + '\\b').test(($('.card-header', c) || {}).textContent || ''));
      acoesFatura[qual](i, f, card ? $$('tbody tr', card)[idx] : null);
    }, 300);
  };
  const desbloquear = (i, idContrato, botao) => {
    const c = todosContratos(i).find(x => String(x.id) === String(idContrato)) || { id: idContrato };
    confirmar('Desbloquear em confiança?', 'A internet do contrato ' + (c.id) + ' volta agora. A fatura continua em aberto: pague assim que puder para não bloquear de novo.', 'Desbloquear', () => { try { i.desbloqueioConfianca(c.id, true); morfar(botao, 'aberto'); } catch (e) { aviso('Erro', 'Não foi possível pedir o desbloqueio.', 'red'); } });
  };

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
  // só a resposta do login.php da Central diz que a senha guardada não vale mais; sem internet ou com a Central fora do ar
  // o login guardado fica para a próxima vez
  let vigiandoLogin = false;
  const vigiarLogin = () => {
    if (vigiandoLogin || !window.jQuery) return; vigiandoLogin = true;
    window.jQuery(document).ajaxComplete((ev, xhr, op) => {
      if (!op || !/\/model\/login\/login\.php/.test(op.url || '')) return;
      try { const d = JSON.parse(xhr.responseText); if (d && d[0] && d[0].tipo && d[0].tipo !== 'sucesso') LEMBRAR.recusado = true; } catch (e) {}
    });
  };
  const lembrarOk = () => { ssSet('cascaAuto', ''); ssSet('cascaAutoEm', ''); if (APP && !LEMBRAR.okEnviado) { LEMBRAR.okEnviado = true; avisarApp({ acao: 'central_cred_ok' }); } };
  const telaEntrando = () => '<div class="casca-login-topo"><span class="casca-login-ola">Central do Assinante</span></div><div class="casca-login-cartao casca-entrando"><span class="casca-girando"></span><strong>Entrando na sua conta…</strong></div>';

  // tela de entrada
  // Desenhada por cima do login da Central; os campos alimentam o estado do componente de login e as ações
  // são os métodos dele (validarLogin, recuperarSenha, resetarSenhaAoLogarPelaPrimeiraVez, voltarParaLogin).
  let entrarEm = 0;
  const emLogin = () => { try { return window.__cascaPreviaLogin || (window.app && app.login === true) || /^\/login/.test(rota()); } catch (e) { return false; } };
  function telaLogin(li) {
    const previa = !!window.__cascaPreviaLogin && !(window.app && app.login === true);
    const v = k => (li && !previa ? li[k] : undefined);
    const logo = CFG.logo || v('logo_base_login') || logoProvedor() || (window.app && app.img_logo_base) || '';
    const tipo = v('tipo_login') || (window.app && app.tipo_login) || 'E';
    const rotulo = v('label_login') || (tipo === 'C' ? 'CPF ou CNPJ' : 'Login');
    // a Central às vezes fica presa em loading (verificação dela que demora ou falha): o botão só fica travado
    // nos 20 s depois de um toque em Entrar; fora disso ele volta, para o cliente tentar de novo
    const carregando = !!v('loading') && Date.now() - entrarEm < 20000, carregandoSenha = !!v('loading_senha');
    const cadastro = (v('permitir_cadastros_usuario') || (window.app && app.permitir_cadastros_usuario)) === 'S';
    let corpo;
    if (v('habilitar_form_primeiro_acesso')) {
      const porSms = v('recupera_senha_tipo') === 'S'; const cd = v('cooldown'); const espera = typeof cd === 'number' && cd < 300;
      corpo = '<form class="casca-login-form" data-form="redefinir">'
        + '<strong class="casca-login-titulo">' + (v('esqueceu_senha') ? 'Redefinir senha' : 'Primeiro acesso') + '</strong>'
        + '<p class="casca-sub">' + (v('esqueceu_senha') ? 'Confirme seus dados para receber o link de nova senha.' : 'Como é seu primeiro acesso, vamos criar sua senha. Confirme seus dados.') + '</p>'
        + '<label>CPF ou CNPJ<input name="cpf" inputmode="numeric" autocomplete="off" required></label>'
        + '<label>' + (porSms ? 'Celular cadastrado' : 'E-mail cadastrado') + '<input name="contato" type="' + (porSms ? 'tel' : 'email') + '" required></label>'
        + '<button class="casca-btn pri largo" type="submit"' + (espera ? ' disabled' : '') + '>' + (espera ? 'Aguarde ' + Math.floor(cd / 60) + ':' + String(cd % 60).padStart(2, '0') : 'Enviar') + '</button>'
        + '<button class="casca-btn sec largo" type="button" data-acao="login-voltar">Voltar</button></form>';
    } else {
      corpo = '<form class="casca-login-form" data-form="login">'
        + '<strong class="casca-login-titulo">Entrar</strong><p class="casca-sub">Acesse suas faturas, contratos e atendimentos.</p>'
        + '<label>' + esc(rotulo) + '<input name="user" autocomplete="username" ' + (tipo === 'C' ? 'inputmode="numeric" ' : '') + 'required></label>'
        + '<label>Senha<span class="casca-senha"><input name="password" type="password" autocomplete="current-password" required><button type="button" data-acao="login-ver-senha" aria-label="Mostrar senha">' + svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>') + '</button></span></label>'
        + '<label class="casca-check"><input type="checkbox" name="manter"' + (v('manter_conectado') ? ' checked' : '') + '><span>' + (APP ? 'Manter conectado neste celular' : 'Manter conectado') + '</span></label>'
        + '<button class="casca-btn pri largo" type="submit"' + (carregando ? ' disabled' : '') + '>' + (carregando ? '<span class="casca-girando"></span>Entrando…' : 'Entrar') + '</button>'
        // "Primeiro acesso?" logo abaixo do Entrar (aviso do provedor, que no app vinha por cima, nativo)
        + (CFG.avisoLogin && CFG.avisoLogin.texto ? '<button class="casca-link centro casca-login-ajuda" type="button" data-acao="login-ajuda">' + esc(CFG.avisoLogin.titulo || 'Primeiro acesso?') + ' Veja como entrar</button>' : '')
        // "Esqueci minha senha" só se o provedor ligar (CFG.esqueciSenha): sem recuperação configurada no IXC ele só frustra
        + (CFG.esqueciSenha && tipo === 'E' ? '<button class="casca-link centro" type="button" data-acao="login-esqueci"' + (carregandoSenha ? ' disabled' : '') + '>' + (carregandoSenha ? 'Verificando…' : 'Esqueci minha senha') + '</button>' : '')
        + (cadastro ? '<button class="casca-btn sec largo" type="button" data-acao="login-cadastro">Quero ser cliente</button>' : '')
        + '</form>';
    }
    return '<div class="casca-login-topo">' + (logo ? '<span class="casca-logo grande"><img src="' + esc(logo) + '" alt=""></span>' : '<span class="casca-logo-nome">' + esc(CFG.nome || '') + '</span>') + '<span class="casca-login-ola">Central do Assinante</span></div>'
      + '<div class="casca-login-cartao">' + corpo + '</div>'
      // "Ainda não é nosso cliente?" em destaque: a pergunta em negrito, o resto do texto logo abaixo
      + (CFG.avisoVisitante ? '<div class="casca-login-visitante">' + (m => m ? '<strong>' + esc(m[1]) + '</strong>' + (m[2].trim() ? '<p>' + esc(m[2].trim()) + '</p>' : '') : '<strong>' + esc(CFG.avisoVisitante) + '</strong>')(/^([^?]*\?)(.*)$/.exec(CFG.avisoVisitante)) + '<button class="casca-btn sec largo" type="button" data-acao="login-falar">' + ICONE.chat + 'Falar com a gente</button></div>' : '')
      + (previa ? '<p class="casca-nota">Prévia da tela de entrada (nada é enviado)</p>' : '');
  }
  let assinaturaLogin = '';
  function desenharLogin() {
    const li = inst();
    if (APP && window.app && app.login === true && !window.__cascaPreviaLogin && li) {
      let box0 = $('#casca-login'); if (!box0) { box0 = document.createElement('div'); box0.id = 'casca-login'; document.body.appendChild(box0); }
      // "Entrando…" desenhado uma vez só: redesenhar a cada volta disparava o observador de novo (laço) e reiniciava o giro
      const mostrarEntrando = () => { if (box0.dataset.estado !== 'entrando') { box0.innerHTML = telaEntrando(); box0.dataset.estado = 'entrando'; assinaturaLogin = ''; } };
      if (!LEMBRAR.respondeu) {
        const primeira = !LEMBRAR.pedido; pedirCredenciais();
        if (!LEMBRAR.respondeu) { mostrarEntrando(); if (primeira) setTimeout(() => { if (!LEMBRAR.respondeu) { LEMBRAR.respondeu = true; agendar(); } }, 1500); return; }
      }
      if (LEMBRAR.cred) {
        // uma tentativa: enquanto a Central ainda processa (loading, até 30 s) fica o "Entrando…"; se ela terminou e
        // continua no login, o app só apaga quando a Central recusou a senha. Sem resposta (internet caiu, Central fora
        // do ar), mostra o login agora e o guardado fica para a próxima abertura
        const em = +ssGet('cascaAutoEm') || 0, agora = Date.now();
        const esperando = li.loading === true && agora - em < 30000;
        if (em && (agora - em < 1500 || esperando)) { mostrarEntrando(); setTimeout(agendar, 800); return; }
        if (em) { ssSet('cascaAutoEm', ''); if (LEMBRAR.recusado) esquecerCredenciais(); else LEMBRAR.cred = null; LEMBRAR.recusado = false; }
        else { ssSet('cascaAutoEm', agora); mostrarEntrando(); LEMBRAR.recusado = false; vigiarLogin();
          try { li.user = LEMBRAR.cred.usuario; li.password = LEMBRAR.cred.senha; li.manter_conectado = true; li.validarLogin(li.user, li.password); } catch (e) { ssSet('cascaAutoEm', ''); LEMBRAR.cred = null; }
          setTimeout(agendar, 800); return; }
      }
    }
    let box = $('#casca-login'); if (!box) { box = document.createElement('div'); box.id = 'casca-login'; document.body.appendChild(box); }
    if (box.dataset.estado) { box.dataset.estado = ''; assinaturaLogin = ''; }
    const html = telaLogin(li);
    if (html === assinaturaLogin) return;
    const valores = {}; $$('input', box).forEach(x => { valores[x.name] = x.type === 'checkbox' ? x.checked : x.value; });
    const foco = document.activeElement && box.contains(document.activeElement) ? document.activeElement.name : null;
    box.innerHTML = html; assinaturaLogin = html;
    $$('input', box).forEach(x => { if (x.name in valores) { if (x.type === 'checkbox') x.checked = valores[x.name]; else x.value = valores[x.name]; } });
    if (foco && box.querySelector('[name="' + foco + '"]')) box.querySelector('[name="' + foco + '"]').focus();
  }
  const tirarLogin = () => { const b = $('#casca-login'); if (b) b.remove(); assinaturaLogin = ''; };

  // recolorir o que sobrou da paleta azul da Central (telas na moldura e modais)
  const azulado = s => { const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(s || ''); if (!m || (m[4] !== undefined && parseFloat(m[4]) < 0.2)) return false; const r = +m[1], g = +m[2], b = +m[3]; return b > 110 && b - r > 55 && b >= g - 10; };
  function recolorir(raiz) {
    if (!raiz) return;
    const els = raiz.querySelectorAll('*:not([data-casca-cor])'); let n = 0;
    for (const e of els) {
      if (++n > 2500) break;
      if (e.closest('#casca-raiz, #casca-gaveta, #casca-login, #casca-pix, #casca-folha, #casca-avisos')) continue;
      const cs = getComputedStyle(e);
      if (azulado(cs.backgroundColor)) { e.style.setProperty('background', 'var(--casca-primaria)', 'important'); e.style.setProperty('color', '#fff', 'important'); e.style.setProperty('border-color', 'var(--casca-primaria)', 'important'); }
      else if (azulado(cs.color)) e.style.setProperty('color', /^(A|BUTTON)$/.test(e.tagName) ? 'var(--casca-primaria-escura)' : 'var(--casca-texto-2)', 'important');
      if (azulado(cs.borderBottomColor) || azulado(cs.borderTopColor)) e.style.setProperty('border-color', 'var(--casca-borda)', 'important');
      e.setAttribute('data-casca-cor', '');
    }
  }

  // montagem
  let assinatura = '', ultimaRota = null, sessaoEnviada = null, menuEnviado = '';
  // token da sessão da Central: cookie "sessao" (gravado pela Central) ou o que ela guarda no armazenamento
  const sessaoCentral = () => {
    try { const c = /(?:^|;\s*)sessao=([^;]+)/.exec(document.cookie || ''); if (c) return decodeURIComponent(c[1]); } catch (e) {}
    for (const st of [sessionStorage, localStorage]) { try { const v = st.getItem('sessao'); if (v) { const j = JSON.parse(v); if (typeof j === 'string' && j) return j; } } catch (e) {} }
    return null;
  };
  const TITULOS_PROPRIOS = { '/': '', '/faturas': 'Minhas faturas', '/planos': 'Contratos', '/consumos': 'Consumo', '/atendimentos': 'Atendimento', '/atendimentos/novo_atendimento': 'Novo atendimento', '/notas': 'Notas fiscais', '/dados_cliente': 'Meus dados' };
  const alvo = () => $('.main-panel .content') || $('.main-panel');
  function desenhar() {
    marcarLogo();
    const html = document.documentElement;
    if (!document.body) return;
    if (!ehCentral()) { html.setAttribute('data-casca', 'off'); return; }
    html.setAttribute('data-casca', 'on');
    ajustarTela();
    if (APP && !html.hasAttribute('data-casca-app')) html.setAttribute('data-casca-app', '');
    trocarToast();
    const r = rota(); html.setAttribute('data-rota', r);
    if (emLogin()) { html.setAttribute('data-casca-modo', 'login'); fecharGaveta(); desenharLogin(); html.removeAttribute('data-casca-boot'); casca_pronta(); if (!window.__cascaPreviaLogin) { const raiz0 = $('#casca-raiz'); if (raiz0) raiz0.remove(); assinatura = ''; } return; }
    tirarLogin();
    if (APP && window.app && app.login === false) lembrarOk();
    const i = inst(); const a = alvo(); if (!a) return;
    if (r.indexOf("/faturas/pagamentos") === 0) { try { marcarRecorrencia(r !== ultimaRota); } catch (e) { window.__cascaErro = "recorrencia: " + e.message; } }
    if (r !== ultimaRota) {
      ultimaRota = r; if (r !== '/dados_cliente') dadosModo = 'ver';
      // no app, deixa acesa na barra nativa a aba que corresponde à tela (sem trocar de página)
      if (APP && (r === '/' || r === '/faturas')) avisarApp({ acao: 'aba_ativa', aba: r === '/' ? 'inicio' : 'faturas' });
    }
    // com a Central logada, entrega ao app o token da sessão (para o app usar a mesma sessão, se quiser)
    if (APP && window.app && app.login === false) {
      const tok = sessaoCentral();
      // sessão nova (outro login na mesma página): o app esquece a lista anterior, então a casca pede de novo
      if (tok && tok !== sessaoEnviada) { sessaoEnviada = tok; avisarApp({ acao: 'central_sessao', sessao: tok }); }
      const itens = menuItens().filter(m => m.r !== '/' && m.r !== '/faturas' && m.r !== '/atendimentos').map(m => ({ r: m.r, t: m.t }));
      const assin = JSON.stringify(itens);
      if (assin !== menuEnviado) { menuEnviado = assin; avisarApp({ acao: 'menu_central', itens }); }
    }
    // depois do redirecionamento de arranque da Central para "/", volta para o endereço pedido
    if (rotaPedida && window.app && app.login === false && !app.loading) {
      if (r === rotaPedida) rotaPedida = null;
      else if (r === '/') { const destino = rotaPedida; rotaPedida = null; setTimeout(() => { try { window.router.push('/central_assinante_web' + destino); } catch (e) {} }, 50); }
    }
    let conteudo = null, modo = 'moldura';
    const tela = TELAS[r] || (/^\/atendimentos\/mensagens\//.test(r) ? telaMensagens : null);
    // enquanto a página da Central busca os dados, mostra o esqueleto nosso (nunca a tela velha nem "tudo em dia" falso)
    if (tela && i && i.loading === true && r !== '/dados_cliente') { conteudo = cabecalho((TITULOS_PROPRIOS[r] || '')) + '<div class="casca-corpo"><div class="casca-card casca-esqueleto"></div><div class="casca-card casca-esqueleto curto"></div></div>'; modo = 'propria'; }
    else if (tela && i) { try { conteudo = tela(i); } catch (e) { conteudo = null; window.__cascaErro = String(e && e.stack || e).slice(0, 600); } if (conteudo) modo = 'propria'; }
    else if (tela && !i) { conteudo = cabecalho(TITULOS_PROPRIOS[r] || '') + '<div class="casca-corpo"><div class="casca-card casca-esqueleto"></div></div>'; modo = 'propria'; }
    if (!conteudo) { const t = TITULOS.find(x => x[0].test(r)); conteudo = cabecalho(t[1], t[2]); }
    if (modo === 'moldura') recolorir(a);
    recolorir($('.modal.in'));
    const novo = conteudo + navInferior();
    let raiz = $('#casca-raiz');
    if (raiz && raiz.parentElement === a && assinatura === modo + r + '|' + novo) { if (html.getAttribute('data-casca-modo') !== modo) html.setAttribute('data-casca-modo', modo); html.removeAttribute('data-casca-boot'); casca_pronta(); return; }
    if (!raiz || raiz.parentElement !== a) { if (raiz) raiz.remove(); raiz = document.createElement('div'); raiz.id = 'casca-raiz'; a.insertBefore(raiz, a.firstChild); }
    // não apaga um formulário que a pessoa está preenchendo
    if (raiz.contains(document.activeElement) && /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && assinatura.startsWith(modo + r + '|')) return;
    // guarda o que estava digitado nos formulários e devolve depois de redesenhar
    const valores = {}; $$('form[data-form] input, form[data-form] select, form[data-form] textarea', raiz).forEach(x => { if (x.name && x.type !== 'password') valores[x.closest('form').dataset.form + ':' + x.name] = x.value; });
    raiz.innerHTML = novo; assinatura = modo + r + '|' + novo;
    $$('form[data-form] input, form[data-form] select, form[data-form] textarea', raiz).forEach(x => { const k = x.closest('form').dataset.form + ':' + x.name; if (k in valores) x.value = valores[k]; });
    html.setAttribute('data-casca-modo', modo);
    html.removeAttribute('data-casca-boot'); casca_pronta();
  }

  document.addEventListener('click', ev => {
    const el = ev.target.closest('[data-ir], [data-acao]'); if (!el || !el.closest('#casca-raiz, #casca-gaveta, #casca-login')) return;
    if (el.closest('#casca-login') && el.type === 'submit') return;
    ev.preventDefault(); ev.stopPropagation();
    const i = inst();
    if (el.closest('#casca-login')) {
      const previa = !!window.__cascaPreviaLogin && !(window.app && app.login === true);
      const form = el.closest('form'); const user = form && form.elements.user ? form.elements.user.value.trim() : '';
      if (el.dataset.acao === 'login-ver-senha') { const s = form.elements.password; s.type = s.type === 'password' ? 'text' : 'password'; return; }
      if (el.dataset.acao === 'login-ajuda') return informar((CFG.avisoLogin && CFG.avisoLogin.titulo) || 'Primeiro acesso?', (CFG.avisoLogin && CFG.avisoLogin.texto) || '');
      if (el.dataset.acao === 'login-falar') { if (!avisarApp({ acao: 'ir_aba', aba: 'atendimento' })) aviso('Fale com a gente', 'Use o atendimento do provedor.', 'blue'); return; }
      if (previa) return aviso('Prévia', 'Na tela de verdade isto chama a Central.', 'blue');
      if (el.dataset.acao === 'login-esqueci') { if (!user) return aviso('Informe o login', 'Digite seu login para recuperar a senha.', 'red'); try { i.user = user; i.recuperarSenha(user); } catch (e) {} return; }
      if (el.dataset.acao === 'login-voltar') { try { i.voltarParaLogin(); } catch (e) { location.reload(); } return; }
      if (el.dataset.acao === 'login-cadastro') { abrirModal('modalCadastroWeb'); return; }
      return;
    }
    if (el.dataset.ir) { dadosModo = 'ver'; return ir(el.dataset.ir); }
    const acao = el.dataset.acao;
    if (acao === 'menu') return abrirGaveta();
    if (acao === 'fechar-menu') return fecharGaveta();
    if (acao === 'sair') { fecharGaveta(); return confirmar('Sair da conta?', 'Você vai precisar entrar de novo para ver suas faturas.', 'Sair', () => { esquecerCredenciais(); ssSet('cascaAutoEm', ''); LEMBRAR.okEnviado = false; try { app.encerrarSessao(); } catch (e) {} }); }
    if (acao === 'desbloquear') return desbloquear(i, el.dataset.contrato, el);
    if (acao === 'liberar-velocidade') { try { if (typeof i.liberacaoSuspensaoParcial === 'function') { morfar(el, 'carregando'); i.liberacaoSuspensaoParcial(el.dataset.contrato, true); } } catch (e) { aviso('Erro', 'Não consegui pedir a liberação. Tente de novo pela Central.', 'red'); } return; }
    if (acao === 'suspender' || acao === 'remover-suspensao') { const c = todosContratos(i).find(x => String(x.id) === el.dataset.contrato); if (c) suspensao(i, c, acao === 'suspender'); return; }
    if (acao === 'acesso-automatico') { const o = document.getElementById('acesso_automatico'); try { if (o) o.checked = el.checked; if (typeof i.habilitarDesabilitarAcessoAutomatico === 'function') i.habilitarDesabilitarAcessoAutomatico(); } catch (e) {} return; }
    if (acao === 'copiar' || acao === 'copiar-grupo') morfar(el, 'ok', seq(['copiar'], 1800));
    if (acao === 'pdf' || acao === 'pdf-grupo') { morfar(el, 'carregando'); const b = el; setTimeout(() => morfar(b, 'ok', seq(['pdf'], 1500)), 2200); }
    if (acao === 'ver-contrato') {
      try { i.imprimirPlano(el.dataset.contrato); abrirModal('modalImpressao'); } catch (e) {} return;
    }
    if (acao === 'assinar') { const c = todosContratos(i).find(x => String(x.id) === el.dataset.contrato); if (c) assinar(i, c, false); return; }
    if (acao === 'assinar-termo' || acao === 'ver-termo') {
      const t = termosAssinaveis(i).find(x => String(x.k) === el.dataset.k); if (!t) return;
      if (acao === 'assinar-termo') return assinar(i, t, true);
      try { i.imprimirPlano(t.id_contrato, t.id_termo, t.id); abrirModal('modalImpressao'); } catch (e) {} return;
    }
    if (acao === 'detalhamento') { try { i.imprimirDetalhamentoFinanceiro(el.dataset.contrato); abrirModal('modalImpressao'); } catch (e) {} return; }
    if (acao === 'nota') { try { const n = i.notas[parseInt(el.dataset.k, 10)]; i.imprimirNota(n.id); abrirModal('modalImpressao'); } catch (e) {} return; }
    if (acao === 'mais-notas') { try { i.carregarMaisNotas(); } catch (e) {} return; }
    if (acao === 'consumo-aba') { consumoAba = el.dataset.aba; assinatura = ''; return agendar(); }
    if (acao === 'consumo-login') { consumoLogin = parseInt(el.dataset.k, 10) || 0; assinatura = ''; return agendar(); }
    if (acao === 'dados-editar' || acao === 'dados-senha' || acao === 'dados-ver') { dadosModo = acao.slice(6); try { if (dadosModo === 'editar') i.atualizando_dados = true; if (dadosModo === 'ver') i.atualizando_dados = false; } catch (e) {} assinatura = ''; scrollTo(0, 0); return agendar(); }
    if (/-grupo$/.test(acao)) { const item = el.closest('[data-grupo]'); return acaoGrupo(i, item.dataset.grupo, parseInt(item.dataset.idx, 10), acao.replace('-grupo', '')); }
    const idx = parseInt(el.dataset.idx || '0', 10); const f = faturasInicio(i)[idx];
    if (f && acoesFatura[acao]) acoesFatura[acao](i, f, linhaOriginalInicio(idx));
  }, true);

  document.addEventListener('submit', ev => {
    const fl = ev.target.closest('#casca-login form');
    if (fl) {
      ev.preventDefault();
      const li = inst(); const val = k => (fl.elements[k] && fl.elements[k].value || '').trim();
      if (window.__cascaPreviaLogin && !(window.app && app.login === true)) return aviso('Prévia', 'Na tela de verdade isto entra na Central.', 'blue');
      try {
        if (fl.dataset.form === 'login') { entrarEm = Date.now(); setTimeout(agendar, 20500); li.user = val('user'); li.password = fl.elements.password.value; li.manter_conectado = !!(fl.elements.manter && fl.elements.manter.checked); if (APP) { if (li.manter_conectado) guardarCredenciais(li.user, li.password); else esquecerCredenciais(); } li.validarLogin(li.user, li.password); }
        else { li.cpf_cnpj_reset_password = val('cpf'); li.email_reset_password = val('contato'); li.setTimer(); li.resetarSenhaAoLogarPelaPrimeiraVez(val('cpf'), val('contato')); }
      } catch (e) { aviso('Erro', 'Não foi possível falar com a Central agora.', 'red'); }
      return;
    }
    const fm = ev.target.closest('#casca-raiz form[data-form="mensagem"]');
    if (fm) {
      ev.preventDefault();
      const i = inst(); const msg = (fm.elements.mensagem.value || '').trim(); if (!i || !msg) return;
      try { i.nova_mensagem = msg; i.enviarMensagem(i.atendimentos.atendimento.id_ticket, msg); fm.elements.mensagem.value = ''; } catch (e) { aviso('Erro', 'Não foi possível enviar a mensagem.', 'red'); }
      return;
    }
    const fd = ev.target.closest('#casca-raiz form[data-form="dados"], #casca-raiz form[data-form="senha"]');
    if (fd) {
      ev.preventDefault();
      const i = inst(); if (!i) return;
      const val = k => (fd.elements[k] && fd.elements[k].value || '').trim();
      if (fd.dataset.form === 'dados') {
        confirmar('Enviar alteração?', 'Confira os dados. Depois de enviada, a alteração passa pela análise do provedor e só poderá ser mudada de novo após essa análise.', 'Enviar', () => {
          try {
            const d = i.dados_cliente;
            for (const c of CAMPOS_DADOS) if (fd.elements[c[0]]) d[c[0]] = val(c[0]);
            if (fd.elements.uf_id) d.uf_id = val('uf_id');
            if (fd.elements.cidade_nome) { d.cidade_nome = val('cidade_nome'); const c = (i.cidades || []).find(x => String(x.nome).toLowerCase() === val('cidade_nome').toLowerCase()); if (c) d.cidade_id = c.id; }
            i.salvar(); dadosModo = 'ver'; assinatura = ''; agendar();
          } catch (e) { aviso('Erro', 'Não foi possível enviar a alteração.', 'red'); }
        });
      } else {
        const atual = fd.elements.atual.value, nova = fd.elements.nova.value, rep = fd.elements.repetir.value;
        if (nova !== rep) return aviso('Senhas diferentes', 'A nova senha e a repetição não conferem.', 'red');
        try {
          i.validaSenhaForca(nova);
          if (!i.senha_forte) return aviso('Senha fraca', 'Use ao menos 8 caracteres, com letras maiúsculas, minúsculas e números.', 'red');
          i.dados_cliente.senha_atual = atual; i.setSenhaAtualParaMD5(atual);
          setTimeout(() => { const a = i.dados_cliente.senha_atual || atual; i.alterarSenha(a, nova, rep); setTimeout(() => { if (!i.atualizando_dados_senha) { dadosModo = 'ver'; assinatura = ''; agendar(); } }, 2500); }, 1200);
        } catch (e) { aviso('Erro', 'Não foi possível trocar a senha.', 'red'); }
      }
      return;
    }
    const form = ev.target.closest('[data-form="novo-atendimento"]'); if (!form) return;
    ev.preventDefault();
    const i = inst(); if (!i) return;
    const v = k => (form.elements[k] && form.elements[k].value || '').trim();
    try {
      if (form.elements.departamento_id) i.departamento_id = v('departamento_id');
      if (form.elements.assunto_id) i.assunto_id = v('assunto_id');
      i.titulo = v('titulo'); i.mensagem = v('mensagem');
      setTimeout(() => { const b = $$('.main-panel .content button').find(x => /enviar ticket/i.test(x.textContent || '')); if (b) b.click(); else aviso('Erro', 'Não encontrei o envio da Central. Tente pelo menu.', 'red'); }, 150);
    } catch (e) { aviso('Erro', 'Não foi possível enviar.', 'red'); }
  }, true);

  let cssMontado = '';
  const aplicarCss = () => {
    const pai = document.head || document.documentElement;
    let st = $('#casca-css'); if (!st) { st = document.createElement('style'); st.id = 'casca-css'; pai.appendChild(st); }
    // o CSS (~54 KB) é montado uma vez só: antes as 3 trocas rodavam a cada redesenho
    const css = cssMontado || (cssMontado = CSS().replace(/%%PRIMARIA%%/g, CFG.primaria).replace(/%%PRIMARIA_ESCURA%%/g, CFG.primariaEscura).replace(/%%PRIMARIA_CLARA%%/g, CFG.primariaClara));
    if (st.textContent !== css) st.textContent = css;
    if (!$('#casca-fonte')) { const l = document.createElement('link'); l.id = 'casca-fonte'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'; pai.appendChild(l); }
  };
  // setTimeout, não requestAnimationFrame: com a janela encoberta o rAF não dispara e a casca não desenharia
  let agendado = false;
  const agendar = () => { if (agendado) return; agendado = true; setTimeout(() => { agendado = false; try { aplicarCss(); desenhar(); } catch (e) { window.__cascaErro = String(e && e.stack || e).slice(0, 600); } }, 16); };
  // Começa no primeiro instante da página (não espera o DOMContentLoaded): a Central desenha o login e as telas
  // durante os próprios scripts, antes desse evento, e a tela antiga apareceria nesse intervalo.
  const iniciar = () => {
    agendar();
    try { new MutationObserver(agendar).observe(document.documentElement, { childList: true, subtree: true, characterData: true }); } catch (e) {}
    // com o app em segundo plano ou a aba escondida a casca não redesenha (bateria); ao voltar, redesenha na hora
    const seVisivel = () => { if (!document.hidden) agendar(); };
    let rapido = setInterval(seVisivel, 120); setTimeout(() => { clearInterval(rapido); setInterval(seVisivel, 700); }, 15000);
    document.addEventListener('visibilitychange', seVisivel);
  };
  iniciar();

  // irPara: usado pelo app ao trocar entre as abas Início e Faturas, que compartilham a mesma página da Central.
  // Se a Central ainda não entrou, guarda o destino para depois do login.
  const irPara = caminho => { try { caminho = String(caminho || '/').replace(/^!/, ''); if (window.app && app.login === false && window.router) { if (rota() !== caminho) { fecharGaveta(); window.router.push('/central_assinante_web' + caminho); } } else rotaPedida = caminho === '/' ? null : caminho; } catch (e) {} };
  window.__casca = { versao: VERSAO, rota, ehCentral, irPara, desenhar: agendar, aviso, credenciais: c => { LEMBRAR.respondeu = true; LEMBRAR.cred = c && c.usuario && c.senha ? { usuario: String(c.usuario), senha: String(c.senha) } : null; agendar(); }, credOk: lembrarOk, recarregar(css) { window.__CASCA_CSS__ = css; aplicarCss(); assinatura = ''; agendar(); } };
})();
