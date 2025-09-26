import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string; // optional path for canonical (e.g., "/privacy")
  image?: string; // Open Graph/Twitter image (absolute or relative to origin)
  keywords?: string; // SEO keywords
  author?: string; // Page author
  type?: string; // Open Graph type (website, article, etc.)
  siteName?: string; // Site name for Open Graph
}

// Professional SEO component with comprehensive meta tags, structured data, and performance optimization
const SEO = ({ 
  title, 
  description, 
  path, 
  image, 
  keywords = "Shopify support, AI customer service, automated support, GDPR compliant, e-commerce automation",
  author = "ReplAInow - PrimeVision Group LLC",
  type = "website",
  siteName = "ReplAInow"
}: SEOProps) => {
  useEffect(() => {
    const ensureMeta = (selector: string, attr: "name" | "property", key: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      return el;
    };

    const ensureLink = (selector: string, rel: string) => {
      let el = document.querySelector<HTMLLinkElement>(selector);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      return el;
    };

    // Enhanced Title with proper formatting
    document.title = title;

    // Meta description with length optimization
    const trimmedDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", trimmedDescription);

    // Keywords meta tag
    if (keywords) {
      const keywordsMeta = ensureMeta('meta[name="keywords"]', "name", "keywords");
      keywordsMeta.setAttribute("content", keywords);
    }

    // Author meta tag
    if (author) {
      const authorMeta = ensureMeta('meta[name="author"]', "name", "author");
      authorMeta.setAttribute("content", author);
    }

    // Robots meta tag for SEO optimization
    const robotsMeta = ensureMeta('meta[name="robots"]', "name", "robots");
    robotsMeta.setAttribute("content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Viewport meta tag for mobile optimization
    let viewport = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.setAttribute("name", "viewport");
      document.head.appendChild(viewport);
    }
    viewport.setAttribute("content", "width=device-width, initial-scale=1, shrink-to-fit=no");

    // Canonical URL with proper formatting
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const href = path ? `${window.location.origin}${path}` : window.location.href.split('?')[0].split('#')[0];
    canonical.setAttribute("href", href);

    // Enhanced Open Graph tags
    const ogTitle = ensureMeta('meta[property="og:title"]', "property", "og:title");
    ogTitle.setAttribute("content", title);

    const ogDesc = ensureMeta('meta[property="og:description"]', "property", "og:description");
    ogDesc.setAttribute("content", trimmedDescription);

    const ogType = ensureMeta('meta[property="og:type"]', "property", "og:type");
    ogType.setAttribute("content", type);

    const ogUrl = ensureMeta('meta[property="og:url"]', "property", "og:url");
    ogUrl.setAttribute("content", href);

    const ogSiteName = ensureMeta('meta[property="og:site_name"]', "property", "og:site_name");
    ogSiteName.setAttribute("content", siteName);

    const ogLocale = ensureMeta('meta[property="og:locale"]', "property", "og:locale");
    ogLocale.setAttribute("content", "de_DE");

    // Enhanced image handling with fallback
    const defaultOgImage = `${window.location.origin}/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png`;
    const finalImage = image?.startsWith("http") ? image : `${window.location.origin}${image || "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"}`;
    
    const ogImage = ensureMeta('meta[property="og:image"]', "property", "og:image");
    ogImage.setAttribute("content", finalImage);

    const ogImageAlt = ensureMeta('meta[property="og:image:alt"]', "property", "og:image:alt");
    ogImageAlt.setAttribute("content", `${siteName} - ${title}`);

    const ogImageWidth = ensureMeta('meta[property="og:image:width"]', "property", "og:image:width");
    ogImageWidth.setAttribute("content", "1200");

    const ogImageHeight = ensureMeta('meta[property="og:image:height"]', "property", "og:image:height");
    ogImageHeight.setAttribute("content", "630");

    // Enhanced Twitter Card tags
    const twCard = ensureMeta('meta[name="twitter:card"]', "name", "twitter:card");
    twCard.setAttribute("content", "summary_large_image");

    const twTitle = ensureMeta('meta[name="twitter:title"]', "name", "twitter:title");
    twTitle.setAttribute("content", title);

    const twDesc = ensureMeta('meta[name="twitter:description"]', "name", "twitter:description");
    twDesc.setAttribute("content", trimmedDescription);

    const twImage = ensureMeta('meta[name="twitter:image"]', "name", "twitter:image");
    twImage.setAttribute("content", finalImage);

    const twImageAlt = ensureMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt");
    twImageAlt.setAttribute("content", `${siteName} - ${title}`);

    // Additional technical SEO tags
    const themeColor = ensureMeta('meta[name="theme-color"]', "name", "theme-color");
    themeColor.setAttribute("content", "#6B7CFF");

    const msApplicationTileColor = ensureMeta('meta[name="msapplication-TileColor"]', "name", "msapplication-TileColor");
    msApplicationTileColor.setAttribute("content", "#6B7CFF");

    // Preconnect to external domains for performance
    const preconnectShopify = ensureLink('link[href="https://apps.shopify.com"]', "preconnect");
    preconnectShopify.setAttribute("href", "https://apps.shopify.com");

    // DNS prefetch for performance optimization
    const dnsPrefetch = ensureLink('link[href="https://fonts.googleapis.com"]', "dns-prefetch");
    dnsPrefetch.setAttribute("href", "https://fonts.googleapis.com");

  }, [title, description, path, image, keywords, author, type, siteName]);

  return null;
};

export default SEO;
