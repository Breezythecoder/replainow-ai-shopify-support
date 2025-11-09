import { Twitter, Linkedin, Mail } from "lucide-react";

const UltraFooter = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Dark background with mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900"></div>
      <div className="absolute inset-0 bg-mesh-blue opacity-20"></div>
      
      {/* Floating glass orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 glass-card-dark rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 glass-card-dark rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo - NEON */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/ReplAInow_Logo_optimized.png" 
                alt="Logo" 
                className="h-8 w-8"
                style={{ filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))' }}
              />
              <span className="ml-2 text-xl font-black">
                Repl<span className="ultra-text-neon-purple" style={{
                  background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>AI</span>now
              </span>
            </div>
            <p style={{ color: '#64748B' }} className="mb-6">
              Die #1 AI-Helpdesk für Shopify
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/replainow" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(147, 51, 234, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/replainow" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(147, 51, 234, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:support@replainow.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(147, 51, 234, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#E2E8F0' }}>Produkt</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>Features</a></li>
              <li><a href="#pricing" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>Pricing</a></li>
              <li><a href="#live-demo" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>Demo</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#E2E8F0' }}>Ressourcen</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>FAQ</a></li>
              <li><a href="#contact" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>Kontakt</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#E2E8F0' }}>Unternehmen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>Datenschutz</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>AGB</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#64748B' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>Impressum</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(147, 51, 234, 0.2)', color: '#64748B' }}>
          © 2025 ReplAInow. Made with <span className="ultra-text-neon-purple" style={{
            background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>AI</span> in Dubai.
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;

