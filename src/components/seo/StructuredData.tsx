// Structured Data Templates für ReplAInow SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ReplAInow",
  "alternateName": "ReplAI Now",
  "url": "https://replainow.com",
  "logo": "https://replainow.com/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png",
  "description": "KI-gestützter Kundensupport für Shopify: automatisierte Antworten mit GPT-4, sichere Webhooks, DSGVO-konform.",
  "foundingDate": "2023",
  "industry": "Software",
  "numberOfEmployees": "2-10",
  "location": {
    "@type": "Place",
    "name": "Deutschland"
  },
  "sameAs": [
    "https://apps.shopify.com/replainow-ai-support",
    "https://twitter.com/replainow",
    "https://linkedin.com/company/replainow"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "support@replainow.com",
    "availableLanguage": ["German", "English"]
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ReplAInow AI Helpdesk",
  "operatingSystem": "Web-based",
  "applicationCategory": "BusinessApplication",
  "description": "Automatisiere deinen Shopify Kundensupport mit GPT-4 AI. Schneller, günstiger, mehrsprachig - 24/7 verfügbar.",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "19",
    "highPrice": "199",
    "priceCurrency": "USD",
    "offerCount": "4"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "PrimeVision Group LLC"
  },
  "downloadUrl": "https://apps.shopify.com/replainow-ai-support",
  "featureList": [
    "GPT-4 AI Antworten",
    "32+ Sprachen Support",
    "Echtzeit Shopify Integration",
    "DSGVO konform",
    "24/7 Automatisierung",
    "Live Chat & E-Mail"
  ]
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist ReplAInow AI Helpdesk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ReplAInow ist eine AI-gestützte Kundensupport-Lösung für Shopify, die automatisch auf Kundenanfragen antwortet, Produktempfehlungen gibt und in über 32 Sprachen verfügbar ist."
      }
    },
    {
      "@type": "Question", 
      "name": "Wie viel kostet ReplAInow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ReplAInow startet bei $19/Monat für bis zu 300 AI-Antworten. Es gibt eine 14-tägige kostenlose Testphase ohne Setup-Gebühren."
      }
    },
    {
      "@type": "Question",
      "name": "Ist ReplAInow DSGVO-konform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, ReplAInow ist vollständig DSGVO-konform und erfüllt alle europäischen Datenschutzbestimmungen für den sicheren Umgang mit Kundendaten."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Sprachen unterstützt ReplAInow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ReplAInow unterstützt über 32 Sprachen nativ, einschließlich Deutsch, Englisch, Französisch, Spanisch, Italienisch und viele weitere europäische und internationale Sprachen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie schnell antwortet die AI?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "ReplAInow AI antwortet durchschnittlich in 3 Sekunden auf Kundenanfragen - 24/7 ohne Wartezeiten oder Verzögerungen."
      }
    }
  ]
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Wie installiert man ReplAInow AI Helpdesk in Shopify",
  "description": "Schritt-für-Schritt Anleitung zur Installation von ReplAInow AI Helpdesk in deinem Shopify Store",
  "totalTime": "PT2M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "19"
  },
  "step": [
    {
      "@type": "HowToStep",
      "name": "Shopify App Store öffnen",
      "text": "Gehe zum Shopify App Store und suche nach 'ReplAInow'",
      "url": "https://apps.shopify.com/replainow-ai-support"
    },
    {
      "@type": "HowToStep", 
      "name": "App installieren",
      "text": "Klicke auf 'App hinzufügen' und bestätige die Installation in deinem Shopify Admin"
    },
    {
      "@type": "HowToStep",
      "name": "Automatische Konfiguration",
      "text": "ReplAInow synchronisiert automatisch alle deine Shopify-Daten (Produkte, Policies, etc.)"
    },
    {
      "@type": "HowToStep",
      "name": "AI Support aktivieren", 
      "text": "Aktiviere den AI Support für E-Mail und Live Chat - fertig in unter 60 Sekunden"
    }
  ]
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "SoftwareApplication",
    "name": "ReplAInow AI Helpdesk"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Lisa M."
  },
  "reviewBody": "ReplAInow hat unseren Support revolutioniert. Die AI versteht unsere Produkte besser als manche Mitarbeiter und spart uns 15 Stunden pro Woche!",
  "publisher": {
    "@type": "Organization", 
    "name": "BeautyStore"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});