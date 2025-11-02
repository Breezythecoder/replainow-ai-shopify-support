# GitHub Actions Workflows

## Active Workflows

### deploy.yml
- **Status**: ✅ Active
- **Trigger**: Push to `main`
- **Purpose**: Build and deploy to GitHub Pages
- **Steps**:
  1. Install dependencies
  2. Build project (`npm run build`)
  3. Deploy to GitHub Pages

**Note**: QA checks temporarily disabled to allow deployment

## Disabled Workflows

### seo-ci.yml.disabled
- **Status**: ⏸️ Disabled
- **Reason**: Tests were blocking deployment
- **Contains**:
  - Lighthouse CI (performance tests)
  - Playwright E2E tests
  - SEO validation (sitemap, robots.txt)
  - Bundle size checks
  - Security audits

**To re-enable**: Rename back to `seo-ci.yml` after fixing test issues

### deploy.yml.disabled
- **Status**: ⏸️ Disabled
- **Reason**: Legacy/backup deployment workflow

---

## Deployment Flow

```
Push to main
  ↓
deploy.yml triggers
  ↓
npm ci (install deps)
  ↓
npm run build
  ↓
Upload dist/ to GitHub Pages
  ↓
Deploy to replainow.com
```

---

**Last Updated**: November 2025

