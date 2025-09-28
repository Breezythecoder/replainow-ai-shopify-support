import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X, Zap, Brain, Rocket, Sparkles, Cpu, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { useSwipe } from "@/hooks/useSwipe";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { t, getLocaleFromPath } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get current locale
  const locale = getLocaleFromPath(window.location.pathname);

  // Swipe gestures for mobile - only on mobile devices
  useSwipe({
    onSwipeLeft: () => window.innerWidth < 768 && setMobileMenuOpen(false),
    onSwipeRight: () => window.innerWidth < 768 && setMobileMenuOpen(true),
    threshold: 100, // Higher threshold for more intentional swipes
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle fast smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId); // Use native browser smooth scroll (faster)
    setMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 border-b border-blue-500/30 backdrop-blur-xl shadow-2xl shadow-blue-500/20' 
          : 'bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-indigo-900/90 border-b border-blue-400/20 backdrop-blur-xl'
      }`}>
        {/* AI Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] animate-pulse"></div>
        
        <nav className="container flex items-center justify-between h-20 px-4 sm:px-6 relative z-10 navbar-container">
          {/* Ultra-Modern AI Logo */}
          <a href="/" aria-label="ReplAInow Home" className="flex items-center group">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Logo Container - Professional Size */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-1.5 border border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300">
                  <img
                    src="/lovable-uploads/ReplAInow_Logo_optimized.png"
                    alt="ReplAInow Logo - KI-gestützter Shopify Support mit GPT-4.1 Technologie für automatisierten Kundenservice"
                    className="h-7 w-7 group-hover:scale-105 transition-transform duration-300 rounded"
                    width="28"
                    height="28"
                    loading="eager"
                    decoding="async"
                  />
                
                {/* AI Activity Indicator */}
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse border border-slate-800"></div>
              </div>
            </div>
            
            {/* AI Brand Text - Professional */}
            <div className="ml-2">
                <div className="text-white font-bold text-base">
                  Repl<span className="text-blue-300 font-bold">AI</span>now
                </div>
              <div className="text-xs text-blue-200 font-medium">GPT-4.1 Powered</div>
            </div>
          </a>
          
          {/* AI-Powered Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-blue-200 hover:text-white transition-all duration-300 flex items-center gap-2 group relative cursor-pointer">
              <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors duration-300">
                <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-semibold">AI Features</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            
            <a href="#live-demo" onClick={(e) => handleNavClick(e, 'live-demo')} className="text-blue-200 hover:text-white transition-all duration-300 flex items-center gap-2 group relative cursor-pointer">
              <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors duration-300">
                <Activity className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-semibold">Live Demo</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-blue-200 hover:text-white transition-all duration-300 flex items-center gap-2 group relative cursor-pointer">
              <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/40 transition-colors duration-300">
                <Cpu className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-semibold">{t('ui.navigation.pricing', locale)}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-blue-200 hover:text-white transition-all duration-300 flex items-center gap-2 group relative cursor-pointer">
              <div className="p-2 rounded-lg bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors duration-300">
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-semibold">{t('ui.navigation.contact', locale)}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            
            <LanguageSwitcher variant="desktop" />
          </div>
          
          <div className="flex items-center gap-4">
            {/* Ultra-Modern CTA Button */}
            <Button asChild variant="cta" size="sm" className="font-bold hidden sm:flex relative overflow-hidden group">
              <a href={OAUTH_URL} className="flex items-center gap-2 relative z-10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center gap-2">
                  <Rocket className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="text-white font-black">
                    {t('ui.hero.installButton', locale)}
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-300 group-hover:animate-pulse" />
                </div>
                
                {/* Holographic Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(45deg, transparent, rgba(59,130,246,0.5), transparent, rgba(147,51,234,0.5), transparent)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-x 3s ease infinite'
                }}></div>
              </a>
            </Button>
            
            {/* AI-Style Mobile Menu Button - Optimized for Touch */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:text-blue-200 hover:bg-blue-500/30 transition-all duration-300 p-4 min-h-[48px] min-w-[48px] border border-blue-500/30 hover:border-blue-400/60 rounded-xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Navigation schließen" : "Navigation öffnen"}
              >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 animate-spin" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
        
        {/* AI-Powered Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-500/30 shadow-2xl bg-slate-900/98 backdrop-blur-xl">
            <div className="container px-4 py-6 space-y-2">
              {/* AI Navigation Links */}
              <a
                href="#features" 
                className="block py-5 px-6 text-blue-200 hover:text-white hover:bg-blue-500/20 rounded-xl transition-all duration-300 font-semibold text-lg flex items-center gap-4 group min-h-[56px] touch-manipulation"
                onClick={(e) => { handleNavClick(e, 'features'); setMobileMenuOpen(false); }}
              >
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors">
                  <Brain className="w-5 h-5" />
                </div>
                <span>AI Features</span>
                <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </a>
              
              <a
                href="#live-demo" 
                className="block py-5 px-6 text-blue-200 hover:text-white hover:bg-purple-500/20 rounded-xl transition-all duration-300 font-semibold text-lg flex items-center gap-4 group min-h-[56px] touch-manipulation"
                onClick={(e) => { handleNavClick(e, 'live-demo'); setMobileMenuOpen(false); }}
              >
                <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors">
                  <Activity className="w-5 h-5" />
                </div>
                <span>Live Demo</span>
                <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </a>
              
              <a
                href="#pricing" 
                className="block py-5 px-6 text-blue-200 hover:text-white hover:bg-green-500/20 rounded-xl transition-all duration-300 font-semibold text-lg flex items-center gap-4 group min-h-[56px] touch-manipulation"
                onClick={(e) => { handleNavClick(e, 'pricing'); setMobileMenuOpen(false); }}
              >
                <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/40 transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <span>Preise</span>
                <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </a>
              
              <a
                href="#contact" 
                className="block py-5 px-6 text-blue-200 hover:text-white hover:bg-indigo-500/20 rounded-xl transition-all duration-300 font-semibold text-lg flex items-center gap-4 group min-h-[56px] touch-manipulation"
                onClick={(e) => { handleNavClick(e, 'contact'); setMobileMenuOpen(false); }}
              >
                <div className="p-2 rounded-lg bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span>Kontakt</span>
                <div className="ml-auto w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              </a>
              
              {/* AI CTA Button - Mobile Optimized */}
              <div className="pt-6">
                <Button asChild variant="cta" size="lg" className={`w-full ${buttonVariants({ variant: "ai", size: "lg" })}`}>
                  <a href={OAUTH_URL} className="flex items-center gap-3 justify-center relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                    <span>JETZT INSTALLIEREN</span>
                    <Sparkles className="w-6 h-6 text-yellow-300 group-hover:animate-pulse" />
                  </a>
                </Button>
              </div>
              
              {/* Language Switcher */}
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