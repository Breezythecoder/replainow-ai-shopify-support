# ⚡ Quick Start Guide - ReplAInow

**Get the enterprise-grade Shopify AI helpdesk running in 5 minutes!**

---

## 🎯 For New Developers

### Step 1: Clone & Install (2 minutes)
```bash
git clone https://github.com/Breezythecoder/replainow-ai-shopify-support
cd replainow-ai-shopify-support
npm ci
```

### Step 2: Start Development (30 seconds)
```bash
npm run dev
```

Open: http://localhost:5173

**Test all languages**:
- German: http://localhost:5173/
- English: http://localhost:5173/en
- Spanish: http://localhost:5173/en
- French: http://localhost:5173/fr

### Step 3: Make Changes
```bash
# Edit a component
vim src/components/marketing/ModernHero.tsx

# Or edit translations
vim src/i18n/locales/en/marketing.json

# Changes auto-reload in browser!
```

### Step 4: Build & Deploy
```bash
# Build for production
npm run build

# Preview locally
npm run preview

# Push to deploy
git add .
git commit -m "feat: my awesome feature"
git push origin main

# ✅ Auto-deploys to https://replainow.com in ~1 minute
```

---

## 🌍 For Translators

### Add a New Language (15 minutes)

```bash
# 1. Create locale directory
mkdir -p src/i18n/locales/it

# 2. Copy English files as template
cp src/i18n/locales/en/*.json src/i18n/locales/it/

# 3. Translate the 4 JSON files:
#    - common.json (navigation, footer)
#    - marketing.json (hero, features, pricing)
#    - seo.json (meta tags)
#    - legal.json (privacy, terms)

# 4. Add to config
# Edit src/i18n/config.ts:
export const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr', 'it'] as const;

# 5. Update imports in src/i18n/index.ts
# 6. Add route in src/App.tsx:
<Route path="/it" element={<Index />} />

# 7. Build and test
npm run build
npm run preview
# Visit http://localhost:4173/it

# 8. Deploy
git add .
git commit -m "feat: add Italian language support"
git push origin main
```

**Full Guide**: See `docs/I18N_GUIDE.md`

---

## 🔧 For DevOps

### Deploy to Production
```bash
# Automated deployment on push to main
git push origin main

# Manual verification:
npm run build          # Build
npm run qa:all         # Run all QA checks
# If all green → deploy
```

### Monitor Deployment
```bash
# Check GitHub Actions
gh run list --limit 3

# View specific run
gh run view <run-id>

# Test live site
curl -I https://replainow.com
curl -I https://replainow.com/en
curl -I https://replainow.com/es
curl -I https://replainow.com/fr
```

**Full Guide**: See `docs/DEPLOYMENT.md`

---

## 📝 For Content Editors

### Update Marketing Content
```bash
# Edit German content
vim src/i18n/locales/de/marketing.json

# Edit English content
vim src/i18n/locales/en/marketing.json

# Check what's missing
npm run dev:locale-report

# Build and deploy
npm run build
git add src/i18n/locales
git commit -m "content: update marketing copy"
git push origin main
```

### Update Pricing
```bash
# Edit for all languages:
src/i18n/locales/de/marketing.json  # pricing.plans section
src/i18n/locales/en/marketing.json
src/i18n/locales/es/marketing.json
src/i18n/locales/fr/marketing.json

# Deploy
npm run build
git push origin main
```

---

## 🐛 Common Issues

### "Missing translation" warnings
```bash
# Check which translations are missing
npm run dev:locale-report

# Add missing keys to appropriate JSON file
vim src/i18n/locales/{locale}/marketing.json
```

### Build fails
```bash
# Clean and rebuild
npm run clean
npm ci
npm run build
```

### Wrong language showing
```bash
# Check locale detection logic
# See src/i18n/locale.ts and src/i18n/LocaleContext.tsx
```

---

## 🎯 Most Common Tasks

### Task: Update store count (280+ → 300+)
```bash
# 1. Edit config
vim src/config/siteStats.ts
export const STORE_COUNT = "300+";

# 2. Update in all locale JSONs
# Search for "280" and replace with "300" in:
src/i18n/locales/*/marketing.json

# 3. Deploy
npm run build && git add . && git commit -m "update: store count to 300+" && git push
```

### Task: Add new FAQ
```bash
# 1. Edit marketing.json for each language
vim src/i18n/locales/en/marketing.json
# Add to faq.questions array

# 2. Deploy
npm run build && git push
```

### Task: Change pricing
```bash
# 1. Edit pricing in all locales
src/i18n/locales/*/marketing.json
# Update pricing.plans array

# 2. Deploy
npm run build && git push
```

---

## 🆘 Need Help?

1. **Check Documentation**: `docs/` folder has 7 comprehensive guides
2. **Search Code**: Use VS Code search (Cmd+Shift+F)
3. **Run Reports**:
   - `npm run dev:locale-report` - Translation coverage
   - `npm run dev:component-usage` - Component usage
   - `npm run qa:all` - Quality checks
4. **Create Issue**: GitHub Issues for bugs/features
5. **Read Contributing**: `docs/CONTRIBUTING.md`

---

## ⭐ Key Advantages of This Setup

✅ **Enterprise-Grade** - Clean, organized, professional  
✅ **Well-Documented** - 2,500+ lines of comprehensive guides  
✅ **Multi-Language Ready** - Easy to scale from 4 to 30+ languages  
✅ **Type-Safe** - Full TypeScript coverage  
✅ **Tested** - E2E tests for all locales  
✅ **Fast** - Vite build, optimized bundles  
✅ **Maintainable** - Clear structure, no dead code  

---

**Ready to build something amazing? Start with `npm run dev`!** 🚀























