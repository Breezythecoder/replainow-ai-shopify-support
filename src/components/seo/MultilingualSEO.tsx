import { useEffect } from 'react';
import { homeSEO, pagesSEO, getHreflangUrls, defaultOGImage, type SEOConfig } from '../../seo/meta-config';

interface MultilingualSEOProps {
  language: 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pt' | 'zh';
  page?: keyof typeof pagesSEO;
  customSEO?: SEOConfig;
  basePath?: string;
  noindex?: boolean;
}

const MultilingualSEO = ({ 
  language, 
  page, 
  customSEO, 
  basePath = "",
  noindex = false 
}: MultilingualSEOProps) => {
  useEffect(() => {
    // Bestimme SEO-Konfiguration basierend auf Seite und Sprache
    let seoConfig: SEOConfig | undefined;
    
    if (customSEO) {
      seoConfig = customSEO;
    } else if (page && pagesSEO[page] && pagesSEO[page][language]) {
      seoConfig = pagesSEO[page][language];
    } else {
      seoConfig = homeSEO[language];
    }

    // Fallback für fehlende SEO-Konfiguration
    if (!seoConfig) {
      console.warn(`No SEO config found for language: ${language}, page: ${page}`);
      seoConfig = {
        title: "ReplAInow - AI Shopify Helpdesk",
        description: "Automate your Shopify customer support with AI",
        keywords: ["Shopify", "AI", "Customer Support"],
        ogImage: defaultOGImage
      };
    }

    // Defensive destructuring with safe defaults
    const title = (seoConfig?.title ?? "ReplAInow").toString();
    const description = (seoConfig?.description ?? "AI Shopify Helpdesk").toString();
    const keywords = Array.isArray(seoConfig?.keywords) ? seoConfig.keywords : [];
    const ogImage = (seoConfig?.ogImage ?? defaultOGImage).toString();
    
    // Helper function um Meta-Tags sicher zu erstellen/updaten
    const updateOrCreateMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      const safeContent = (content ?? '').toString();
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', safeContent);
    };

    const updateOrCreateLink = (selector: string, rel: string, href?: string, hreflang?: string) => {
      const safeHref = (href ?? '').toString();
      const safeHreflang = (hreflang ?? '').toString();
      let link = document.querySelector(selector) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        if (safeHreflang) link.hreflang = safeHreflang;
        document.head.appendChild(link);
      }
      if (safeHref) link.href = safeHref;
      return link;
    };

    // Document Title
    document.title = title;

    // HTML Lang Attribute - CRITICAL FIX
    document.documentElement.lang = language;

    // Basic Meta Tags
    updateOrCreateMeta('meta[name="description"]', 'name', 'description', description);
    updateOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    
    // Language Meta
    updateOrCreateMeta('meta[name="language"]', 'name', 'language', language);
    updateOrCreateMeta('meta[http-equiv="content-language"]', 'name', 'content-language', language);
    
    // Robots Meta
    const robotsContent = noindex ? 
      'noindex, nofollow' : 
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    updateOrCreateMeta('meta[name="robots"]', 'name', 'robots', robotsContent);

    // Canonical URL
    const baseUrl = 'https://replainow.com';
    const languagePrefix = language === 'de' ? '' : `/${language}`;
    const canonicalUrl = `${baseUrl}${languagePrefix}${basePath}`;
    updateOrCreateLink('link[rel="canonical"]', 'canonical', canonicalUrl);

    // Open Graph Tags
    updateOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    updateOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', `${baseUrl}${ogImage}`);
    updateOrCreateMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    updateOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'ReplAInow');
    
    // Sprach-spezifische Locale
    const localeMap = {
      de: 'de_DE',
      en: 'en_US', 
      es: 'es_ES',
      fr: 'fr_FR',
      it: 'it_IT',
      nl: 'nl_NL',
      pt: 'pt_PT',
      zh: 'zh_CN'
    };
    updateOrCreateMeta('meta[property="og:locale"]', 'property', 'og:locale', localeMap[language]);

    // Twitter Card Tags
    updateOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', `${baseUrl}${ogImage}`);
    updateOrCreateMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@replainow');

    // Entferne alte hreflang Tags
    document.querySelectorAll('link[hreflang]').forEach(link => link.remove());

    // Füge neue hreflang Tags hinzu
    const hreflangUrls = getHreflangUrls(basePath);
    Object.entries(hreflangUrls).forEach(([lang, url]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    });

    // Structured Data für Homepage
    if (!page) {
      const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
            "name": "ReplAInow",
            "alternateName": "PrimeVision Group LLC",
            "url": baseUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png`,
              "caption": "ReplAInow Logo"
            },
            "sameAs": [
              "https://apps.shopify.com/replainow-ai-support"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["de", "en", "es", "fr", "it", "nl", "pt", "zh"]
            }
          },
          {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": baseUrl,
            "name": "ReplAInow - AI Shopify Helpdesk",
            "description": description,
            "publisher": {
              "@id": `${baseUrl}/#organization`
            },
            "inLanguage": language
          },
          {
            "@type": "SoftwareApplication",
            "name": "ReplAInow AI Helpdesk",
            "operatingSystem": "Web-based",
            "applicationCategory": "Customer Support Software",
            "offers": {
              "@type": "Offer",
              "price": "19",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "28",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "GPT-5 AI Integration",
              "3 Second Response Time", 
              "100+ Languages Support",
              "GDPR Compliant",
              "60-80% Automation"
            ]
          }
        ]
      };

      // Entferne alte Structured Data
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());
      
      // Füge neue Structured Data hinzu
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Performance & Technical Meta Tags
    updateOrCreateMeta('meta[name="theme-color"]', 'name', 'theme-color', '#6B7CFF');
    updateOrCreateMeta('meta[name="msapplication-TileColor"]', 'name', 'msapplication-TileColor', '#6B7CFF');
    
    // Preconnect für Performance
    const preconnectDomains = [
      'https://apps.shopify.com',
      'https://fonts.googleapis.com',
      'https://cdn.jsdelivr.net'
    ];
    
    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
      }
    });

  }, [language, page, customSEO, basePath, noindex]);

  return null;
};

export default MultilingualSEO;