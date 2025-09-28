import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X, Zap, Brain, Rocket, Sparkles, Cpu, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { useSwipe } from "@/hooks/useSwipe";
import { smoothScrollToElement } from "@/utils/smoothScroll";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernNavbarEn = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-30 blur animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">ReplAInow</span>
                <span className="text-xs text-blue-300 -mt-1">AI Helpdesk</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="text-blue-200 hover:text-white transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Features
              </a>
              <a 
                href="#live-demo" 
                onClick={(e) => handleNavClick(e, 'live-demo')}
                className="text-blue-200 hover:text-white transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Live Demo
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, 'pricing')}
                className="text-blue-200 hover:text-white transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-blue-200 hover:text-white transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA & Language Switcher */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <a href={OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  INSTALL NOW
                  <Rocket className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-blue-500/30 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="block text-blue-200 hover:text-white transition-colors duration-300 font-medium py-2 border-b border-blue-500/20"
              >
                Features
              </a>
              <a 
                href="#live-demo" 
                onClick={(e) => handleNavClick(e, 'live-demo')}
                className="block text-blue-200 hover:text-white transition-colors duration-300 font-medium py-2 border-b border-blue-500/20"
              >
                Live Demo
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, 'pricing')}
                className="block text-blue-200 hover:text-white transition-colors duration-300 font-medium py-2 border-b border-blue-500/20"
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block text-blue-200 hover:text-white transition-colors duration-300 font-medium py-2 border-b border-blue-500/20"
              >
                Contact
              </a>

              {/* Mobile CTA & Language Switcher */}
              <div className="pt-4 space-y-4">
                <LanguageSwitcher />
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                >
                  <a href={OAUTH_URL} target="_blank" rel="noopener noreferrer">
                    INSTALL NOW
                    <Rocket className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default ModernNavbarEn;
