# COMPONENT ANALYSIS - Complete Homepage Audit

**Generated:** November 16, 2025  
**Purpose:** Detailed analysis of all 14 components for i18n implementation  
**Source:** NewIndex.tsx + all component files in src/components/marketing/new/

---

## 📊 EXECUTIVE SUMMARY

- **Total Components to Refactor:** 14 section components + 1 navbar + 1 meta tags = **16 total**
- **Simple Components (5-15 strings):** 5 components (~45-60 min each)
- **Medium Components (15-30 strings):** 5 components (~60-75 min each)
- **Complex Components (30+ strings, arrays):** 4 components (~90-120 min each)
- **Total Estimated Time:** 14-18 hours for all components

---

## 🎯 COMPONENT MATRIX

| # | Component | File Path | Strings | Arrays | Complexity | Est Time | JSON Section | Priority |
|---|-----------|-----------|---------|--------|------------|----------|--------------|----------|
| 1 | HeroSection | new/HeroSection.tsx | 10 | No | Simple | 45min | marketing.hero | 1 |
| 2 | FinalCTASection | new/FinalCTASection.tsx | 8 | No | Simple | 45min | marketing.cta | 2 |
| 3 | IntegrationStepsSection | new/IntegrationStepsSection.tsx | 8 | Yes (3 steps) | Simple | 60min | marketing.integration | 12 |
| 4 | DashboardShowcaseSection | new/DashboardShowcaseSection.tsx | 10 | No | Simple | 45min | marketing.dashboard | 10 |
| 5 | ROISection | new/ROISection.tsx | 15 | Yes (benefits) | Medium | 75min | marketing.roi | 13 |
| 6 | ValuePropositionSection | new/ValuePropositionSection.tsx | 18 | No | Medium | 75min | marketing.features | 5 |
| 7 | TestimonialsSection | new/TestimonialsSection.tsx | 15 | Yes (3 testimonials) | Medium | 75min | marketing.testimonials | 7 |
| 8 | AgentProductivity | new/AgentProductivity.tsx | 20 | Yes (tools, examples) | Medium | 75min | marketing.agentTools | 11 |
| 9 | FAQSection | new/FAQSection.tsx | 23 | Yes (10 Q&A) | Complex | 90min | marketing.faq | 4 |
| 10 | PricingSection | new/PricingSection.tsx | 40+ | Yes (4 plans, nested) | Very Complex | 120min | marketing.pricing | 3 |
| 11 | AIPowerShowcase | new/AIPowerShowcase.tsx | 45+ | Yes (3 columns + steps) | Very Complex | 120min | marketing.aiPowerShowcase | 6 |
| 12 | OmnichannelUnified | new/OmnichannelUnified.tsx | 35 | Yes (features) | Complex | 90min | marketing.omnichannel | 8 |
| 13 | AIIntelligenceDeepDive | new/AIIntelligenceDeepDive.tsx | 50+ | Yes (3 tabs, examples) | Very Complex | 120min | marketing.aiIntelligence | 9 |
| 14 | AIKnowledgeBanner | new/AIKnowledgeBanner.tsx | 60+ | Yes (data sources, examples) | Very Complex | 120min | marketing.aiKnowledge | 14 |

---

## 📝 DETAILED COMPONENT ANALYSIS

### 1. HeroSection.tsx ⭐ **SIMPLE - Great Starter**

**Location:** `src/components/marketing/new/HeroSection.tsx` (160 lines)

**Hardcoded Strings:** 10 strings
- Line 50: "Enterprise KI-Lösung für Shopify"
- Line 56-61: "Ihr 24/7 AI-Mitarbeiter für Shopify"
- Line 66-67: "Ersetzt bis zu 3 Support-Mitarbeiter..."
- Line 81: "14 Tage kostenlos testen"
- Line 94: "Pläne ansehen"
- Line 126: "24 Shopify-Händler nutzen bereits ReplAInow"
- Line 139: "ISO 27001 zertifiziert"

**Data Structures:** None (simple strings only)

**JSON Keys Needed:**
```
marketing.hero.badge
marketing.hero.title
marketing.hero.subtitle
marketing.hero.ctaPrimary
marketing.hero.ctaSecondary
marketing.hero.socialProof
marketing.hero.trustBadge
```

**Special Patterns:**
- Motion animations (preserve)
- Button hover effects (preserve)
- Avatar images (URLs remain unchanged)

**Refactoring Strategy:**
1. Import: `import { useTranslation } from "@/i18n";`
2. Add hook: `const { t } = useTranslation();`
3. Replace strings with `{t('marketing.hero.badge')}` etc.
4. Test button clicks still work

**Estimated Time:** 45 minutes

---

### 2. FinalCTASection.tsx ⭐ **SIMPLE**

**Location:** `src/components/marketing/new/FinalCTASection.tsx` (84 lines)

**Hardcoded Strings:** 8 strings
- Line 18-22: "Bereit, Ihren Support zu automatisieren?"
- Line 27-28: "Schließen Sie sich 24 erfolgreichen Shopify-Händlern an..."
- Line 40: "14 Tage kostenlos testen"
- Line 48: "Keine Kreditkarte erforderlich · 30-Tage Geld-zurück-Garantie · Jederzeit kündbar"
- Line 55: "DSGVO-konform"
- Line 60: "ISO 27001"
- Line 65: "24 Händler"

**Data Structures:** None

**JSON Keys Needed:**
```
marketing.cta.title
marketing.cta.subtitle
marketing.cta.ctaPrimary
marketing.cta.guarantee
marketing.cta.trustBadges[] (array of 3)
```

**Special Patterns:**
- Trust icon grid with dividers
- Button with glow effect

**Estimated Time:** 45 minutes

---

### 3. ValuePropositionSection.tsx ⚠️ **MEDIUM**

**Location:** `src/components/marketing/new/ValuePropositionSection.tsx` (232 lines)

**Hardcoded Strings:** 18 strings
- Line 43: "Warum Shopify-Händler uns wählen"
- Line 46: "Enterprise-Level Support-Automatisierung, die funktioniert"
- Line 97: "87%" (animated count-up)
- Line 102: "AUTOMATISIERUNGSRATE"
- Line 107: "Ihrer Support-Anfragen werden vollautomatisch beantwortet..."
- Line 156: "99.8% Genauigkeit"
- Line 159: "AI-INTELLIGENZ"
- Line 164: "AI kennt exakte Daten aus Ihrem Shop..."
- Line 204: "24/7"
- Line 206: "VERFÜGBARKEIT"
- Line 211: "Nahtloser Support ohne Ausfallzeiten..."

**Data Structures:**
- Bento grid layout (3 cards)
- Animated count-up hook (preserve functionality)

**JSON Keys Needed:**
```
marketing.features.title
marketing.features.subtitle
marketing.features.automation.percentage
marketing.features.automation.label
marketing.features.automation.desc
marketing.features.accuracy.value
marketing.features.accuracy.label
marketing.features.accuracy.desc
marketing.features.availability.value
marketing.features.availability.label
marketing.features.availability.desc
```

**Special Patterns:**
- `useCountUp` hook for animated number (preserve!)
- Different background gradients per card
- Motion animations

**Estimated Time:** 75 minutes

---

### 4. TestimonialsSection.tsx ⚠️ **MEDIUM - Arrays**

**Location:** `src/components/marketing/new/TestimonialsSection.tsx` (142 lines)

**Hardcoded Strings:** 15 strings (3 testimonials × 5 fields each)
- Line 39: "Vertraut von führenden Shopify-Händlern"
- Line 41: "Echte Resultate von echten Geschäften"
- Lines 7-29: Testimonials array (3 testimonials, each has: name, role, avatar, text, metric)

**Data Structures:**
```typescript
const testimonials = [
  {
    name: "Michael Weber",
    role: "CEO, Fashion & Style GmbH",
    avatar: "https://...",  // Keep URL
    text: "ReplAInow hat unseren Support-Aufwand...",
    metric: "€2.840/Monat gespart",
    color: "purple"  // Keep for styling
  },
  // 2 more...
];
```

**JSON Keys Needed:**
```
marketing.testimonials.title
marketing.testimonials.subtitle
marketing.testimonials.items[] (array of 3 objects)
  - .name
  - .role
  - .text
  - .metric
  - .avatar (URL - keep as is)
  - .color (styling - keep as is)
```

**Refactoring Strategy:**
```typescript
const { t, getTranslation } = useTranslation();
const testimonials = getTranslation('marketing.testimonials.items') || [];

// In JSX:
{testimonials.map((testimonial, i) => (
  <div key={i}>
    <h4>{testimonial.name}</h4>
    <p>{testimonial.role}</p>
    <p>{testimonial.text}</p>
    <span>{testimonial.metric}</span>
  </div>
))}
```

**Estimated Time:** 75 minutes

---

### 5. PricingSection.tsx 🔥 **VERY COMPLEX - Critical!**

**Location:** `src/components/marketing/new/PricingSection.tsx` (306 lines)

**Hardcoded Strings:** 40+ strings
- Line 118: "14 Tage kostenlos · Keine Kreditkarte · Shopify Billing"
- Line 121: "Wähle deinen Plan"
- Line 124: "Alle Funktionen in jedem Plan inklusive..."
- Lines 5-108: Plans array (4 plans, each has 15+ properties)
- Line 297: "💜 Alle Pläne mit 14-Tage-Test..."

**Data Structures:** COMPLEX!
```typescript
const plans = [
  {
    name: "Launch",
    price: "19",
    description: "Für ambitionierte Shops...",
    aiAnswers: "200 AI-Antworten inklusive",
    ticketRange: "Ideal für 10–80 Tickets...",
    extraCost: "$0.05 pro zusätzliche Antwort",
    features: [
      "Live Chat Widget (KI + Mensch)",
      "Mail Dashboard mit KI E-Mail-Antworten",
      // 11 more features...
    ],
    cta: "14 Tage kostenlos testen",
    highlighted: false,
    badge: undefined  // Only on some plans
  },
  // 3 more plans (Growth, Scale, Ultimate)
];
```

**JSON Keys Needed:**
```
marketing.pricing.badge
marketing.pricing.title
marketing.pricing.subtitle
marketing.pricing.plans[] (array of 4 plan objects)
  - .name
  - .price (number as string)
  - .description
  - .aiAnswers
  - .ticketRange
  - .extraCost
  - .features[] (array of 12+ strings)
  - .cta
  - .highlighted (boolean - keep)
  - .badge (optional string)
  - .premium (boolean - keep)
marketing.pricing.allIncluded
marketing.pricing.bottomNote
```

**Special Considerations:**
- Highlighted card (Growth plan) has scale transform
- Premium badge (Ultimate plan)
- Feature list with checkmarks
- Conditional styling based on highlighted/premium

**Testing Priority:** HIGH - Must test all 4 cards display correctly

**Estimated Time:** 120 minutes

---

### 6. FAQSection.tsx ⚠️ **COMPLEX - Arrays**

**Location:** `src/components/marketing/new/FAQSection.tsx` (124 lines)

**Hardcoded Strings:** 23 strings (10 Q&A pairs + headers)
- Line 60: "Häufig gestellte Fragen"
- Line 63: "Alles, was Sie wissen müssen"
- Lines 8-48: FAQ array (10 questions with answers)

**Data Structures:**
```typescript
const faqs = [
  {
    q: "Ersetzt die AI wirklich meine Support-Mitarbeiter?",
    a: "Die AI automatisiert 87% aller Support-Anfragen..."
  },
  // 9 more Q&A pairs...
];
```

**JSON Keys Needed:**
```
marketing.faq.title
marketing.faq.subtitle
marketing.faq.items[] (array of 10 objects)
  - .q (question)
  - .a (answer)
```

**Special Patterns:**
- Accordion with AnimatePresence
- ChevronDown rotation animation
- State management: `useState<number | null>(null)`

**Refactoring Strategy:**
```typescript
const { t, getTranslation } = useTranslation();
const faqs = getTranslation('marketing.faq.items') || [];

{faqs.map((faq, i) => (
  <div key={i}>
    <button onClick={() => setOpenIndex(openIndex === i ? null : i)}>
      <span>{faq.q}</span>
    </button>
    {openIndex === i && (
      <div><p>{faq.a}</p></div>
    )}
  </div>
))}
```

**Estimated Time:** 90 minutes

---

### 7. AIPowerShowcase.tsx 🔥 **VERY COMPLEX**

**Location:** `src/components/marketing/new/AIPowerShowcase.tsx` (311 lines)

**Hardcoded Strings:** 45+ strings
- Line 24-27: "Ihre AI kann mehr als jeder Support-Mitarbeiter"
- Line 29-31: "Kein einfacher Chatbot..."
- Lines 59-88: Column 1 "Wissen" (title + desc + 4 features + highlight)
- Lines 112-142: Column 2 "Handeln" (title + desc + 4 features + highlight)
- Lines 166-196: Column 3 "Lernen" (title + desc + 4 features + highlight)
- Lines 230-256: 3 process steps
- Lines 274-299: Bottom statement with 3 highlights

**Data Structures:**
- 3-column grid with nested features
- Process flow with 3 steps
- Bottom statement section

**JSON Keys Needed:**
```
marketing.aiPowerShowcase.title
marketing.aiPowerShowcase.subtitle
marketing.aiPowerShowcase.wissen.title
marketing.aiPowerShowcase.wissen.desc
marketing.aiPowerShowcase.wissen.features[] (array of 4)
marketing.aiPowerShowcase.wissen.highlight
marketing.aiPowerShowcase.handeln.* (same structure)
marketing.aiPowerShowcase.lernen.* (same structure)
marketing.aiPowerShowcase.processStep1
marketing.aiPowerShowcase.processStep1Desc
marketing.aiPowerShowcase.processStep2
marketing.aiPowerShowcase.processStep2Desc
marketing.aiPowerShowcase.processStep3
marketing.aiPowerShowcase.processStep3Desc
marketing.aiPowerShowcase.bottomStatement1
marketing.aiPowerShowcase.bottomStatement2
marketing.aiPowerShowcase.bottomHighlight1
marketing.aiPowerShowcase.bottomHighlight2
marketing.aiPowerShowcase.bottomHighlight3
```

**Special Considerations:**
- Animated dots on connection lines
- Different icon and color per column (preserve styling)
- Complex nesting structure

**Testing Priority:** HIGH - Verify all 3 columns + process flow

**Estimated Time:** 120 minutes

---

### 8. OmnichannelUnified.tsx ⚠️ **COMPLEX**

**Location:** `src/components/marketing/new/OmnichannelUnified.tsx` (324 lines)

**Hardcoded Strings:** 35 strings
- Line 24-28: "Ein System für Chat & E-Mail – nahtlos verbunden"
- Line 77: "Mehr als nur ein Chat-Widget"
- Lines 87-90: Chat features array (4 features)
- Line 131: "Qualitäts-Garantie durch AI-Scoring"
- Lines 142-145: Email features array (4 features)
- Line 254: "Nahtlos synchronisiert..."
- Lines 272-276: 3 unified features
- Line 313-314: Bottom statement

**Data Structures:**
- Chat features array (4 items with icon + text)
- Email features array (4 items with icon + text + color)
- Unified features grid (3 cards)

**JSON Keys Needed:**
```
marketing.omnichannel.title
marketing.omnichannel.subtitle
marketing.omnichannel.chat.badge
marketing.omnichannel.chat.title
marketing.omnichannel.chat.desc
marketing.omnichannel.chat.features[] (4 items)
marketing.omnichannel.email.badge
marketing.omnichannel.email.title
marketing.omnichannel.email.desc
marketing.omnichannel.email.features[] (4 items with .color)
marketing.omnichannel.unifiedText
marketing.omnichannel.unifiedFeatures[] (3 cards)
marketing.omnichannel.bottomStatement
```

**Special Patterns:**
- Screenshot images (URLs remain)
- Connection visual with animated arrows
- Icon styling based on color prop

**Estimated Time:** 90 minutes

---

### 9. AIIntelligenceDeepDive.tsx 🔥 **VERY COMPLEX - Tabs!**

**Location:** `src/components/marketing/new/AIIntelligenceDeepDive.tsx` (402 lines)

**Hardcoded Strings:** 50+ strings
- Line 34-38: "Mehr als nur ein Chatbot"
- Line 39-42: Enterprise AI Intelligence subtitle
- Tab 1 "quality": Qualitäts-Garantie section (~15 strings)
- Tab 2 "collection": Informations-Sammlung section (~15 strings)
- Tab 3 "journey": Kunden-Verständnis section (~15 strings)
- Plus tab navigation labels

**Data Structures:**
- State: `useState<TabType>("quality")`
- 3 different content sections based on activeTab
- Each tab has examples array with multiple objects

**JSON Keys Needed:**
```
marketing.aiIntelligence.badge
marketing.aiIntelligence.title
marketing.aiIntelligence.subtitle
marketing.aiIntelligence.tabs.quality.label
marketing.aiIntelligence.tabs.quality.title
marketing.aiIntelligence.tabs.quality.subtitle
marketing.aiIntelligence.tabs.quality.examples[] (array)
marketing.aiIntelligence.tabs.collection.* (same structure)
marketing.aiIntelligence.tabs.journey.* (same structure)
```

**Special Considerations:**
- Tab state management (preserve functionality)
- AnimatePresence for tab transitions
- Different colors/styling per tab
- Complex nested examples with multiple properties

**Testing Priority:** HIGH - Test all 3 tabs switch correctly

**Estimated Time:** 120 minutes

---

### 10. DashboardShowcaseSection.tsx ⚠️ **MEDIUM - Tabs**

**Location:** `src/components/marketing/new/DashboardShowcaseSection.tsx` (115 lines)

**Hardcoded Strings:** 10 strings
- Line 20: "So sieht Ihr Dashboard aus"
- Line 23-24: "Chat, Email, Kunden-Info..."
- Line 55: "Live Chat Dashboard"
- Line 68: "Email Dashboard"
- Line 108: Bottom statement

**Data Structures:**
- State: `useState<'livechat' | 'email'>('livechat')`
- Conditional image rendering based on activeTab

**JSON Keys Needed:**
```
marketing.dashboard.title
marketing.dashboard.subtitle
marketing.dashboard.tabs.livechat
marketing.dashboard.tabs.email
marketing.dashboard.bottomText
```

**Special Patterns:**
- Tab switcher with motion effects
- AnimatePresence for screenshot transitions
- Screenshot images (URLs remain)

**Estimated Time:** 45 minutes

---

### 11. AgentProductivity.tsx ⚠️ **MEDIUM - Arrays**

**Location:** `src/components/marketing/new/AgentProductivity.tsx` (251 lines)

**Hardcoded Strings:** 20 strings
- Line 24-28: "Wenn Ihre Agenten übernehmen – perfekt ausgestattet"
- Line 62-83: Tools array (4 tools)
- Lines 131-173: Benefits array (5 benefits)
- Lines 195-231: Use cases array (3 examples)

**Data Structures:**
- Tools array (4 items with icon, title, desc, color)
- Benefits array (5 items)
- Use cases array (3 items)

**JSON Keys Needed:**
```
marketing.agentTools.title
marketing.agentTools.subtitle
marketing.agentTools.tools[] (4 items)
marketing.agentTools.benefits[] (5 items)
marketing.agentTools.examples[] (3 items)
```

**Estimated Time:** 75 minutes

---

### 12. IntegrationStepsSection.tsx ⭐ **SIMPLE - Arrays**

**Location:** `src/components/marketing/new/IntegrationStepsSection.tsx` (127 lines)

**Hardcoded Strings:** 8 strings
- Line 38: "Nahtlose Shopify-Integration"
- Line 40: "Vollautomatische Einrichtung..."
- Lines 5-26: Steps array (3 steps with num, title, desc, time, icon)

**Data Structures:**
```typescript
const steps = [
  { num: 1, title: "App installieren", desc: "...", time: "30 Sekunden", icon: Clock },
  // 2 more steps
];
```

**JSON Keys Needed:**
```
marketing.integration.title
marketing.integration.subtitle
marketing.integration.steps[] (3 items)
  - .num (keep number as is)
  - .title
  - .desc
  - .time
  - .icon (keep icon component)
```

**Estimated Time:** 60 minutes

---

### 13. ROISection.tsx ⚠️ **MEDIUM - Calculator**

**Location:** `src/components/marketing/new/ROISection.tsx` (167 lines)

**Hardcoded Strings:** 15 strings
- Line 67-69: "Messbare Resultate ab Tag 1"
- Line 72-76: ROI description text
- Benefits array (~5 items)
- Stats row (4 stat items)

**Data Structures:**
- Count-up animation hook (preserve!)
- Benefits array
- Stats array

**JSON Keys Needed:**
```
marketing.roi.badge
marketing.roi.title
marketing.roi.subtitle
marketing.roi.description
marketing.roi.benefits[] (array)
marketing.roi.stats[] (array of 4)
```

**Special Patterns:**
- Dark background gradient (preserve styling)
- Animated count-up (preserve functionality)
- Grid layout with hover effects

**Estimated Time:** 75 minutes

---

### 14. AIKnowledgeBanner.tsx 🔥 **VERY COMPLEX - Massive!**

**Location:** `src/components/marketing/new/AIKnowledgeBanner.tsx` (490 lines)

**Hardcoded Strings:** 60+ strings
- Line 71: "AI kennt JEDEN Aspekt Ihres Shops"
- Lines 5-51: dataSourcesLeft array (3 items × 5 properties)
- Lines 29-51: dataSourcesRight array (3 items × 5 properties)
- Lines 302-317: Benefits array (3 items)
- Lines 342-359: Stats row (4 stats)
- Lines 380-422: Examples array (6 complex examples with multiple fields)
- Lines 475-481: Bottom CTA texts

**Data Structures:** VERY COMPLEX!
- Left data sources (3 items)
- Right data sources (3 items)
- Benefits array (3 items)
- Stats array (4 items)
- Examples array (6 items with: question, answer, category, color, difficulty)

**JSON Keys Needed:**
```
marketing.aiKnowledge.title
marketing.aiKnowledge.subtitle
marketing.aiKnowledge.dataSourcesLeft[] (3 items)
marketing.aiKnowledge.dataSourcesRight[] (3 items)
marketing.aiKnowledge.benefits[] (3 items)
marketing.aiKnowledge.stats[] (4 items)
marketing.aiKnowledge.examples[] (6 complex items)
marketing.aiKnowledge.examplesTitle
marketing.aiKnowledge.examplesSubtitle
marketing.aiKnowledge.bottomCTA1
marketing.aiKnowledge.bottomCTA2
```

**Special Considerations:**
- 3D glass sphere animation (preserve!)
- Animated data flow particles
- Complex example cards with multiple color variants
- Large component - may need to split refactoring into sub-tasks

**Testing Priority:** CRITICAL - This is the largest component

**Estimated Time:** 120 minutes

---

## 🎨 SPECIAL PATTERNS REFERENCE

### Pattern 1: Simple String Replacement
```typescript
// BEFORE:
<h1>Ihr 24/7 AI-Mitarbeiter</h1>

// AFTER:
import { useTranslation } from "@/i18n";
const { t } = useTranslation();
<h1>{t('marketing.hero.title')}</h1>
```

### Pattern 2: Array with Map
```typescript
// BEFORE:
const features = [
  "Feature 1",
  "Feature 2"
];

// AFTER:
const { getTranslation } = useTranslation();
const features = getTranslation('marketing.section.features') || [];

{features.map((feature, i) => <div key={i}>{feature}</div>)}
```

### Pattern 3: Object Array with Properties
```typescript
// BEFORE:
const testimonials = [
  { name: "Max", role: "CEO", text: "Great!" }
];

// AFTER:
const testimonials = getTranslation('marketing.testimonials.items') || [];

{testimonials.map((item, i) => (
  <div key={i}>
    <h4>{item.name}</h4>
    <p>{item.role}</p>
    <p>{item.text}</p>
  </div>
))}
```

### Pattern 4: Type-Safe Array Helper
```typescript
const getArray = (key: string): any[] => {
  const result = getTranslation(key);
  return Array.isArray(result) ? result : [];
};

const items = getArray('marketing.section.items');
```

### Pattern 5: Preserve Styling Props
```typescript
// Keep color, icon props for styling:
const tools = getTranslation('marketing.section.tools') || [];

{tools.map((tool, i) => (
  <div className={`bg-${tool.color}-50`}>  {/* Color from JSON */}
    <tool.icon className="w-6 h-6" />       {/* Icon component preserved */}
    <h4>{tool.title}</h4>
  </div>
))}
```

---

## ✅ PRE-REFACTORING CHECKLIST

Before touching ANY component:

### 1. Verify JSON Keys Exist
```bash
# For each component, check keys:
jq '.hero' src/i18n/locales/en/marketing.json
jq '.pricing' src/i18n/locales/en/marketing.json
jq '.faq' src/i18n/locales/en/marketing.json
# etc.
```

### 2. Study Component Structure
- Read entire file
- Understand data flow
- Identify all hardcoded strings
- Note arrays vs simple strings
- Check for state management

### 3. Map Strings to JSON
- Create mapping document
- List every string to replace
- Verify corresponding JSON key
- Note any missing keys

### 4. Plan Refactoring
- Choose appropriate pattern (simple / array / object array)
- Identify components that need `getTranslation()`
- Note any special state/effects to preserve

---

## 🚨 CRITICAL WARNINGS

### DO NOT:
- ❌ Touch unused components in /new/ folder
- ❌ Skip verification of JSON keys
- ❌ Change state management logic
- ❌ Remove motion animations
- ❌ Alter styling classes
- ❌ Change icon components
- ❌ Modify image URLs

### ALWAYS:
- ✅ Read complete component first
- ✅ Verify all keys exist in EN marketing.json
- ✅ Preserve all animations and effects
- ✅ Keep styling props (colors, icons)
- ✅ Test immediately after refactoring
- ✅ Commit after each working component

---

## 📈 RECOMMENDED REFACTORING ORDER

### Tier 1: Conversion Critical (Priority 1-4)
1. HeroSection (Simple, 45min) - First impression
2. FinalCTASection (Simple, 45min) - Conversion point
3. PricingSection (Very Complex, 120min) - Revenue driver
4. FAQSection (Complex, 90min) - Trust builder

**Subtotal:** ~5 hours

### Tier 2: Value Communication (Priority 5-9)
5. ValuePropositionSection (Medium, 75min)
6. AIPowerShowcase (Very Complex, 120min)
7. TestimonialsSection (Medium, 75min)
8. OmnichannelUnified (Complex, 90min)
9. AIIntelligenceDeepDive (Very Complex, 120min)

**Subtotal:** ~8 hours

### Tier 3: Supporting Content (Priority 10-14)
10. DashboardShowcaseSection (Simple, 45min)
11. AgentProductivity (Medium, 75min)
12. IntegrationStepsSection (Simple, 60min)
13. ROISection (Medium, 75min)
14. AIKnowledgeBanner (Very Complex, 120min)

**Subtotal:** ~6 hours

**GRAND TOTAL: ~19 hours for all 14 components**

---

## 🎯 SUCCESS METRICS

After refactoring each component:
- [ ] Zero console errors
- [ ] German text on `/` correct
- [ ] English text on `/en` correct
- [ ] No raw "marketing.*" keys visible
- [ ] Animations still work
- [ ] Mobile responsive
- [ ] State management works
- [ ] Buttons/links functional

---

**Status:** ✅ PHASE 1.2 COMPLETE  
**Confidence Level:** 100% - All components analyzed in detail  
**Ready for:** Phase 1.3 - Unused Component Identification

