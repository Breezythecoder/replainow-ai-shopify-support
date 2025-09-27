// SEO Meta Configuration für alle Sprachen und Seiten
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface LanguageSEO {
  [key: string]: SEOConfig;
}

// Basis SEO Konfiguration für die Hauptseite in allen Sprachen
export const homeSEO: LanguageSEO = {
  de: {
    title: "ReplAInow - AI Shopify Helpdesk | 3 Sek Antwortzeit | 14 Tage kostenlos",
    description: "Automatisiere deinen Shopify Kundensupport mit GPT-4 AI. ✅ 3 Sek Antwortzeit ✅ 32+ Sprachen ✅ DSGVO-konform ✅ 75% günstiger als Gorgias & Zendesk. Jetzt 14 Tage kostenlos testen!",
    keywords: [
      "Shopify Helpdesk", "AI Kundensupport", "GPT-4 Shopify", "Automatischer Kundenservice",
      "DSGVO konform", "Gorgias Alternative", "Zendesk Alternative", "Intercom Alternative",
      "Shopify Chat Bot", "E-Commerce Support", "Künstliche Intelligenz", "Customer Service Automation"
    ]
  },
  en: {
    title: "ReplAInow - AI Shopify Helpdesk | 3sec Response | 14 Days Free Trial",
    description: "Automate your Shopify customer support with GPT-4 AI. ✅ 3sec response time ✅ 32+ languages ✅ GDPR compliant ✅ 75% cheaper than Gorgias & Zendesk. Try 14 days free!",
    keywords: [
      "Shopify helpdesk", "AI customer support", "GPT-4 Shopify", "automated customer service",
      "GDPR compliant", "Gorgias alternative", "Zendesk alternative", "Intercom alternative",
      "Shopify chatbot", "e-commerce support", "artificial intelligence", "customer service automation"
    ]
  },
  es: {
    title: "ReplAInow - Helpdesk IA Shopify | 3seg Respuesta | Prueba 14 Días Gratis",
    description: "Automatiza tu soporte al cliente de Shopify con GPT-4 IA. ✅ 3seg tiempo respuesta ✅ 32+ idiomas ✅ Cumple RGPD ✅ 75% más barato que Gorgias y Zendesk. ¡Prueba 14 días gratis!",
    keywords: [
      "Shopify helpdesk", "soporte cliente IA", "GPT-4 Shopify", "servicio cliente automatizado",
      "cumple RGPD", "alternativa Gorgias", "alternativa Zendesk", "alternativa Intercom",
      "chatbot Shopify", "soporte e-commerce", "inteligencia artificial", "automatización servicio cliente"
    ]
  },
  fr: {
    title: "ReplAInow - Helpdesk IA Shopify | 3sec Réponse | Essai 14 Jours Gratuit",
    description: "Automatisez votre support client Shopify avec GPT-4 IA. ✅ 3sec temps réponse ✅ 32+ langues ✅ Conforme RGPD ✅ 75% moins cher que Gorgias et Zendesk. Essai 14 jours gratuit!",
    keywords: [
      "Shopify helpdesk", "support client IA", "GPT-4 Shopify", "service client automatisé",
      "conforme RGPD", "alternative Gorgias", "alternative Zendesk", "alternative Intercom",
      "chatbot Shopify", "support e-commerce", "intelligence artificielle", "automatisation service client"
    ]
  },
  it: {
    title: "ReplAInow - Helpdesk IA Shopify | 3sec Risposta | Prova 14 Giorni Gratis",
    description: "Automatizza il supporto clienti Shopify con GPT-4 AI. ✅ 3sec tempo risposta ✅ 32+ lingue ✅ Conforme GDPR ✅ 75% più economico di Gorgias e Zendesk. Prova 14 giorni gratis!",
    keywords: [
      "Shopify helpdesk", "supporto clienti IA", "GPT-4 Shopify", "servizio clienti automatizzato",
      "conforme GDPR", "alternativa Gorgias", "alternativa Zendesk", "alternativa Intercom",
      "chatbot Shopify", "supporto e-commerce", "intelligenza artificiale", "automazione servizio clienti"
    ]
  },
  nl: {
    title: "ReplAInow - AI Shopify Helpdesk | 3sec Reactie | 14 Dagen Gratis Proberen",
    description: "Automatiseer je Shopify klantenservice met GPT-4 AI. ✅ 3sec reactietijd ✅ 32+ talen ✅ GDPR conform ✅ 75% goedkoper dan Gorgias en Zendesk. Probeer 14 dagen gratis!",
    keywords: [
      "Shopify helpdesk", "AI klantenservice", "GPT-4 Shopify", "geautomatiseerde klantenservice",
      "GDPR conform", "Gorgias alternatief", "Zendesk alternatief", "Intercom alternatief",
      "Shopify chatbot", "e-commerce ondersteuning", "kunstmatige intelligentie", "klantenservice automatisering"
    ]
  },
  pt: {
    title: "ReplAInow - Helpdesk IA Shopify | 3seg Resposta | Teste 14 Dias Grátis",
    description: "Automatize seu suporte ao cliente Shopify com GPT-4 IA. ✅ 3seg tempo resposta ✅ 32+ idiomas ✅ Conforme LGPD ✅ 75% mais barato que Gorgias e Zendesk. Teste 14 dias grátis!",
    keywords: [
      "Shopify helpdesk", "suporte cliente IA", "GPT-4 Shopify", "atendimento automatizado",
      "conforme LGPD", "alternativa Gorgias", "alternativa Zendesk", "alternativa Intercom",
      "chatbot Shopify", "suporte e-commerce", "inteligência artificial", "automação atendimento"
    ]
  },
  zh: {
    title: "ReplAInow - AI Shopify客服 | 3秒响应 | 14天免费试用",
    description: "用GPT-4 AI自动化您的Shopify客户支持。✅ 3秒响应时间 ✅ 32+种语言 ✅ 符合GDPR ✅ 比Gorgias和Zendesk便宜75%。免费试用14天！",
    keywords: [
      "Shopify客服", "AI客户支持", "GPT-4 Shopify", "自动化客服",
      "符合GDPR", "Gorgias替代", "Zendesk替代", "Intercom替代",
      "Shopify聊天机器人", "电商支持", "人工智能", "客服自动化"
    ]
  }
};

// SEO für weitere Seiten
export const pagesSEO: { [pageName: string]: LanguageSEO } = {
  gorgias: {
    de: {
      title: "Gorgias Alternative - ReplAInow | 75% günstiger, 60x schneller | GPT-4 AI",
      description: "Entdecke warum ReplAInow die überlegene Gorgias Alternative ist: ✅ 75% günstiger ✅ 60x schneller ✅ GPT-4 AI ✅ 32+ Sprachen. Direkter Vergleich + kostenloser Test.",
      keywords: [
        "Gorgias Alternative", "Shopify Helpdesk", "GPT-4 Kundensupport", "günstiger als Gorgias",
        "AI Customer Service", "Shopify Chat", "Automatischer Support", "DSGVO konform"
      ]
    },
    en: {
      title: "Gorgias Alternative - ReplAInow | 75% Cheaper, 60x Faster | GPT-4 AI",
      description: "Discover why ReplAInow is the superior Gorgias alternative: ✅ 75% cheaper ✅ 60x faster ✅ GPT-4 AI ✅ 32+ languages. Direct comparison + free trial.",
      keywords: [
        "Gorgias alternative", "Shopify helpdesk", "GPT-4 customer support", "cheaper than Gorgias",
        "AI customer service", "Shopify chat", "automated support", "GDPR compliant"
      ]
    }
  },
  privacy: {
    de: {
      title: "Datenschutzerklärung - ReplAInow | DSGVO-konforme Datenverarbeitung",
      description: "Erfahre, wie ReplAInow Händlerdaten sammelt, verwendet und schützt. DSGVO-konforme Datenschutzerklärung mit Shopify API Nutzung erklärt.",
      keywords: ["Datenschutz", "DSGVO", "Privacy Policy", "Datenverarbeitung", "Shopify API", "Datensicherheit"]
    },
    en: {
      title: "Privacy Policy - ReplAInow | GDPR-Compliant Data Processing",
      description: "Learn how ReplAInow collects, uses, stores, and protects merchant data. GDPR-compliant privacy policy with Shopify API usage explained.",
      keywords: ["privacy policy", "GDPR", "data protection", "data processing", "Shopify API", "data security"]
    }
  },
  terms: {
    de: {
      title: "Nutzungsbedingungen - ReplAInow | AGB für AI Shopify Helpdesk",
      description: "Lies die Nutzungsbedingungen für ReplAInow: Account, Zahlungen, zulässige Nutzung, Haftung, Kündigung und geltendes Recht (UAE).",
      keywords: ["Nutzungsbedingungen", "AGB", "Terms of Service", "Shopify App", "AI Helpdesk"]
    },
    en: {
      title: "Terms of Service - ReplAInow | Terms for AI Shopify Helpdesk",
      description: "Read the Terms of Service for ReplAInow, covering account, payments, acceptable use, liability, termination, and governing law (UAE).",
      keywords: ["terms of service", "terms and conditions", "Shopify app", "AI helpdesk", "legal"]
    }
  },
  impressum: {
    de: {
      title: "Impressum - ReplAInow | Rechtliche Angaben PrimeVision Group LLC",
      description: "Impressum der PrimeVision Group LLC (ReplAInow): Anschrift, Kontakt, Verantwortlicher gem. § 55 Abs. 2 RStV, Tax Registration Number.",
      keywords: ["Impressum", "PrimeVision Group LLC", "Kontakt", "rechtliche Angaben", "Verantwortlicher"]
    }
  },
  security: {
    de: {
      title: "Sicherheitsstatement - ReplAInow | Verschlüsselung & Datenschutz",
      description: "Unser Engagement für Sicherheit: Verschlüsselung, HMAC Webhooks, RBAC, Monitoring, Datenstandort und Incident Response.",
      keywords: ["Sicherheit", "Verschlüsselung", "Datenschutz", "HMAC", "Monitoring", "Security"]
    },
    en: {
      title: "Security Statement - ReplAInow | Encryption & Data Protection",
      description: "Our commitment to security: encryption in transit and at rest, HMAC webhooks, RBAC, monitoring, data location, and incident response.",
      keywords: ["security", "encryption", "data protection", "HMAC", "monitoring", "cybersecurity"]
    }
  },
  uninstall: {
    de: {
      title: "Deinstallation - ReplAInow | App entfernen & Daten löschen",
      description: "So deinstallierst du ReplAInow aus deinem Shopify Store. Einfache Schritte und Datenlöschung mit DSGVO-Optionen.",
      keywords: ["Deinstallation", "App entfernen", "Daten löschen", "Shopify App", "DSGVO"]
    },
    en: {
      title: "Uninstall Instructions - ReplAInow | Remove App & Delete Data",
      description: "How to uninstall ReplAInow from your Shopify store. Simple steps and data deletion policy with GDPR options.",
      keywords: ["uninstall", "remove app", "delete data", "Shopify app", "GDPR"]
    }
  }
};

// Standard hreflang URLs für mehrsprachige Seiten
export const getHreflangUrls = (basePath: string = "") => {
  const baseUrl = "https://replainow.com";
  return {
    "de": `${baseUrl}${basePath}`,
    "en": `${baseUrl}/en${basePath}`,
    "es": `${baseUrl}/es${basePath}`,
    "fr": `${baseUrl}/fr${basePath}`,
    "it": `${baseUrl}/it${basePath}`,
    "nl": `${baseUrl}/nl${basePath}`,
    "pt": `${baseUrl}/pt${basePath}`,
    "zh": `${baseUrl}/zh${basePath}`,
    "x-default": `${baseUrl}${basePath}`
  };
};

// Standard OG Image für alle Seiten
export const defaultOGImage = "/assets/193e41bc-af60-4d70-947d-659804d66b83.png";