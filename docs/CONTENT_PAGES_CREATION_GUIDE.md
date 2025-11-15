# 📝 CONTENT PAGES CREATION GUIDE

**Purpose:** How to create new SEO-optimized content pages  
**Current Pages:** 3/11 complete  
**Remaining:** 8 pages to create  
**Template:** Proven, tested, works!

---

## 📋 TABLE OF CONTENTS

1. [Overview](#overview)
2. [Content Page Checklist](#content-page-checklist)
3. [Step-by-Step Creation](#step-by-step-creation)
4. [Content Requirements](#content-requirements)
5. [Component Template](#component-template)
6. [SEO Requirements](#seo-requirements)
7. [Testing Checklist](#testing-checklist)
8. [Common Mistakes](#common-mistakes)

---

## 🎯 OVERVIEW

### What is a Content Page?
Long-form (2,500-3,500 words), SEO-optimized articles that:
- Target specific keywords
- Provide real value to readers
- Include interactive elements
- Drive conversions
- Build authority & backlinks

### Current Examples:
1. `/shopify-kundensupport-automatisieren` (2,500 words, ROI calculator)
2. `/24-7-kundensupport-shopify` (2,700 words, Night shift calculator)
3. `/shopify-support-kosten-senken` (3,500 words, TCO calculator)

### Planned Pages (8):
4. Mehrsprachiger Kundensupport Shopify
5. DSGVO konformer KI-Support
6. Live Chat für Shopify
7. E-Mail Support automatisieren
8. Omnichannel Support
9. Shopify Helpdesk Software Guide
10. Support Team entlasten
11. Shopify API Integration

---

## ✅ CONTENT PAGE CHECKLIST

### Pre-Creation (Research Phase):
- [ ] Keyword research (primary + secondary + long-tail)
- [ ] Competitor analysis (what ranks now?)
- [ ] Search intent understanding (what user wants?)
- [ ] Feature verification (check docs for REAL data!)
- [ ] Outline creation (10-12 sections planned)

### Content Phase:
- [ ] i18n JSON created (DE complete, 2,500-3,500 words)
- [ ] i18n JSON translated (EN complete)
- [ ] ES & FR fallbacks created
- [ ] All data verified (no halluzin

ations!)
- [ ] Examples real and relevant
- [ ] FAQs answer real questions

### Component Phase:
- [ ] Component file created (`src/pages/content/PageName.tsx`)
- [ ] All imports correct
- [ ] Helper functions included (getArray, getObject)
- [ ] Calculator implemented (if applicable)
- [ ] Schema.org added (4-5 types)
- [ ] Meta tags complete
- [ ] Internal linking boxes added

### Integration Phase:
- [ ] Route added to App.tsx
- [ ] Lazy import added
- [ ] Sitemap updated (scripts/seo/generate-sitemap.mjs)
- [ ] Footer link added (UltraFooter.tsx)
- [ ] LLM Facts updated (public/.well-known/llm-facts.json)

### Testing Phase:
- [ ] Localhost test (npm run dev)
- [ ] All sections render
- [ ] Calculator works (if present)
- [ ] No console errors
- [ ] Mobile responsive check
- [ ] Cross-browser test (Chrome, Safari, Firefox)

### Deployment Phase:
- [ ] Build succeeds (npm run build)
- [ ] Production preview (npm run preview)
- [ ] Commit with clear message
- [ ] Push to main
- [ ] Verify live (wait 2-3 minutes)

---

## 📚 STEP-BY-STEP CREATION

### Step 1: Research & Planning (30-60 min)

#### Keyword Research:
```
Tools: Google Keyword Planner, Google Autocomplete, Competitor analysis

Questions to Answer:
- What is the main keyword? (e.g., "Mehrsprachiger Kundensupport")
- What is search volume? (estimate)
- What is search intent? (informational, commercial, transactional)
- What do competitors write about?
- What questions do users have?
```

#### Outline Creation:
```
1. Hero (keyword-optimized title)
2. Table of Contents (7-10 sections)
3. Problem Section (pain points)
4. Solution Section (how we solve it)
5. How It Works (technical/practical)
6. Examples/Scenarios (real use cases)
7. Calculator/Interactive (engagement)
8. FAQ (8-10 questions with Schema)
9. Pricing/CTA
10. Related Articles

Estimated Length: 2,500-3,500 words
```

#### Data Verification:
```
Check docs/ folder:
- marketing-summary-replainow/REPLAINOW_FEATURE_SUMMARY_DE.md
- marketing-summary-replainow/01_AI_KNOWLEDGE_COMPLETE.md
- marketing-summary-replainow/02_LIVE_CHAT_WIDGET_AI_COMPLETE.md
- marketing-summary-replainow/03_LIVE_CHAT_DASHBOARD_COMPLETE.md
- etc.

Extract ONLY real data:
✅ 60-80% automation (not 87%!)
✅ 100+ languages (not 32+!)
✅ $19, $49, $99, $399 pricing (USD!)
✅ 3 seconds response time
✅ 60 seconds setup
```

### Step 2: Create i18n JSON (60-90 min)

#### File Location:
`src/i18n/locales/de/content.json`

#### Structure Template:
```json
{
  "pageKey": {
    "meta": {
      "title": "Page Title | Brand - Benefit",
      "description": "150-160 char description with keyword and CTA",
      "keywords": "keyword1, keyword2, keyword3"
    },
    "breadcrumb": {
      "home": "Startseite",
      "current": "Page Name"
    },
    "hero": {
      "badge": "🔥 BADGE TEXT",
      "title": "Main Keyword Title",
      "subtitle": "Compelling subtitle with value prop",
      "stats": [
        { "number": "X%", "label": "Metric" },
        ...
      ],
      "cta": {
        "primary": "Primary CTA Text",
        "secondary": "Secondary CTA"
      }
    },
    "toc": {
      "title": "Inhalt",
      "items": ["Section 1", "Section 2", ...]
    },
    "problem": { ... },
    "solution": { ... },
    "examples": { ... },
    "calculator": { ... },
    "faq": {
      "title": "Häufige Fragen",
      "items": [
        {
          "question": "Question text?",
          "answer": "Detailed answer..."
        }
      ]
    },
    "cta": { ... },
    "related": {
      "title": "Weiterführende Artikel",
      "articles": [
        {
          "title": "Article Title",
          "url": "/url-slug",
          "desc": "Short description"
        }
      ]
    }
  }
}
```

#### Tips:
- Copy from existing page (ShopifyKundensupportAutomatisieren)
- Change all content to new topic
- Keep structure identical
- Verify all arrays same type
- Check JSON valid (use linter!)

#### English Version:
- Translate thoroughly (not just word-by-word!)
- Adapt examples to English market
- Keep data unchanged (prices, stats)
- File: `src/i18n/locales/en/content.json`

### Step 3: Create Component (30-45 min)

#### File Location:
`src/pages/content/PageName.tsx`

#### Copy Template:
```bash
cp src/pages/content/ShopifyKundensupportAutomatisieren.tsx \
   src/pages/content/NewPageName.tsx
```

#### Modify:
1. Component name
2. Translation keys (content.pageKey.*)
3. Schema.org (update names, URLs)
4. Calculator logic (if different)
5. Theme colors (make unique!)
6. Internal link boxes (relevant pages)

#### Helper Functions (Always Include):
```typescript
const { t, getTranslation } = useTranslation();

const getArray = (key: string): any[] => {
  const result = getTranslation(key);
  return Array.isArray(result) ? result : [];
};

const getObject = (key: string): Record<string, any> => {
  const result = getTranslation(key);
  return typeof result === 'object' && !Array.isArray(result) ? result : {};
};
```

### Step 4: Add to Routing (5 min)

#### App.tsx - Add Lazy Import:
```typescript
const NewPage = lazy(() => import("./pages/content/NewPageName"));
```

#### App.tsx - Add Route:
```typescript
<Route path="/new-page-url-slug" element={<NewPage />} />
```

### Step 5: Update Infrastructure (10 min)

#### Sitemap (scripts/seo/generate-sitemap.mjs):
```javascript
{
  name: 'content',
  urls: [
    ...existing,
    {
      loc: `${baseUrl}/new-page-url-slug`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    }
  ]
}
```

#### Footer (src/components/marketing/UltraFooter.tsx):
```typescript
<li>
  <a href="/new-page-url-slug">
    Link Text
  </a>
</li>
```

#### LLM Facts (public/.well-known/llm-facts.json):
```json
{
  "claim": "ReplAInow provides [feature from page]",
  "proof_url": "https://replainow.com/new-page-url-slug",
  "last_updated": "2025-11-15T...",
  "category": "features",
  "confidence": "high",
  "context": "Detailed explanation..."
}
```

### Step 6: Testing (15-20 min)

#### Localhost:
```bash
npm run dev
# Visit http://localhost:5173/new-page-url-slug
# Check:
- All sections render
- No console errors
- Calculator works
- Links work
- Mobile looks good
```

#### Production Build:
```bash
npm run build
npm run preview
# Visit http://localhost:4173/new-page-url-slug
# Verify everything still works
```

### Step 7: Deploy (5 min)

```bash
git add .
git commit -m "🚀 NEW CONTENT PAGE: [Page Title] - [Word Count] words

[Description of what was created]
[Key features]
[SEO elements]"

git push origin main
```

**Wait 2-3 minutes, verify live:**
https://replainow.com/new-page-url-slug

---

## 📝 CONTENT REQUIREMENTS

### Length:
- **Minimum:** 2,000 words
- **Optimal:** 2,500-3,500 words
- **Maximum:** No limit (as long as valuable!)

### Structure (Required Sections):
1. **Hero** (H1, subtitle, stats, CTAs)
2. **Table of Contents** (navigation)
3. **Problem** (pain points, 3-5)
4. **Solution** (how we solve, 4-5 features)
5. **How It Works** (explanation, 3-5 steps)
6. **Examples** (real scenarios, 3-5)
7. **Interactive Element** (calculator, checklist, etc.)
8. **FAQ** (8-10 questions)
9. **Pricing/CTA** (transparent, clear)
10. **Related Articles** (3 cross-links)

### Data Accuracy (CRITICAL!):
**Always Verify:**
- Pricing ($19, $49, $99, $399 - USD!)
- Features (60-80% automation, 100+ languages)
- Setup time (60 seconds)
- Response time (3 seconds)
- Real merchant results (from docs!)

**Never:**
- Invent features
- Exaggerate numbers
- Copy competitor claims
- Make up testimonials

### Tone & Style:
- **Professional** but approachable
- **German formal** (Sie-Form) for German version
- **English casual** (You) for English version
- **Benefit-focused** (what user gains)
- **Action-oriented** (clear CTAs)

---

## 🎨 COMPONENT TEMPLATE

### Basic Structure:
```typescript
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import { /* Icons */ } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PageName = () => {
  const { t, getTranslation } = useTranslation();
  
  // Helper functions
  const getArray = (key: string): any[] => { ... };
  const getObject = (key: string): Record<string, any> => { ... };
  
  // Calculator state (if applicable)
  const [input1, setInput1] = useState(defaultValue);
  
  // Calculations
  const result = input1 * factor;
  
  // Schema.org
  const faqSchema = { ... };
  const howToSchema = { ... };
  const articleSchema = { ... };
  const breadcrumbSchema = { ... };
  
  return (
    <>
      <Helmet>
        {/* Complete meta tags */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        {/* All schema types */}
      </Helmet>
      
      <LegalNavbar />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        {/* TOC */}
        {/* Content Sections */}
        {/* Calculator */}
        {/* FAQ */}
        {/* CTA */}
        {/* Related */}
      </main>
      
      <UltraFooter />
    </>
  );
};

export default PageName;
```

### Sections to Include:

#### 1. Hero Section:
- Breadcrumb navigation
- Badge with icon
- H1 (main keyword!)
- Subtitle (value prop)
- Stats grid (4 stats)
- 2 CTAs (primary + secondary)

#### 2. Table of Contents:
- Numbered list (1-10)
- Links to #section-1, #section-2, etc.
- Helps users navigate
- Helps Google understand structure

#### 3. Problem Section:
- 3-5 pain points
- Real statistics
- Emotional hooks
- "Reality check" box (shocking numbers!)

#### 4. Solution Section:
- 4-5 features/benefits
- How it works (steps)
- Visual hierarchy
- Green/positive theme

#### 5. Examples/Scenarios:
- 3-5 concrete examples
- Real situations
- Before/After comparisons
- Time/Cost savings per example

#### 6. Interactive Element:
- Calculator (most engaging!)
- Checklist
- Comparison tool
- Quiz
- Assessment

#### 7. FAQ Section:
- 8-10 questions
- With Schema.org markup
- Answer ALL common questions
- Link to related pages

#### 8. Final CTA:
- Repeat stats
- Strong headline
- 2 CTAs
- Trust signals (guarantee, no credit card, etc.)

#### 9. Related Articles:
- 3 cross-links
- To other content pages
- Clear descriptions
- Hover effects

---

## 🔍 SEO REQUIREMENTS

### Meta Tags (Complete Checklist):
```html
<!-- Basic -->
<title>{keyword-rich title 50-60 chars}</title>
<meta name="description" content="{150-160 chars with keyword & CTA}" />
<meta name="keywords" content="{5-10 keywords comma-separated}" />
<link rel="canonical" href="{full URL}" />

<!-- Open Graph -->
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{full URL}" />
<meta property="og:image" content="{og image URL}" />

<!-- Article Meta -->
<meta name="article:published_time" content="2025-XX-XXT00:00:00Z" />
<meta name="article:modified_time" content="2025-XX-XXT00:00:00Z" />
<meta name="article:author" content="ReplAInow Team" />
<meta name="article:section" content="{Section}" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:label1" content="{Metric Name}" />
<meta name="twitter:data1" content="{Metric Value}" />
<meta name="twitter:label2" content="{Metric Name}" />
<meta name="twitter:data2" content="{Metric Value}" />

<!-- Robots -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
```

### Schema.org (4-5 Types Required):

#### 1. FAQPage Schema (Always!)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complete answer..."
      }
    }
  ]
}
```

#### 2. HowTo Schema (Always!)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [do something]",
  "description": "Step-by-step guide...",
  "totalTime": "PT1M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Step name",
      "text": "Step description"
    }
  ]
}
```

#### 3. Article Schema (Always!)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article headline",
  "description": "Article description",
  "author": { "@type": "Organization", "name": "ReplAInow" },
  "publisher": {
    "@type": "Organization",
    "name": "ReplAInow",
    "logo": { "@type": "ImageObject", "url": "..." }
  },
  "datePublished": "2025-XX-XX",
  "dateModified": "2025-XX-XX",
  "mainEntityOfPage": "https://replainow.com/page-url",
  "wordCount": 2500,
  "articleSection": "Category"
}
```

#### 4. Breadcrumb Schema (Always!)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://replainow.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Page Name",
      "item": "https://replainow.com/page-url"
    }
  ]
}
```

#### 5. Optional: SoftwareApplication Schema
(If page focuses on ReplAInow as solution)

---

## ✅ TESTING CHECKLIST

### Before Committing:

#### Functionality:
- [ ] Page loads without errors
- [ ] All sections display content
- [ ] Calculator works (if present)
- [ ] All links clickable
- [ ] Images load (if present)
- [ ] No console errors
- [ ] No TypeScript errors

#### Content:
- [ ] All text in correct language
- [ ] No "undefined" or empty sections
- [ ] Stats display correctly
- [ ] FAQs render properly
- [ ] Related articles link correctly

#### Mobile:
- [ ] Responsive design works
- [ ] Touch-friendly buttons (48px+)
- [ ] Text readable (not too small)
- [ ] Calculator usable on mobile
- [ ] No horizontal scroll

#### SEO:
- [ ] Title displays correctly (browser tab)
- [ ] Meta description present (view source)
- [ ] H1 present and correct
- [ ] Schema.org valid (validator.schema.org)
- [ ] Internal links work

#### Performance:
- [ ] Load time < 3s (localhost)
- [ ] No layout shift
- [ ] Smooth scrolling
- [ ] Fast interactions

---

## ❌ COMMON MISTAKES

### Mistake 1: Using t() for Arrays
```typescript
// ❌ WRONG:
const stats = t('content.page.stats');
stats.map(...)  // ERROR: t(...).map is not a function

// ✅ CORRECT:
const stats = getArray('content.page.stats');
stats.map(...)  // Works!
```

### Mistake 2: Forgetting to Import Icons
```typescript
// ❌ ERROR:
<Moon className="w-5 h-5" />  // Moon is not defined!

// ✅ FIX:
import { Moon } from "lucide-react";
```

### Mistake 3: Wrong Translation Keys
```typescript
// ❌ WRONG:
t('content.wrongKey.title')  // Returns "content.wrongKey.title"

// ✅ CHECK:
- Spelling correct?
- Key exists in JSON?
- Namespace correct? (content not common)
```

### Mistake 4: Forgetting Route
```typescript
// Created component but forgot to add route!
// Result: 404 on that URL

// ✅ REMEMBER:
// 1. Import in App.tsx
// 2. Add <Route path="..." element={...} />
```

### Mistake 5: Not Updating Sitemap
```javascript
// Created page but not in sitemap!
// Result: Google doesn't know page exists

// ✅ ADD TO:
// scripts/seo/generate-sitemap.mjs
```

### Mistake 6: Hallucinating Data
```typescript
// ❌ WRONG:
"ReplAInow automatisiert 95% der Tickets"  // FALSE!

// ✅ CORRECT:
"ReplAInow automatisiert 60-80% der Tickets"  // From docs!
```

### Mistake 7: Incomplete Schema
```json
// ❌ WRONG:
{
  "@context": "https://schema.org",
  "@type": "FAQPage"
  // Missing mainEntity!
}

// ✅ CORRECT:
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]  // Required!
}
```

---

## 🎯 QUALITY STANDARDS

### Content Quality:
- ✅ 2,500+ words minimum
- ✅ 100% accurate data
- ✅ Clear structure (H1-H6)
- ✅ Real examples
- ✅ Helpful for reader
- ✅ No keyword stuffing
- ✅ Engaging (not boring!)

### Technical Quality:
- ✅ No TypeScript errors
- ✅ No console errors
- ✅ Valid schema.org
- ✅ Complete meta tags
- ✅ Fast loading (< 3s)
- ✅ Mobile responsive

### SEO Quality:
- ✅ Keyword in H1, URL, first paragraph
- ✅ 4-5 Schema types
- ✅ 8-10 FAQs with schema
- ✅ Internal links (5+)
- ✅ Related articles (3)
- ✅ LLM Facts updated

---

## 🚀 NEXT 8 PAGES TO CREATE

### Priority 1 (High Search Volume):
1. **Mehrsprachiger Kundensupport**
   - Keyword: "Mehrsprachiger Kundensupport Shopify"
   - Angle: 100+ Sprachen ohne Übersetzer
   - Calculator: Übersetzer-Kosten vs. ReplAInow
   - Time: ~60 min

2. **Live Chat für Shopify**
   - Keyword: "Live Chat Shopify deutsch"
   - Angle: Modernes Chat-Widget mit KI
   - Feature: Live demo embed (if possible)
   - Time: ~60 min

### Priority 2 (Authority Building):
3. **DSGVO konformer KI-Support**
   - Keyword: "DSGVO konformer Kundensupport"
   - Angle: Legal compliance für deutsche Händler
   - Trust: Complete compliance checklist
   - Time: ~60 min

4. **E-Mail Support automatisieren**
   - Keyword: "E-Mail Support automatisieren"
   - Angle: Gmail-style dashboard mit KI
   - Calculator: Zeit-Ersparnis pro E-Mail
   - Time: ~60 min

### Priority 3 (Technical/Advanced):
5. **Omnichannel Support**
   - Keyword: "Omnichannel Support Shopify"
   - Angle: Chat + E-Mail unified
   - Diagram: Omnichannel architecture
   - Time: ~75 min

6. **Shopify Helpdesk Software Guide**
   - Keyword: "Shopify Helpdesk Software"
   - Angle: Buyer's guide (educational, not salesy!)
   - Comparison: Features matrix
   - Time: ~75 min

7. **Support Team entlasten**
   - Keyword: "Support Team entlasten"
   - Angle: Manager-focused, burnout prevention
   - Calculator: Team workload reduction
   - Time: ~60 min

8. **Shopify API Integration**
   - Keyword: "Shopify API Support Integration"
   - Angle: Technical deep-dive for developers
   - Code: API examples, webhooks
   - Time: ~90 min (most technical!)

---

## 📊 ESTIMATED EFFORT

### Per Page:
- Research & Planning: 30-60 min
- Content JSON Creation: 60-90 min
- Component Building: 30-45 min
- Integration & Testing: 20-30 min
- **Total: 2.5-3.5 hours per page**

### All 8 Remaining Pages:
- **Total Time:** 20-28 hours
- **If working 4h/day:** 5-7 days
- **If working 8h/day:** 2.5-3.5 days

### With Your Level of Expertise:
- You understand the template
- You know the docs
- You have the patterns
- **Realistic:** 2-3 hours per page
- **All 8:** 16-24 hours (2-3 days)

---

**Document Version:** 1.0  
**Created:** November 15, 2025  
**Purpose:** Guide for creating new content pages  
**Audience:** Next agent, content creators

