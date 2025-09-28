import de from './locales/de.json';
import en from './locales/en.json';

export type Locale = 'de' | 'en';

export const locales: Locale[] = ['de', 'en'];

export const defaultLocale: Locale = 'de';

export const translations = {
  de,
  en,
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
  return 'de';
};

// Get pathname for locale
export const getPathnameForLocale = (pathname: string, locale: Locale): string => {
  if (locale === 'de') {
    return pathname.replace(/^\/en/, '') || '/';
  }
  if (locale === 'en') {
    return pathname.startsWith('/en') ? pathname : `/en${pathname}`;
  }
  return pathname;
};
