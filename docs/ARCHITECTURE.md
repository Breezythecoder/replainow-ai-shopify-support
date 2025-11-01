# ReplAInow Architecture Documentation

## Overview

ReplAInow is an enterprise-grade, multi-language AI-powered Shopify helpdesk built with React 18, TypeScript, and Vite. This document outlines the system architecture, design decisions, and technical implementation.

## Technology Stack

### Core Technologies
- **React 18.3.1** - UI framework with concurrent features
- **TypeScript 5.6.2** - Type-safe JavaScript
- **Vite 5.4.20** - Fast build tool and dev server
- **TailwindCSS 3.4.15** - Utility-first CSS framework

### UI Components
- **Radix UI** - Headless accessible component library
- **shadcn/ui** - Pre-built component collection
- **Lucide React** - Icon library

### State & Routing
- **React Router DOM 6.28** - Client-side routing
- **TanStack Query 5.59** - Server state management
- **React Helmet Async 2.0** - Document head management

### Testing & QA
- **Playwright 1.55** - E2E testing
- **ESLint 9.13** - Code linting
- **TypeScript Compiler** - Type checking

## Project Structure

```
replainow-ai-shopify-support/
├── src/
│   ├── components/           # React components
│   │   ├── marketing/        # Marketing page components (Modern*)
│   │   ├── seo/             # SEO-related components
│   │   ├── ui/              # Reusable UI components (shadcn)
│   │   └── dev/             # Development-only components
│   ├── pages/               # Route components
│   ├── i18n/                # Internationalization
│   │   ├── locales/         # Translation files per language
│   │   │   ├── de/          # German
│   │   │   ├── en/          # English
│   │   │   ├── es/          # Spanish
│   │   │   └── fr/          # French
│   │   ├── config.ts        # i18n configuration
│   │   ├── types.ts         # TypeScript types
│   │   └── index.ts         # Main i18n module
│   ├── utils/               # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── config/              # App configuration
│   └── assets/              # Static assets (images, fonts)
├── public/                  # Static files served as-is
│   ├── assets/              # Public assets
│   │   ├── images/          # General images
│   │   ├── testimonials/    # Testimonial photos
│   │   └── logos/           # Logo files
│   ├── fonts/               # Web fonts
│   └── images/              # Public images
├── scripts/                 # Build and utility scripts
│   ├── build/               # Build-related scripts
│   ├── seo/                 # SEO generation & verification
│   ├── qa/                  # Quality assurance scripts
│   └── dev/                 # Development tools
├── tests/                   # Test files
│   └── e2e/                 # End-to-end tests
└── docs/                    # Documentation
```

## Key Architectural Decisions

### 1. Component Organization

**Decision**: Use "Modern" prefix for active components, separate legacy components

**Rationale**:
- Clear distinction between active and deprecated code
- Easy to identify current implementation
- Simplified cleanup process

**Implementation**:
- All active marketing components: `Modern*.tsx`
- Old components removed during cleanup
- Single source of truth per feature

### 2. i18n Architecture

**Decision**: Structured locale system with namespace separation

**Rationale**:
- Scalability to 30+ languages
- Clear content organization
- Type-safe translations
- Easy maintenance and updates

**Implementation**:
```
locales/{locale}/
├── common.json      # Navigation, footer, UI elements
├── marketing.json   # Hero, features, pricing, testimonials
├── seo.json        # Meta tags, schema.org data
└── legal.json      # Privacy, terms, legal pages
```

### 3. Script Organization

**Decision**: Categorize scripts by function (build/seo/qa)

**Rationale**:
- Improved discoverability
- Clear separation of concerns
- Easier to maintain and extend

**Implementation**:
- `scripts/build/` - Build and post-build scripts
- `scripts/seo/` - SEO generation and verification
- `scripts/qa/` - Quality assurance and testing
- `scripts/dev/` - Development utilities

### 4. Multi-Language Routing

**Decision**: Path-based locale routing with `/en`, `/de`, `/es`, `/fr`

**Rationale**:
- SEO-friendly URLs
- Better for crawlers
- Clear language indication
- Simple to implement

**Implementation**:
```typescript
<Route path="/" element={<Index />} />       // German (default)
<Route path="/en" element={<Index />} />     // English
<Route path="/es" element={<Index />} />     // Spanish
<Route path="/fr" element={<Index />} />     // French
```

### 5. Build Process

**Decision**: Multi-step build with verification

**Phases**:
1. **Build**: Compile TypeScript/React with Vite
2. **Post-process**: Generate locale HTML files, sitemaps, robots.txt
3. **Verify**: Run comprehensive QA checks

**Benefits**:
- Catch errors before deployment
- Ensure consistency across locales
- Automated quality gates

## Data Flow

### 1. Translation System

```
User visits /en
  ↓
Router detects locale from path
  ↓
LocaleProvider sets locale context
  ↓
Components use t('key') or useLocale()
  ↓
i18n system retrieves from locales/en/*.json
  ↓
Rendered with English content
```

### 2. SEO Metadata

```
Page component loads
  ↓
AdvancedSEO component reads locale
  ↓
Fetches SEO data from i18n/locales/{locale}/seo.json
  ↓
Injects meta tags via React Helmet
  ↓
Search engines crawl with proper metadata
```

### 3. Build Pipeline

```
npm run build
  ↓
Vite builds React app (TypeScript → JS)
  ↓
scripts/build/make-locale-html.mjs generates HTML per locale
  ↓
scripts/seo/generate-sitemap.mjs creates sitemap
  ↓
scripts/seo/generate-robots.mjs creates robots.txt
  ↓
scripts/build/postbuild-verify.mjs validates output
  ↓
dist/ contains deployable files
```

## Performance Optimizations

### 1. Code Splitting

```typescript
// vite.config.ts
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'ui-vendor': ['@radix-ui/*'],
  'utils-vendor': ['class-variance-authority', 'clsx', ...],
}
```

**Benefits**:
- Smaller initial bundle
- Parallel downloads
- Better caching

### 2. Lazy Loading

```typescript
const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
```

**Benefits**:
- Faster initial page load
- Load pages on demand
- Reduced main bundle size

### 3. Asset Optimization

- **Images**: WebP format where supported
- **Fonts**: Subset to required characters
- **CSS**: Purged unused TailwindCSS classes
- **JS**: Minified and tree-shaken

## Security Considerations

### 1. GDPR Compliance

- All locale data clearly separated
- User data handling documented
- Cookie policy per language
- Privacy policy translations

### 2. Content Security

- CSP headers for production
- XSS protection via React
- Input sanitization
- Safe external links (rel="noopener noreferrer")

### 3. Build Security

- Dependency scanning
- No secrets in code
- Environment variables for sensitive data
- Regular updates

## Scalability

### Language Addition

**Current**: 4 languages (de, en, es, fr)
**Goal**: 30+ languages

**Process to add new language**:
1. Add locale to `src/i18n/config.ts`
2. Create `locales/{locale}/` directory
3. Copy and translate 4 JSON files
4. Add route in `App.tsx`
5. Update build scripts
6. Generate sitemap entry

See `docs/I18N_GUIDE.md` for detailed instructions.

### Component Scalability

- Atomic design principles
- Shared UI components
- Feature-based organization
- Clear prop interfaces

## Monitoring & Observability

### Current Implementation

- **Web Vitals**: Core Web Vitals tracking
- **Performance Audits**: Playwright-based testing
- **SEO Verification**: Automated checks
- **Build Verification**: Post-build QA

### Future Enhancements

- Real-time error tracking (Sentry)
- Performance monitoring (Analytics)
- User behavior tracking
- A/B testing framework

## Deployment

**Platform**: GitHub Pages
**Domain**: replainow.com
**Trigger**: Push to `main` branch
**Process**: Automated via GitHub Actions

See `docs/DEPLOYMENT.md` for details.

## Testing Strategy

### E2E Tests
- Page load verification
- Multi-language parity checks
- SEO metadata validation
- User flow testing

### QA Scripts
- Comprehensive quality checks
- Performance audits
- SEO verification
- Sitemap validation

## Future Roadmap

1. **Additional Languages**: Expand from 4 to 30+
2. **CMS Integration**: Headless CMS for content management
3. **A/B Testing**: Experiment framework
4. **Analytics Dashboard**: Real-time insights
5. **Performance**: Further optimizations
6. **Accessibility**: WCAG AAA compliance

---

**Last Updated**: November 2024
**Maintainers**: ReplAInow Development Team

