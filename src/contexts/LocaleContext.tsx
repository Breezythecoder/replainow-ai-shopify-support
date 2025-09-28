import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocaleFromPath, Locale } from '@/i18n';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [locale, setLocale] = useState<Locale>(() => {
    // Get initial locale from pathname
    return getLocaleFromPath(location.pathname);
  });

  // Update locale when pathname changes
  useEffect(() => {
    const newLocale = getLocaleFromPath(location.pathname);
    setLocale(newLocale);
  }, [location.pathname]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
