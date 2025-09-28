import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLocaleFromPath, getPathnameForLocale, locales } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLocale, setCurrentLocale] = useState<'de' | 'en'>('de');

  useEffect(() => {
    const locale = getLocaleFromPath(location.pathname);
    setCurrentLocale(locale);
  }, [location.pathname]);

  const handleLanguageChange = (newLocale: 'de' | 'en' | 'fr' | 'es') => {
    const newPath = getPathnameForLocale(location.pathname, newLocale);
    setCurrentLocale(newLocale);
    
    // Save preference to localStorage
    localStorage.setItem('preferred-locale', newLocale);
    
    // Navigate to new path
    navigate(newPath);
  };

  const getLanguageLabel = (locale: 'de' | 'en' | 'fr' | 'es') => {
    switch (locale) {
      case 'de': return 'Deutsch';
      case 'en': return 'English';
      case 'fr': return 'Français';
      case 'es': return 'Español';
      default: return locale;
    }
  };

  const getLanguageFlag = (locale: 'de' | 'en' | 'fr' | 'es') => {
    switch (locale) {
      case 'de': return '🇩🇪';
      case 'en': return '🇬🇧';
      case 'fr': return '🇫🇷';
      case 'es': return '🇪🇸';
      default: return '🌍';
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-lg border border-border bg-background p-1">
        {locales.map((locale) => (
          <Button
            key={locale}
            variant={currentLocale === locale ? 'default' : 'ghost'}
            size="sm"
            onClick={() => handleLanguageChange(locale)}
            className="h-8 px-3 text-sm"
          >
            <span className="mr-1">{getLanguageFlag(locale)}</span>
            {getLanguageLabel(locale)}
          </Button>
        ))}
      </div>
    </div>
  );
};
