import React from 'react';
import { Helmet } from 'react-helmet-async';
import { t } from '../i18n';

interface StaticHeadProps {
  locale: string;
  pathname: string;
}

/**
 * StaticHead - Ensures critical SEO elements are present in static HTML
 *
 * This component provides fallback SEO data that gets rendered server-side
 * and ensures search engines can crawl essential metadata even if JavaScript fails.
 */
export const StaticHead: React.FC<StaticHeadProps> = ({ locale, pathname }) => {
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const currentLocale = locale || (normalizedPath.startsWith('/en') ? 'en' : 'de');

  // Get translations for current locale
  const title = t('seo.title', currentLocale);
  const description = t('seo.description', currentLocale);
  const ogTitle = t('seo.ogTitle', currentLocale);
  const ogDescription = t('seo.ogDescription', currentLocale);

  // Canonical URL
  const canonicalUrl = `https://replainow.com${pathname}`;

  const hreflangMap: Record<string, string> = {
    de: 'https://replainow.com/',
    en: 'https://replainow.com/en'
  };

  // Structured data (schema.org)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ReplAInow',
    description: t('schema.organization.description', currentLocale),
    url: 'https://replainow.com',
    logo: 'https://replainow.com/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Ruben Calabrese'
    }
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ReplAInow AI Helpdesk',
    description: t('schema.softwareApplication.description', currentLocale),
    url: 'https://replainow.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '19',
      priceCurrency: 'EUR'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '280'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ReplAInow',
    url: 'https://replainow.com',
    description: t('schema.website.description', currentLocale),
    inLanguage: currentLocale === 'en' ? 'en-US' : 'de-DE',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://replainow.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <html lang={currentLocale === 'en' ? 'en-US' : 'de-DE'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang tags for internationalization */}
      <link rel="alternate" hreflang="de" href={hreflangMap.de} />
      <link rel="alternate" hreflang="en" href={hreflangMap.en} />
      <link rel="alternate" hreflang="x-default" href={hreflangMap.de} />

      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ReplAInow" />
      <meta property="og:locale" content={currentLocale === 'en' ? 'en_US' : 'de_DE'} />
      <meta property="og:image" content="https://replainow.com/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('seo.twitterTitle', currentLocale)} />
      <meta name="twitter:description" content={t('seo.twitterDescription', currentLocale)} />
      <meta name="twitter:image" content="https://replainow.com/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png" />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Theme color */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
    </Helmet>
  );
};
