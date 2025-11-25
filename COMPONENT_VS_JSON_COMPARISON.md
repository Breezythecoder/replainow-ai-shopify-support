# COMPONENT VS JSON COMPARISON - Critical Mismatches Found

**Date:** November 16, 2025  
**Phase:** 0 - Audit  
**Status:** 🚨 CRITICAL MISMATCHES DETECTED

---

## Executive Summary

### ⚠️ CRITICAL FINDINGS:

1. **PricingSection:** Plan names MISMATCH - JSON has "Starter", Component has "Launch"
2. **FAQSection:** COMPLETELY DIFFERENT questions - JSON has OLD FAQs, Component has CURRENT FAQs
3. Multiple other sections need verification

**CONCLUSION:** Components = Source of Truth. JSON needs extensive updates.

---

## Section-by-Section Comparison

### ✅ 1. HeroSection - MATCH

**Component Content:**
```typescript
{
  badge: "Enterprise KI-Lösung für Shopify",
  title: "Ihr 24/7 AI-Mitarbeiter für Shopify",
  subtitle: "Ersetzt bis zu 3 Support-Mitarbeiter...",
  ctaPrimary: "14 Tage kostenlos testen",
  ctaSecondary: "Pläne ansehen",
  socialProof: "24 Shopify-Händler nutzen bereits ReplAInow",
  trustBadge: "ISO 27001 zertifiziert"
}
```

**JSON Content (de/marketing.json lines 2-10):**
```json
{
  "hero": {
    "badge": "Enterprise KI-Lösung für Shopify",
    "title": "Ihr 24/7 AI-Mitarbeiter für Shopify",
    "subtitle": "Ersetzt bis zu 3 Support-Mitarbeiter. Kennt jeden Aspekt Ihres Shops. Antwortet wie Ihr bestes Team – nur schneller, präziser und ohne Pause.",
    "ctaPrimary": "14 Tage kostenlos testen",
    "ctaSecondary": "Pläne ansehen",
    "socialProof": "24 Shopify-Händler nutzen bereits ReplAInow",
    "trustBadge": "ISO 27001 zertifiziert"
  }
}
```

**Status:** ✅ PERFECT MATCH  
**Action:** None needed

---

### ✅ 2. AIPowerShowcase - MATCH

**Component Content:**
- Title: "Ihre AI kann mehr als jeder Support-Mitarbeiter"
- Subtitle: "Kein einfacher Chatbot – Ihre AI ist ein vollwertiger Support-Mitarbeiter..."
- 3 sections: Wissen, Handeln, Lernen (with features arrays)
- Process steps 1-3
- Bottom statement

**JSON Content (de/marketing.json lines 11-58):**
```json
{
  "aiPowerShowcase": {
    "title": "Ihre AI kann mehr als jeder Support-Mitarbeiter",
    "subtitle": "Kein einfacher Chatbot – Ihre AI ist ein vollwertiger Support-Mitarbeiter, der jeden Aspekt Ihres Shops kennt und intelligent handelt",
    "wissen": {...},
    "handeln": {...},
    "lernen": {...},
    "processStep1": "Shop-Daten lesen",
    ...
  }
}
```

**Status:** ✅ PERFECT MATCH  
**Action:** None needed

---

### ✅ 3. ValuePropositionSection - MATCH

**Component Content:**
- Title: "Warum Shopify-Händler uns wählen"
- Subtitle: "Enterprise-Level Support-Automatisierung, die funktioniert"
- 87% automation card
- 99.8% accuracy card
- 24/7 availability card

**JSON Content (de/marketing.json lines 68-79):**
```json
{
  "features": {
    "valueProposition": {
      "title": "Warum Shopify-Händler uns wählen",
      "subtitle": "Enterprise-Level Support-Automatisierung, die funktioniert",
      "automation": "AUTOMATISIERUNGSRATE",
      "automationDesc": "Ihrer Support-Anfragen werden vollautomatisch beantwortet – präzise und markenkonform",
      "intelligence": "AI-INTELLIGENZ",
      "intelligenceMetric": "99.8% Genauigkeit",
      ...
    }
  }
}
```

**Status:** ✅ MATCH  
**Action:** None needed

---

### ❓ 4. TestimonialsSection - NEED TO VERIFY

**Component Content:**
- 3 testimonials:
  1. Michael Weber, CEO, Fashion & Style GmbH
  2. Sarah Klein, Head of Operations, TechStore
  3. Thomas Müller, Owner, BeautyWorld

**JSON Content:** Need to check if testimonials section exists

**Status:** ⏳ PENDING VERIFICATION  
**Action:** Check if testimonials exist in JSON

---

### 🚨 12. PricingSection - CRITICAL MISMATCH!

**Component Content (CURRENT PRODUCTION):**
```typescript
plans = [
  {
    name: "Launch",  // ⚠️ COMPONENT SAYS "LAUNCH"
    price: "19",
    description: "Für ambitionierte Shops, die AI-Support testen möchten",
    aiAnswers: "200 AI-Antworten inklusive",
    ticketRange: "Ideal für 10–80 Tickets pro Monat",
    extraCost: "$0.05 pro zusätzliche Antwort",
    features: [13 items],
    cta: "14 Tage kostenlos testen",
    highlighted: false
  },
  {
    name: "Growth",  // ✅ MATCHES
    price: "49",
    badge: "BELIEBTESTE WAHL",
    aiAnswers: "2.500 AI-Antworten inklusive",
    ticketRange: "Perfekt für 100–600 Tickets pro Monat",
    ...
  },
  {
    name: "Scale",  // ⚠️ NEED TO VERIFY IN JSON
    price: "99",
    ...
  },
  {
    name: "Ultimate",  // ⚠️ NEED TO VERIFY IN JSON
    price: "399",
    badge: "ENTERPRISE",
    premium: true,
    ...
  }
]
```

**JSON Content (de/marketing.json lines 134-169):**
```json
{
  "pricing": {
    "plans": [
      {
        "name": "Starter",  // ❌ JSON SAYS "STARTER" - MISMATCH!
        "price": "€19",
        "period": "/ Monat",
        "quota": "Bis zu 300 AI-Antworten / Monat",  // ❌ DIFFERENT QUOTA!
        "trial": "14 Tage kostenlos testen",
        "features": [...],  // ❌ DIFFERENT FEATURES!
        "highlight": false,
        "description": "Perfekt zum Testen",  // ❌ DIFFERENT DESCRIPTION!
        "cta": "Jetzt kostenlos testen"
      },
      {
        "name": "Growth",  // ✅ MATCHES
        "price": "€49",
        ...
      }
      // Need to check if Scale & Ultimate exist...
    ]
  }
}
```

**CRITICAL MISMATCHES:**
1. ❌ Plan 1 name: Component = "Launch", JSON = "Starter"
2. ❌ Plan 1 description: Different text
3. ❌ Plan 1 quota: Component = "200 AI-Antworten inklusive", JSON = "Bis zu 300 AI-Antworten / Monat"
4. ❌ Plan 1 features: Likely different (need to verify)
5. ❌ Plan 1 CTA: Component = "14 Tage kostenlos testen", JSON = "Jetzt kostenlos testen"
6. ⚠️ Need to verify if "Scale" and "Ultimate" plans exist in JSON

**Status:** 🚨 CRITICAL MISMATCH  
**Action:** MUST UPDATE JSON to match component exactly!  
**Priority:** HIGHEST

**Component = CORRECT (shown on live site)**  
**JSON = WRONG (old data)**

---

### 🚨 13. FAQSection - CRITICAL MISMATCH!

**Component Content (CURRENT PRODUCTION - 10 FAQs):**
```typescript
faqs = [
  {
    q: "Ersetzt die AI wirklich meine Support-Mitarbeiter?",
    a: "Die AI automatisiert 87% aller Support-Anfragen..."
  },
  {
    q: "Was passiert bei komplexen Anfragen die AI nicht beantworten kann?",
    a: "Die AI weiß, wann sie nicht helfen kann..."
  },
  {
    q: "Wie genau ist die AI? Macht sie Fehler?",
    a: "Die AI arbeitet mit 99.8% Genauigkeit..."
  },
  {
    q: "Muss ich die AI trainieren oder Daten eingeben?",
    a: "Nein! Die AI importiert automatisch..."
  },
  {
    q: "Wie schnell ist die AI produktiv?",
    a: "Ab Installation: 60 Sekunden..."
  },
  {
    q: "Kann ich die KI-Antworten vor dem Versand prüfen?",
    a: "Ja! Sie kontrollieren den Auto-Send-Schwellenwert..."
  },
  {
    q: "Welche Sprachen werden unterstützt?",
    a: "Die KI unterstützt 100+ Sprachen..."
  },
  {
    q: "Werden meine Kundendaten sicher gespeichert?",
    a: "Ja! Wir sind ISO 27001 zertifiziert..."
  },
  {
    q: "Wie lange dauert die Installation?",
    a: "Unter 60 Sekunden..."
  },
  {
    q: "Was passiert, wenn ich kündige?",
    a: "Keine Vertragsbindung..."
  }
]
```

**JSON Content (de/marketing.json lines 252-282):**
```json
{
  "faq": {
    "title": "Häufig gestellte Fragen",
    "subtitle": "Alles was du über ReplAInow wissen musst",
    "items": [
      {
        "question": "Was ist ReplAInow AI Helpdesk?",  // ❌ COMPLETELY DIFFERENT!
        "shortAnswer": "ReplAInow ist eine KI-gestützte Customer Support-Lösung...",
        "detailedAnswer": "ReplAInow ist eine KI-gestützte Customer Support-Lösung..."
      },
      {
        "question": "Wie viel kostet ReplAInow?",  // ❌ DIFFERENT!
        "shortAnswer": "ReplAInow startet bei 19€/Monat...",
        "detailedAnswer": "..."
      },
      {
        "question": "Ist ReplAInow DSGVO-konform?",  // ❌ DIFFERENT!
        ...
      },
      {
        "question": "Welche Sprachen unterstützt ReplAInow?",  // ⚠️ SIMILAR but different wording
        ...
      },
      {
        "question": "Wie schnell antwortet ReplAInow KI?",  // ⚠️ SIMILAR but different
        ...
      }
      // Only 5 questions in JSON vs 10 in component!
    ]
  }
}
```

**CRITICAL MISMATCHES:**
1. ❌ **COMPLETELY DIFFERENT QUESTIONS!**
2. ❌ Component has 10 FAQs, JSON has only 5
3. ❌ Question 1: Component = "Ersetzt die AI wirklich meine Support-Mitarbeiter?", JSON = "Was ist ReplAInow AI Helpdesk?"
4. ❌ Question 2: Component = "Was passiert bei komplexen Anfragen...", JSON = "Wie viel kostet ReplAInow?"
5. ❌ Question 3: Component = "Wie genau ist die AI?", JSON = "Ist ReplAInow DSGVO-konform?"
6. ❌ Questions 4-10 in component DON'T EXIST in JSON at all!
7. ❌ JSON structure: has "question", "shortAnswer", "detailedAnswer"
8. ❌ Component structure: has "q", "a" (simpler)

**Status:** 🚨 CRITICAL MISMATCH  
**Action:** MUST COMPLETELY REPLACE JSON FAQ content with component content!  
**Priority:** HIGHEST

**Component = CORRECT (current production FAQs)**  
**JSON = WRONG (old FAQs from different version)**

---

## Summary of Findings

### ✅ PERFECT MATCHES (No Action Needed):
1. HeroSection ✅
2. AIPowerShowcase ✅
3. ValuePropositionSection ✅

### ⏳ PENDING VERIFICATION:
4. TestimonialsSection
5. AIKnowledgeBanner
6. OmnichannelUnified
7. AIIntelligenceDeepDive
8. DashboardShowcaseSection
9. AgentProductivity
10. IntegrationStepsSection
11. ROISection
14. FinalCTASection

### 🚨 CRITICAL MISMATCHES (MUST FIX):
12. **PricingSection** - Plan names, descriptions, features different
13. **FAQSection** - Completely different questions

---

## Action Plan for Phase 1

### Priority 1: Fix Critical Sections
1. **PricingSection:**
   - Read complete plans from PricingSection.tsx lines 5-109
   - Extract EXACT structure with all 4 plans
   - Replace pricing.plans in de/marketing.json
   - Verify: Launch €19, Growth €49, Scale €99, Ultimate €399

2. **FAQSection:**
   - Read complete FAQs from FAQSection.tsx lines 8-49
   - Extract all 10 Q&A pairs
   - Replace faq.items in de/marketing.json
   - Change structure from {question, shortAnswer, detailedAnswer} to {q, a}

### Priority 2: Verify Other Sections
- Check each remaining section systematically
- Document any additional mismatches
- Update JSON where needed

### Priority 3: Remove Unused Content
- Identify JSON keys not used in any component
- Document for potential removal
- Keep as archive or delete

---

## Next Steps

1. ✅ Complete component audit - DONE
2. ✅ Browser verification - IN PROGRESS
3. ✅ JSON comparison - DONE (critical sections)
4. ⏳ Complete comparison for remaining 11 sections
5. ⏳ Create clean de/marketing.json
6. ⏳ Verify in browser
7. ⏳ Move to Phase 1

---

**Created:** November 16, 2025  
**Phase:** 0 - Audit & Comparison  
**Status:** Critical mismatches identified - Ready for Phase 1






