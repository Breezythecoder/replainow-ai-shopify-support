# 🌍 I18N STRATEGY - COMPLETE GUIDE

**Last Updated:** November 15, 2025  
**Current Languages:** 4 (DE, EN, ES, FR)  
**Target Languages:** 41 (Global Coverage)  
**Status:** Foundation Complete, Ready to Scale

---

## 📋 TABLE OF CONTENTS

1. [System Overview](#system-overview)
2. [Current Architecture](#current-architecture)
3. [File Structure](#file-structure)
4. [How Translations Work](#how-translations-work)
5. [Adding New Languages](#adding-new-languages)
6. [Content Namespaces](#content-namespaces)
7. [Translation Guidelines](#translation-guidelines)
8. [Common Issues & Solutions](#common-issues--solutions)
9. [Future: 41 Languages Plan](#future-41-languages-plan)

---

## 🎯 SYSTEM OVERVIEW

### What is Our i18n System?
A custom-built, JSON-based internationalization system that:
- Supports **4 active languages** (DE, EN, ES, FR)
- Ready to scale to **41 languages**
- Uses **URL-based language detection** (`/`, `/en`, `/es`, `/fr`)
- Separate **JSON files per namespace** (common, marketing, seo, legal, content)
- **Type-safe** with TypeScript interfaces

### Why Custom (Not react-i18next)?
- **Full Control:** Exactly what we need, no bloat
- **Performance:** No runtime overhead
- **Scalability:** Easy to add 41 languages
- **Simplicity:** JSON files, no complex config
- **SEO-Friendly:** URL-based, clear structure

---

## 🏗️ CURRENT ARCHITECTURE

### Language Detection Flow:
```
User visits URL
  ↓
LocaleContext reads pathname
  ↓
getLocaleFromPath() extracts language
  ↓
"/en/anything" → "en"
"/es" → "es"  
"/fr/foo" → "fr"
"/" or "/anything" → "de" (default)
  ↓
Sets locale in React Context
  ↓
All components use useTranslation() hook
  ↓
Translation loaded from src/i18n/locales/{locale}/{namespace}.json
```

### URL Structure:
```
German (Default):
  /                             → Homepage DE
  /privacy                      → Privacy DE
  /shopify-kundensupport-*      → Content DE

English:
  /en                           → Homepage EN
  /en/privacy                   → Privacy EN (planned)
  /en/shopify-customer-support-*→ Content EN (planned)

Spanish:
  /es                           → Homepage ES
  /es/privacy                   → Privacy ES (planned)

French:
  /fr                           → Homepage FR
  /fr/privacy                   → Privacy FR (planned)
```

**Current Status:**
- Homepage: ✅ Translated (DE, EN, ES, FR)
- Legal Pages: ❌ Only German (Helmet-based, no i18n yet)
- Content Pages: ✅ i18n structure ready (DE complete, EN complete, ES/FR fallbacks)

---

## 📁 FILE STRUCTURE

```
src/i18n/
├── index.ts                    # Main i18n module, exports t() and getTranslation()
├── types.ts                    # TypeScript interfaces
├── config.ts                   # Supported locales config
├── locale.ts                   # Locale detection functions
├── LocaleContext.tsx           # React Context for locale state
├── forceEnglish.ts             # Force English for /en routes
│
└── locales/
    ├── de/
    │   ├── common.json         # Common UI strings (nav, footer, buttons)
    │   ├── marketing.json      # Homepage content (hero, features, pricing, faq)
    │   ├── seo.json            # SEO meta tags, descriptions
    │   ├── legal.json          # Legal pages translations (currently unused)
    │   └── content.json        # Content pages (3 SEO articles) 🆕
    │
    ├── en/
    │   ├── common.json
    │   ├── marketing.json
    │   ├── seo.json
    │   ├── legal.json
    │   └── content.json        # 🆕
    │
    ├── es/
    │   ├── common.json
    │   ├── marketing.json
    │   ├── seo.json
    │   ├── legal.json
    │   └── content.json        # 🆕
    │
    └── fr/
        ├── common.json
        ├── marketing.json
        ├── seo.json
        ├── legal.json
        └── content.json        # 🆕
```

### File Sizes:
- `common.json`: ~5-10 KB (UI strings)
- `marketing.json`: ~50-80 KB (homepage content!)
- `seo.json`: ~15-25 KB (meta tags, structured data)
- `legal.json`: ~10-15 KB (legal page translations)
- `content.json`: ~100-200 KB (3 SEO articles!)

---

## 🔧 HOW TRANSLATIONS WORK

### 1. Translation Functions

#### `t(key, locale?, options?)` - For Strings
```typescript
// Usage:
const { t } = useTranslation();
const title = t('common.navigation.home');
// Returns: "Startseite" (in German)
```

**How it works:**
1. Splits key by `.` (e.g., `common.navigation.home`)
2. First part = namespace (`common`)
3. Navigates nested object: `translations[locale].common.navigation.home`
4. Returns string value

**Limitations:**
- Only returns strings
- Doesn't work for arrays/objects (old limitation)

#### `getTranslation(key, locale?)` - For Objects/Arrays 🆕
```typescript
// Usage:
const { getTranslation } = useTranslation();
const stats = getTranslation('content.automatisierung.hero.stats');
// Returns: Array of stat objects
```

**How it works:**
1. Splits key by `.`
2. Navigates nested structure
3. Returns ANY type (string, object, array)
4. Used for complex content pages

**Why Needed:**
- Content pages have complex structures (arrays of objects)
- `t()` only returned strings (breaking .map())
- `getTranslation()` returns actual data structure

#### Helper Functions in Components:
```typescript
const getArray = (key: string): any[] => {
  const result = getTranslation(key);
  return Array.isArray(result) ? result : [];
};

const getObject = (key: string): Record<string, any> => {
  const result = getTranslation(key);
  return typeof result === 'object' && !Array.isArray(result) ? result : {};
};
```

**Why:** Defensive coding - prevents crashes if translation missing

### 2. Translation Key Structure

#### Namespaces:
```
common.*          → UI strings (nav, footer, buttons, labels)
marketing.*       → Homepage content (hero, features, testimonials)
seo.*             → SEO meta tags, structured data
legal.*           → Legal pages (currently unused)
content.*         → Content pages (SEO articles)
```

#### Example Keys:
```typescript
// Simple string:
t('common.navigation.home')
→ "Startseite"

// Nested object:
t('marketing.hero.title')
→ "Ihr 24/7 AI-Mitarbeiter für Shopify"

// Complex array (use getTranslation!):
getTranslation('content.automatisierung.hero.stats')
→ [
    { number: "60-80%", label: "Automatisierung" },
    { number: "3 Sek", label: "Antwortzeit" },
    ...
  ]
```

### 3. Language Detection

#### URL-Based Detection:
```typescript
// src/i18n/locale.ts
export function getLocaleFromPath(pathname?: string): Locale {
  const clean = pathname.replace(/\/+$/, ''); // Remove trailing slash
  const seg1 = clean.split('/')[1] || ''; // Get first segment
  
  const localeMap = {
    'en': 'en',
    'es': 'es',
    'fr': 'fr'
    // Add more as needed
  };
  
  return localeMap[seg1.toLowerCase()] || 'de'; // Default to German
}
```

**Examples:**
- `/` → `de`
- `/privacy` → `de`
- `/en` → `en`
- `/en/privacy` → `en` (planned)
- `/es/anything` → `es`
- `/unknown` → `de` (fallback)

#### LocaleContext:
```typescript
// src/i18n/LocaleContext.tsx
export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('de');
  
  useEffect(() => {
    const pathLocale = getLocaleFromPath(window.location.pathname);
    setLocale(pathLocale);
  }, []);
  
  return <LocaleContext.Provider value={{ locale, setLocale }}>
    {children}
  </LocaleContext.Provider>
};
```

**Used in:** `src/App.tsx` - wraps entire app

---

## 🆕 ADDING NEW LANGUAGES

### Step-by-Step Guide:

#### 1. Add Language to Config
```typescript
// src/i18n/config.ts
export const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr', 'it'] as const;
//                                                          ↑ ADD HERE
```

#### 2. Add to Locale Detection
```typescript
// src/i18n/locale.ts
const localeMap = {
  'en': 'en',
  'es': 'es',
  'fr': 'fr',
  'it': 'it'  // ADD HERE
};
```

#### 3. Create Translation Files
```bash
mkdir src/i18n/locales/it
cp src/i18n/locales/en/*.json src/i18n/locales/it/
```

#### 4. Translate JSON Files
```json
// src/i18n/locales/it/common.json
{
  "navigation": {
    "home": "Home",           // Translate!
    "features": "Caratteristiche",
    "pricing": "Prezzi",
    ...
  }
}
```

#### 5. Import in index.ts
```typescript
// src/i18n/index.ts
import itCommon from './locales/it/common.json';
import itMarketing from './locales/it/marketing.json';
import itSEO from './locales/it/seo.json';
import itLegal from './locales/it/legal.json';
import itContent from './locales/it/content.json';

export const translations = {
  de: { ... },
  en: { ... },
  es: { ... },
  fr: { ... },
  it: {
    common: itCommon,
    marketing: itMarketing,
    seo: itSEO,
    legal: itLegal,
    content: itContent
  }
};
```

#### 6. Add Route
```typescript
// src/App.tsx
<Route path="/it" element={<Index />} />
```

#### 7. Add to Sitemap
```javascript
// scripts/seo/generate-sitemap.mjs
{
  name: 'languages',
  urls: [
    { loc: `${baseUrl}/en`, ... },
    { loc: `${baseUrl}/es`, ... },
    { loc: `${baseUrl}/fr`, ... },
    { loc: `${baseUrl}/it`, ... },  // ADD HERE
  ]
}
```

#### 8. Test & Deploy
```bash
npm run dev  # Test locally
npm run build  # Build for production
git add . && git commit -m "Add Italian language support"
git push origin main
```

---

## 📚 CONTENT NAMESPACES

### common.json (UI Strings)
**Purpose:** Reusable UI elements  
**Size:** ~5-10 KB  
**Examples:**
```json
{
  "navigation": {
    "home": "Startseite",
    "features": "Features",
    "pricing": "Preise",
    "faq": "FAQ"
  },
  "footer": {
    "product": "Produkt",
    "resources": "Ressourcen",
    "legal": "Legal"
  },
  "buttons": {
    "tryFree": "Kostenlos testen",
    "learnMore": "Mehr erfahren",
    "getStarted": "Jetzt starten"
  }
}
```

### marketing.json (Homepage Content)
**Purpose:** All homepage sections  
**Size:** ~50-80 KB (LARGE!)  
**Structure:**
```json
{
  "hero": { title, subtitle, cta, stats },
  "features": { title, items: [...] },
  "pricing": { plans: [...], features: [...] },
  "testimonials": { items: [...] },
  "faq": { items: [...] },
  ...
}
```

**Notes:**
- Biggest file
- Needs careful translation (marketing copy!)
- Contains arrays of objects

### seo.json (Meta Tags & Schema)
**Purpose:** SEO-specific strings  
**Size:** ~15-25 KB  
**Examples:**
```json
{
  "home": {
    "title": "ReplAInow – Enterprise AI Shopify Helpdesk",
    "description": "Die #1 AI Helpdesk-Lösung...",
    "keywords": ["Shopify support", "AI customer service", ...]
  },
  "schema": {
    "organization": { ... },
    "softwareApplication": { ... }
  }
}
```

### legal.json (Legal Pages)
**Purpose:** Legal page translations  
**Size:** ~10-15 KB  
**Status:** Currently unused (legal pages use Helmet with hardcoded text)  
**Future:** When we translate legal pages

### content.json (Content Pages) 🆕
**Purpose:** SEO article pages  
**Size:** ~100-200 KB per language! (HUGE!)  
**Structure:**
```json
{
  "automatisierung": {
    "meta": { title, description, keywords },
    "hero": { badge, title, subtitle, stats: [...], cta },
    "toc": { title, items: [...] },
    "problem": { title, subtitle, points: [...] },
    "solution": { ... },
    "examples": { cases: [...] },
    "roi": { ... },
    "faq": { items: [...] },
    ...
  },
  "support24-7": { ... },
  "kostenSenken": { ... }
}
```

**Notes:**
- Deeply nested structures
- Many arrays of objects
- Requires `getTranslation()` (not just `t()`)
- 1,686 lines in German! (3,500+ words content)

---

## 🔄 HOW TRANSLATIONS WORK

### 1. At App Initialization:

```typescript
// src/App.tsx
<LocaleProvider>              // Provides locale to all components
  <BrowserRouter>             // Handles routing
    <AppShell />              // Main app with routes
  </BrowserRouter>
</LocaleProvider>
```

### 2. In LocaleProvider:

```typescript
// src/i18n/LocaleContext.tsx
const [locale, setLocale] = useState('de');

useEffect(() => {
  const pathLocale = getLocaleFromPath(window.location.pathname);
  setLocale(pathLocale);  // Sets locale from URL
}, []);

// Listen for URL changes
window.addEventListener('popstate', detectLocale);
```

### 3. In Components:

```typescript
// Simple strings:
const { t } = useTranslation();
<h1>{t('marketing.hero.title')}</h1>

// Complex objects/arrays:
const { getTranslation } = useTranslation();
const stats = getTranslation('content.automatisierung.hero.stats');
{stats.map(stat => <div>{stat.number}</div>)}
```

### 4. Translation Lookup Process:

```
Key: "content.automatisierung.hero.stats"
  ↓
Split: ["content", "automatisierung", "hero", "stats"]
  ↓
Navigate: translations[locale].content.automatisierung.hero.stats
  ↓
Return: Array of stat objects
  ↓
Component renders
```

---

## 🌍 TRANSLATION GUIDELINES

### General Rules:

#### 1. Maintain Structure
```json
// ✅ GOOD - Same structure as source:
{
  "hero": {
    "title": "...",
    "subtitle": "...",
    "stats": [...]
  }
}

// ❌ BAD - Different structure:
{
  "hero": "..."  // Missing nested properties!
}
```

#### 2. Preserve Placeholders
```json
// ✅ GOOD:
"Bei {count} Tickets/Tag sparst du {savings}"

// ❌ BAD:
"Du sparst Geld bei vielen Tickets"  // Lost placeholders!
```

#### 3. Keep Arrays Same Length
```json
// Source (DE): 4 stats
"stats": [
  { "number": "60-80%", "label": "Automatisierung" },
  { "number": "3 Sek", "label": "Antwortzeit" },
  { "number": "100+", "label": "Sprachen" },
  { "number": "60 Sek", "label": "Setup-Zeit" }
]

// Translation (EN): Must also be 4 stats!
"stats": [
  { "number": "60-80%", "label": "Automation" },
  { "number": "3 Sec", "label": "Response Time" },
  { "number": "100+", "label": "Languages" },
  { "number": "60 Sec", "label": "Setup Time" }
]
```

#### 4. Translate Marketing Copy, Not Data
```json
// ✅ GOOD - Marketing translated, data unchanged:
{
  "price": "$19",              // Keep $19 (data)
  "period": "/Monat",          // Translate to "/month"
  "description": "Perfekt für kleine Shops"  // Translate fully
}

// ❌ BAD - Changing data:
{
  "price": "€19",              // Don't change currency!
  "period": "/mo",             // Keep consistent
}
```

#### 5. Cultural Adaptation (Not Just Translation!)
```json
// German (formal):
"title": "Erfahren Sie, wie ReplAInow Ihnen hilft"

// English (casual is ok):
"title": "Discover how ReplAInow helps you"

// Don't just translate word-by-word - adapt tone!
```

### Content-Specific Guidelines:

#### Homepage (marketing.json):
- Translate ALL text
- Keep brand name "ReplAInow" unchanged
- Keep pricing in USD (or note "Prices in USD")
- Adapt testimonials (translate quotes, keep names)
- Keep stat numbers unchanged (4.9/5, 280 reviews, etc.)

#### SEO Content (content.json):
- Translate comprehensively (2,500-3,500 words per article!)
- Keep calculations/formulas (just translate labels)
- Adapt examples to local market (e.g., Spanish customers for ES version)
- Keep pricing in USD but note "approximately €X"
- Translate FAQs completely
- Keep product features accurate

#### Legal (legal.json):
- Translate accurately (legal precision!)
- Keep company details unchanged (PrimeVision Group LLC, Dubai)
- Keep email addresses unchanged
- Keep dates in original format
- Add locale-specific legal requirements if needed

---

## 🚀 ADDING NEW LANGUAGES (Detailed)

### Target: 41 Languages

**Phase 1 (Current): 4 Languages**
- ✅ German (de) - 100% complete
- ✅ English (en) - 100% complete
- ✅ Spanish (es) - Homepage complete, Content fallback
- ✅ French (fr) - Homepage complete, Content fallback

**Phase 2 (Next): +6 European Languages**
- Italian (it)
- Dutch (nl)
- Portuguese (pt)
- Polish (pl)
- Swedish (sv)
- Danish (da)

**Phase 3: +10 Global Languages**
- Chinese Simplified (zh)
- Japanese (ja)
- Korean (ko)
- Arabic (ar)
- Russian (ru)
- Turkish (tr)
- Hindi (hi)
- Thai (th)
- Vietnamese (vi)
- Indonesian (id)

**Phase 4: +21 Additional Languages**
(Complete list in master i18n plan)

### Translation Priorities:

#### Priority 1 - Critical (Must translate):
- Homepage (marketing.json)
- Content pages (content.json)
- Common UI (common.json)

#### Priority 2 - Important (Should translate):
- SEO meta tags (seo.json)
- FAQ sections

#### Priority 3 - Nice to Have:
- Legal pages (legal.json)
- Long-form content details

### Automated vs Manual Translation:

#### Can Use AI Translation (with review):
- UI strings (common.json)
- Basic marketing copy
- FAQ questions/answers
- Meta descriptions

#### Must Be Manual (native speaker):
- Hero headlines (critical for conversion!)
- CTA copy (drives action)
- Testimonials (cultural nuance)
- Legal text (accuracy critical)
- Long-form content (SEO value, quality)

---

## 🔍 COMMON ISSUES & SOLUTIONS

### Issue 1: "t(...).map is not a function"
**Cause:** `t()` returns string, can't map over string  
**Solution:** Use `getTranslation()` for arrays/objects  
```typescript
// ❌ BAD:
t('content.automatisierung.hero.stats').map(...)

// ✅ GOOD:
getTranslation('content.automatisierung.hero.stats').map(...)
// Or with helper:
getArray('content.automatisierung.hero.stats').map(...)
```

### Issue 2: Translation Key Not Found
**Symptom:** Component shows "content.automatisierung.hero.title" (key itself)  
**Cause:** Key doesn't exist in translations  
**Solution:**
1. Check spelling
2. Verify JSON structure
3. Ensure file imported in `index.ts`
4. Check namespace (common vs marketing vs content)

### Issue 3: Wrong Language Displayed
**Cause:** URL doesn't match expected pattern  
**Solution:**
- Check `getLocaleFromPath()` logic
- Ensure URL starts with `/en`, `/es`, etc.
- Default is always German (`de`)

### Issue 4: Translation Updates Not Showing
**Cause:** Vite dev server cache  
**Solution:**
- Hard refresh browser (Cmd+Shift+R)
- Restart Vite server
- Clear `node_modules/.vite` cache

### Issue 5: TypeScript Errors After Adding Namespace
**Cause:** LocaleTranslations interface not updated  
**Solution:**
```typescript
// src/i18n/types.ts
export interface LocaleTranslations {
  common: TranslationCommon;
  marketing: TranslationMarketing;
  seo: TranslationSEO;
  legal: TranslationLegal;
  content: any;  // ADD NEW NAMESPACE
}
```

---

## 📈 FUTURE: 41 LANGUAGES PLAN

### Phase 1: Foundation (Complete ✅)
- [x] 4 languages active
- [x] URL structure working
- [x] i18n system scalable
- [x] Homepage fully translated
- [x] Content pages i18n-ready

### Phase 2: Scale to 10 Languages
**Timeline:** 2-4 weeks  
**Effort:** ~40 hours translation work  
**Languages:** +6 European (IT, NL, PT, PL, SV, DA)

**Tasks:**
- [ ] Translate marketing.json (6 languages)
- [ ] Translate content.json (3 pages × 6 languages)
- [ ] Translate common.json (6 languages)
- [ ] Add language routes
- [ ] Update sitemaps
- [ ] Test each language

### Phase 3: Scale to 20 Languages
**Timeline:** 1-2 months  
**Effort:** ~80 hours  
**Languages:** +10 Global (ZH, JA, KO, AR, RU, TR, HI, TH, VI, ID)

**Special Considerations:**
- **RTL Languages:** Arabic (ar) needs RTL CSS
- **Character Sets:** Chinese, Japanese, Korean (CJK fonts)
- **Translation Quality:** Native speakers required
- **SEO:** Local keywords research per market

### Phase 4: Complete 41 Languages
**Timeline:** 3-6 months  
**Effort:** ~200 hours total  
**Result:** 11 pages × 41 languages = **451 URLs!**

**Impact:**
- Global SEO dominance
- Truly international brand
- Massive organic traffic
- AI recommendations in all languages

---

## 🎯 TRANSLATION WORKFLOW (For Next Agent)

### For Each New Language:

#### 1. Preparation (1 hour)
- Research local market
- Identify top keywords
- Find competitor translations
- Prepare style guide

#### 2. Translation (4-6 hours per language)
- common.json (30 min)
- marketing.json (2 hours - carefully!)
- seo.json (1 hour)
- content.json (2-3 hours - 8,700 words!)

#### 3. Quality Check (1 hour)
- Native speaker review (if possible)
- Check all keys present
- Test locally
- Verify no broken layout

#### 4. Technical Implementation (30 min)
- Add to config
- Import in index.ts
- Add route
- Update sitemap

#### 5. Testing (30 min)
- Load each page
- Check translations display
- Verify no console errors
- Test on mobile

#### 6. Deploy (15 min)
- Build
- Commit
- Push
- Verify live

**Total per language:** 7-9 hours

---

## 🛠️ TOOLS & RESOURCES

### Translation Tools:
- **DeepL Pro:** Best for DE/EN/ES/FR (better than Google)
- **Google Translate:** Fallback, check with native speaker
- **ChatGPT/Claude:** Good for context, but verify!
- **Native Speakers:** Required for final review

### Testing:
- **Localhost:** `npm run dev`, visit `/en`, `/es`, `/fr`, etc.
- **Production:** Check live URLs after deploy

### Validation:
- **JSON Lint:** Ensure valid JSON
- **TypeScript:** Compile checks structure
- **Manual:** Native speaker review

---

## 📝 BEST PRACTICES

### DO:
- ✅ Keep structure identical across languages
- ✅ Translate marketing copy thoughtfully
- ✅ Adapt cultural references
- ✅ Verify numbers/data unchanged
- ✅ Test each language before deploy
- ✅ Get native speaker review

### DON'T:
- ❌ Change JSON structure
- ❌ Translate brand names
- ❌ Change pricing (keep USD)
- ❌ Skip testing
- ❌ Use machine translation without review
- ❌ Break arrays/objects structure

---

## 🎓 FOR THE NEXT AGENT

### What You Need to Know:

1. **Current State:** 4 languages active, i18n system working
2. **Your Mission:** Translate to more languages (start with 6 European)
3. **Priority:** marketing.json and content.json (most important!)
4. **Quality:** Native speaker review required
5. **Testing:** EVERY language before deploy

### Where to Start:

1. Read this doc completely
2. Look at existing translations (DE vs EN comparison)
3. Understand JSON structure (don't break it!)
4. Start with 1 language (e.g., Italian)
5. Follow step-by-step guide above
6. Test thoroughly
7. Get feedback before scaling

### Resources You'll Need:
- DeepL Pro subscription (or similar)
- Native speaker contacts (or services like Gengo, Upwork)
- Time: ~7-9 hours per language
- Budget: $300-800 per language (if using professional translators)

---

**Document Version:** 1.0  
**Created:** November 15, 2025  
**Purpose:** Complete i18n strategy documentation  
**Next Update:** When scaling to 10+ languages

