// Debug script to test i18n functionality
const fs = require('fs');

// Mock browser environment
global.window = { 
  location: { pathname: '/en' }
};

// Mock require function for ES modules (this is tricky)
const path = require('path');

// Read translation files directly
const deTranslations = JSON.parse(fs.readFileSync('src/i18n/locales/de.json', 'utf8'));
const enTranslations = JSON.parse(fs.readFileSync('src/i18n/locales/en.json', 'utf8'));

console.log('=== TRANSLATION DEBUG ===');
console.log('DE hero title:', deTranslations.ui?.hero?.title);
console.log('EN hero title:', enTranslations.ui?.hero?.title);

// Test the force English logic
function isEnglishRoute() {
  return global.window.location.pathname.startsWith('/en');
}

function getTranslationForLocale(key, locale) {
  const keys = key.split('.');
  let value = arguments[1] === 'en' ? enTranslations : deTranslations;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

function t(key, locale) {
  // FORCE ENGLISH for /en route
  if (isEnglishRoute()) {
    return getTranslationForLocale(key, 'en');
  }
  
  // Auto-detect locale
  let detectedLocale = locale;
  if (!detectedLocale) {
    detectedLocale = global.window.location.pathname.startsWith('/en') ? 'en' : 'de';
  }
  
  return getTranslationForLocale(key, detectedLocale);
}

console.log('\n=== FORCE ENGLISH TEST ===');
console.log('isEnglishRoute():', isEnglishRoute());
console.log('t("ui.hero.title"):', t('ui.hero.title'));
console.log('t("ui.hero.subtitle"):', t('ui.hero.subtitle'));
console.log('t("seo.title"):', t('seo.title'));
