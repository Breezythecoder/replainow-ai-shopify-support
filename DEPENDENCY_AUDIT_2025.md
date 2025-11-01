# Comprehensive Dependency Audit & Upgrade Plan
**Date**: November 1, 2025  
**Node Version**: v22.21.1 (Latest LTS) ✅  
**NPM Version**: 10.9.4 ✅  

---

## 📊 Executive Summary

**Total Packages Analyzed**: 51 (25 production + 24 dev + 2 optional)  
**Major Updates Available**: 6 packages  
**Minor Updates Available**: 15+ packages  
**Security Vulnerabilities**: 6 (4 low, 2 moderate)  

### Critical Findings:
🔴 **React 19.2.0** is available (currently on 18.3.1) - MAJOR UPDATE  
🔴 **Vite 7.1.12** is available (currently on 5.4.20) - MAJOR UPDATE (skipped v6!)  
🔴 **TailwindCSS 4.1.16** is available (currently on 3.4.15) - MAJOR UPDATE  
🔴 **React Router 7.9.5** is available (currently on 6.28.0) - MAJOR UPDATE  
🔴 **TypeScript 5.9.3** is available (currently on 5.6.2) - MAJOR UPDATE  
🟡 **15+ minor/patch** updates available

---

## 🎯 COMPREHENSIVE UPGRADE MATRIX

### **CATEGORY A: CRITICAL MAJOR UPDATES (Breaking Changes Expected)**

| Package | Current | Latest | Type | Breaking Changes | Priority | Migration Complexity |
|---------|---------|--------|------|------------------|----------|---------------------|
| **react** | 18.3.1 | **19.2.0** | Major | ✅ Yes - Server Components, new hooks API | 🔴 Critical | High |
| **react-dom** | 18.3.1 | **19.2.0** | Major | ✅ Yes - Must match React | 🔴 Critical | High |
| **vite** | 5.4.20 | **7.1.12** | Major | ✅ Yes - Skipped v6, new config | 🔴 Critical | High |
| **tailwindcss** | 3.4.15 | **4.1.16** | Major | ✅ Yes - Oxide engine, new config | 🔴 Critical | High |
| **react-router-dom** | 6.28.0 | **7.9.5** | Major | ✅ Yes - New APIs, Remix merger | 🔴 Critical | Medium |
| **typescript** | 5.6.2 | **5.9.3** | Major | ⚠️  Maybe - New features | 🟡 High | Low |
| **tailwind-merge** | 2.5.4 | **3.3.1** | Major | ✅ Yes - API changes | 🟡 Medium | Low |

### **CATEGORY B: MINOR/PATCH UPDATES (Safe to Upgrade)**

| Package | Current | Latest | Type | Breaking Changes | Priority |
|---------|---------|--------|------|------------------|----------|
| **@tanstack/react-query** | 5.59.16 | 5.90.6 | Patch | ❌ No | Medium |
| **lucide-react** | 0.468.0 | 0.552.0 | Minor | ❌ No | Low |
| **@playwright/test** | 1.55.1 | 1.56.1 | Minor | ❌ No | Medium |
| **eslint** | 9.13.0 | 9.39.0 | Minor | ❌ No | Medium |
| **@radix-ui/react-label** | 2.1.0 | 2.1.7 | Patch | ❌ No | Low |
| **@radix-ui/react-slot** | 1.1.0 | 1.2.3 | Minor | ❌ No | Low |
| **typescript-eslint** | 8.11.0 | Latest | Minor | ❌ No | Low |
| **globals** | 15.11.0 | Latest | Minor | ❌ No | Low |
| **cross-env** | 10.0.0 | Latest | Major? | ❌ No | Low |
| **zod** | 4.1.11 | 4.1.12 | Patch | ❌ No | Low |

### **CATEGORY C: SECURITY VULNERABILITIES (Must Fix)**

| Package | Severity | Issue | Fix |
|---------|----------|-------|-----|
| **esbuild** | 🟡 Moderate | Dev server vulnerability (GHSA-67mh-4wv8-2f99) | Update via Vite 7 |
| **tmp** | 🟢 Low | Symbolic link write vulnerability | Update @lhci/cli |
| **inquirer** | 🟢 Low | Depends on vulnerable external-editor | Update @lhci/cli |

### **CATEGORY D: ALREADY UP-TO-DATE** ✅

| Package | Version | Status |
|---------|---------|--------|
| react-helmet-async | 2.0.5 | ✅ Latest |
| sharp | 0.34.4 | ✅ Latest |
| sonner | 2.0.7 | ✅ Latest |
| web-vitals | 5.1.0 | ✅ Latest |
| wait-on | 9.0.1 | ✅ Latest |
| clsx | 2.1.1 | ✅ Latest |
| class-variance-authority | 0.7.1 | ✅ Latest |
| next-themes | 0.4.6 | ✅ Latest |
| Most @radix-ui packages | Various | ✅ Latest |

---

## 🔍 DETAILED ANALYSIS OF MAJOR UPDATES

### 1. **React 18.3.1 → 19.2.0** 🚀

**Release Date**: Late 2024 (stable in 2025)  
**Breaking Changes**: Yes

**Key New Features**:
- ✅ Async Server Components (not applicable for Vite SPA)
- ✅ New `use()` hook for promises
- ✅ Actions and Form API
- ✅ Document metadata management
- ✅ Better hydration error messages
- ✅ ref as prop (no forwardRef needed)
- ✅ useDeferredValue initial value

**Breaking Changes**:
- ⚠️  `ref` cleanup changes
- ⚠️  React Server Components API (not used in this project)
- ⚠️  Removed deprecated APIs
- ⚠️  StrictMode now double-invokes in production (dev only before)

**Migration Complexity**: **HIGH**
**Ecosystem Readiness**: 
- ✅ Radix UI: React 19 compatible
- ✅ React Router v7: React 19 compatible  
- ✅ TanStack Query: React 19 compatible
- ✅ Most popular libraries updated

**Recommendation**: ✅ **UPGRADE** - Ecosystem is ready, major performance improvements

**Migration Steps**:
1. Update React & React DOM together
2. Update @types/react and @types/react-dom
3. Check all `forwardRef` usage (can be simplified)
4. Test all Suspense boundaries
5. Verify third-party components work
6. Run comprehensive E2E tests

---

### 2. **Vite 5.4.20 → 7.1.12** ⚡

**Release Date**: Vite 6 (Dec 2024), Vite 7 (Q2 2025)  
**Breaking Changes**: Yes (skipped v6!)

**Key New Features** (v6):
- ✅ Environment API (better SSR support)
- ✅ Faster cold starts
- ✅ Better HMR performance
- ✅ Improved CSS handling
- ✅ Better build optimization

**Key New Features** (v7):
- ✅ Even faster builds
- ✅ Improved tree-shaking
- ✅ Better plugin API
- ✅ Native CSS nesting support
- ✅ Enhanced esbuild integration

**Breaking Changes**:
- ⚠️  Config format changes
- ⚠️  Plugin API updates
- ⚠️  CSS handling changes
- ⚠️  Environment API replaces SSR API
- ⚠️  Node.js 20+ required (we have 22 ✅)

**Migration Complexity**: **HIGH**
**Recommendation**: ✅ **UPGRADE** - Major performance gains, security fixes

**Migration Steps**:
1. Read Vite 6 migration guide
2. Read Vite 7 migration guide
3. Update vite.config.ts
4. Update plugins (@vitejs/plugin-react-swc)
5. Test dev server
6. Test build process
7. Verify all scripts work

---

### 3. **TailwindCSS 3.4.15 → 4.1.16** 🎨

**Release Date**: Tailwind v4 (Early 2025)  
**Breaking Changes**: Yes (Major rewrite)

**Key New Features**:
- ✅ **Oxide Engine** - 10x faster compilation
- ✅ CSS-first configuration (goodbye JS config!)
- ✅ Better IntelliSense
- ✅ Native CSS nesting
- ✅ Improved @apply
- ✅ Better color system
- ✅ Unified color palette
- ✅ Improved container queries

**Breaking Changes**:
- 🔴 **Configuration file format changed** (tailwind.config.ts → CSS variables)
- ⚠️  Some utility class names changed
- ⚠️  Plugin API updated
- ⚠️  Custom color handling different
- ⚠️  JIT mode is now the only mode (good thing!)

**Migration Complexity**: **HIGH**
**Recommendation**: ✅ **UPGRADE** - 10x performance, future-proof

**Migration Steps**:
1. Read Tailwind v4 upgrade guide thoroughly
2. Migrate tailwind.config.ts to new CSS-based config
3. Update custom colors/themes
4. Check all custom utility classes
5. Update PostCSS config if needed
6. Test all pages for visual regressions
7. Run build and verify output

---

### 4. **React Router DOM 6.28.0 → 7.9.5** 🛣️

**Release Date**: React Router v7 (Q4 2024)  
**Breaking Changes**: Yes

**Key New Features**:
- ✅ Remix integration (Remix = React Router v7)
- ✅ Better data loading (actions/loaders)
- ✅ Improved type safety
- ✅ Better error handling
- ✅ Streaming support
- ✅ Automatic code splitting

**Breaking Changes**:
- ⚠️  Loader/action API changes
- ⚠️  Route configuration changes
- ⚠️  Some hooks deprecated
- ⚠️  Better but different error boundaries

**Migration Complexity**: **MEDIUM**
**Current Usage**: Simple client-side routing only
**Recommendation**: ✅ **UPGRADE** - Better DX, type safety

**Migration Steps**:
1. Read React Router v7 upgrade guide
2. Check route configurations in App.tsx
3. Update any loader/action usage (we don't use yet)
4. Test all routes (/de, /en, /es, /fr)
5. Verify language detection still works
6. Test navigation and redirects

---

### 5. **TypeScript 5.6.2 → 5.9.3** 📘

**Release Date**: Incremental releases throughout 2025  
**Breaking Changes**: Minor

**New Features** (5.7, 5.8, 5.9):
- ✅ Better type inference
- ✅ Improved satisfies operator
- ✅ Better error messages
- ✅ New utility types
- ✅ Performance improvements
- ✅ Better JSX support
- ✅ Improved decorators

**Breaking Changes**:
- ⚠️  Stricter type checking (good thing!)
- ⚠️  Some edge cases changed
- ⚠️  Better const inference (might need adjustments)

**Migration Complexity**: **LOW**
**Recommendation**: ✅ **UPGRADE** - Always stay current

**Migration Steps**:
1. Update TypeScript
2. Run `npm run typecheck`
3. Fix any new errors (likely minimal)
4. Enjoy better IntelliSense!

---

### 6. **Tailwind Merge 2.5.4 → 3.3.1** 🔧

**Release Date**: 2025  
**Breaking Changes**: Yes

**Key Changes**:
- ✅ Better Tailwind v4 support
- ✅ Improved performance
- ✅ New API

**Migration Complexity**: **LOW**
**Recommendation**: ✅ **UPGRADE** - Required for Tailwind v4

**Migration Steps**:
1. Update package
2. Check usage in utils
3. Test className merging

---

## 📋 UPGRADE EXECUTION PLAN

### **Phase 1: Foundation (TypeScript)** ⏱️ 15 min
1. Update TypeScript to 5.9.3
2. Run typecheck
3. Fix any errors
4. Commit

### **Phase 2: React Ecosystem** ⏱️ 45 min
1. Update React + React DOM to 19.2.0
2. Update @types/react and @types/react-dom
3. Run typecheck
4. Test dev server (all 4 languages)
5. Fix any issues
6. Commit

### **Phase 3: Vite Build Tool** ⏱️ 45 min
1. Update Vite to 7.1.12
2. Update @vitejs/plugin-react-swc
3. Update vite.config.ts if needed
4. Test dev server
5. Test build process
6. Verify all scripts
7. Commit

### **Phase 4: TailwindCSS** ⏱️ 60 min
1. Read Tailwind v4 migration guide
2. Update TailwindCSS to 4.1.16
3. Migrate tailwind.config.ts to CSS config
4. Update PostCSS config
5. Test dev server (check styles)
6. Build and verify visuals
7. Commit

### **Phase 5: Tailwind Merge** ⏱️ 10 min
1. Update tailwind-merge to 3.3.1
2. Test className utilities
3. Commit

### **Phase 6: React Router** ⏱️ 30 min
1. Update react-router-dom to 7.9.5
2. Check route configuration
3. Test all language routes
4. Test navigation
5. Commit

### **Phase 7: Minor Updates (Batch)** ⏱️ 30 min
1. Update @tanstack/react-query to 5.90.6
2. Update lucide-react to 0.552.0
3. Update Playwright to 1.56.1
4. Update ESLint to 9.39.0
5. Update all Radix UI packages to latest
6. Update other minor dependencies
7. Run typecheck
8. Test everything
9. Commit

### **Phase 8: Security Fixes** ⏱️ 15 min
1. Run `npm audit fix`
2. Verify no breaking changes
3. Test build
4. Commit

### **Phase 9: Comprehensive Testing** ⏱️ 45 min
1. Run `npm run typecheck` ✅
2. Run `npm run lint` ✅
3. Run `npm run build` ✅
4. Run `npm run preview` - Test all 4 languages ✅
5. Run `npm run test:e2e` ✅
6. Run `npm run qa:all` ✅
7. Visual regression check (manual)
8. Performance comparison

### **Phase 10: Documentation** ⏱️ 30 min
1. Create UPGRADE_LOG.md
2. Update README.md versions
3. Update ARCHITECTURE.md if needed
4. Document breaking changes
5. Add rollback instructions

**Total Estimated Time**: 5-6 hours

---

## ⚠️  RISK ASSESSMENT

### **High Risk (Require Careful Testing)**

1. **React 19 Migration**
   - **Risk**: Third-party components may break
   - **Mitigation**: All major libraries are React 19 compatible
   - **Test**: All components, especially Radix UI

2. **Vite 7 Migration**
   - **Risk**: Build process changes
   - **Mitigation**: Config is simple, well-documented
   - **Test**: Dev server, build, preview, all scripts

3. **TailwindCSS 4 Migration**
   - **Risk**: Visual regressions
   - **Mitigation**: Take screenshots before/after
   - **Test**: Every page, every language, every breakpoint

4. **React Router 7 Migration**
   - **Risk**: Routing breaks
   - **Mitigation**: Simple routes, easy to fix
   - **Test**: All language routes, navigation

### **Low Risk (Minor Updates)**

- TypeScript 5.9 - Always safe
- TanStack Query - Patch update
- Lucide React - Just icons
- Playwright - Dev tool
- ESLint - Linting only
- Radix UI - Stable packages

---

## 🎯 SUCCESS CRITERIA

### **Must Pass Before Considering Complete**

- [ ] ✅ TypeScript: 0 errors
- [ ] ✅ ESLint: 0 errors, 0 warnings
- [ ] ✅ Build: Successful
- [ ] ✅ Bundle size: Not increased >10% (currently 109 KB gzipped)
- [ ] ✅ Dev server: Works on all 4 languages
- [ ] ✅ Preview: Works on all 4 languages
- [ ] ✅ E2E tests: All passing
- [ ] ✅ QA suite: All checks passing
- [ ] ✅ Security: 0 vulnerabilities (or only low-risk acceptable)
- [ ] ✅ Visual regression: No unexpected changes
- [ ] ✅ Performance: Lighthouse 90+ in all categories
- [ ] ✅ All 4 languages functional on localhost
- [ ] ✅ Forms work
- [ ] ✅ Navigation works
- [ ] ✅ Language switcher works

---

## 📦 BASELINE METRICS (Before Upgrade)

### **Bundle Sizes**
- react-vendor: 159.54 KB (52.08 KB gzipped)
- index: 188.16 KB (57.00 KB gzipped)
- **Total**: 347.70 KB (109.08 KB gzipped)

### **Build Time**
- Full multi-page build: ~3.10s

### **Dependencies**
- Production: 25 packages
- Development: 24 packages
- Total installed: 752 packages

### **Security**
- Vulnerabilities: 6 (4 low, 2 moderate)

### **Code Quality**
- TypeScript errors: 0
- ESLint warnings: 0
- Test status: ✅ Passing

---

## 🚀 POST-UPGRADE TARGETS

### **Bundle Sizes** (Target)
- Total: <350 KB raw / <110 KB gzipped (maintain or improve)

### **Build Time** (Target)
- <3 seconds (Vite 7 should be faster!)

### **Security** (Target)
- 0 vulnerabilities (or only acceptable low-risk)

### **Performance** (Target)
- Lighthouse Performance: 95+ (currently 90)
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 95+
- Lighthouse Best Practices: 95+

---

## 📚 MIGRATION RESOURCES

### **Official Guides to Read**

1. **React 19**: https://react.dev/blog/2024/04/25/react-19-upgrade-guide
2. **Vite 6**: https://vite.dev/guide/migration-from-v5
3. **Vite 7**: https://vite.dev/guide/migration-from-v6
4. **TailwindCSS 4**: https://tailwindcss.com/docs/v4-beta
5. **React Router 7**: https://reactrouter.com/upgrading/v6
6. **TypeScript 5.7+**: https://devblogs.microsoft.com/typescript/

### **Breaking Changes to Watch**

- React 19: ref as prop, Server Components APIs (not used)
- Vite 7: Config changes, plugin API
- Tailwind 4: CSS config, class name changes
- React Router 7: Loader/action API
- TypeScript: Stricter inference

---

## 🔄 ROLLBACK PLAN

If any critical issues arise:

```bash
# Option 1: Rollback to tagged version
git checkout v1.0-pre-upgrade
git push -f origin main

# Option 2: Revert specific commits
git log --oneline  # Find commit hash
git revert <commit-hash>
git push origin main

# Option 3: Cherry-pick successful updates
git checkout main
git cherry-pick <good-commit-hash>
```

**Backup branch**: `pre-upgrade-snapshot`  
**Tag**: `v1.0-pre-upgrade`

---

## ✅ RECOMMENDATION

**Proceed with upgrade?** ✅ **YES**

**Rationale**:
1. ✅ Ecosystem is React 19 ready
2. ✅ Major performance improvements (Vite 7, Tailwind 4)
3. ✅ Security vulnerabilities need fixing
4. ✅ Future-proofing (staying current is critical)
5. ✅ Node 22 is compatible with all updates
6. ✅ Well-documented migration paths
7. ✅ Clear rollback plan
8. ✅ Comprehensive testing strategy

**Timeline**: 5-6 hours of focused work  
**Risk Level**: Medium (with mitigation strategies)  
**Impact**: High (major version upgrades across stack)

---

**Next Step**: Create backup branch and begin Phase 1 (TypeScript update)

**Let's do this!** 🚀
