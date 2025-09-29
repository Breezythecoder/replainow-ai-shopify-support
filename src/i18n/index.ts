import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

export type Locale = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pt' | 'zh';

export const locales: Locale[] = ['de', 'en', 'fr', 'es'];

export const defaultLocale: Locale = 'de';

export const translations = {
  de,
  en,
  fr,
  es,
} as const;

export type TranslationKeys = typeof de;

// Import force English override
import { forceEnglishText, isEnglishRoute } from './forceEnglish';

// Simple i18n function with FORCE_LOCALE support for dual-build
export const t = (key: string, locale?: Locale): string => {
  // FORCE_LOCALE environment variable for build-time locale forcing
  const FORCE_LOCALE = process.env.FORCE_LOCALE as Locale;
  if (FORCE_LOCALE && ['de', 'en', 'fr', 'es'].includes(FORCE_LOCALE)) {
    return getTranslationForLocale(key, FORCE_LOCALE);
  }

  // FORCE ENGLISH for /en route - ALWAYS use English translations
  if (typeof window !== 'undefined' && isEnglishRoute()) {
    return getTranslationForLocale(key, 'en');
  }

  // FORCE ENGLISH for any path containing '/en'
  if (typeof window !== 'undefined' && window.location.pathname.includes('/en')) {
    return getTranslationForLocale(key, 'en');
  }
  
  // Auto-detect locale from pathname if not provided
  let detectedLocale = locale;
  if (!detectedLocale && typeof window !== 'undefined') {
    detectedLocale = getLocaleFromPath(window.location.pathname);
  }
  
  const keys = key.split('.');
  let value: any = translations[detectedLocale || 'de'];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

// Helper function to get translation for specific locale
const getTranslationForLocale = (key: string, locale: Locale): string => {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};

// Hook for using translations with React context
export const useTranslation = () => {
  const tWithLocale = (key: string, locale?: Locale) => t(key, locale);
  return { t: tWithLocale };
};

// Import robust locale detection
import { getLocaleFromPath as getLocaleFromPathRobust, getPathnameForLocale as getPathnameForLocaleRobust, getStoredLocaleHint, storeLocaleHint } from './locale';

// Re-export robust locale detection
export const getLocaleFromPath = getLocaleFromPathRobust;
export const getPathnameForLocale = getPathnameForLocaleRobust;

// Re-export storage helpers
export { getStoredLocaleHint, storeLocaleHint };
