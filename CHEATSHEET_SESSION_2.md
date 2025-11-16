# 📋 SESSION 2 CHEATSHEET - Quick Reference

**Keep this open while working!**

---

## 🎯 STATUS
- ✅ Done: 7/14 components (Hero, AIPowerShowcase, ValueProp, Testimonials, **Pricing**, **FAQ**, FinalCTA)
- ⏳ Remaining: 7 components + nav + meta + testing
- ⏰ Time: ~6-8 hours

---

## ⚡ ESSENTIAL COMMANDS

```bash
# Start dev server
cd /Users/rcalabrese/replainow-ai-shopify-support
npm run dev

# Validate JSON
jq '.' src/i18n/locales/en/marketing.json > /dev/null

# Check if section exists
grep '"sectionName"' src/i18n/locales/en/marketing.json

# Git workflow
git add [files]
git commit -m "✅ i18n: ComponentName - Verified on all 4 languages"
git push origin main

# Production
npm run build
npm run preview
```

---

## 🎯 THE PROCESS (For Each Component)

1. ✅ Check translations in ALL 4 JSONs
2. ✅ Create missing sections
3. ✅ Add i18n to component
4. ✅ Test / /en /es /fr
5. ✅ Check console (F12)
6. ✅ Commit + push
7. ✅ Next component

**Time:** 20-40min per component

---

## 🚨 NEVER SKIP

- ❌ Don't implement without checking ES/FR translations
- ❌ Don't test only DE/EN (MUST test ES/FR too!)
- ❌ Don't batch commit (one component at a time!)
- ❌ Don't skip console check
- ❌ Don't assume JSON is correct (verify!)

---

## ✅ MUST DO

- ✅ Check ALL 4 language files before implementing
- ✅ Test on ALL 4 languages (/  /en  /es  /fr)
- ✅ Commit AFTER each component
- ✅ Validate JSON after edits
- ✅ Check console EVERY time

---

## 🔧 QUICK FIXES

**Raw keys showing:**
→ Translation missing, add to JSON

**JSON error:**
→ Check commas, brackets, quotes

**Console error:**
→ Read message, check key path

**Translation not showing:**
→ Refresh browser, check spelling

---

## 📁 FILE LOCATIONS

**Components:**
`src/components/marketing/new/[Name].tsx`

**Translations:**
`src/i18n/locales/de/marketing.json`
`src/i18n/locales/en/marketing.json`
`src/i18n/locales/es/marketing.json`
`src/i18n/locales/fr/marketing.json`

---

## 🎯 QUALITY CHECKLIST (Per Component)

- [ ] No raw keys on / ✓
- [ ] No raw keys on /en ✓
- [ ] No raw keys on /es ✓
- [ ] No raw keys on /fr ✓
- [ ] No console errors ✓
- [ ] Committed + pushed ✓

---

## ⚡ TEST URLS

```
http://localhost:5173/          # German
http://localhost:5173/en        # English
http://localhost:5173/es        # Spanish
http://localhost:5173/fr        # French
http://localhost:5173/#pricing  # Jump to pricing
http://localhost:5173/#faq      # Jump to FAQ
```

---

## 🎯 SUCCESS = 

✅ All 14 components with i18n  
✅ Tested on 4 languages  
✅ Production build works  
✅ Zero errors, zero raw keys  
✅ **USER HAPPY!** 🎉

---

**Read:** ULTIMATE_HANDOFF_SESSION_2_NO_MISTAKES.md  
**Use:** COPY_PASTE_TRANSLATIONS_READY.md  
**Follow:** SESSION_2_EXECUTION_CHECKLIST.md  

**YOU GOT THIS!** 💪

