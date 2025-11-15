import { Twitter, Linkedin, Mail } from "lucide-react";

const UltraFooter = () => {
  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle mesh gradient like other sections */}
      <div className="absolute inset-0 bg-mesh-purple opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/ReplAInow_Logo_optimized.png" 
                alt="Logo" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-black text-gray-900">
                Repl<span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Die #1 AI-Helpdesk für Shopify
            </p>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com/replainow"
                aria-label="ReplAInow auf Twitter folgen"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-all text-gray-700 hover:text-purple-700"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/replainow"
                aria-label="ReplAInow auf LinkedIn folgen"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-all text-gray-700 hover:text-purple-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@replainow.com"
                aria-label="E-Mail an ReplAInow Support senden"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-all text-gray-700 hover:text-purple-700"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Produkt</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#live-demo" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Ressourcen</h3>
            <ul className="space-y-3">
              <li>
                <a href="/shopify-kundensupport-automatisieren" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Support automatisieren
                </a>
              </li>
              <li>
                <a href="/24-7-kundensupport-shopify" className="text-gray-700 hover:text-purple-700 transition-colors">
                  24/7 Support
                </a>
              </li>
              <li>
                <a href="/shopify-support-kosten-senken" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Kosten senken
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-700 hover:text-purple-700 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-700 hover:text-purple-700 transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="/impressum" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/security" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Sicherheit
                </a>
              </li>
              <li>
                <a href="/refund" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Rückerstattung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm border-t border-gray-200 text-gray-600">
          © 2025 ReplAInow. Made with <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-semibold">AI</span> in Dubai.
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;

