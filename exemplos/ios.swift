// iOS (WKWebView): injeta a casca antes dos scripts da Central e recebe os avisos dela.
import WebKit

final class Casca: NSObject, WKScriptMessageHandler {
    func ligar(em config: WKWebViewConfiguration, casca: String /* conteúdo de dist/casca-app.js */) {
        let cfg = #"{"primaria":"#2563EB","nome":"Meu Provedor","app":true}"#
        // a casca chama window.WAAppNativo.postMessage(json); aqui ele vira uma mensagem do WKWebView
        let ponte = "window.WAAppNativo={postMessage:function(j){window.webkit.messageHandlers.casca.postMessage(j)}};"
        let script = WKUserScript(source: ponte + "window.__CASCA_CFG__=\(cfg);\n" + casca,
                                  injectionTime: .atDocumentStart, forMainFrameOnly: true)
        config.userContentController.addUserScript(script)
        config.userContentController.add(self, name: "casca")
        // "WAApp/" no user agent avisa a casca de que ela está dentro de um app
        config.applicationNameForUserAgent = "WAApp/1"
    }

    func userContentController(_ c: WKUserContentController, didReceive m: WKScriptMessage) {
        guard let txt = m.body as? String, let d = txt.data(using: .utf8),
              let msg = try? JSONSerialization.jsonObject(with: d) as? [String: Any] else { return }
        switch msg["acao"] as? String {
        case "casca_pronta": break // esconder a tela de abertura
        case "central_cred_guardar": break // guardar no Keychain, nunca em texto puro
        default: break
        }
    }
}
