import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string; // optional path for canonical (e.g., "/privacy")
  image?: string; // Open Graph/Twitter image (absolute or relative to origin)
}

// Lightweight SEO helper to set title, meta description, canonical + OG/Twitter tags per page
const SEO = ({ title, description, path, image }: SEOProps) => {
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

    // Title
    document.title = title;

    // Meta description
    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", description);

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const href = path ? `${window.location.origin}${path}` : window.location.href;
    canonical.setAttribute("href", href);

    // Open Graph
    const ogTitle = ensureMeta('meta[property="og:title"]', "property", "og:title");
    ogTitle.setAttribute("content", title);

    const ogDesc = ensureMeta('meta[property="og:description"]', "property", "og:description");
    ogDesc.setAttribute("content", description);

    const ogType = ensureMeta('meta[property="og:type"]', "property", "og:type");
    ogType.setAttribute("content", "website");

    const ogUrl = ensureMeta('meta[property="og:url"]', "property", "og:url");
    ogUrl.setAttribute("content", href);

    const defaultOg = `${window.location.origin}/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png`;
    const ogImage = ensureMeta('meta[property="og:image"]', "property", "og:image");
    ogImage.setAttribute("content", image?.startsWith("http") ? image : `${window.location.origin}${image || "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"}` || defaultOg);

    // Twitter
    const twCard = ensureMeta('meta[name="twitter:card"]', "name", "twitter:card");
    twCard.setAttribute("content", "summary_large_image");

    const twTitle = ensureMeta('meta[name="twitter:title"]', "name", "twitter:title");
    twTitle.setAttribute("content", title);

    const twDesc = ensureMeta('meta[name="twitter:description"]', "name", "twitter:description");
    twDesc.setAttribute("content", description);

    const twImage = ensureMeta('meta[name="twitter:image"]', "name", "twitter:image");
    twImage.setAttribute("content", image?.startsWith("http") ? image : `${window.location.origin}${image || "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"}` || defaultOg);
  }, [title, description, path, image]);

  return null;
};

export default SEO;
