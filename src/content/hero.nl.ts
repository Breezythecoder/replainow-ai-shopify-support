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
  headline: "AI-Helpdesk voor Shopify. Beantwoordt vragen in seconden.",
  subheadline:
    "AI met realtime Shopify-data: hogere conversie, snellere antwoorden, minder tickets.",
  primaryCta: { label: "Gratis testen", href: "https://apps.shopify.com/replainow-ai-support" },
  secondaryCta: { label: "Live-demo bekijken", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Abstracte AI-achtergrondafbeelding" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – Laptop- en Mobile-Mockup" },
  },
};