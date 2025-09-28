// Centralized site statistics and claims
// All numbers and claims should come from here to avoid inconsistencies

export const SITE_STATS = {
  // Store count (previously 5000+, now 280+)
  STORE_COUNT: "280+",
  
  // Response time
  RESPONSE_TIME: "3 Sekunden",
  
  // Languages supported
  LANGUAGES_COUNT: "32+",
  LANGUAGES_LIST: ["German", "English", "Spanish", "French", "Italian", "Portuguese", "Dutch", "Chinese"],
  
  // Cost savings
  COST_SAVINGS: "75%",
  
  // Rating
  RATING_VALUE: "4.9",
  RATING_COUNT: "280",
  
  // Pricing
  PRICE: "19",
  CURRENCY: "EUR",
  
  // Company info
  FOUNDING_YEAR: "2024",
  FOUNDER: "Ruben Calabrese",
  TELEPHONE: "+49-30-123-456-789",
  
  // Features
  FEATURES: {
    RESPONSE_TIME: "3 Sekunden",
    LANGUAGES: "32+ Sprachen",
    GDPR_COMPLIANT: "DSGVO-konform",
    COST_SAVINGS: "75% Kosteneinsparung",
    AI_TECHNOLOGY: "GPT-4.1"
  }
} as const;

// Export individual constants for backward compatibility
export const STORE_COUNT = SITE_STATS.STORE_COUNT;
export const RESPONSE_TIME = SITE_STATS.RESPONSE_TIME;
export const LANGUAGES_COUNT = SITE_STATS.LANGUAGES_COUNT;
export const COST_SAVINGS = SITE_STATS.COST_SAVINGS;
export const RATING_VALUE = SITE_STATS.RATING_VALUE;
export const RATING_COUNT = SITE_STATS.RATING_COUNT;
export const PRICE = SITE_STATS.PRICE;
export const CURRENCY = SITE_STATS.CURRENCY;

// Helper function to get localized stats
export const getLocalizedStats = (locale: 'de' | 'en' = 'de') => {
  if (locale === 'en') {
    return {
      ...SITE_STATS,
      RESPONSE_TIME: "3 seconds",
      LANGUAGES_COUNT: "32+",
      COST_SAVINGS: "75%",
      FEATURES: {
        RESPONSE_TIME: "3 seconds",
        LANGUAGES: "32+ languages",
        GDPR_COMPLIANT: "GDPR-compliant",
        COST_SAVINGS: "75% cost savings",
        AI_TECHNOLOGY: "GPT-4.1"
      }
    };
  }
  return SITE_STATS;
};