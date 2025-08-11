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

export const heroContentEn: HeroContent = {
  headline: "AI helpdesk for Shopify. Replies in seconds.",
  subheadline:
    "GPT‑4/5 with real‑time Shopify data: higher conversion, faster replies, fewer tickets.",
  primaryCta: { label: "Start free trial", href: "https://apps.shopify.com/replainow/install" },
  secondaryCta: { label: "Watch live demo", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Abstract AI background graphic" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – laptop and mobile mockup" },
  },
};
