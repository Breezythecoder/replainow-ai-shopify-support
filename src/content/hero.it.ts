import type { HeroContent } from "./hero";
import heroBackground from "@/assets/hero-ai-bg.jpg";

export const heroContentIt: HeroContent = {
  headline: "Helpdesk AI per Shopify. Risponde alle richieste in secondi.",
  subheadline:
    "AI con dati Shopify in tempo reale: conversioni più alte, risposte più veloci, meno ticket.",
  primaryCta: { label: "Prova gratuita", href: "https://apps.shopify.com/replainow/install" },
  secondaryCta: { label: "Guarda demo live", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Grafica di sfondo AI astratta" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – Mockup laptop e mobile" },
  },
};