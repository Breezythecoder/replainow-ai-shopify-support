# 🎨 REPLAINOW LOGO & BRANDING GUIDE

**Date:** November 20, 2025  
**Purpose:** Logo assets and gradient text effect documentation  
**For:** External agents, designers, developers

---

## 📁 LOGO FILES

### **1. Full Logo (Optimized)**

**Location:**
```
/public/lovable-uploads/ReplAInow_Logo_optimized.png
```

**Live URL:**
```
https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png
```

**Specs:**
- Format: PNG with transparency
- Optimized for web
- Use this for: Navbar, Footer, Emails, Documents

**Usage in HTML:**
```html
<img 
  src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
  alt="ReplAInow Logo"
  class="h-10 w-10"
/>
```

---

### **2. Logogram (R Symbol)**

**Location:**
```
/public/lovable-uploads/ReplAInow Logo_Logogram_RGB.png
```

**Live URL:**
```
https://replainow.com/lovable-uploads/ReplAInow%20Logo_Logogram_RGB.png
```

**Specs:**
- Format: PNG RGB
- Just the "R" symbol
- Use this for: Favicons, App Icons, Social Media

---

## ✨ GRADIENT TEXT EFFECT: "ReplAInow"

### **The Signature Effect:**

**Visual:** Repl**AI**now (where "AI" has purple gradient)

### **CSS Implementation:**

```css
/* Method 1: Inline Gradient (Recommended) */
.logo-text {
  font-size: 24px;
  font-weight: 600;
  color: #111827; /* gray-900 for "Repl" and "now" */
}

.logo-text .ai-gradient {
  background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**HTML:**
```html
<span class="logo-text">
  Repl<span class="ai-gradient">AI</span>now
</span>
```

### **Tailwind CSS Implementation:**

```html
<span class="text-2xl font-semibold text-gray-900">
  Repl<span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
</span>
```

**Breakdown:**
```css
bg-gradient-to-r          /* Gradient direction: left to right */
from-purple-600           /* Start color: #7C3AED */
to-violet-600             /* End color: #8B5CF6 */
bg-clip-text              /* Clip gradient to text */
text-transparent          /* Make text transparent to show gradient */
```

---

## 🎨 GRADIENT VARIATIONS

### **1. Standard Purple Gradient (Default):**

```css
background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
```

**Tailwind:**
```html
bg-gradient-to-r from-purple-600 to-violet-600
```

**Use for:** Logo text, primary CTAs, brand elements

---

### **2. Light Purple Gradient (Subtle):**

```css
background: linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%);
```

**Tailwind:**
```html
bg-gradient-to-r from-purple-400 to-violet-300
```

**Use for:** Backgrounds, subtle accents

---

### **3. Dark Purple Gradient (Strong):**

```css
background: linear-gradient(135deg, #6B21A8 0%, #7C3AED 100%);
```

**Tailwind:**
```html
bg-gradient-to-r from-purple-800 to-purple-600
```

**Use for:** Dark backgrounds, strong emphasis

---

### **4. Extended Gradient (Multi-color):**

```css
background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #3B82F6 100%);
```

**Tailwind:**
```html
bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600
```

**Use for:** Hero sections, large CTAs

---

## 📝 TEXT LOGO CONSTRUCTION

### **Full Text Logo: "ReplAInow"**

**Structure:**
```
Repl + AI + now
│    │    │
│    │    └─ Normal text (gray-900)
│    └────── Gradient text (purple → violet)
└─────────── Normal text (gray-900)
```

### **Complete Code:**

```html
<!-- React/JSX Version -->
<span className="text-2xl font-semibold text-gray-900">
  Repl<span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
</span>

<!-- Plain HTML Version -->
<span style="font-size: 24px; font-weight: 600; color: #111827;">
  Repl<span style="background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">AI</span>now
</span>
```

### **With Icon + Text:**

```html
<div class="flex items-center gap-3">
  <!-- Logo Icon -->
  <img 
    src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
    alt="ReplAInow Logo"
    class="h-10 w-10"
  />
  
  <!-- Text Logo -->
  <span class="text-2xl font-semibold text-gray-900">
    Repl<span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
  </span>
</div>
```

---

## 🎯 USAGE GUIDELINES

### **✅ DO:**
- Use optimized PNG logo from lovable-uploads
- Use gradient effect on "AI" in text logo
- Keep gradient colors: purple-600 → violet-600
- Maintain aspect ratio of logo
- Use on white or light backgrounds

### **❌ DON'T:**
- Don't use gradient on entire "ReplAInow" text (only "AI")
- Don't change gradient colors (stay purple/violet)
- Don't use logo on busy backgrounds
- Don't stretch or distort logo
- Don't use low-quality versions

---

## 📐 LOGO SIZES

### **Navbar:**
```html
<img class="h-10 w-10" />  <!-- 40×40px -->
```

### **Footer:**
```html
<img class="h-12 w-12" />  <!-- 48×48px -->
```

### **Hero/Large:**
```html
<img class="h-16 w-16" />  <!-- 64×64px -->
```

### **Favicon:**
```html
<link rel="icon" href="/favicon.png" sizes="32x32" />
```

---

## 🎨 GRADIENT TEXT EXAMPLES

### **1. Heading with Gradient Accent:**

```html
<h1 class="text-4xl font-bold text-gray-900">
  Ihr 24/7 
  <span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
    AI-Mitarbeiter
  </span> 
  für Shopify
</h1>
```

### **2. Inline Gradient Emphasis:**

```html
<p class="text-lg text-gray-700">
  Support der 
  <span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-semibold">
    verkauft
  </span>
</p>
```

### **3. Badge with Gradient:**

```html
<div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-purple-200">
  <span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-bold">
    580+ Händler
  </span>
</div>
```

---

## 🎯 GRADIENT FORMULA (EXACT)

### **Purple → Violet Gradient:**

**CSS:**
```css
background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Tailwind:**
```html
bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent
```

**Color Codes:**
```
Start: #7C3AED (Purple-600)
End:   #8B5CF6 (Violet-500)
Angle: 135deg (diagonal, top-left to bottom-right)
```

---

## 📱 RESPONSIVE LOGO

### **Mobile (< 768px):**
```html
<img class="h-8 w-8" />  <!-- 32×32px -->
<span class="text-xl">Repl<span class="...">AI</span>now</span>
```

### **Desktop (≥ 768px):**
```html
<img class="h-10 w-10" />  <!-- 40×40px -->
<span class="text-2xl">Repl<span class="...">AI</span>now</span>
```

---

## 🎨 BRAND COLORS (FOR LOGO CONTEXT)

### **Primary Colors:**
```
Purple-600: #7C3AED  (Main brand)
Violet-600: #8B5CF6  (Secondary brand)
```

### **Background Colors (Logo works well on):**
```
✅ White: #FFFFFF
✅ Gray-50: #F9FAFB
✅ Purple-50: #FAF5FF
✅ Gradient backgrounds (light)
```

### **Avoid:**
```
❌ Dark backgrounds (logo not visible)
❌ Busy patterns (logo gets lost)
❌ Similar purple colors (no contrast)
```

---

## 🔗 QUICK LINKS

### **Logo Assets:**
```
Full Logo (Optimized):
https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png

Logogram (R Symbol):
https://replainow.com/lovable-uploads/ReplAInow%20Logo_Logogram_RGB.png

Favicon:
https://replainow.com/favicon.png
```

### **Live Examples:**
```
Navbar: https://replainow.com/ (top)
Footer: https://replainow.com/ (bottom)
```

---

## 📋 COPY-PASTE FOR YOUR AGENT

### **Complete Logo + Text (Navbar Style):**

```html
<div class="flex items-center gap-3">
  <!-- Logo Icon -->
  <img 
    src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
    alt="ReplAInow Logo"
    class="h-10 w-10"
  />
  
  <!-- Text Logo with Gradient "AI" -->
  <span class="text-2xl font-semibold text-gray-900">
    Repl<span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
  </span>
</div>
```

### **Just Text Logo (Minimal):**

```html
<span class="text-2xl font-semibold text-gray-900">
  Repl<span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
</span>
```

### **Just Icon Logo:**

```html
<img 
  src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
  alt="ReplAInow Logo"
  class="h-10 w-10"
/>
```

---

## 🎨 GRADIENT TEXT - TECHNICAL DETAILS

### **How It Works:**

1. **Create gradient background:**
   ```css
   background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
   ```

2. **Clip to text shape:**
   ```css
   -webkit-background-clip: text;
   background-clip: text;
   ```

3. **Make text transparent to show gradient:**
   ```css
   -webkit-text-fill-color: transparent;
   color: transparent;
   ```

**Result:** Text filled with gradient instead of solid color!

### **Browser Support:**
```
✅ Chrome/Edge: Full support
✅ Safari: Full support (-webkit prefix needed)
✅ Firefox: Full support
✅ Mobile: Full support
```

---

## 🎯 FOR UNSUBSCRIBE PAGE

### **Header with Logo:**

```html
<div class="text-center mb-12">
  <!-- Logo -->
  <img 
    src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
    alt="ReplAInow Logo"
    class="h-12 mx-auto mb-4"
  />
  
  <!-- Text Logo (Optional) -->
  <div class="text-2xl font-semibold text-gray-900">
    Repl<span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
  </div>
</div>
```

### **Footer with Logo:**

```html
<div class="text-center mt-12 pt-8 border-t border-gray-200">
  <img 
    src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
    alt="ReplAInow Logo"
    class="h-8 mx-auto mb-4 opacity-60"
  />
  <p class="text-sm text-gray-500">
    © 2025 ReplAInow. All rights reserved.
  </p>
</div>
```

---

## 🎨 ALTERNATIVE GRADIENT STYLES

### **1. Animated Gradient (Fancy):**

```html
<span class="
  bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600
  bg-clip-text text-transparent
  animate-gradient
  bg-[length:200%_auto]
">
  AI
</span>

<style>
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient {
  animation: gradient 3s ease infinite;
}
</style>
```

### **2. Glow Effect (Premium):**

```html
<span class="
  bg-gradient-to-r from-purple-600 to-violet-600
  bg-clip-text text-transparent
  drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]
">
  AI
</span>
```

### **3. Bold Gradient (Strong):**

```html
<span class="
  bg-gradient-to-r from-purple-700 to-violet-700
  bg-clip-text text-transparent
  font-bold
">
  AI
</span>
```

---

## 📋 BRAND CONSISTENCY CHECKLIST

When using ReplAInow branding:

```
✅ Logo: Use optimized PNG from lovable-uploads
✅ Text Logo: "AI" has purple→violet gradient
✅ Colors: Purple (#7C3AED) and Violet (#8B5CF6)
✅ Font: Inter or system-ui (sans-serif)
✅ Style: Clean, modern, professional
✅ Spacing: Generous white space
✅ Shadows: Soft, subtle (not harsh)
✅ Corners: Rounded (rounded-xl or rounded-2xl)
✅ Hover: Scale up (scale-105) with shadow increase
✅ Transitions: Smooth (duration-300)
```

---

## 🎯 QUICK COPY-PASTE

### **For Email Signature:**
```html
<img src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
     alt="ReplAInow" 
     width="40" 
     height="40" 
     style="display:inline-block; vertical-align:middle; margin-right:8px;" />
<span style="font-size:18px; font-weight:600; color:#111827;">
  Repl<span style="background:linear-gradient(135deg,#7C3AED,#8B5CF6); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">AI</span>now
</span>
```

### **For Unsubscribe Page Header:**
```html
<div style="text-align:center; margin-bottom:48px;">
  <img src="https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" 
       alt="ReplAInow Logo"
       style="height:48px; width:48px; margin:0 auto 16px;" />
  <div style="font-size:24px; font-weight:600; color:#111827;">
    Repl<span style="background:linear-gradient(135deg,#7C3AED,#8B5CF6); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">AI</span>now
  </div>
</div>
```

### **For Social Media:**
```
Logo URL (square): 
https://replainow.com/lovable-uploads/ReplAInow%20Logo_Logogram_RGB.png

Text: ReplAInow (with purple gradient on "AI")
Tagline: Der intelligenteste AI-Support für Shopify
```

---

## 🎨 VISUAL IDENTITY SUMMARY

### **Logo:**
- Icon: Purple "R" symbol
- Full: Icon + "ReplAInow" text
- Gradient: Only on "AI" letters

### **Colors:**
- Primary: Purple (#7C3AED)
- Secondary: Violet (#8B5CF6)
- Accent: Blue (#3B82F6), Green (#10B981)

### **Typography:**
- Font: Inter (sans-serif)
- Weight: 600 (semibold) for logo
- Size: 24px (desktop), 20px (mobile)

### **Style:**
- Modern, clean, professional
- Soft gradients, not harsh
- Rounded corners, soft shadows
- Smooth animations

---

## 🚀 FOR YOUR AGENT

**Send this message:**

```
"Hi! Please create the unsubscribe page using ReplAInow branding.

Logo Assets:
- Full Logo: https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png
- Use in header (h-12 size)

Text Logo:
- Write: Repl[AI]now
- "AI" has purple gradient: from-purple-600 to-violet-600
- Code: 
  <span class="text-2xl font-semibold text-gray-900">
    Repl<span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
  </span>

Style Guide:
- See REPLAINOW_STYLE_GUIDE_2025.md for complete design system
- Primary color: Purple gradient (#7C3AED → #8B5CF6)
- Background: White or subtle purple gradient
- Cards: White, rounded-2xl, shadow-lg
- Match the professional aesthetic of replainow.com

Full example code is in the style guide under 'Unsubscribe Page Example'."
```

---

**Created:** November 20, 2025  
**Version:** 1.0  
**Assets Location:** `/public/lovable-uploads/`  
**Live Site:** https://replainow.com

**ALLES KLAR, BRUDER?** 🎨💜

