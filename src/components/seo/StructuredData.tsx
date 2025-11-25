import React from 'react';

// Organization Schema for ReplAInow
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ReplAInow",
  "url": "https://replainow.com",
  "logo": "https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png",
  "description": "Der intelligenteste AI-Support für Shopify-Händler. 24/7 verfügbar, 100+ Sprachen, GDPR-konform mit GPT-5 Technologie.",
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
  "description": "AI-gestützter Customer Support für Shopify Stores mit GPT-5 Technologie. Automatisiert 60-80% aller Support-Tickets in 100+ Sprachen.",
  "url": "https://replainow.com",
  "author": {
    "@type": "Organization",
    "name": "ReplAInow",
    "url": "https://replainow.com"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "19",
    "highPrice": "399",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "offerCount": "4"
  },
  "featureList": [
    "GPT-5 AI Engine",
    "100+ Sprachen nativ",
    "3 Sekunden Antwortzeit", 
    "Unlimitierte AI-Antworten",
    "GDPR-konform",
    "24/7 Verfügbarkeit",
    "60-80% Automatisierung",
    "Shopify Integration"
  ],
  "screenshot": "https://replainow.com/dashboard-screenshots/Screenshot-1-livechat.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "28",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Product Schema (alternative to SoftwareApplication)
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ReplAInow AI Support für Shopify",
  "description": "Der intelligenteste AI-Support für Shopify-Händler mit GPT-5 Technologie. Automatisiert 60-80% aller Support-Tickets.",
  "brand": {
    "@type": "Brand",
    "name": "ReplAInow"
  },
  "category": "Software",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "19",
    "highPrice": "399",
    "priceCurrency": "USD",
    "offerCount": "4",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "28",
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