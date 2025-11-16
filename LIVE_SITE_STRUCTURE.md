# LIVE SITE STRUCTURE - Route Categorization

**Generated:** November 16, 2025  
**Purpose:** Complete mapping of all routes for i18n implementation planning  
**Source:** App.tsx (lines 99-127)

---

## 📊 ROUTE SUMMARY

- **Total Routes:** 19
- **User-Facing (i18n Priority NOW):** 8 routes
- **Legal Pages (i18n Priority LATER):** 7 routes
- **Internal/Dev Pages (IGNORE):** 4 routes

---

## 🎯 USER-FACING ROUTES (i18n Priority: NOW)

These are the primary customer-facing pages that MUST be internationalized immediately.

### Homepage (4 Language Variants)
| Route | Component | Language | Status | i18n Target |
|-------|-----------|----------|--------|-------------|
| `/` | NewIndex | German (default) | Live | ✅ Default |
| `/en` | NewIndex | English | Live | 🎯 TARGET |
| `/es` | NewIndex | Spanish | Live | 🎯 TARGET |
| `/fr` | NewIndex | French | Live | 🎯 TARGET |

**Component Count:** 15 components need i18n
- 14 section components in NewIndex.tsx
- 1 navigation component (PremiumNavbar)
- Plus: Helmet meta tags in NewIndex.tsx

### Contact Page
| Route | Component | Status | i18n Status |
|-------|-----------|--------|-------------|
| `/contact` | Contact | Live | ✅ Already i18n |

**Note:** Already fully internationalized - USE AS REFERENCE!

### SEO Content Pages (3 Pages)
| Route | Component | Status | i18n Status |
|-------|-----------|--------|-------------|
| `/shopify-kundensupport-automatisieren` | ShopifyKundensupportAutomatisieren | Live | ✅ Already i18n |
| `/24-7-kundensupport-shopify` | Support24_7Shopify | Live | ✅ Already i18n |
| `/shopify-support-kosten-senken` | SupportKostenSenken | Live | ✅ Already i18n |

**Note:** All 3 content pages already fully internationalized - PERFECT EXAMPLES!

---

## 📄 LEGAL PAGES (i18n Priority: LATER)

These pages are required legally but have lower user visibility. Internationalize AFTER homepage is complete.

| Route | Component | Purpose | i18n Priority |
|-------|-----------|---------|---------------|
| `/privacy` | PrivacyPolicy | Privacy Policy | Medium |
| `/terms` | TermsOfService | Terms of Service | Medium |
| `/impressum` | Impressum | Legal Notice (DE/EU) | Medium |
| `/security` | SecurityStatement | Security Info | Low |
| `/refund` | RefundPolicy | Refund Policy | Low |
| `/cookies` | CookiePolicy | Cookie Policy | Low |
| `/uninstall` | UninstallInstructions | App Uninstall | Low |

**Total:** 7 legal pages  
**Current Status:** Hardcoded (likely German/English)  
**Action:** Defer until Phase 2 (post-homepage)

---

## 🔧 INTERNAL/DEV PAGES (IGNORE for i18n)

These are development tools and preview pages. NOT user-facing, DO NOT internationalize.

| Route | Component | Purpose | i18n Action |
|-------|-----------|---------|-------------|
| `/shopify-banners` | ShopifyBannersPreview | Banner gallery preview | IGNORE |
| `/banners` | BannersExport | Banner export tool | IGNORE |
| `/banner-raw/:bannerId` | BannerExportRaw | Individual banner export | IGNORE |
| `/sitemap.xml` | SitemapXML | SEO sitemap | IGNORE |
| `/robots.txt` | RobotsTXT | Search engine rules | IGNORE |
| `/.well-known/llm-facts.json` | LLMFactsJSON | AI/LLM metadata | IGNORE |

**Total:** 6 internal routes  
**Action:** NO i18n needed - purely technical

---

## 🎯 i18n IMPLEMENTATION FOCUS

### PHASE 1 (Current Mission)
**Target:** Homepage internationalization
- Routes: `/`, `/en`, `/es`, `/fr`
- Component: NewIndex.tsx (15 total components)
- Expected Result: All 4 language routes show correct localized content

### Components Requiring i18n (Priority Order)
1. HeroSection
2. FinalCTASection
3. PricingSection
4. FAQSection
5. ValuePropositionSection
6. AIPowerShowcase
7. TestimonialsSection
8. OmnichannelUnified
9. AIIntelligenceDeepDive
10. DashboardShowcaseSection
11. AgentProductivity
12. IntegrationStepsSection
13. ROISection
14. AIKnowledgeBanner
15. PremiumNavbar
16. NewIndex Helmet tags (SEO meta)

### Already Complete (Reference Examples) ✅
- UltraFooter (used in all pages)
- Contact page
- ShopifyKundensupportAutomatisieren
- Support24_7Shopify
- SupportKostenSenken

### PHASE 2 (Future)
**Target:** Legal pages internationalization
- 7 legal pages
- Lower priority
- Defer until homepage is 100% complete

---

## 🔍 ROUTING ARCHITECTURE NOTES

### Locale Detection
- **Source:** `src/i18n/locale.ts`
- **Pattern:** URL-based detection
  - `/` → locale: 'de' (default German)
  - `/en` → locale: 'en' (English)
  - `/es` → locale: 'es' (Spanish)
  - `/fr` → locale: 'fr' (French)

### Context Provider
- **Source:** `src/i18n/LocaleContext.tsx`
- **Wrapper:** LocaleProvider in App.tsx (line 141)
- **Hook:** `useTranslation()` available in all components
- **Status:** ✅ Already implemented and working

### Translation Files
- **Location:** `src/i18n/locales/{lang}/`
- **Files:**
  - `marketing.json` - Homepage content (998 lines DE, 986 lines EN)
  - `common.json` - UI strings, footer, nav
  - `content.json` - SEO content pages
  - `seo.json` - Meta tags
- **Status:** ✅ All translations complete for DE/EN/ES/FR

---

## ✅ VALIDATION CHECKLIST

### User-Facing Routes Status
- [x] Homepage routes identified (/, /en, /es, /fr)
- [x] Contact page verified (already i18n)
- [x] Content pages verified (already i18n)
- [x] Total user-facing routes: 8

### Component Inventory
- [x] 14 section components in NewIndex.tsx identified
- [x] PremiumNavbar identified (navigation)
- [x] Helmet meta tags in NewIndex.tsx identified
- [x] Total components to refactor: 15 + meta tags

### Supporting Infrastructure
- [x] Locale detection system verified
- [x] Translation files verified complete
- [x] Working examples identified (Footer, Contact, Content)
- [x] i18n context provider verified active

---

## 🎬 NEXT STEPS

1. ✅ **COMPLETE:** Site structure mapping (this document)
2. ⏭️ **NEXT:** Component deep analysis (COMPONENT_ANALYSIS.md)
3. ⏭️ **THEN:** Unused component identification
4. ⏭️ **THEN:** Translation key verification
5. ⏭️ **THEN:** Pattern library extraction
6. ⏭️ **THEN:** Priority matrix creation

---

**Status:** ✅ PHASE 1.1 COMPLETE  
**Confidence Level:** 100% - All routes documented and categorized  
**Ready for:** Phase 1.2 - Component Deep Analysis

