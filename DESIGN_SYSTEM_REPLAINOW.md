# 🎨 ReplAInow Design System
**Version 1.0 | November 2025**

Enterprise-level Design System für ReplAInow AI Shopify Support

---

## 📐 Design Philosophy

### Core Principles
1. **Premium & Professional** - Enterprise-grade UI that builds trust
2. **Brand-Aligned** - Purple-based palette matching the ReplAInow logo
3. **Conversion-Focused** - Every element drives user action
4. **Accessible** - WCAG 2.1 AA compliant
5. **Performance** - Smooth animations, optimized loading

---

## 🎨 Color System

### Primary Colors (Purple Family)
```css
/* Brand Purple - Main */
--purple-50: #faf5ff;
--purple-100: #f3e8ff;
--purple-200: #e9d5ff;
--purple-300: #d8b4fe;
--purple-400: #c084fc;
--purple-500: #a855f7;  /* Primary Brand Color */
--purple-600: #9333ea;  /* Logo Purple */
--purple-700: #7e22ce;
--purple-800: #6b21a8;
--purple-900: #581c87;

/* Violet - Secondary */
--violet-50: #f5f3ff;
--violet-100: #ede9fe;
--violet-200: #ddd6fe;
--violet-300: #c4b5fd;
--violet-400: #a78bfa;
--violet-500: #8b5cf6;  /* Secondary Brand Color */
--violet-600: #7c3aed;
--violet-700: #6d28d9;
--violet-800: #5b21b6;
--violet-900: #4c1d95;
```

### Accent Colors
```css
/* Pink - Warm Accent */
--pink-50: #fdf2f8;
--pink-400: #f472b6;
--pink-500: #ec4899;
--pink-600: #db2777;

/* Blue - Cool Accent */
--blue-50: #eff6ff;
--blue-400: #60a5fa;
--blue-500: #3b82f6;
--blue-600: #2563eb;
```

### Neutral Colors
```css
/* Grayscale */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### Semantic Colors
```css
/* Success */
--success-light: #10b981;
--success-dark: #059669;

/* Warning */
--warning-light: #f59e0b;
--warning-dark: #d97706;

/* Error */
--error-light: #ef4444;
--error-dark: #dc2626;
```

---

## 🔤 Typography

### Font Family
```css
/* Primary Font */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale
```css
/* Display */
--text-7xl: 72px;   /* 4.5rem */
--text-6xl: 60px;   /* 3.75rem */
--text-5xl: 48px;   /* 3rem */

/* Headings */
--text-4xl: 36px;   /* 2.25rem */
--text-3xl: 30px;   /* 1.875rem */
--text-2xl: 24px;   /* 1.5rem */
--text-xl: 20px;    /* 1.25rem */

/* Body */
--text-lg: 18px;    /* 1.125rem */
--text-base: 16px;  /* 1rem */
--text-sm: 14px;    /* 0.875rem */
--text-xs: 12px;    /* 0.75rem */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.1;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Letter Spacing
```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

---

## 📏 Spacing System

```css
/* Consistent spacing scale (0.25rem = 4px base) */
--spacing-0: 0px;
--spacing-1: 4px;      /* 0.25rem */
--spacing-2: 8px;      /* 0.5rem */
--spacing-3: 12px;     /* 0.75rem */
--spacing-4: 16px;     /* 1rem */
--spacing-5: 20px;     /* 1.25rem */
--spacing-6: 24px;     /* 1.5rem */
--spacing-7: 28px;     /* 1.75rem */
--spacing-8: 32px;     /* 2rem */
--spacing-10: 40px;    /* 2.5rem */
--spacing-12: 48px;    /* 3rem */
--spacing-14: 56px;    /* 3.5rem */
--spacing-16: 64px;    /* 4rem */
--spacing-20: 80px;    /* 5rem */
--spacing-24: 96px;    /* 6rem */
--spacing-28: 112px;   /* 7rem */
```

---

## 🎭 Shadows & Elevation

```css
/* Shadow Layers */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Colored Shadows (Brand) */
--shadow-purple-sm: 0 4px 12px rgba(147, 51, 234, 0.15);
--shadow-purple-md: 0 8px 24px rgba(147, 51, 234, 0.25);
--shadow-purple-lg: 0 16px 48px rgba(147, 51, 234, 0.35);

/* Colored Shadows (Accent) */
--shadow-blue-sm: 0 4px 12px rgba(59, 130, 246, 0.15);
--shadow-pink-sm: 0 4px 12px rgba(236, 72, 153, 0.15);
```

---

## 🌈 Gradients

### Primary Gradients
```css
/* Purple Gradients */
--gradient-purple: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
--gradient-purple-violet: linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%);
--gradient-purple-pink: linear-gradient(135deg, #c084fc 0%, #ec4899 100%);

/* Accent Gradients */
--gradient-blue-violet: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
--gradient-pink-purple: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);

/* Text Gradients */
--gradient-text-purple: linear-gradient(90deg, #111827 0%, #9333ea 50%, #111827 100%);

/* Background Gradients */
--gradient-bg-light: linear-gradient(180deg, #ffffff 0%, #faf5ff 50%, #ffffff 100%);
--gradient-bg-dark: linear-gradient(135deg, #111827 0%, #4c1d95 100%);
```

---

## 🔲 Border Radius

```css
--radius-sm: 4px;      /* 0.25rem */
--radius-md: 8px;      /* 0.5rem */
--radius-lg: 12px;     /* 0.75rem */
--radius-xl: 16px;     /* 1rem */
--radius-2xl: 20px;    /* 1.25rem */
--radius-3xl: 24px;    /* 1.5rem */
--radius-full: 9999px; /* Fully rounded */
```

---

## ⚡ Animations

### Timing Functions
```css
/* Easing Functions */
--ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);     /* Smooth, elastic */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);     /* Default ease */
--ease-in: cubic-bezier(0.4, 0, 1, 1);            /* Ease in */
--ease-out: cubic-bezier(0, 0, 0.2, 1);           /* Ease out */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);      /* Ease in-out */
```

### Duration
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
--duration-slowest: 1000ms;
```

### Animation Presets
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* Scale In */
@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}

/* Pulse Glow */
@keyframes pulseGlow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
}
```

---

## 🧩 Component Patterns

### Card Component
```tsx
<div className="
  bg-white 
  rounded-2xl 
  p-8 md:p-10 
  border border-gray-200 
  shadow-sm 
  hover:shadow-2xl 
  hover:shadow-purple-100/50 
  hover:border-purple-200 
  transition-all duration-500
">
  {/* Card content */}
</div>
```

### Primary Button (CTA)
```tsx
<button className="
  group 
  relative 
  inline-flex 
  items-center 
  gap-3 
  bg-gradient-to-r from-purple-600 to-violet-600 
  hover:from-purple-700 hover:to-violet-700 
  text-white 
  px-10 py-5 
  rounded-xl 
  font-semibold 
  text-lg 
  transition-all 
  shadow-xl shadow-purple-200/50 
  hover:shadow-2xl hover:shadow-purple-300/50
  hover:scale-105
">
  <span>Button Text</span>
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
</button>
```

### Badge Component
```tsx
<div className="
  px-3.5 py-1.5 
  bg-purple-50 
  rounded-full
  text-xs 
  font-bold 
  text-purple-700 
  tracking-wide 
  uppercase
">
  Badge Text
</div>
```

### Gradient Underline
```tsx
<div className="
  w-14 h-1.5 
  bg-gradient-to-r from-purple-500 to-violet-500 
  rounded-full 
  group-hover:w-20 
  transition-all duration-500
" />
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--screen-sm: 640px;   /* Small devices */
--screen-md: 768px;   /* Medium devices */
--screen-lg: 1024px;  /* Large devices */
--screen-xl: 1280px;  /* Extra large */
--screen-2xl: 1536px; /* 2X Extra large */
```

### Usage in Tailwind
```tsx
className="
  text-5xl         // Mobile
  sm:text-6xl      // 640px+
  md:text-7xl      // 768px+
"
```

---

## ✨ Interaction States

### Hover States
```css
/* Card Hover */
.card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-2xl), var(--shadow-purple-lg);
  border-color: var(--purple-200);
}

/* Button Hover */
.button:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-2xl), var(--shadow-purple-md);
}

/* Icon Hover */
.icon:hover {
  transform: scale(1.1);
}
```

### Focus States
```css
.focusable:focus {
  outline: 2px solid var(--purple-600);
  outline-offset: 2px;
}
```

### Active States
```css
.button:active {
  transform: scale(0.98);
}
```

---

## 🎯 Layout Patterns

### Container
```tsx
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
  {/* Content */}
</div>
```

### Grid System
```tsx
<div className="grid md:grid-cols-3 gap-6 md:gap-8">
  {/* Grid items */}
</div>
```

### Section Spacing
```tsx
<section className="mb-20 md:mb-28">
  {/* Section content */}
</section>
```

---

## 📊 Data Visualization

### Progress Bar
```tsx
<div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "87%" }}
    transition={{ delay: 1.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full shadow-lg shadow-purple-500/50"
  />
</div>
```

---

## ♿ Accessibility Guidelines

### Minimum Contrast Ratios
- Normal text: 4.5:1
- Large text: 3:1
- UI components: 3:1

### Focus Indicators
- Always visible
- 2px outline minimum
- Purple brand color

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover states
- Keyboard navigable

---

## 🚀 Performance Guidelines

### Animation Best Practices
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, or `position`
- Keep animation duration under 500ms for micro-interactions

### Image Optimization
- Use WebP format when possible
- Lazy load images below the fold
- Provide responsive image sets

### Code Splitting
- Lazy load routes
- Code split large components
- Use dynamic imports

---

## 📝 Usage Examples

### Hero Section
```tsx
<div className="text-center mb-20 md:mb-28 relative">
  <motion.div 
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60 rounded-full px-6 py-2.5 mb-8 shadow-sm"
  >
    <Sparkles className="w-4 h-4 text-purple-600" />
    <span className="text-sm font-semibold text-purple-900 tracking-tight">
      Enterprise KI-Lösung
    </span>
  </motion.div>
  
  <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-7 tracking-tight leading-[1.1]">
    Your Headline
    <br />
    <span className="font-semibold bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent">
      with Gradient
    </span>
  </h1>
</div>
```

---

## 🎨 Brand Assets

### Logo Usage
- **Purple Logo**: Primary usage on light backgrounds
- **White Logo**: Use on dark/colored backgrounds
- **Minimum Size**: 120px width
- **Clear Space**: 20px minimum on all sides

### Color Combinations
- **Primary**: Purple-600 + Violet-600
- **Accent 1**: Purple-500 + Pink-500
- **Accent 2**: Blue-500 + Violet-500
- **Neutral**: Gray-900 + Purple-600

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** November 2025  
**Version:** 1.0  
**Maintained by:** ReplAInow Design Team















