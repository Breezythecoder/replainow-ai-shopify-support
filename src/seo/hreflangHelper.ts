/**
 * Hreflang Helper for Multilingual SEO
 * 
 * Generates hreflang tags for content pages to tell search engines
 * which language version to show to users
 * 
 * Critical for:
 * - Preventing duplicate content penalties
 * - Showing correct language in search results
 * - International SEO optimization
 */

import { contentPageUrls } from '@/i18n/contentUrls';

const BASE_URL = 'https://replainow.com';

export interface HreflangTag {
  hreflang: string;
  href: string;
}

/**
 * Get hreflang tags for a content page
 * 
 * @param pageKey - The content page key (automatisierung, support247, kostenSenken)
 * @returns Array of hreflang tags to add to <Helmet>
 * 
 * @example
 * const hreflangs = getHreflangTags('automatisierung');
 * 
 * <Helmet>
 *   {hreflangs.map(({ hreflang, href }) => (
 *     <link key={hreflang} rel="alternate" hreflang={hreflang} href={href} />
 *   ))}
 * </Helmet>
 */
export const getHreflangTags = (
  pageKey: keyof typeof contentPageUrls
): HreflangTag[] => {
  const urls = contentPageUrls[pageKey];
  
  return [
    // German version
    {
      hreflang: 'de',
      href: `${BASE_URL}${urls.de}`,
    },
    // English version
    {
      hreflang: 'en',
      href: `${BASE_URL}${urls.en}`,
    },
    // Spanish version
    {
      hreflang: 'es',
      href: `${BASE_URL}${urls.es}`,
    },
    // French version
    {
      hreflang: 'fr',
      href: `${BASE_URL}${urls.fr}`,
    },
    // Default for international users (English)
    {
      hreflang: 'x-default',
      href: `${BASE_URL}${urls.en}`,
    },
  ];
};

/**
 * Get canonical URL for a content page based on current locale
 * 
 * @param pageKey - The content page key
 * @param locale - Current locale (de, en, es, fr)
 * @returns Full canonical URL
 */
export const getCanonicalUrl = (
  pageKey: keyof typeof contentPageUrls,
  locale: 'de' | 'en' | 'es' | 'fr'
): string => {
  const urls = contentPageUrls[pageKey];
  return `${BASE_URL}${urls[locale]}`;
};

