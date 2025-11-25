import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/i18n";
import { useLocale } from "@/i18n/LocaleContext";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const PremiumNavbar = () => {
  const { t } = useTranslation();
  const { locale: currentLocale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect if we're on the homepage (any locale)
  const isHomePage = 
    location.pathname === '/' ||
    location.pathname === '/en' ||
    location.pathname === '/es' ||
    location.pathname === '/fr';

  // Get locale prefix for URLs (empty for German)
  const getLocalePrefix = () => {
    if (currentLocale === 'de') return '';
    return `/${currentLocale}`;
  };

  // Get logo link (locale-aware homepage)
  const getLogoLink = () => {
    return getLocalePrefix() || '/';
  };

  // Intelligent navigation handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      // On homepage: smooth scroll to anchor
      smoothScrollToElement(anchor);
    } else {
      // On other pages: navigate to homepage with anchor
      const localePrefix = getLocalePrefix();
      const targetUrl = `${localePrefix}/#${anchor}`;
      navigate(targetUrl);
      
      // After navigation, scroll to anchor (small delay for rendering)
      setTimeout(() => {
        smoothScrollToElement(anchor);
      }, 100);
    }
  };

  const navItems = [
    { label: t('common.navigation.features'), anchor: 'features' },
    { label: t('common.navigation.integration'), anchor: 'integration' },
    { label: t('common.navigation.pricing'), anchor: 'pricing' },
    { label: t('common.navigation.faq'), anchor: 'faq' },
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-elevation-3' : 'bg-white/80 backdrop-blur-md'}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-8">
        
        {/* Logo - Premium (Locale-Aware) */}
        <a 
          href={getLogoLink()} 
          aria-label="ReplAInow Home" 
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            navigate(getLogoLink());
          }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/lovable-uploads/ReplAInow_Logo_optimized.png"
              alt="ReplAInow Logo"
              className="relative h-10 w-10 group-hover:scale-110 transition-transform duration-300"
              width="40"
              height="40"
              loading="eager"
            />
          </div>
          
          <div className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 tracking-wide">
            Repl<span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
          </div>
        </a>
        
        {/* Desktop Navigation - Intelligent */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const href = isHomePage ? `#${item.anchor}` : `${getLocalePrefix()}/#${item.anchor}`;
            
            return (
              <a
                key={item.anchor}
                href={href}
                onClick={(e) => handleNavClick(e, item.anchor)}
                className={`relative text-sm font-semibold transition-colors duration-200 cursor-pointer group ${
                  isScrolled ? 'text-gray-900' : 'text-gray-900'
                } hover:text-purple-700`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            );
          })}
          
          <LanguageSwitcher variant="desktop" />
        </div>
        
        {/* CTA Button - PURPLE! */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <a
              href={OAUTH_URL}
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('common.navigation.cta')}</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-gray-700 hover:text-purple-700 transition-colors duration-200 rounded-lg hover:bg-purple-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('common.navigation.menuClose') : t('common.navigation.menuOpen')}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu - Intelligent */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-lg">
          <div className="container px-6 py-6 space-y-4">
            {navItems.map((item) => {
              const href = isHomePage ? `#${item.anchor}` : `${getLocalePrefix()}/#${item.anchor}`;
              
              return (
                <a
                  key={item.anchor}
                  href={href}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-purple-700 transition-colors duration-200 hover:pl-2"
                  onClick={(e) => handleNavClick(e, item.anchor)}
                >
                  {item.label}
                </a>
              );
            })}
            
            <a
              href={OAUTH_URL}
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-4 rounded-xl font-semibold mt-4 shadow-lg shadow-purple-500/20"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t('common.navigation.cta')}
              </span>
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

export default PremiumNavbar;









