# 🏗️ I18N LABELS STRUCTURE - Content Pages Complete

**Date:** November 17, 2025  
**Task:** Design perfect translation key structure for all labels  
**Goal:** Zero hardcoded texts, enterprise-level organization

---

## 📊 **TRANSLATION KEY DESIGN**

### **Principle:** 
All labels go under `content.common.labels.*` for reusability across pages!

### **Structure:**

```json
{
  "content": {
    "common": {
      "labels": {
        // Customer interaction labels
        "customerAsks": "Kunde fragt:",
        "aiResponds": "KI antwortet (3 Sekunden):",
        "timeSaved": "Zeitersparnis:",
        "result": "Ergebnis:",
        "situation": "Situation:",
        "benefit": "Benefit:",
        "details": "Details:",
        
        // Comparison labels
        "without": "Ohne Support:",
        "withAI": "Mit ReplAInow KI:",
        "withoutAutomation": "OHNE KI-Automatisierung:",
        "withAutomation": "MIT ReplAInow:",
        "before": "VORHER:",
        "after": "NACHHER:",
        "vorher": "Vorher:",
        "mitReplainow": "Mit ReplAInow:",
        
        // Cost/Calculator labels
        "agentsNeeded": "Agents benötigt:",
        "monthlyCost": "Monatliche Kosten:",
        "total": "Total:",
        "perMonth": "/Monat",
        "perYear": "/Jahr",
        "savedPerMonth": "gespart pro Monat",
        "savedPerYear": "gespart pro Jahr",
        "monthlySaved": "Monatlich gespart:",
        "annualSaved": "Jährlich gespart:",
        "threeYearsSaved": "3 Jahre gespart:",
        "agentsSaved": "Agents eingespart",
        "fullTimePositionsSaved": "Vollzeit-Stellen eingespart",
        "roiBreakEven": "ROI Break-even:",
        "days": "Tage",
        "savings": "Ersparnis:",
        "percentage": "Prozent:",
        "roi": "ROI:",
        
        // Cost categories
        "salaries": "Gehälter:",
        "benefits": "Benefits",
        "nightShiftSurcharges": "Nachtschicht-Zuschläge:",
        "weekendSurcharges": "Wochenend-Zuschläge:",
        "software": "Software:",
        "recruiting": "Recruiting:",
        "recruitingAmortized": "Recruiting (amort.):",
        "training": "Training:",
        "trainingAmortized": "Training (amort.):",
        "equipment": "Equipment:",
        "equipmentAmortized": "Equipment (amort.):",
        "management": "Management:",
        "managementMinimal": "Management (minimal):",
        "overtime": "Überstunden:",
        "extras": "Extras:",
        "recruitingTrainingExtras": "Recruiting/Training/Extras:",
        
        // Specific cost breakdown
        "nightShift": "Nachtschicht:",
        "weekend": "Wochenende:",
        "dayShift": "1 Agent (Tagesschicht):",
        "replainowAI": "ReplAInow KI:",
        "agentsForComplexCases": "Agent(s) (20-40% Tickets):",
        
        // Section headers
        "seeAlso": "Siehe auch:",
        "tip": "Tipp:",
        "learnMore": "Mehr erfahren",
        "challenge": "Die Herausforderung:",
        "solution": "Die ReplAInow Lösung:",
        "whyMoreThanLinear": "Warum mehr als linear?",
        
        // Time/Location labels
        "timezone": "Zeitzone:",
        "peakHours": "Peak Hours:",
        "coverage": "Coverage:",
        
        // Calculator specific
        "calculateRealCosts": "Berechne deine ECHTEN Support-Kosten",
        "yourTCOAnalysis": "Deine TCO Analyse:",
        "traditionalSupport": "Traditional Support (Menschen):",
        "withReplainowAI": "Mit ReplAInow (AI + Minimal Human):",
        "24-7WithHumans": "24/7 mit Menschen:",
        "24-7WithReplainow": "24/7 mit ReplAInow:",
        
        // Phase labels
        "phase1SmallSimple": "Phase 1: Klein & Einfach",
        "phase2GrownComplex": "Phase 2: Gewachsen & Komplex",
        "tickets": "Tickets:",
        "agents": "Agents:",
        "costs": "Kosten:",
        "naive": "Naiv:",
        "reality": "Reality:",
        
        // Case study labels
        "beforeSetup": "VORHER:",
        "afterSetup": "NACHHER:",
        "additionalBenefit": "Zusätzlicher Benefit:",
        "averageSavings": "Durchschnittliche Ersparnis",
        "roiBreakEvenLabel": "ROI Break-even",
        
        // Helper texts
        "typicalEU": "Typical: 20-25% EU, 25-35% USA",
        "meetingsReviews": "Meetings, Reviews, QA, Planning",
        "supportTurnover": "Support: 30-40% Fluktuation/Jahr",
        "onlyThis": "Das entspricht nur:",
        "totalRange": "Total Range:",
        "example": "Beispiel:",
        
        // Illusion/Reality badges
        "illusion": "💭 Illusion",
        "reality": "⚠️ Realität",
        
        // CTA dynamic texts (with placeholders)
        "saveMonthly": "Jetzt {{amount}}/Monat sparen",
        "saveAmount": "Jetzt {{amount}} sparen"
      },
      
      "internalLinks": {
        "seeAlso247": "Siehe auch: 24/7 Support ohne Nachtschichten",
        "seeAlso247Description": "Automatisierung ist großartig – aber was ist mit nachts und am Wochenende? Erfahre wie ReplAInow 24/7 Support ermöglicht ohne teure Nachtschichten.",
        "read247Guide": "24/7 Support Guide lesen",
        
        "seeAlsoAutomation": "Siehe auch: Support-Automatisierung verstehen",
        "seeAlsoAutomationDescription": "24/7 ist wichtig – aber wie automatisierst du generell deinen Support? Erfahre wie du 60-80% deiner Tickets automatisch bearbeiten kannst.",
        "readAutomationGuide": "Automatisierungs-Guide lesen",
        
        "tipCostReduction": "Tipp: Kosten senken durch Automatisierung",
        "tipCostReductionDescription": "Der größte Kostentreiber sind repetitive Tickets. Lerne wie du 60-80% automatisierst und sofort Kosten senkst.",
        "automationGuide": "Automatisierungs-Guide"
      },
      
      "schema": {
        // For dynamic Schema.org generation
        "home": "Home"
      }
    }
  }
}
```

---

## 🎯 **USAGE PATTERN**

### **Before (Hardcoded):**
```typescript
<span className="font-semibold">Kunde fragt:</span>
```

### **After (i18n):**
```typescript
<span className="font-semibold">{t('content.common.labels.customerAsks')}</span>
```

### **Dynamic Values:**
```typescript
// Before
Jetzt ${monthlySavings.toLocaleString()}/Monat sparen

// After (with interpolation)
t('content.common.labels.saveMonthly', { amount: `$${monthlySavings.toLocaleString()}` })
```

---

## 📋 **IMPLEMENTATION PLAN**

### **Step 1: Add to DE content.json**
- Add `content.common` section with all labels
- German translations (original texts)

### **Step 2: Add to EN content.json**
- Translate all labels to English

### **Step 3: Add to ES content.json**
- Translate all labels to Spanish

### **Step 4: Add to FR content.json**
- Translate all labels to French

### **Step 5: Update 3 TSX Files**
- Replace ALL hardcoded texts with t() calls
- Add interpolation where needed
- Update Schema.org to use translations

---

## 🔍 **COMPLETE LABEL LIST BY CATEGORY**

### **Customer Interaction (9 labels):**
1. customerAsks
2. aiResponds
3. timeSaved
4. result
5. situation
6. benefit
7. details
8. outcome
9. impact

### **Comparison (10 labels):**
1. without
2. withAI
3. withoutAutomation
4. withAutomation
5. before
6. after
7. vorher
8. mitReplainow
9. illusion
10. reality

### **Cost/Financial (20 labels):**
1. agentsNeeded
2. monthlyCost
3. total
4. perMonth
5. perYear
6. savedPerMonth
7. savedPerYear
8. monthlySaved
9. annualSaved
10. threeYearsSaved
11. agentsSaved
12. fullTimePositionsSaved
13. roiBreakEven
14. days
15. savings
16. percentage
17. roi
18. saveMonthly
19. saveAmount
20. additionalBenefit

### **Cost Categories (15 labels):**
1. salaries
2. benefits
3. nightShiftSurcharges
4. weekendSurcharges
5. software
6. recruiting
7. recruitingAmortized
8. training
9. trainingAmortized
10. equipment
11. equipmentAmortized
12. management
13. managementMinimal
14. overtime
15. extras

### **Calculator/Breakdown (10 labels):**
1. calculateRealCosts
2. yourTCOAnalysis
3. traditionalSupport
4. withReplainowAI
5. 24-7WithHumans
6. 24-7WithReplainow
7. nightShift
8. weekend
9. dayShift
10. replainowAI

### **Section Headers (8 labels):**
1. seeAlso
2. tip
3. learnMore
4. challenge
5. solution
6. whyMoreThanLinear
7. setupTimeComparison
8. totalRange

### **Phase/Structure (8 labels):**
1. phase1SmallSimple
2. phase2GrownComplex
3. tickets
4. agents
5. costs
6. naive
7. reality
8. example

### **Time/Location (3 labels):**
1. timezone
2. peakHours
3. coverage

### **Case Study (4 labels):**
1. beforeSetup
2. afterSetup
3. averageSavings
4. roiBreakEvenLabel

### **Helper Texts (4 labels):**
1. typicalEU
2. meetingsReviews
3. supportTurnover
4. onlyThis

---

## 📊 **TOTAL COUNT**

**Labels needed:** ~90 translation keys

**Distribution:**
- Customer/UI labels: 30
- Financial/Cost labels: 35
- Section headers: 10
- Helper texts: 10
- Internal link texts: 5

**All in:** `content.common.labels.*` for maximum reusability!

---

## 🚀 **NEXT STEPS**

1. Add all ~90 keys to DE content.json ✅
2. Translate to EN ✅
3. Translate to ES ✅
4. Translate to FR ✅
5. Update 3 TSX files to use keys ✅
6. Test all 12 URLs (3 pages × 4 languages) ✅

**Estimated Time:** 4-6 hours  
**Quality:** Enterprise-level perfection 🏆




