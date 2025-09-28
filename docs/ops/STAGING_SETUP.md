# Staging Environment Setup - EN Parity

## Overview
Staging environment provides a safe space to test EN parity changes before production deployment.

## Current Setup

### Branch Strategy
- `main`: Production branch (protected)
- `hotfix/en-parity`: Development branch for EN parity fixes
- `staging`: GitHub Pages branch for preview deployment

### GitHub Pages Configuration
- **Production**: `main` branch → `replainow.com`
- **Staging**: `hotfix/en-parity` branch → `hotfix--en-parity.replainow.com` (when enabled)

## Environment Variables

### Staging Environment
```bash
VITE_DEBUG_I18N=1          # Enable i18n debug overlay
VITE_SENTRY_DSN=<staging>  # Staging Sentry DSN
VITE_GA_TRACKING_ID=<staging>  # Staging Google Analytics
```

### Production Environment
```bash
VITE_DEBUG_I18N=0          # Disable debug overlay
VITE_SENTRY_DSN=<production>  # Production Sentry DSN
VITE_GA_TRACKING_ID=<production>  # Production Google Analytics
```

## Deployment Process

### Manual Deployment
```bash
# 1. Commit changes to hotfix/en-parity
git add .
git commit -m "feat: add EN parity monitoring"
git push origin hotfix/en-parity

# 2. GitHub Pages will auto-deploy
# 3. Test at: https://hotfix--en-parity.replainow.com/
```

### Automated Deployment
- GitHub Actions workflow triggers on push to `hotfix/en-parity`
- Builds and deploys to staging environment
- Runs full test suite including EN parity tests

## Testing Checklist

### Pre-Deployment Testing
- [ ] Locale shape validation passes
- [ ] Playwright E2E tests pass (including EN parity)
- [ ] Lighthouse scores >90
- [ ] Bundle size within limits
- [ ] No console errors in staging

### Staging Testing
- [ ] Navigate to `/en` - loads in English
- [ ] Navigate to `/` - loads in German
- [ ] All sections render correctly
- [ ] SEO tags are correct (lang, canonical, hreflang)
- [ ] No German text on English page
- [ ] Service worker registers correctly
- [ ] Web Vitals are tracked
- [ ] i18n debug overlay shows (when enabled)

### Language Scanner Testing
- [ ] No German words detected on `/en`
- [ ] All navigation links work correctly
- [ ] Internal links maintain language context

## Access & URLs

### Staging URLs
- **Main Site**: `https://hotfix--en-parity.replainow.com/`
- **English**: `https://hotfix--en-parity.replainow.com/en`
- **Service Worker**: Available at staging domain

### Production URLs (Reference)
- **Main Site**: `https://replainow.com/`
- **English**: `https://replainow.com/en`

## Monitoring

### Staging Monitoring
- Sentry: Staging project captures all errors
- Web Vitals: Logged to console (and Sentry)
- i18n Debug: Overlay shows translation stats
- Language Scanner: Available in DevTools

### Performance Baselines
- **Lighthouse**: >90 overall score
- **Bundle Size**: <500KB gzipped
- **LCP**: <2.5s
- **CLS**: <0.1
- **FID**: <100ms

## Troubleshooting

### Common Issues

#### Service Worker Problems
```javascript
// Clear SW in staging
navigator.serviceWorker.getRegistrations().then(regs =>
  regs.forEach(reg => reg.unregister())
)
```

#### Cache Issues
- Hard refresh: Ctrl+Shift+R (Linux/Win) / Cmd+Shift+R (Mac)
- Clear browser cache for staging domain
- Test in incognito mode

#### Language Detection Issues
- Check `localStorage.locale` value
- Verify URL path routing
- Test with different browsers

## Security Notes

### Staging Environment
- No sensitive data exposed
- Debug features enabled for development
- Monitoring captures but doesn't expose PII
- All external APIs use staging/sandbox endpoints

### Access Control
- Staging environment is publicly accessible
- No authentication required for testing
- All users can access staging features

## Cleanup

### After Production Deployment
1. Archive staging branch if no longer needed
2. Disable debug environment variables
3. Clean up temporary monitoring data
4. Update documentation with production URLs

## Last Updated
2025-09-28 by EN Parity Implementation Team
