export type ImageSrc = string;

export type HeroContent = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  media: {
    background?: { src: ImageSrc; alt: string };
    image: { src: ImageSrc; alt: string };
  };
};

// Hinweis: Du kannst die Bild-URLs einfach austauschen.
// - Entweder importierte Assets verwenden (wie unten)
// - Oder Dateien in den Ordner "/public/images" legen und hier als String referenzieren, z.B. "/images/mein-screenshot.png"
import heroBackground from "@/assets/hero-ai-bg.jpg";


export const heroContent: HeroContent = {
  headline: "AI-Helpdesk für Shopify. Answert Anfragen in seconds.",
  subheadline:
    "AI mit Echtzeit-Shopify data: höhere Conversion, schnellere Antworten, weniger Tickets.",
  primaryCta: { label: "Kostenlos test", href: "https://apps.shopify.com/replainow-ai-support" },
  secondaryCta: { label: "Live-Demo Watch", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Abstrakte AI-Hintergrundgrafik" },
    image: { src: "/assets/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – Laptop- und Mobile-Mockup" },
  },
};
