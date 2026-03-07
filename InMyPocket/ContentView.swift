import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView {
        let webView = WKWebView()
        webView.scrollView.bounces = false
        let bundleRoot = Bundle.main.bundleURL

        if let rootIndex = Bundle.main.url(forResource: "index", withExtension: "html") {
            webView.loadFileURL(rootIndex, allowingReadAccessTo: bundleRoot)
            return webView
        }

        if let nestedIndex = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "InMyPocket") {
            webView.loadFileURL(nestedIndex, allowingReadAccessTo: bundleRoot)
        }

        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}
}

struct ContentView: View {
    var body: some View {
        WebView()
            .ignoresSafeArea()
    }
}
