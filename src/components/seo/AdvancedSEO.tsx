import { useEffect } from 'react';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  hreflang?: { [key: string]: string };
  noindex?: boolean;
  locale?: string;
}

const AdvancedSEO = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = "/assets/193e41bc-af60-4d70-947d-659804d66b83.png",
  structuredData,
  hreflang,
  noindex = false,
  locale = "de_DE"
}: AdvancedSEOProps) => {
  const fullTitle = title.includes('ReplAInow') ? title : `${title} | ReplAInow - AI Shopify Helpdesk`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update keywords if provided
    if (keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }
    
    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }
    
    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMetaProperty('og:title', fullTitle);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('og:image', ogImage);
    updateMetaProperty('og:type', 'website');
    updateMetaProperty('og:site_name', 'ReplAInow');
    updateMetaProperty('og:locale', locale);
    
    // Add hreflang tags
    if (hreflang) {
      // Remove existing hreflang tags
      document.querySelectorAll('link[hreflang]').forEach(link => link.remove());
      
      // Add new hreflang tags
      Object.entries(hreflang).forEach(([lang, url]) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = url;
        document.head.appendChild(link);
      });
    }
    
    // Update Twitter Card tags  
    const updateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateTwitterMeta('twitter:card', 'summary_large_image');
    updateTwitterMeta('twitter:title', fullTitle);
    updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', ogImage);
    updateTwitterMeta('twitter:site', '@replainow');
    
    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script || script.textContent !== JSON.stringify(structuredData)) {
        if (script) script.remove();
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
    
    // Update robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noindex ? 
      'noindex, nofollow' : 
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );
    
  }, [fullTitle, description, keywords, canonicalUrl, ogImage, structuredData, hreflang, noindex, locale, currentUrl]);
  
  return null;
};

export default AdvancedSEO;