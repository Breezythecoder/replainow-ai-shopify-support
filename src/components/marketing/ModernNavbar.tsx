import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { t } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
    setMobileMenuOpen(false);
  };

  // Navigation items - simplified to 5 max
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#live-demo' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <nav className="container mx-auto flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <a href="/" aria-label="ReplAInow Home" className="flex items-center group">
            <div className="relative">
              <img
                src="/lovable-uploads/ReplAInow_Logo_optimized.png"
                alt="ReplAInow Logo - AI-gestützter Shopify Support"
                className="h-8 w-8 group-hover:scale-105 transition-transform duration-300"
                width="32"
                height="32"
                loading="eager"
                decoding="async"
              />
            </div>
            
            <div className="ml-3">
              <div className="text-gray-900 font-bold text-lg">
                Repl<span className="text-primary-purple">AI</span>now
              </div>
            </div>
          </a>
          
          {/* Desktop Navigation - Clean & Simple */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
                className="text-gray-600 hover:text-primary-purple font-medium transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher variant="desktop" />
          </div>
          
          <div className="flex items-center gap-4">
            {/* CTA Button - Always Visible */}
            <a
              href={OAUTH_URL}
              className="hidden sm:inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-accent-green to-emerald-600 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {t('marketing.hero.installButton')}
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Navigation schließen" : "Navigation öffnen"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-lg text-gray-700 hover:text-primary-purple font-medium transition-colors min-h-[48px] flex items-center"
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <a
                href={OAUTH_URL}
                className="block w-full text-center px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-accent-green to-emerald-600 rounded-lg shadow-md mt-4"
              >
                {t('marketing.hero.installButton')}
              </a>
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 flex justify-center">
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
