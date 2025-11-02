import { Twitter, Linkedin, Mail } from "lucide-react";

const UltraFooter = () => {
  return (
    <footer className="py-16 text-white" style={{ background: '#0F172A' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/ReplAInow_Logo_optimized.png" alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-black">
                Repl<span style={{ color: '#8B5CF6' }}>AI</span>now
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Die #1 AI-Helpdesk für Shopify
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/replainow" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/replainow" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:support@replainow.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Produkt</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#live-demo" className="text-gray-400 hover:text-purple-400 transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Ressourcen</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">AGB</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Impressum</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2025 ReplAInow. Made with <span style={{ color: '#8B5CF6' }}>AI</span> in Dubai.
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;

