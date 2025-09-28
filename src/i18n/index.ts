import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

export type Locale = 'de' | 'en' | 'fr' | 'es';

export const locales: Locale[] = ['de', 'en', 'fr', 'es'];

export const defaultLocale: Locale = 'de';

export const translations = {
  de,
  en,
  fr,
  es,
} as const;

export type TranslationKeys = typeof de;

// Simple i18n function
export const t = (key: string, locale: Locale = 'de'): string => {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

// Get locale from pathname
export const getLocaleFromPath = (pathname: string): Locale => {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/es')) return 'es';
  return 'de';
};

// Get pathname for locale
export const getPathnameForLocale = (pathname: string, locale: Locale): string => {
  if (locale === 'de') {
    return pathname.replace(/^\/(en|fr|es)/, '') || '/';
  }
  if (locale === 'en') {
    return pathname.startsWith('/en') ? pathname : `/en${pathname}`;
  }
  if (locale === 'fr') {
    return pathname.startsWith('/fr') ? pathname : `/fr${pathname}`;
  }
  if (locale === 'es') {
    return pathname.startsWith('/es') ? pathname : `/es${pathname}`;
  }
  return pathname;
};
