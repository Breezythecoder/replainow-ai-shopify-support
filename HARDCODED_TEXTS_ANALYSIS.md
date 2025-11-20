# 🔍 COMPLETE HARDCODED TEXTS ANALYSIS - Content Pages

**Date:** November 17, 2025  
**Task:** Identify ALL hardcoded German/English texts in 3 content pages  
**Goal:** 100% i18n coverage - ZERO hardcoded texts

---

## 📊 **EXECUTIVE SUMMARY**

### **Current State:**
- ✅ Main content uses `t('content.xyz')` - translations work
- ❌ **~50-60 hardcoded German labels** across 3 pages
- ❌ **Schema.org JSON-LD** entirely in German (all 3 pages)
- ❌ **OpenGraph tags** in German (all 3 pages)
- ❌ **JSX labels** scattered throughout

### **Impact:**
- ES/FR pages show **mix of Spanish/French/German/English**
- Professional appearance: ❌ BROKEN
- User experience: ❌ CONFUSING
- SEO Schema: ❌ German-only (should be localized)

---

## 📋 **COMPLETE HARDCODED TEXT INVENTORY**

### **Category 1: Schema.org JSON-LD (Structured Data)**

**ALL 3 PAGES - Currently German-only**

#### ShopifyKundensupportAutomatisieren.tsx:
- FAQ Schema (lines 62-91): 3 questions/answers in German
- HowTo Schema (lines 94-132): Name, description, steps in German
- Article Schema (lines 135-162): Headline, description in German
- Breadcrumb Schema (lines 165-182): "Home", "Shopify Kundensupport automatisieren" in German

#### Support24-7Shopify.tsx:
- FAQ Schema (lines 62-73): Uses t() ✅
- HowTo Schema (lines 76-106): Name, description, steps in German ❌
- Article Schema (lines 109-132): Headline, description in German ❌
- Breadcrumb Schema (lines 135-152): "Home", "24/7 Kundensupport" in German ❌

#### SupportKostenSenken.tsx:
- FAQ Schema (lines 95-103): Uses t() ✅
- HowTo Schema (lines 105-118): Steps in German ❌
- Article Schema (lines 120-136): Headline, description in German ❌
- SoftwareApp Schema (lines 138-160): English ✅
- Breadcrumb Schema (lines 162-169): "Home", "Support Kosten senken" in German ❌

**SOLUTION:** Create schema translation keys in content.json

---

### **Category 2: OpenGraph / Twitter Card Meta Tags**

**ALL 3 PAGES - Hardcoded German**

#### ShopifyKundensupportAutomatisieren.tsx (lines 198-218):
- og:title: "Shopify Kundensupport automatisieren | 60-80% weniger Aufwand"
- og:description: "60-80% deines Shopify Kundensupports automatisch bearbeiten..."
- twitter:title: "Shopify Support automatisieren - 60-80%"
- twitter:description: "KI automatisiert 60-80% deiner Support-Tickets in 3 Sekunden"
- twitter:label1/2: "Automatisierung", "Antwortzeit"

#### Support24-7Shopify.tsx (lines 167-185):
- og:title: "24/7 Kundensupport für Shopify | Ohne Nachtschichten"
- og:description: "24/7 Support mit KI statt teuren Nachtschichten..."
- twitter labels: "Ersparnis", "Verfügbarkeit", "85% günstiger", "24/7/365"

#### SupportKostenSenken.tsx (lines 184-202):
- og:title: "Shopify Support Kosten senken | 79-97% Ersparnis"
- og:description: "Support-Kosten um 79-97% senken. TCO-Analyse..."
- twitter labels: "Ersparnis", "ROI", "79-97%", "2 Wochen"

**SOLUTION:** Use t('content.xyz.meta.ogTitle') etc.

---

### **Category 3: JSX Labels & UI Text**

**ALL 3 PAGES - Scattered German labels**

#### **Common Labels (All Pages):**
1. "Kunde fragt:" (Customer asks)
2. "KI antwortet (3 Sekunden):" (AI responds)
3. "Zeitersparnis:" (Time saved)
4. "Details:" (Details)
5. "Benefit:" (Benefit)
6. "Ergebnis:" (Result)
7. "Situation:" (Situation)
8. "Mehr erfahren" (Learn more)
9. "Siehe auch:" (See also)

#### **ShopifyKundensupportAutomatisieren.tsx Specific:**
Lines 431, 513, 516, 522, 553, 563, 574, 591, 597, 603, 675, 678, 682, 688, 692, 696, 699, 710, 717, 729, 788, 959

- Line 431: "Details:"
- Line 513: "Siehe auch: 24/7 Support ohne Nachtschichten"
- Line 516: "Automatisierung ist großartig – aber was ist mit nachts..."
- Line 522: "24/7 Support Guide lesen"
- Line 553: "Kunde fragt:"
- Line 563: "KI antwortet (3 Sekunden):"
- Line 574: "Zeitersparnis:"
- Line 591: "KI bearbeitet automatisch" (label)
- Line 597: "Agent bearbeitet" (label)
- Line 603: "Durchschnittliche Zeitersparnis" (label)
- Line 675: "OHNE KI-Automatisierung:"
- Line 678: "Agents benötigt:"
- Line 682: "Monatliche Kosten:"
- Line 688: "MIT ReplAInow:"
- Line 692: "Agents benötigt:"
- Line 696: "Monatliche Kosten:"
- Line 699: "(${agentCostAfter.toLocaleString()} Agents + ${replainowCost} ReplAInow)"
- Line 710: "gespart pro Monat"
- Line 717: "Vollzeit-Stellen eingespart"
- Line 729: "Jetzt ${monthlySavings.toLocaleString()}/Monat sparen"
- Line 788: "Setup-Zeit Vergleich:"
- Line 959: "Mehr erfahren"

**Total: ~20 hardcoded labels**

#### **Support24-7Shopify.tsx Specific:**
Lines 402, 411, 436, 439, 445, 564, 567, 572, 575, 580, 585, 588, 592, 596, 601, 612, 619, 630, 672, 680, 688, 732, 738, 752, 756, 760, 898

- Line 402: "Ohne Support:"
- Line 411: "Mit ReplAInow KI:"
- Line 436: "Siehe auch: Support-Automatisierung verstehen"
- Line 439: "24/7 ist wichtig – aber wie automatisierst du..."
- Line 445: "Automatisierungs-Guide lesen"
- Line 564: "24/7 mit Menschen:"
- Line 567: "Nachtschicht:"
- Line 572: "Wochenende:"
- Line 575: "Recruiting/Training/Extras:"
- Line 580: "Total:", "/Monat"
- Line 585: "24/7 mit ReplAInow:"
- Line 588: "ReplAInow KI:"
- Line 592: "1 Agent (Tagesschicht):"
- Line 596: "Extras:"
- Line 601: "/Monat"
- Line 612: "gespart pro Monat"
- Line 619: "Nacht/Wochenend-Agents eingespart"
- Line 630: "Jetzt ${savingsMonthly.toLocaleString()}/Monat sparen"
- Line 672: "Kunde fragt:"
- Line 680: "KI antwortet (3 Sekunden):"
- Line 688: "Ergebnis:"
- Line 732: "Die Herausforderung:"
- Line 738: "Die ReplAInow Lösung:"
- Line 752: "Zeitzone:"
- Line 756: "Peak Hours:"
- Line 760: "Coverage:"
- Line 898: "Mehr erfahren"

**Total: ~25 hardcoded labels**

#### **SupportKostenSenken.tsx Specific:**
Lines 322, 344, 407, 408, 507, 538, 548, 562, 597, 625, 682, 699, 710, 712-721 (many!), 732, 734-741 (many!), 755-770 (many!), 815, 912, 916, 963, 980, 1000, 1004, 1008, 1013, 1027, 1104

- Line 322: "💭 Illusion"
- Line 334: "Das entspricht nur:"
- Line 344: "⚠️ Realität"
- Line 398: "Tipp: Kosten senken durch Automatisierung"
- Line 401: "Der größte Kostentreiber sind repetitive Tickets..."
- Line 407: "Automatisierungs-Guide"
- Line 447: "Total Range:"
- Line 456: getObject title or "Gesamtbetriebskosten..."
- Line 459-469: Multiple "Pro Agent/Jahr:", "3 Agents/Jahr:", "Pro Monat:"
- Line 507: "Ersparnis mit ReplAInow:"
- Line 538: "Phase 1: Klein & Einfach"
- Line 540-543: "Tickets:", "Agents:", "Kosten:"
- Line 548: "Phase 2: Gewachsen & Komplex"
- Line 553: "Naiv:"
- Line 554: "Reality:"
- Line 562: "Warum mehr als linear?"
- Line 575: "Mit ReplAInow:"
- Line 597: "Berechne deine ECHTEN Support-Kosten" (already uses t? check)
- Line 625: "Typical: 20-25% EU, 25-35% USA"
- Line 682: "Meetings, Reviews, QA, Planning"
- Line 699: "Support: 30-40% Fluktuation/Jahr"
- Line 705: "Deine TCO Analyse:"
- Line 710-744: MASSIVE calculator result labels
  - "Traditional Support (Menschen):"
  - "Gehälter:", "Benefits", "Nachtschicht-Zuschläge:", "Wochenend-Zuschläge:"
  - "Software:", "Recruiting (amort.):", "Training (amort.):", "Equipment (amort.):"
  - "Management:", "Überstunden:", "TOTAL:", "/Mo", "/Jahr"
  - "Mit ReplAInow (AI + Minimal Human):"
  - "ReplAInow ({plan}):", "Agent(s) (20-40% Tickets)", "Management (minimal)"
  - Line-through texts: "Recruiting:", "Training:", "Extra Software:", "Überstunden:"
- Line 755-770: Savings display
  - "Monatlich gespart:", "Jährlich gespart:", "3 Jahre gespart:"
  - "Agents eingespart", "ROI Break-even:", "Tage"
- Line 779: "Jetzt ${savingsMonthly}/Monat sparen"
- Line 815: "Beispiel:" (Example)
- Line 912, 916: "Vorher:", "Mit ReplAInow:"
- Line 922: saving.impact, saving.savings, 'Benefit'
- Line 963: "VORHER:"
- Line 980: "NACHHER:"
- Line 1000: "Ersparnis:"
- Line 1004: "Prozent:"
- Line 1008: "ROI:"
- Line 1013: "Zusätzlicher Benefit:"
- Line 1027: "Durchschnittliche Ersparnis"
- Line 1031: "ROI Break-even"
- Line 1104: "Mehr erfahren"

**Total: ~40-50 hardcoded labels!**

---

Das ist eine MASSIVE Aufgabe. Ich muss:
1. Alle diese Labels in eine strukturierte Key-Liste umwandeln
2. Die Keys zu allen 4 content.json hinzufügen
3. Alle 3 TSX files updaten

Lass mich einen strukturierten Plan machen.
</thinking>

Perfect! Alle 3 Pages gelesen. Jetzt erstelle ich eine **komplette systematische Analyse**:

<function_calls>
<invoke name="todo_write">
<parameter name="merge">true



