import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 glass-strong border-b border-white/30 backdrop-blur-lg">
        <nav className="container flex items-center justify-between h-16 px-4 sm:px-6">
          <a href="/" aria-label="ReplAInow Home" className="flex items-center gap-3 font-black text-lg">
            <img 
              src="/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png" 
              alt="ReplAInow Logo" 
              className="h-8 w-auto hover:scale-110 transition-transform" 
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
              Funktionen
            </a>
            <a href="#live-demo" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
              Demo
            </a>
            <a href="#preise" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
              Preise
            </a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
              Kontakt
            </a>
            <LanguageSwitcher variant="desktop" />
          </div>
          
          <div className="flex items-center gap-3">
            <Button asChild variant="cta" size="sm" className="font-bold hidden sm:flex">
              <a href={OAUTH_URL}>
                Kostenlos testen
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-lg">
            <div className="container px-4 py-6 space-y-4">
              <a 
                href="#features" 
                className="block py-3 text-slate-700 hover:text-indigo-600 transition-colors font-semibold text-lg border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Funktionen
              </a>
              <a 
                href="#live-demo" 
                className="block py-3 text-slate-700 hover:text-indigo-600 transition-colors font-semibold text-lg border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#preise" 
                className="block py-3 text-slate-700 hover:text-indigo-600 transition-colors font-semibold text-lg border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preise
              </a>
              <a 
                href="#contact" 
                className="block py-3 text-slate-700 hover:text-indigo-600 transition-colors font-semibold text-lg border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </a>
              <div className="pt-4">
                <Button asChild variant="cta" size="lg" className="w-full font-bold text-lg">
                  <a href={OAUTH_URL}>
                    🚀 Kostenlos testen
                  </a>
                </Button>
              </div>
              <div className="pt-2 flex justify-center">
                <LanguageSwitcher variant="mobile" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default ModernNavbar;