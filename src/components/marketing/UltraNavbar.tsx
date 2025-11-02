import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { t } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#live-demo' },
  ];

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled 
          ? 'rgba(10, 11, 13, 0.6)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px) saturate(200%)' : 'blur(12px)',
        WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(200%)' : 'blur(12px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(147, 51, 234, 0.2)' 
          : '1px solid rgba(147, 51, 234, 0.0)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(147, 51, 234, 0.1)'
          : 'none'
      }}
    >
      <nav className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo - NEON Purple Brand */}
        <a href="/" aria-label="ReplAInow Home" className="flex items-center group">
          <div className="relative">
            <img
              src="/lovable-uploads/ReplAInow_Logo_optimized.png"
              alt="ReplAInow Logo"
              className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))'
              }}
              width="40"
              height="40"
              loading="eager"
            />
          </div>
          
          <div className="ml-3">
            <div className="text-xl font-black" style={{ color: '#FFFFFF' }}>
              Repl<span 
                className="ultra-text-neon-purple"
                style={{
                  background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))'
                }}
              >AI</span>now
            </div>
          </div>
        </a>
        
        {/* Desktop Navigation - NEON */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href.substring(1))}
              className="font-semibold transition-all duration-200 cursor-pointer relative group"
              style={{ 
                color: '#E2E8F0',
                textShadow: '0 0 0 rgba(147, 51, 234, 0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#9333EA';
                e.currentTarget.style.textShadow = '0 0 20px rgba(147, 51, 234, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E2E8F0';
                e.currentTarget.style.textShadow = '0 0 0 rgba(147, 51, 234, 0)';
              }}
            >
              {item.label}
              <div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
                  boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                }}
              ></div>
            </a>
          ))}
          
          <LanguageSwitcher variant="desktop" />
        </div>
        
        <div className="flex items-center gap-4">
          {/* CTA - Green Signature */}
          <a
            href={OAUTH_URL}
            className="hidden sm:inline-flex items-center px-6 py-3 font-bold text-white rounded-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.3)';
            }}
          >
            Kostenlos starten
          </a>
          
          {/* Mobile Menu Button - NEON */}
          <button
            className="md:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center transition-all"
            style={{ color: '#E2E8F0' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#9333EA';
              e.currentTarget.style.textShadow = '0 0 20px rgba(147, 51, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#E2E8F0';
              e.currentTarget.style.textShadow = '0 0 0 rgba(147, 51, 234, 0)';
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu - DARK GLASS */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden"
          style={{
            background: 'rgba(10, 11, 13, 0.95)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderTop: '1px solid rgba(147, 51, 234, 0.2)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div className="container px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-lg font-semibold transition-all"
                style={{ color: '#E2E8F0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#9333EA';
                  e.currentTarget.style.textShadow = '0 0 20px rgba(147, 51, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#E2E8F0';
                  e.currentTarget.style.textShadow = '0 0 0 rgba(147, 51, 234, 0)';
                }}
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
              >
                {item.label}
              </a>
            ))}
            
            <a
              href={OAUTH_URL}
              className="block w-full text-center px-6 py-4 font-bold text-white rounded-xl mt-4"
              style={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
              }}
            >
              Kostenlos starten
            </a>
            
            <div className="pt-4 flex justify-center">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default UltraNavbar;

