/**
 * Main i18n module
 * Enterprise-grade internationalization system for 30+ languages
 */

import { SUPPORTED_LOCALES, DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from './config';
import type { LocaleTranslations } from './types';

// Import locale files for all supported languages
import deCommon from './locales/de/common.json';
import deMarketing from './locales/de/marketing.json';
import deSEO from './locales/de/seo.json';
import deLegal from './locales/de/legal.json';
import deContent from './locales/de/content.json';

import enCommon from './locales/en/common.json';
import enMarketing from './locales/en/marketing.json';
import enSEO from './locales/en/seo.json';
import enLegal from './locales/en/legal.json';
import enContent from './locales/en/content.json';

import esCommon from './locales/es/common.json';
import esMarketing from './locales/es/marketing.json';
import esSEO from './locales/es/seo.json';
import esLegal from './locales/es/legal.json';
import esContent from './locales/es/content.json';

import frCommon from './locales/fr/common.json';
import frMarketing from './locales/fr/marketing.json';
import frSEO from './locales/fr/seo.json';
import frLegal from './locales/fr/legal.json';
import frContent from './locales/fr/content.json';

/**
 * Consolidated translations by locale
 */
export const translations: Record<SupportedLocale, LocaleTranslations> = {
  de: {
    common: deCommon,
    marketing: deMarketing,
    seo: deSEO,
    legal: deLegal,
    content: deContent,
  },
  en: {
    common: enCommon,
    marketing: enMarketing,
    seo: enSEO,
    legal: enLegal,
    content: enContent,
  },
  es: {
    common: esCommon,
    marketing: esMarketing,
    seo: esSEO,
    legal: esLegal,
    content: esContent,
  },
  fr: {
    common: frCommon,
    marketing: frMarketing,
    seo: frSEO,
    legal: frLegal,
    content: frContent,
  },
};

// Legacy exports for backward compatibility
export type Locale = SupportedLocale;
export const locales = SUPPORTED_LOCALES;
export const defaultLocale = DEFAULT_LOCALE;

// Import force English override
import { forceEnglishText, isEnglishRoute } from './forceEnglish';

/**
 * Translation function with support for nested keys
 * @param key - Translation key in format 'namespace.path.to.key' (e.g., 'common.navigation.home')
 * @param locale - Optional locale override
 * @returns Translated string or key if not found
 */
export const t = (key: string, locale?: Locale): string => {
  // FORCE_LOCALE environment variable for build-time locale forcing
  const FORCE_LOCALE = import.meta.env.VITE_FORCE_LOCALE as Locale;
  if (FORCE_LOCALE && isSupportedLocale(FORCE_LOCALE)) {
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
  
  return getTranslationForLocale(key, detectedLocale || DEFAULT_LOCALE);
};

/**
 * Helper function to get translation for specific locale
 * Supports both old format (ui.hero.title) and new format (common.navigation.home)
 * 
 * BACKWARD COMPATIBILITY: Maps old "ui.*" keys to new namespaced structure
 */
const getTranslationForLocale = (key: string, locale: Locale): string => {
  const parts = key.split('.');
  
  // Handle legacy "ui." prefix by mapping to appropriate namespace
  if (parts[0] === 'ui') {
    // Map ui.* to the correct namespace based on second part
    const section = parts[1];
    
    // Mapping table: ui.{section} → {namespace}.{section}
    const uiToNamespaceMap: Record<string, string> = {
      'navigation': 'common',
      'footer': 'common',
      'contact': 'common',
      'hero': 'marketing',
      'features': 'marketing',
      'pricing': 'marketing',
      'testimonials': 'marketing',
      'faq': 'marketing',
      'cta': 'marketing',
      'howItWorks': 'marketing',
      'liveDemo': 'marketing',
      'comparison': 'marketing',
      'mailAndChat': 'marketing',
      'problemSolution': 'marketing',
      'socialProof': 'marketing',
      'industryExamples': 'marketing',
      'liveExamples': 'marketing',
      'finalCta': 'marketing',
      'stickyInstallBar': 'marketing',
      'exitIntent': 'marketing',
    };
    
    const newNamespace = uiToNamespaceMap[section] || 'common';
    parts[0] = newNamespace;
  }
  
  // Handle legacy "seo." and "schema." prefixes
  if (parts[0] === 'seo' || parts[0] === 'schema') {
    parts[0] = 'seo';
  }
  
  let value: any = translations[locale];
  
  for (const part of parts) {
    if (value && typeof value === 'object') {
      value = value[part];
    } else {
      return key; // Return key if path doesn't exist
    }
  }
  
  // Return the value (string, array, or object) if found, otherwise return the key
  return value !== undefined ? value : key;
};

/**
 * Hook for using translations with React context
 */
export const useTranslation = () => {
  const tWithLocale = (key: string, locale?: Locale) => t(key, locale);
  return { t: tWithLocale };
};

// Import robust locale detection
import { 
  getLocaleFromPath as getLocaleFromPathRobust, 
  getPathnameForLocale as getPathnameForLocaleRobust, 
  getStoredLocaleHint, 
  storeLocaleHint 
} from './locale';

// Re-export robust locale detection
export const getLocaleFromPath = getLocaleFromPathRobust;
export const getPathnameForLocale = getPathnameForLocaleRobust;

// Re-export storage helpers
export { getStoredLocaleHint, storeLocaleHint };

// Re-export config
export { SUPPORTED_LOCALES, DEFAULT_LOCALE, isSupportedLocale } from './config';
export type { SupportedLocale } from './config';
