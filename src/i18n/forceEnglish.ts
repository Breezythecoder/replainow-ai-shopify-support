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
  // Removed duplicate keys - using newer versions below
  "ui.features.title.primary": "Why ReplAInow",
  "ui.features.title.secondary": "outperforms every competitor",
  "ui.features.subtitle.highlight": "Revolutionary GPT-4.1 technology",
  "ui.features.subtitle.continuation": "meets perfect Shopify integration",
  "ui.pricing.title": "Simple, transparent pricing",
  "ui.pricing.subtitle": "Start free, scale as you grow",
  "ui.pricing.headline.primary": "More support power",
  "ui.pricing.headline.secondary": "for less money",
  "ui.pricing.headline.tagline": "A traditional support agent easily costs €2,000 per month.",
  "ui.pricing.headline.detail": "ReplAInow starts at just €19/month and works 24/7 without breaks.",
  "ui.pricing.savings.headings.competitors": "Expensive competitors",
  "ui.pricing.savings.headings.competitorsSubtitle": "Basic features for premium pricing",
  "ui.pricing.savings.headings.ownPlan": "ReplAInow power",
  "ui.pricing.savings.headings.ownPlanSubtitle": "Premium features at fair pricing",
  "ui.mailAndChat.meta.titleMain": "AI-powered mail & live chat",
  "ui.mailAndChat.meta.titleHighlight": "24/7 fully integrated",
  "ui.mailAndChat.meta.subtitle": "Handle every customer request instantly in any channel. ReplAInow connects to your Shopify store and answers emails and live-chat messages in seconds – brand-consistent, context-aware and multilingual.",
  "ui.mailAndChat.meta.mailTitle": "Mail · AI Inbox",
  "ui.mailAndChat.meta.mailAlt": "ReplAInow Mail Inbox with AI-powered replies using Shopify data",
  "ui.mailAndChat.meta.chatTitle": "Live chat · Real-time",
  "ui.mailAndChat.meta.chatAlt": "ReplAInow live chat interface answering in real time on desktop and mobile",
  "ui.mailAndChat.features.mailPrimary.0": "AI replies to customer emails instantly",
  "ui.mailAndChat.features.mailPrimary.1": "Shopify data embedded automatically",
  "ui.mailAndChat.features.mailPrimary.2": "Answers stay on brand and multilingual",
  "ui.mailAndChat.features.mailSecondary.0": "Inbox zero every day",
  "ui.mailAndChat.features.mailSecondary.1": "Precise, Shopify-aware responses",
  "ui.mailAndChat.features.mailSecondary.2": "Save 15+ hours every week",
  "ui.mailAndChat.features.chatPrimary.0": "Fully automated chat coverage 24/7",
  "ui.mailAndChat.features.chatPrimary.1": "Real-time Shopify data for every reply",
  "ui.mailAndChat.features.chatPrimary.2": "Unified view of every active conversation",
  "ui.mailAndChat.features.chatSecondary.0": "AI auto-mode – take over or hand back to AI anytime",
  "ui.mailAndChat.features.chatSecondary.1": "Categorise, tag and prioritise effortlessly",
  "ui.mailAndChat.features.chatSecondary.2": "Multilingual responses in the customer’s language",
  "ui.mailAndChat.cta.install": "Try ReplAInow for free",
  "ui.mailAndChat.cta.installAria": "Try ReplAInow for free",
  "ui.mailAndChat.cta.demo": "See live demo",
  "ui.mailAndChat.cta.demoAria": "Watch live demo",
  "ui.mailAndChat.fallbackSubtitle": "AI mail and chat automation for Shopify merchants.",
  "ui.socialProof.title": "What real merchants say",
  "ui.socialProof.subtitle": "Join 280+ happy Shopify merchants",
  
  // Sticky Install Bar
  "ui.stickyInstallBar.title": "ReplAInow AI Helpdesk",
  "ui.stickyInstallBar.subtitle": "$19/month • 14 days free • 4.9★",
  "ui.stickyInstallBar.cta": "Install Now",
  
  // How It Works
  "ui.howItWorks.title": "Get started in minutes",
  "ui.howItWorks.subtitle": "Install, connect, send responses and automate with rules.",
  "ui.howItWorks.steps.0.title": "Install from Shopify App Store",
  "ui.howItWorks.steps.0.description": "One-click installation directly from the Shopify App Store. No technical setup required.",
  "ui.howItWorks.steps.1.title": "Connect your store data",
  "ui.howItWorks.steps.1.description": "ReplAInow automatically syncs your products, orders, and customer data for intelligent responses.",
  "ui.howItWorks.steps.2.title": "AI starts responding",
  "ui.howItWorks.steps.2.description": "Your AI assistant immediately begins handling customer inquiries with human-like precision.",
  
  // Live Demo
  "ui.liveDemo.badge": "⚡ INTERACTIVE DEMO",
  "ui.liveDemo.title.primary": "See",
  "ui.liveDemo.title.secondary": "ReplAInow in action",
  "ui.liveDemo.subtitle": "Watch how our AI handles real customer conversations with perfect accuracy and lightning speed.",
  "ui.liveDemo.controls.play": "Play",
  "ui.liveDemo.controls.pause": "Pause",
  "ui.liveDemo.controls.restart": "Restart",
  "ui.liveDemo.stats.responseTime": "Response Time",
  "ui.liveDemo.stats.accuracy": "Accuracy",
  "ui.liveDemo.stats.languages": "Languages",
  
  // Exit Intent
  "ui.exitIntent.title": "Wait! Don't miss your chance!",
  "ui.exitIntent.subtitle": "Get 30% off all plans now. Only available today!",
  "ui.exitIntent.cta": "🎯 SAVE 30% NOW",
  "ui.exitIntent.dismiss": "No, thanks",
  
  // FAQ
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
