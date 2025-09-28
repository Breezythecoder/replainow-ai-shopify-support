import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLocaleFromPath, locales, Locale } from '@/i18n';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLocale, setCurrentLocale] = useState<Locale>('de');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const locale = getLocaleFromPath(location.pathname);
    setCurrentLocale(locale);
  }, [location.pathname]);

  const handleLanguageChange = (newLocale: Locale) => {
    setCurrentLocale(newLocale);
    setIsOpen(false);
    
    // Navigate to the correct language URL
    if (newLocale === 'de') {
      window.location.href = '/';
    } else {
      window.location.href = `/${newLocale}`;
    }
  };

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'de': return 'Deutsch';
      case 'en': return 'English';
      case 'fr': return 'Français';
      case 'es': return 'Español';
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
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
      >
        <Globe className="h-4 w-4" />
        <span className="flex items-center gap-1">
          {getLanguageFlag(currentLocale)}
          {getLanguageLabel(currentLocale)}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl z-50">
          <div className="py-1">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  currentLocale === locale
                    ? 'bg-blue-500/20 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{getLanguageFlag(locale)}</span>
                <span>{getLanguageLabel(locale)}</span>
                {currentLocale === locale && (
                  <span className="ml-auto text-blue-500">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
