# ⚡ QUICK REFERENCE GUIDE

**For:** Quick lookups, common tasks, reminders  
**Full Docs:** See individual docs for complete information

---

## 🔥 MOST IMPORTANT FACTS

### Real Data (NEVER Change These!):
```
✅ Pricing: $19, $49, $99, $399 (USD)
✅ Automation: 60-80% (not 87%!)
✅ Languages: 100+ (not 32+!)
✅ Response Time: 3 seconds
✅ Setup Time: 60 seconds
✅ Rating: 4.9/5 from 280+ reviews
```

### Current URLs (14):
```
Homepage: /
Languages: /en, /es, /fr (3)
Content: /shopify-kundensupport-automatisieren,
         /24-7-kundensupport-shopify,
         /shopify-support-kosten-senken (3)
Legal: /privacy, /terms, /cookies, /impressum,
       /security, /refund, /uninstall (7)
```

---

## 🛠️ COMMON TASKS

### Start Dev Server:
```bash
npm run dev
# Visit http://localhost:5173
```

### Build for Production:
```bash
npm run build
npm run preview  # Test production build
```

### Add New Content Page:
1. Create i18n JSON in `src/i18n/locales/de/content.json`
2. Create component in `src/pages/content/PageName.tsx`
3. Add route in `src/App.tsx`
4. Update sitemap in `scripts/seo/generate-sitemap.mjs`
5. Add footer link in `src/components/marketing/UltraFooter.tsx`
6. Update LLM Facts in `public/.well-known/llm-facts.json`
7. Test, commit, push

### Add New Language:
1. Add to `src/i18n/config.ts` (SUPPORTED_LOCALES)
2. Add to `src/i18n/locale.ts` (localeMap)
3. Create folder `src/i18n/locales/{lang}/`
4. Copy & translate 5 JSON files
5. Import in `src/i18n/index.ts`
6. Add route `/lang` in `src/App.tsx`
7. Update sitemap
8. Test, commit, push

### Fix i18n Error:
```typescript
// Error: "t(...).map is not a function"
// Fix: Use getTranslation() for arrays/objects

// ❌ Wrong:
t('content.page.items').map(...)

// ✅ Correct:
getTranslation('content.page.items').map(...)
// Or:
getArray('content.page.items').map(...)
```

---

## 📁 KEY FILES

### Must Know:
- `src/App.tsx` - All routes
- `src/i18n/index.ts` - Translation system
- `src/i18n/locales/de/content.json` - Content translations
- `src/pages/content/ShopifyKundensupportAutomatisieren.tsx` - Template

### Important:
- `src/components/marketing/UltraFooter.tsx` - Footer (add links!)
- `scripts/seo/generate-sitemap.mjs` - Sitemap (add URLs!)
- `public/.well-known/llm-facts.json` - AI facts (update!)

### Reference:
- `marketing-summary-replainow/*.md` - Feature docs (REAL DATA!)
- `docs/*.md` - Complete guides

---

## 🎨 DESIGN QUICK REF

### Colors:
```
Purple: #7c3aed (primary)
Green: #16a34a (money/success)
Red: #dc2626 (cost/problem)
Blue: #2563eb (info/night)
```

### Common Classes:
```
Section: py-20 bg-gradient-to-br
Card: rounded-2xl p-6 shadow-lg border
Button: px-8 py-4 rounded-xl font-semibold
Grid: grid md:grid-cols-2 gap-6
```

---

## ⚠️ CRITICAL WARNINGS

❌ **NEVER:**
- Change pricing without asking
- Invent features (check docs!)
- Break working pages
- Skip testing
- Rush quality
- Add English terms to German content!

✅ **ALWAYS:**
- Verify data with docs
- Test before commit
- Follow patterns
- Read docs first
- Ask when unsure

---

## 📞 CONTACTS

- **Support:** support@replainow.com
- **Privacy:** privacy@replainow.com
- **Security:** security@replainow.com

---

## 🔗 USEFUL LINKS

- **Repo:** https://github.com/Breezythecoder/replainow-ai-shopify-support
- **Live Site:** https://replainow.com
- **Schema Validator:** https://validator.schema.org
- **GSC:** https://search.google.com/search-console

---

**Keep this handy for quick lookups!**

