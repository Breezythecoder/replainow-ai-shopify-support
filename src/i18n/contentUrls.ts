/**
 * Localized URL structure for content pages
 * 
 * Each content page has SEO-optimized URLs for each language
 * URLs are keyword-rich and language-appropriate
 * 
 * Usage in App.tsx:
 * <Route path={contentPageUrls.automatisierung.de} element={...} />
 */

export const contentPageUrls = {
  automatisierung: {
    de: '/shopify-kundensupport-automatisieren',
    en: '/en/automate-shopify-customer-support',
    es: '/es/automatizar-soporte-cliente-shopify',
    fr: '/fr/automatiser-support-client-shopify',
  },
  support247: {
    de: '/24-7-kundensupport-shopify',
    en: '/en/24-7-customer-support-shopify',
    es: '/es/soporte-24-7-shopify',
    fr: '/fr/support-24-7-shopify',
  },
  kostenSenken: {
    de: '/shopify-support-kosten-senken',
    en: '/en/reduce-shopify-support-costs',
    es: '/es/reducir-costos-soporte-shopify',
    fr: '/fr/reduire-couts-support-shopify',
  },
} as const;

/**
 * Helper to get content page URL for current locale
 * 
 * @param pageKey - The page key (automatisierung, support247, kostenSenken)
 * @param locale - The locale (de, en, es, fr)
 * @returns The localized URL path
 */
export const getContentPageUrl = (
  pageKey: keyof typeof contentPageUrls,
  locale: 'de' | 'en' | 'es' | 'fr'
): string => {
  return contentPageUrls[pageKey][locale];
};

/**
 * Get all URLs for a specific page (for hreflang tags)
 * 
 * @param pageKey - The page key
 * @returns Object with all language URLs
 */
export const getPageUrls = (pageKey: keyof typeof contentPageUrls) => {
  return contentPageUrls[pageKey];
};






