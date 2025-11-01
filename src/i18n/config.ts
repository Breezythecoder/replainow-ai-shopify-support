/**
 * i18n Configuration
 * Central configuration for internationalization system
 */

export const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr'] as const;
export const DEFAULT_LOCALE = 'de' as const;

// Planned locales for future expansion (30+ languages roadmap)
export const PLANNED_LOCALES = [
  'it',  // Italian
  'nl',  // Dutch
  'pt',  // Portuguese
  'zh',  // Chinese
  'ja',  // Japanese
  'ko',  // Korean
  'ar',  // Arabic
  'ru',  // Russian
  'pl',  // Polish
  'sv',  // Swedish
  'da',  // Danish
  'no',  // Norwegian
  'fi',  // Finnish
  'cs',  // Czech
  'hu',  // Hungarian
  'ro',  // Romanian
  'tr',  // Turkish
  'el',  // Greek
  'he',  // Hebrew
  'th',  // Thai
  'vi',  // Vietnamese
  'id',  // Indonesian
  'ms',  // Malay
  'hi',  // Hindi
  'bn',  // Bengali
  'uk',  // Ukrainian
] as const;

export type SupportedLocale = typeof SUPPORTED_LOCALES[number];
export type PlannedLocale = typeof PLANNED_LOCALES[number];
export type AllLocale = SupportedLocale | PlannedLocale;

/**
 * Locale metadata for display and configuration
 */
export const LOCALE_METADATA: Record<SupportedLocale, {
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  currency: string;
  dateFormat: string;
}> = {
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    currency: 'EUR',
    dateFormat: 'DD.MM.YYYY'
  },
  en: {
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY'
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY'
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY'
  }
};

/**
 * Check if a locale is supported
 */
export const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
};

/**
 * Get locale metadata
 */
export const getLocaleMetadata = (locale: SupportedLocale) => {
  return LOCALE_METADATA[locale];
};

