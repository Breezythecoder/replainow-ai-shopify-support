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

// Import robust locale detection
import { getLocaleFromPath as getLocaleFromPathRobust, getPathnameForLocale as getPathnameForLocaleRobust, getStoredLocaleHint, storeLocaleHint } from './locale';

// Re-export robust locale detection
export const getLocaleFromPath = getLocaleFromPathRobust;
export const getPathnameForLocale = getPathnameForLocaleRobust;

// Re-export storage helpers
export { getStoredLocaleHint, storeLocaleHint };
