# 🔧 AI KNOWLEDGE BANNER - i18n INTEGRATION FIX

**Datum:** 1. Dezember 2025  
**Problem:** AIKnowledgeBanner.tsx hat hardcoded deutschen Text  
**Lösung:** i18n Integration - alle 4 Sprachen  
**Status:** 🔄 In Arbeit

---

## 🔍 PROBLEM ANALYSE

### **Komponente:** `src/components/marketing/new/AIKnowledgeBanner.tsx`

**Hardcoded Text (Deutsch):**
- Zeilen 22-31: `leftSources` und `rightSources` Arrays
- Zeile 44: H2 Headline
- Zeile 47: Subtitle
- Zeile 191-216: Shopify Hub (SHOPIFY, LIVE, Stats)
- Zeile 268: "AI sieht JEDE Änderung in Echtzeit"
- Zeilen 278-319: Live Activity Feed (6 Events)
- Zeile 385: Bottom Summary

**KEINE i18n Integration!** ❌

---

## ✅ ÜBERSETZUNGEN EXISTIEREN BEREITS!

### **In `marketing.json` (alle 4 Sprachen):**

**Deutsch (`de/marketing.json` Zeile 952+):**
```json
"aiKnowledge": {
  "title": "AI kennt JEDEN Aspekt Ihres Shops",
  "subtitle": "Produkte, Bestellungen, Kunden, Richtlinien...",
  "dataSourcesLeft": [...],
  "dataSourcesRight": [...]
}
```

**English (`en/marketing.json` Zeile 1027+):**
```json
"aiKnowledge": {
  "title": "AI Knows EVERY Aspect of Your Store",
  "subtitle": "Products, orders, customers, policies...",
  ...
}
```

**Spanish (`es/marketing.json` Zeile 589+):**
```json
"aiKnowledge": {
  "title": "La IA Conoce CADA Aspecto de Tu Tienda",
  "subtitle": "Productos, pedidos, clientes, políticas...",
  ...
}
```

**French (`fr/marketing.json` Zeile 599+):**
- Muss noch verifiziert werden

---

## 🎯 LÖSUNG

### **Änderung benötigt:**

1. Import `useTranslation` hook
2. Replace alle hardcoded Strings mit `t('marketing.aiKnowledge.xyz')`
3. Dynamische Arrays aus Translations laden

### **Betroffene Bereiche:**

| Bereich | Zeilen | Hardcoded? | i18n Key |
|---------|--------|------------|----------|
| leftSources | 21-25 | ✅ JA | `aiKnowledge.dataSourcesLeft` |
| rightSources | 27-31 | ✅ JA | `aiKnowledge.dataSourcesRight` |
| Main Title | 43-44 | ✅ JA | `aiKnowledge.title` |
| Subtitle | 46-48 | ✅ JA | `aiKnowledge.subtitle` |
| Center Hub | 191-216 | ✅ JA | Teilweise |
| Live Sync Section | 262-388 | ✅ JA | Komplett neu! |

---

## 📋 FEHLENDE ÜBERSETZUNGEN

### **Was in marketing.json EXISTIERT:**
✅ `title`, `subtitle`
✅ `dataSourcesLeft`, `dataSourcesRight`
✅ `benefits`, `stats`
✅ `examples`

### **Was FEHLT (muss hinzugefügt werden):**
❌ Live Sync Section Texte:
  - "AI sieht JEDE Änderung in Echtzeit"
  - "Sie ändern etwas in Shopify? AI weiß es in 3 Sekunden"
  - Live Activity Events (6 Stück)
  - Bottom Summary

❌ Center Hub Labels:
  - "SHOPIFY"
  - "LIVE"
  - "Sync", "Genau"

---

## 🚀 UMSETZUNGSPLAN

### **Schritt 1: Übersetzungen ergänzen**

Füge zu allen 4 `marketing.json` hinzu:

```json
"aiKnowledge": {
  // ... existing ...
  "liveSyncTitle": "AI sieht JEDE Änderung in Echtzeit",
  "liveSyncSubtitle": "Sie ändern etwas in Shopify? AI weiß es in 3 Sekunden – automatisch, ohne manuelle Arbeit.",
  "liveSyncBadge": "LIVE SYNC AKTIV",
  "centerHub": {
    "title": "SHOPIFY",
    "liveBadge": "LIVE",
    "syncLabel": "Sync",
    "accuracyLabel": "Genau"
  },
  "liveEvents": [
    {
      "event": "Neue Bestellung",
      "detail": "#1847 • €127.50"
    },
    // ... 5 more
  ],
  "bottomSummary": "Und 100+ weitere Events – alle automatisch synchronisiert, komplett wartungsfrei"
}
```

### **Schritt 2: Komponente umstellen**

```typescript
import { useTranslation } from "@/i18n";

const AIKnowledgeBanner = () => {
  const { t } = useTranslation();
  
  // VORHER (hardcoded):
  const leftSources = [
    { icon: Package, title: "Produkte & Varianten", desc: "Alle SKUs, Preise, Stock" },
    ...
  ];
  
  // NACHHER (i18n):
  const leftSources = t('marketing.aiKnowledge.dataSourcesLeft', { returnObjects: true });
  
  // ...
}
```

---

## 🔥 AKTUELLER STATUS

**Problem identifiziert:** ✅  
**Übersetzungen vorhanden:** ✅ (DE, EN, ES) / ⚠️ (FR - muss verifiziert werden)  
**Fehlende Keys:** ⚠️ Live Sync Section  
**Komponente umgestellt:** ❌ Steht aus  

---

## 💡 EMPFEHLUNG

**Option A: Quick Fix (10 Min)**
- Nur Haupt-Texte i18n (Title, Subtitle, leftSources, rightSources)
- Live Sync Section bleibt vorerst hardcoded
- **Impact:** 80% der Texte übersetzt

**Option B: Complete Fix (30 Min)**
- Alle Texte i18n (inkl. Live Sync Section)
- Neue Keys zu allen 4 marketing.json hinzufügen
- Komponente komplett umstellen
- **Impact:** 100% der Texte übersetzt

**Meine Empfehlung: Option B!**
- Saubere Lösung
- Einmal richtig gemacht
- Keine Tech-Debt

---

**Soll ich das jetzt fixen? 🚀**

