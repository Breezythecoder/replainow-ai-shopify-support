import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, getLocaleFromPath } from './index';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('de');

  useEffect(() => {
    // Detect locale from URL on mount and when URL changes
    const detectLocale = () => {
      const pathLocale = getLocaleFromPath(window.location.pathname);
      setLocale(pathLocale);
    };

    detectLocale();

    // Listen for URL changes (for SPA navigation)
    const handlePopState = () => detectLocale();
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
