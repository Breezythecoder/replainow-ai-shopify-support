import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string; // optional path for canonical (e.g., "/privacy")
}

// Lightweight SEO helper to set title, meta description and canonical tag per page
const SEO = ({ title, description, path }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    if (desc) desc.setAttribute("content", description);

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const href = path
      ? `${window.location.origin}${path}`
      : window.location.href;
    canonical.setAttribute("href", href);
  }, [title, description, path]);

  return null;
};

export default SEO;
