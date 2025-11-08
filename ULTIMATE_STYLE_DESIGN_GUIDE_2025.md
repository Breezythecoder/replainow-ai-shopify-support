# 🎨 ReplAInow Ultimate Style & Design Guide 2025
**Enterprise-Level Design System | Version 2.0 | November 2025**

---

## 🎯 Design Philosophy

### Core Principles

1. **CLEAN & MINIMAL** - Every pixel has a purpose. No clutter, no noise.
2. **PURPLE BRAND HARMONY** - All colors work together with the logo.
3. **ENTERPRISE TRUST** - Design that builds confidence and credibility.
4. **CONVERSION-FOCUSED** - Every element drives user action.
5. **SHOPIFY-FIRST** - Design speaks directly to Shopify merchants.

---

## 🎨 Color Palette - Purple Premium

### Brand Colors (Primary)

```css
/* Purple Family - Main Brand */
--purple-50:  #faf5ff;   /* Lightest purple tint */
--purple-100: #f3e8ff;   /* Very light background */
--purple-200: #e9d5ff;   /* Light accent */
--purple-300: #d8b4fe;   /* Medium light */
--purple-400: #c084fc;   /* Medium */
--purple-500: #a855f7;   /* Primary Brand */
--purple-600: #9333ea;   /* Logo Purple - Main */
--purple-700: #7e22ce;   /* Darker purple */
--purple-800: #6b21a8;   /* Very dark */
--purple-900: #581c87;   /* Almost black purple */

/* Violet - Secondary Brand */
--violet-50:  #f5f3ff;
--violet-100: #ede9fe;
--violet-200: #ddd6fe;
--violet-300: #c4b5fd;
--violet-400: #a78bfa;
--violet-500: #8b5cf6;   /* Secondary */
--violet-600: #7c3aed;
--violet-700: #6d28d9;
--violet-800: #5b21b6;
--violet-900: #4c1d95;
```

### Accent Colors

```css
/* Pink - Warm Accent */
--pink-50:  #fdf2f8;
--pink-100: #fce7f3;
--pink-200: #fbcfe8;
--pink-300: #f9a8d4;
--pink-400: #f472b6;
--pink-500: #ec4899;   /* Accent Pink */
--pink-600: #db2777;
--pink-700: #be185d;

/* Blue - Cool Accent */
--blue-50:  #eff6ff;
--blue-100: #dbeafe;
--blue-200: #bfdbfe;
--blue-300: #93c5fd;
--blue-400: #60a5fa;
--blue-500: #3b82f6;   /* Accent Blue */
--blue-600: #2563eb;
--blue-700: #1d4ed8;
```

### Neutral Colors

```css
/* Grayscale - High Quality */
--white:     #ffffff;
--gray-50:   #f9fafb;   /* Light background */
--gray-100:  #f3f4f6;   /* Card backgrounds */
--gray-200:  #e5e7eb;   /* Borders */
--gray-300:  #d1d5db;   /* Dividers */
--gray-400:  #9ca3af;   /* Disabled text */
--gray-500:  #6b7280;   /* Secondary text */
--gray-600:  #4b5563;   /* Tertiary text */
--gray-700:  #374151;   /* Body text */
--gray-800:  #1f2937;   /* Dark text */
--gray-900:  #111827;   /* Headings */
--black:     #000000;   /* Pure black (rare use) */
```

### Semantic Colors

```css
/* Success */
--success-50:  #f0fdf4;
--success-500: #10b981;   /* Green */
--success-700: #059669;

/* Warning */
--warning-50:  #fffbeb;
--warning-500: #f59e0b;   /* Amber */
--warning-700: #d97706;

/* Error */
--error-50:  #fef2f2;
--error-500: #ef4444;   /* Red */
--error-700: #dc2626;

/* Info */
--info-50:  #eff6ff;
--info-500: #3b82f6;   /* Blue */
--info-700: #1d4ed8;
```

---

## 🔤 Typography System

### Font Family

```css
/* Primary Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;

/* Code/Monospace (for ticket numbers, codes) */
font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
```

### Type Scale

```css
/* Display - Hero Headlines */
--text-9xl: 96px;    /* 6rem */
--text-8xl: 72px;    /* 4.5rem - Hero numbers */
--text-7xl: 60px;    /* 3.75rem - Main headlines */
--text-6xl: 48px;    /* 3rem */
--text-5xl: 40px;    /* 2.5rem */

/* Headings */
--text-4xl: 36px;    /* 2.25rem - Section headlines */
--text-3xl: 30px;    /* 1.875rem */
--text-2xl: 24px;    /* 1.5rem - Card headlines */
--text-xl:  20px;    /* 1.25rem */

/* Body */
--text-lg:   18px;   /* 1.125rem - Large body */
--text-base: 16px;   /* 1rem - Standard body */
--text-sm:   14px;   /* 0.875rem - Small text */
--text-xs:   12px;   /* 0.75rem - Tiny text, badges */
```

### Font Weights

```css
--font-light:     300;   /* Hero headlines only */
--font-normal:    400;   /* Body text */
--font-medium:    500;   /* Emphasis */
--font-semibold:  600;   /* Subheadings */
--font-bold:      700;   /* Important text, CTAs */
--font-extrabold: 800;   /* Rare use */
```

### Line Heights

```css
--leading-none:    1.0;    /* Display numbers */
--leading-tight:   1.1;    /* Headlines */
--leading-snug:    1.375;  /* Subheadings */
--leading-normal:  1.5;    /* Body text */
--leading-relaxed: 1.625;  /* Long-form content */
--leading-loose:   2.0;    /* Airy text */
```

### Letter Spacing

```css
--tracking-tighter: -0.05em;   /* Large display text */
--tracking-tight:   -0.025em;  /* Headlines */
--tracking-normal:   0em;      /* Body text */
--tracking-wide:     0.025em;  /* Emphasis */
--tracking-wider:    0.05em;   /* Small text */
--tracking-widest:   0.15em;   /* Badges, uppercase labels */
```

---

## 📏 Spacing System

### Consistent Scale (4px base unit)

```css
--spacing-px: 1px;
--spacing-0:  0px;
--spacing-1:  4px;       /* 0.25rem */
--spacing-2:  8px;       /* 0.5rem */
--spacing-3:  12px;      /* 0.75rem */
--spacing-4:  16px;      /* 1rem */
--spacing-5:  20px;      /* 1.25rem */
--spacing-6:  24px;      /* 1.5rem */
--spacing-7:  28px;      /* 1.75rem */
--spacing-8:  32px;      /* 2rem */
--spacing-10: 40px;      /* 2.5rem */
--spacing-12: 48px;      /* 3rem */
--spacing-14: 56px;      /* 3.5rem */
--spacing-16: 64px;      /* 4rem */
--spacing-20: 80px;      /* 5rem */
--spacing-24: 96px;      /* 6rem */
--spacing-28: 112px;     /* 7rem */
--spacing-32: 128px;     /* 8rem */
```

### Component-Specific Spacing

```css
/* Cards */
--card-padding:        40px;    /* p-10 */
--card-gap:            24px;    /* gap-6 */
--card-margin-bottom:  80px;    /* mb-20 */

/* Sections */
--section-padding-y:   64px;    /* py-16 */
--section-margin-bottom: 112px; /* mb-28 */

/* Container */
--container-padding-x: 32px;    /* px-8 */
```

---

## 🌈 Gradients - Premium Quality

### Brand Gradients

```css
/* Purple → Violet (Main Brand) */
--gradient-brand: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);

/* Purple → Pink (Warm Accent) */
--gradient-warm: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);

/* Blue → Violet (Cool Accent) */
--gradient-cool: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);

/* Pink → Purple (Sunset) */
--gradient-sunset: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
```

### Text Gradients

```css
/* Headline Gradient (Purple Highlight) */
--gradient-text-purple: linear-gradient(90deg, #111827 0%, #9333ea 50%, #111827 100%);

/* Hero Gradient (Subtle) */
--gradient-text-hero: linear-gradient(90deg, #ffffff 0%, #e9d5ff 50%, #ffffff 100%);
```

### Background Gradients

```css
/* Light Page Background */
--gradient-bg-light: linear-gradient(180deg, #ffffff 0%, #faf5ff 40%, #ffffff 100%);

/* Dark Section Background */
--gradient-bg-dark: linear-gradient(135deg, #0f0f1e 0%, #1a0f2e 50%, #0f0f1e 100%);

/* Card Hover Gradient (Overlay) */
--gradient-overlay-purple: linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%);
```

---

## 🎭 Shadows & Elevation

### Shadow Layers

```css
/* Subtle */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
             0 1px 2px 0 rgba(0, 0, 0, 0.06);

/* Standard */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
             0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
             0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Premium */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Colored Shadows (Brand)

```css
/* Purple Shadows */
--shadow-purple-sm:  0 4px 12px rgba(147, 51, 234, 0.15);
--shadow-purple-md:  0 8px 20px rgba(147, 51, 234, 0.20);
--shadow-purple-lg:  0 16px 32px rgba(147, 51, 234, 0.25);
--shadow-purple-xl:  0 24px 48px rgba(147, 51, 234, 0.30);

/* Violet Shadows */
--shadow-violet-sm:  0 4px 12px rgba(139, 92, 246, 0.15);
--shadow-violet-md:  0 8px 20px rgba(139, 92, 246, 0.20);

/* Pink Shadows */
--shadow-pink-sm:    0 4px 12px rgba(236, 72, 153, 0.15);
--shadow-pink-md:    0 8px 20px rgba(236, 72, 153, 0.20);

/* Blue Shadows */
--shadow-blue-sm:    0 4px 12px rgba(59, 130, 246, 0.15);
--shadow-blue-md:    0 8px 20px rgba(59, 130, 246, 0.20);
```

### Glow Effects

```css
/* Outer Glow (for Cards on Hover) */
--glow-purple: 0 0 40px rgba(147, 51, 234, 0.3);
--glow-violet: 0 0 40px rgba(139, 92, 246, 0.3);
--glow-pink:   0 0 40px rgba(236, 72, 153, 0.3);
```

---

## 🔲 Border Radius

```css
--radius-sm:   4px;      /* Small elements */
--radius-md:   8px;      /* Standard */
--radius-lg:   12px;     /* Cards, buttons */
--radius-xl:   16px;     /* Large cards */
--radius-2xl:  20px;     /* Premium cards */
--radius-3xl:  24px;     /* Hero elements */
--radius-full: 9999px;   /* Pills, circles */
```

---

## ⚡ Animation System

### Timing Functions (Easing)

```css
/* Premium Easing - Smooth & Elastic */
--ease-premium:  cubic-bezier(0.16, 1, 0.3, 1);

/* Standard Easing */
--ease-out:      cubic-bezier(0, 0, 0.2, 1);
--ease-in:       cubic-bezier(0.4, 0, 1, 1);
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);

/* Bounce (Special) */
--ease-bounce:   cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration

```css
--duration-instant: 0ms;
--duration-fast:    150ms;   /* Micro-interactions */
--duration-normal:  300ms;   /* Standard transitions */
--duration-slow:    500ms;   /* Card hovers */
--duration-slower:  700ms;   /* Hero animations */
--duration-slowest: 1000ms;  /* Special effects */
```

### Animation Presets

```tsx
/* Framer Motion Variants */

// Fade In Up
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

// Scale In
const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Slide In (from left)
const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

// Hover Lift
const hoverLift = {
  whileHover: { 
    y: -8, 
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
  }
};

// Count Up (for numbers)
// Use custom useCountUp hook
```

---

## 🧩 Component Patterns

### 1. Premium Card

```tsx
<div className="
  relative group
  bg-white 
  rounded-2xl 
  p-10 
  border border-gray-200
  shadow-sm
  hover:shadow-xl hover:shadow-purple-100/40
  hover:border-purple-200
  transition-all duration-500
  overflow-hidden
">
  {/* Gradient overlay on hover */}
  <div className="
    absolute inset-0 
    bg-gradient-to-br from-purple-50/0 to-purple-50/0
    group-hover:from-purple-50/50 group-hover:to-violet-50/30
    transition-all duration-500
    rounded-2xl
  " />
  
  {/* Outer glow */}
  <div className="
    absolute -inset-0.5 
    bg-gradient-to-br from-purple-500/10 to-violet-500/10
    rounded-2xl opacity-0 
    group-hover:opacity-100 
    transition-opacity duration-500
    blur-xl
  " />
  
  <div className="relative">
    {/* Card content */}
  </div>
</div>
```

### 2. Primary CTA Button

```tsx
<div className="relative inline-block">
  {/* Outer glow */}
  <div className="
    absolute -inset-1 
    bg-gradient-to-r from-purple-600 to-violet-600
    rounded-xl blur opacity-40
    group-hover:opacity-60 transition-opacity
  " />
  
  <motion.button 
    whileHover={{ scale: 1.03, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="
      relative group
      inline-flex items-center gap-3
      bg-gradient-to-r from-purple-600 to-violet-600
      hover:from-purple-700 hover:to-violet-700
      text-white
      px-12 py-5
      rounded-xl
      font-bold text-lg
      transition-all shadow-xl
    "
  >
    <ShoppingBag className="w-5 h-5" />
    <span>Button Text</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    
    {/* Hover overlay */}
    <div className="
      absolute inset-0 rounded-xl
      bg-white/0 group-hover:bg-white/10
      transition-all duration-300
    " />
  </motion.button>
</div>
```

### 3. Badge Component

```tsx
{/* Purple Badge */}
<div className="
  inline-flex items-center gap-2
  px-4 py-2
  bg-purple-50
  border border-purple-200/50
  rounded-full
  text-xs font-bold text-purple-700
  tracking-wide uppercase
">
  <Sparkles className="w-3.5 h-3.5" />
  <span>Badge Text</span>
</div>

{/* Alternative: Outlined Badge */}
<div className="
  px-3.5 py-1.5
  bg-transparent
  border border-purple-600/30
  rounded-full
  text-xs font-bold text-purple-700
  tracking-wide
">
  Badge Text
</div>
```

### 4. Gradient Underline

```tsx
<div className="relative mb-5">
  {/* Main underline */}
  <div className="
    w-12 h-1.5
    bg-gradient-to-r from-purple-500 to-violet-500
    rounded-full
    group-hover:w-16 transition-all duration-500
  " />
  
  {/* Blur shadow underneath */}
  <div className="
    absolute inset-0
    bg-gradient-to-r from-purple-500 to-violet-500
    rounded-full blur-md opacity-50
  " />
</div>
```

### 5. Section Headline

```tsx
<h2 className="
  text-3xl md:text-4xl
  font-light text-gray-900
  mb-4
  tracking-tight leading-tight
">
  Section Title{' '}
  <span className="font-semibold">
    with Emphasis
  </span>
</h2>
<p className="text-lg text-gray-600">Section description</p>
```

### 6. Metric/Stat Display

```tsx
<div className="text-center">
  {/* Big Number */}
  <div className="
    text-7xl md:text-8xl
    font-light text-gray-900
    mb-4
    tracking-tight leading-none
  ">
    87%
  </div>
  
  {/* Gradient underline */}
  <div className="relative mb-5">
    <div className="
      w-12 h-1.5 mx-auto
      bg-gradient-to-r from-purple-500 to-violet-500
      rounded-full
    " />
  </div>
  
  {/* Label */}
  <div className="
    text-xs uppercase tracking-[0.12em]
    text-gray-500 font-bold mb-4
  ">
    Metric Label
  </div>
  
  {/* Description */}
  <p className="text-gray-700 leading-relaxed text-[15px]">
    Description text
  </p>
</div>
```

### 7. Testimonial Card

```tsx
<div className="
  bg-white rounded-xl p-6
  border border-gray-200
  hover:border-gray-300
  shadow-sm hover:shadow-md
  transition-all duration-300
">
  {/* Avatar + Name */}
  <div className="flex items-center gap-3 mb-4">
    <img 
      src="avatar.jpg" 
      className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
    />
    <div>
      <div className="font-semibold text-gray-900 text-sm">Name</div>
      <div className="text-xs text-gray-600">Title, Company</div>
    </div>
  </div>
  
  {/* Quote */}
  <p className="text-gray-700 text-sm leading-relaxed mb-4">
    "Testimonial text here..."
  </p>
  
  {/* Metric Badge */}
  <div className="
    inline-flex items-center gap-1.5
    px-3 py-1.5 rounded-full
    bg-purple-50 text-purple-700
    text-xs font-bold
  ">
    <TrendingUp className="w-3 h-3" />
    Metric Value
  </div>
</div>
```

### 8. Trust Badge

```tsx
<div className="flex items-center gap-2 text-sm text-gray-700">
  <Shield className="w-4 h-4 text-purple-600" />
  <span className="font-medium">DSGVO-konform</span>
</div>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--screen-sm:  640px;    /* Small devices (phones landscape) */
--screen-md:  768px;    /* Medium devices (tablets) */
--screen-lg:  1024px;   /* Large devices (laptops) */
--screen-xl:  1280px;   /* Extra large (desktops) */
--screen-2xl: 1536px;   /* 2X Extra large (large desktops) */
```

### Usage Pattern

```tsx
className="
  text-5xl        /* Mobile: 40px */
  sm:text-6xl     /* 640px+: 48px */
  md:text-7xl     /* 768px+: 60px */
  lg:text-8xl     /* 1024px+: 72px (optional) */
"
```

---

## 🎨 Component Library

### Hero Section Pattern

```tsx
<div className="relative text-center mb-20 md:mb-28">
  {/* Gradient Orbs (Background) */}
  <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
  <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-violet-200/25 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
  
  <div className="relative">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60 rounded-full px-6 py-2.5 mb-8 shadow-sm">
      <Sparkles className="w-4 h-4 text-purple-600" />
      <span className="text-sm font-semibold text-purple-900 tracking-tight">
        Enterprise KI-Lösung
      </span>
    </div>
    
    {/* Headline */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-7 tracking-tight leading-[1.1]">
      Main Headline
      <br />
      <span className="font-semibold bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent">
        with Gradient
      </span>
    </h1>
    
    {/* Subheadline */}
    <p className="text-lg md:text-xl text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
      Descriptive text that explains the value proposition clearly
    </p>
    
    {/* Social Proof */}
    <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-gray-200 shadow-sm">
      <div className="flex -space-x-2">
        {/* Avatar images */}
      </div>
      <span className="font-semibold text-gray-900">
        1,247+ Shopify-Händler nutzen ReplAInow
      </span>
    </div>
  </div>
</div>
```

---

## 🎯 Layout Patterns

### Container

```tsx
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
  {/* Content */}
</div>
```

### Section Spacing

```tsx
<section className="mb-20 md:mb-28">
  {/* Section content */}
</section>
```

### Grid System

```tsx
{/* 3-column grid */}
<div className="grid md:grid-cols-3 gap-6 md:gap-8">
  {/* Items */}
</div>

{/* 2-column grid */}
<div className="grid md:grid-cols-2 gap-10 md:gap-14">
  {/* Items */}
</div>
```

---

## 🎨 Dark Section Pattern

```tsx
<div className="relative overflow-hidden rounded-3xl">
  {/* Premium dark background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1e] via-[#1a0f2e] to-[#0f0f1e]" />
  
  {/* Subtle pattern overlay */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: `url("data:image/svg+xml,...")`
  }} />
  
  <div className="relative p-10 md:p-16">
    {/* Content with perfect contrast */}
    <h2 className="text-4xl font-light text-white">
      White Text on Dark
    </h2>
    <p className="text-gray-200">
      Light gray for body text
    </p>
  </div>
</div>
```

---

## ✨ Interactive States

### Hover States

```css
/* Card Hover */
.premium-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl), var(--shadow-purple-lg);
  border-color: var(--purple-200);
}

/* Button Hover */
.cta-button:hover {
  transform: scale(1.03) translateY(-2px);
  box-shadow: var(--shadow-2xl);
}

/* Icon Hover */
.icon-container:hover svg {
  transform: scale(1.05);
}
```

### Focus States

```css
/* Accessible Focus Rings */
*:focus-visible {
  outline: 2px solid var(--purple-600);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Active States

```css
button:active {
  transform: scale(0.98);
}
```

---

## 🎯 Content Patterns

### Feature Banner (Visual Component)

**Purpose:** Visually explain a feature with infographic-style design

**Pattern:**
- Hero headline
- Visual diagram/illustration
- 3-4 key benefits
- Bottom stats row
- Clean, minimal, branded

**Example:** AI Knowledge Banner (Shopify → Data → AI)

---

### 3-Step Process

**Pattern:**
- 3 cards showing steps
- Step 2 highlighted (purple gradient background)
- Connection line between steps
- Numbered badges (1, 2, 3)
- Clean, easy to follow

---

### Testimonial Section

**Pattern:**
- 3 testimonials
- Real professional avatars
- Actual quotes
- Quantifiable metrics
- Color-coded badges (purple, violet, pink)

---

### ROI/Stats Section

**Pattern:**
- Dark background (premium feel)
- Left: Text content (white text)
- Right: Stats card (glassmorphism)
- Large numbers (text-8xl)
- Progress bar with count-up animation
- Trust badge at bottom

---

## 📐 Spacing Rules

### Vertical Rhythm

```
Hero Section:       mb-20 md:mb-28  (80px / 112px)
Between Sections:   mb-20 md:mb-28  (80px / 112px)
Card Grid:          mb-20 md:mb-28  (80px / 112px)
Section Padding:    py-16 md:py-24  (64px / 96px)
```

### Component Internal Spacing

```
Card Padding:       p-10           (40px)
Card Gap:           gap-6 md:gap-8 (24px / 32px)
Headline → Text:    mb-4           (16px)
Text → CTA:         mb-8           (32px)
Icon → Text:        gap-2 or gap-3 (8px / 12px)
```

---

## 🎨 Accessibility Standards

### Contrast Ratios

```
Normal Text:    4.5:1 minimum (WCAG AA)
Large Text:     3:1 minimum
UI Components:  3:1 minimum

Our Standards:
- Body text: text-gray-700 on white (7:1 ratio) ✅
- Headlines: text-gray-900 on white (15:1 ratio) ✅
- Dark BG text: text-gray-200 on #0f0f1e (12:1 ratio) ✅
```

### Focus Management

- All interactive elements keyboard accessible
- Visible focus rings (purple)
- Logical tab order
- Skip links provided

### Screen Reader Support

- Semantic HTML5 elements
- ARIA labels where needed
- Alt text on all images
- Descriptive link text

---

## 🚀 Performance Guidelines

### Animation Performance

```
✅ GOOD - GPU Accelerated:
- transform: translate/scale/rotate
- opacity
- filter (with caution)

❌ AVOID - Causes Reflow:
- width/height (use scale instead)
- top/left (use translate instead)
- margin/padding
```

### Image Optimization

```
- Use WebP format
- Lazy load below fold
- Responsive srcset
- Max 100KB for hero images
- Compress to 80% quality
```

### Code Splitting

```
- Lazy load routes
- Dynamic imports for heavy components
- Suspense boundaries
- Loading skeletons
```

---

## 🎨 Brand Usage Guidelines

### Logo Usage

**Purple Logo:**
- Primary usage on light backgrounds
- Minimum width: 120px
- Clear space: 20px all sides

**White Logo:**
- Use on dark backgrounds
- Use on colored backgrounds
- Use on photos

### Color Combinations

**Primary Palette:**
- Purple-600 + Violet-600 (main brand gradient)
- Purple-500 + Pink-500 (warm accent)
- Blue-500 + Violet-500 (cool accent)

**DO:**
- Use purple as primary color
- Use violet/pink/blue as accents
- Maintain high contrast
- Keep backgrounds clean

**DON'T:**
- Mix too many colors in one component
- Use green (conflicts with Shopify - avoid confusion)
- Use low contrast text
- Overuse gradients

---

## 📊 Component Sizing

### Buttons

```css
/* Primary CTA */
padding: 20px 48px;    /* py-5 px-12 */
font-size: 18px;       /* text-lg */
font-weight: 700;      /* font-bold */

/* Secondary Button */
padding: 16px 32px;    /* py-4 px-8 */
font-size: 16px;       /* text-base */
font-weight: 600;      /* font-semibold */

/* Small Button */
padding: 10px 20px;    /* py-2.5 px-5 */
font-size: 14px;       /* text-sm */
font-weight: 600;      /* font-semibold */
```

### Cards

```css
/* Premium Feature Card */
padding: 40px;         /* p-10 */
border-radius: 16px;   /* rounded-2xl */
border: 1px solid;

/* Standard Card */
padding: 24px;         /* p-6 */
border-radius: 12px;   /* rounded-xl */

/* Small Card */
padding: 16px;         /* p-4 */
border-radius: 8px;    /* rounded-lg */
```

### Icons

```css
/* In Cards/Features */
size: 28px (w-7 h-7)

/* In Buttons */
size: 20px (w-5 h-5)

/* In Badges */
size: 14-16px (w-3.5 h-3.5 or w-4 h-4)
```

---

## 🎯 Content Guidelines

### Headlines

**Hero Headline:**
- 1-2 lines max
- Action-oriented
- Include power word
- Format: "Action Verb + Benefit"
- Example: "Automatisierter Support ohne Kompromisse"

**Section Headlines:**
- Clear and specific
- Mix font weights (light + semibold)
- Example: "Nahtlose **Shopify-Integration**"

### Body Copy

**Rules:**
- Short sentences (15-20 words max)
- One idea per sentence
- Active voice
- Specific numbers ("87%" not "most")
- Avoid jargon
- Use "you" language (customer-focused)

### Call-to-Action

**Button Text:**
- Action verb first
- Benefit implied
- 2-5 words
- Examples:
  - "14 Tage kostenlos testen"
  - "Jetzt starten"
  - "Demo ansehen"

---

## 🏆 Premium Design Checklist

### ✅ Every Component Must Have:

1. **Proper Spacing** - Following 4px grid
2. **Hover State** - Interactive feedback
3. **Loading State** - Skeleton or spinner
4. **Empty State** - Helpful message
5. **Error State** - Clear error message
6. **Mobile Responsive** - Works on all screens
7. **Accessibility** - Keyboard + screen reader
8. **Performance** - 60 FPS animations
9. **Brand Consistency** - Purple color harmony
10. **Clear Purpose** - One job, done well

---

## 🎨 Visual Hierarchy Principles

### Size Hierarchy

```
1. Hero Number (87%)     → text-8xl (72px)
2. Hero Headline         → text-7xl (60px)
3. Section Headline      → text-4xl (36px)
4. Card Headline         → text-2xl (24px)
5. Body Text             → text-base (16px)
6. Small Text/Badges     → text-xs (12px)
```

### Color Hierarchy

```
1. Headlines             → text-gray-900 (darkest)
2. Body Text             → text-gray-700 (readable)
3. Secondary Text        → text-gray-600 (subtle)
4. Metadata/Labels       → text-gray-500 (lightest)
```

### Weight Hierarchy

```
1. Important Numbers     → font-light (paradox: light = big)
2. Headlines             → font-light + font-semibold (mix)
3. Body Text             → font-normal or font-medium
4. Emphasis              → font-semibold
5. CTA Buttons           → font-bold
6. Badges/Labels         → font-bold (small + bold = strong)
```

---

## 📝 Code Quality Standards

### CSS Class Naming

**DO:**
```tsx
className="text-gray-700 leading-relaxed text-[15px]"
// Clear, specific, Tailwind standard
```

**DON'T:**
```tsx
className="my-custom-text-class"
// Avoid custom classes, use Tailwind utilities
```

### Component Structure

```tsx
// Good Structure
const Component = () => {
  return (
    <div className="outer-container">
      {/* Decorative elements first */}
      <div className="absolute ..." />
      
      {/* Content in relative wrapper */}
      <div className="relative">
        {/* Actual content */}
      </div>
    </div>
  );
};
```

---

## 🎯 Micro-Interactions

### Icon Animations

```tsx
{/* Rotate on Hover */}
<div className="group">
  <Icon className="
    w-7 h-7
    group-hover:scale-110
    group-hover:rotate-3
    transition-all duration-500
  " />
</div>
```

### Underline Growth

```tsx
<div className="
  w-12 h-1.5
  bg-gradient-to-r from-purple-500 to-violet-500
  rounded-full
  group-hover:w-16
  transition-all duration-500
" />
```

### Scale on Hover

```tsx
<motion.div
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
>
  {/* Content */}
</motion.div>
```

---

## 📊 Data Visualization

### Progress Bar

```tsx
<div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "87%" }}
    transition={{ delay: 1.7, duration: 2, ease: [0.16, 1, 0.3, 1] }}
    className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
  />
</div>
```

### Count-Up Numbers

```tsx
// Use custom hook
const count = useCountUp(87, 2000, isVisible);

<div className="text-8xl font-light">
  {count}%
</div>
```

---

## 🎨 Special Effects

### Glassmorphism

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Gradient Text

```tsx
<span className="
  font-semibold
  bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900
  bg-clip-text text-transparent
">
  Gradient Text
</span>
```

### Highlight Underline

```tsx
<span className="font-semibold relative">
  <span className="relative z-10">Text</span>
  <div className="absolute bottom-1 left-0 right-0 h-3 bg-purple-200/40 -z-0" />
</span>
```

---

## 🎯 Brand Voice & Messaging

### Tone

- **Professional** but **approachable**
- **Confident** but **humble**
- **Technical** but **understandable**
- **German/English** native fluency

### Power Words

**Use:**
- Automatisch
- Sofort
- Enterprise
- Professionell
- Intelligent
- Nahtlos
- Präzise
- Garantiert

**Avoid:**
- Maybe, possibly
- Try, attempt
- Hope, wish
- Complex jargon
- Buzzwords without substance

---

## 📐 Layout Grid

### 12-Column Grid System

```
Mobile:   1 column  (< 640px)
Tablet:   2 columns (640px - 1024px)
Desktop:  3 columns (1024px+)

Max Width: 1280px (max-w-7xl)
Gutter:    24-32px (gap-6 md:gap-8)
```

---

## 🎨 Icon System

### Icon Library

**Primary:** Lucide React Icons
- Clean, minimal, professional
- Consistent stroke width
- Perfect alignment

**Icon Sizes:**
```tsx
Extra Small: w-3 h-3    (12px) - Badges
Small:       w-4 h-4    (16px) - Inline text
Medium:      w-5 h-5    (20px) - Buttons
Large:       w-7 h-7    (28px) - Cards
Extra Large: w-10 h-10  (40px) - Hero sections
```

---

## 📝 Summary

This style guide defines:

**Colors:** Purple-based palette with violet/pink/blue accents
**Typography:** Inter font, 9 size levels, 5 weights
**Spacing:** 4px grid system, consistent rhythm
**Animations:** Premium easing, smooth transitions
**Components:** 8 core patterns (cards, buttons, badges, etc.)
**Layouts:** Container, grid, section patterns
**Shadows:** Multi-layer shadows with colored variants
**Accessibility:** WCAG AA+ compliance
**Performance:** GPU-accelerated animations
**Brand:** Purple harmony, clean minimal, enterprise trust

---

**This is the foundation for building the world's best AI Helpdesk website.** 💜

---

**Document Version:** 2.0  
**Created:** November 5, 2025  
**Purpose:** Complete design system for ReplAInow website redesign  
**Status:** ✅ Ready for Implementation










