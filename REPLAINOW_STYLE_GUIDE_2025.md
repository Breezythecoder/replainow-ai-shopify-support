# 🎨 REPLAINOW STYLE GUIDE 2025

**Website:** https://replainow.com  
**Design System:** Enterprise Modern (2025)  
**Framework:** React + Tailwind CSS  
**Purpose:** Consistent brand identity across all pages

---

## 🎯 DESIGN PHILOSOPHY

**ReplAInow Design Principles:**
1. **Clean & Professional** - Enterprise SaaS aesthetic
2. **Modern & Fresh** - 2025 design trends
3. **Accessible** - WCAG AA compliant
4. **Trustworthy** - Subtle, sophisticated, not flashy
5. **Performance-First** - Fast, smooth, responsive

**Visual Style:** Soft gradients, glassmorphism, floating elements, subtle animations

---

## 🎨 COLOR PALETTE

### **Primary Brand Colors:**

```css
/* Main Purple (Primary Brand Color) */
--brand-primary: #6366F1        /* Indigo-500 - Main brand color */
--brand-primary-light: #818CF8  /* Indigo-400 - Lighter variant */
--brand-primary-dark: #4F46E5   /* Indigo-600 - Darker variant */

/* Secondary Purple */
--brand-secondary: #8B5CF6      /* Violet-500 - Secondary accent */
--brand-secondary-light: #A78BFA /* Violet-400 */
--brand-secondary-dark: #7C3AED  /* Violet-600 */

/* Accent Colors */
--accent-green: #10B981          /* Emerald-500 - Success, positive */
--accent-blue: #3B82F6           /* Blue-500 - Info, trust */
--accent-orange: #F59E0B         /* Amber-500 - Warning, attention */
--accent-red: #EF4444            /* Red-500 - Error, urgent */
```

### **Neutral Colors:**

```css
/* Grays (Professional, Clean) */
--gray-50: #F9FAFB     /* Backgrounds */
--gray-100: #F3F4F6    /* Light backgrounds */
--gray-200: #E5E7EB    /* Borders, dividers */
--gray-300: #D1D5DB    /* Disabled states */
--gray-600: #4B5563    /* Secondary text */
--gray-700: #374151    /* Body text */
--gray-800: #1F2937    /* Headings */
--gray-900: #111827    /* Primary text */
```

### **Semantic Colors:**

```css
/* Success */
--success-bg: #ECFDF5      /* Green-50 */
--success-border: #6EE7B7  /* Green-300 */
--success-text: #065F46    /* Green-800 */

/* Error */
--error-bg: #FEF2F2        /* Red-50 */
--error-border: #FCA5A5    /* Red-300 */
--error-text: #991B1B      /* Red-800 */

/* Warning */
--warning-bg: #FFFBEB      /* Amber-50 */
--warning-border: #FCD34D  /* Amber-300 */
--warning-text: #92400E    /* Amber-800 */

/* Info */
--info-bg: #EFF6FF         /* Blue-50 */
--info-border: #93C5FD     /* Blue-300 */
--info-text: #1E40AF       /* Blue-800 */
```

---

## 🌈 GRADIENT PATTERNS

### **Primary Gradients:**

```css
/* Hero Gradient (Homepage) */
background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%);
/* Blue-100 → Indigo-100 → Purple-100 */

/* Purple Gradient (CTAs, Buttons) */
background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
/* Indigo-500 → Violet-500 */

/* Success Gradient (Positive sections) */
background: linear-gradient(135deg, #10B981 0%, #059669 100%);
/* Emerald-500 → Emerald-600 */

/* Dark Gradient (Footer, Dark sections) */
background: linear-gradient(135deg, #1F2937 0%, #111827 100%);
/* Gray-800 → Gray-900 */
```

### **Background Gradients:**

```css
/* Subtle Background (Sections) */
background: linear-gradient(180deg, #F9FAFB 0%, rgba(99, 102, 241, 0.02) 100%);
/* Gray-50 → Purple tint */

/* Mesh Gradient (Hero backgrounds) */
background: radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(99, 102, 241, 0.08) 0px, transparent 50%);
```

---

## 📝 TYPOGRAPHY

### **Font Families:**

```css
/* Primary Font (Body, UI) */
font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;

/* Display Font (Headlines) */
font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
```

### **Font Sizes:**

```css
/* Headings */
--text-hero: 56px / 64px (line-height), -0.02em (letter-spacing)
--text-h1: 48px / 56px, -0.02em
--text-h2: 36px / 44px, -0.01em
--text-h3: 30px / 38px, -0.01em
--text-h4: 24px / 32px, normal
--text-h5: 20px / 28px, normal

/* Body */
--text-xl: 20px / 28px
--text-lg: 18px / 28px
--text-base: 16px / 24px
--text-sm: 14px / 20px
--text-xs: 12px / 16px
```

### **Font Weights:**

```css
--font-light: 300      /* Headlines (modern, clean) */
--font-normal: 400     /* Body text */
--font-medium: 500     /* Subheadings */
--font-semibold: 600   /* Buttons, labels */
--font-bold: 700       /* Strong emphasis */
```

### **Text Colors:**

```css
/* Headings */
color: #111827 (gray-900)

/* Body Text */
color: #374151 (gray-700)

/* Secondary Text */
color: #6B7280 (gray-500)

/* Muted Text */
color: #9CA3AF (gray-400)
```

---

## 🔘 BUTTONS

### **Primary Button (Main CTA):**

```html
<button class="
  bg-gradient-to-r from-purple-600 to-violet-600
  text-white
  px-8 py-4
  rounded-xl
  font-semibold text-lg
  shadow-lg hover:shadow-xl
  transition-all duration-300
  hover:scale-105
">
  14 Tage kostenlos testen
</button>
```

**CSS:**
```css
background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
color: #FFFFFF;
padding: 16px 32px;
border-radius: 12px;
font-weight: 600;
font-size: 18px;
box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**Hover:**
```css
transform: scale(1.05);
box-shadow: 0 15px 35px rgba(124, 58, 237, 0.4);
```

### **Secondary Button:**

```html
<button class="
  bg-white
  text-gray-900
  px-8 py-4
  rounded-xl
  font-semibold text-lg
  shadow-lg
  border-2 border-gray-200
  hover:border-purple-300
  transition-all
">
  Live Demo ansehen
</button>
```

### **Ghost Button:**

```html
<button class="
  bg-white/10 backdrop-blur
  text-white
  px-8 py-4
  rounded-xl
  font-semibold
  border-2 border-white/30
  hover:bg-white/20
  transition-all
">
  Mehr erfahren
</button>
```

---

## 📦 CARDS & CONTAINERS

### **Standard Card:**

```html
<div class="
  bg-white
  rounded-2xl
  p-6 md:p-8
  shadow-lg
  border border-gray-100
  hover:shadow-xl
  hover:border-purple-200
  transition-all duration-300
">
  <!-- Content -->
</div>
```

**CSS:**
```css
background: #FFFFFF;
border-radius: 16px;
padding: 32px;
border: 1px solid #F3F4F6;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;
```

### **Glass Card (Modern):**

```html
<div class="
  bg-white/80 backdrop-blur-sm
  rounded-2xl
  p-6
  shadow-glass
  border border-white/50
">
  <!-- Content -->
</div>
```

**CSS:**
```css
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(12px);
border-radius: 16px;
padding: 24px;
border: 1px solid rgba(255, 255, 255, 0.5);
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
```

### **Feature Card:**

```html
<div class="
  bg-gradient-to-br from-purple-50 to-blue-50
  rounded-xl
  p-6
  border border-purple-100
  hover:shadow-lg
  transition-all
">
  <!-- Content -->
</div>
```

---

## 🎭 SECTIONS & LAYOUTS

### **Section Backgrounds:**

**1. Light Section (Default):**
```css
background: #FFFFFF;
padding: 80px 0;
```

**2. Gradient Section (Hero, Special):**
```css
background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%);
padding: 80px 0;
```

**3. Gray Section (Alternating):**
```css
background: #F9FAFB;  /* gray-50 */
padding: 80px 0;
```

**4. Dark Section (Footer, Contrast):**
```css
background: linear-gradient(135deg, #1F2937 0%, #111827 100%);
color: #FFFFFF;
padding: 80px 0;
```

**5. Colored Section (CTA, Emphasis):**
```css
background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
color: #FFFFFF;
padding: 80px 0;
```

### **Container Widths:**

```css
/* Standard Container */
max-width: 1280px;  /* xl */
margin: 0 auto;
padding: 0 24px;

/* Narrow Container (Text-heavy) */
max-width: 896px;   /* 3xl */
margin: 0 auto;

/* Wide Container (Full-width) */
max-width: 1536px;  /* 2xl */
margin: 0 auto;
```

---

## 🎯 SPACING SYSTEM

### **Padding/Margin Scale:**

```css
/* Tailwind Scale (use these!) */
p-2: 8px
p-4: 16px
p-6: 24px
p-8: 32px
p-10: 40px
p-12: 48px
p-16: 64px
p-20: 80px

/* Section Spacing */
py-12: 48px (small sections)
py-16: 64px (medium sections)
py-20: 80px (large sections)
py-24: 96px (hero sections)
```

### **Gap Spacing:**

```css
gap-2: 8px   (tight)
gap-4: 16px  (normal)
gap-6: 24px  (comfortable)
gap-8: 32px  (spacious)
gap-12: 48px (section spacing)
```

---

## 🔲 BORDERS & RADIUS

### **Border Radius:**

```css
/* Standard */
rounded-lg: 8px     (small elements)
rounded-xl: 12px    (buttons, inputs)
rounded-2xl: 16px   (cards, containers)
rounded-3xl: 24px   (hero elements)
rounded-full: 9999px (badges, avatars)
```

### **Borders:**

```css
/* Light Border (Default) */
border: 1px solid #E5E7EB;  /* gray-200 */

/* Medium Border (Emphasis) */
border: 2px solid #D1D5DB;  /* gray-300 */

/* Colored Border (Accent) */
border: 2px solid #C4B5FD;  /* purple-300 */

/* Strong Border (Contrast) */
border: 2px solid #6366F1;  /* indigo-500 */
```

---

## ✨ SHADOWS

### **Elevation System:**

```css
/* Elevation 1 (Subtle) */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Elevation 2 (Normal Cards) */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

/* Elevation 3 (Floating Cards) */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* Elevation 4 (Modals, Dropdowns) */
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);

/* Elevation 5 (Hero Elements) */
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
```

### **Colored Shadows (Brand):**

```css
/* Purple Shadow (Primary CTAs) */
box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);

/* Green Shadow (Success) */
box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);

/* Blue Shadow (Info) */
box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
```

---

## 🎬 ANIMATIONS & TRANSITIONS

### **Standard Transitions:**

```css
/* Smooth (Default) */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Fast (Hover effects) */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Slow (Large movements) */
transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Bounce (Playful) */
transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### **Hover Effects:**

```css
/* Scale Up (Buttons, Cards) */
hover:scale-105
transform: scale(1.05);

/* Shadow Increase */
hover:shadow-xl

/* Border Color Change */
hover:border-purple-300

/* Background Opacity */
hover:bg-white/20
```

### **Animations:**

```css
/* Fade In */
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Float (Floating elements) */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Gradient Animation (Backgrounds) */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## 🖼️ COMPONENT PATTERNS

### **1. Hero Section:**

```html
<section class="
  relative overflow-hidden
  bg-gradient-to-b from-purple-50 via-white to-white
  py-20 md:py-24
">
  <!-- Mesh Gradient Background -->
  <div class="absolute inset-0 bg-mesh-purple opacity-100"></div>
  
  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <!-- Badge -->
    <div class="
      inline-flex items-center gap-2
      bg-white/95 backdrop-blur-sm
      border-2 border-purple-200
      rounded-full
      px-6 py-2.5
      shadow-elevation-3
    ">
      <span class="text-sm font-semibold text-purple-950">
        Enterprise KI-Lösung für Shopify
      </span>
    </div>
    
    <!-- H1 -->
    <h1 class="
      text-5xl md:text-7xl
      font-light
      text-gray-900
      mb-7
      tracking-tight
      leading-[1.1]
    ">
      Ihr 24/7 AI-Mitarbeiter für Shopify
    </h1>
    
    <!-- Subtitle -->
    <p class="
      text-lg md:text-xl
      text-gray-700
      max-w-3xl mx-auto
      leading-relaxed
      mb-10
    ">
      Ersetzt bis zu 3 Support-Mitarbeiter...
    </p>
    
    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4">
      <!-- Primary Button (see Buttons section) -->
      <!-- Secondary Button (see Buttons section) -->
    </div>
  </div>
</section>
```

### **2. Feature Card:**

```html
<div class="
  bg-white
  rounded-2xl
  p-8
  shadow-lg
  border border-gray-100
  hover:shadow-xl
  hover:border-purple-200
  transition-all duration-300
">
  <!-- Icon -->
  <div class="
    w-12 h-12
    rounded-full
    bg-gradient-to-br from-purple-600 to-violet-600
    flex items-center justify-center
    mb-4
    shadow-lg
  ">
    <svg class="w-6 h-6 text-white">...</svg>
  </div>
  
  <!-- Title -->
  <h3 class="text-2xl font-bold text-gray-900 mb-3">
    Feature Title
  </h3>
  
  <!-- Description -->
  <p class="text-gray-700 leading-relaxed">
    Feature description text...
  </p>
</div>
```

### **3. Stats/Metrics Card:**

```html
<div class="
  bg-white/80 backdrop-blur-sm
  rounded-2xl
  p-6
  shadow-lg
  border border-gray-100
">
  <!-- Number -->
  <div class="text-4xl font-bold text-purple-600 mb-2">
    60-80%
  </div>
  
  <!-- Label -->
  <div class="text-sm text-gray-600 font-medium">
    Automatisierung
  </div>
</div>
```

### **4. Testimonial Card:**

```html
<div class="
  bg-white
  rounded-2xl
  p-8
  shadow-elevation-3
  border border-gray-100
">
  <!-- Quote -->
  <p class="text-gray-700 text-lg mb-6 leading-relaxed">
    "Beste Investition 2025! Unsere Kunden bekommen..."
  </p>
  
  <!-- Author -->
  <div class="flex items-center gap-4">
    <img 
      src="..." 
      class="w-12 h-12 rounded-full"
      alt="Sarah Klein"
    />
    <div>
      <div class="font-semibold text-gray-900">Sarah Klein</div>
      <div class="text-sm text-gray-600">Owner, BeautyWorld</div>
    </div>
  </div>
  
  <!-- Metric Badge -->
  <div class="
    mt-4 pt-4 border-t border-gray-200
    text-sm font-semibold text-purple-600
  ">
    92% Automatisierung
  </div>
</div>
```

### **5. CTA Section (Full-width):**

```html
<section class="
  py-20
  bg-gradient-to-br from-purple-600 via-violet-600 to-blue-600
  text-white
">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <!-- Title -->
    <h2 class="text-3xl md:text-5xl font-bold mb-6">
      Bereit, deinen Support zu automatisieren?
    </h2>
    
    <!-- Subtitle -->
    <p class="text-xl mb-8 text-purple-100">
      Schließe dich 580+ erfolgreichen Shopify-Händlern an
    </p>
    
    <!-- Stats -->
    <div class="flex justify-center gap-8 mb-10">
      <div class="text-2xl font-bold">4.9/5 Sterne</div>
      <div class="text-2xl font-bold">280+ Bewertungen</div>
    </div>
    
    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="
        bg-white text-purple-600
        px-8 py-4 rounded-xl
        font-bold text-lg
        shadow-xl hover:shadow-2xl
        hover:scale-105
        transition-all
      ">
        14 Tage kostenlos testen
      </button>
    </div>
  </div>
</section>
```

---

## 🎨 BACKGROUND PATTERNS

### **1. Mesh Gradient (Hero):**

```css
background: 
  radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
  radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, rgba(99, 102, 241, 0.08) 0px, transparent 50%);
```

**Tailwind:** `bg-mesh-purple`

### **2. Subtle Gradient (Sections):**

```css
background: linear-gradient(180deg, #F9FAFB 0%, rgba(99, 102, 241, 0.02) 100%);
```

**Tailwind:** `bg-gradient-subtle`

### **3. Floating Orbs (Decorative):**

```html
<div class="absolute top-20 right-1/4 w-64 h-64 
  bg-purple-200/30 rounded-full blur-3xl">
</div>
```

---

## 📱 RESPONSIVE DESIGN

### **Breakpoints:**

```css
sm: 640px   (Mobile landscape)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
2xl: 1536px (Extra large)
```

### **Mobile-First Approach:**

```html
<!-- Mobile: Stack vertically -->
<div class="flex flex-col gap-4">
  
<!-- Desktop: Horizontal -->
<div class="flex flex-col md:flex-row gap-4">

<!-- Grid: 1 col mobile, 2 cols tablet, 3 cols desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## 🔤 CONTENT PATTERNS

### **Heading Hierarchy:**

```html
<!-- H1 (Page Title) -->
<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">

<!-- H2 (Section Title) -->
<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

<!-- H3 (Subsection) -->
<h3 class="text-2xl font-bold text-gray-900 mb-3">

<!-- H4 (Card Title) -->
<h4 class="text-xl font-bold text-gray-900 mb-2">
```

### **Paragraph Styles:**

```html
<!-- Large (Hero, Important) -->
<p class="text-xl md:text-2xl text-gray-700 leading-relaxed">

<!-- Normal (Body) -->
<p class="text-lg text-gray-700 leading-relaxed">

<!-- Small (Captions, Notes) -->
<p class="text-sm text-gray-600">
```

### **Lists:**

```html
<ul class="space-y-3">
  <li class="flex items-start gap-2">
    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">✓</svg>
    <span class="text-gray-700">List item text</span>
  </li>
</ul>
```

---

## 🎯 BADGES & LABELS

### **Badge (Status, Tags):**

```html
<span class="
  inline-flex items-center gap-2
  bg-purple-100 text-purple-700
  px-4 py-2
  rounded-full
  text-sm font-semibold
">
  🚀 SUPPORT AUTOMATION 2025
</span>
```

### **Metric Badge:**

```html
<div class="
  bg-green-100 text-green-700
  px-4 py-2
  rounded-lg
  font-bold text-lg
">
  92% Automatisierung
</div>
```

---

## 🖼️ IMAGES & MEDIA

### **Image Styling:**

```html
<img 
  src="..." 
  alt="..."
  class="
    rounded-2xl
    shadow-lg
    border border-gray-100
    w-full
    object-cover
  "
/>
```

### **Avatar:**

```html
<img 
  src="..." 
  alt="..."
  class="
    w-12 h-12
    rounded-full
    border-2 border-white
    shadow-md
  "
/>
```

---

## 🎨 ICON USAGE

### **Icon Colors:**

```css
/* Primary Icons */
text-purple-600

/* Success Icons */
text-green-600

/* Info Icons */
text-blue-600

/* Warning Icons */
text-orange-500

/* Error Icons */
text-red-600

/* Neutral Icons */
text-gray-600
```

### **Icon Sizes:**

```css
w-4 h-4: 16px (small, inline)
w-5 h-5: 20px (normal, buttons)
w-6 h-6: 24px (large, features)
w-8 h-8: 32px (extra large, hero)
w-12 h-12: 48px (icon containers)
```

---

## 📋 FORMS & INPUTS

### **Input Field:**

```html
<input 
  type="text"
  class="
    w-full
    px-4 py-3
    border-2 border-gray-300
    rounded-xl
    focus:border-purple-500
    focus:outline-none
    text-lg
    font-semibold
  "
  placeholder="Enter value..."
/>
```

### **Label:**

```html
<label class="
  block
  text-sm font-semibold text-gray-700
  mb-2
">
  Field Label
</label>
```

---

## 🎯 SPECIFIC USE CASES

### **Unsubscribe Page Example:**

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter Abmelden - ReplAInow</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-b from-purple-50 via-white to-white min-h-screen">
  
  <!-- Container -->
  <div class="max-w-2xl mx-auto px-6 py-20">
    
    <!-- Logo -->
    <div class="text-center mb-12">
      <img 
        src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
        alt="ReplAInow Logo"
        class="h-12 mx-auto mb-6"
      />
    </div>
    
    <!-- Main Card -->
    <div class="
      bg-white
      rounded-2xl
      p-8 md:p-12
      shadow-elevation-3
      border border-gray-100
    ">
      
      <!-- Icon -->
      <div class="
        w-16 h-16
        rounded-full
        bg-gradient-to-br from-purple-600 to-violet-600
        flex items-center justify-center
        mx-auto mb-6
        shadow-lg
      ">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </div>
      
      <!-- Heading -->
      <h1 class="
        text-3xl md:text-4xl
        font-bold
        text-gray-900
        text-center
        mb-4
      ">
        Newsletter abmelden
      </h1>
      
      <!-- Subtitle -->
      <p class="
        text-lg
        text-gray-700
        text-center
        mb-8
        leading-relaxed
      ">
        Schade, dass du gehst! Wir würden uns freuen, wenn du bleibst.
      </p>
      
      <!-- Form -->
      <form class="space-y-6">
        <!-- Email Input -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            E-Mail-Adresse
          </label>
          <input 
            type="email"
            class="
              w-full
              px-4 py-3
              border-2 border-gray-300
              rounded-xl
              focus:border-purple-500
              focus:outline-none
              text-lg
            "
            placeholder="deine@email.com"
          />
        </div>
        
        <!-- Reason (Optional) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Grund (optional)
          </label>
          <textarea 
            class="
              w-full
              px-4 py-3
              border-2 border-gray-300
              rounded-xl
              focus:border-purple-500
              focus:outline-none
              resize-none
            "
            rows="3"
            placeholder="Was können wir besser machen?"
          ></textarea>
        </div>
        
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <!-- Unsubscribe Button -->
          <button 
            type="submit"
            class="
              flex-1
              bg-gray-200 text-gray-700
              px-6 py-3
              rounded-xl
              font-semibold
              hover:bg-gray-300
              transition-all
            "
          >
            Abmelden
          </button>
          
          <!-- Stay Subscribed -->
          <button 
            type="button"
            class="
              flex-1
              bg-gradient-to-r from-purple-600 to-violet-600
              text-white
              px-6 py-3
              rounded-xl
              font-semibold
              shadow-lg
              hover:shadow-xl
              hover:scale-105
              transition-all
            "
          >
            Doch nicht abmelden
          </button>
        </div>
      </form>
      
      <!-- Footer Note -->
      <p class="
        text-sm text-gray-500
        text-center
        mt-8
        pt-6
        border-t border-gray-200
      ">
        Du kannst dich jederzeit wieder anmelden
      </p>
      
    </div>
    
    <!-- Footer Links -->
    <div class="text-center mt-8">
      <a href="https://replainow.com" class="text-purple-600 hover:text-purple-700 font-medium">
        Zurück zu ReplAInow
      </a>
    </div>
    
  </div>
  
</body>
</html>
```

---

## 🎨 COLOR COMBINATIONS (DO's)

### **✅ GOOD Combinations:**

```css
/* Purple + White (Primary) */
bg-gradient-to-r from-purple-600 to-violet-600
text-white

/* White + Purple Text (Clean) */
bg-white
text-purple-600

/* Gray + Purple Border (Subtle) */
bg-gray-50
border-purple-200

/* Green + White (Success) */
bg-gradient-to-r from-green-500 to-emerald-500
text-white

/* Dark + Purple Accent */
bg-gray-900
text-purple-400
```

### **❌ AVOID Combinations:**

```css
/* Too much color */
❌ bg-red-500 text-yellow-500

/* Low contrast */
❌ bg-gray-200 text-gray-300

/* Clashing colors */
❌ bg-purple-600 text-orange-500

/* Too dark */
❌ bg-black text-gray-800
```

---

## 🎯 BRAND VOICE (Visual)

### **Characteristics:**
- **Professional** - Not playful, not corporate
- **Modern** - 2025 design trends
- **Clean** - Lots of white space
- **Trustworthy** - Subtle, not flashy
- **Premium** - High-quality feel

### **Visual Mood:**
- **Calm** - Soft gradients, not harsh
- **Confident** - Bold typography, clear hierarchy
- **Innovative** - Modern patterns (glassmorphism, mesh)
- **Accessible** - WCAG AA compliant

---

## 📐 LAYOUT PRINCIPLES

### **Spacing:**
```
Sections: 80px vertical padding
Cards: 32px padding
Gaps: 24px between elements
Margins: 24px bottom for paragraphs
```

### **Alignment:**
```
Headings: Center or Left (never right)
Body Text: Left-aligned (better readability)
CTAs: Center-aligned
```

### **Hierarchy:**
```
1. Large heading (H1)
2. Subtitle (large paragraph)
3. Stats/Badges (visual break)
4. CTA Buttons (primary action)
5. Secondary content
```

---

## 🎨 QUICK REFERENCE

### **Most Used Classes:**

```css
/* Containers */
max-w-7xl mx-auto px-6

/* Sections */
py-20 bg-white

/* Cards */
bg-white rounded-2xl p-8 shadow-lg border border-gray-100

/* Buttons */
bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all

/* Headings */
text-3xl md:text-4xl font-bold text-gray-900 mb-4

/* Body Text */
text-lg text-gray-700 leading-relaxed
```

---

## 🏆 BRAND ASSETS

### **Logo:**
```
URL: https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png
Usage: Always use optimized version
Min Size: 120px width
Background: White or transparent
```

### **Favicon:**
```
URL: https://replainow.com/favicon.png
Size: 32x32px
Format: PNG
```

### **Brand Colors (Hex):**
```
Primary Purple: #6366F1
Secondary Violet: #8B5CF6
Success Green: #10B981
Accent Blue: #3B82F6
```

---

## 📋 CHECKLIST FOR NEW PAGES

When creating a new page (like unsubscribe), ensure:

```
✅ Uses purple gradient (#6366F1 → #8B5CF6)
✅ White background or subtle gradient
✅ Rounded corners (rounded-2xl = 16px)
✅ Proper shadows (shadow-lg or shadow-elevation-3)
✅ Font: Inter or system fonts
✅ Spacing: py-20 for sections, p-8 for cards
✅ Buttons: Primary purple gradient, secondary white
✅ Text: Gray-900 for headings, Gray-700 for body
✅ Responsive: Mobile-first (flex-col → md:flex-row)
✅ Hover effects: scale-105, shadow-xl
✅ Transitions: duration-300, ease
```

---

## 🚀 IMPLEMENTATION TIPS

### **For Your Agent:**

**Tell them:**
```
"Use the ReplAInow style guide (REPLAINOW_STYLE_GUIDE_2025.md).

Key points:
- Primary color: Purple gradient (#6366F1 → #8B5CF6)
- Background: White or subtle purple gradient
- Cards: White, rounded-2xl, shadow-lg
- Buttons: Purple gradient (primary), white (secondary)
- Font: Inter, system-ui
- Spacing: py-20 sections, p-8 cards
- Shadows: Soft, subtle (not harsh)
- Responsive: Mobile-first
- See 'Unsubscribe Page Example' section for full code

Match the professional, clean, modern aesthetic of replainow.com"
```

---

## 💎 EXAMPLES FROM LIVE SITE

### **Homepage Hero:**
```
Background: Purple gradient mesh
Badge: White with purple border
H1: 7xl, font-light, gray-900
Subtitle: xl, gray-700
Buttons: Purple gradient + White secondary
```

### **Feature Sections:**
```
Background: White or gray-50
Cards: White, rounded-2xl, shadow-lg
Icons: Purple gradient circles
Text: Gray-900 headings, gray-700 body
```

### **CTA Sections:**
```
Background: Purple gradient (full-width)
Text: White
Buttons: White with purple text
Stats: Bold, white text
```

---

## 🎊 FINAL NOTES

**This style guide ensures:**
- ✅ Consistent brand identity
- ✅ Professional appearance
- ✅ Modern 2025 design
- ✅ Accessible (WCAG AA)
- ✅ Responsive (mobile-first)
- ✅ Fast performance

**Use this for:**
- Unsubscribe pages
- Email templates
- Landing pages
- Any ReplAInow branded content

---

**Created:** November 20, 2025  
**Version:** 1.0  
**Website:** https://replainow.com  
**Framework:** Tailwind CSS + React

**COPY THIS TO YOUR AGENT!** 🎨💜

