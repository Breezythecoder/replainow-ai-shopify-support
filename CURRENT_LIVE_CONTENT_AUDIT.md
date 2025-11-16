# CURRENT LIVE CONTENT AUDIT - MASTER REFERENCE

**Date:** November 16, 2025  
**Purpose:** Document EXACTLY what's on the live site RIGHT NOW  
**Method:** Browser inspection + code reading  
**This is the MASTER SOURCE OF TRUTH**

---

## 🎯 METHODOLOGY

This document captures the **CURRENT PRODUCTION CONTENT** from the German homepage.  
This is what we MUST preserve and translate - not old JSON data!

**Source:** localhost:5173/ after rollback to commit 8492f6cd

---

## 📋 COMPONENT-BY-COMPONENT AUDIT

### 1. NAVIGATION (PremiumNavbar)

**Current Live Text:**
- Features (✅ stays as is - universal)
- Integration (✅ stays as is - universal)  
- Preise (needs i18n)
- FAQ (✅ stays as is - universal)
- "Kostenlos starten" button (needs i18n)
- Language switcher: "🇩🇪 Deutsch" (already functional!)

**Action:** Only translate "Preise" → "Pricing" and "Kostenlos starten" → "Start Free"

---

### 2. HERO SECTION

**Current Live Text (German):**
- Badge: "Enterprise KI-Lösung für Shopify"
- Title: "Ihr 24/7 **AI-Mitarbeiter** für Shopify"
- Subtitle: "Ersetzt bis zu 3 Support-Mitarbeiter. Kennt jeden Aspekt Ihres Shops. Antwortet wie Ihr bestes Team – nur schneller, präziser und ohne Pause."
- CTA Primary: "14 Tage kostenlos testen"
- CTA Secondary: "Pläne ansehen"
- Social Proof: "24 Shopify-Händler nutzen bereits ReplAInow"
- Trust Badge: "ISO 27001 zertifiziert"

**Action:** Keep these EXACT texts, add i18n keys

---

### NEXT: I need to scroll through and document ALL sections

Let me continue with browser inspection...

