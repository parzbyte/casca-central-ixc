import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

// Cliente mínimo do Chrome DevTools Protocol, sem dependências (Node 22+).
// O navegador abre COM janela (o usuário entra na Central com a própria conta) e com perfil persistente.

export function acharNavegador() {
  const pf = process.env.ProgramFiles || 'C:\\Program Files';
  const pf86 = process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)';
  const local = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
  const lista = process.platform === 'win32' ? [
    path.join(pf, 'Google', 'Chrome', 'Application', 'chrome.exe'),
    path.join(pf86, 'Google', 'Chrome', 'Application', 'chrome.exe'),
    path.join(local, 'Google', 'Chrome', 'Application', 'chrome.exe'),
    path.join(pf86, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
    path.join(pf, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  ] : process.platform === 'darwin' ? [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  ] : ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'];
  return lista.find(p => { try { return fs.statSync(p).isFile(); } catch { return false; } }) || null;
}

export async function abrirNavegador(navegador, { perfil, largura = 390, altura = 844, log = () => {} } = {}) {
  fs.mkdirSync(perfil, { recursive: true });
  const args = ['--no-first-run', '--no-default-browser-check', '--disable-extensions', '--disable-background-networking',
    '--remote-debugging-port=0', `--user-data-dir=${perfil}`, `--window-size=${largura + 16},${altura + 80}`, '--window-position=80,40',
    '--hide-crash-restore-bubble', '--app=about:blank'];
  const p = spawn(navegador, args, { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: false });
  const arqPorta = path.join(perfil, 'DevToolsActivePort');
  try { fs.unlinkSync(arqPorta); } catch {}
  const wsUrl = await new Promise((ok, falha) => {
    let saida = '', pronto = false, saiu = false;
    const fim = (fn, v) => { if (pronto) return; pronto = true; clearTimeout(t); clearInterval(i); fn(v); };
    const t = setTimeout(() => { fim(falha, new Error(saiu ? 'o navegador fechou sem abrir a porta de depuração' : 'o navegador não abriu a porta de depuração em 20 s')); try { p.kill(); } catch {} }, 20000);
    const i = setInterval(() => {
      try {
        const linhas = fs.readFileSync(arqPorta, 'utf8').split(/\r?\n/).filter(Boolean);
        if (linhas.length >= 2 && /^\d+$/.test(linhas[0])) fim(ok, 'ws://127.0.0.1:' + linhas[0] + linhas[1]);
      } catch {}
    }, 100);
    p.stderr.on('data', d => { saida += d.toString(); const m = /DevTools listening on (ws:\/\/[^\s]+)/.exec(saida); if (m) fim(ok, m[1]); });
    p.on('exit', c => { saiu = true; if (c) fim(falha, new Error('o navegador fechou (código ' + c + ')')); });
    p.on('error', e => fim(falha, e));
  });
  const ws = new WebSocket(wsUrl);
  await new Promise((ok, falha) => { ws.onopen = ok; ws.onerror = () => falha(new Error('não conectou ao navegador')); });
  let seq = 0; const pendentes = new Map(); const ouvintes = new Map();
  let fechado = false; const aoFechar = new Set();
  ws.onmessage = ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pendentes.has(m.id)) { const { ok, falha } = pendentes.get(m.id); pendentes.delete(m.id); m.error ? falha(new Error(m.error.message)) : ok(m.result); }
    else if (m.method) for (const f of ouvintes.get(m.method) || []) f(m.params, m.sessionId);
  };
  ws.onclose = () => { fechado = true; for (const f of aoFechar) f(); };
  const enviar = (method, params = {}, sessionId) => new Promise((ok, falha) => {
    if (fechado) return falha(new Error('navegador fechado'));
    const id = ++seq; pendentes.set(id, { ok, falha });
    ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
  const ouvir = (method, f) => { if (!ouvintes.has(method)) ouvintes.set(method, new Set()); ouvintes.get(method).add(f); return () => ouvintes.get(method).delete(f); };

  // usa a janela que o --app abriu (a primeira página), em vez de criar outra
  const { targetInfos } = await enviar('Target.getTargets');
  const alvo = targetInfos.find(t => t.type === 'page');
  const { sessionId } = await enviar('Target.attachToTarget', { targetId: alvo.targetId, flatten: true });
  const cmd = (method, params) => enviar(method, params, sessionId);
  await cmd('Page.enable'); await cmd('Runtime.enable'); await cmd('Network.enable');

  const aba = {
    cmd,
    aoFechar: f => aoFechar.add(f),
    ouvir: (method, f) => ouvir(method, (params, sid) => { if (sid === sessionId) f(params); }),
    async celular({ escala = 3, ua = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36' } = {}) {
      await cmd('Emulation.setDeviceMetricsOverride', { width: largura, height: altura, deviceScaleFactor: escala, mobile: true, screenWidth: largura, screenHeight: altura });
      await cmd('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
      await cmd('Network.setUserAgentOverride', { userAgent: ua, acceptLanguage: 'pt-BR,pt;q=0.9' });
    },
    async ir(url, { esperaMs = 1500, limiteMs = 30000 } = {}) {
      const carregou = new Promise(ok => { const tirar = ouvir('Page.loadEventFired', (_p, sid) => { if (sid === sessionId) { tirar(); ok(); } }); });
      const r = await cmd('Page.navigate', { url });
      if (r.errorText) throw new Error('não abriu ' + url + ': ' + r.errorText);
      await Promise.race([carregou, new Promise(ok => setTimeout(ok, limiteMs))]);
      await new Promise(ok => setTimeout(ok, esperaMs));
    },
    async js(expressao) {
      const r = await cmd('Runtime.evaluate', { expression: expressao, awaitPromise: true, returnByValue: true, timeout: 30000 });
      if (r.exceptionDetails) throw new Error('JS na página: ' + (r.exceptionDetails.exception?.description || r.exceptionDetails.text || 'erro').split('\n')[0]);
      return r.result?.value;
    },
    /** Script que roda em TODA página nova antes dos scripts dela (equivale ao WKUserScript atDocumentStart). */
    async injetarNoInicio(fonte) { const { identifier } = await cmd('Page.addScriptToEvaluateOnNewDocument', { source: fonte, runImmediately: true }); return identifier; },
    async tirarInjecao(identifier) { try { await cmd('Page.removeScriptToEvaluateOnNewDocument', { identifier }); } catch {} },
    async recarregar() { await cmd('Page.reload', { ignoreCache: false }); },
    async foto() { const r = await cmd('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); return Buffer.from(r.data, 'base64'); },
    async fechar() {
      try { await Promise.race([enviar('Browser.close'), new Promise(ok => setTimeout(ok, 3000))]); } catch {}
      try { ws.close(); } catch {} try { p.kill(); } catch {}
    },
  };
  log('Navegador aberto com janela (perfil em ' + perfil + ').');
  return aba;
}
