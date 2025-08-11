import { useEffect } from "react";

const OrganizationJsonLd = () => {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ReplAInow",
      url: window.location.origin,
      logo: `${window.location.origin}/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png`,
      sameAs: [
        // Add social profiles when available
      ],
    };

    let script = document.getElementById("org-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "org-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(data);
  }, []);

  return null;
};

export default OrganizationJsonLd;
