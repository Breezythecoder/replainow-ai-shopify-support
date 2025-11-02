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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        borderBottom: isScrolled 
          ? '1px solid #E5E7EB' 
          : 'none',
        boxShadow: isScrolled 
          ? '0 1px 3px rgba(0, 0, 0, 0.05)'
          : 'none'
      }}
    >
      <nav className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo - Clean */}
        <a href="/" aria-label="ReplAInow Home" className="flex items-center group">
          <div className="relative">
            <img
              src="/lovable-uploads/ReplAInow_Logo_optimized.png"
              alt="ReplAInow Logo"
              className="h-10 w-10 group-hover:scale-105 transition-transform duration-200"
              width="40"
              height="40"
              loading="eager"
            />
          </div>
          
          <div className="ml-3">
            <div className="text-xl font-bold" style={{ color: '#111827' }}>
              Repl<span 
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >AI</span>now
            </div>
          </div>
        </a>
        
        {/* Desktop Navigation - Clean */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href.substring(1))}
              className="font-medium transition-colors duration-200 cursor-pointer"
              style={{ 
                color: '#6B7280',
                fontSize: '15px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8B5CF6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6B7280';
              }}
            >
              {item.label}
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
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors duration-200"
            style={{ color: '#6B7280' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#8B5CF6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6B7280';
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu - Clean */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid #E5E7EB',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="container px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-lg font-medium transition-colors duration-200"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8B5CF6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6B7280';
                }}
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
              >
                {item.label}
              </a>
            ))}
            
            <a
              href={OAUTH_URL}
              className="block w-full text-center px-6 py-4 font-semibold text-white rounded-xl mt-4"
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

