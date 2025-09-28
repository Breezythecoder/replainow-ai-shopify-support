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

// Get locale from pathname (URL-based)
export const getLocaleFromPath = (pathname: string): Locale => {
  // Check URL path for language prefix
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/es')) return 'es';
  
  // Default to German for root path
  return 'de';
};

// Get pathname for locale (HashRouter compatible)
export const getPathnameForLocale = (pathname: string, locale: Locale): string => {
  const currentHash = window.location.hash;
  
  if (locale === 'de') {
    // Remove language prefix from hash
    return currentHash.replace(/#\/(en|fr|es)/, '#/') || '#/';
  }
  if (locale === 'en') {
    return currentHash.includes('#/en') ? currentHash : `#/en${currentHash.replace('#/', '')}`;
  }
  if (locale === 'fr') {
    return currentHash.includes('#/fr') ? currentHash : `#/fr${currentHash.replace('#/', '')}`;
  }
  if (locale === 'es') {
    return currentHash.includes('#/es') ? currentHash : `#/es${currentHash.replace('#/', '')}`;
  }
  return currentHash;
};
