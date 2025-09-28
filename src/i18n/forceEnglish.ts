/**
 * FORCE ENGLISH - Radical fix for /en route
 * This will override all German text with English when on /en route
 */

// Force English translations for /en route
export const forceEnglishTranslations = {
  "ui.navigation.home": "Home",
  "ui.navigation.features": "Features", 
  "ui.navigation.pricing": "Pricing",
  "ui.navigation.demo": "Live Demo",
  "ui.navigation.contact": "Contact",
  "ui.hero.title": "AI Helpdesk for Shopify.",
  "ui.hero.subtitle": "Responds in 3 seconds",
  "ui.hero.description": "Revolutionary GPT-4.1 AI with real-time Shopify data: Higher conversion, faster responses, 90% fewer support tickets.",
  "ui.hero.storesCount": "Active Stores",
  "ui.hero.aiAccuracy": "AI Accuracy",
  "ui.hero.responseTime": "Response Time",
  "ui.hero.installButton": "Install Now",
  "ui.hero.liveDemoButton": "Watch Demo",
  "ui.skipToMain": "Skip to main content",
  "ui.howItWorks.title": "How It Works",
  "ui.howItWorks.subtitle": "3 Simple Steps to AI-Powered Support",
  "ui.features.title": "Why Choose ReplAInow?",
  "ui.features.subtitle": "Transform your Shopify store with AI-powered customer support",
  "ui.pricing.title": "Simple, transparent pricing",
  "ui.pricing.subtitle": "Start free, scale as you grow",
  "ui.socialProof.title": "What real merchants say",
  "ui.socialProof.subtitle": "Join 280+ happy Shopify merchants",
  "ui.liveDemo.title": "See ReplAInow in Action",
  "ui.liveDemo.subtitle": "Watch how our AI handles real customer queries",
  "ui.comparison.title": "ReplAInow vs Traditional Support",
  "ui.comparison.subtitle": "See why merchants choose AI-powered support",
  "ui.contact.title": "Get in Touch",
  "ui.contact.subtitle": "Questions? We're here to help",
  "ui.faq.title": "Frequently Asked Questions",
  "ui.faq.subtitle": "Everything you need to know about ReplAInow",
  "ui.finalCta.title": "Ready to automate your support?",
  "ui.finalCta.subtitle": "Join 280+ happy Shopify merchants and start saving today",
  "ui.finalCta.button": "Start Free Trial",
  "ui.finalCta.demo": "Watch Demo"
};

// Check if we're on English route
export const isEnglishRoute = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.location.pathname.startsWith('/en');
};

// Force English text override
export const forceEnglishText = (key: string, originalText: string): string => {
  if (isEnglishRoute() && forceEnglishTranslations[key as keyof typeof forceEnglishTranslations]) {
    return forceEnglishTranslations[key as keyof typeof forceEnglishTranslations];
  }
  return originalText;
};
