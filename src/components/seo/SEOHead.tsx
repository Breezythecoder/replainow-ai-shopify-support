import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  locale?: string;
  alternateLocales?: Array<{ hrefLang: string; href: string }>;
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string;
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  generateOG?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage = '/lovable-uploads/ReplAInow_Logo_optimized.png',
  ogType = 'website',
  locale = 'de-DE',
  alternateLocales = [],
  noindex = false,
  nofollow = false,
  keywords,
  structuredData,
  breadcrumbs,
  generateOG = false
}) => {
  const baseUrl = 'https://replainow.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  
  // Generate dynamic OG image if requested
  const finalOgImage = generateOG 
    ? `${baseUrl}/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description.substring(0, 100))}`
    : ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Generate robots meta
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language and Locale */}
      <html lang={locale.split('-')[0]} />
      <meta property="og:locale" content={locale} />
      
      {/* Alternate Language Links */}
      {alternateLocales.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ReplAInow" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={finalOgImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
