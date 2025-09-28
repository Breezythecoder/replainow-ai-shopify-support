import { Helmet } from 'react-helmet-async';
import { t, getLocaleFromPath } from '@/i18n';
import { getLocalizedStats } from '@/config/siteStats';

interface SEOHeadProps {
  locale?: string;
  pathname?: string;
}

export const SEOHead = ({ locale = 'de', pathname = '/' }: SEOHeadProps) => {
  const currentLocale = locale as 'de' | 'en' | 'fr' | 'es';
  const stats = getLocalizedStats(currentLocale);
  
  // Generate canonical URL
  const canonicalUrl = `https://replainow.com${pathname === '/' ? '' : pathname}`;
  
  // Generate hreflang tags
  const hreflangTags = [
    { hreflang: 'de', href: 'https://replainow.com/' },
    { hreflang: 'x-default', href: 'https://replainow.com/' },
    { hreflang: 'en', href: 'https://replainow.com/en' },
    { hreflang: 'fr', href: 'https://replainow.com/fr' },
    { hreflang: 'es', href: 'https://replainow.com/es' },
  ];

  return (
    <Helmet>
      {/* Basic Meta */}
      <html lang={currentLocale} />
      <title>{t('seo.title', currentLocale)}</title>
      <meta name="description" content={t('seo.description', currentLocale)} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={t('seo.ogTitle', currentLocale)} />
      <meta property="og:description" content={t('seo.ogDescription', currentLocale)} />
      <meta property="og:image" content="https://replainow.com/images/social-share-1200x630.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ReplAInow" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={t('seo.twitterTitle', currentLocale)} />
      <meta name="twitter:description" content={t('seo.twitterDescription', currentLocale)} />
      <meta name="twitter:image" content="https://replainow.com/images/social-share-1200x630.jpg" />
      
      {/* Hreflang */}
      {hreflangTags.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hreflang={hreflang} href={href} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": t('schema.organization.name', currentLocale),
          "description": t('schema.organization.description', currentLocale),
          "url": t('schema.organization.url', currentLocale),
          "logo": t('schema.organization.logo', currentLocale),
          "contactPoint": {
            "@type": "ContactPoint",
          "telephone": stats.TELEPHONE,
          "contactType": "customer service",
          "availableLanguage": stats.LANGUAGES_LIST
        },
        "sameAs": [
          "https://apps.shopify.com/replainow-ai-support"
        ],
        "foundingDate": stats.FOUNDING_YEAR,
        "founder": {
          "@type": "Person",
          "name": stats.FOUNDER
        }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": t('schema.softwareApplication.name', currentLocale),
          "description": t('schema.softwareApplication.description', currentLocale),
          "url": t('schema.softwareApplication.url', currentLocale),
          "applicationCategory": t('schema.softwareApplication.applicationCategory', currentLocale),
          "operatingSystem": t('schema.softwareApplication.operatingSystem', currentLocale),
          "offers": {
            "@type": "Offer",
            "price": stats.PRICE,
            "priceCurrency": stats.CURRENCY,
            "category": "subscription"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": stats.RATING_VALUE,
            "ratingCount": stats.RATING_COUNT
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": t('schema.website.name', currentLocale),
          "url": t('schema.website.url', currentLocale),
          "description": t('schema.website.description', currentLocale),
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": t('schema.website.searchUrl', currentLocale)
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": t('schema.organization.name', currentLocale),
            "url": t('schema.organization.url', currentLocale)
          }
        })}
      </script>
    </Helmet>
  );
};
