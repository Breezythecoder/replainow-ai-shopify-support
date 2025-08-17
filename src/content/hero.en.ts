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
  headline: "AI Helpdesk for Shopify. Answers inquiries in seconds.",
  subheadline:
    "AI with real-time Shopify data: higher conversion, faster responses, fewer tickets.",
  primaryCta: { label: "Try for free", href: "https://apps.shopify.com/replainow/install" },
  secondaryCta: { label: "Watch live demo", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "Abstract AI background graphic" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – Laptop and Mobile Mockup" },
  },
};