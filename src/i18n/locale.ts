export type Locale = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pt' | 'zh';

/**
 * Robust path-based locale detection
 * @param pathname - Current pathname (defaults to window.location.pathname)
 * @returns Detected locale
 */
export function getLocaleFromPath(pathname?: string): Locale {
  const p = (pathname ?? (typeof window !== 'undefined' ? window.location.pathname : '/')) || '/';
  
  // Normalize: remove trailing slashes
  const clean = p.replace(/\/+$/, '');
  
  // Get first path segment
  const seg1 = clean.split('/')[1] || '';
  
  // Map to supported locales
  const localeMap: Record<string, Locale> = {
    'en': 'en',
    'es': 'es', 
    'fr': 'fr',
    'it': 'it',
    'nl': 'nl',
    'pt': 'pt',
    'zh': 'zh'
  };
  
  return localeMap[seg1.toLowerCase()] || 'de';
}

/**
 * Get pathname for locale (for navigation)
 * @param currentPath - Current pathname
 * @param locale - Target locale
 * @returns Pathname for the locale
 */
export function getPathnameForLocale(currentPath: string, locale: Locale): string {
  const cleanPath = currentPath.replace(/\/+$/, '');
  const segments = cleanPath.split('/');
  
  // Remove existing language prefix
  const pathWithoutLang = segments.filter((seg, index) => {
    if (index === 1) {
      const langMap: Record<string, boolean> = {
        'en': true, 'es': true, 'fr': true, 'it': true, 'nl': true, 'pt': true, 'zh': true
      };
      return !langMap[seg.toLowerCase()];
    }
    return true;
  }).join('/');
  
  // Add new language prefix
  if (locale === 'de') {
    return pathWithoutLang || '/';
  }
  
  return `/${locale}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
}

/**
 * Get locale from localStorage as hint (not source of truth)
 * @returns Stored locale hint or null
 */
export function getStoredLocaleHint(): Locale | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('replainow-locale');
    const validLocales: Locale[] = ['de', 'en', 'es', 'fr', 'it', 'nl', 'pt', 'zh'];
    return validLocales.includes(stored as Locale) ? (stored as Locale) : null;
  } catch {
    return null;
  }
}

/**
 * Store locale hint in localStorage
 * @param locale - Locale to store
 */
export function storeLocaleHint(locale: Locale): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('replainow-locale', locale);
  } catch {
    // Ignore storage errors
  }
}
