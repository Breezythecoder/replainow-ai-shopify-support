/**
 * TypeScript types for i18n translations
 * This ensures type safety across all locale files
 */

// Type definitions for translation structure
export interface TranslationCommon {
  navigation: {
    home: string;
    features: string;
    pricing: string;
    demo: string;
    contact: string;
  };
  footer: {
    links: {
      features: string;
      pricing: string;
      demo: string;
      contact: string;
    };
    legal: {
      privacy: string;
      terms: string;
      security: string;
      impressum: string;
      refund: string;
      cookies: string;
      uninstall: string;
    };
    contact: {
      email: string;
      location: string;
    };
    copyright: string;
  };
  contact?: {
    title: string;
    subtitle: string;
    [key: string]: any;
  };
}

export interface TranslationMarketing {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    [key: string]: any;
  };
  features: {
    title: string | { primary: string; secondary: string };
    subtitle: string | { highlight: string; continuation: string };
    [key: string]: any;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    [key: string]: any;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    demo: string;
  };
  faq?: {
    title: string;
    subtitle: string;
    [key: string]: any;
  };
}

export interface TranslationSEO {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  schema: {
    organization: {
      name: string;
      description: string;
      url: string;
      logo: string;
      telephone: string;
      foundingDate: string;
      founder: string;
    };
    softwareApplication: {
      name: string;
      description: string;
      url: string;
      applicationCategory: string;
      operatingSystem: string;
      price: string;
      priceCurrency: string;
      ratingValue: string;
      ratingCount: string;
    };
    website: {
      name: string;
      url: string;
      description: string;
      searchUrl: string;
    };
  };
}

export interface TranslationLegal {
  privacy: {
    title: string;
    lastUpdated: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
  };
  refund: {
    title: string;
    lastUpdated: string;
  };
  cookies: {
    title: string;
    lastUpdated: string;
  };
  security: {
    title: string;
    lastUpdated: string;
  };
  impressum: {
    title: string;
    company: string;
    location: string;
  };
}

/**
 * Complete translation structure for a locale
 */
export interface LocaleTranslations {
  common: TranslationCommon;
  marketing: TranslationMarketing;
  seo: TranslationSEO;
  legal: TranslationLegal;
}

/**
 * Translation key paths (for type-safe t() function)
 */
export type TranslationKey =
  | `common.${string}`
  | `marketing.${string}`
  | `seo.${string}`
  | `legal.${string}`;

