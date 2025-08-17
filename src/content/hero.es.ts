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
  headline: "Mesa de Ayuda IA para Shopify. Responde consultas en segundos.",
  subheadline:
    "IA con datos de Shopify en tiempo real: mayor conversión, respuestas más rápidas, menos tickets.",
  primaryCta: { label: "Probar gratis", href: "https://apps.shopify.com/replainow/install" },
  secondaryCta: { label: "Ver demo en vivo", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Gráfico de fondo IA abstracto" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – Mockup de Laptop y Móvil" },
  },
};