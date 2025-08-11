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
import heroScreenshot from "@/assets/mock-inbox.jpg";

export const heroContent: HeroContent = {
  headline: "Maximiere deinen Kundensupport – mit KI-Power für Shopify.",
  subheadline:
    "ReplAInow beantwortet Kundenanfragen blitzschnell, präzise und direkt aus deinem Shopify-Admin – 24/7, DSGVO-konform.",
  primaryCta: { label: "Jetzt installieren", href: "https://apps.shopify.com/replainow/install" },
  secondaryCta: { label: "Demo ansehen", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Abstrakte AI-Hintergrundgrafik" },
    image: { src: heroScreenshot, alt: "ReplAInow – KI-Support Screenshot" },
  },
};
