import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { Menu, X, Zap, Brain, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { useSwipe } from "@/hooks/useSwipe";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Swipe gestures for mobile
  useSwipe({
    onSwipeLeft: () => setMobileMenuOpen(false),
    onSwipeRight: () => setMobileMenuOpen(true),
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-b border-slate-200 backdrop-blur-xl shadow-sm' 
          : 'bg-white/90 border-b border-slate-100 backdrop-blur-lg'
      }`}>
        <nav className="container flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Revolutionary Logo */}
          <a href="/" aria-label="ReplAInow Home" className="flex items-center gap-3 font-black text-lg group">
            <div className="relative">
              <img
                src="/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png"
                alt="ReplAInow Logo - KI-gestützter Shopify Support mit GPT-4.1 Technologie für automatisierten Kundenservice"
                className="h-8 w-auto hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-slate-800 group-hover:text-blue-600 transition-colors duration-300 font-bold">
              ReplAInow
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors story-link flex items-center gap-2 group focus-ring-enhanced">
              <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Funktionen
            </a>
            <a href="#live-demo" className="text-slate-600 hover:text-blue-600 transition-colors story-link flex items-center gap-2 group focus-ring-enhanced">
              <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Demo
            </a>
            <a href="#preise" className="text-slate-600 hover:text-blue-600 transition-colors story-link flex items-center gap-2 group focus-ring-enhanced">
                <span className="text-yellow-500 font-bold">EUR</span>
              Preise
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors story-link focus-ring-enhanced">
              Kontakt
            </a>
            <LanguageSwitcher variant="desktop" />
          </div>
          
          <div className="flex items-center gap-3">
            <Button asChild variant="cta" size="sm" className="font-bold hidden sm:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <a href={OAUTH_URL} className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                JETZT INSTALLIEREN
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-slate-800/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
        
        {/* Revolutionary Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 shadow-2xl bg-white/98 backdrop-blur-xl">
            <div className="container px-4 py-6 space-y-1">
              <a 
                href="#features" 
                className="block py-4 px-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-semibold text-base touch-target flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Brain className="w-5 h-5" />
                Funktionen
              </a>
              <a 
                href="#live-demo" 
                className="block py-4 px-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-semibold text-base touch-target flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Zap className="w-5 h-5" />
                Demo
              </a>
              <a 
                href="#preise" 
                className="block py-4 px-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-semibold text-base touch-target flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                 <span className="text-yellow-300 text-lg font-bold">EUR</span>
                Preise
              </a>
              <a 
                href="#contact" 
                className="block py-4 px-3 text-white hover:text-cyan-300 hover:bg-slate-800/50 rounded-lg transition-colors font-semibold text-base touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </a>
              <div className="pt-4">
                <Button asChild variant="cta" size="lg" className="w-full font-bold text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                  <a href={OAUTH_URL} className="flex items-center gap-2 justify-center">
                    <Rocket className="w-5 h-5" />
                    JETZT INSTALLIEREN
                  </a>
                </Button>
              </div>
              <div className="pt-3 flex justify-center">
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