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

// Simple i18n function with FORCE ENGLISH override
export const t = (key: string, locale?: Locale): string => {
  // FORCE ENGLISH for /en route - ALWAYS use English translations
  if (typeof window !== 'undefined' && isEnglishRoute()) {
    const keys = key.split('.');
    let value: any = translations['en'];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
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
