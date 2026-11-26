// Android (WebView + androidx.webkit): injeta a casca antes dos scripts da Central e recebe os avisos dela.
// build.gradle: implementation("androidx.webkit:webkit:1.12.1")
import android.webkit.JavascriptInterface
import android.webkit.WebView
import androidx.webkit.WebViewCompat
import androidx.webkit.WebViewFeature
import org.json.JSONObject

fun ligarCasca(web: WebView, casca: String /* conteúdo de dist/casca-app.js */) {
    web.settings.javaScriptEnabled = true
    web.settings.domStorageEnabled = true
    // "WAApp/" no user agent avisa a casca de que ela está dentro de um app (barra de abas nativa, login guardado)
    web.settings.userAgentString = web.settings.userAgentString + " WAApp/1"
    val cfg = JSONObject()
        .put("primaria", "#2563EB")
        .put("nome", "Meu Provedor")
        .put("app", true)
    val script = "window.__CASCA_CFG__=$cfg;\n$casca"
    if (WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT)) {
        WebViewCompat.addDocumentStartJavaScript(web, script, setOf("*"))
    }
    web.addJavascriptInterface(object {
        @JavascriptInterface
        fun postMessage(json: String) {
            val msg = JSONObject(json)
            when (msg.optString("acao")) {
                "casca_pronta" -> { /* esconder a tela de abertura */ }
                // login guardado: guarde em armazenamento cifrado (EncryptedSharedPreferences), nunca em texto puro
                "central_cred_pedir" -> { /* responder com window.__casca.credenciais({usuario, senha}) (Central antiga) ou window.__cascaNova.credenciais(...) (nova); null se não tiver */ }
                "central_cred_guardar" -> { /* msg.usuario, msg.senha */ }
                "central_cred_esquecer" -> { /* apagar o login guardado */ }
            }
        }
    }, "WAAppNativo")
    web.loadUrl("https://seu.provedor.com.br/central_assinante_web/")
}
