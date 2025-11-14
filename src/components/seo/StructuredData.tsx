import React from 'react';

// Organization Schema for ReplAInow
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ReplAInow",
  "url": "https://replainow.com",
  "logo": "https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png",
  "description": "Der intelligenteste AI-Support für Shopify-Händler. 24/7 verfügbar, 32+ languages, GDPR-konform mit GPT-4.1 Technologie.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Ruben Calabrese",
    "jobTitle": "CEO & Gründer"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "support@replainow.com",
    "availableLanguage": ["German", "English", "Spanish", "French", "Portuguese", "Italian", "Dutch", "Chinese"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UAE",
    "addressLocality": "Dubai"
  },
  "sameAs": [
    "https://apps.shopify.com/replainow-ai-support"
  ]
};

// Software Application Schema
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ReplAInow AI Support",
  "applicationCategory": "CustomerSupport",
  "operatingSystem": "Web",
  "description": "AI-gestützter Customer Support für Shopify Stores mit GPT-4.1 Technologie. Automatisiert 24/7 customer queries in 32+ languages.",
  "url": "https://replainow.com",
  "author": {
    "@type": "Organization",
    "name": "ReplAInow",
    "url": "https://replainow.com"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Plan",
      "description": "Perfekt für kleine bis mittlere Shopify Stores",
      "price": "19",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    {
      "@type": "Offer",
      "name": "Professional Plan", 
      "description": "Für wachsende Stores mit erweiterten Features",
      "price": "39",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    {
      "@type": "Offer",
      "name": "Enterprise Plan",
      "description": "Für große Stores mit unlimitierter Skalierung",
      "price": "79",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    }
  ],
  "featureList": [
    "GPT-4.1 AI Engine",
    "32+ languages nativ",
    "3 seconds Antwortzeit", 
    "Unlimitierte AI-Antworten",
    "GDPR-konform",
    "24/7 Verfügbarkeit",
    "Shopify Integration",
    "Live Chat Demo"
  ],
  "screenshot": "https://replainow.com/assets/hero-ai-bg.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "280",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Product Schema (alternative to SoftwareApplication)
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ReplAInow AI Support für Shopify",
  "description": "Der intelligenteste AI-Support für Shopify-Händler mit GPT-4.1 Technologie",
  "brand": {
    "@type": "Brand",
    "name": "ReplAInow"
  },
  "category": "Software",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "19",
    "highPrice": "79",
    "priceCurrency": "EUR",
    "offerCount": "3",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "280",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// FAQ Schema Generator
export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// WebSite Schema with SearchAction
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ReplAInow",
  "url": "https://replainow.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://replainow.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// HowTo Schema Generator
export const generateHowToSchema = (title: string, steps: Array<{name: string; text: string}>) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": title,
  "description": `Anleitung: ${title}`,
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
});

// Article Schema for blog posts
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "ReplAInow",
    "logo": {
      "@type": "ImageObject",
      "url": "https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png"
    }
  },
  "url": article.url,
  "image": article.image || "https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png"
});