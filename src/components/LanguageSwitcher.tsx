import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLocaleFromPath, getPathnameForLocale, locales, Locale } from '@/i18n';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLocale, setCurrentLocale] = useState<Locale>('de');

  useEffect(() => {
    const locale = getLocaleFromPath(location.pathname);
    setCurrentLocale(locale);
  }, [location.pathname]);

  const handleLanguageChange = (newLocale: Locale) => {
    setCurrentLocale(newLocale);
    
    // Save preference to localStorage
    localStorage.setItem('preferred-locale', newLocale);
    
    // For HashRouter, we just change the locale state
    // The content will be re-rendered with the new locale
    window.location.reload();
  };

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'de': return 'DE';
      case 'en': return 'EN';
      case 'fr': return 'FR';
      case 'es': return 'ES';
      default: return locale.toUpperCase();
    }
  };

  const getLanguageFlag = (locale: Locale) => {
    switch (locale) {
      case 'de': return '🇩🇪';
      case 'en': return '🇬🇧';
      case 'fr': return '🇫🇷';
      case 'es': return '🇪🇸';
      default: return '🌍';
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-md border border-border bg-background">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={`px-2 py-1 text-xs font-medium transition-colors duration-200 rounded-sm ${
              currentLocale === locale
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
            title={getLanguageLabel(locale)}
          >
            {getLanguageFlag(locale)}
          </button>
        ))}
      </div>
    </div>
  );
};
