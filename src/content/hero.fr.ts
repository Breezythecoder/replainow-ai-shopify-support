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

import heroBackground from "@/assets/hero-ai-bg.jpg";

export const heroContent: HeroContent = {
  headline: "Support IA pour Shopify. Répond aux demandes en secondes.",
  subheadline:
    "IA avec données Shopify en temps réel : plus de conversion, réponses plus rapides, moins de tickets.",
  primaryCta: { label: "Essayer gratuitement", href: "https://apps.shopify.com/replainow-ai-support" },
  secondaryCta: { label: "Voir la démo", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Graphique de fond IA abstrait" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – Mockup Laptop et Mobile" },
  },
};