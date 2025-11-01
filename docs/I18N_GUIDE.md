# Internationalization (i18n) Guide

## Overview

ReplAInow uses a scalable, enterprise-grade internationalization system designed to support 30+ languages. This guide explains how to work with translations and add new languages.

## Current Supported Languages

- **German (de)** - Default language
- **English (en)**
- **Spanish (es)**
- **French (fr)**

## Translation File Structure

Each language has 4 JSON files organized by content type:

```
src/i18n/locales/{locale}/
├── common.json      # Navigation, footer, contact forms
├── marketing.json   # Hero, features, pricing, testimonials
├── seo.json        # Meta tags, Open Graph, Schema.org
└── legal.json      # Privacy policy, terms, legal pages
```

### Why This Structure?

- **Modularity**: Easy to update specific content areas
- **Maintainability**: Clear separation of concerns
- **Performance**: Can lazy-load specific namespaces
- **Collaboration**: Different teams can work on different files

## How to Add a New Language

### Step 1: Update Configuration

Edit `src/i18n/config.ts`:

```typescript
export const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr', 'it'] as const;
//                                                          ^^^^ Add new locale
```

Add locale metadata:

```typescript
export const LOCALE_METADATA: Record<SupportedLocale, {...}> = {
  // ... existing locales
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    direction: 'ltr',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY'
  }
};
```

### Step 2: Create Translation Files

Create directory:
```bash
mkdir -p src/i18n/locales/it
```

Create 4 JSON files by copying from English:
```bash
cp src/i18n/locales/en/common.json src/i18n/locales/it/
cp src/i18n/locales/en/marketing.json src/i18n/locales/it/
cp src/i18n/locales/en/seo.json src/i18n/locales/it/
cp src/i18n/locales/en/legal.json src/i18n/locales/it/
```

### Step 3: Translate Content

Translate the JSON files:

```json
// src/i18n/locales/it/common.json
{
  "navigation": {
    "home": "Home",           // → "Inizio"
    "features": "Features",   // → "Caratteristiche"
    "pricing": "Pricing",     // → "Prezzi"
    "demo": "Live Demo",      // → "Demo dal Vivo"
    "contact": "Contact"      // → "Contatto"
  },
  // ... rest of translations
}
```

**Translation Tips**:
- Maintain the same JSON structure
- Keep placeholder syntax: `{{count}}`, `{{percentage}}`
- Preserve special characters and formatting
- Test with actual content to ensure proper display

### Step 4: Update i18n Index

Edit `src/i18n/index.ts` to import new locale:

```typescript
import itCommon from './locales/it/common.json';
import itMarketing from './locales/it/marketing.json';
import itSEO from './locales/it/seo.json';
import itLegal from './locales/it/legal.json';

export const translations: Record<SupportedLocale, LocaleTranslations> = {
  // ... existing locales
  it: {
    common: itCommon,
    marketing: itMarketing,
    seo: itSEO,
    legal: itLegal,
  },
};
```

### Step 5: Add Route

Edit `src/App.tsx` to add the new route:

```typescript
<Route path="/it" element={<Index />} />
```

### Step 6: Update Build Scripts

Edit `scripts/build/make-locale-html.mjs` to include new locale in generation.

### Step 7: Generate Sitemap Entry

Run:
```bash
npm run seo:generate
```

This will automatically include the new language in sitemap.

### Step 8: Test

```bash
# Test locale loading
npm run dev

# Visit http://localhost:5173/it

# Run tests
npm run test:e2e

# Build and verify
npm run build
```

## Translation Best Practices

### 1. Consistency

- Use the same terminology across all pages
- Maintain brand voice in each language
- Keep formatting consistent (dates, numbers, currency)

### 2. Context

- Provide context for translators (comments in JSON)
- Include examples of placeholder usage
- Document special formatting requirements

### 3. SEO Optimization

- Translate meta descriptions naturally (not word-for-word)
- Use locale-appropriate keywords
- Maintain optimal meta description length (150-160 chars)

### 4. Cultural Adaptation

- Adapt examples to local context
- Use appropriate currency symbols
- Adjust date/time formats
- Consider cultural sensitivities

## Working with Translations

### Using Translations in Components

```typescript
import { useTranslation } from '@/i18n';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.navigation.home')}</h1>
      <p>{t('marketing.hero.description')}</p>
    </div>
  );
}
```

### Translation Keys

Format: `namespace.path.to.key`

Examples:
- `common.navigation.home` → "Home"
- `marketing.hero.title` → "AI Helpdesk for Shopify."
- `seo.title` → "ReplAInow – AI Shopify Helpdesk"
- `legal.privacy.title` → "Privacy Policy"

### Dynamic Values

Use placeholder syntax:

```json
{
  "hero": {
    "languages": "{{count}} Languages",
    "costSavings": "{{percentage}} Cost Savings"
  }
}
```

Usage:
```typescript
t('marketing.hero.languages').replace('{{count}}', '32+')
```

## Translation Validation

### Automated Checks

```bash
# Check for missing translations
npm run dev:locale-report

# Verify translation completeness
npm run qa:all
```

### Manual Checks

1. **Visual Review**: Load each locale and verify display
2. **Link Testing**: Ensure all links work in each language
3. **Form Testing**: Test forms in each language
4. **SEO Validation**: Check meta tags for each locale

## Translation Management Tools

### Recommended Platforms

For large-scale translation management, consider:

- **Crowdin** - Collaborative translation platform
- **Lokalise** - Developer-friendly translation management
- **POEditor** - Simple, effective translation tool

### Integration Steps

1. Export JSON files to translation platform
2. Translators work on platform
3. Import translated JSON back
4. Validate and commit

## Common Issues

### Issue: Missing Translation

**Symptom**: Key shown instead of translated text

**Solution**: 
```typescript
// Check if key exists in JSON
// Add missing key to locale file
{
  "navigation": {
    "newKey": "Translated value"
  }
}
```

### Issue: Incorrect Locale Detected

**Symptom**: Wrong language shows for URL

**Solution**: Check `src/i18n/locale.ts` path detection logic

### Issue: Build Fails for New Locale

**Symptom**: Build error when adding locale

**Solution**: Ensure all 4 JSON files exist and are valid JSON

## Locale File Templates

### common.json Template

```json
{
  "navigation": {
    "home": "Home",
    "features": "Features",
    "pricing": "Pricing",
    "demo": "Live Demo",
    "contact": "Contact"
  },
  "footer": {
    "links": { ... },
    "legal": { ... },
    "contact": { ... },
    "copyright": "© 2024 ReplAInow. All rights reserved."
  }
}
```

### marketing.json Template

```json
{
  "hero": {
    "title": "AI Helpdesk for Shopify.",
    "subtitle": "Responds in 3 seconds",
    "description": "...",
    "cta": "Try Free Now"
  },
  "features": { ... },
  "pricing": { ... },
  "testimonials": { ... }
}
```

### seo.json Template

```json
{
  "title": "Page Title",
  "description": "Meta description",
  "ogTitle": "Open Graph title",
  "ogDescription": "OG description",
  "schema": {
    "organization": { ... },
    "softwareApplication": { ... }
  }
}
```

### legal.json Template

```json
{
  "privacy": {
    "title": "Privacy Policy",
    "lastUpdated": "Last updated: 2024"
  },
  "terms": { ... },
  "refund": { ... }
}
```

## Roadmap: 30+ Languages

### Priority 1 (Q1 2025)
- Italian (it)
- Dutch (nl)
- Portuguese (pt)

### Priority 2 (Q2 2025)
- Chinese (zh)
- Japanese (ja)
- Korean (ko)

### Priority 3 (Q3 2025)
- Arabic (ar)
- Russian (ru)
- Polish (pl)

### Long-term
- Swedish, Danish, Norwegian
- Czech, Hungarian, Romanian
- Turkish, Greek, Hebrew
- Thai, Vietnamese, Indonesian
- Hindi, Bengali, Ukrainian

## Support

For translation questions or issues:

1. Check this guide
2. Review existing locale files for examples
3. Run validation scripts
4. Contact development team

---

**Last Updated**: November 2024
**Maintained by**: ReplAInow i18n Team

