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
  headline: "Helpdesk IA para Shopify. Responde consultas em segundos.",
  subheadline:
    "IA com dados Shopify em tempo real: maior conversão, respostas mais rápidas, menos tickets.",
  primaryCta: { label: "Testar grátis", href: "https://apps.shopify.com/replainow/install" },
  secondaryCta: { label: "Ver demo ao vivo", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Gráfico de fundo IA abstrato" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – Mockup Laptop e Mobile" },
  },
};