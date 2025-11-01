# Deployment Guide

## Overview

ReplAInow is deployed to GitHub Pages with automatic deployments triggered by pushes to the `main` branch.

## Deployment Configuration

### Platform Details

- **Hosting**: GitHub Pages
- **Domain**: replainow.com
- **SSL**: Automatic (provided by GitHub Pages)
- **CDN**: GitHub's global CDN

### Build Process

```
Local Development → Git Push → GitHub Actions → Build → Deploy → Live
```

## Prerequisites

### Repository Setup

1. GitHub repository with Pages enabled
2. Custom domain configured (replainow.com)
3. CNAME file in `public/` directory
4. GitHub Actions workflow configured

### Required Files

```
public/
├── CNAME              # Custom domain configuration
└── 404.html           # SPA fallback (generated)

.github/
└── workflows/
    └── deploy.yml     # Deployment workflow
```

## Build Scripts

### Development

```bash
# Start local dev server
npm run dev
# → http://localhost:5173

# Preview production build
npm run preview
# → http://localhost:4173
```

### Production Build

```bash
# Full production build
npm run build
```

**Build Steps**:
1. `npm run clean` - Clear dist/ directory
2. `npm run build:de` - Build German (default) version
3. `scripts/build/make-locale-html.mjs` - Generate locale-specific HTML
4. `scripts/build/create-spa-redirects.mjs` - Create SPA redirects
5. `scripts/seo/generate-sitemap.mjs` - Generate sitemap
6. `scripts/seo/generate-robots.mjs` - Generate robots.txt
7. `scripts/build/postbuild-verify.mjs` - Verify build integrity

### Verification

```bash
# Comprehensive QA
npm run qa:all

# Individual checks
npm run qa              # General quality checks
npm run qa:performance  # Performance audit
npm run qa:seo          # SEO verification
npm run qa:sitemap      # Sitemap validation
```

## Deployment Workflow

### Automatic Deployment

**Trigger**: Push to `main` branch

```bash
git push origin main
```

**GitHub Actions Workflow**:
1. Checkout code
2. Setup Node.js 18
3. Install dependencies (`npm ci`)
4. Run build (`npm run build`)
5. Deploy to `gh-pages` branch
6. GitHub Pages serves from `gh-pages` branch

### Manual Deployment

If automatic deployment fails:

```bash
# Build locally
npm run build

# Deploy manually (if configured)
npm run deploy
```

## Environment Variables

### Build-Time Variables

```bash
# Force specific locale for build
VITE_FORCE_LOCALE=en npm run build
```

### GitHub Secrets

No secrets required for basic deployment. For extended features:

- `GITHUB_TOKEN` - Automatically provided by GitHub Actions
- Custom secrets as needed (analytics, etc.)

## Domain Configuration

### DNS Settings

Point domain to GitHub Pages:

```
Type: CNAME
Name: www
Value: your-username.github.io

Type: A (for apex domain)
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

### CNAME File

Ensure `public/CNAME` contains:
```
replainow.com
```

## Multi-Language Deployment

### Locale Generation

The build process generates separate HTML files for each locale:

```
dist/
├── index.html        # German (default)
├── en/
│   └── index.html    # English
├── es/
│   └── index.html    # Spanish
└── fr/
    └── index.html    # French
```

### Routing Strategy

- Default (`/`): German
- `/en`: English
- `/es`: Spanish
- `/fr`: French

SPA redirects ensure proper routing for all paths.

## SEO Configuration

### Sitemap

Generated at: `dist/sitemap.xml`

Includes:
- All language versions
- All public pages
- Proper `hreflang` attributes
- Priority and change frequency

### Robots.txt

Generated at: `dist/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://replainow.com/sitemap.xml
```

### Meta Tags

Each locale has optimized:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Schema.org structured data

## Performance Optimization

### Build Optimizations

- **Code Splitting**: Vendor chunks separated
- **Minification**: JS/CSS minified
- **Tree Shaking**: Unused code removed
- **Asset Optimization**: Images compressed

### CDN Caching

GitHub Pages CDN automatically:
- Caches static assets
- Serves from nearest location
- Handles SSL/TLS

### Cache Headers

Configured for optimal caching:
- HTML: No cache (always fresh)
- JS/CSS: Long-term cache (hashed filenames)
- Images: Long-term cache

## Monitoring

### Post-Deployment Checks

After deployment:

1. **Verify Live Site**
   ```bash
   curl -I https://replainow.com
   # Should return 200 OK
   ```

2. **Test Each Locale**
   - https://replainow.com (German)
   - https://replainow.com/en (English)
   - https://replainow.com/es (Spanish)
   - https://replainow.com/fr (French)

3. **Check SEO**
   - Sitemap accessible: `/sitemap.xml`
   - Robots.txt accessible: `/robots.txt`
   - Meta tags present (View Source)

4. **Performance Test**
   ```bash
   npm run qa:performance
   ```

### Health Checks

```bash
# Check if site is accessible
curl -I https://replainow.com

# Check sitemap
curl https://replainow.com/sitemap.xml

# Check robots.txt
curl https://replainow.com/robots.txt
```

## Rollback Procedure

### If Deployment Fails

1. **Check GitHub Actions logs**
   - Go to Actions tab in GitHub
   - View failed workflow
   - Check error messages

2. **Fix locally and redeploy**
   ```bash
   # Fix issues
   npm run build
   npm run qa:all
   
   # If passing, commit and push
   git commit -am "fix: resolve deployment issue"
   git push origin main
   ```

3. **Manual rollback if needed**
   ```bash
   # Revert to previous commit
   git revert HEAD
   git push origin main
   ```

### Emergency Rollback

```bash
# Find last working commit
git log --oneline

# Reset to that commit
git reset --hard <commit-hash>

# Force push (USE WITH CAUTION)
git push --force origin main
```

## Troubleshooting

### Build Fails

**Issue**: TypeScript errors

**Solution**:
```bash
npm run typecheck
# Fix errors shown
```

**Issue**: Linting errors

**Solution**:
```bash
npm run lint
# Fix errors shown
```

### Deployment Fails

**Issue**: GitHub Actions fails

**Solution**:
1. Check workflow logs
2. Verify `package.json` scripts
3. Ensure all dependencies installed
4. Test build locally

### Site Not Updating

**Issue**: Changes not visible on live site

**Solution**:
1. Clear browser cache (Ctrl+Shift+R)
2. Check GitHub Pages settings
3. Verify CNAME file
4. Wait 5-10 minutes for CDN propagation

### 404 Errors

**Issue**: Pages return 404

**Solution**:
1. Verify `404.html` exists in dist/
2. Check SPA redirects generated
3. Verify routing in `App.tsx`

## Pre-Deployment Checklist

Before pushing to `main`:

- [ ] Run `npm run typecheck` - passes
- [ ] Run `npm run lint` - passes
- [ ] Run `npm run test:e2e` - passes
- [ ] Run `npm run build` - succeeds
- [ ] Run `npm run qa:all` - passes
- [ ] Test all locale routes locally
- [ ] Verify meta tags for all locales
- [ ] Check sitemap generation
- [ ] Review changed files

## Post-Deployment Checklist

After deployment completes:

- [ ] Verify homepage loads (/)
- [ ] Test all language routes (/en, /es, /fr)
- [ ] Check sitemap.xml
- [ ] Verify robots.txt
- [ ] Test a sample form
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate
- [ ] Test page speed

## Advanced Deployment

### Staging Environment

For testing before production:

```bash
# Build for staging
VITE_ENV=staging npm run build

# Deploy to staging branch
git push origin main:staging
```

### A/B Testing

To test variants:

1. Create separate branch for variant
2. Build and deploy to different subdomain
3. Compare metrics
4. Merge winning variant

### Performance Monitoring

Post-deployment:

```bash
# Lighthouse audit
npm run lh:en

# Performance audit
npm run qa:performance
```

## Support

For deployment issues:

1. Check GitHub Actions logs
2. Review this deployment guide
3. Check `docs/ARCHITECTURE.md`
4. Contact development team

---

**Last Updated**: November 2024
**Maintained by**: ReplAInow DevOps Team

