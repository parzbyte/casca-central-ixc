/* casca da Central do Assinante do IXC, gerado por ferramentas/empacotar.mjs; não editar */
(function(){ if (!window.__CASCA_CSS__) window.__CASCA_CSS__ = "/* Casca da Central do Assinante. V2. Tudo sob html[data-casca=\"on\"].\n   data-casca-modo=\"propria\": a tela é nossa e o conteúdo original some (continua no DOM para as ações).\n   data-casca-modo=\"moldura\": rota sem tela própria; a página original aparece com nosso cabeçalho, barra e tema.\n   %%PRIMARIA%% etc. são trocados pelo casca.js com as cores do provedor (azul #2563EB como padrão). */\n\nhtml[data-casca=\"on\"] {\n  --casca-primaria: %%PRIMARIA%%;\n  --casca-primaria-escura: %%PRIMARIA_ESCURA%%;\n  --casca-primaria-clara: %%PRIMARIA_CLARA%%;\n  --casca-texto: #111111;\n  --casca-texto-2: #5F5F5C;\n  --casca-texto-3: #6B6B68;\n  --casca-fundo: #F4F4F2;\n  --casca-cartao: #FFFFFF;\n  --casca-borda: #E8E8E6;\n  --casca-ok: #0A6D33;\n  --casca-ok-claro: #E6F6EC;\n  --casca-aviso: #8A5A00;\n  --casca-aviso-claro: #FFF3D6;\n  --casca-fonte: Inter, \"Segoe UI\", Roboto, system-ui, sans-serif;\n  --casca-sombra: 0 1px 2px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.06);\n}\nhtml[data-casca=\"on\"] body { background: var(--casca-fundo) !important; color: var(--casca-texto) !important; font-family: var(--casca-fonte) !important; -webkit-tap-highlight-color: transparent; }\n\n/* a moldura da Central some sempre que a casca está montada */\nhtml[data-casca-modo] .topbar,\nhtml[data-casca-modo] .sidebar,\nhtml[data-casca-modo] .main-panel > nav.navbar,\nhtml[data-casca-modo] .main-panel .breadcrumb { display: none !important; }\nhtml[data-casca-modo] .main-panel { width: 100% !important; float: none !important; margin: 0 !important; padding: 0 0 96px 0 !important; position: relative !important; top: 0 !important; height: auto !important; min-height: 100vh; overflow: visible !important; }\nhtml[data-casca-modo] .main-panel .content { padding: 0 !important; margin: 0 !important; min-height: 0 !important; }\nhtml[data-casca-modo] .wrapper { padding-top: 0 !important; }\nhtml[data-casca-modo=\"propria\"] .main-panel .content > *:not(#casca-raiz) { display: none !important; }\n\n/* moldura: a página original com o nosso tema */\nhtml[data-casca-modo=\"moldura\"] .main-panel .content > .container-fluid { padding: 14px 16px 8px !important; }\nhtml[data-casca-modo=\"moldura\"] #casca-raiz .casca-cab-pagina { margin-bottom: 0; }\nhtml[data-casca=\"on\"] .card { background: var(--casca-cartao) !important; border: 1px solid var(--casca-borda) !important; border-radius: 18px !important; box-shadow: var(--casca-sombra) !important; overflow: hidden; margin: 0 0 12px !important; }\nhtml[data-casca=\"on\"] .card .card-header { background: transparent !important; box-shadow: none !important; border-bottom: 1px solid var(--casca-borda) !important; margin: 0 !important; border-radius: 0 !important; padding: 14px 16px !important; }\nhtml[data-casca=\"on\"] .card .card-header .title, html[data-casca=\"on\"] .card .card-header h4, html[data-casca=\"on\"] .card .card-header h3 { font-family: var(--casca-fonte) !important; font-weight: 700 !important; color: var(--casca-texto) !important; font-size: 16px !important; }\nhtml[data-casca=\"on\"] .card .card-header .material-icons, html[data-casca=\"on\"] .card .card-header .icone { color: var(--casca-primaria) !important; background: transparent !important; box-shadow: none !important; }\nhtml[data-casca=\"on\"] .card .card-header .category, html[data-casca=\"on\"] .card .card-header .desc { color: var(--casca-texto-2) !important; }\nhtml[data-casca=\"on\"] .card .card-footer { border-top: 1px solid var(--casca-borda) !important; }\nhtml[data-casca=\"on\"] .botao_acao_faturas, html[data-casca=\"on\"] .btn { border-radius: 999px !important; font-family: var(--casca-fonte) !important; font-weight: 600 !important; text-transform: none !important; letter-spacing: 0 !important; box-shadow: none !important; }\nhtml[data-casca=\"on\"] .botao_acao_faturas, html[data-casca=\"on\"] .btn-primary, html[data-casca=\"on\"] .btn-info, html[data-casca=\"on\"] .btn-success, html[data-casca=\"on\"] .btn-default { background: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; color: #fff !important; min-height: 44px; }\nhtml[data-casca=\"on\"] .botao_acao_faturas .material-icons, html[data-casca=\"on\"] .botao_acao_faturas i { color: #fff !important; }\nhtml[data-casca=\"on\"] input.form-control, html[data-casca=\"on\"] select.form-control, html[data-casca=\"on\"] textarea.form-control, html[data-casca=\"on\"] .main-panel input:not([type=checkbox]):not([type=radio]), html[data-casca=\"on\"] .main-panel select, html[data-casca=\"on\"] .main-panel textarea { border: 1px solid var(--casca-borda) !important; border-radius: 12px !important; background: #fff !important; padding: 10px 12px !important; height: auto !important; font-family: var(--casca-fonte) !important; font-size: 15px !important; box-shadow: none !important; background-image: none !important; }\nhtml[data-casca=\"on\"] .main-panel label { font-family: var(--casca-fonte) !important; color: var(--casca-texto-2) !important; font-weight: 600 !important; }\nhtml[data-casca=\"on\"] a { color: var(--casca-primaria-escura); }\nhtml[data-casca=\"on\"] .status_green, html[data-casca=\"on\"] .status_red, html[data-casca=\"on\"] .status_yellow { display: inline-block; border-radius: 999px !important; padding: 4px 10px !important; font-size: 12px !important; font-weight: 700 !important; }\nhtml[data-casca=\"on\"] #preloader, html[data-casca=\"on\"] .index-minimo { background: var(--casca-fundo) !important; }\n\n/* modais da Central */\nhtml[data-casca=\"on\"] .modal-content { border-radius: 22px !important; border: 0 !important; font-family: var(--casca-fonte) !important; box-shadow: 0 20px 60px rgba(0,0,0,0.25) !important; }\nhtml[data-casca=\"on\"] .modal-header { border-bottom: 1px solid var(--casca-borda) !important; background: #fff !important; }\nhtml[data-casca=\"on\"] .modal-header .close { opacity: 0.6; font-size: 28px; }\nhtml[data-casca=\"on\"] .modal-backdrop.in { opacity: 0.45 !important; }\nhtml[data-casca=\"on\"] #modalImpressao .modal-dialog { width: 100% !important; max-width: 100% !important; height: 100% !important; margin: 0 !important; }\nhtml[data-casca=\"on\"] #modalImpressao .modal-content { height: 100% !important; border-radius: 0 !important; display: flex; flex-direction: column; }\nhtml[data-casca=\"on\"] #modalImpressao .modal-body { flex: 1 1 auto; overflow: auto; }\nhtml[data-casca=\"on\"] #modalImpressao .modal-title { font-weight: 700 !important; }\nhtml[data-casca-pix=\"on\"] #modalPix, html[data-casca-pix=\"on\"] .modal-backdrop { display: none !important; }\nhtml[data-casca=\"on\"] .iziToast { border-radius: 16px !important; font-family: var(--casca-fonte) !important; box-shadow: var(--casca-sombra) !important; }\n\n/* layout próprio */\n#casca-raiz, #casca-gaveta, #casca-avisos, #casca-folha, #casca-pix { font-family: var(--casca-fonte); color: var(--casca-texto); -webkit-font-smoothing: antialiased; }\n#casca-raiz *, #casca-gaveta *, #casca-avisos *, #casca-folha *, #casca-pix * { box-sizing: border-box; }\n#casca-raiz button, #casca-gaveta button, #casca-folha button, #casca-pix button, #casca-avisos button { font: inherit; cursor: pointer; }\n#casca-raiz a, #casca-gaveta a { text-decoration: none; color: inherit; cursor: pointer; }\n#casca-raiz svg, #casca-gaveta svg, #casca-folha svg, #casca-pix svg, #casca-avisos svg { width: 22px; height: 22px; flex: 0 0 auto; }\n\n.casca-topo { background: var(--casca-primaria); color: #fff; padding: 12px 20px 16px; display: flex; flex-direction: column; gap: 10px; border-radius: 0 0 28px 28px; }\n.casca-topo-linha { display: flex; align-items: center; justify-content: space-between; }\n.casca-logo { display: inline-flex; align-items: center; height: 40px; padding: 6px 12px; background: #fff; border-radius: 12px; }\n.casca-logo img { height: 28px; max-width: 150px; object-fit: contain; display: block; }\n.casca-logo-nome { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; }\n.casca-icone-btn { width: 44px; height: 44px; border-radius: 22px; background: rgba(255,255,255,0.16); display: inline-flex; align-items: center; justify-content: center; color: #fff; border: 0; padding: 0; }\n.casca-topo-botoes { display: inline-flex; gap: 8px; }\n.casca-ola { display: flex; align-items: baseline; gap: 6px; min-width: 0; white-space: nowrap; overflow: hidden; }\n.casca-ola span { font-size: 17px; opacity: 0.85; }\n.casca-ola strong { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; overflow: hidden; text-overflow: ellipsis; }\n.casca-chips { display: flex; gap: 6px; flex-wrap: nowrap; min-width: 0; }\n.casca-chip { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.16); border-radius: 999px; padding: 5px 10px; font-size: 12.5px; font-weight: 600; flex: none; }\n.casca-chip.casca-chip-plano { flex: 0 1 auto; min-width: 0; display: block; }\n.casca-ponto { width: 8px; height: 8px; border-radius: 4px; background: #FFD166; }\n.casca-ponto.ok { background: #7CFFB2; }\n.casca-ponto.neutro { background: #DDD; }\n\n.casca-cab-pagina { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,0.96); backdrop-filter: saturate(1.4) blur(10px); border-bottom: 1px solid var(--casca-borda); padding: 10px 12px; display: flex; align-items: center; gap: 6px; }\n.casca-cab-pagina h1 { flex: 1 1 auto; font-size: 19px; font-weight: 700; letter-spacing: -0.02em; margin: 0; color: var(--casca-texto); font-family: var(--casca-fonte); }\n.casca-cab-pagina .casca-icone-btn { background: transparent; color: var(--casca-texto); }\n\n.casca-corpo { padding: 14px 16px 8px; display: flex; flex-direction: column; gap: 12px; }\n.casca-card { background: var(--casca-cartao); border: 1px solid var(--casca-borda); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: var(--casca-sombra); }\n.casca-rotulo { font-size: 11.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--casca-texto-3); }\n.casca-valor { font-size: 30px; font-weight: 700; letter-spacing: -0.02em; display: block; margin-top: 2px; }\n.casca-valor.centro, .casca-sub.centro { text-align: center; }\n.casca-valor-sm { font-size: 17px; font-weight: 700; }\n.casca-titulo-card { font-size: 16px; font-weight: 700; }\n.casca-sub { font-size: 13px; color: var(--casca-texto-2); display: block; line-height: 1.4; }\n.casca-fatura-cab { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }\n.casca-fatura-cab > div { display: flex; flex-direction: column; gap: 3px; min-width: 0; }\n.casca-dir { align-items: flex-end; flex: 0 0 auto; }\n.casca-etiqueta { font-size: 12px; font-weight: 700; padding: 5px 10px; border-radius: 999px; background: var(--casca-primaria-clara); color: var(--casca-primaria-escura); white-space: nowrap; flex: 0 0 auto; }\n.casca-etiqueta.paga, .casca-etiqueta.ok { background: var(--casca-ok-claro); color: var(--casca-ok); }\n.casca-etiqueta.cancelada, .casca-etiqueta.neutro { background: #EEEEEC; color: var(--casca-texto-2); }\n.casca-etiqueta.vencida, .casca-etiqueta.alerta { background: var(--casca-primaria); color: #fff; }\n.casca-etiqueta.aviso { background: var(--casca-aviso-claro); color: var(--casca-aviso); }\n.casca-botoes { display: flex; gap: 8px; flex-wrap: wrap; }\n.casca-btn { flex: 1 1 0; display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 0 16px; border-radius: 999px; border: 1px solid var(--casca-borda); background: #fff; color: var(--casca-texto) !important; font-size: 15px; font-weight: 600; text-decoration: none !important; white-space: nowrap; }\n.casca-btn svg { width: 18px !important; height: 18px !important; }\n.casca-btn.pri { background: var(--casca-primaria); border-color: var(--casca-primaria); color: #fff !important; }\n.casca-btn.sec { flex: 1 1 auto; }\n.casca-btn.quadrado { flex: 0 0 48px; padding: 0; }\n.casca-btn.largo { width: 100%; flex: 1 1 100%; }\n.casca-btn.perigo { color: var(--casca-primaria-escura) !important; }\n.casca-btn:active, .casca-atalho:active, .casca-linha:active { transform: scale(0.98); }\n.casca-links { display: flex; gap: 16px; flex-wrap: wrap; }\n.casca-link { display: inline-flex; align-items: center; gap: 6px; background: none; border: 0; padding: 6px 4px; min-height: 44px; color: var(--casca-primaria-escura); font-size: 14px; font-weight: 600; }\n.casca-link svg { width: 16px !important; height: 16px !important; }\n.casca-mais { display: inline-flex; align-items: center; gap: 4px; font-size: 13.5px; font-weight: 600; color: var(--casca-primaria-escura) !important; }\n.casca-mais svg { width: 16px !important; height: 16px !important; }\n.casca-vazio { align-items: center; text-align: center; padding: 26px 16px; }\n.casca-vazio strong { font-size: 17px; }\n.casca-vazio .casca-ico { background: var(--casca-ok-claro); color: var(--casca-ok); }\n.casca-linha { flex-direction: row; align-items: center; gap: 12px; text-align: left; width: 100%; position: relative; }\n.casca-linha-txt { display: flex; flex-direction: column; gap: 2px; flex: 1 1 auto; min-width: 0; }\n.casca-linha-txt strong { font-size: 15px; }\n.casca-linha-txt span { font-size: 13px; color: var(--casca-texto-2); }\n.casca-destaque { background: var(--casca-primaria-clara); border-color: transparent; }\n.casca-destaque .casca-ico { background: var(--casca-primaria); color: #fff; }\n.casca-ico { width: 42px; height: 42px; border-radius: 13px; background: var(--casca-primaria-clara); color: var(--casca-primaria-escura); display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; }\n.casca-grade { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }\n.casca-atalho { position: relative; background: var(--casca-cartao); border: 1px solid var(--casca-borda); border-radius: 18px; padding: 14px 6px; display: flex; flex-direction: column; align-items: center; gap: 8px; min-height: 96px; font-size: 12.5px; font-weight: 600; text-align: center; box-shadow: var(--casca-sombra); }\n.casca-atalho .casca-ico { width: 40px; height: 40px; }\n.casca-atalho .casca-atalho-sub { margin-top: -6px; font-size: 11px; font-weight: 500; line-height: 1.25; color: var(--casca-texto-2); }\n.casca-badge { position: absolute; top: 8px; right: 10px; min-width: 20px; height: 20px; border-radius: 10px; background: var(--casca-primaria); color: #fff; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; padding: 0 6px; }\n.casca-badge.rel { position: static; }\n.casca-plano strong { font-size: 15px; }\n.casca-grupo { display: flex; flex-direction: column; gap: 10px; }\n.casca-fatura-item strong { font-size: 15px; }\n.casca-nota { font-size: 12.5px; color: var(--casca-texto-3); text-align: center; padding: 4px 10px 0; line-height: 1.4; margin: 0; }\n.casca-dl { margin: 0; display: flex; flex-direction: column; }\n.casca-dl div { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-top: 1px solid #F0F0EE; }\n.casca-dl div:first-child { border-top: 0; }\n.casca-dl dt { font-size: 13px; color: var(--casca-texto-2); font-weight: 500; }\n.casca-dl dd { margin: 0; font-size: 14px; font-weight: 600; text-align: right; word-break: break-word; }\n.casca-perfil { align-items: center; text-align: center; }\n.casca-perfil strong { font-size: 18px; }\n.casca-avatar { width: 56px; height: 56px; border-radius: 28px; background: var(--casca-primaria); color: #fff; font-size: 22px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; }\n.casca-abas { display: flex; gap: 6px; background: #E9E9E7; border-radius: 999px; padding: 4px; overflow-x: auto; }\n.casca-abas button { flex: 1 1 0; border: 0; background: transparent; border-radius: 999px; min-height: 38px; padding: 0 12px; font-size: 13.5px; font-weight: 600; color: var(--casca-texto-2); white-space: nowrap; }\n.casca-abas button.ativo { background: #fff; color: var(--casca-texto); box-shadow: 0 1px 3px rgba(0,0,0,0.08); }\n#casca-raiz svg.casca-grafico { width: 100% !important; height: 170px !important; display: block; }\n#casca-raiz .casca-grafico-rotulos { display: grid; margin-top: 6px; font-size: 11px; color: var(--casca-texto-3); text-align: center; font-variant-numeric: tabular-nums; }\n#casca-raiz .casca-grafico-rotulos span { overflow: hidden; white-space: nowrap; }\n.casca-grafico rect.d { fill: var(--casca-primaria); }\n.casca-grafico rect.u { fill: #C9C9C6; }\n.casca-grafico text { font-size: 9px; fill: var(--casca-texto-3); font-family: var(--casca-fonte); }\n.casca-legenda { display: flex; gap: 16px; flex-wrap: wrap; font-size: 13px; color: var(--casca-texto-2); font-weight: 600; }\n.casca-legenda i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 6px; vertical-align: -1px; }\n.casca-legenda i.d { background: var(--casca-primaria); } .casca-legenda i.u { background: #C9C9C6; }\n.casca-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; color: var(--casca-texto-2); }\n.casca-form input, .casca-form select, .casca-form textarea { font: inherit; font-size: 15px; font-weight: 500; color: var(--casca-texto); border: 1px solid var(--casca-borda); border-radius: 14px; padding: 12px 14px; background: #fff; width: 100%; }\n.casca-form input:focus, .casca-form select:focus, .casca-form textarea:focus { outline: 2px solid var(--casca-primaria); outline-offset: 0; border-color: transparent; }\n\n/* barra inferior */\n.casca-nav { position: fixed; left: 0; right: 0; bottom: 0; z-index: 1040; display: grid; background: rgba(255,255,255,0.97); backdrop-filter: blur(10px); border-top: 1px solid var(--casca-borda); padding: 6px 8px calc(10px + env(safe-area-inset-bottom)); }\n.casca-nav a { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 0; color: var(--casca-texto-3) !important; font-size: 11px; font-weight: 600; }\n.casca-nav a.ativo { color: var(--casca-primaria) !important; font-weight: 700; }\n\n/* gaveta (menu) */\n#casca-gaveta { position: fixed; inset: 0; z-index: 2000; pointer-events: none; }\n#casca-gaveta.aberta { pointer-events: auto; }\n.casca-gaveta-fundo { position: absolute; inset: 0; background: rgba(17,17,17,0.45); opacity: 0; transition: opacity .2s; }\n#casca-gaveta.aberta .casca-gaveta-fundo { opacity: 1; }\n.casca-gaveta-painel { position: absolute; top: 0; right: 0; bottom: 0; width: min(86vw, 340px); background: #fff; transform: translateX(100%); transition: transform .25s cubic-bezier(.2,.8,.2,1); display: flex; flex-direction: column; padding: 14px 12px calc(16px + env(safe-area-inset-bottom)); overflow-y: auto; border-radius: 24px 0 0 24px; }\n#casca-gaveta.aberta .casca-gaveta-painel { transform: none; }\n.casca-gaveta-topo { display: flex; align-items: center; justify-content: space-between; padding: 0 4px 8px; }\n.casca-gaveta-topo .casca-logo { padding: 0; height: 36px; }\n.casca-gaveta-topo .casca-icone-btn { background: #F1F1EF; color: var(--casca-texto); }\n.casca-gaveta-perfil { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 16px; background: var(--casca-fundo); margin: 6px 0 10px; }\n.casca-gaveta-perfil .casca-avatar { width: 44px; height: 44px; font-size: 18px; }\n.casca-gaveta-perfil strong { display: block; font-size: 15px; }\n.casca-gaveta-perfil small { font-size: 12.5px; color: var(--casca-texto-2); }\n.casca-gaveta-painel nav { display: flex; flex-direction: column; gap: 2px; }\n.casca-gaveta-painel nav a, .casca-gaveta-sec a, .casca-gaveta-sair { display: flex; align-items: center; gap: 14px; padding: 12px; border-radius: 14px; font-size: 15px; font-weight: 600; color: var(--casca-texto) !important; }\n.casca-gaveta-painel nav a svg, .casca-gaveta-sec a svg, .casca-gaveta-sair svg { color: var(--casca-texto-3); }\n.casca-gaveta-painel nav a.ativo { background: var(--casca-primaria-clara); color: var(--casca-primaria-escura) !important; }\n.casca-gaveta-painel nav a.ativo svg { color: var(--casca-primaria); }\n.casca-gaveta-sec { border-top: 1px solid var(--casca-borda); margin-top: 10px; padding-top: 12px; display: flex; flex-direction: column; }\n.casca-gaveta-sec .casca-rotulo { padding: 0 12px 4px; }\n.casca-gaveta-sair { margin-top: auto; color: var(--casca-primaria-escura) !important; border-top: 1px solid var(--casca-borda); border-radius: 0; padding-top: 16px; }\n.casca-gaveta-sair svg { color: var(--casca-primaria) !important; }\n\n/* avisos */\n#casca-avisos { position: fixed; left: 12px; right: 12px; top: calc(10px + env(safe-area-inset-top)); z-index: 3000; display: flex; flex-direction: column; gap: 8px; pointer-events: none; }\n.casca-aviso { pointer-events: auto; display: flex; align-items: center; gap: 12px; background: #111; color: #fff; border-radius: 18px; padding: 12px 12px 12px 14px; box-shadow: 0 12px 30px rgba(0,0,0,0.25); animation: cascaEntra .25s cubic-bezier(.2,.8,.2,1); transition: opacity .3s, transform .3s; }\n.casca-aviso.saindo { opacity: 0; transform: translateY(-8px); }\n.casca-aviso .casca-ico { width: 32px; height: 32px; border-radius: 16px; background: rgba(255,255,255,0.14); color: #fff; }\n.casca-aviso.ok .casca-ico { background: #1F9D55; } .casca-aviso.erro .casca-ico { background: var(--casca-primaria); }\n.casca-aviso .casca-ico svg { width: 18px !important; height: 18px !important; }\n.casca-aviso-txt { flex: 1 1 auto; display: flex; flex-direction: column; gap: 1px; font-size: 13.5px; line-height: 1.35; }\n.casca-aviso-txt strong { font-size: 14px; }\n.casca-aviso button { border: 0; background: transparent; color: rgba(255,255,255,0.7); width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; }\n.casca-aviso button svg { width: 16px !important; height: 16px !important; }\n@keyframes cascaEntra { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }\n\n/* folhas (confirmação e PIX) */\n#casca-folha, #casca-pix { position: fixed; inset: 0; z-index: 2500; pointer-events: none; }\n#casca-folha.aberta, #casca-pix.aberta { pointer-events: auto; }\n.casca-folha-fundo { position: absolute; inset: 0; background: rgba(17,17,17,0.45); opacity: 0; transition: opacity .2s; }\n.aberta > .casca-folha-fundo { opacity: 1; }\n.casca-folha-painel { position: absolute; left: 0; right: 0; bottom: 0; background: #fff; border-radius: 26px 26px 0 0; padding: 22px 20px calc(20px + env(safe-area-inset-bottom)); display: flex; flex-direction: column; gap: 12px; transform: translateY(100%); transition: transform .28s cubic-bezier(.2,.8,.2,1); max-height: 92vh; overflow-y: auto; }\n.aberta > .casca-folha-painel { transform: none; }\n.casca-folha-painel::before { content: \"\"; width: 40px; height: 5px; border-radius: 3px; background: #DDD; align-self: center; margin: -10px 0 4px; }\n.casca-folha-titulo { font-size: 19px; font-weight: 700; letter-spacing: -0.01em; }\n.casca-folha-painel p { margin: 0; font-size: 14.5px; color: var(--casca-texto-2); line-height: 1.45; }\n.casca-pix-cab { display: flex; align-items: center; justify-content: space-between; }\n.casca-pix-cab strong { font-size: 18px; }\n.casca-pix-cab .casca-icone-btn { background: #F1F1EF; color: var(--casca-texto); }\n.casca-qr { align-self: center; padding: 12px; border: 1px solid var(--casca-borda); border-radius: 18px; background: #fff; }\n.casca-qr img { width: 210px; height: 210px; display: block; image-rendering: pixelated; }\n.casca-codigo { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 12px; color: var(--casca-texto-2); background: var(--casca-fundo); border: 1px dashed #D6D6D3; border-radius: 12px; padding: 10px 12px; word-break: break-all; max-height: 72px; overflow: hidden; }\n.casca-carregando { display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 40px 0; color: var(--casca-texto-2); font-size: 14px; }\n.casca-carregando span { width: 34px; height: 34px; border-radius: 50%; border: 3px solid var(--casca-primaria-clara); border-top-color: var(--casca-primaria); animation: cascaGira .8s linear infinite; }\n@keyframes cascaGira { to { transform: rotate(360deg); } }\n.casca-vazio-pix { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; padding: 24px 0; color: var(--casca-primaria); }\n.casca-vazio-pix strong { color: var(--casca-texto); font-size: 16px; }\n.casca-vazio-pix svg { width: 36px !important; height: 36px !important; }\n\n@media (min-width: 620px) {\n  .casca-corpo { max-width: 560px; margin: 0 auto; width: 100%; }\n  .casca-folha-painel { left: 50%; right: auto; width: 480px; margin-left: -240px; }\n}\n\n/* carregamento: o #loader da Central vira o nosso */\nhtml[data-casca=\"on\"] #preloader { background: transparent !important; }\nhtml[data-casca=\"on\"] #preloader:has(> #loader:not([style*=\"none\"])) { z-index: 2400 !important; }\nhtml[data-casca=\"on\"] #loader { position: fixed !important; inset: 0 !important; width: auto !important; height: auto !important; margin: 0 !important; border: 0 !important; border-radius: 0 !important; animation: none !important; transform: none !important; background: rgba(244,244,242,0.78) !important; backdrop-filter: blur(3px); z-index: 2400 !important; }\nhtml[data-casca=\"on\"] #loader::before { content: \"\" !important; position: absolute !important; left: 50% !important; top: 50% !important; width: 48px !important; height: 48px !important; margin: -24px 0 0 -24px !important; border-radius: 50% !important; border: 4px solid var(--casca-primaria-clara) !important; border-top-color: var(--casca-primaria) !important; background: transparent !important; animation: cascaGira .8s linear infinite !important; right: auto !important; bottom: auto !important; }\nhtml[data-casca=\"on\"] #loader::after { content: \"Carregando…\" !important; position: absolute !important; left: 0 !important; right: 0 !important; top: calc(50% + 40px) !important; text-align: center !important; font: 600 14px var(--casca-fonte) !important; color: var(--casca-texto-2) !important; border: 0 !important; background: none !important; animation: none !important; width: auto !important; height: auto !important; margin: 0 !important; }\nhtml[data-casca=\"on\"] .loader-modal { font-family: var(--casca-fonte) !important; color: var(--casca-texto-2) !important; font-weight: 600 !important; text-align: center; }\nhtml[data-casca=\"on\"] .loader-modal span { background: var(--casca-primaria) !important; }\nhtml[data-casca=\"on\"] .login_loader { border-color: var(--casca-primaria-clara) !important; border-top-color: var(--casca-primaria) !important; }\n.casca-girando { width: 18px; height: 18px; border-radius: 50%; border: 2.5px solid rgba(255,255,255,0.4); border-top-color: #fff; animation: cascaGira .8s linear infinite; display: inline-block; }\n\n/* tela de entrada */\nhtml[data-casca-modo=\"login\"] .app-login, html[data-casca-modo=\"login\"] .login-mobile, html[data-casca-modo=\"login\"] .login-principal { visibility: hidden !important; }\n#casca-login { position: fixed; inset: 0; z-index: 1500; overflow-y: auto; background: var(--casca-fundo); font-family: var(--casca-fonte); color: var(--casca-texto); -webkit-font-smoothing: antialiased; display: flex; flex-direction: column; }\n#casca-login * { box-sizing: border-box; }\n#casca-login button { font: inherit; cursor: pointer; }\n#casca-login svg { width: 20px; height: 20px; }\n.casca-login-topo { background: var(--casca-primaria); color: #fff; padding: calc(48px + env(safe-area-inset-top)) 24px 72px; display: flex; flex-direction: column; align-items: center; gap: 14px; border-radius: 0 0 32px 32px; }\n.casca-logo.grande { height: 64px; padding: 10px 18px; border-radius: 18px; }\n.casca-logo.grande img { height: 44px; max-width: 200px; }\n.casca-login-ola { font-size: 15px; font-weight: 600; opacity: 0.9; }\n.casca-login-cartao { margin: -48px 16px 16px; background: #fff; border-radius: 24px; box-shadow: 0 12px 40px rgba(17,17,17,0.10); padding: 24px 20px; }\n.casca-login-form { display: flex; flex-direction: column; gap: 14px; }\n.casca-login-titulo { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }\n.casca-login-form .casca-sub { margin: -8px 0 4px; }\n.casca-login-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; color: var(--casca-texto-2); }\n.casca-login-form input:not([type=checkbox]) { font: inherit; font-size: 16px; font-weight: 500; color: var(--casca-texto); border: 1px solid var(--casca-borda); border-radius: 14px; padding: 14px; background: #fff; width: 100%; }\n.casca-login-form input:focus { outline: 2px solid var(--casca-primaria); outline-offset: 0; border-color: transparent; }\n.casca-senha { position: relative; display: block; }\n.casca-senha input { padding-right: 50px !important; }\n.casca-senha button { position: absolute; right: 4px; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border: 0; background: transparent; color: var(--casca-texto-3); display: inline-flex; align-items: center; justify-content: center; }\n.casca-check { flex-direction: row !important; align-items: center; gap: 10px !important; font-size: 14px !important; color: var(--casca-texto) !important; font-weight: 500 !important; }\n.casca-check input { width: 20px !important; height: 20px !important; accent-color: var(--casca-primaria) !important; }\n.casca-link.centro { align-self: center; }\n/* a Central deixa transparente todo botão desativado (button[disabled] { background: transparent !important }) */\n#casca-login .casca-btn.pri[disabled], #casca-raiz .casca-btn.pri[disabled] { background: var(--casca-primaria) !important; color: #fff !important; opacity: 0.75; }\n#casca-login .casca-btn.sec[disabled], #casca-raiz .casca-btn.sec[disabled] { background: #fff !important; opacity: 0.6; }\n#casca-login .casca-btn[disabled] { opacity: 0.7; }\n#casca-login .casca-nota { margin-top: auto; padding-bottom: 16px; }\n\n/* esqueleto enquanto a Central busca os dados */\n.casca-esqueleto { min-height: 150px; background: linear-gradient(90deg, #fff 0%, #F3F3F1 40%, #fff 80%) !important; background-size: 200% 100% !important; animation: cascaBrilho 1.2s ease-in-out infinite; }\n.casca-esqueleto.curto { min-height: 92px; }\n@keyframes cascaBrilho { from { background-position: 100% 0; } to { background-position: -100% 0; } }\n.casca-form label small { font-weight: 500; color: var(--casca-texto-3); }\n\n/* caixa de seleção própria (a da Central é azul e o accent-color não vence o CSS dela) */\n#casca-login .casca-check input, #casca-raiz .casca-form input[type=checkbox] { -webkit-appearance: none !important; appearance: none !important; width: 22px !important; height: 22px !important; border: 2px solid #C9C9C6 !important; border-radius: 7px !important; background: #fff !important; display: inline-grid !important; place-content: center; margin: 0 !important; flex: 0 0 auto; position: static !important; opacity: 1 !important; }\n#casca-login .casca-check input:checked, #casca-raiz .casca-form input[type=checkbox]:checked { background: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; }\n#casca-login .casca-check input:checked::after, #casca-raiz .casca-form input[type=checkbox]:checked::after { content: \"\"; width: 10px; height: 6px; border: 2.5px solid #fff; border-top: 0; border-right: 0; transform: rotate(-45deg) translate(1px, -1px); }\n#casca-login .casca-check span::before, #casca-login .casca-check span::after { display: none !important; content: none !important; }\n\n/* conversa do chamado */\n.casca-conversa { display: flex; flex-direction: column; gap: 10px; }\n.casca-msg-desc { background: #fff; border: 1px solid var(--casca-borda); border-radius: 18px; padding: 14px 16px; }\n.casca-msg-desc p, .casca-balao p { margin: 4px 0 6px; font-size: 14.5px; line-height: 1.45; white-space: pre-wrap; word-break: break-word; }\n.casca-msg-desc small, .casca-balao small { font-size: 11.5px; color: var(--casca-texto-3); }\n.casca-balao { max-width: 86%; padding: 10px 14px; border-radius: 18px; }\n.casca-balao.eles { align-self: flex-start; background: #fff; border: 1px solid var(--casca-borda); border-bottom-left-radius: 6px; }\n.casca-balao.eles strong { font-size: 12.5px; color: var(--casca-primaria-escura); }\n.casca-balao.eu { align-self: flex-end; background: var(--casca-primaria); color: #fff; border-bottom-right-radius: 6px; }\n.casca-balao.eu small { color: rgba(255,255,255,0.75); }\n\n/* pente fino nas telas que seguem com o conteúdo da Central (moldura) */\nhtml[data-casca-modo=\"moldura\"] .main-panel .content .page, html[data-casca-modo=\"moldura\"] .main-panel .content .row { margin-top: 0 !important; padding-top: 0 !important; }\nhtml[data-casca-modo=\"moldura\"] .main-panel .content .container-fluid > * { margin-top: 0 !important; }\nhtml[data-casca-modo=\"moldura\"] .material-icons, html[data-casca-modo=\"moldura\"] .fa, html[data-casca-modo=\"moldura\"] .fas, html[data-casca-modo=\"moldura\"] .far { color: var(--casca-primaria) !important; }\nhtml[data-casca-modo=\"moldura\"] .btn .material-icons, html[data-casca-modo=\"moldura\"] .botao_acao_faturas .material-icons { color: #fff !important; }\nhtml[data-casca-modo=\"moldura\"] .text-info, html[data-casca-modo=\"moldura\"] .text-primary, html[data-casca-modo=\"moldura\"] [class*=\"text-cyan\"], html[data-casca-modo=\"moldura\"] .sem_mensagens_novas, html[data-casca-modo=\"moldura\"] .faturas_em_dia { color: var(--casca-texto-2) !important; }\nhtml[data-casca-modo=\"moldura\"] h1, html[data-casca-modo=\"moldura\"] h2, html[data-casca-modo=\"moldura\"] h3, html[data-casca-modo=\"moldura\"] h4, html[data-casca-modo=\"moldura\"] h5, html[data-casca-modo=\"moldura\"] p, html[data-casca-modo=\"moldura\"] span, html[data-casca-modo=\"moldura\"] td, html[data-casca-modo=\"moldura\"] th, html[data-casca-modo=\"moldura\"] li { font-family: var(--casca-fonte) !important; }\nhtml[data-casca-modo=\"moldura\"] .card .card-header .category { color: var(--casca-texto-3) !important; font-size: 12px !important; text-transform: uppercase; letter-spacing: .06em; font-weight: 700 !important; }\nhtml[data-casca-modo=\"moldura\"] .nav-tabs, html[data-casca-modo=\"moldura\"] [data-background-color] { background: #E9E9E7 !important; border: 0 !important; border-radius: 999px !important; padding: 4px !important; box-shadow: none !important; display: flex; gap: 4px; }\nhtml[data-casca-modo=\"moldura\"] .card .card-header[data-background-color] { background: transparent !important; border-radius: 0 !important; padding: 14px 16px !important; display: block; }\nhtml[data-casca-modo=\"moldura\"] .nav-tabs > li > a, html[data-casca-modo=\"moldura\"] .nav-tabs .nav-link { color: var(--casca-texto-2) !important; border: 0 !important; border-radius: 999px !important; background: transparent !important; font-weight: 600 !important; text-transform: none !important; margin: 0 !important; }\nhtml[data-casca-modo=\"moldura\"] .nav-tabs > li.active > a, html[data-casca-modo=\"moldura\"] .nav-tabs .nav-link.active { background: #fff !important; color: var(--casca-texto) !important; box-shadow: 0 1px 3px rgba(0,0,0,.08) !important; }\nhtml[data-casca-modo=\"moldura\"] [style*=\"background-color: rgb(0, 128\"], html[data-casca-modo=\"moldura\"] [style*=\"background: rgb(0, 128\"], html[data-casca-modo=\"moldura\"] .bg-primary, html[data-casca-modo=\"moldura\"] .bg-info { background: var(--casca-primaria) !important; color: #fff !important; }\nhtml[data-casca-modo=\"moldura\"] table { font-size: 14px !important; }\nhtml[data-casca-modo=\"moldura\"] table th { color: var(--casca-texto-3) !important; font-weight: 700 !important; font-size: 12px !important; text-transform: uppercase; border: 0 !important; }\nhtml[data-casca-modo=\"moldura\"] table td { border-top: 1px solid #F0F0EE !important; }\nhtml[data-casca-modo=\"moldura\"] .main-panel .content > :not(#casca-raiz) a:not(.btn) { color: var(--casca-primaria-escura) !important; }\n\n/* dentro do app: a barra de baixo é a nativa */\nhtml[data-casca-app][data-casca-modo] .main-panel { padding-bottom: 24px !important; }\nhtml[data-casca-app] #casca-avisos { top: calc(8px + env(safe-area-inset-top)); }\n\n/* rolagem: a Central prende a página numa tela (.wrapper height:100vh; .main-panel max-height:100%,\n   .maximizado height calc(100vh-60px) + top 60px). Com a casca, quem rola é o documento inteiro. ---------- */\nhtml[data-casca-modo]:not([data-casca-modo=\"login\"]), html[data-casca-modo]:not([data-casca-modo=\"login\"]) body { height: auto !important; min-height: 100% !important; overflow-y: auto !important; }\nhtml[data-casca-modo]:not([data-casca-modo=\"login\"]) #app,\nhtml[data-casca-modo]:not([data-casca-modo=\"login\"]) .wrapper { height: auto !important; min-height: 100vh !important; max-height: none !important; overflow: visible !important; }\nhtml[data-casca-modo]:not([data-casca-modo=\"login\"]) .main-panel,\nhtml[data-casca-modo]:not([data-casca-modo=\"login\"]) .main-panel.maximizado,\nhtml[data-casca-modo]:not([data-casca-modo=\"login\"]) .main-panel.minimizado { height: auto !important; max-height: none !important; top: 0 !important; overflow: visible !important; }\n\n/* tela proporcional (ajustarTela no casca.js): desenho de 390px escalado para a tela real */\nhtml[data-casca=\"on\"] #casca-raiz,\nhtml[data-casca=\"on\"] #casca-login > *,\nhtml[data-casca=\"on\"] .casca-gaveta-painel,\nhtml[data-casca=\"on\"] #casca-avisos,\nhtml[data-casca=\"on\"] .casca-folha-painel { zoom: var(--casca-zoom, 1); }\n\n/* modelo \"grande\" (letra grande no aparelho ou tela estreita): nada espremido */\nhtml[data-casca-tam=\"grande\"] .casca-grade { grid-template-columns: repeat(2, minmax(0, 1fr)); }\nhtml[data-casca-tam=\"grande\"] .casca-fatura .casca-botoes,\nhtml[data-casca-tam=\"grande\"] .casca-fatura-item .casca-botoes { flex-direction: column; }\nhtml[data-casca-tam=\"grande\"] .casca-fatura .casca-btn,\nhtml[data-casca-tam=\"grande\"] .casca-fatura-item .casca-btn:not(.quadrado) { width: 100%; flex: 1 1 auto; }\nhtml[data-casca-tam=\"grande\"] .casca-fatura-item .casca-btn.quadrado { width: 100%; flex: 1 1 auto; }\nhtml[data-casca-tam=\"grande\"] .casca-chip { font-size: 12px; }\nhtml[data-casca-tam=\"grande\"] .casca-dl div { flex-direction: column; gap: 2px; }\nhtml[data-casca-tam=\"grande\"] .casca-dl dd { text-align: left; }\nhtml[data-casca-tam=\"grande\"] .casca-linha .casca-etiqueta { display: none; }\n/* modelo \"compacto\" (tela um pouco estreita): textos e espaços menores */\nhtml[data-casca-tam=\"compacto\"] .casca-atalho { font-size: 11.5px; min-height: 88px; padding: 12px 4px; }\nhtml[data-casca-tam=\"compacto\"] .casca-btn { font-size: 14px; padding: 0 12px; }\nhtml[data-casca-tam=\"compacto\"] .casca-corpo { padding: 12px 12px 8px; }\n/* textos longos nunca estouram a largura */\n#casca-raiz .casca-btn, #casca-login .casca-btn { white-space: normal; text-align: center; line-height: 1.2; }\n#casca-raiz .casca-chip { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n/* tela de entrada: avisos do provedor dentro dela */\n.casca-login-ajuda { margin-top: 2px; }\n.casca-login-visitante { margin: 0 16px 24px; background: #fff; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: var(--casca-sombra); }\n.casca-login-visitante p { margin: 0; font-size: 14px; color: var(--casca-texto-2); line-height: 1.4; }\n#casca-login .casca-check span { padding: 0 !important; margin: 0 !important; position: static !important; }\n\n/* tela de entrada mais enxuta: topo baixo, logo menor; \"Ainda não é nosso cliente?\" em destaque */\n.casca-login-topo { padding: calc(22px + env(safe-area-inset-top)) 20px 52px !important; gap: 8px !important; border-radius: 0 0 28px 28px !important; }\n.casca-logo.grande { height: 52px !important; padding: 8px 14px !important; border-radius: 16px !important; }\n.casca-logo.grande img { height: 36px !important; max-width: 170px !important; }\n.casca-login-ola { font-size: 14px !important; }\n.casca-login-cartao { margin: -36px 16px 14px !important; padding: 20px 18px !important; }\n.casca-login-form { gap: 12px !important; }\n.casca-login-titulo { font-size: 21px !important; }\n.casca-login-form input:not([type=checkbox]) { padding: 12px 14px !important; }\n.casca-login-ajuda { font-size: 14.5px !important; padding: 2px 0 !important; }\n.casca-login-visitante { border: 1.5px solid var(--casca-primaria) !important; background: var(--casca-primaria-clara) !important; box-shadow: none !important; gap: 6px !important; }\n.casca-login-visitante strong { font-size: 16px; font-weight: 700; color: var(--casca-texto); }\n.casca-login-visitante p { color: var(--casca-texto) !important; font-size: 14px !important; margin: 0 0 6px !important; }\n.casca-login-visitante .casca-btn { background: var(--casca-primaria) !important; border-color: var(--casca-primaria) !important; color: #fff !important; }\n.casca-links { gap: 2px 16px !important; }\n\n/* ícones animados: a forma \"carregando\" gira enquanto o boleto abre (com movimento reduzido, fica parada) */\n#casca-raiz svg.casca-girando { animation: casca-gira .9s linear infinite; transform-origin: 50% 50%; }\n@keyframes casca-gira { to { transform: rotate(360deg); } }\n@media (prefers-reduced-motion: reduce) { #casca-raiz svg.casca-girando { animation: none; } }\n\n/* fatura em aberto (tela Faturas): PIX | Boleto, cada \"Copiar\" centralizado embaixo do seu botão, cartão na linha de baixo */\n#casca-raiz .casca-acoes-fatura { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 10px; margin-top: 12px; }\n#casca-raiz .casca-acoes-fatura.uma { grid-template-columns: 1fr; }\n#casca-raiz .casca-acao-col { display: flex; flex-direction: column; align-items: stretch; gap: 2px; min-width: 0; }\n#casca-raiz .casca-acoes-fatura .casca-btn { width: 100%; justify-content: center; }\n#casca-raiz .casca-acoes-fatura .casca-link { justify-content: center; white-space: nowrap; font-size: 13px; }\n#casca-raiz .casca-acao-cartao { grid-column: 1 / -1; border-top: 1px solid rgba(0,0,0,.07) !important; margin-top: 4px; padding-top: 10px !important; }\n\n\n/* quadro de assinatura da própria Central (#assinarContrato): por cima da barra de baixo, largo e com botões grandes */\nhtml[data-casca=\"on\"] #assinarContrato { z-index: 2100 !important; }\nhtml[data-casca=\"on\"] #assinarContrato .modal-dialog { margin: 16px auto !important; width: calc(100% - 24px) !important; max-width: 520px !important; }\nhtml[data-casca=\"on\"] #assinarContrato .modal-title { font-weight: 700 !important; font-size: 17px !important; }\nhtml[data-casca=\"on\"] #assinarContrato canvas { width: 100%; border: 2px dashed var(--casca-borda) !important; border-radius: 14px; background: #fff; touch-action: none; }\nhtml[data-casca=\"on\"] #assinarContrato .modal-footer { display: flex; gap: 10px; justify-content: stretch; }\nhtml[data-casca=\"on\"] #assinarContrato .modal-footer .btn { flex: 1; min-height: 46px; margin: 0 !important; }\nhtml[data-casca=\"on\"] #assinarContrato .modal-footer .btn[data-action=\"clear\"]::after { content: \" Limpar\"; }\nhtml[data-casca=\"on\"] #assinarContrato .modal-footer .btn[data-action=\"save\"]::after { content: \" Enviar assinatura\"; }\n\n/* quadros da suspensão temporária (da própria Central): por cima da barra de baixo, largos e com botões grandes */\nhtml[data-casca=\"on\"] :is(#modalSuspensao, #modalConcluirSuspensao, #modalRemoveSuspensao, #modalRemoveSuspensaoConcluir) { z-index: 2100 !important; }\nhtml[data-casca=\"on\"] :is(#modalSuspensao, #modalConcluirSuspensao, #modalRemoveSuspensao, #modalRemoveSuspensaoConcluir) .modal-dialog { margin: 16px auto !important; width: calc(100% - 24px) !important; max-width: 520px !important; }\nhtml[data-casca=\"on\"] :is(#modalSuspensao, #modalConcluirSuspensao, #modalRemoveSuspensao, #modalRemoveSuspensaoConcluir) :is(.botao-suspensao, .botao-concluirSuspensao, input[type=\"button\"]) { width: 100%; min-height: 46px; border-radius: 14px; }\n/* opção liga/desliga dentro de um cartão (Meus dados) */\nhtml[data-casca=\"on\"] .casca-opcao { cursor: pointer; }\nhtml[data-casca=\"on\"] .casca-opcao input { flex: none; width: 22px; height: 22px; margin: 0; accent-color: var(--casca-primaria); }\n\n/* PIX em evidência; boleto, código e cartão em \"Outras formas de pagamento\" (fechado) */\n#casca-raiz .casca-acoes-fatura { grid-template-columns: 1fr !important; gap: 4px; }\n#casca-raiz .casca-acoes-fatura .casca-btn.pri,\n#casca-raiz .casca-fatura .casca-botoes .casca-btn.pri { width: 100%; min-height: 52px; font-size: 16px; font-weight: 700; border-radius: 16px; justify-content: center; }\n#casca-raiz .casca-fatura .casca-botoes:has(.casca-outras) { flex-direction: column; align-items: stretch; gap: 4px; }\n#casca-raiz .casca-outras { margin-top: 2px; }\n#casca-raiz .casca-outras > summary { list-style: none; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 0 4px; color: var(--casca-texto-2); font-size: 13.5px; font-weight: 600; cursor: pointer; }\n#casca-raiz .casca-outras > summary::-webkit-details-marker { display: none; }\n#casca-raiz .casca-outras > summary::after { content: \"\"; width: 7px; height: 7px; border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: translateY(-2px) rotate(45deg); transition: transform .2s; }\n#casca-raiz .casca-outras[open] > summary::after { transform: translateY(2px) rotate(-135deg); }\n#casca-raiz .casca-outras-itens { display: grid; gap: 6px; padding-top: 6px; }\n#casca-raiz .casca-outras-itens .casca-btn { width: 100%; justify-content: center; }\n#casca-raiz .casca-outras-itens .casca-acao-col { display: flex; flex-direction: column; gap: 2px; }\n#casca-raiz .casca-outras-itens .casca-acao-cartao { border-top: 0 !important; margin-top: 0; padding-top: 4px !important; justify-content: center; }\n\n/* logo branca no topo: maior e sem a caixa branca (data-casca-logo = \"arquivo\" | \"branca\") */\nhtml[data-casca-logo] .casca-topo .casca-logo, html[data-casca-logo] .casca-login-topo .casca-logo { background: none !important; padding: 0 !important; height: auto !important; border-radius: 0 !important; }\nhtml[data-casca-logo] .casca-topo .casca-logo img { height: 56px !important; max-width: 250px !important; }\nhtml[data-casca-logo] .casca-login-topo .casca-logo img { height: 56px !important; max-width: 240px !important; }\nhtml[data-casca-logo=\"branca\"] :is(.casca-topo, .casca-login-topo) .casca-logo img { filter: brightness(0) invert(1); }\n/* na gaveta (fundo branco) a logo branca sumiria: lá ela fica sobre a cor do provedor */\nhtml[data-casca-logo=\"arquivo\"] .casca-gaveta-topo .casca-logo { background: var(--casca-primaria) !important; padding: 6px 12px !important; border-radius: 12px; }\n\n/* manter conectado: enquanto o app entra sozinho na Central */\n.casca-login-cartao.casca-entrando { display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 36px 20px; text-align: center; }\n.casca-entrando .casca-girando { width: 30px; height: 30px; border-color: var(--casca-borda); border-top-color: var(--casca-primaria); }\n.casca-destaque { outline: 2px solid var(--casca-primaria); outline-offset: 4px; border-radius: 8px; }\n\n/* A casca inteira é escalada por --casca-zoom (0,82 a 1,1): sem compensar, 44 px viram 36 px num celular de 320 px.\n   Aqui os alvos de toque crescem na proporção inversa, para dar 44 px de verdade em qualquer largura. */\n.casca-link, .casca-icone-btn, .casca-abas button, #casca-raiz .casca-outras > summary, .casca-mais { min-height: calc(44px / var(--casca-zoom, 1)); }\n.casca-icone-btn { min-width: calc(44px / var(--casca-zoom, 1)); }\n.casca-mais { display: flex; align-items: center; justify-content: center; }\n.casca-aviso button { min-width: 44px; min-height: 44px; }\n.casca-codigo { max-height: 132px; overflow-y: auto; -webkit-user-select: all; user-select: all; }\n.casca-balao.eu small { color: #fff; opacity: .95; }\n\n/* quem pediu menos movimento no aparelho não vê brilho, balanço nem deslize */\n@media (prefers-reduced-motion: reduce) {\n  .casca-esqueleto, .casca-aviso { animation: none !important; }\n  .casca-gaveta-painel, .casca-gaveta-fundo, .casca-folha-painel, .casca-folha-fundo, .casca-aviso { transition: none !important; }\n}\n"; })();
/*! morphicons 2.0.2 - https://github.com/guillermolg00/morphicons
 * MIT License
 * 
 * Copyright (c) 2026 Guillermo
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(()=>{var ln=Object.defineProperty;var te=(t,s,n)=>s in t?ln(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;var xt=(t,s,n)=>()=>{if(n)throw n[0];try{return t&&(s=t(t=0)),s}catch(o){throw n=[o],o}};var ne=(t,s)=>{for(var n in s)ln(t,n,{get:s[n],enumerable:!0})};var at=(t,s,n)=>te(t,typeof s!="symbol"?s+"":s,n);function un(t){let s=[],n=t.length,o=0,e=0,c=0,r=0,i=0,l=null,a="",h=0,f=0,m="",u=!1,g=I=>{throw new Error(`morphicons: ${I} at d[${o}]`)},p=I=>I>=48&&I<=57,M=()=>{for(;o<n;){let I=t.charCodeAt(o);if(I===32||I===9||I===10||I===13||I===12||I===44)o++;else break}},y=()=>{M();let I=o;o<n&&(t[o]==="+"||t[o]==="-")&&o++;let A=!1;for(;o<n&&p(t.charCodeAt(o));)o++,A=!0;if(o<n&&t[o]===".")for(o++;o<n&&p(t.charCodeAt(o));)o++,A=!0;if(A||g("expected number"),o<n&&(t[o]==="e"||t[o]==="E")){let N=o;o++,o<n&&(t[o]==="+"||t[o]==="-")&&o++;let P=!1;for(;o<n&&p(t.charCodeAt(o));)o++,P=!0;P||(o=N)}return Number(t.slice(I,o))},w=()=>{M();let I=t[o];return I==="0"||I==="1"?(o++,I==="1"?1:0):g("expected arc flag (0|1)")},d=()=>(u||g("path must start with M/m"),l||(l={x0:e,y0:c,segs:[],closed:!1},s.push(l)),l),b=!1,k=()=>y()+(b?e:0),S=()=>y()+(b?c:0);for(;M(),!(o>=n);){let I=t[o];switch(ee.includes(I)?(a=I,o++):a===""?g("path must start with M/m"):a==="M"?a="L":a==="m"?a="l":(a==="Z"||a==="z")&&g("stray data after Z"),b=a>="a",b?a.toUpperCase():a){case"M":{u=!0;let A=k(),N=S();e=A,c=N,r=A,i=N,l={x0:A,y0:N,segs:[],closed:!1},s.push(l),m="";break}case"L":{let A=k(),N=S();d().segs.push(["L",A,N]),e=A,c=N,m="";break}case"H":{let A=k();d().segs.push(["L",A,c]),e=A,m="";break}case"V":{let A=S();d().segs.push(["L",e,A]),c=A,m="";break}case"C":case"S":{let A,N;a==="C"||a==="c"?(A=k(),N=S()):(A=m==="C"?2*e-h:e,N=m==="C"?2*c-f:c);let P=k(),v=S(),R=k(),L=S();d().segs.push(["C",A,N,P,v,R,L]),h=P,f=v,e=R,c=L,m="C";break}case"Q":case"T":{let A,N;a==="Q"||a==="q"?(A=k(),N=S()):(A=m==="Q"?2*e-h:e,N=m==="Q"?2*c-f:c);let P=k(),v=S();d().segs.push(["Q",A,N,P,v]),h=A,f=N,e=P,c=v,m="Q";break}case"A":{let A=y(),N=y(),P=y(),v=w(),R=w(),L=k(),_=S();d().segs.push(["A",A,N,P,v,R,L,_]),e=L,c=_,m="";break}case"Z":l&&(l.closed=!0,l=null),e=r,c=i,m="";break;default:g(`unsupported command "${a}"`)}}return s.filter(I=>I.segs.length>0)}function wt(t){return String(Math.round(t*100)/100)}function $t(t,s){let n="";for(let o=0;o<t.length;o++){let e=t[o],c=e.length/2;n+=`M${wt(e[0])} ${wt(e[1])}`;for(let r=1;r<c;r++)n+=`L${wt(e[2*r])} ${wt(e[2*r+1])}`;s!=null&&s[o]&&(n+="Z")}return n}function H(t){return String(Math.round(t*1e4)/1e4)}function pn(t){let s="";for(let{pts:n,closed:o}of t){s+=`M${H(n[0])} ${H(n[1])}`;for(let e=2;e<n.length;e+=6)s+=`C${H(n[e])} ${H(n[e+1])} ${H(n[e+2])} ${H(n[e+3])} ${H(n[e+4])} ${H(n[e+5])}`;o&&(s+="Z")}return s}function ft(t,s){let n=[t,s],o=t,e=s,c=(h,f,m,u,g,p)=>{n.push(h,f,m,u,g,p),o=g,e=p},r=(h,f)=>{Math.abs(h-o)<1e-12&&Math.abs(f-e)<1e-12||c(o+(h-o)/3,e+(f-e)/3,o+2*(h-o)/3,e+2*(f-e)/3,h,f)};return[c,r,(h,f,m,u)=>{c(o+2/3*(h-o),e+2/3*(f-e),m+2/3*(h-m),u+2/3*(f-u),m,u)},(h,f,m,u,g,p,M)=>{let y=o,w=e;if(Math.abs(p-y)<1e-12&&Math.abs(M-w)<1e-12)return;let d=Math.abs(h),b=Math.abs(f);if(d<1e-12||b<1e-12){r(p,M);return}let k=m*Math.PI/180,S=Math.cos(k),I=Math.sin(k),A=(y-p)/2,N=(w-M)/2,P=S*A+I*N,v=-I*A+S*N,R=P*P/(d*d)+v*v/(b*b);if(R>1){let O=Math.sqrt(R);d*=O,b*=O}let L=d*d,_=b*b,ot=P*P,st=v*v,U=(L*_-L*st-_*ot)/(L*st+_*ot);U<0&&(U=0);let rt=(u===g?-1:1)*Math.sqrt(U),Z=rt*d*v/b,D=-rt*b*P/d,ct=S*Z-I*D+(y+p)/2,yt=I*Z+S*D+(w+M)/2,K=Math.atan2((v-D)/b,(P-Z)/d),x=Math.atan2((-v-D)/b,(-P-Z)/d)-K;g===0&&x>0?x-=hn:g===1&&x<0&&(x+=hn);let T=Math.max(1,Math.ceil(Math.abs(x)/(Math.PI/2)-1e-9)),E=x/T,F=4/3*Math.tan(E/4),q=O=>ct+d*Math.cos(O)*S-b*Math.sin(O)*I,W=O=>yt+d*Math.cos(O)*I+b*Math.sin(O)*S,it=O=>-d*Math.sin(O)*S-b*Math.cos(O)*I,sn=O=>-d*Math.sin(O)*I+b*Math.cos(O)*S,Ft=K,rn=y,cn=w;for(let O=1;O<=T;O++){let lt=K+E*O,jt=O===T?p:q(lt),Lt=O===T?M:W(lt);c(rn+F*it(Ft),cn+F*sn(Ft),jt-F*it(lt),Lt-F*sn(lt),jt,Lt),Ft=lt,rn=jt,cn=Lt}},h=>(h&&r(n[0],n[1]),n.length<8?null:{pts:Float64Array.from(n),closed:h})]}function mn(t){let[s,n,o,e,c]=ft(t.x0,t.y0);for(let r of t.segs)switch(r[0]){case"L":n(r[1],r[2]);break;case"C":s(r[1],r[2],r[3],r[4],r[5],r[6]);break;case"Q":o(r[1],r[2],r[3],r[4]);break;case"A":e(r[1],r[2],r[3],r[4],r[5],r[6],r[7])}return c(t.closed)}function j(t,s,n=0){let o=t[s];if(o===void 0)return n;let e=typeof o=="number"?o:Number(o);return Number.isFinite(e)?e:n}function gn(t){let s=String(t!=null?t:"").trim();if(!s)return[];let n=s.split(/[\s,]+/).map(Number);if(n.some(o=>!Number.isFinite(o)))throw new Error(`morphicons: invalid points: "${s}"`);return n}function _t(t,s){if(t.length<4)return null;let[,n,,,o]=ft(t[0],t[1]);for(let e=2;e+1<t.length;e+=2)n(t[e],t[e+1]);return o(s)}function dn(t,s,n,o){if(n<1e-12||o<1e-12)return null;let e=kt*n,c=kt*o,r=t+n,i=t-n,l=s+o,a=s-o,[h,,,,f]=ft(r,s);return h(r,s+c,t+e,l,t,l),h(t-e,l,i,s+c,i,s),h(i,s-c,t-e,a,t,a),h(t+e,a,r,s-c,r,s),f(!0)}function oe(t){let s=j(t,"x"),n=j(t,"y"),o=j(t,"width"),e=j(t,"height");if(o<1e-12||e<1e-12)return null;let c=j(t,"rx",NaN),r=j(t,"ry",NaN);if(Number.isNaN(c)&&(c=Number.isNaN(r)?0:r),Number.isNaN(r)&&(r=c),c=Math.min(Math.max(c,0),o/2),r=Math.min(Math.max(r,0),e/2),c<1e-12||r<1e-12)return _t([s,n,s+o,n,s+o,n+e,s,n+e],!0);let i=s+c,l=s+o-c,a=s+o,h=n+r,f=n+e-r,m=n+e,u=kt*c,g=kt*r,[p,M,,,y]=ft(i,n);return M(l,n),p(l+u,n,a,h-g,a,h),M(a,f),p(a,f+g,l+u,m,l,m),M(i,m),p(i-u,m,s,f+g,s,f),M(s,h),p(s,h-g,i-u,n,i,n),y(!0)}function Y(t){var o;let s=[],n=e=>{e&&s.push(e)};if(typeof t=="string"){for(let e of un(t))n(mn(e));return s}for(let[e,c]of t)switch(e){case"path":for(let r of un(String((o=c.d)!=null?o:"")))n(mn(r));break;case"line":{let[,r,,,i]=ft(j(c,"x1"),j(c,"y1"));r(j(c,"x2"),j(c,"y2")),n(i(!1));break}case"circle":{let r=j(c,"r");n(dn(j(c,"cx"),j(c,"cy"),r,r));break}case"ellipse":n(dn(j(c,"cx"),j(c,"cy"),j(c,"rx"),j(c,"ry")));break;case"rect":n(oe(c));break;case"polyline":n(_t(gn(c.points),!1));break;case"polygon":n(_t(gn(c.points),!0));break;default:throw new Error(`morphicons: unsupported tag <${e}>`)}return s}var ee,kt,hn,It=xt(()=>{ee="MmLlHhVvCcSsQqTtAaZz";kt=4/3*Math.tan(Math.PI/8),hn=2*Math.PI});function C(t){let s=t.length/2,n=0,o=0;for(let e=0;e<s;e++)n+=t[2*e],o+=t[2*e+1];return[n/s,o/s]}function Mn(t){let s=t.length/2,n=0;for(let o=1;o<s;o++)n+=Math.hypot(t[2*o]-t[2*o-2],t[2*o+1]-t[2*o-1]);return n}function ht(t){let s=t.length/2,n=new Float64Array(2*s);for(let o=0;o<s;o++)n[2*o]=t[2*(s-1-o)],n[2*o+1]=t[2*(s-1-o)+1];return n}function J(t,s){let n=t.length/2,o=new Float64Array(2*n);for(let e=0;e<n;e++){let c=(e+s)%n;o[2*e]=t[2*c],o[2*e+1]=t[2*c+1]}return o}function ut(t,s,n,o){let e=t.length/2,c=0,r=0,i=0,l=0,a=0,h=0;for(let M=0;M<e;M++){let y=t[2*M]-n[0],w=t[2*M+1]-n[1],d=s[2*M]-o[0],b=s[2*M+1]-o[1];c+=y*d,l+=w*b,r+=y*b,i+=w*d,a+=y*y+w*w,h+=d*d+b*b}let f=Math.atan2(r-i,c+l),m=Math.cos(f)*(c+l)+Math.sin(f)*(r-i),u=a>1e-12?m/a:1;u>1e-6||(u=1e-6);let g=Math.max(0,u*u*a-2*u*m+h),p=h>1e-12?Math.sqrt(g/h):0;return{theta:f,sigma:u,res:p}}function le(t,s,n=!1,o=!1,e=!0,c=re){let r=C(t),i=C(s),l=n&&!o,a=l?t:s,h=n||o?a.length/2:1,f=Number.POSITIVE_INFINITY,m=a,u={theta:0,sigma:1,res:0};for(let g=0;g<(e?2:1);g++){let p=g?ht(a):a;for(let M=0;M<h;M++){let y=M?J(p,M):p,w=l?ut(y,s,r,i):ut(t,y,r,i),d=w.res+c*Math.abs(w.theta)/Math.PI;d<f&&(f=d,m=y,u=w)}}return l?{ca:r,cb:i,a:m,b:s,...u}:{ca:r,cb:i,a:t,b:m,...u}}function V(t,s){let n=s.map(C),o=s.map(Mn);return t.map(e=>{let c=C(e),r=Mn(e);return n.map((i,l)=>Math.hypot(c[0]-i[0],c[1]-i[1])+se*Math.abs(r-o[l]))})}function ae(t){let s=t.length;if(s>ie){let r=[];for(let a=0;a<s;a++)for(let h=0;h<s;h++)r.push([t[a][h],a,h]);r.sort((a,h)=>a[0]-h[0]);let i=new Array(s).fill(-1),l=new Array(s).fill(!1);for(let[,a,h]of r)i[a]<0&&!l[h]&&(i[a]=h,l[h]=!0);return i}let n=Array.from({length:s},(r,i)=>i),o=n.slice(),e=Number.POSITIVE_INFINITY,c=(r,i,l)=>{if(!(l>=e)){if(i===s){e=l,o=r.slice();return}for(let a=i;a<s;a++)[r[i],r[a]]=[r[a],r[i]],c(r,i+1,l+t[i][r[i]]),[r[i],r[a]]=[r[a],r[i]]}};return c(n,0,0),o}function bn(t){let s=t.length,n=t[0].length;if(n**s>1e5){let l=t.map(h=>{let f=0;for(let m=1;m<h.length;m++)h[m]<h[f]&&(f=m);return f}),a=new Array(n).fill(0);for(let h of l)a[h]++;for(let h=0;h<n;h++){if(a[h]>0)continue;let f=-1,m=Number.POSITIVE_INFINITY;for(let u=0;u<s;u++){if(a[l[u]]<2)continue;let g=t[u][h]-t[u][l[u]];g<m&&(m=g,f=u)}a[l[f]]--,l[f]=h,a[h]++}return l}let o=null,e=Number.POSITIVE_INFINITY,c=new Array(s),r=new Array(n).fill(0),i=(l,a,h)=>{if(!(a>=e||n-h>s-l)){if(l===s){e=a,o=c.slice();return}for(let f=0;f<n;f++)c[l]=f,r[f]++,i(l+1,a+t[l][f],h+(r[f]===1?1:0)),r[f]--}};if(i(0,0,0),!o)throw new Error("morphicons: no valid surjection (B < S)");return o}function Gt(t,s){let n=t.length*s,o=new Float64Array(2*n),e=new Float64Array(2*n);t.forEach((f,m)=>{o.set(f.a,2*s*m),e.set(f.bO,2*s*m)});let c=C(o),r=ut(o,e,c,C(e));if(r.res>=ce)return;let i=Math.cos(-r.theta),l=Math.sin(-r.theta),a=Math.cos(r.theta),h=Math.sin(r.theta);for(let f of t){let m=0,u=0;for(let k=0;k<s;k++){let S=f.bO[2*k]-f.cb[0],I=f.bO[2*k+1]-f.cb[1];f.bT[2*k]=(S*i-I*l)/r.sigma,f.bT[2*k+1]=(S*l+I*i)/r.sigma;let A=r.sigma*(a*f.aC[2*k]-h*f.aC[2*k+1])-S,N=r.sigma*(h*f.aC[2*k]+a*f.aC[2*k+1])-I;m+=A*A+N*N,u+=S*S+I*I}f.theta=r.theta,f.lnSigma=Math.log(r.sigma),f.res=u>1e-12?Math.sqrt(m/u):0;let g=Math.exp(f.lnSigma),p=Math.cos(f.theta)*g,M=Math.sin(f.theta)*g,y=f.ca[0]-c[0],w=f.ca[1]-c[1],d=y*p-w*M-y,b=y*M+w*p-w;f.block={off:[y,w],drift:[f.cb[0]-f.ca[0]-d,f.cb[1]-f.ca[1]-b]}}}function Dt(t,s){let n=t.length,o=s.length,e=[];if(n===o){let c=ae(V(t,s));for(let r=0;r<n;r++)e.push([r,c[r]])}else if(n<o){let c=bn(V(s,t));for(let r=0;r<o;r++)e.push([c[r],r])}else{let c=bn(V(t,s));for(let r=0;r<n;r++)e.push([r,c[r]])}return e}function Wt(t,s,n,o,e,c){let r=t.length/2,i=le(t,s,n,o,e,c),l=i.a,a=new Float64Array(2*r),h=new Float64Array(2*r),f=new Float64Array(2*r),m=Math.cos(-i.theta),u=Math.sin(-i.theta);for(let g=0;g<r;g++){a[2*g]=l[2*g]-i.ca[0],a[2*g+1]=l[2*g+1]-i.ca[1];let p=i.b[2*g]-i.cb[0],M=i.b[2*g+1]-i.cb[1];h[2*g]=(p*m-M*u)/i.sigma,h[2*g+1]=(p*u+M*m)/i.sigma,f[2*g]=i.b[2*g],f[2*g+1]=i.b[2*g+1]}return{a:l,aC:a,bT:h,bO:f,ca:i.ca,cb:i.cb,theta:i.theta,lnSigma:Math.log(i.sigma),res:i.res,closed:n&&o,block:null}}function At(t,s){let n=t.length,o=s.length;if(n===0||o===0)throw new Error("morphicons: icon has no subpaths");let e=t.map(i=>i.pts),c=s.map(i=>i.pts),r=Dt(e,c).map(([i,l])=>Wt(e[i],c[l],t[i].closed,s[l].closed,!0));return r.length>1&&Gt(r,e[0].length/2),{items:r,n:e[0].length/2}}function qt(t,s,n){let o=6*s,e=1-n,c=3*e*e,r=6*e*n,i=3*n*n,l=c*(t[o+2]-t[o])+r*(t[o+4]-t[o+2])+i*(t[o+6]-t[o+4]),a=c*(t[o+3]-t[o+1])+r*(t[o+5]-t[o+3])+i*(t[o+7]-t[o+5]);return Math.hypot(l,a)}function Yt(t,s,n=1){let o=n/2,e=0;for(let c=0;c<4;c++)e+=fe[c]*(qt(t,s,o+o*yn[c])+qt(t,s,o-o*yn[c]));return e*o}function ue(t,s,n,o,e){let c=6*s,r=1-n,i=r*r*r,l=3*r*r*n,a=3*r*n*n,h=n*n*n;o[e]=i*t[c]+l*t[c+2]+a*t[c+4]+h*t[c+6],o[e+1]=i*t[c+1]+l*t[c+3]+a*t[c+5]+h*t[c+7]}function xn(t,s,n){let o=6*s,e=n?o+6:o,c=n?-1:1;for(let r of n?[4,2,0]:[2,4,6]){let i=c*(t[o+r]-t[e]),l=c*(t[o+r+1]-t[e+1]);if(i*i+l*l>1e-18)return[i,l]}return null}function he(t,s=wn){let n=t.pts,o=(n.length/2-1)/3,e=[];for(let i=0;i<o;i++)Yt(n,i)>1e-9&&e.push(i);if(e.length===0)return[];let c=new Set,r=(i,l)=>{let a=xn(n,i,!0),h=xn(n,l,!1);!a||!h||Math.abs(Math.atan2(a[0]*h[1]-a[1]*h[0],a[0]*h[0]+a[1]*h[1]))>s&&c.add(l)};for(let i=0;i+1<e.length;i++)r(e[i],e[i+1]);return t.closed&&e.length>1&&r(e[e.length-1],e[0]),[...c].sort((i,l)=>i-l)}function me(t,s,n,o){if(n<=0)return 0;if(n>=o)return 1;let e=0,c=1,r=n/o;for(let i=0;i<12;i++){let l=Yt(t,s,r)-n;if(Math.abs(l)<1e-10*o+1e-14)break;l>0?c=r:e=r;let a=qt(t,s,r),h=a>1e-12?r-l/a:(e+c)/2;h>e&&h<c||(h=(e+c)/2),r=h}return r}function mt(t,s=64,n=wn){let o=t.pts,e=(o.length/2-1)/3,c=new Float64Array(2*s),r=()=>{for(let d=0;d<s;d++)c[2*d]=o[0],c[2*d+1]=o[1];return c};if(e<1)return r();let i=new Array(e),l=0;for(let d=0;d<e;d++)i[d]=Yt(o,d),l+=i[d];if(l<1e-12)return r();let a=he(t,n),h=t.closed?a.length>0?a:[0]:[...new Set([0,...a,e])].sort((d,b)=>d-b),f=[];if(t.closed)for(let d=0;d<h.length;d++){let b=h[d],k=d+1<h.length?h[d+1]:h[0]+e;f.push([b,k])}else for(let d=0;d+1<h.length;d++)f.push([h[d],h[d+1]]);let m=f.map(([d,b])=>{let k=0;for(let S=d;S<b;S++)k+=i[S%e];return k}),u=t.closed?s:s-1;if(f.length>u)throw new Error(`morphicons: N=${s} too small (${f.length} runs)`);let g=m.reduce((d,b)=>d+b,0)||1,p=m.map(d=>u*d/g),M=p.map(d=>Math.max(1,Math.floor(d))),y=u-M.reduce((d,b)=>d+b,0);if(y>0){let d=p.map((b,k)=>[Math.round((b-Math.floor(b))*1e9),k]).sort((b,k)=>k[0]-b[0]||b[1]-k[1]);for(let b=0;b<y;b++)M[d[b%M.length][1]]++}for(;y<0;){let d=0;for(let b=1;b<M.length;b++)M[b]>M[d]&&(d=b);if(M[d]<=1)break;M[d]--,y++}let w=0;for(let d=0;d<f.length;d++){let[b,k]=f[d],S=M[d],I=m[d],A=6*(b%e);c[2*w]=o[A],c[2*w+1]=o[A+1],w++;let N=b,P=0;for(let v=1;v<S;v++){let R=I*v/S;for(;N<k-1&&P+i[N%e]<R;)P+=i[N%e],N++;let L=N%e,_=i[L];ue(o,L,_>1e-12?me(o,L,R-P,_):0,c,2*w),w++}}if(!t.closed){let d=6*e;c[2*w]=o[d],c[2*w+1]=o[d+1]}return c}function kn(t,s=64){return Y(t).map(n=>({pts:mt(n,s),closed:n.closed}))}var se,re,ce,ie,wn,yn,fe,zt=xt(()=>{It();se=.35,re=.05,ce=.005,ie=8;wn=Math.PI/8,yn=[.18343464249564978,.525532409916329,.7966664774136267,.9602898564975363],fe=[.362683783378362,.31370664587788727,.22238103445337448,.10122853629037626]});function $(t){if(typeof t=="string")return"stroke";for(let[,s]of t)if(St(s.fill))return"fill";return"stroke"}function Vt(t){return typeof t=="string"||$(t)==="stroke"?t:t.filter(([,s])=>!Ht(s))}function Nt(t){return typeof t!="string"&&t.length===1&&"data-region"in t[0][1]}function B(t,s,n){let o=n.length/2,e=!1;for(let c=0,r=o-1;c<o;r=c++){let i=n[2*c+1],l=n[2*r+1];i>s!=l>s&&t<(n[2*r]-n[2*c])*(s-i)/(l-i)+n[2*c]&&(e=!e)}return e}function gt(t,s,n,o,e,c){let r=e-n,i=c-o,l=r*r+i*i,a=l>0?((t-n)*r+(s-o)*i)/l:0;a=a<0?0:a>1?1:a;let h=t-n-a*r,f=s-o-a*i;return Math.sqrt(h*h+f*f)}function z(t){let s=t.length/2,n=0;for(let o=0,e=s-1;o<s;e=o++)n+=t[2*e]*t[2*o+1]-t[2*o]*t[2*e+1];return n/2}var In,St,Ht,Bt=xt(()=>{In="data-region",St=t=>t!==void 0&&String(t).trim().toLowerCase()!=="none";Ht=t=>Number.parseFloat(String(t.opacity))<.5||Number.parseFloat(String(t["fill-opacity"]))<.5});var Dn={};ne(Dn,{buildRegionPlan:()=>Jt,isRegion:()=>Nt,paintOf:()=>$,regionContours:()=>_n,regionOf:()=>nt,regionPlan:()=>qn,regionPlanFrom:()=>Gn,resampleRegion:()=>Zt,toRegion:()=>$n});function pe(t,s){let n=s.length/2,o=0;for(let e=0;e<t.length;e+=6)for(let c=0;;c++){if(c===n)return!0;let r=(o+c)%n,i=(r+1)%n;if(gt(t[e],t[e+1],s[2*r],s[2*r+1],s[2*i],s[2*i+1])<=de){o=r;break}}return!1}function Zt(t,s){let n=Y(t),o=c=>n.map(r=>{let i;for(let a of ge)try{i=mt({pts:r.pts,closed:!0},c,a);break}catch(h){}let l=i;return{pts:l,closed:!0,hole:z(l)<0}}),e=o(s!=null?s:64);return s||!n.some((c,r)=>pe(c.pts,e[r].pts))?e:o(128)}function ye(t,s){let n=t.length,o=new Float64Array(n);for(let e=0;e<n;e++)o[e]=(t[e]+s[e])/2;for(let e=0;e<n;e+=2){let c=o[e],r=o[e+1],i=o[(e+2)%n]-c,l=o[(e+3)%n]-r;for(let a=e+4;a<n-(e?0:2);a+=2){let h=o[a],f=o[a+1],m=o[(a+2)%n]-h,u=o[(a+3)%n]-f;if(!((i*(f-r)-l*(h-c))*(i*(f+u-r)-l*(h+m-c))>=0)&&(m*(r-f)-u*(c-h))*(m*(r+l-f)-u*(c+i-h))<0)return!0}}return!1}function xe(t,s){let n=t.length/2,o=n>64?2:1,e=(f,m)=>o>1?f.filter((u,g)=>(g>>1)%2===m):f,c=e(t,0),r=C(c),i=[e(s,0),e(s,1)],l=i.map(C),a=[];for(let f=0;f<n;f++){let m=f%o,u=ut(c,J(i[m],(f-m)/o),r,l[m]);a.push([f,u.res+An*Math.abs(u.theta)/Math.PI])}a.sort((f,m)=>f[1]-m[1]);let h;for(let[f,m]of a.slice(0,be)){if(m>a[0][1]+Me)break;let u=Wt(t,J(s,f),!1,!1,!1,An);if(u.closed=!0,h!=null||(h=u),!ye(e(u.aC,0),e(u.bT,0)))return u}return h}function we(t,s){let n=t.length/2,o=-1,e=1/0;return s.forEach((c,r)=>{if(c.hole)return;let i=0;for(let a of[0,Math.floor(n/3),Math.floor(2*n/3)])B(t[2*a],t[2*a+1],c.pts)&&i++;if(i<2)return;let l=Math.abs(z(c.pts));l<e&&(e=l,o=r)}),o}function Sn(t,s,n,o){let e=t.length,c=n.length,r=new Array(e).fill(-1),i=new Array(c).fill(0);if((c+1)**e>1e5){let f=[];for(let m=0;m<e;m++)for(let u=0;u<c;u++)t[m][u]<1/0&&f.push([t[m][u],m,u]);f.sort((m,u)=>m[0]-u[0]);for(let[,m,u]of f)r[m]<0&&!i[u]&&(r[m]=u,i[u]=1);for(let m=0;m<e;m++)if(!(r[m]>=0))for(let u=0;u<c;u++)!n[u]&&(r[m]<0||t[m][u]<t[m][r[m]])&&(r[m]=u);return r}let l=r.slice(),a=1/0,h=(f,m,u)=>{if(!(m>=a||o&&c-u>e-f)){if(f===e){a=m,l=r.slice();return}for(let g=0;g<c;g++)n[g]&&i[g]||!(t[f][g]<1/0)||(r[f]=g,i[g]++,h(f+1,m+t[f][g],u+(i[g]===1?1:0)),i[g]--);r[f]=-1,h(f+1,m+s[f],u)}};return h(0,0,0),l}function Et(t,s,n,o,e,c){let r=Math.cos(e)*c,i=Math.sin(e)*c,l=t-n[0],a=s-n[1];return[o[0]+l*r-a*i,o[1]+l*i+a*r]}function Kt(t,s){let n=new Float64Array(2*s);for(let o=0;o<2*s;o+=2)n[o]=t[0],n[o+1]=t[1];return n}function dt(t,s,n,o,e){let c=t.length/2,r=Math.exp(n.lnSigma),i=new Float64Array(2*c),l=new Float64Array(2*c),a=0;for(let m=0;m<2*c;m+=2)i[m]=t[m]-n.ca[0],i[m+1]=t[m+1]-n.ca[1],[l[m],l[m+1]]=Et(s[m],s[m+1],n.cb,[0,0],-n.theta,1/r),a+=(s[m]-n.cb[0])**2+(s[m+1]-n.cb[1])**2;let h=0,f=1/0;for(let m=0;m<c&&f>0;m++){let u=0;for(let g=0;g<c&&u<f;g++){let p=(g+m)%c;u+=(i[2*g]-l[2*p])**2+(i[2*g+1]-l[2*p+1])**2}u<f&&(f=u,h=m)}return{a:t,aC:i,bT:J(l,h),bO:J(s,h),ca:n.ca,cb:n.cb,theta:n.theta,lnSigma:n.lnSigma,res:a>1e-12?Math.sqrt(r*r*f/a):0,closed:!0,hole:o,half:e,block:n.block}}function Pt(t,s,n){let o=Math.exp(s.lnSigma),[e,c]=C(t),{aC:r,bT:i}=s,l=n?s.bO:s.a,a=0,h=0,f=0;for(let u=0;u<r.length;u+=2){let g=1/((l[u]-e)**2+(l[u+1]-c)**2+1e-9);a+=g,h+=g*(i[u]-r[u]),f+=g*(i[u+1]-r[u+1])}a=(n?-.5:.5)/a,n&&([e,c]=Et(e,c,s.cb,s.ca,-s.theta,1/o)),e+=a*h,c+=a*f;let m=Kt(n?[e,c]:Et(e,c,s.ca,s.cb,s.theta,o),t.length/2);return n?dt(m,t,s,!0,1):dt(t,m,s,!0,0)}function Qt(t,s,n){let o=0;for(let e of[.25,.5,.75]){if(!(Pn(t,e)%1))continue;let[c,r,...i]=[t,s,...n.filter(l=>l!==t)].map(l=>l.aC.map((a,h)=>a+Pn(l,e)*(l.bT[h]-a)));for(let l=0;l<c.length;l+=2)(!B(c[l],c[l+1],r)||i.some(a=>B(c[l],c[l+1],a)))&&o++}return o}function Tn(t,s,n){let o=C(t),e={ca:o,cb:o,theta:0,lnSigma:0,block:null},c=Kt(o,t.length/2);return[t,...s].map((r,i)=>n?dt(c,r,e,i>0):dt(r,c,e,i>0))}function vn(t){let s=[t[0],t[1],t[0],t[1]];for(let n=2;n<t.length;n+=2)s[0]=Math.min(s[0],t[n]),s[1]=Math.min(s[1],t[n+1]),s[2]=Math.max(s[2],t[n]),s[3]=Math.max(s[3],t[n+1]);return s}function Ae(t,s,n){let o=Math.exp(n.lnSigma),e=V(t,s),c=s.map(r=>{let i=new Float64Array(r.length);for(let l=0;l<r.length;l+=2)[i[l],i[l+1]]=Et(r[l],r[l+1],n.cb,n.ca,-n.theta,1/o);return vn(i)});return t.forEach((r,i)=>{let l=vn(r);c.forEach((a,h)=>{let f=Math.min(l[2],a[2])-Math.max(l[0],a[0]),m=Math.min(l[3],a[3])-Math.max(l[1],a[1]),u=f>0&&m>0?f*m:0,g=(l[2]-l[0])*(l[3]-l[1])+(a[2]-a[0])*(a[3]-a[1])-u;u>=Ie*g||(e[i][h]=1/0)})}),e}function En(t){let s=[];t.forEach((o,e)=>{o.hole||s.push(e)});let n=s.map(()=>[]);return t.forEach(o=>{if(!o.hole)return;let e=s.indexOf(we(o.pts,t));if(e<0){let[c,r]=C(o.pts),i=1/0;s.forEach((l,a)=>{let[h,f]=C(t[l].pts),m=Math.hypot(h-c,f-r);m<i&&(i=m,e=a)})}n[e].push(o.pts)}),{outers:s.map(o=>t[o].pts),holes:n}}function Se(t){let s=t.length,n=new Float64Array(2*s);for(let o=0;o<s;o+=2){let e=(o+2)%s;n[2*o]=t[o],n[2*o+1]=t[o+1],n[2*o+2]=(t[o]+t[e])/2,n[2*o+3]=(t[o+1]+t[e+1])/2}return n}function Jt(t,s){let n=Math.max(t[0].pts.length,s[0].pts.length)/2,o=u=>u[0].pts.length/2<n?u.map(g=>({...g,pts:Se(g.pts)})):u,e=En(o(t)),c=En(o(s));if(e.outers.length===0||c.outers.length===0)throw new Error("morphicons: region has no outer contour");let r,i=e.outers.length,l=c.outers.length,[a,h]=i<l?[c,e]:[e,c];i===l||h.holes.every(u=>u.length===0)?r=Dt(e.outers,c.outers):r=Sn(V(a.outers,h.outers),a.outers.map(u=>Nn+ke(u)),h.holes.map(u=>u.length>0),!0).map((u,g)=>i<l?[u,g]:[g,u]);let f=[],m=!1;for(let[u,g]of r){if(u<0||g<0){m=!0,f.push(...u<0?Tn(c.outers[g],c.holes[g],!0):Tn(e.outers[u],e.holes[u],!1));continue}let p=xe(e.outers[u],c.outers[g]);p.hole=!1,f.push(p);let M=e.holes[u],y=c.holes[g],w=Sn(Ae(M,y,p),M.map(()=>Nn),y.map(()=>!0),!1),d=M.map((b,k)=>w[k]<0?Pt(b,p,!1):dt(b,y[w[k]],p,!0));y.forEach((b,k)=>{w.includes(k)||d.push(Pt(b,p,!0))});for(let b=0;b<d.length;b++){let k=d[b];if(k.half!==void 0){m=!0;continue}let S=Qt(k,p,d);S&&(d.splice(b,1,Pt(k.a,p,!1),Pt(k.bO,p,!0)),Qt(d[b],p,d)+Qt(d[b+1],p,d)>=S&&d.splice(b,2,k))}f.push(...d)}return f.length>1&&!m&&Gt(f,n),{items:f,n}}function Fn(t,s){let n=[],o=[];for(let{pts:e,closed:c}of Y(t)){let r=[e[0],e[1]];for(let i=0;i+7<e.length;i+=6){let l=e[i],a=e[i+1],h=e[i+2],f=e[i+3],m=e[i+4],u=e[i+5],g=e[i+6],p=e[i+7],M=Math.max(Math.hypot(l-2*h+m,a-2*f+u),Math.hypot(h-2*m+g,f-2*u+p)),y=Math.min(128,Math.max(1,Math.ceil(Math.sqrt(6*M/(8*s)))));for(let w=1;w<=y;w++){let d=w/y,b=1-d;r.push(b*b*b*l+3*b*b*d*h+3*b*d*d*m+d*d*d*g,b*b*b*a+3*b*b*d*f+3*b*d*d*u+d*d*d*p)}}n.push(Float64Array.from(r)),o.push(c)}return{lines:n,closed:o}}function Pe(t,s,n){var c;if(typeof t=="string")return[{...Fn(t,n),half:s/2,fill:0}];let o=$(t)==="fill",e=[];for(let r of t){let i=r[1];if(Ht(i))continue;let l=o?vt(i.stroke):i.stroke===void 0||vt(i.stroke),a=o&&(vt(i.fill)||i.fill===void 0&&!l);!l&&!a||e.push({...Fn([r],n),half:l?Ne(i["stroke-width"],s)/2:0,fill:a?String((c=i["fill-rule"])!=null?c:"").trim()==="evenodd"?2:1:0})}return e}function jn(t,s,n,o,e,c,r){let i=Math.max(0,Math.floor((Math.min(s,o)-c-t.x0)/t.h)),l=Math.min(t.nx-1,Math.ceil((Math.max(s,o)+c-t.x0)/t.h)),a=Math.max(0,Math.floor((Math.min(n,e)-c-t.y0)/t.h)),h=Math.min(t.ny-1,Math.ceil((Math.max(n,e)+c-t.y0)/t.h));for(let f=a;f<=h;f++){let m=t.y0+f*t.h;for(let u=i;u<=l;u++)r(f*t.nx+u,t.x0+u*t.h,m)}}function Xt(t,s,n){let o=t.length/2;o===1&&n(t[0],t[1],t[0],t[1]);for(let e=0;e+1<o;e++)n(t[2*e],t[2*e+1],t[2*e+2],t[2*e+3]);s&&o>2&&n(t[2*o-2],t[2*o-1],t[0],t[1])}function Te(t,s){let n=new Float32Array(s.nx*s.ny).fill(On),o=2*s.h,e=null;for(let c of t){if(c.half>0){let r=c.half+o;c.lines.forEach((i,l)=>{Xt(i,c.closed[l],(a,h,f,m)=>jn(s,a,h,f,m,r,(u,g,p)=>{let M=gt(g,p,a,h,f,m)-c.half;M<n[u]&&(n[u]=M)}))})}if(c.fill){e!=null||(e=new Float32Array(s.nx*s.ny));let r=e;r.fill(On);for(let a of c.lines)Xt(a,!0,(h,f,m,u)=>jn(s,h,f,m,u,o,(g,p,M)=>{let y=gt(p,M,h,f,m,u);y<r[g]&&(r[g]=y)}));let i=[],l=[];for(let a=0;a<s.ny;a++){let h=s.y0+a*s.h,f=[];for(let g of c.lines)Xt(g,!0,(p,M,y,w)=>{M<=h!=w<=h&&f.push([p+(h-M)*(y-p)/(w-M),w>M?1:-1])});f.sort((g,p)=>g[0]-p[0]),i.length=0,l.length=0;for(let[g,p]of f)i.push(g),l.push(p);let m=0,u=0;for(let g=0;g<s.nx;g++){let p=s.x0+g*s.h;for(;m<i.length&&i[m]<p;)u+=l[m++];let M=c.fill===1?u!==0:(u&1)===1,y=a*s.nx+g,w=M?-r[y]:r[y];w<n[y]&&(n[y]=w)}}}}return n}function ve(t,s){let{nx:n,ny:o,h:e,x0:c,y0:r}=s,i=new Map,l=u=>{if(i.has(u))return u;let g=u>>1,p=g%n,M=(g-p)/n,y=u&1?g+n:g+1,w=t[g],d=Math.min(Math.max(w/(w-t[y]),1e-5),.99999);return i.set(u,u&1?[c+p*e,r+(M+d)*e]:[c+(p+d)*e,r+M*e]),u},a=new Map,h=(u,g)=>{let p=l(u),M=l(g),y=a.get(p);y?y.push(M):a.set(p,[M]);let w=a.get(M);w?w.push(p):a.set(M,[p])};for(let u=0;u+1<o;u++)for(let g=0;g+1<n;g++){let p=u*n+g,M=p+1,y=p+n+1,w=p+n,d=t[p]<0,b=t[M]<0,k=t[y]<0,S=t[w]<0,I=2*p,A=2*M+1,N=2*w,P=2*p+1,v=[];d!==b&&v.push(I),b!==k&&v.push(A),S!==k&&v.push(N),d!==S&&v.push(P),v.length===2?h(v[0],v[1]):v.length===4&&((t[p]+t[M]+t[y]+t[w])/4<0===d?(h(I,A),h(N,P)):(h(P,I),h(A,N)))}let f=[],m=new Set;for(let u of a.keys()){if(m.has(u))continue;let g=[],p=-1,M=u;for(;!m.has(M);){m.add(M);let y=i.get(M);g.push(y[0],y[1]);let w=a.get(M),d=w[0]!==p?w[0]:w[1];p=M,M=d}g.length>=6&&f.push(Float64Array.from(g))}return f}function Ot(t,s,n,o,e){let c=t.length/2,r=t[2*(s%c)],i=t[2*(s%c)+1],l=t[2*(n%c)],a=t[2*(n%c)+1],h=-1,f=o;for(let m=s+1;m<n;m++){let u=gt(t[2*(m%c)],t[2*(m%c)+1],r,i,l,a);u>f&&(f=u,h=m)}h<0||(e[h%c]=1,Ot(t,s,h,o,e),Ot(t,h,n,o,e))}function Ee(t,s){let n=t.length/2;if(n<4)return t;let o=0,e=-1;for(let i=1;i<n;i++){let l=Math.hypot(t[2*i]-t[0],t[2*i+1]-t[1]);l>e&&(e=l,o=i)}let c=new Uint8Array(n);c[0]=1,c[o]=1,Ot(t,0,o,s,c),Ot(t,o,n,s,c);let r=[];for(let i=0;i<n;i++)c[i]&&r.push(t[2*i],t[2*i+1]);return Float64Array.from(r)}function Oe(t,s){let n=t.length/2;if(n<4)return t;let o=l=>{let a=l%n,h=(l+1)%n;return Math.hypot(t[2*h]-t[2*a],t[2*h+1]-t[2*a+1])},e=[];for(let l=0;l<n;l++)o(l)>=2.5*s&&e.push(l);if(e.length<2)return t;let c=new Uint8Array(n),r=new Map;for(let l=0;l<e.length;l++){let a=e[l],h=e[(l+1)%e.length],f=(h-a-1+n)%n;if(f<1||f>3)continue;let m=0;for(let P=1;P<=f;P++)m+=o(a+P);if(m>3*s)continue;let u=a%n,g=(a+1)%n,p=h%n,M=(h+1)%n,y=t[2*g]-t[2*u],w=t[2*g+1]-t[2*u+1],d=t[2*M]-t[2*p],b=t[2*M+1]-t[2*p+1],k=y*b-w*d;if(Math.abs(Math.atan2(k,y*d+w*b))<Math.PI/12)continue;let S=((t[2*p]-t[2*u])*b-(t[2*p+1]-t[2*u+1])*d)/k,I=[t[2*u]+S*y,t[2*u+1]+S*w],A=(t[2*g]+t[2*p])/2,N=(t[2*g+1]+t[2*p+1])/2;if(!(Math.hypot(I[0]-A,I[1]-N)>2*s)){r.set(g,I);for(let P=2;P<=f+1;P++)c[(a+P)%n]=1}}if(r.size===0)return t;let i=[];for(let l=0;l<n;l++){if(c[l])continue;let a=r.get(l);a?i.push(a[0],a[1]):i.push(t[2*l],t[2*l+1])}return Float64Array.from(i)}function _n(t,s){var f,m;let n=(f=s==null?void 0:s.cell)!=null?f:.125,o=Pe(t,(m=s==null?void 0:s.strokeWidth)!=null?m:2,.004),e=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY,l=0;for(let u of o){l=Math.max(l,u.half);for(let g of u.lines)for(let p=0;p<g.length;p+=2)e=Math.min(e,g[p]),r=Math.max(r,g[p]),c=Math.min(c,g[p+1]),i=Math.max(i,g[p+1])}if(!(r>=e))return[];l+=3*n;let a={x0:e-l,y0:c-l,h:n,nx:Math.ceil((r-e+2*l)/n)+1,ny:Math.ceil((i-c+2*l)/n)+1},h=ve(Te(o,a),a).filter(u=>Math.abs(z(u))>.01);return h.map(u=>{let g=0;for(let M of h)M!==u&&B(u[0],u[1],M)&&g++;let p=g%2===1;return Oe(Ee(z(u)>0==!p?u:ht(u),n*.08),n)})}function $n(t,s){if(Nt(t))return t;let n="";for(let o of _n(t,s)){n+=`M${Tt(o[0])} ${Tt(o[1])}`;for(let e=2;e<o.length;e+=2)n+=`L${Tt(o[e])} ${Tt(o[e+1])}`;n+="Z"}if(!n)throw new Error("morphicons: icon has no visible surface");return[["path",{d:n,fill:"currentColor",stroke:"none","fill-rule":"nonzero",[In]:"1"}]]}function nt(t,s){if(Nt(t))return t;let n=$(t)==="fill"&&!t.some(([,r])=>vt(r.stroke)&&r["stroke-width"]===void 0)?0:s,o=typeof t=="string"?void 0:Ln.get(t),e=o==null?void 0:o.get(n);if(e)return e;let c=`${n}|${typeof t=="string"?t:JSON.stringify(t)}`;return e=tt.get(c),e?tt.delete(c):e=$n(t,{strokeWidth:s}),tt.set(c,e),tt.size>64&&tt.delete(tt.keys().next().value),typeof t!="string"&&(o||(o=new Map,Ln.set(t,o)),o.set(n,e)),e}function Ut(t){let s=Cn.get(t);return s||(s=Zt(t),Cn.set(t,s)),s}function qn(t,s,n){let o=nt(t,n),e=nt(s,n),c=Rn.get(o);c||(c=new WeakMap,Rn.set(o,c));let r=c.get(e);return r||(r=Jt(Ut(o),Ut(e)),c.set(e,r)),r}function Gn(t,s,n){return Jt(typeof t=="string"?Zt(nt(t,n)):t,Ut(nt(s,n)))}var ge,de,An,Me,be,Nn,Pn,ke,Ie,On,vt,Ne,Tt,Ln,tt,Cn,Rn,Wn=xt(()=>{It();zt();Bt();ge=[Math.PI/4,Math.PI/3,Math.PI/2,Math.PI],de=.3;An=.3,Me=.1,be=16;Nn=1e6;Pn=(t,s)=>{var n;return Math.min(1,Math.max(0,2*s-((n=t.half)!=null?n:s)))};ke=t=>V([t],[Kt(C(t),t.length/2)])[0][0];Ie=.25;On=1e9,vt=t=>t!==void 0&&String(t).trim().toLowerCase()!=="none",Ne=(t,s)=>{let n=typeof t=="number"?t:Number.parseFloat(String(t!=null?t:""));return Number.isFinite(n)?n:s};Tt=t=>String(Math.round(t*1e3)/1e3);Ln=new WeakMap,tt=new Map,Cn=new WeakMap,Rn=new WeakMap;globalThis[Symbol.for("morphicons.region")]={regionOf:nt,regionPlan:qn,regionPlanFrom:Gn}});function an(t){return t.items.map(()=>new Float64Array(2*t.n))}function Ct(t,s,n){for(let o=0;o<t.items.length;o++){let e=t.items[o],c=n[o],r=t.n,i=Math.exp(e.lnSigma*s),l=e.theta*s,a=Math.cos(l)*i,h=Math.sin(l)*i,f,m;if(e.block){let[g,p]=e.block.off,[M,y]=e.block.drift;f=e.ca[0]+M*s+(g*a-p*h-g),m=e.ca[1]+y*s+(g*h+p*a-p)}else f=e.ca[0]+(e.cb[0]-e.ca[0])*s,m=e.ca[1]+(e.cb[1]-e.ca[1])*s;let u=e.half===void 0?s:Math.min(1,Math.max(0,2*s-e.half));for(let g=0;g<r;g++){let p=e.aC[2*g]+(e.bT[2*g]-e.aC[2*g])*u,M=e.aC[2*g+1]+(e.bT[2*g+1]-e.aC[2*g+1])*u;c[2*g]=f+p*a-M*h,c[2*g+1]=m+p*h+M*a}}}var fn=class{constructor(){at(this,"x",1);at(this,"v",0);at(this,"k",250);at(this,"c",24)}config(t,s){this.k=t,this.c=s}start(){this.x=0,this.v>14&&(this.v=14),this.v<-14&&(this.v=-14)}step(t){let s=Math.max(1,Math.min(16,Math.ceil(t/.004166666666666667))),n=t/s;for(let o=0;o<s;o++){let e=this.k*(1-this.x)-this.c*this.v;this.v+=e*n,this.x+=this.v*n}return Math.abs(1-this.x)<.001&&Math.abs(this.v)<.02}},Rt={smooth:{k:170,c:26},snappy:{k:420,c:30},bouncy:{k:300,c:14}};It();zt();Bt();var bt=new Set,X=0,et=-1;function Un(t){let s=et<0?0:Math.min(Math.max((t-et)/1e3,0),.1);et=t;for(let n of[...bt])n(s);bt.size>0?X=requestAnimationFrame(Un):(X=0,et=-1)}function Fe(t){bt.add(t),X===0&&(et=-1,X=requestAnimationFrame(Un))}function je(t){bt.delete(t),bt.size===0&&X!==0&&(cancelAnimationFrame(X),X=0,et=-1)}var Yn=new WeakMap,zn=new WeakMap,Hn=new WeakMap;function Zn(t){return typeof t=="string"||$(t)==="stroke"?Y(t):Vt(t).flatMap(s=>{let n=Y([s]),o=String(s[1]["fill-rule"]).trim()==="evenodd",e=0;for(let c of n)e+=z(c.pts);for(let c of n){let r=e<0;if(o){let i=!0;for(let l of n)l!==c&&B(c.pts[0],c.pts[1],l.pts)&&(i=!i);r=z(c.pts)>0!==i}r&&(c.pts=ht(c.pts))}return n})}function Q(t){if(typeof t=="string")return kn(t);let s=Yn.get(t);return s||(s=Zn(t).map(n=>({pts:mt(n,64),closed:n.closed})),Yn.set(t,s)),s}function Le(t){if(typeof t=="string")return t;let s=zn.get(t);return s||(s=pn(Zn(t)),zn.set(t,s)),s}function Ce(t,s){if(typeof t=="string"||typeof s=="string")return At(Q(t),Q(s));let n=Hn.get(t);n||(n=new WeakMap,Hn.set(t,n));let o=n.get(s);return o||(o=At(Q(t),Q(s)),n.set(s,o)),o}var G=null,Mt=null,nn=0,on=!1,pt,tn=0,Kn=()=>Promise.resolve().then(()=>(Wn(),Dn));var Re=t=>new Promise((s,n)=>{let o=document.createElement("script");o.type="module",o.onload=o.onerror=()=>{o.remove();let e=globalThis[Symbol.for("morphicons.region")];e?s(e):n(new Error(t))},o.src=`${t}#${Date.now()}`,document.head.append(o)}),_e=()=>{var n,o;let t=(n=/import\(\s*["'`]([^"'`]+)/.exec(String(Kn)))==null?void 0:n[1],s=(o=/\w+:\/\/[^\s)]+?(?=:\d+:\d+)/.exec(String(new Error().stack)))==null?void 0:o[0];try{return t&&new URL(t,s).href}catch(e){}};function en(){if(G)return Promise.resolve(G);if(!Mt){nn=Date.now();let t=pt,s=tn;Mt=Kn().catch(n=>t?Re(t):Promise.reject(n)).then(n=>(s===tn&&(G=n),n),n=>{var o,e;throw s!==tn||(Mt=null,on=!0,pt!=null||(pt=(e=(o=/dynamically imported module:?\s*(\S+)/i.exec(String(n==null?void 0:n.message)))==null?void 0:o[1])!=null?e:_e())),n})}return Mt}var $e=()=>new Promise((t,s)=>{var o;if(typeof navigator!="undefined"&&(o=navigator.connection)!=null&&o.saveData)return;let n=()=>{on?s():en().then(t,s)};typeof requestIdleCallback=="function"?requestIdleCallback(n,{timeout:2e3}):setTimeout(n,200)}),Vn=100,qe=t=>t==="stroke"?{fill:"none",stroke:"inherit"}:{fill:"currentColor",stroke:t==="fill"?"none":"inherit","fill-rule":"nonzero"},Bn=new WeakMap,Qn=new WeakSet;function Xn(t){if(typeof t=="string"||$(t)==="stroke")return"stroke";let s=Bn.get(t);if(s)return s;let n=0,o=-1;s="fill";for(let e of Vt(t)){let c=St(e[1].stroke),r=St(e[1].fill)||e[1].fill===void 0&&!c;c&&(s="both");let i=0;for(let l of Y([e]))i+=Math.abs(z(l.pts));r?n+=i:c&&(o=Math.max(o,0)+i)}return o>1.5*n&&(s="stroke"),Bn.set(t,s),s}function Ge(t,s){let o=({pts:e,closed:c},r)=>{e.length>128&&(e=e.filter((h,f)=>f%4<2));let i=C(e),l=e.map((h,f)=>h-i[f&1]),a=new Float64Array(128);return{aC:r?a:l,bT:r?l:a,ca:i,cb:i,theta:0,lnSigma:0,closed:c,half:r,block:null}};return{n:64,items:[...t.map(e=>o(e,0)),...s.map(e=>o(e,1))]}}function De(t){var n,o;if(typeof t=="string")return Rt[t];let s=Rt.snappy;return{k:(n=t==null?void 0:t.stiffness)!=null?n:s.k,c:(o=t==null?void 0:t.damping)!=null?o:s.c}}function Jn(t,s,n){var yt,K;let o=new fn,e=(yt=n==null?void 0:n.reducedMotion)!=null?yt:"never",c=(K=n==null?void 0:n.strokeWidth)!=null?K:2,r=s,i=!0,l=null,a=null,h=null,f=1,m=!1,u=!1,g=!1,p=!1,M=null,y="stroke",w=!Qn.has(t),d=0,b="stroke",k=null,S=x=>{if(!(x===y&&w)){for(let[T,E]of Object.entries(qe(x)))t.setAttribute(T,E);y=x,w=!0,Qn.add(t)}},I=x=>{let T=G&&$(x)==="fill"?G.regionOf(x,c):x;t.setAttribute("d",Le(T)),S(Xn(T))},A=x=>{let T=r;x.then(()=>{!u&&i&&r===T&&M===null&&I(T)},()=>{})};I(s),$(s)==="fill"&&!G&&A($e());let N=x=>{var T,E;return d?x<.5?[0,d]:[d,(E=l==null?void 0:l.items.length)!=null?E:0]:[0,(T=l==null?void 0:l.items.length)!=null?T:0]},P=x=>{let T=l,E=a,F=h;if(!T||!E||!F)return;f=x,Ct(T,x,E),p=!0;let[q,W]=N(x);d&&S(x<.5?b:Xn(r)),t.setAttribute("d",$t(E.slice(q,W),F.slice(q,W)))},v=()=>{m&&(m=!1,je(R))},R=x=>{let T=o.step(x);P(o.x),T&&(v(),L())},L=()=>{i=!0,l=null,a=null,h=null,f=1,o.x=1,o.v=0,g=!1,d=0,I(r),$(r)==="fill"&&!G&&(Mt||!on)&&A(en())},_=()=>{let x=l,T=a;if(i||!x||!T)return Q(r);let[E,F]=N(f);return T.slice(E,F).map((q,W)=>({pts:Float64Array.from(q),closed:x.items[E+W].closed,hole:x.items[E+W].hole}))},ot=x=>!i&&g||$(x)==="fill"||$(r)==="fill",st=(x,T)=>{if(!i&&l&&a&&!p&&(f=0,Ct(l,0,a)),T||!i&&d){let E=_();k=i?r:null,b=y,l=Ge(E,Q(x)),d=E.length,g=!1}else if(ot(x)){let E=G;l=i||!a?E.regionPlan(r,x,c):E.regionPlanFrom(g?_():$t(a,h!=null?h:void 0),x,c),g=!0,d=0,S("fill")}else l=i?Ce(r,x):At(_(),Q(x)),g=!1;a=an(l),p=!1,h=l.items.map(E=>E.closed),r=x,i=!1},U=(x,T,E)=>{if(G||!i&&d||!ot(x))return!1;let F={};M=F;let q=()=>{u||M!==F||(M=null,E())},W=en();if(Date.now()-nn>Vn)return q(),!0;let it=setTimeout(q,Vn-(Date.now()-nn));return W.then(()=>{clearTimeout(it),!(u||M!==F)&&(M=null,T())},()=>{clearTimeout(it),q()}),!0},rt=x=>{v(),M=null,r=x,L()},Z=()=>{var x;return e==="always"?!0:e!=="user"||typeof matchMedia=="undefined"?!1:(x=matchMedia==null?void 0:matchMedia("(prefers-reduced-motion: reduce)").matches)!=null?x:!1},D=(x,T,E=!1)=>{if(u||!E&&U(x,()=>D(x,T),()=>D(x,T,!0)))return;M=null;let F=!i&&l!==null&&x===r;F&&d&&G&&k!==null&&(r=k,i=!0,F=!1),v(),o.v=0,F||st(x,E),P(T)},ct=(x,T,E)=>{if(u)return;if(x===r&&(i||m)){M=null;return}if(Z()){rt(x);return}if(!E&&U(x,()=>ct(x,T,!1),()=>ct(x,T,!0)))return;M=null;let{k:F,c:q}=De(T);o.config(F,q),st(x,E),o.start(),m||(m=!0,Fe(R))};return{morphTo:(x,T)=>ct(x,T,!1),set(x){u||rt(x)},seek:D,get progress(){return i?1:f},set progress(x){u||D(r,x)},get reducedMotion(){return e},set reducedMotion(x){e=x},get strokeWidth(){return c},set strokeWidth(x){c=x},destroy(){v(),u=!0,M=null,l=null,a=null,h=null}}}window.WA_MORPH={createMorph:Jn,versao:"2.0.2"};})();

/* Ícones: PulsoIcon (c) 2026 CityPulso, licença ISC (https://github.com/CityPulso/PulsoIcon). Animação: Motion, licença MIT. Gerado por ferramentas/icones/gerar.mjs */
(()=>{var Ht={duration:.25,ease:"easeOut"},D=(t,e,r={})=>({duration:e,delay:t.d,ease:"easeInOut",...r}),P={x:0,y:0,rotate:0,scale:1,scaleX:1,scaleY:1,skewY:0,opacity:1,transition:Ht},Tr={draw:t=>({normal:{pathLength:1,opacity:1,transition:Ht},animate:{pathLength:[0,1],opacity:[0,1],transition:D(t,.55,{opacity:{duration:.1,delay:t.d}})}}),drawBack:t=>({normal:{pathLength:1,pathOffset:0,opacity:1,transition:Ht},animate:{pathLength:[0,1],pathOffset:[1,0],opacity:[0,1],transition:D(t,.55,{opacity:{duration:.1,delay:t.d}})}}),drawOut:t=>({normal:{pathLength:1,pathOffset:0,opacity:1,transition:Ht},animate:{pathLength:[0,1],pathOffset:[.5,0],opacity:[0,1],transition:D(t,.55,{opacity:{duration:.1,delay:t.d}})}}),redraw:t=>({normal:{pathLength:1,pathOffset:0,transition:Ht},animate:{pathLength:[1,0,1],pathOffset:[0,1,0],transition:D(t,.7)}}),pop:t=>({normal:P,animate:{scale:[0,1+(t.a||.25),1],opacity:[0,1,1],transition:D(t,.45)}}),press:t=>({normal:P,animate:{scale:[1,1-(t.a||.15),1.05,1],transition:D(t,.4)}}),spin:t=>({normal:{rotate:0,transition:{duration:0}},animate:{rotate:[0,t.a||360],transition:D(t,.8)}}),turn:t=>({normal:P,animate:{rotate:[0,t.a||90,0],transition:D(t,.7)}}),ring:t=>{let e=t.a||14;return{normal:P,animate:{rotate:[0,-e,e*.85,-e*.55,e*.3,0],transition:D(t,.7)}}},beat:t=>{let e=t.a||.16;return{normal:P,animate:{scale:[1,1+e,1-e*.3,1+e*.6,1],transition:D(t,.65)}}},pulse:t=>({normal:P,animate:{scale:[1,1+(t.a||.08),1],transition:D(t,.6)}}),slide:t=>({normal:P,animate:{x:[0,t.x*(t.a||2.5),0],y:[0,t.y*(t.a||2.5),0],transition:D(t,.5)}}),shoot:t=>{let e=t.a||7;return{normal:P,animate:{x:[0,t.x*e,-t.x*e,0],y:[0,t.y*e,-t.y*e,0],opacity:[1,0,0,1],transition:D(t,.6,{times:[0,.4,.41,1]})}}},bounce:t=>{let e=t.a||3;return{normal:P,animate:{x:[0,t.x*e,0,t.x*e*.4,0],y:[0,t.y*e,0,t.y*e*.4,0],transition:D(t,.6)}}},shake:t=>{let e=t.a||1.5;return{normal:P,animate:{x:[0,-e,e,-e*.6,e*.6,0],transition:D(t,.5)}}},tilt:t=>{let e=t.a||12;return{normal:P,animate:{rotate:[0,-e,e*.6,-e*.3,0],transition:D(t,.7)}}},swing:t=>{let e=t.a||10;return{normal:P,animate:{rotate:[0,e,-e*.75,e*.4,0],transition:D(t,.8)}}},lift:t=>({normal:P,animate:{x:[0,t.x*2.5,0],y:[0,(t.y||-1)*2.5,0],rotate:[0,t.a,0],transition:D(t,.55)}}),blink:t=>({normal:P,animate:{scaleY:[1,.1,1],transition:D(t,.35)}}),flip:t=>({normal:P,animate:{scaleX:[1,-1,1],transition:D(t,.6)}}),open:t=>({normal:P,animate:{scaleX:[1,1-(t.a||.35),1],skewY:[0,-(t.y||6),0],transition:D(t,.6)}}),fold:t=>({normal:P,animate:{scaleY:[1,-1,1],transition:D(t,.6)}}),fade:t=>({normal:P,animate:{opacity:[1,.15,1],transition:D(t,.5)}}),twinkle:t=>{let e=t.a||18;return{normal:P,animate:{rotate:[0,-e,e,0],scale:[1,.85,1.1,1],transition:D(t,.7)}}},float:t=>({normal:P,animate:{y:[0,-(t.a||1.5),0],transition:D(t,.6)}}),grow:t=>({normal:P,animate:{scaleY:[0,1],transition:D(t,.45)}}),drop:t=>{let e=t.a||6;return{normal:P,animate:{x:[t.x*e,0],y:[(t.y||-1)*e,0],opacity:[0,1],transition:D(t,.45,{ease:[.34,1.56,.64,1]})}}},rise:t=>({normal:P,animate:{y:[t.a||3,0],opacity:[0,1],transition:D(t,.5,{ease:[.22,1,.36,1]})}}),stamp:t=>({normal:P,animate:{scale:[1+(t.a||.6),.92,1],opacity:[0,1,1],transition:D(t,.45)}}),jelly:t=>{let e=t.a||.18;return{normal:P,animate:{scaleX:[1,1+e,1-e*.6,1+e*.3,1],scaleY:[1,1-e,1+e*.6,1-e*.3,1],transition:D(t,.7)}}},roll:t=>{let e=t.a||3,r=t.x||1;return{normal:P,animate:{x:[0,r*e,0],rotate:[0,r*180,360*r],transition:D(t,.8)}}},sway:t=>{let e=t.a||6;return{normal:P,animate:{rotate:[0,e,-e,e*.5,0],transition:D(t,1)}}},flicker:t=>({normal:P,animate:{opacity:[1,.3,1,.5,1],transition:D(t,.6,{times:[0,.2,.4,.6,1]})}}),wobble:t=>{let e=t.a||8;return{normal:P,animate:{rotate:[0,-e,e,0],scale:[1,1.08,1.08,1],transition:D(t,.6)}}},growX:t=>({normal:P,animate:{scaleX:[0,1],transition:D(t,.45)}})},al=Object.keys(Tr);var ps=/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/i,us={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},Re=8;function ds(t){let e=[],r=0,o="",n=0;for(;r<t.length;){let i=t[r];if(/[\s,]/.test(i))r++;else if(/[a-z]/i.test(i))e.push(i),o=i.toLowerCase(),n=0,r++;else if(o==="a"&&(n%7===3||n%7===4))e.push(Number(i)),n++,r++;else{let s=ps.exec(t.slice(r));if(!s)return e;e.push(Number(s[0])),n++,r+=s[0].length}}return e}function hs(t,e,r,o,n,i,s){if(e=Math.abs(e),r=Math.abs(r),!e||!r)return[s];let a=o*Math.PI/180,l=Math.cos(a),c=Math.sin(a),m=(t[0]-s[0])/2,u=(t[1]-s[1])/2,g=l*m+c*u,p=-c*m+l*u,f=g*g/(e*e)+p*p/(r*r);f>1&&(e*=Math.sqrt(f),r*=Math.sqrt(f));let h=e*e*r*r-e*e*p*p-r*r*g*g,d=e*e*p*p+r*r*g*g,x=(n===i?-1:1)*Math.sqrt(Math.max(0,h/d)),b=x*e*p/r,T=-x*r*g/e,V=l*b-c*T+(t[0]+s[0])/2,v=c*b+l*T+(t[1]+s[1])/2,A=(S,k)=>Math.atan2(k,S),E=A((g-b)/e,(p-T)/r),w=A((-g-b)/e,(-p-T)/r)-E;!i&&w>0&&(w-=2*Math.PI),i&&w<0&&(w+=2*Math.PI);let C=[];for(let S=1;S<=Re;S++){let k=E+w*S/Re;C.push([V+e*l*Math.cos(k)-r*c*Math.sin(k),v+e*c*Math.cos(k)+r*l*Math.sin(k)])}return C}function Oe(t){let e=[];for(let r=1;r<=Re;r++){let o=t,n=r/Re;for(;o.length>1;)o=o.slice(1).map((i,s)=>[o[s][0]+(i[0]-o[s][0])*n,o[s][1]+(i[1]-o[s][1])*n]);e.push(o[0])}return e}function gs(t){return Oo(t).subpaths}function Yt([t,e],r){let o=!1;for(let n=0,i=r.length-1;n<r.length;i=n++){let[s,a]=r[n],[l,c]=r[i];a>e!=c>e&&t<(l-s)*(e-a)/(c-a)+s&&(o=!o)}return o}function Vr(t){let e=t.length?[t[0]]:[];for(let r=1;r<t.length;r++){let[o,n]=t[r-1],[i,s]=t[r],a=Math.max(1,Math.ceil(Math.hypot(i-o,s-n)));for(let l=1;l<=a;l++)e.push([o+(i-o)*l/a,n+(s-n)*l/a])}return e}function Zt([t,e],r){let o=1/0;for(let n=0;n<r.length;n++){let[i,s]=r[n],[a,l]=r[Math.min(n+1,r.length-1)],c=a-i,m=l-s,u=c||m?Math.max(0,Math.min(1,((t-i)*c+(e-s)*m)/(c*c+m*m))):0;o=Math.min(o,Math.hypot(t-i-u*c,e-s-u*m))}return o}var Eo=t=>Number(t.toFixed(3));function Fo(t){let{list:e,moves:r}=Oo(t);return r.map((o,n)=>{var l,c;let i=e.slice(o.to,(c=(l=r[n+1])==null?void 0:l.from)!=null?c:e.length),s=e[o.from]==="m",a=typeof i[0]=="number"?s?"l":"L":"";return`M${Eo(o.point[0])} ${Eo(o.point[1])}${i.length?`${a}${i.join(" ")}`:""}`})}function Oo(t){let e=ds(t),r=[],o=[],n,i=[0,0],s=[0,0],a,l="",c=0,m="",u=-1,g=(p,f=!0)=>{n||(n={points:[i],closed:!1,curved:!0},r.push(n)),f?n.bent=!0:n.curved=!1,n.points.push(...p),i=p[p.length-1]};for(;c<e.length;){typeof e[c]=="string"&&(u=c,m=e[c++]);let p=m.toLowerCase(),f=m!==m.toUpperCase(),h=us[p];if(h===void 0)break;let d=e.slice(c,c+h);if(d.length<h||d.some(v=>typeof v!="number"))break;c+=h;let x=(v,A)=>f?[i[0]+v,i[1]+A]:[v,A],b=()=>a&&/[cs]/.test(l)?[2*i[0]-a[0],2*i[1]-a[1]]:i,T=()=>a&&/[qt]/.test(l)?[2*i[0]-a[0],2*i[1]-a[1]]:i,V;switch(p){case"m":i=x(d[0],d[1]),s=i,n=void 0,m=f?"l":"L",o.push({from:u,to:c,point:i});break;case"z":n&&(n.closed=!0),i=s,n=void 0;break;case"l":g([x(d[0],d[1])],!1);break;case"h":g([[f?i[0]+d[0]:d[0],i[1]]],!1);break;case"v":g([[i[0],f?i[1]+d[0]:d[0]]],!1);break;case"c":{let v=x(d[0],d[1]);V=x(d[2],d[3]),g(Oe([i,v,V,x(d[4],d[5])]));break}case"s":{V=x(d[0],d[1]),g(Oe([i,b(),V,x(d[2],d[3])]));break}case"q":V=x(d[0],d[1]),g(Oe([i,V,x(d[2],d[3])]));break;case"t":V=T(),g(Oe([i,V,x(d[0],d[1])]));break;case"a":g(hs(i,d[0],d[1],d[2],d[3],d[4],x(d[5],d[6])));break}a=V,l=p,p==="z"&&(m="")}return{list:e,subpaths:r,moves:o}}var L=t=>Number.parseFloat(t!=null?t:"0")||0;function Do(t,e,r,o){let n=[];for(let i=0;i<16;i++)n.push([t+r*Math.cos(i*Math.PI/8),e+o*Math.sin(i*Math.PI/8)]);return{points:n,closed:!0}}function Po(t){let e=(t!=null?t:"").trim().split(/[\s,]+/).map(Number),r=[];for(let o=0;o+1<e.length;o+=2)r.push([e[o],e[o+1]]);return r}function Ro(t,e){var r;switch(t){case"path":return gs((r=e.d)!=null?r:"");case"circle":return[Do(L(e.cx),L(e.cy),L(e.r),L(e.r))];case"ellipse":return[Do(L(e.cx),L(e.cy),L(e.rx),L(e.ry))];case"rect":{let o=L(e.x),n=L(e.y),i=L(e.width),s=L(e.height);return[{points:[[o,n],[o+i,n],[o+i,n+s],[o,n+s]],closed:!0}]}case"line":return[{points:[[L(e.x1),L(e.y1)],[L(e.x2),L(e.y2)]],closed:!1}];case"polygon":return[{points:Po(e.points),closed:!0}];case"polyline":return[{points:Po(e.points),closed:!1}];default:return[]}}function Jt(t){let e=0;for(let r=0;r<t.length;r++){let[o,n]=t[r],[i,s]=t[(r+1)%t.length];e+=o*s-i*n}return Math.abs(e)/2}function Bo(t){let e=0;for(let r=1;r<t.length;r++)e+=Math.hypot(t[r][0]-t[r-1][0],t[r][1]-t[r-1][1]);return e}function Io(t){let e=t.flatMap(n=>n.points);if(!e.length)return;let r=e.map(n=>n[0]),o=e.map(n=>n[1]);return{x0:Math.min(...r),y0:Math.min(...o),x1:Math.max(...r),y1:Math.max(...o)}}var No={draw:"pop",drawBack:"pop",drawOut:"pop",redraw:"pop"},Lo=t=>{var e;return(e=t.solid)!=null?e:bs(t.nodes,t.text?"text":t.key.startsWith("brand-")?"wordmark":void 0)};function xs({points:t,closed:e,curved:r,bent:o},n){let i=Jt(t);if(e)return i>.5;if(i<8)return!1;let[s,a]=t[0],[l,c]=t[t.length-1],m=Math.hypot(l-s,c-a);if(m<=2)return!0;if(r)return Math.min(Math.abs(l-s),Math.abs(c-a))<.5&&i>=.3*m*m&&i<=.5*m*m;if(o&&Math.abs(c-a)<.5&&a>=20.5&&m>=8){let g=a-Math.min(...t.map(([,p])=>p));if(g>3&&g<.8*m)return!0}if(m>.45*Bo(t))return!1;let u=0;for(let g=1;g<10;g++){let p=[l+(s-l)*g/10,c+(a-c)*g/10];n.some(f=>Zt(p,f)<=1.6)&&u++}return u>=7}var ys=(t,e)=>t.x0>=e.x0-.01&&t.y0>=e.y0-.01&&t.x1<=e.x1+.01&&t.y1<=e.y1+.01,tt=t=>(t.x1-t.x0)*(t.y1-t.y0);function bs(t,e){let r=e==="wordmark",o=t.flatMap(([p,f,h])=>{var b;let d=p==="path"&&!f.transform?Fo((b=f.d)!=null?b:""):[];return(d.length>1?d.map(T=>({...f,d:T})):[f]).map(T=>({tag:p,attrs:T,m:h,subpaths:Ro(p,T)}))}),n=o.map(({attrs:p,subpaths:f},h)=>{let d=o.flatMap((x,b)=>b===h?[]:x.subpaths.map(T=>T.points));return{filled:f.some(x=>xs(x,d)),box:p.transform?void 0:Io(f)}}),i=p=>{let{box:f}=n[p],h=o[p].subpaths.every(d=>!d.closed);return!!f&&h&&f.y1-f.y0>=5&&f.x1-f.x0<=.8*(f.y1-f.y0)},s=n.map(({box:p},f)=>i(f)&&n.some(({box:h},d)=>d!==f&&i(d)&&!!p&&!!h&&Math.abs(h.y0-p.y0)<.6&&Math.abs(h.y1-p.y1)<.6));if(r||s.some(Boolean)){let p=f=>!!f&&f.y1-f.y0>=3&&f.y1-f.y0<=12&&f.x1-f.x0<=1.3*(f.y1-f.y0)+1;n.forEach(({box:f},h)=>{n.some(({box:x},b)=>{if(b===h||!p(f)||!p(x)||!f||!x)return!1;let T=Math.min(f.y1,x.y1)-Math.max(f.y0,x.y0),V=Math.min(f.x1,x.x1)-Math.max(f.x0,x.x0),v=Math.max(f.x0,x.x0)-Math.min(f.x1,x.x1);return T>=.5*Math.min(f.y1-f.y0,x.y1-x.y0)&&v<=5&&V<.2*Math.min(f.x1-f.x0,x.x1-x.x0)})&&(s[h]=!0)})}e==="text"&&n.forEach(({box:p},f)=>{p&&p.y1-p.y0<=16.5&&p.x1-p.x0<=16.5&&(s[f]=!0)}),s.forEach((p,f)=>p&&(n[f].filled=!1));let a=p=>[(p.x0+p.x1)/2,(p.y0+p.y1)/2];n.map(({filled:p,box:f},h)=>p&&f&&n.some(({filled:d,box:x},b)=>{if(b===h||!d||!x)return!1;let[T,V]=a(f),[v,A]=a(x);if(Math.hypot(v-T,A-V)>=1||tt(x)>2*tt(f)||tt(f)>2*tt(x))return!1;let E=Jt(o[h].subpaths[0].points),w=Jt(o[b].subpaths[0].points);return Math.min(E,w)>.6*Math.max(E,w)&&!o[h].subpaths.every(C=>Vr(C.points).every(S=>o[b].subpaths.some(k=>Yt(S,k.points)||Zt(S,k.points)<.5)))})).forEach((p,f)=>p&&(n[f].filled=!1));let c=n.map(({filled:p,box:f},h)=>p&&n.some((d,x)=>x!==h&&d.filled&&f&&d.box&&ys(f,d.box)&&tt(d.box)>tt(f)&&o[x].subpaths.some(b=>Yt([(f.x0+f.x1)/2,(f.y0+f.y1)/2],b.points)))),m=o.flatMap((p,f)=>n[f].filled&&!c[f]?p.subpaths.map(h=>[...h.points,h.points[0]]):[]),u=p=>p.some(f=>Vr(f.points).some(h=>m.some(d=>Yt(h,d)&&Zt(h,d)>1.2)));return o.flatMap(({tag:p,attrs:f,m:h,subpaths:d},x)=>{if(!n[x].filled)return[u(d)?[p,f,h,"line"]:[p,{...f,fill:"none"},h,"fill"]];if(c[x])return[[p,f,h,"cut"]];let b=g(d,x);return b?[[p,f,h,"fill"],["circle",b,h,"cut"]]:[[p,f,h,"fill"]]});function g(p,f){let h=n[f].box;if(!h||p.length!==1)return;let d=(h.x1-h.x0)/2,x=Jt(p[0].points);if(Math.abs(h.y1-h.y0-2*d)>.3||x<.9*Math.PI*d*d||x>1.1*Math.PI*d*d)return;let b=[(h.x0+h.x1)/2,(h.y0+h.y1)/2],T=(v,A)=>tt(A)>tt(h)||v<f&&tt(A)>=.5*tt(h);return n.some((v,A)=>A!==f&&v.filled&&!c[A]&&v.box&&T(A,v.box)&&o[A].subpaths.some(E=>Yt(b,E.points)||Zt(b,[...E.points,E.points[0]])<d+1))?{cx:`${Sr(b[0])}`,cy:`${Sr(b[1])}`,r:`${Sr(d+2)}`}:void 0}}var Sr=t=>Number(t.toFixed(3));var Go='button, a, label, summary, [role="button"], [role="menuitem"], [role="tab"], [role="link"], [data-icon-trigger]',Ko={x:"-12",y:"-12",width:"48",height:"48"},Ms=["x","y","rotate","scale","scaleX","scaleY","skewY"],vs=t=>typeof t=="number"?t:Number.parseFloat(t)||24,$o=(t,e)=>{var r,o,n,i;return Tr[e&&No[t.r]||t.r]({d:(r=t.d)!=null?r:0,x:(o=t.x)!=null?o:0,y:(n=t.y)!=null?n:0,a:(i=t.a)!=null?i:0})},Ts=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);function Wo(t){let e=Ms.filter(r=>t[r]!==void 0);for(let r of e)if(t[r]!==(r.startsWith("scale")?1:0))throw new Error(`resting ${r} must be the identity`);return{transform:e.length?"none":void 0,opacity:t.opacity!==void 0?`${t.opacity}`:void 0}}function Vs(t,e,r,o){var u,g;let n={};for(let[p,f]of Object.entries(e))(p!=="transform"||!r)&&(n[Ts(p)]=f);if(!r)return{tag:t,attrs:n,children:[]};let i=$o(r,o),{normal:s}=i;s.pathLength!==void 0&&(n.pathLength="1",n["stroke-dashoffset"]=`${-Number((u=s.pathOffset)!=null?u:0)||0}`,n["stroke-dasharray"]=`${s.pathLength} 1`);let[a,l]=(g=r.o)!=null?g:[12,12],c=Wo(s);n.style=["transform-box:view-box",c.transform&&`transform:${c.transform}`,c.opacity&&`opacity:${c.opacity}`,`transform-origin:${a}px ${l}px 0`].filter(Boolean).join(";");let m={tag:t,attrs:n,children:[],motion:i};return e.transform?{tag:"g",attrs:{transform:e.transform},children:[m]}:m}var Be=(t,e=!1)=>t.map(([r,o,n])=>Vs(r,o,n,e&&o.fill!=="none")),Qt=(t,e)=>({tag:"g",attrs:t,children:e});function wr(t,e){var x;let{size:r=24,color:o="currentColor",strokeWidth:n=2,absoluteStrokeWidth:i,solid:s=!1,className:a,maskId:l}=e,c=i?Number(n)*24/vs(r):Number(n),m=`pulsoicon pulsoicon-${t.key}`,u;if(!s)u=Be(t.nodes);else{let b=Lo(t),T=E=>b.filter(w=>{var C;return((C=w[3])!=null?C:"fill")===E}),V=()=>Be(T("fill"),!0),v=Be(T("cut")),A=()=>Be(T("line"));if(v.length+T("line").length===0)u=[Qt({fill:o},V())];else{let E=(w,C)=>({tag:"mask",attrs:{id:w,maskUnits:"userSpaceOnUse",...Ko},children:[{tag:"rect",attrs:{...Ko,fill:"white",stroke:"none"},children:[]},C]});u=[{tag:"defs",attrs:{},children:[E(`${l}-fill`,Qt({stroke:"black"},[...v,...A()])),E(`${l}-line`,Qt({fill:"black",stroke:"none"},V()))]},Qt({fill:o,mask:`url(#${l}-fill)`},V()),Qt({mask:`url(#${l}-line)`},A())]}}let g={class:a?`${m} ${a}`:m,fill:"none",height:`${r}`,stroke:o,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":`${c}`,viewBox:"0 0 24 24",width:`${r}`,xmlns:"http://www.w3.org/2000/svg"};if(!t.svg)return{tag:"svg",attrs:{...g,style:"overflow:visible"},children:u};let p=$o(t.svg,s),[f,h]=(x=t.svg.o)!=null?x:[12,12],d=Wo(p.normal);return g.style=["overflow:visible",`transform-origin:${f/24*100}% ${h/24*100}%`,d.opacity&&`opacity:${d.opacity}`,d.transform&&`transform:${d.transform}`].filter(Boolean).join(";"),{tag:"svg",attrs:g,children:u,motion:p}}function zo(t,e={"aria-hidden":"true"}){let r=n=>n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),o=(n,i={})=>{let s=Object.entries({...i,...n.attrs}).map(([a,l])=>` ${a}="${r(l)}"`).join("");return`<${n.tag}${s}>${n.children.map(a=>o(a)).join("")}</${n.tag}>`};return o(t,e)}function Ar(t,e){t.indexOf(e)===-1&&t.push(e)}function vt(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}var $=(t,e,r)=>r>e?e:r<t?t:r;var J=()=>{},z=()=>{};var W={};var te=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);var Cr=t=>typeof t=="object"&&t!==null;var ee=t=>/^0[^.\s]+$/u.test(t);function re(t){let e;return()=>(e===void 0&&(e=t()),e)}var X=t=>t;var Tt=(...t)=>t.reduce((e,r)=>o=>r(e(o)));var Vt=(t,e,r)=>{let o=e-t;return o?(r-t)/o:1};var St=class{constructor(){this.subscriptions=[]}add(e){return Ar(this.subscriptions,e),()=>vt(this.subscriptions,e)}notify(e,r,o){let n=this.subscriptions.length;if(n)if(n===1)this.subscriptions[0](e,r,o);else for(let i=0;i<n;i++){let s=this.subscriptions[i];s&&s(e,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};var B=t=>t*1e3,K=t=>t/1e3;var oe=(t,e)=>e?t*(1e3/e):0;var jo=(t,e,r)=>{let o=e-t;return((r-t)%o+o)%o+t};var _o=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t,Ss=1e-7,ws=12;function As(t,e,r,o,n){let i,s,a=0;do s=e+(r-e)/2,i=_o(s,o,n)-t,i>0?r=s:e=s;while(Math.abs(i)>Ss&&++a<ws);return s}function ut(t,e,r,o){if(t===e&&r===o)return X;let n=i=>As(i,0,1,t,r);return i=>i===0||i===1?i:_o(n(i),e,o)}var Ie=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2;var wt=t=>e=>1-t(1-e);var Ne=ut(.33,1.53,.69,.99),Rt=wt(Ne),ne=Ie(Rt);var ie=t=>t>=1?1:(t*=2)<1?.5*Rt(t):.5*(2-Math.pow(2,-10*(t-1)));var se=t=>1-Math.sin(Math.acos(t)),kr=wt(se),ae=Ie(se);var Er=ut(.42,0,1,1),Dr=ut(0,0,.58,1),le=ut(.42,0,.58,1);var ce=t=>Array.isArray(t)&&typeof t[0]!="number";function me(t,e){return ce(t)?t[jo(0,t.length,e)]:t}var fe=t=>Array.isArray(t)&&typeof t[0]=="number";var Xo={linear:X,easeIn:Er,easeInOut:le,easeOut:Dr,circIn:se,circInOut:ae,circOut:kr,backIn:Rt,backInOut:ne,backOut:Ne,anticipate:ie},Cs=t=>typeof t=="string",Le=t=>{if(fe(t)){z(t.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[e,r,o,n]=t;return ut(e,r,o,n)}else if(Cs(t))return z(Xo[t]!==void 0,`Invalid easing type '${t}'`,"invalid-easing-type"),Xo[t];return t};var pe=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function qo(t){let e=new Set,r=new Set,o=!1,n=!1,i=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1};function a(c){i.has(c)&&(l.schedule(c),t()),c(s)}let l={schedule:(c,m=!1,u=!1)=>{let p=u&&o?e:r;return m&&i.add(c),p.add(c),c},cancel:c=>{r.delete(c),i.delete(c)},process:c=>{if(s=c,o){n=!0;return}o=!0;let m=e;e=r,r=m,e.forEach(a),e.clear(),o=!1,n&&(n=!1,l.process(c))}};return l}var ks=40;function Ke(t,e){let r=!1,o=!0,n={delta:0,timestamp:0,isProcessing:!1},i=()=>r=!0,s=pe.reduce((T,V)=>(T[V]=qo(i),T),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:m,update:u,preRender:g,render:p,postRender:f}=s,h=()=>{let T=W.useManualTiming,V=T?n.timestamp:performance.now();r=!1,T||(n.delta=o?1e3/60:Math.max(Math.min(V-n.timestamp,ks),1)),n.timestamp=V,n.isProcessing=!0,a.process(n),l.process(n),c.process(n),m.process(n),u.process(n),g.process(n),p.process(n),f.process(n),n.isProcessing=!1,r&&e&&(o=!1,t(h))},d=()=>{r=!0,o=!0,n.isProcessing||t(h)};return{schedule:pe.reduce((T,V)=>{let v=s[V];return T[V]=(A,E=!1,w=!1)=>(r||d(),v.schedule(A,E,w)),T},{}),cancel:T=>{for(let V=0;V<pe.length;V++)s[pe[V]].cancel(T)},state:n,steps:s}}var{schedule:G,cancel:ue,state:Bt,steps:Kc}=Ke(typeof requestAnimationFrame!="undefined"?requestAnimationFrame:X,!0);var Ge;function Es(){Ge=void 0}var I={now:()=>(Ge===void 0&&I.set(Bt.isProcessing||W.useManualTiming?Bt.timestamp:performance.now()),Ge),set:t=>{Ge=t,queueMicrotask(Es)}};var Uo=t=>e=>typeof e=="string"&&e.startsWith(t),$e=Uo("--"),Ds=Uo("var(--"),It=t=>Ds(t)?Ps.test(t.split("/*")[0].trim()):!1,Ps=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Pr(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}var et={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},at={...et,transform:t=>$(0,1,t)},de={...et,default:1};var dt=t=>Math.round(t*1e5)/1e5;var Nt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ho(t){return t==null}var Yo=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;var Lt=(t,e)=>r=>!!(typeof r=="string"&&Yo.test(r)&&r.startsWith(t)||e&&!Ho(r)&&Object.prototype.hasOwnProperty.call(r,e)),We=(t,e,r)=>o=>{if(typeof o!="string")return o;let[n,i,s,a]=o.match(Nt);return{[t]:parseFloat(n),[e]:parseFloat(i),[r]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}};var Fs=t=>$(0,255,t),Fr={...et,transform:t=>Math.round(Fs(t))},rt={test:Lt("rgb","red"),parse:We("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:o=1})=>"rgba("+Fr.transform(t)+", "+Fr.transform(e)+", "+Fr.transform(r)+", "+dt(at.transform(o))+")"};function Os(t){let e="",r="",o="",n="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),o=t.substring(5,7),n=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),o=t.substring(3,4),n=t.substring(4,5),e+=e,r+=r,o+=o,n+=n),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:n?parseInt(n,16)/255:1}}var he={test:Lt("#"),parse:Os,transform:rt.transform};var ge=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Q=ge("deg"),ht=ge("%"),y=ge("px"),Zo=ge("vh"),Jo=ge("vw"),Or={...ht,parse:t=>ht.parse(t)/100,transform:t=>ht.transform(t*100)};var gt={test:Lt("hsl","hue"),parse:We("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:o=1})=>"hsla("+Math.round(t)+", "+ht.transform(dt(e))+", "+ht.transform(dt(r))+", "+dt(at.transform(o))+")"};var O={test:t=>rt.test(t)||he.test(t)||gt.test(t),parse:t=>rt.test(t)?rt.parse(t):gt.test(t)?gt.parse(t):he.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?rt.transform(t):gt.transform(t),getAnimatableNone:t=>{let e=O.parse(t);return e.alpha=0,O.transform(e)}};var Qo=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Rs(t){var e,r;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Nt))==null?void 0:e.length)||0)+(((r=t.match(Qo))==null?void 0:r.length)||0)>0}var en="number",rn="color",Bs="var",Is="var(",tn="${}",Ns=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xt(t){let e=t.toString(),r=[],o={color:[],number:[],var:[]},n=[],i=0,a=e.replace(Ns,l=>(O.test(l)?(o.color.push(i),n.push(rn),r.push(O.parse(l))):l.startsWith(Is)?(o.var.push(i),n.push(Bs),r.push(l)):(o.number.push(i),n.push(en),r.push(parseFloat(l))),++i,tn)).split(tn);return{values:r,split:a,indexes:o,types:n}}function Ls(t){return xt(t).values}function on({split:t,types:e}){let r=t.length;return o=>{let n="";for(let i=0;i<r;i++)if(n+=t[i],o[i]!==void 0){let s=e[i];s===en?n+=dt(o[i]):s===rn?n+=O.transform(o[i]):n+=o[i]}return n}}function Ks(t){return on(xt(t))}var Gs=t=>typeof t=="number"?0:O.test(t)?O.getAnimatableNone(t):t,$s=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:Gs(t);function Ws(t){let e=xt(t);return on(e)(e.values.map((o,n)=>$s(o,e.split[n])))}var N={test:Rs,parse:Ls,createTransformer:Ks,getAnimatableNone:Ws};function Rr(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function nn({hue:t,saturation:e,lightness:r,alpha:o}){t/=360,e/=100,r/=100;let n=0,i=0,s=0;if(!e)n=i=s=r;else{let a=r<.5?r*(1+e):r+e-r*e,l=2*r-a;n=Rr(l,a,t+1/3),i=Rr(l,a,t),s=Rr(l,a,t-1/3)}return{red:Math.round(n*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:o}}function Kt(t,e){return r=>r>0?e:t}var q=(t,e,r)=>t+(e-t)*r;var Br=(t,e,r)=>{let o=t*t,n=r*(e*e-o)+o;return n<0?0:Math.sqrt(n)},zs=[he,rt,gt],js=t=>zs.find(e=>e.test(t));function sn(t){let e=js(t);if(J(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!e)return!1;let r=e.parse(t);return e===gt&&(r=nn(r)),r}var Ir=(t,e)=>{let r=sn(t),o=sn(e);if(!r||!o)return Kt(t,e);let n={...r};return i=>(n.red=Br(r.red,o.red,i),n.green=Br(r.green,o.green,i),n.blue=Br(r.blue,o.blue,i),n.alpha=q(r.alpha,o.alpha,i),rt.transform(n))};var ze=new Set(["none","hidden"]);function an(t,e){return ze.has(t)?r=>r<=0?t:e:r=>r>=1?e:t}function _s(t,e){return r=>q(t,e,r)}function je(t){return typeof t=="number"?_s:typeof t=="string"?It(t)?Kt:O.test(t)?Ir:Us:Array.isArray(t)?ln:typeof t=="object"?O.test(t)?Ir:Xs:Kt}function ln(t,e){let r=[...t],o=r.length,n=t.map((i,s)=>je(i)(i,e[s]));return i=>{for(let s=0;s<o;s++)r[s]=n[s](i);return r}}function Xs(t,e){let r={...t,...e},o={};for(let n in r)t[n]!==void 0&&e[n]!==void 0&&(o[n]=je(t[n])(t[n],e[n]));return n=>{for(let i in o)r[i]=o[i](n);return r}}function qs(t,e){var n;let r=[],o={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){let s=e.types[i],a=t.indexes[s][o[s]],l=(n=t.values[a])!=null?n:0;r[i]=l,o[s]++}return r}var Us=(t,e)=>{let r=N.createTransformer(e),o=xt(t),n=xt(e);return o.indexes.var.length===n.indexes.var.length&&o.indexes.color.length===n.indexes.color.length&&o.indexes.number.length>=n.indexes.number.length?ze.has(t)&&!n.values.length||ze.has(e)&&!o.values.length?an(t,e):Tt(ln(qs(o,n),n.values),r):(J(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),Kt(t,e))};function _e(t,e,r){return typeof t=="number"&&typeof e=="number"&&typeof r=="number"?q(t,e,r):je(t)(t,e)}var cn=t=>{let e=({timestamp:r})=>t(r);return{start:(r=!0)=>G.update(e,r),stop:()=>ue(e),now:()=>Bt.isProcessing?Bt.timestamp:I.now()}};var Xe=(t,e,r=10)=>{let o="",n=Math.max(Math.round(e/r),2);for(let i=0;i<n;i++)o+=Math.round(t(i/(n-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`};function Gt(t){let e=0,r=50,o=t.next(e);for(;!o.done&&e<2e4;)e+=r,o=t.next(e);return e>=2e4?1/0:e}function xe(t,e=100,r){let o=r({...t,keyframes:[0,e]}),n=Math.min(Gt(o),2e4);return{type:"keyframes",ease:i=>o.next(n*i).value/e,duration:K(n)}}var R={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Kr(t,e){return t*Math.sqrt(1-e*e)}var Hs=12;function Ys(t,e,r){let o=r;for(let n=1;n<Hs;n++)o=o-t(o)/e(o);return o}var Lr=.001;function Zs({duration:t=R.duration,bounce:e=R.bounce,velocity:r=R.velocity,mass:o=R.mass}){let n,i;J(t<=B(R.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-e;s=$(R.minDamping,R.maxDamping,s),t=$(R.minDuration,R.maxDuration,K(t)),s<1?(n=c=>{let m=c*s,u=m*t,g=m-r,p=Kr(c,s),f=Math.exp(-u);return Lr-g/p*f},i=c=>{let u=c*s*t,g=u*r+r,p=Math.pow(s,2)*Math.pow(c,2)*t,f=Math.exp(-u),h=Kr(Math.pow(c,2),s);return(-n(c)+Lr>0?-1:1)*((g-p)*f)/h}):(n=c=>{let m=Math.exp(-c*t),u=(c-r)*t+1;return-Lr+m*u},i=c=>{let m=Math.exp(-c*t),u=(r-c)*(t*t);return m*u});let a=5/t,l=Ys(n,i,a);if(t=B(t),isNaN(l))return{stiffness:R.stiffness,damping:R.damping,duration:t};{let c=Math.pow(l,2)*o;return{stiffness:c,damping:s*2*Math.sqrt(o*c),duration:t}}}var Js=["duration","bounce"],Qs=["stiffness","damping","mass"];function mn(t,e){return e.some(r=>t[r]!==void 0)}function ta(t){let e={velocity:R.velocity,stiffness:R.stiffness,damping:R.damping,mass:R.mass,isResolvedFromDuration:!1,...t};if(!mn(t,Qs)&&mn(t,Js))if(e.velocity=0,t.visualDuration){let r=t.visualDuration,o=2*Math.PI/(r*1.2),n=o*o,i=2*$(.05,1,1-(t.bounce||0))*Math.sqrt(n);e={...e,mass:R.mass,stiffness:n,damping:i}}else{let r=Zs({...t,velocity:0});e={...e,...r,mass:R.mass},e.isResolvedFromDuration=!0}return e}function lt(t=R.visualDuration,e=R.bounce){let r=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t,{restSpeed:o,restDelta:n}=r,i=r.keyframes[0],s=r.keyframes[r.keyframes.length-1],a={done:!1,value:i},{stiffness:l,damping:c,mass:m,duration:u,velocity:g,isResolvedFromDuration:p}=ta({...r,velocity:-K(r.velocity||0)}),f=g||0,h=c/(2*Math.sqrt(l*m)),d=s-i,x=K(Math.sqrt(l/m)),b=Math.abs(d)<5;o||(o=b?R.restSpeed.granular:R.restSpeed.default),n||(n=b?R.restDelta.granular:R.restDelta.default);let T,V,v,A,E,w;if(h<1)v=Kr(x,h),A=(f+h*x*d)/v,T=S=>{let k=Math.exp(-h*x*S);return s-k*(A*Math.sin(v*S)+d*Math.cos(v*S))},E=h*x*A+d*v,w=h*x*d-A*v,V=S=>Math.exp(-h*x*S)*(E*Math.sin(v*S)+w*Math.cos(v*S));else if(h===1){T=k=>s-Math.exp(-x*k)*(d+(f+x*d)*k);let S=f+x*d;V=k=>Math.exp(-x*k)*(x*S*k-f)}else{let S=x*Math.sqrt(h*h-1);T=H=>{let nt=Math.exp(-h*x*H),it=Math.min(S*H,300);return s-nt*((f+h*x*d)*Math.sinh(it)+S*d*Math.cosh(it))/S};let k=(f+h*x*d)/S,U=h*x*k-d*S,j=h*x*d-k*S;V=H=>{let nt=Math.exp(-h*x*H),it=Math.min(S*H,300);return nt*(U*Math.sinh(it)+j*Math.cosh(it))}}let C={calculatedDuration:p&&u||null,velocity:S=>B(V(S)),next:S=>{if(!p&&h<1){let U=Math.exp(-h*x*S),j=Math.sin(v*S),H=Math.cos(v*S),nt=s-U*(A*j+d*H),it=B(U*(E*j+w*H));return a.done=Math.abs(it)<=o&&Math.abs(s-nt)<=n,a.value=a.done?s:nt,a}let k=T(S);if(p)a.done=S>=u;else{let U=B(V(S));a.done=Math.abs(U)<=o&&Math.abs(s-k)<=n}return a.value=a.done?s:k,a},toString:()=>{let S=Math.min(Gt(C),2e4),k=Xe(U=>C.next(S*U).value,S,30);return S+"ms "+k},toTransition:()=>{}};return C}lt.applyToOptions=t=>{let e=xe(t,100,lt);return t.ease=e.ease,t.duration=B(e.duration),t.type="keyframes",t};var ea=5;function qe(t,e,r){let o=Math.max(e-ea,0);return oe(r-t(o),e-o)}function ye({keyframes:t,velocity:e=0,power:r=.8,timeConstant:o=325,bounceDamping:n=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:m}){let u=t[0],g={done:!1,value:u},p=w=>a!==void 0&&w<a||l!==void 0&&w>l,f=w=>a===void 0?l:l===void 0||Math.abs(a-w)<Math.abs(l-w)?a:l,h=r*e,d=u+h,x=s===void 0?d:s(d);x!==d&&(h=x-u);let b=w=>-h*Math.exp(-w/o),T=w=>x+b(w),V=w=>{let C=b(w),S=T(w);g.done=Math.abs(C)<=c,g.value=g.done?x:S},v,A,E=w=>{p(g.value)&&(v=w,A=lt({keyframes:[g.value,f(g.value)],velocity:qe(T,w,g.value),damping:n,stiffness:i,restDelta:c,restSpeed:m}))};return E(0),{calculatedDuration:null,next:w=>{let C=!1;return!A&&v===void 0&&(C=!0,V(w),E(w)),v!==void 0&&w>=v?A.next(w-v):(!C&&V(w),g)}}}function ra(t,e,r){let o=[],n=r||W.mix||_e,i=t.length-1;for(let s=0;s<i;s++){let a=n(t[s],t[s+1]);if(e){let l=Array.isArray(e)?e[s]||X:e;a=Tt(l,a)}o.push(a)}return o}function fn(t,e,{clamp:r=!0,ease:o,mixer:n}={}){let i=t.length;if(z(i===e.length,"Both input and output ranges must be the same length","range-length"),i===1)return()=>e[0];if(i===2&&e[0]===e[1])return()=>e[1];let s=t[0]===t[1];t[0]>t[i-1]&&(t=[...t].reverse(),e=[...e].reverse());let a=ra(e,o,n),l=a.length,c=m=>{if(s&&m<t[0])return e[0];let u=0;if(l>1)for(;u<t.length-2&&!(m<t[u+1]);u++);let g=Vt(t[u],t[u+1],m);return a[u](g)};return r?m=>c($(t[0],t[i-1],m)):c}function be(t,e){let r=t[t.length-1];for(let o=1;o<=e;o++){let n=Vt(0,e,o);t.push(q(r,1,n))}}function Me(t){let e=[0];return be(e,t.length-1),e}function pn(t,e){return t.map(r=>r*e)}function oa(t,e){return t.map(()=>e||le).splice(0,t.length-1)}function At({duration:t=300,keyframes:e,times:r,ease:o="easeInOut"}){let n=ce(o)?o.map(Le):Le(o),i={done:!1,value:e[0]},s=pn(r&&r.length===e.length?r:Me(e),t),a=fn(s,e,{ease:Array.isArray(n)?n:oa(e,n)});return{calculatedDuration:t,next:l=>(i.value=a(l),i.done=l>=t,i)}}var na=t=>t!==null;function yt(t,{repeat:e,repeatType:r="loop"},o,n=1){let i=t.filter(na),a=n<0||e&&r!=="loop"&&e%2===1?0:i.length-1;return!a||o===void 0?i[a]:o}var ia={decay:ye,inertia:ye,tween:At,keyframes:At,spring:lt};function Ue(t){typeof t.type=="string"&&(t.type=ia[t.type])}var bt=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,r){return this.finished.then(e,r)}};var sa=t=>t/100,ct=class extends bt{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var o,n;let{motionValue:r}=this.options;r&&r.updatedAt!==I.now()&&this.tick(I.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(n=(o=this.options).onStop)==null||n.call(o))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Ue(e);let{type:r=At,repeat:o=0,repeatDelay:n=0,repeatType:i,velocity:s=0}=e,{keyframes:a}=e,l=r||At;l!==At&&typeof a[0]!="number"&&(this.mixKeyframes=Tt(sa,_e(a[0],a[1])),a=[0,100]);let c=l({...e,keyframes:a});i==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=Gt(c));let{calculatedDuration:m}=c;this.calculatedDuration=m,this.resolvedDuration=m+n,this.totalDuration=this.resolvedDuration*(o+1)-n,this.generator=c}updateTime(e){let r=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(e,r=!1){let{generator:o,totalDuration:n,mixKeyframes:i,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return o.next(0);let{delay:c=0,keyframes:m,repeat:u,repeatType:g,repeatDelay:p,type:f,onUpdate:h,finalKeyframe:d}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-n/this.speed,this.startTime)),r?this.currentTime=e:this.updateTime(e);let x=this.currentTime-c*(this.playbackSpeed>=0?1:-1),b=this.playbackSpeed>=0?x<0:x>n;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=n);let T=this.currentTime,V=o;if(u){let w=Math.min(this.currentTime,n)/a,C=Math.floor(w),S=w%1;!S&&w>=1&&(S=1),S===1&&C--,C=Math.min(C,u+1),!!(C%2)&&(g==="reverse"?(S=1-S,p&&(S-=p/a)):g==="mirror"&&(V=s)),T=$(0,1,S)*a}let v;b?(this.delayState.value=m[0],v=this.delayState):v=V.next(T),i&&!b&&(v.value=i(v.value));let{done:A}=v;!b&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=n:this.currentTime<=0);let E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return E&&f!==ye&&(v.value=yt(m,this.options,d,this.speed)),h&&h(v.value),E&&this.finish(),v}then(e,r){return this.finished.then(e,r)}get duration(){return K(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+K(e)}get time(){return K(this.currentTime)}set time(e){e=B(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let r=this.generator.next(e).value;return qe(o=>this.generator.next(o).value,e,r)}get speed(){return this.playbackSpeed}set speed(e){let r=this.playbackSpeed!==e;r&&this.driver&&this.updateTime(I.now()),this.playbackSpeed=e,r&&this.driver&&(this.time=K(this.currentTime))}play(){var n,i;if(this.isStopped)return;let{driver:e=cn,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),(i=(n=this.options).onPlay)==null||i.call(n);let o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r!=null?r:o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(I.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(e=this.options).onComplete)==null||r.call(e)}cancel(){var e,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(e=this.options).onCancel)==null||r.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),e.observe(this)}};function un(t){var e;for(let r=1;r<t.length;r++)(e=t[r])!=null||(t[r]=t[r-1])}var Ct=t=>t*180/Math.PI,Gr=t=>{let e=Ct(Math.atan2(t[1],t[0]));return $r(e)},aa={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Gr,rotateZ:Gr,skewX:t=>Ct(Math.atan(t[1])),skewY:t=>Ct(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},$r=t=>(t=t%360,t<0&&(t+=360),t),dn=Gr,hn=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),gn=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),la={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:hn,scaleY:gn,scale:t=>(hn(t)+gn(t))/2,rotateX:t=>$r(Ct(Math.atan2(t[6],t[5]))),rotateY:t=>$r(Ct(Math.atan2(-t[2],t[0]))),rotateZ:dn,rotate:dn,skewX:t=>Ct(Math.atan(t[4])),skewY:t=>Ct(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function He(t){return t.includes("scale")?1:0}function Ye(t,e){if(!t||t==="none")return He(e);let r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),o,n;if(r)o=la,n=r;else{let a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=aa,n=a}if(!n)return He(e);let i=o[e],s=n[1].split(",").map(ca);return typeof i=="function"?i(s):s[i]}var xn=(t,e)=>{let{transform:r="none"}=getComputedStyle(t);return Ye(r,e)};function ca(t){return parseFloat(t.trim())}var ot=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Y=new Set([...ot,"pathRotation"]);var Wr=t=>t===et||t===y,ma=new Set(["x","y","z"]),fa=ot.filter(t=>!ma.has(t));function yn(t){let e=[];return fa.forEach(r=>{let o=t.getValue(r);o!==void 0&&(e.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),e}var mt={width:({x:t},{paddingLeft:e="0",paddingRight:r="0",boxSizing:o})=>{let n=t.max-t.min;return o==="border-box"?n:n-parseFloat(e)-parseFloat(r)},height:({y:t},{paddingTop:e="0",paddingBottom:r="0",boxSizing:o})=>{let n=t.max-t.min;return o==="border-box"?n:n-parseFloat(e)-parseFloat(r)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ye(e,"x"),y:(t,{transform:e})=>Ye(e,"y")};mt.translateX=mt.x;mt.translateY=mt.y;var kt=new Set,zr=!1,jr=!1,_r=!1;function bn(){if(jr){let t=Array.from(kt).filter(o=>o.needsMeasurement),e=new Set(t.map(o=>o.element)),r=new Map;e.forEach(o=>{let n=yn(o);n.length&&(r.set(o,n),o.render())}),t.forEach(o=>o.measureInitialState()),e.forEach(o=>{o.render();let n=r.get(o);n&&n.forEach(([i,s])=>{var a;(a=o.getValue(i))==null||a.set(s)})}),t.forEach(o=>o.measureEndState()),t.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}jr=!1,zr=!1,kt.forEach(t=>t.complete(_r)),kt.clear()}function Mn(){kt.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(jr=!0)})}function vn(){_r=!0,Mn(),bn(),_r=!1}var Mt=class{constructor(e,r,o,n,i,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=r,this.name=o,this.motionValue=n,this.element=i,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(kt.add(this),zr||(zr=!0,G.read(Mn),G.resolveKeyframes(bn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:r,element:o,motionValue:n}=this;if(e[0]===null){let i=n==null?void 0:n.get(),s=e[e.length-1];if(i!==void 0)e[0]=i;else if(o&&r){let a=o.readValue(r,s);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=s),n&&i===void 0&&n.set(e[0])}un(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),kt.delete(this)}cancel(){this.state==="scheduled"&&(kt.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}};var Tn=t=>t.startsWith("--");function Ze(t,e,r){Tn(e)?t.style.setProperty(e,r):t.style[e]=r}var Vn={};function Je(t,e){let r=re(t);return()=>{var o;return(o=Vn[e])!=null?o:r()}}var Sn=Je(()=>window.ScrollTimeline!==void 0,"scrollTimeline");var Qe=Je(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing");var Et=([t,e,r,o])=>`cubic-bezier(${t}, ${e}, ${r}, ${o})`;var Xr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Et([0,.65,.55,1]),circOut:Et([.55,0,1,.45]),backIn:Et([.31,.01,.66,-.59]),backOut:Et([.33,1.53,.69,.99])};function qr(t,e){if(t)return typeof t=="function"?Qe()?Xe(t,e):"ease-out":fe(t)?Et(t):Array.isArray(t)?t.map(r=>qr(r,e)||Xr.easeOut):Xr[t]}function wn(t,e,r,{delay:o=0,duration:n=300,repeat:i=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){let m={[e]:r};l&&(m.offset=l);let u=qr(a,n);Array.isArray(u)&&(m.easing=u);let g={delay:o,duration:n,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"};return c&&(g.pseudoElement=c),t.animate(m,g)}function Dt(t){return typeof t=="function"&&"applyToOptions"in t}function An({type:t,...e}){var r,o;return Dt(t)&&Qe()?t.applyToOptions(e):((r=e.duration)!=null||(e.duration=300),(o=e.ease)!=null||(e.ease="easeOut"),e)}var $t=class extends bt{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:r,name:o,keyframes:n,pseudoElement:i,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!i,this.allowFlatten=s,this.options=e,z(typeof e.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");let c=An(e);this.animation=wn(r,o,n,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let m=yt(n,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(m),Ze(r,o,m),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,r;(r=(e=this.animation).finish)==null||r.call(e)}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var r,o,n;let e=(r=this.options)==null?void 0:r.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((n=(o=this.animation).commitStyles)==null||n.call(o))}get duration(){var r,o;let e=((o=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:o.call(r).duration)||0;return K(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+K(e)}get time(){return K(Number(this.animation.currentTime)||0)}set time(e){let r=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=B(e),r&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var e;return(e=this.manualStartTime)!=null?e:Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:r,rangeEnd:o,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Sn()?(this.animation.timeline=e,r&&(this.animation.rangeStart=r),o&&(this.animation.rangeEnd=o),X):n(this)}};var Cn={anticipate:ie,backInOut:ne,circInOut:ae};function pa(t){return t in Cn}function kn(t){typeof t.ease=="string"&&pa(t.ease)&&(t.ease=Cn[t.ease])}var Ur=10,tr=class extends $t{constructor(e){kn(e),Ue(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:r,onUpdate:o,onComplete:n,element:i,...s}=this.options;if(!r)return;if(e!==void 0){r.set(e);return}let a=new ct({...s,autoplay:!1}),l=Math.max(Ur,I.now()-this.startTime),c=$(0,Ur,l-Ur),m=a.sample(l).value,{name:u}=this.options;i&&u&&Ze(i,u,m),r.setWithVelocity(a.sample(Math.max(0,l-c)).value,m,c),a.stop()}};var Hr=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(N.test(t)||t==="0")&&!t.startsWith("url("));function ua(t){let e=t[0];if(t.length===1)return!0;for(let r=0;r<t.length;r++)if(t[r]!==e)return!0}function En(t,e,r,o){let n=t[0];if(n===null)return!1;if(e==="display"||e==="visibility")return!0;let i=t[t.length-1],s=Hr(n,e),a=Hr(i,e);return J(s===a,`You are trying to animate ${e} from "${n}" to "${i}". "${s?i:n}" is not an animatable value.`,"value-not-animatable"),!s||!a?!1:ua(t)||(r==="spring"||Dt(r))&&o}function ve(t){t.duration=0,t.type="keyframes"}var er=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);var da=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Dn(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&da.test(t[e]))return!0;return!1}var ha=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ga=re(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Pn(t){var u;let{motionValue:e,name:r,repeatDelay:o,repeatType:n,damping:i,type:s,keyframes:a}=t,l=(u=e==null?void 0:e.owner)==null?void 0:u.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;let{onUpdate:c,transformTemplate:m}=e.owner.getProps();return ga()&&r&&(er.has(r)||ha.has(r)&&Dn(a))&&(r!=="transform"||!m)&&!c&&!o&&n!=="mirror"&&i!==0&&s!=="inertia"}var xa=40,rr=class extends bt{constructor({autoplay:e=!0,delay:r=0,type:o="keyframes",repeat:n=0,repeatDelay:i=0,repeatType:s="loop",keyframes:a,name:l,motionValue:c,element:m,...u}){var f;super(),this.stop=()=>{var h,d;this._animation&&(this._animation.stop(),(h=this.stopTimeline)==null||h.call(this)),(d=this.keyframeResolver)==null||d.cancel()},this.createdAt=I.now();let g={autoplay:e,delay:r,type:o,repeat:n,repeatDelay:i,repeatType:s,name:l,motionValue:c,element:m,...u},p=(m==null?void 0:m.KeyframeResolver)||Mt;this.keyframeResolver=new p(a,(h,d,x)=>this.onKeyframesResolved(h,d,g,!x),l,c,m),(f=this.keyframeResolver)==null||f.scheduleResolve()}onKeyframesResolved(e,r,o,n){var x,b;this.keyframeResolver=void 0;let{name:i,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:m}=o;this.resolvedAt=I.now();let u=!0;En(e,i,s,a)||(u=!1,(W.instantAnimations||!l)&&(m==null||m(yt(e,o,r))),e[0]=e[e.length-1],ve(o),o.repeat=0);let p={startTime:n?this.resolvedAt?this.resolvedAt-this.createdAt>xa?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:e},f=u&&!c&&Pn(p),h=(b=(x=p.motionValue)==null?void 0:x.owner)==null?void 0:b.current,d;if(f)try{d=new tr({...p,element:h})}catch(T){d=new ct(p)}else d=new ct(p);d.finished.then(()=>{this.notifyFinished()}).catch(X),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(e,r){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),vn()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}};var or=class{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,r){for(let o=0;o<this.animations.length;o++)this.animations[o][e]=r}attachTimeline(e){let r=this.animations.map(o=>o.attachTimeline(e));return()=>{r.forEach((o,n)=>{o&&o(),this.animations[n].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Fn(this.animations,"duration")}get iterationDuration(){return Fn(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(r=>r[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}};function Fn(t,e){let r=0;for(let o=0;o<t.length;o++){let n=t[o][e];n!==null&&n>r&&(r=n)}return r}var Te=class extends or{then(e,r){return this.finished.finally(e).then(()=>{})}};var On=30,ya=t=>!isNaN(parseFloat(t)),Yr={current:void 0},nr=class{constructor(e,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var i;let n=I.now();if(this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((i=this.events.change)==null||i.notify(this.current),this.dependents))for(let s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){this.current=e,this.updatedAt=I.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ya(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new St);let o=this.events[e].add(r);return e==="change"?()=>{o(),G.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-o}jump(e,r=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Yr.current&&Yr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=I.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>On)return 0;let r=Math.min(this.updatedAt-this.prevUpdatedAt,On);return oe(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,r;(e=this.dependents)==null||e.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Z(t,e){return new nr(t,e)}function ir(t,e){if(t!=null&&t.inherit&&e){let{inherit:r,...o}=t;return{...e,...o}}return t}function sr(t,e){var o,n;let r=(n=(o=t==null?void 0:t[e])!=null?o:t==null?void 0:t.default)!=null?n:t;return r!==t?ir(r,t):r}var ba={type:"spring",stiffness:500,damping:25,restSpeed:10},Ma=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),va={type:"keyframes",duration:.8},Ta={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Rn=(t,{keyframes:e})=>e.length>2?va:Y.has(t)?t.startsWith("scale")?Ma(e[1]):ba:Ta;var Va=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Bn(t){for(let e in t)if(!Va.has(e))return!0;return!1}var ar=(t,e,r,o={},n,i)=>s=>{let a=sr(o,t)||{},l=a.delay||o.delay||0,{elapsed:c=0}=o;c=c-B(l);let m={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:g=>{e.set(g),a.onUpdate&&a.onUpdate(g)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:i?void 0:n};Bn(a)||Object.assign(m,Rn(t,m)),m.duration&&(m.duration=B(m.duration)),m.repeatDelay&&(m.repeatDelay=B(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let u=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(ve(m),m.delay===0&&(u=!0)),(W.instantAnimations||W.skipAnimations||n!=null&&n.shouldSkipAnimations||a.skipAnimations)&&(u=!0,ve(m),m.delay=0),m.allowFlatten=!a.type&&!a.ease,u&&!i&&e.get()!==void 0){let g=yt(m.keyframes,a);if(g!==void 0){G.update(()=>{m.onUpdate(g),m.onComplete()});return}}return a.isSync?new ct(m):new rr(m)};var Sa=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wa(t){let e=Sa.exec(t);if(!e)return[,];let[,r,o,n]=e;return[`--${r!=null?r:o}`,n]}var Aa=4;function Zr(t,e,r=1){z(r<=Aa,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[o,n]=wa(t);if(!o)return;let i=window.getComputedStyle(e).getPropertyValue(o);if(i){let s=i.trim();return te(s)?parseFloat(s):s}return It(n)?Zr(n,e,r+1):n}function In(t){let e=[{},{}];return t==null||t.values.forEach((r,o)=>{e[0][o]=r.get(),e[1][o]=r.getVelocity()}),e}function lr(t,e,r,o){if(typeof e=="function"){let[n,i]=In(o);e=e(r!==void 0?r:t.custom,n,i)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){let[n,i]=In(o);e=e(r!==void 0?r:t.custom,n,i)}return e}function Nn(t,e,r){let o=t.getProps();return lr(o,e,r!==void 0?r:o.custom,t)}var cr=new Set(["width","height","top","left","right","bottom",...ot]);var Ln=t=>Array.isArray(t);function Ca(t,e,r){t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,Z(r))}function ka(t){return Ln(t)?t[t.length-1]||0:t}function Kn(t,e){let r=Nn(t,e),{transitionEnd:o={},transition:n={},...i}=r||{};i={...i,...o};for(let s in i){let a=ka(i[s]);Ca(t,s,a)}}var F=t=>!!(t&&t.getVelocity);function Gn(t){return!!(F(t)&&t.add)}function $n(t,e){let r=t.getValue("willChange");if(Gn(r))return r.add(e);if(!r&&W.WillChange){let o=new W.WillChange("auto");t.addValue("willChange",o),o.add(e)}}function Wt(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Ea="framerAppearId",Wn="data-"+Wt(Ea);function zn(t){return t.props[Wn]}function Da({protectedKeys:t,needsAnimating:e},r){let o=t.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,o}function Jr(t,e,{delay:r=0,transitionOverride:o,type:n}={}){var f;let{transition:i,transitionEnd:s,...a}=e,l=t.getDefaultTransition();i=i?ir(i,l):l;let c=i==null?void 0:i.reduceMotion,m=i==null?void 0:i.skipAnimations;o&&(i=o);let u=[],g=n&&t.animationState&&t.animationState.getState()[n],p=i==null?void 0:i.path;p&&p.animateVisualElement(t,a,i,r,u);for(let h in a){let d=t.getValue(h,(f=t.latestValues[h])!=null?f:null),x=a[h];if(x===void 0||g&&Da(g,h))continue;let b={delay:r,...sr(i||{},h)};m&&(b.skipAnimations=!0);let T=d.get();if(T!==void 0&&!d.isAnimating()&&!Array.isArray(x)&&x===T&&!b.velocity){G.update(()=>d.set(x));continue}let V=!1;if(window.MotionHandoffAnimation){let E=zn(t);if(E){let w=window.MotionHandoffAnimation(E,h,G);w!==null&&(b.startTime=w,V=!0)}}$n(t,h);let v=c!=null?c:t.shouldReduceMotion;d.start(ar(h,d,x,v&&cr.has(h)?{type:!1}:b,t,V));let A=d.animation;A&&u.push(A)}if(s){let h=()=>G.update(()=>{s&&Kn(t,s)});u.length?Promise.all(u).then(h):h()}return u}var jn={test:t=>t==="auto",parse:t=>t};var mr=t=>e=>e.test(t);var Qr=[et,y,ht,Q,Jo,Zo,jn],to=t=>Qr.find(mr(t));function _n(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ee(t):!0}var Pa=new Set(["brightness","contrast","saturate","opacity"]);function Fa(t){let[e,r]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;let[o]=r.match(Nt)||[];if(!o)return t;let n=r.replace(o,""),i=Pa.has(e)?1:0;return o!==r&&(i*=100),e+"("+i+n+")"}var Oa=/\b([a-z-]*)\(.*?\)/gu,Ve={...N,getAnimatableNone:t=>{let e=t.match(Oa);return e?e.map(Fa).join(" "):t}};var Se={...N,getAnimatableNone:t=>{let e=N.parse(t);return N.createTransformer(t)(e.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}};var eo={...et,transform:Math.round};var Xn={rotate:Q,pathRotation:Q,rotateX:Q,rotateY:Q,rotateZ:Q,scale:de,scaleX:de,scaleY:de,scaleZ:de,skew:Q,skewX:Q,skewY:Q,distance:y,translateX:y,translateY:y,translateZ:y,x:y,y,z:y,perspective:y,transformPerspective:y,opacity:at,originX:Or,originY:Or,originZ:y};var Pt={borderWidth:y,borderTopWidth:y,borderRightWidth:y,borderBottomWidth:y,borderLeftWidth:y,borderRadius:y,borderTopLeftRadius:y,borderTopRightRadius:y,borderBottomRightRadius:y,borderBottomLeftRadius:y,width:y,maxWidth:y,height:y,maxHeight:y,top:y,right:y,bottom:y,left:y,inset:y,insetBlock:y,insetBlockStart:y,insetBlockEnd:y,insetInline:y,insetInlineStart:y,insetInlineEnd:y,padding:y,paddingTop:y,paddingRight:y,paddingBottom:y,paddingLeft:y,paddingBlock:y,paddingBlockStart:y,paddingBlockEnd:y,paddingInline:y,paddingInlineStart:y,paddingInlineEnd:y,margin:y,marginTop:y,marginRight:y,marginBottom:y,marginLeft:y,marginBlock:y,marginBlockStart:y,marginBlockEnd:y,marginInline:y,marginInlineStart:y,marginInlineEnd:y,fontSize:y,backgroundPositionX:y,backgroundPositionY:y,...Xn,zIndex:eo,fillOpacity:at,strokeOpacity:at,numOctaves:eo};var Ra={...Pt,color:O,backgroundColor:O,outlineColor:O,fill:O,stroke:O,borderColor:O,borderTopColor:O,borderRightColor:O,borderBottomColor:O,borderLeftColor:O,filter:Ve,WebkitFilter:Ve,mask:Se,WebkitMask:Se},fr=t=>Ra[t];var Ba=new Set([Ve,Se]);function pr(t,e){let r=fr(t);return Ba.has(r)||(r=N),r.getAnimatableNone?r.getAnimatableNone(e):void 0}var Ia=new Set(["auto","none","0"]);function qn(t,e,r){let o=0,n;for(;o<t.length&&!n;){let i=t[o];typeof i=="string"&&!Ia.has(i)&&xt(i).values.length&&(n=t[o]),o++}if(n&&r)for(let i of e)t[i]=pr(r,n)}var ur=class extends Mt{constructor(e,r,o,n,i){super(e,r,o,n,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let u=e[m];if(typeof u=="string"&&(u=u.trim(),It(u))){let g=Zr(u,r.current);g!==void 0&&(e[m]=g),m===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!cr.has(o)||e.length!==2)return;let[n,i]=e,s=to(n),a=to(i),l=Pr(n),c=Pr(i);if(l!==c&&mt[o]){this.needsMeasurement=!0;return}if(s!==a)if(Wr(s)&&Wr(a))for(let m=0;m<e.length;m++){let u=e[m];typeof u=="string"&&(e[m]=parseFloat(u))}else mt[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:r}=this,o=[];for(let n=0;n<e.length;n++)(e[n]===null||_n(e[n]))&&o.push(n);o.length&&qn(e,o,r)}measureInitialState(){let{element:e,unresolvedKeyframes:r,name:o}=this;if(!e||!e.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=mt[o](e.measureViewportBox(),window.getComputedStyle(e.current)),r[0]=this.measuredOrigin;let n=r[r.length-1];n!==void 0&&e.getValue(o,n).jump(n,!1)}measureEndState(){var a;let{element:e,name:r,unresolvedKeyframes:o}=this;if(!e||!e.current)return;let n=e.getValue(r);n&&n.jump(this.measuredOrigin,!1);let i=o.length-1,s=o[i];o[i]=mt[r](e.measureViewportBox(),window.getComputedStyle(e.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}};var Un=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function ro(t,e,r){var o;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let n=document;e&&(n=e.current);let i=(o=r==null?void 0:r[t])!=null?o:n.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(n=>n!=null)}var we=(t,e)=>e&&typeof t=="number"?e.transform(t):t;var{schedule:Hn,cancel:yh}=Ke(queueMicrotask,!1);function Ae(t){return Cr(t)&&"ownerSVGElement"in t}function oo(t){return Ae(t)&&t.tagName==="svg"}var Na=[...Qr,O,N],Yn=t=>Na.find(mr(t));var Zn=()=>({min:0,max:0}),zt=()=>({x:Zn(),y:Zn()});var ft=new WeakMap;function Jn(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Qn(t){return typeof t=="string"||Array.isArray(t)}var La=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ti=["initial",...La];function no(t){return Jn(t.animate)||ti.some(e=>Qn(t[e]))}function ei(t){return!!(no(t)||t.variants)}function ri(t,e,r){for(let o in e){let n=e[o],i=r[o];if(F(n))t.addValue(o,n);else if(F(i))t.addValue(o,Z(n,{owner:t}));else if(i!==n)if(t.hasValue(o)){let s=t.getValue(o);s.liveStyle===!0?s.jump(n):s.hasAnimated||s.set(n)}else{let s=t.getStaticValue(o);t.addValue(o,Z(s!==void 0?s:n,{owner:t}))}}for(let o in r)e[o]===void 0&&t.removeValue(o);return e}var Ce={current:null},dr={current:!1};var Ka=typeof window!="undefined";function oi(){if(dr.current=!0,!!Ka)if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ce.current=t.matches;t.addEventListener("change",e),e()}else Ce.current=!1}var ni=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],ii={};var jt=class{scrapeMotionValuesFromProps(e,r,o){return{}}constructor({parent:e,props:r,presenceContext:o,reducedMotionConfig:n,skipAnimations:i,blockInitialAnimation:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Mt,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let p=I.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,G.render(this.render,!1,!0))};let{latestValues:c,renderState:m}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=r.initial?{...c}:{},this.renderState=m,this.parent=e,this.props=r,this.presenceContext=o,this.depth=e?e.depth+1:0,this.reducedMotionConfig=n,this.skipAnimationsConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=no(r),this.isVariantNode=ei(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...g}=this.scrapeMotionValuesFromProps(r,{},this);for(let p in g){let f=g[p];c[p]!==void 0&&F(f)&&f.set(c[p])}}mount(e){var r,o,n;if(this.hasBeenMounted)for(let i in this.initialValues)(r=this.values.get(i))==null||r.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,ft.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(dr.current||oi(),this.shouldReduceMotion=Ce.current),this.shouldSkipAnimations=(o=this.skipAnimationsConfig)!=null?o:!1,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),ue(this.notifyUpdate),ue(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(let r in this.events)this.events[r].clear();for(let r in this.features){let o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(e){var r;this.children.add(e),(r=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,r){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),r.accelerate&&er.has(e)&&this.current instanceof HTMLElement){let{factory:s,keyframes:a,times:l,ease:c,duration:m}=r.accelerate,u=new $t({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:B(m)}),g=s(u);this.valueSubscriptions.set(e,()=>{g(),u.cancel()});return}let o=Y.has(e);o&&this.onBindTransform&&this.onBindTransform();let n=r.on("change",s=>{this.latestValues[e]=s,this.props.onUpdate&&G.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window!="undefined"&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,r)),this.valueSubscriptions.set(e,()=>{n(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ii){let r=ii[e];if(!r)continue;let{isEnabled:o,Feature:n}=r;if(!this.features[e]&&n&&o(this.props)&&(this.features[e]=new n(this)),this.features[e]){let i=this.features[e];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):zt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<ni.length;o++){let n=ni[o];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let i="on"+n,s=e[i];s&&(this.propEventSubscriptions[n]=this.on(n,s))}this.prevMotionValues=ri(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){let o=this.values.get(e);r!==o&&(o&&this.removeValue(e),this.bindToMotionValue(e,r),this.values.set(e,r),this.latestValues[e]=r.get())}removeValue(e){this.values.delete(e);let r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let o=this.values.get(e);return o===void 0&&r!==void 0&&(o=Z(r===null?void 0:r,{owner:this}),this.addValue(e,o)),o}readValue(e,r){var n;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!=null?n:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(te(o)||ee(o))?o=parseFloat(o):!Yn(o)&&N.test(r)&&(o=pr(e,r)),this.setBaseTarget(e,F(o)?o.get():o)),F(o)?o.get():o}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var i;let{initial:r}=this.props,o;if(typeof r=="string"||typeof r=="object"){let s=lr(this.props,r,(i=this.presenceContext)==null?void 0:i.custom);s&&(o=s[e])}if(r&&o!==void 0)return o;let n=this.getBaseTargetFromProps(this.props,e);return n!==void 0&&!F(n)?n:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new St),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}scheduleRenderMicrotask(){Hn.render(this.render)}};var _t=class extends jt{constructor(){super(...arguments),this.KeyframeResolver=ur}sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){let o=e.style;return o?o[r]:void 0}removeValueFromRenderState(e,{vars:r,style:o}){delete r[e],delete o[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;F(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}};function si({top:t,left:e,right:r,bottom:o}){return{x:{min:e,max:r},y:{min:t,max:o}}}function ai(t,e){if(!e)return t;let r=e({x:t.left,y:t.top}),o=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function li(t,e){return si(ai(t.getBoundingClientRect(),e))}var Ga={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$a=ot.length;function ci(t,e,r){let o="",n=!0;for(let s=0;s<$a;s++){let a=ot[s],l=t[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{let m=parseFloat(l);c=a.startsWith("scale")?m===1:m===0}if(!c||r){let m=we(l,Pt[a]);if(!c){n=!1;let u=Ga[a]||a;o+=`${u}(${m}) `}r&&(e[a]=m)}}let i=t.pathRotation;return i&&(n=!1,o+=`rotate(${we(i,Pt.pathRotation)}) `),o=o.trim(),r?o=r(e,n?"":o):n&&(o="none"),o}function hr(t,e,r){let{style:o,vars:n,transformOrigin:i}=t,s=!1,a=!1;for(let l in e){let c=e[l];if(Y.has(l)){s=!0;continue}else if($e(l)){n[l]=c;continue}else{let m=we(c,Pt[l]);l.startsWith("origin")?(a=!0,i[l]=m):o[l]=m}}if(e.transform||(s||r?o.transform=ci(e,t.transform,r):o.transform&&(o.transform="none")),a){let{originX:l="50%",originY:c="50%",originZ:m=0}=i;o.transformOrigin=`${l} ${c} ${m}`}}function gr(t,{style:e,vars:r},o,n){let i=t.style,s;for(s in e)i[s]=e[s];n==null||n.applyProjectionStyles(i,o);for(s in r)i.setProperty(s,r[s])}function mi(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}var Xt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(y.test(t))t=parseFloat(t);else return t;let r=mi(t,e.target.x),o=mi(t,e.target.y);return`${r}% ${o}%`}};var fi={correct:(t,{treeScale:e,projectionDelta:r})=>{let o=t,n=N.parse(t);if(n.length>5)return o;let i=N.createTransformer(t),s=typeof n[0]!="number"?1:0,a=r.x.scale*e.x,l=r.y.scale*e.y;n[0+s]/=a,n[1+s]/=l;let c=q(a,l,.5);return typeof n[2+s]=="number"&&(n[2+s]/=c),typeof n[3+s]=="number"&&(n[3+s]/=c),i(n)}};var pi={borderRadius:{...Xt,applyTo:[...Un]},borderTopLeftRadius:Xt,borderTopRightRadius:Xt,borderBottomLeftRadius:Xt,borderBottomRightRadius:Xt,boxShadow:fi};function ui(t,{layout:e,layoutId:r}){return Y.has(t)||t.startsWith("origin")||(e||r!==void 0)&&(!!pi[t]||t==="opacity")}function xr(t,e,r){var s;let o=t.style,n=e==null?void 0:e.style,i={};if(!o)return i;for(let a in o)(F(o[a])||n&&F(n[a])||ui(a,t)||((s=r==null?void 0:r.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(i[a]=o[a]);return i}function Wa(t){return window.getComputedStyle(t)}var ke=class extends _t{constructor(){super(...arguments),this.type="html",this.renderInstance=gr}mount(e){z(!!e.style,"motion.create() components must forward their ref to a HTML or SVG element","custom-component-ref"),super.mount(e)}readValueFromInstance(e,r){var o;if(Y.has(r))return(o=this.projection)!=null&&o.isProjecting?He(r):xn(e,r);{let n=Wa(e),i=($e(r)?n.getPropertyValue(r):n[r])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:r}){return li(e,r)}build(e,r,o){hr(e,r,o.transformTemplate)}scrapeMotionValuesFromProps(e,r,o){return xr(e,r,o)}};function za(t,e){return t in e}var Ee=class extends jt{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,r){if(za(r,e)){let o=e[r];if(typeof o=="string"||typeof o=="number")return o}}getBaseTargetFromProps(){}removeValueFromRenderState(e,r){delete r.output[e]}measureInstanceViewportBox(){return zt()}build(e,r){Object.assign(e.output,r)}renderInstance(e,{output:r}){Object.assign(e,r)}sortInstanceNodePosition(){return 0}};var ja={offset:"stroke-dashoffset",array:"stroke-dasharray"},_a={offset:"strokeDashoffset",array:"strokeDasharray"};function di(t,e,r=1,o=0,n=!0){t.pathLength=1;let i=n?ja:_a;t[i.offset]=`${-o}`,t[i.array]=`${e} ${r}`}var Xa=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function hi(t,{attrX:e,attrY:r,attrScale:o,pathLength:n,pathSpacing:i=1,pathOffset:s=0,...a},l,c,m){var p,f;if(hr(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:u,style:g}=t;u.transform&&(g.transform=u.transform,delete u.transform),(g.transform||u.transformOrigin)&&(g.transformOrigin=(p=u.transformOrigin)!=null?p:"50% 50%",delete u.transformOrigin),g.transform&&(g.transformBox=(f=m==null?void 0:m.transformBox)!=null?f:"fill-box",delete u.transformBox);for(let h of Xa)u[h]!==void 0&&(g[h]=u[h],delete u[h]);e!==void 0&&(u.x=e),r!==void 0&&(u.y=r),o!==void 0&&(u.scale=o),n!==void 0&&di(u,n,i,s,!1)}var yr=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);var gi=t=>typeof t=="string"&&t.toLowerCase()==="svg";function xi(t,e,r,o){gr(t,e,void 0,o);for(let n in e.attrs)t.setAttribute(yr.has(n)?n:Wt(n),e.attrs[n])}function yi(t,e,r){let o=xr(t,e,r);for(let n in t)if(F(t[n])||F(e[n])){let i=ot.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;o[i]=t[n]}return o}var De=class extends _t{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=zt}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(Y.has(r)){let o=fr(r);return o&&o.default||0}return r=yr.has(r)?r:Wt(r),e.getAttribute(r)}scrapeMotionValuesFromProps(e,r,o){return yi(e,r,o)}build(e,r,o){hi(e,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(e,r,o,n){xi(e,r,o,n)}mount(e){this.isSVGTag=gi(e.tagName),super.mount(e)}};function io(t,e,r){let o=F(t)?t:Z(t);return o.start(ar("",o,e,r)),o.animation}function Pe(t){return typeof t=="object"&&!Array.isArray(t)}function br(t,e,r,o){return t==null?[]:typeof t=="string"&&Pe(e)?ro(t,r,o):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(n=>n!=null):[t]}function bi(t,e,r){return t*(e+1)+r*e}function so(t,e,r,o){var n;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?r:e.startsWith("<")?Math.max(0,r+parseFloat(e.slice(1))):(n=o.get(e))!=null?n:t}function qa(t,e,r){for(let o=0;o<t.length;o++){let n=t[o];n.at>e&&n.at<r&&(vt(t,n),o--)}}function Mi(t,e,r,o,n,i){qa(t,n,i);for(let s=0;s<e.length;s++)t.push({value:e[s],at:q(n,i,o[s]),easing:me(r,s)})}function vi(t,e,r=0){let o=e+1+e*r;for(let n=0;n<t.length;n++)t[n]=t[n]/o}function Ti(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}var Ua="easeInOut",ao=20;function wi(t,{defaultTransition:e={},...r}={},o,n){let i=e.duration||.3,s=new Map,a=new Map,l={},c=new Map,m=0,u=0,g=0;for(let p=0;p<t.length;p++){let f=t[p];if(typeof f=="string"){c.set(f,u);continue}else if(!Array.isArray(f)){c.set(f.name,so(u,f.at,m,c));continue}let[h,d,x={}]=f;x.at!==void 0&&(u=so(u,x.at,m,c));let b=0,T=(V,v,A,E=0,w=0)=>{let C=Ha(V),{delay:S=0,times:k=Me(C),type:U=e.type||"keyframes",repeat:j,repeatType:H,repeatDelay:nt=0,...it}=v,{ease:st=e.ease||"easeOut",duration:_}=v,xo=typeof S=="function"?S(E,w):S,yo=C.length,bo=Dt(U)?U:n==null?void 0:n[U||"keyframes"];if(yo<=2&&bo){let Ft=100;if(yo===2&&Ja(C)){let qt=C[1]-C[0];Ft=Math.abs(qt)}let Ot={...e,...it};_!==void 0&&(Ot.duration=B(_));let Fe=xe(Ot,Ft,bo);st=Fe.ease,_=Fe.duration}_!=null||(_=i);let Mo=u+xo;k.length===1&&k[0]===0&&(k[1]=1);let vo=k.length-C.length;if(vo>0&&be(k,vo),C.length===1&&C.unshift(null),j&&J(j<ao,`Sequence segments can't repeat ${j} times \u2014 ignoring repeat option. Use a value below ${ao} or apply repeat at the sequence level instead.`),j&&j<ao){let Ft=_>0?nt/_:0;_=bi(_,j,nt);let Ot=[...C],Fe=[...k];st=Array.isArray(st)?[...st]:[st];let qt=[...st],Vo=H==="reverse"||H==="mirror",So=Ot,wo=qt;Vo&&(So=[...Ot].reverse(),H==="reverse"&&(wo=[...qt].reverse().map(pt=>typeof pt=="function"?wt(pt):pt)));for(let pt=0;pt<j;pt++){let Ao=Vo&&pt%2===0,Co=Ao?So:Ot,fs=Ao?wo:qt,ko=(pt+1)*(1+Ft);Ft>0&&(C.push(C[C.length-1]),k.push(ko),st.push("linear")),C.push(...Co);for(let Ut=0;Ut<Co.length;Ut++)k.push(Fe[Ut]+ko),st.push(Ut===0?"linear":me(fs,Ut-1))}vi(k,j,Ft)}let To=Mo+_;Mi(A,C,st,k,Mo,To),b=Math.max(xo+_,b),g=Math.max(To,g)};if(F(h)){let V=Vi(h,a);T(d,x,Si("default",V))}else{let V=br(h,d,o,l),v=V.length;for(let A=0;A<v;A++){d=d,x=x;let E=V[A],w=Vi(E,a);for(let C in d)T(d[C],Ya(x,C),Si(C,w),A,v)}}m=u,u+=b}return a.forEach((p,f)=>{for(let h in p){let d=p[h];d.sort(Ti);let x=[],b=[],T=[];for(let E=0;E<d.length;E++){let{at:w,value:C,easing:S}=d[E];x.push(C),b.push(Vt(0,g,w)),T.push(S||"easeOut")}b[0]!==0&&(b.unshift(0),x.unshift(x[0]),T.unshift(Ua)),b[b.length-1]!==1&&(b.push(1),x.push(null)),s.has(f)||s.set(f,{keyframes:{},transition:{}});let V=s.get(f);V.keyframes[h]=x;let{type:v,...A}=e;V.transition[h]={...A,duration:g,ease:T,times:b,...r}}}),s}function Vi(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function Si(t,e){return e[t]||(e[t]=[]),e[t]}function Ha(t){return Array.isArray(t)?t:[t]}function Ya(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}var Za=t=>typeof t=="number",Ja=t=>t.every(Za);function Ai(t){let e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Ae(t)&&!oo(t)?new De(e):new ke(e);r.mount(t),ft.set(t,r)}function Ci(t){let e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new Ee(e);r.mount(t),ft.set(t,r)}function Qa(t,e){return F(t)||typeof t=="number"||typeof t=="string"&&!Pe(e)}function Mr(t,e,r,o){let n=[];if(Qa(t,e))n.push(io(t,Pe(e)&&e.default||e,r&&(r.default||r)));else{if(t==null)return n;let i=br(t,e,o),s=i.length;z(!!s,"No valid elements provided.","no-valid-elements");for(let a=0;a<s;a++){let l=i[a],c=l instanceof Element?Ai:Ci;ft.has(l)||c(l);let m=ft.get(l),u={...r};"delay"in u&&typeof u.delay=="function"&&(u.delay=u.delay(a,s)),n.push(...Jr(m,{...e,transition:u},{}))}}return n}function ki(t,e,r){let o=[],n=t.map(s=>{if(Array.isArray(s)&&typeof s[0]=="function"){let a=s[0],l=Z(0);return l.on("change",a),s.length===1?[l,[0,1]]:s.length===2?[l,[0,1],s[1]]:[l,s[1],s[2]]}return s});return wi(n,e,r,{spring:lt}).forEach(({keyframes:s,transition:a},l)=>{o.push(...Mr(l,s,a))}),o}function tl(t){return Array.isArray(t)&&t.some(Array.isArray)}function Ei(t={}){let{scope:e,reduceMotion:r,skipAnimations:o}=t;function n(i,s,a){let l=[],c,m={};if(r!==void 0&&(m.reduceMotion=r),o!==void 0&&(m.skipAnimations=o),tl(i)){let{onComplete:g,...p}=s||{};typeof g=="function"&&(c=g),l=ki(i,{...m,...p},e)}else{let{onComplete:g,...p}=a||{};typeof g=="function"&&(c=g),l=Mr(i,s,{...m,...p},e)}let u=new Te(l);return c&&u.finished.then(c),e&&(e.animations.push(u),u.finished.then(()=>{vt(e.animations,u)})),u}return n}var lo=Ei();function el(t,e){let r=[],o=(n,i)=>{i.motion&&r.push([n,i]),i.children.forEach((s,a)=>{let l=n.children[a];if(!l||l.tagName.toLowerCase()!==s.tag.toLowerCase())throw new Error(`pulsoicon: rendered <${l==null?void 0:l.tagName}> where <${s.tag}> was expected`);o(l,s)})};return o(t,e),r}var rl=()=>typeof window!="undefined"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Di(t,e){let{transition:r={},...o}=e,{opacity:n,...i}=r,s=(a,l)=>lo(t,{...a,...a.pathLength!==void 0?{pathSpacing:1}:{}},{...l,...l.times?{times:[...l.times]}:{}});if(n&&o.opacity!==void 0){let{opacity:a,...l}=o;return[s(l,i),s({opacity:a},n)]}return[s(o,i)]}function Pi(t,e,r={}){let{animated:o=!0,autoAnimated:n=!0}=r,i=el(t,e).map(([g,p])=>({element:g,motion:p.motion})),s=[],a=async g=>{s.forEach(f=>f.stop());let p=i.flatMap(({element:f,motion:h})=>Di(f,h[g]));s=p,await Promise.all(p.map(f=>f.finished))},l=async()=>{o&&!rl()&&await a("animate")},c=async()=>{o&&await a("normal")},m=()=>{},u=()=>{var h;if(m(),!o||!n)return;let g=(h=t.closest(Go))!=null?h:t,p=()=>void l(),f=()=>void c();g.addEventListener("pointerenter",p),g.addEventListener("pointerleave",f),g.addEventListener("focusin",p),g.addEventListener("focusout",f),m=()=>{g.removeEventListener("pointerenter",p),g.removeEventListener("pointerleave",f),g.removeEventListener("focusin",p),g.removeEventListener("focusout",f)}};return u(),{startAnimation:l,stopAnimation:c,update(g){var f,h;let p=o;o=(f=g.animated)!=null?f:!0,n=(h=g.autoAnimated)!=null?h:!0,p&&!o&&(s.forEach(d=>d.stop()),s=[],i.forEach(({element:d,motion:x})=>Di(d,{...x.normal,transition:{duration:0}}))),u()},destroy(){m(),s.forEach(g=>g.stop()),s=[]}}}var M=(t,e,r)=>({name:t,key:e,...r});var Fi=M("ReceiptText","receipt-text",{nodes:[["path",{d:"M13 16H8"},{r:"growX",d:.17,o:[8,12]}],["path",{d:"M14 8H8"},{r:"growX",d:.05,o:[8,12]}],["path",{d:"M16 12H8"},{r:"growX",d:.11,o:[8,12]}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"},{r:"jelly",a:.05,o:[12,22]}]]});var Oi=M("ScrollText","scroll-text",{nodes:[["path",{d:"M15 12h-5"},{r:"growX",d:.18,o:[10,12]}],["path",{d:"M15 8h-5"},{r:"growX",d:.1,o:[10,8]}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"},{r:"jelly",a:.06,o:[12,12]}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"},{r:"jelly",a:.06,o:[12,12]}]]});var Ri=M("FileCheck","file-check",{nodes:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"},{r:"press",a:.04,o:[12,22]}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"},{r:"press",a:.04,o:[12,22]}],["path",{d:"m9 15 2 2 4-4"},{r:"draw",d:.1,o:[12,15]}]]});var Bi=M("ChartColumn","chart-column",{nodes:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"},{r:"fade",o:[12,12]}],["path",{d:"M18 17V9"},{r:"grow",d:.16,o:[18,17]}],["path",{d:"M13 17V5"},{r:"grow",d:.08,o:[13,17]}],["path",{d:"M8 17v-3"},{r:"grow",o:[8,17]}]]});var Ii=M("MessageCircleMore","message-circle-more",{nodes:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"},{r:"press",a:.04,o:[12,12.001]}],["path",{d:"M8 12h.01"},{r:"bounce",d:.05,y:-1,a:1.5,o:[8.005,12]}],["path",{d:"M12 12h.01"},{r:"bounce",d:.13,y:-1,a:1.5,o:[12.005,12]}],["path",{d:"M16 12h.01"},{r:"bounce",d:.21,y:-1,a:1.5,o:[16.005,12]}]]});var Ni=M("ChartBar","chart-bar",{nodes:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"},{r:"fade",o:[12,12]}],["path",{d:"M7 16h8"},{r:"growX",d:.16,o:[7,16]}],["path",{d:"M7 11h12"},{r:"growX",d:.08,o:[7,11]}],["path",{d:"M7 6h3"},{r:"growX",o:[7,6]}]]});var Li=M("Gift","gift",{nodes:[["path",{d:"M12 7v14"},{r:"press",d:.1,a:.05,o:[12,21]}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"},{r:"press",d:.1,a:.05,o:[12,21]}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"},{r:"lift",o:[12,4.5]}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1"},{r:"lift",d:.05,o:[12,9]}]]});var Ki=M("Wifi","wifi",{nodes:[["path",{d:"M12 20h.01"},{r:"pop",o:[12.005,20]}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"},{r:"draw",d:.24,o:[12,6.91]}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"},{r:"draw",d:.16,o:[12,11.43]}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"},{r:"draw",d:.08,o:[12,15.714]}]]});var Gi=M("Gauge","gauge",{nodes:[["path",{d:"m12 14 4-4"},{r:"turn",d:.05,a:-60,o:[12,14]}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"},{r:"press",a:.04,o:[12,11.5]}]]});var $i=M("LogOut","log-out",{nodes:[["path",{d:"m16 17 5-5-5-5"},{r:"shoot",x:1,a:3,o:[15,12]}],["path",{d:"M21 12H9"},{r:"shoot",x:1,a:3,o:[15,12]}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},{r:"press",d:.1,a:.04,o:[6,12]}]]});var Wi=M("CircleUser","circle-user",{nodes:[["circle",{cx:"12",cy:"12",r:"10"},{r:"press",a:.04,o:[12,12]}],["circle",{cx:"12",cy:"10",r:"3"},{r:"float",a:1.5,o:[12,10]}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"},{r:"rise",d:.1,a:1,o:[12,18.831]}]]});var zi=M("ChevronLeft","chevron-left",{nodes:[["path",{d:"m15 18-6-6 6-6"},{r:"bounce",x:-1,a:2,o:[12,12]}]]});var ji=M("BrandPix","brand-pix",{nodes:[["path",{d:"M10.6 2.9a2 2 0 0 1 2.8 0l8.2 8.2a2 2 0 0 1 0 2.8l-8.2 8.2a2 2 0 0 1-2.8 0l-8.2-8.2a2 2 0 0 1 0-2.8z"},{r:"press",a:.04,o:[12,12]}],["path",{d:"M7 7l5 4 5-4"},{r:"slide",y:1,a:1,d:.05}],["path",{d:"M7 17l5-4 5 4"},{r:"slide",y:-1,a:1,d:.05}]]});var co=M("FileDown","file-down",{nodes:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"},{r:"press",a:.04,o:[12,22]}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"},{r:"press",a:.04,o:[12,22]}],["path",{d:"M12 18v-6"},{r:"bounce",d:.1,y:1,a:2,o:[12,15]}],["path",{d:"m9 15 3 3 3-3"},{r:"bounce",d:.1,y:1,a:2,o:[12,15]}]]});var _i=M("CreditCard","credit-card",{nodes:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"},{r:"flip",o:[12,12]}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"},{r:"flip",o:[12,12]}],["path",{d:"M6 14h2"},{r:"flip",o:[12,12]}]],solid:[["path",{d:"M22 10v6a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-6h20zm-14.99 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2m5.99 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2zm5 -10a4 4 0 0 1 4 4h-20a4 4 0 0 1 4 -4h12z",stroke:"none"},{r:"flip",o:[12,12]}]]});var Xi=M("Copy","copy",{nodes:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},{r:"press",d:.1,a:.05,o:[15,15]}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},{r:"slide",x:-1,y:-1,a:1.5,o:[9,9]}]]});var qi=M("X","x",{text:!0,nodes:[["path",{d:"M18 6 6 18"},{r:"spin",a:90,o:[12,12]}],["path",{d:"m6 6 12 12"},{r:"spin",a:90,o:[12,12]}]],solid:[["path",{d:"M6.707 5.293l5.293 5.292l5.293 -5.292a1 1 0 0 1 1.414 1.414l-5.292 5.293l5.292 5.293a1 1 0 0 1 -1.414 1.414l-5.293 -5.292l-5.293 5.292a1 1 0 1 1 -1.414 -1.414l5.292 -5.293l-5.292 -5.293a1 1 0 0 1 1.414 -1.414",stroke:"none"},{r:"spin",a:90,o:[12,12]}]]});var Ui=M("CircleCheck","circle-check",{nodes:[["circle",{cx:"12",cy:"12",r:"10"},{r:"press",a:.05,o:[12,12]}],["path",{d:"m16 9-5.5 5.5L8 12"},{r:"draw",d:.1,o:[12,11.75]}]]});var Hi=M("CircleAlert","circle-alert",{nodes:[["circle",{cx:"12",cy:"12",r:"10"},{r:"shake",a:1,o:[12,12]}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"},{r:"grow",d:.1,o:[12,8]}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"},{r:"pop",d:.25,o:[12.005,16]}]]});var Yi=M("Eye","eye",{nodes:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},{r:"blink",o:[12,12]}],["circle",{cx:"12",cy:"12",r:"3"},{r:"slide",d:.25,x:1,a:2,o:[12,12]}]]});var Zi=M("MapPin","map-pin",{nodes:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"},{r:"bounce",y:-1,a:2.5,o:[12,12]}],["circle",{cx:"12",cy:"10",r:"3"},{r:"pop",d:.15,o:[12,10]}]]});var Ji=M("CircleArrowDown","circle-arrow-down",{nodes:[["circle",{cx:"12",cy:"12",r:"10"},{r:"press",a:.05,o:[12,12]}],["path",{d:"M12 8v8"},{r:"bounce",d:.1,y:1,a:2,o:[12,12]}],["path",{d:"m8 12 4 4 4-4"},{r:"bounce",d:.1,y:1,a:2,o:[12,12]}]]});var Qi=M("Paperclip","paperclip",{nodes:[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"},{r:"redraw",o:[12.329,12]}]],solid:[["path",{d:"M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm3.531 4.719a0.75 0.75 0 0 0-1.061 0L8.165 13.406A2.25 2.25 0 1 0 11.344 16.594l4.624-4.718a0.75 0.75 0 1 1 1.071 1.05l-4.628 4.723a3.75 3.75 0 1 1-5.308-5.298L13.406 5.915A2.25 2.25 0 1 1 16.594 9.094L10.285 15.525a0.75 0.75 0 1 1-1.071-1.05L15.525 8.035a0.75 0.75 0 0 0 0.006-1.066Z",stroke:"none"},{r:"redraw",o:[12.329,12]}]]});var ts=M("House","house",{nodes:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"},{r:"grow",d:.1,o:[12,21]}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},{r:"press",a:.04,o:[12,21]}]]});var es=M("ChevronRight","chevron-right",{nodes:[["path",{d:"m9 18 6-6-6-6"},{r:"bounce",x:1,a:2,o:[12,12]}]],solid:[["path",{d:"M9.707 5.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1 -1.414 -1.414l5.293 -5.293l-5.293 -5.293a1 1 0 0 1 1.414 -1.414",stroke:"none"},{r:"bounce",x:1,a:2,o:[12,12]}]]});var rs=M("Clock","clock",{nodes:[["circle",{cx:"12",cy:"12",r:"10"},{r:"press",a:.04,o:[12,12]}],["path",{d:"M12 6v6l4 2"},{r:"spin",a:360,o:[12,12]}]]});var os=M("Menu","menu",{nodes:[["path",{d:"M4 5h16"},{r:"growX",o:[4,5]}],["path",{d:"M4 12h16"},{r:"growX",d:.06,o:[4,12]}],["path",{d:"M4 19h16"},{r:"growX",d:.12,o:[4,19]}]]});var ns=M("Plus","plus",{nodes:[["path",{d:"M5 12h14"},{r:"spin",a:90,o:[12,12]}],["path",{d:"M12 5v14"},{r:"spin",a:90,o:[12,12]}]],solid:[["path",{d:"M12 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1 -2 0v-6h-6a1 1 0 0 1 0 -2h6v-6a1 1 0 0 1 1 -1",stroke:"none"},{r:"spin",a:90,o:[12,12]}]]});var is=M("Phone","phone",{nodes:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"},{r:"ring",a:12,o:[12,12]}]],solid:[["path",{d:"M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z",stroke:"none"},{r:"ring",a:12,o:[12,12]}]]});var ss=M("Pencil","pencil",{nodes:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},{r:"tilt",a:12,o:[3,21]}],["path",{d:"m15 5 4 4"},{r:"tilt",a:12,o:[3,21]}]],solid:[["path",{d:"M12.085 6.5l5.415 5.415l-8.793 8.792a1 1 0 0 1 -.707 .293h-4a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 .293 -.707zm5.406 -2.698a3.828 3.828 0 0 1 1.716 6.405l-.292 .293l-5.415 -5.415l.293 -.292a3.83 3.83 0 0 1 3.698 -.991",stroke:"none"},{r:"tilt",a:12,o:[3,21]}]]});var ho={fatura:Fi,contrato:Oi,nota:Ri,consumo:Bi,chat:Ii,relatorio:Ni,presente:Li,wifi:Ki,velocidade:Gi,sair:$i,pessoa:Wi,voltar:zi,pix:ji,pdf:co,cartao:_i,copiar:Xi,fechar:qi,ok:Ui,alerta:Hi,olho:Yi,local:Zi,baixar:co,baixarImagem:Ji,anexo:Qi,casa:ts,seta:es,relogio:rs,menu:os,mais:ns,fone:is,lapis:ss},ol=0,cs=t=>({size:24,strokeWidth:t||2,maskId:"wapi"+ ++ol});function nl(t,e){let r=ho[t];if(!r)return"";let o={"aria-hidden":"true",focusable:"false","data-pi":t};return e&&(o["data-pi-traco"]=String(e)),zo(wr(r,cs(e)),o)}var mo='a, button, label, summary, [role="button"], [role="menuitem"], [role="tab"], [data-ir], [data-acao]';function il(t){let e=t.getBoundingClientRect();return e.width>0&&e.bottom>0&&e.top<(window.innerHeight||0)}function uo(t){let e=(t||document).querySelectorAll?(t||document).querySelectorAll("svg[data-pi]:not([data-pi-vivo])"):[],r=0;for(let o of e){let n=ho[o.getAttribute("data-pi")];if(n){o.setAttribute("data-pi-vivo","");try{o.__pi=Pi(o,wr(n,cs(Number(o.getAttribute("data-pi-traco"))||0)),{autoAnimated:!1})}catch(i){continue}if(r<12&&il(o)){let i=o;setTimeout(()=>go(i),120+r*70),r++}}}}function fo(t){if(!(!t||!t.querySelectorAll))for(let e of t.querySelectorAll("svg[data-pi-vivo]"))go(e)}var as=!1,ls=null;function sl(){as||!document.addEventListener||(as=!0,document.addEventListener("pointerdown",t=>{let e=t.target&&t.target.closest?t.target.closest(mo):null;e&&fo(e)},{capture:!0,passive:!0}),document.addEventListener("pointerover",t=>{if(t.pointerType!=="mouse")return;let e=t.target&&t.target.closest?t.target.closest(mo):null;e&&e!==ls&&fo(e),ls=e},{capture:!0,passive:!0}),document.addEventListener("focusin",t=>{let e=t.target&&t.target.closest?t.target.closest(mo):null;e&&e.matches&&e.matches(":focus-visible")&&fo(e)},!0))}var vr=null,po=0;function ms(){if(sl(),vr||typeof MutationObserver=="undefined")return;let t=document.documentElement;if(!t){document.addEventListener("DOMContentLoaded",ms,{once:!0});return}try{vr=new MutationObserver(()=>{po||(po=setTimeout(()=>{po=0,uo()},80))}),vr.observe(t,{childList:!0,subtree:!0})}catch(e){vr=null}uo()}function go(t){try{t&&t.__pi&&t.__pi.startAnimation()}catch(e){}}window.WAIcones||(window.WAIcones={marcacao:nl,ligar:uo,observar:ms,tocar:go,nomes:Object.keys(ho)});})();

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

