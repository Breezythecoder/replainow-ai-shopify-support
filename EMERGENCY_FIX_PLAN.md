# 🚨 EMERGENCY FIX PLAN - Legal Pages Infinite Loop

## Problem Identified
**Root Cause:** Redirect HTML files create infinite loops
- `privacy.html` redirects to `/privacy` (itself) → LOOP
- Same for terms, cookies, impressum, security, refund, uninstall

## Current Broken Architecture
```
User visits /privacy
  ↓
GitHub Pages serves dist/privacy.html
  ↓
privacy.html: window.location.replace('/privacy')
  ↓
Redirects to /privacy (itself)
  ↓
♾️ INFINITE LOOP - Page never loads
```

## Correct Architecture (404 Fallback)
```
User visits /privacy
  ↓
GitHub Pages: File not found
  ↓
GitHub Pages serves 404.html
  ↓
404.html: window.location.href = '/'
  ↓
index.html loads with full React app
  ↓
React Router (BrowserRouter) reads URL: /privacy
  ↓
Routes to PrivacyPolicy component
  ↓
✅ Page loads successfully
```

## Solution
**STOP creating redirect HTML files!**
Let GitHub Pages 404 fallback handle all SPA routing.

## Execution Steps

### Phase 1: Remove Problematic Files
1. ✅ Delete all legal page redirect HTML files from dist/
2. ✅ Update build script to NOT create these files

### Phase 2: Fix Build Script
1. ✅ Comment out or remove redirect creation for legal pages
2. ✅ Keep 404.html (it's correct!)
3. ✅ Rebuild project

### Phase 3: Test & Deploy
1. ✅ Build project
2. ✅ Verify no redirect HTML files in dist/
3. ✅ Commit & push
4. ✅ Test live pages after GitHub Pages deployment

### Phase 4: Verify
1. ✅ Test all 7 legal pages in browser
2. ✅ Check console for errors
3. ✅ Verify React Router loads correctly

## Files to Delete
- dist/privacy.html
- dist/terms.html
- dist/cookies.html
- dist/impressum.html
- dist/security.html
- dist/refund.html
- dist/uninstall.html

## Files to KEEP
- dist/404.html (CORRECT - redirects to /)
- dist/index.html (main SPA entry)

## Build Script to Fix
`scripts/build/create-spa-redirects.mjs`
- Remove legal pages from routes array
- Keep only pillar pages that might need redirects

## Expected Result
All legal pages will:
1. Trigger 404 on GitHub Pages
2. Load 404.html
3. Redirect to /
4. React Router handles the route
5. Page loads successfully ✅

