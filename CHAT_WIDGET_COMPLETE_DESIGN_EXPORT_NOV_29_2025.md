# 🎨 REPLAINOW CHAT WIDGET - COMPLETE DESIGN EXPORT

**Erstellt**: 29. November 2025  
**Für**: Marketing Website Team  
**Zweck**: 1:1 Design Replication des Live Chat Widgets  
**Status**: ULTRA DETAILLIERT - ALLES was du brauchst!

---

## 📋 TABLE OF CONTENTS

1. [CSS Variables & Color System](#1-css-variables--color-system)
2. [Chat Window Container](#2-chat-window-container)
3. [Chat Header](#3-chat-header)
4. [Chat Messages](#4-chat-messages)
5. [Product Cards](#5-product-cards)
6. [Discount Cards](#6-discount-cards)
7. [Checkout Cards](#7-checkout-cards)
8. [Chat Input Field](#8-chat-input-field)
9. [Animations](#9-animations)
10. [React Components](#10-react-components)
11. [Example Usage](#11-example-usage)

---

## 1️⃣ CSS VARIABLES & COLOR SYSTEM

### **Complete CSS Variables**

```css
:root {
  /* ═══════════════════════════════════════════════════════════════
     ULTRA-NEUTRAL COLOR SYSTEM (Universal for all shops!)
     ═══════════════════════════════════════════════════════════════ */
  
  /* ===== GRAYS (12-Step Scale) ===== */
  --gray-1: #FAFAFA;    /* Subtle backgrounds */
  --gray-2: #F5F5F5;    /* Hover states */
  --gray-3: #E5E5E5;    /* Borders */
  --gray-4: #D4D4D4;    /* Strong borders */
  --gray-5: #A3A3A3;    /* Placeholder, Disabled */
  --gray-6: #737373;    /* Tertiary text */
  --gray-7: #525252;    /* Secondary text */
  --gray-8: #404040;    /* Body text alternative */
  --gray-9: #262626;    /* Headings */
  --gray-10: #171717;   /* High emphasis */
  --gray-11: #0A0A0A;   /* Almost black */
  --gray-12: #000000;   /* Pure black */
  
  /* ===== SEMANTIC COLORS ===== */
  --success: #10B981;   /* Green - Success, Online */
  --success-light: #D1FAE5;
  --success-dark: #059669;
  
  --danger: #EF4444;    /* Red - Errors */
  --danger-light: #FEE2E2;
  --danger-dark: #DC2626;
  
  --warning: #F59E0B;   /* Orange - Warnings */
  --info: #3B82F6;      /* Blue - Info */
  
  /* ===== BRAND ACCENT (Purple/Pink Gradient) ===== */
  --accent-purple: #8B5CF6;
  --accent-purple-light: #EDE9FE;
  --accent-purple-dark: #7C3AED;
  
  --accent-pink: #EC4899;
  --accent-pink-light: #FCE7F3;
  --accent-pink-dark: #DB2777;
  
  /* ===== APPLIED TOKENS ===== */
  --rn-bg: #FFFFFF;
  --rn-surface: #FFFFFF;
  --rn-surface-hover: #F5F5F5;
  --rn-surface-accent: #FAFAFA;
  
  --rn-text: #000000;
  --rn-text-secondary: #404040;
  --rn-text-tertiary: #737373;
  
  --rn-border: #E5E5E5;
  --rn-border-strong: #D4D4D4;
  
  /* ===== SHADOWS (Multi-layer Premium System) ===== */
  --shadow-float: 
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.10);
  
  --shadow-float-hover:
    0 4px 16px rgba(0, 0, 0, 0.12),
    0 12px 32px rgba(0, 0, 0, 0.15);
  
  --shadow-widget:
    0 8px 32px rgba(0, 0, 0, 0.10),
    0 24px 64px rgba(0, 0, 0, 0.12),
    0 48px 96px rgba(0, 0, 0, 0.14);
  
  /* ===== SPACING (8px Grid System) ===== */
  --rn-space-1: 4px;
  --rn-space-2: 8px;
  --rn-space-3: 12px;
  --rn-space-4: 16px;
  --rn-space-5: 20px;
  --rn-space-6: 24px;
  --rn-space-8: 32px;
  
  /* ===== TYPOGRAPHY ===== */
  --font-size-xs: 11px;
  --font-size-sm: 13px;
  --font-size-base: 15px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  
  --letter-spacing-tighter: -0.02em;
  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  
  /* ===== BORDER RADIUS ===== */
  --rn-radius-full: 9999px;
  --rn-radius-2xl: 16px;
  --rn-radius-xl: 12px;
  --rn-radius-lg: 8px;
  --rn-radius-md: 6px;
  --rn-radius-sm: 4px;
  
  /* ===== TRANSITIONS ===== */
  --rn-transition-fast: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --rn-transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### **Gradient Formulas**

```css
/* AI Avatar Fallback Gradient */
background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);

/* Product Button Gradient */
background: linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%);

/* Product Button Hover */
background: linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%);
```

---

## 2️⃣ CHAT WINDOW CONTAINER

### **Dimensions & Positioning**

```css
#replainow-chat-window {
  position: fixed;
  bottom: 90px;
  right: 24px;
  width: 450px;
  height: 680px;
  max-height: calc(100vh - 120px);
  z-index: 1100;
  
  /* Styling */
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.10),
    0 24px 64px rgba(0, 0, 0, 0.12),
    0 48px 96px rgba(0, 0, 0, 0.14);
  
  /* Structure */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
```

### **Mobile Responsive**

```css
@media (max-width: 480px) {
  #replainow-chat-window {
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100dvh;  /* Dynamic viewport height */
    max-height: none;
    border-radius: 0;  /* Full-screen on mobile */
  }
}
```

---

## 3️⃣ CHAT HEADER

### **Complete Header CSS**

```css
.chat-header {
  background: #FAFAFA;  /* ✅ Same as chat body! */
  color: #000000;
  padding: 16px;
  padding-top: calc(16px + env(safe-area-inset-top));
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  min-height: 64px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px 16px 0 0;
}
```

### **Header Avatar (AI/Agent)**

```css
.chat-header img,
.chat-header .chat-avatar-fallback,
.chat-header .chat-avatar-ai-fallback {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;  /* ✅ Fully round! */
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  box-shadow: 
    0 2px 8px rgba(139, 92, 246, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.2) inset;
  border: 2px solid rgba(255, 255, 255, 0.9);
  flex-shrink: 0;
}

/* AI Avatar Fallback - Gradient with Bot Icon */
.chat-avatar-ai-fallback {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
```

### **Header Title & Subtitle**

```css
.chat-title {
  flex: 1;
  min-width: 0;
}

.chat-title-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chat-title-text {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  letter-spacing: -0.01em;
}

.chat-title-subtitle {
  font-size: 12px;  /* ✅ 12px as requested */
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.2;
  color: #525252;
  margin: 0;
  font-style: normal;  /* ✅ Not italic */
  letter-spacing: 0;  /* ✅ No letter spacing */
}
```

### **Online Status Indicator (6px Dot with Pulse)**

```css
.online-status-dot {
  width: 6px;
  height: 6px;
  background: #10b981;  /* Emerald-500 */
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 4px rgba(16, 185, 129, 0.6);
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
  }
}
```

### **Header HTML Structure**

```html
<div class="chat-header">
  <!-- AI Avatar (with Fallback) -->
  <div class="chat-avatar-ai-fallback">
    <!-- Lucide Bot Icon (20x20px, white) -->
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 8V4H8"/>
      <rect width="16" height="12" x="4" y="8" rx="2"/>
      <path d="M2 14h2"/>
      <path d="M20 14h2"/>
      <path d="M15 13v2"/>
      <path d="M9 13v2"/>
    </svg>
  </div>
  
  <!-- Title & Status -->
  <div class="chat-title">
    <div class="chat-title-info">
      <span class="chat-title-text">AI Assistant</span>
      <div class="chat-title-subtitle">
        <span class="online-status-dot"></span>
        <span>Online</span>
        <span style="opacity: 0.5;"> · </span>
        <span>Antwortet in wenigen Sekunden</span>
      </div>
    </div>
  </div>
  
  <!-- Close Button -->
  <button class="chat-close-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>
```

---

## 4️⃣ CHAT MESSAGES

### **Chat Body Container**

```css
.chat-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: #FAFAFA;  /* ✅ Light gray background */
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

#chat-messages {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 100%;
}
```

### **User Message**

```css
.chat-message {
  padding: 13px 16px;
  border-radius: 16px;
  max-width: 85%;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0;
  animation: messageSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-message.user {
  background: #D1D5DB;  /* ✅ Gray - Original! */
  color: #000000;
  border: none;
  align-self: flex-end;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

.chat-message.user:hover {
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 4px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}
```

### **AI Message**

```css
.chat-message.bot {
  background: #FFFFFF;  /* ✅ Pure white */
  color: #000000;
  border: none;
  align-self: flex-start;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.06);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-message.bot:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.08),
    0 6px 20px rgba(0, 0, 0, 0.06),
    0 2px 0 rgba(255, 255, 255, 1) inset;
}
```

### **Agent Message**

```css
.chat-message.agent {
  background: #FFFFFF;
  color: #000000;
  align-self: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
}

.chat-message.agent:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.12),
    0 1px 0 rgba(255, 255, 255, 1) inset;
}
```

### **Typing Indicator**

```css
.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 16px;
  background: #FFFFFF;
  border-radius: 16px;
  align-self: flex-start;
  max-width: 80px;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

.typing-dot {
  width: 8px;
  height: 8px;
  background: #A3A3A3;
  border-radius: 50%;
  animation: typingBounce 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(1) {
  animation-delay: 0s;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typingBounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}
```

---

## 5️⃣ PRODUCT CARDS

### **Complete Product Card CSS**

```css
.chat-product-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 8px 24px rgba(0, 0, 0, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 280px;
  align-self: flex-start;
  margin: 12px 0;
}

.chat-product-card:hover {
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.06),
    0 2px 0 rgba(255, 255, 255, 1) inset;
  /* GSAP handles transform: translateY(-8px) scale(1.02) */
}

.chat-product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #FAFAFA;
  display: block;
}

.chat-product-main {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #FFFFFF;
}

.chat-product-name {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 0;
  line-height: 1.375;
  
  /* Truncate after 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.chat-product-price {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 4px 0 0 0;
}

.chat-product-desc {
  font-size: 13px;
  font-weight: 400;
  color: #404040;
  line-height: 1.625;
  margin: 4px 0 0 0;
  opacity: 0.9;
  
  /* Truncate after 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### **Product Button (Separate Bubble)**

```css
.chat-product-cta-bubble {
  display: flex;
  align-self: flex-start;
  margin: 4px 0 12px 0;
  max-width: 280px;
  width: 100%;
}

.chat-product-btn {
  width: 100%;
  padding: 16px 20px;
  background: linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: 0;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.1) inset;
}

.chat-product-btn:hover {
  background: linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%);
  transform: translateY(-2px) scale(1.01);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.20),
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 0 rgba(255, 255, 255, 0.15) inset;
}

.chat-product-btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 
    0 1px 4px rgba(0, 0, 0, 0.12),
    0 1px 0 rgba(255, 255, 255, 0.08) inset;
}
```

### **Product Card HTML Structure**

```html
<div class="chat-product-card">
  <!-- Product Image -->
  <img 
    class="chat-product-image" 
    src="[PRODUCT_IMAGE_URL]" 
    alt="[PRODUCT_NAME]"
  />
  
  <!-- Product Info -->
  <div class="chat-product-main">
    <div class="chat-product-name">[PRODUCT_NAME]</div>
    <span class="chat-product-price">€89.99</span>
    <div class="chat-product-desc">[PRODUCT_DESCRIPTION]</div>
  </div>
</div>

<!-- Button as Separate Bubble -->
<div class="chat-product-cta-bubble">
  <a class="chat-product-btn" href="[PRODUCT_URL]" target="_blank">
    Zum Produkt
  </a>
</div>
```

---

## 6️⃣ DISCOUNT CARDS

### **Complete Discount Card Structure**

**Inline Styles (from JavaScript):**

```css
/* Container */
max-width: 384px;
background: #FFFFFF;
border: none;
border-radius: 16px;
padding: 16px;
box-shadow: 
  0 1px 2px rgba(0, 0, 0, 0.04),
  0 2px 4px rgba(0, 0, 0, 0.04),
  0 4px 8px rgba(0, 0, 0, 0.04),
  0 8px 16px rgba(0, 0, 0, 0.04);
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
margin-bottom: 16px;

/* Hover */
box-shadow: 
  0 2px 4px rgba(0, 0, 0, 0.06),
  0 4px 8px rgba(0, 0, 0, 0.06),
  0 8px 16px rgba(0, 0, 0, 0.06),
  0 16px 32px rgba(0, 0, 0, 0.08);
```

### **Discount Card HTML**

```html
<div class="discount-card">
  <!-- Header -->
  <div class="discount-header">
    <!-- Icon Container (Green) -->
    <div class="discount-icon">
      <!-- Lucide Ticket Icon -->
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
        <path d="M13 5v2"/>
        <path d="M13 17v2"/>
        <path d="M13 11v2"/>
      </svg>
    </div>
    
    <!-- Title & Subtitle -->
    <div class="discount-header-text">
      <p class="discount-title">Discount Code</p>
      <p class="discount-subtitle">10% OFF</p>
    </div>
  </div>
  
  <!-- Code Section -->
  <div class="discount-code-section">
    <code class="discount-code">SAVE10</code>
    
    <!-- Copy Button -->
    <button class="discount-copy-btn">
      <!-- Lucide Copy Icon -->
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
    </button>
  </div>
  
  <!-- Details (Optional) -->
  <div class="discount-details">
    <!-- Expiry -->
    <div class="discount-expiry">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      <span>Valid until 31.12.2025</span>
    </div>
    
    <!-- Usage Limit (Optional) -->
    <div class="discount-usage">
      <span>Limited to 100 uses</span>
    </div>
  </div>
</div>
```

### **Discount Card CSS (Inline from JS)**

```css
/* Icon Container */
.discount-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ECFDF5;  /* Light green */
  border-radius: 12px;
}

/* Header Text */
.discount-title {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.discount-subtitle {
  font-size: 11px;
  font-weight: 600;
  color: #10B981;  /* Green */
  margin: 0;
}

/* Code Section */
.discount-code-section {
  background: #FAFAFA;
  border: none;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.discount-code {
  flex: 1;
  font-family: monospace;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  letter-spacing: 0.05em;
  user-select: all;
}

/* Copy Button */
.discount-copy-btn {
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms;
}

.discount-copy-btn:hover {
  background: #F5F5F5;
}
```

---

## 7️⃣ CHECKOUT CARDS

### **Checkout Card HTML**

```html
<div class="checkout-card">
  <!-- Header -->
  <div class="checkout-header">
    <!-- Shopping Cart Icon -->
    <div class="checkout-icon">🛒</div>
    
    <div class="checkout-header-text">
      <p class="checkout-title">Ready to Checkout</p>
      <p class="checkout-subtitle">3 items</p>
    </div>
  </div>
  
  <!-- Products Preview -->
  <div class="checkout-products">
    <div class="checkout-product-line">
      <span class="product-name">2× Urban Sneaker Black</span>
      <span class="product-price">€179.98</span>
    </div>
    <div class="checkout-product-line">
      <span class="product-name">1× Hoodie Gray</span>
      <span class="product-price">€49.99</span>
    </div>
    
    <!-- More items indicator -->
    <p class="checkout-more-items">+2 more items</p>
    
    <!-- Discount Applied (if any) -->
    <div class="checkout-discount">
      <span class="discount-label">Discount Applied</span>
      <span class="discount-value">-10%</span>
    </div>
  </div>
  
  <!-- Total -->
  <div class="checkout-total">
    <span class="total-label">Total</span>
    <span class="total-price">€ 229.97</span>
  </div>
  
  <!-- CTA Button -->
  <a class="checkout-btn" href="[CHECKOUT_URL]" target="_blank">
    <span>🛒</span>
    <span>Complete Purchase</span>
    <span>→</span>
  </a>
  
  <!-- Trust Signals -->
  <div class="checkout-trust">
    <span>🔒 Secure Checkout</span>
    <span>·</span>
    <span>No Account Required</span>
  </div>
</div>
```

### **Checkout Card CSS (Inline from JS)**

```css
/* Container */
max-width: 448px;
background: #FFFFFF;
border: none;
border-radius: 16px;
padding: 16px;
box-shadow: 
  0 1px 2px rgba(0, 0, 0, 0.04),
  0 2px 4px rgba(0, 0, 0, 0.04),
  0 4px 8px rgba(0, 0, 0, 0.04),
  0 8px 16px rgba(0, 0, 0, 0.04);

/* Icon */
.checkout-icon {
  width: 36px;
  height: 36px;
  background: #FAFAFA;
  border-radius: 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Title */
.checkout-title {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.checkout-subtitle {
  font-size: 11px;
  color: #525252;
  margin: 0;
}

/* Products Preview */
.checkout-products {
  background: #FAFAFA;
  border: none;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.checkout-product-line {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.product-name {
  flex: 1;
  font-size: 13px;
  color: #000000;
}

.product-price {
  font-size: 13px;
  font-weight: 600;
  color: #525252;
  white-space: nowrap;
}

/* Total */
.checkout-total {
  display: flex;
  justify-content: space-between;
  padding: 8px 0 16px 0;
  border-top: 1px solid #E5E5E5;
  margin-bottom: 16px;
}

.total-label {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
}

.total-price {
  font-size: 18px;
  font-weight: 600;
  color: #000000;
}

/* CTA Button */
.checkout-btn {
  width: 100%;
  padding: 16px 24px;
  background: #17191a;  /* Dark, not blue! */
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 200ms;
}

.checkout-btn:hover {
  background: #2D2D2D;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20);
}
```

---

## 8️⃣ CHAT INPUT FIELD

### **Complete Input CSS**

```css
.chat-input {
  display: flex;
  gap: 10px;
  padding: 16px;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  align-items: flex-end;
  flex-shrink: 0;
}

.chat-input textarea {
  flex: 1;
  font-size: 15px;
  line-height: 1.5;
  padding: 13px 18px;
  background: #F8F9FB;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;  /* ✅ Pill shape */
  outline: none;
  color: #000000;
  min-height: 56px;
  max-height: 140px;
  resize: none;
  overflow-y: auto;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', -apple-system, sans-serif;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
}

.chat-input textarea::placeholder {
  color: #A3A3A3;
  font-weight: 400;
}

.chat-input textarea:hover {
  background: #F5F6F8;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.06),
    0 1px 0 rgba(255, 255, 255, 1) inset;
}

.chat-input textarea:focus {
  background: #FFFFFF;
  border-color: #000000;
  box-shadow: 
    0 0 0 3px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.06);
}
```

### **Send Button**

```css
.chat-input button#send-button {
  min-width: 56px;
  min-height: 56px;
  background: linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%);
  border: none;
  border-radius: 50%;  /* Perfect circle */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.10),
    0 1px 0 rgba(255, 255, 255, 0.1) inset;
  color: white;
  font-size: 20px;
  position: relative;
  overflow: hidden;
}

.chat-input button#send-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%);
  transform: scale(1.08);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.20),
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 0 rgba(255, 255, 255, 0.15) inset;
}

.chat-input button#send-button:disabled {
  background: linear-gradient(135deg, #F0F0F0 0%, #E5E5E5 100%);
  color: #A3A3A3;
  cursor: not-allowed;
  opacity: 1;
}
```

### **Input HTML Structure**

```html
<div class="chat-input">
  <textarea 
    placeholder="Schreibe eine Nachricht..."
    rows="1"
  ></textarea>
  
  <button id="send-button" aria-label="Send message">
    <!-- Send Icon (Arrow Up) -->
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
  </button>
</div>
```

---

## 9️⃣ ANIMATIONS

### **Message Entrance Animation**

```css
@keyframes messageSlideUp {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chat-message {
  animation: messageSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### **Product Card GSAP Animation (JavaScript)**

```javascript
// Entrance Animation
gsap.from(card, {
  opacity: 0,
  y: 30,
  scale: 0.95,
  duration: 0.5,
  ease: 'power2.out'
});

// Image Zoom
gsap.from(img, {
  opacity: 0,
  scale: 0.9,
  duration: 0.4,
  ease: 'back.out(1.4)'
});

// Content Stagger
gsap.from('.chat-product-name, .chat-product-price, .chat-product-desc', {
  opacity: 0,
  x: -10,
  duration: 0.3,
  stagger: 0.1,
  ease: 'power2.out'
});

// Button Pop
gsap.from(btnBubble, {
  opacity: 0,
  scale: 0.8,
  duration: 0.3,
  ease: 'back.out(1.7)'
});
```

### **Hover Animations (GSAP)**

```javascript
// Product Card Hover (3D Lift + Image Zoom)
card.addEventListener('mouseenter', function() {
  gsap.to(card, {
    y: -8,
    scale: 1.02,
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
    duration: 0.4,
    ease: 'power2.out'
  });
  
  const img = card.querySelector('.chat-product-image');
  if (img) {
    gsap.to(img, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out'
    });
  }
});

card.addEventListener('mouseleave', function() {
  gsap.to(card, {
    y: 0,
    scale: 1,
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    duration: 0.3,
    ease: 'power2.inOut'
  });
  
  const img = card.querySelector('.chat-product-image');
  if (img) {
    gsap.to(img, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  }
});
```

### **Pulse Animation (Online Dot)**

```css
@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 4px rgba(16, 185, 129, 0.6);
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
  }
}

.online-status-dot {
  animation: pulse-dot 2s ease-in-out infinite;
}
```

---

## 🔟 REACT COMPONENTS

### **ChatWindow.tsx**

```tsx
import React from 'react';

interface ChatWindowProps {
  children: React.ReactNode;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ children }) => {
  return (
    <div className="chat-widget">
      {children}
    </div>
  );
};
```

### **ChatHeader.tsx**

```tsx
import React from 'react';
import { Bot } from 'lucide-react';

interface ChatHeaderProps {
  name: string;
  signature?: string | null;
  avatarUrl?: string | null;
  isOnline?: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  name, 
  signature, 
  avatarUrl,
  isOnline = true 
}) => {
  return (
    <div className="chat-header">
      {/* Avatar */}
      {avatarUrl ? (
        <img 
          className="chat-avatar" 
          src={avatarUrl} 
          alt={name}
          width={40}
          height={40}
        />
      ) : (
        <div className="chat-avatar-ai-fallback">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      
      {/* Title & Status */}
      <div className="chat-title">
        <div className="chat-title-info">
          <span className="chat-title-text">{name}</span>
          <div className="chat-title-subtitle">
            {isOnline && (
              <>
                <span className="online-status-dot" />
                <span>Online</span>
              </>
            )}
            {signature && (
              <>
                <span style={{ opacity: 0.5 }}> · </span>
                <span>{signature}</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Close Button */}
      <button className="chat-close-btn" aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  );
};
```

### **ChatMessage.tsx**

```tsx
import React from 'react';

interface ChatMessageProps {
  type: 'user' | 'ai' | 'agent';
  text: string;
  timestamp?: string;
  children?: React.ReactNode;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ 
  type, 
  text, 
  timestamp,
  children 
}) => {
  const className = `chat-message ${
    type === 'user' ? 'user' : 
    type === 'ai' ? 'bot' : 
    'agent'
  }`;
  
  return (
    <>
      <div className={className}>
        {text}
      </div>
      {children}
    </>
  );
};
```

### **ProductCard.tsx**

```tsx
import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  description?: string;
  imageUrl?: string;
  productUrl: string;
  buttonText?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  price, 
  description, 
  imageUrl, 
  productUrl,
  buttonText = 'Zum Produkt'
}) => {
  return (
    <>
      <div className="chat-product-card">
        {imageUrl && (
          <img 
            className="chat-product-image" 
            src={imageUrl} 
            alt={title}
          />
        )}
        
        <div className="chat-product-main">
          <div className="chat-product-name">{title}</div>
          <span className="chat-product-price">{price}</span>
          {description && (
            <div className="chat-product-desc">{description}</div>
          )}
        </div>
      </div>
      
      <div className="chat-product-cta-bubble">
        <a 
          className="chat-product-btn" 
          href={productUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </>
  );
};
```

### **DiscountCard.tsx**

```tsx
import React, { useState } from 'react';
import { Ticket, Copy, Check, Clock } from 'lucide-react';

interface DiscountCardProps {
  code: string;
  type: 'percentage' | 'fixed' | 'free_shipping';
  value: string | number;
  expiresAt?: string;
  usageLimit?: number;
}

export const DiscountCard: React.FC<DiscountCardProps> = ({ 
  code, 
  type, 
  value, 
  expiresAt,
  usageLimit
}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const discountLabel = type === 'percentage' 
    ? `${value}% OFF` 
    : type === 'free_shipping' 
    ? 'Free Shipping' 
    : `€${value} OFF`;
  
  return (
    <div className="discount-card">
      {/* Header */}
      <div className="discount-header">
        <div className="discount-icon">
          <Ticket className="w-5 h-5 text-emerald-500" />
        </div>
        <div className="discount-header-text">
          <p className="discount-title">Discount Code</p>
          <p className="discount-subtitle">{discountLabel}</p>
        </div>
      </div>
      
      {/* Code Section */}
      <div className="discount-code-section">
        <code className="discount-code">{code}</code>
        <button className="discount-copy-btn" onClick={handleCopy}>
          {copied ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
      
      {/* Details */}
      {expiresAt && (
        <div className="discount-details">
          <div className="discount-expiry">
            <Clock className="w-3.5 h-3.5" />
            <span>Valid until {new Date(expiresAt).toLocaleDateString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};
```

### **CheckoutCard.tsx**

```tsx
import React from 'react';

interface CheckoutProduct {
  title: string;
  quantity: number;
  price: string;
}

interface CheckoutCardProps {
  products: CheckoutProduct[];
  totalPrice: string;
  currency?: string;
  checkoutUrl: string;
  discount?: {
    type: 'PERCENTAGE' | 'FIXED';
    value: string;
  };
}

export const CheckoutCard: React.FC<CheckoutCardProps> = ({ 
  products, 
  totalPrice, 
  currency = '€',
  checkoutUrl,
  discount
}) => {
  const displayProducts = products.slice(0, 3);
  const remaining = products.length - 3;
  
  return (
    <div className="checkout-card">
      {/* Header */}
      <div className="checkout-header">
        <div className="checkout-icon">🛒</div>
        <div className="checkout-header-text">
          <p className="checkout-title">Ready to Checkout</p>
          <p className="checkout-subtitle">
            {products.length} {products.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>
      
      {/* Products Preview */}
      <div className="checkout-products">
        {displayProducts.map((product, i) => (
          <div key={i} className="checkout-product-line">
            <span className="product-name">
              {product.quantity}× {product.title}
            </span>
            <span className="product-price">{product.price}</span>
          </div>
        ))}
        
        {remaining > 0 && (
          <p className="checkout-more-items">
            +{remaining} more {remaining === 1 ? 'item' : 'items'}
          </p>
        )}
        
        {/* Discount */}
        {discount && (
          <div className="checkout-discount">
            <span className="discount-label">Discount Applied</span>
            <span className="discount-value">
              -{discount.type === 'PERCENTAGE' ? `${discount.value}%` : `${currency}${discount.value}`}
            </span>
          </div>
        )}
      </div>
      
      {/* Total */}
      <div className="checkout-total">
        <span className="total-label">Total</span>
        <span className="total-price">{currency} {totalPrice}</span>
      </div>
      
      {/* CTA Button */}
      <a className="checkout-btn" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        <span>🛒</span>
        <span>Complete Purchase</span>
        <span>→</span>
      </a>
      
      {/* Trust Signals */}
      <div className="checkout-trust">
        <span>🔒 Secure Checkout</span>
        <span> · </span>
        <span>No Account Required</span>
      </div>
    </div>
  );
};
```

### **ChatInput.tsx**

```tsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  onSend,
  placeholder = 'Schreibe eine Nachricht...'
}) => {
  const [message, setMessage] = useState('');
  
  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="chat-input">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
      />
      
      <button 
        id="send-button" 
        onClick={handleSend}
        disabled={!message.trim()}
        aria-label="Send message"
      >
        <Send className="w-5.5 h-5.5" />
      </button>
    </div>
  );
};
```

---

## 1️⃣1️⃣ EXAMPLE USAGE

### **Complete Chat Example**

```tsx
import { ChatWindow, ChatHeader, ChatMessage, ProductCard, DiscountCard, CheckoutCard, ChatInput } from './components';

function ChatDemo() {
  return (
    <ChatWindow>
      {/* Header */}
      <ChatHeader
        name="AI Assistant"
        signature="Antwortet in wenigen Sekunden"
        isOnline={true}
      />
      
      {/* Chat Body */}
      <div className="chat-body">
        <div id="chat-messages">
          {/* User Message */}
          <ChatMessage type="user" text="Ich suche schwarze Sneaker" />
          
          {/* AI Response with Product */}
          <ChatMessage type="ai" text="Hier sind unsere beliebtesten schwarzen Sneaker:">
            <ProductCard
              title="Urban Sneaker Black Edition"
              price="€89.99"
              description="Premium leather sneaker with ultra-comfortable sole. Perfect for everyday wear."
              imageUrl="https://example.com/sneaker.jpg"
              productUrl="https://shop.com/products/urban-sneaker-black"
              buttonText="Zum Produkt"
            />
          </ChatMessage>
          
          {/* Discount Code */}
          <ChatMessage type="ai" text="Hier ist ein exklusiver Rabattcode für dich:">
            <DiscountCard
              code="SAVE10"
              type="percentage"
              value={10}
              expiresAt="2025-12-31"
            />
          </ChatMessage>
          
          {/* Checkout Card */}
          <ChatMessage type="ai" text="Dein Warenkorb ist bereit:">
            <CheckoutCard
              products={[
                { title: 'Urban Sneaker Black', quantity: 1, price: '€89.99' },
                { title: 'Sport Socks White', quantity: 2, price: '€19.98' }
              ]}
              totalPrice="98.97"
              currency="€"
              checkoutUrl="https://shop.com/checkout"
              discount={{ type: 'PERCENTAGE', value: '10' }}
            />
          </ChatMessage>
        </div>
      </div>
      
      {/* Input */}
      <ChatInput 
        onSend={(msg) => console.log('Sent:', msg)}
        placeholder="Schreibe eine Nachricht..."
      />
    </ChatWindow>
  );
}
```

---

## 🏪 AGENT PRODUCT CARDS (Dashboard System)

**NOTE**: Es gibt 2 Product Card Systeme:
1. `.chat-product-card` - AI Worker Recommendations (focus_chunks)
2. `.agent-product-card-widget` - Dashboard Manual Cards (metadata)

### **Agent Product Card Structure**

**Unterschiede zum AI System:**
- Horizontal Layout (Image links, Info rechts)
- Kleineres Image (120x120px statt full-width)
- Kompakteres Design
- Gleiche Shadowsstyle

```css
.agent-product-card-widget {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.04);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 360px;
  margin: 16px 0;
}

.agent-product-card-widget:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.06),
    0 8px 16px rgba(0, 0, 0, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.08);
  background: #FFFFFF;
}

/* Product Header - Image + Info side by side */
.agent-product-card-header {
  display: flex;
  gap: 16px;
  padding: 16px;
}

.agent-product-image {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.04);
}

.agent-product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.agent-product-title {
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 8px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.agent-product-price {
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

/* Agent Product Button */
.agent-product-btn {
  width: 100%;
  padding: 14px 20px;
  background: #17191a;
  color: #FFFFFF;
  border: none;
  border-radius: 0 0 16px 16px;  /* Only bottom corners */
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 200ms;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.05) inset;
}

.agent-product-btn:hover {
  background: #2D2D2D;
}
```

### **Agent Product Card HTML**

```html
<div class="agent-product-card-widget">
  <!-- Header: Image + Info -->
  <div class="agent-product-card-header">
    <!-- Product Image -->
    <img 
      class="agent-product-image"
      src="[PRODUCT_IMAGE]"
      alt="[PRODUCT_TITLE]"
    />
    
    <!-- Product Info -->
    <div class="agent-product-info">
      <h4 class="agent-product-title">[PRODUCT_TITLE]</h4>
      <p class="agent-product-description">[DESCRIPTION]</p>
      <p class="agent-product-price">$89.99</p>
    </div>
  </div>
  
  <!-- Button -->
  <a class="agent-product-btn" href="[PRODUCT_URL]" target="_blank">
    View Product
  </a>
</div>
```

---

## 🚚 TRACKING CARDS (Order Status)

**NOTE**: Tracking Cards werden als HTML vom Worker gesendet - 2 Formate werden unterstützt!

### **NEW Tracking Card Format (Worker v2.0)**

```html
<div class="tracking-card" style="
  max-width: 400px;
  background: #FFFFFF;
  border: none;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.04);
  margin-bottom: 16px;
">
  <!-- Header -->
  <div class="header" style="
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  ">
    <!-- Truck Icon (SVG) -->
    <div class="icon-container" style="
      width: 40px;
      height: 40px;
      background: #F3F4F6;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg class="truck-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="2">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    </div>
    
    <!-- Header Text -->
    <div class="header-text" style="flex: 1;">
      <div class="header-title" style="
        font-size: 14px;
        font-weight: 600;
        color: #000000;
        margin: 0;
      ">Package Tracking</div>
      <div class="header-subtitle" style="
        font-size: 11px;
        color: #525252;
        margin: 0;
      ">Order #12847</div>
    </div>
  </div>
  
  <!-- Tracking Info -->
  <div class="tracking-info" style="
    background: #FAFAFA;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 16px;
  ">
    <div class="info-row" style="
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    ">
      <span class="info-label" style="
        font-size: 12px;
        color: #737373;
      ">Carrier</span>
      <span class="info-value" style="
        font-size: 12px;
        font-weight: 600;
        color: #000000;
      ">DHL Express</span>
    </div>
    <div class="info-row" style="
      display: flex;
      justify-content: space-between;
    ">
      <span class="info-label" style="
        font-size: 12px;
        color: #737373;
      ">Tracking number</span>
      <span class="info-value" style="
        font-size: 12px;
        font-weight: 600;
        color: #000000;
        font-family: monospace;
      ">JJD012345678901</span>
    </div>
  </div>
  
  <!-- CTA Button -->
  <a class="cta-button" href="[TRACKING_URL]" target="_blank" style="
    width: 100%;
    padding: 12px 20px;
    background: #F3F4F6;
    color: #000000;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 200ms;
  ">
    Track shipment
    <span>→</span>
  </a>
</div>
```

### **Tracking Card Hover States (Inline JavaScript)**

```javascript
// Card Hover
card.addEventListener('mouseenter', () => {
  card.style.boxShadow = `
    0 2px 4px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.06),
    0 8px 16px rgba(0, 0, 0, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.08)
  `;
  card.style.transform = 'translateY(-2px)';
});

card.addEventListener('mouseleave', () => {
  card.style.boxShadow = `
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.04)
  `;
  card.style.transform = 'translateY(0)';
});

// Button Hover
button.addEventListener('mouseenter', () => {
  button.style.background = '#E5E7EB';
});

button.addEventListener('mouseleave', () => {
  button.style.background = '#F3F4F6';
});
```

---

## 💬 SYSTEM MESSAGES

### **System Message CSS**

```css
.chat-system-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  margin: 6px auto;
  background: rgba(0, 0, 0, 0.03);  /* ✅ Almost transparent */
  border: none;
  border-radius: 12px;
  font-size: 12px;  /* ✅ Small & subtle */
  font-weight: 500;
  color: #525252;
  box-shadow: none;
  max-width: 240px;
}

/* Agent Joined/Left Messages */
.chat-system-message.agent-takeover {
  animation: slideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### **System Message Examples**

```html
<!-- Agent Joined -->
<div class="chat-system-message agent-takeover">
  <span class="takeover-icon">👤</span>
  <span class="takeover-text">Emilia has joined the conversation</span>
</div>

<!-- Agent Left -->
<div class="chat-system-message">
  <span>👤 Agent has left the conversation</span>
</div>

<!-- AI Takeover -->
<div class="chat-system-message">
  <span>🤖 AI is now handling this conversation</span>
</div>
```

---

## 📦 DEPENDENCIES

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "lucide-react": "^0.552.0",
    "gsap": "^3.12.5"
  }
}
```

---

## 🎨 COMPLETE CSS FILE

```css
/* Import Inter Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* CSS Variables (see Section 1) */
:root {
  /* All variables from above */
}

/* ===== CHAT WINDOW ===== */
.chat-widget,
#replainow-chat-window {
  position: fixed;
  bottom: 90px;
  right: 24px;
  width: 450px;
  height: 680px;
  max-height: calc(100vh - 120px);
  z-index: 1100;
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: var(--shadow-widget);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ===== CHAT HEADER ===== */
.chat-header {
  background: #FAFAFA;
  color: #000000;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.chat-avatar-ai-fallback {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 2px 8px rgba(139, 92, 246, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.2) inset;
  border: 2px solid rgba(255, 255, 255, 0.9);
}

.chat-title-text {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
}

.chat-title-subtitle {
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #525252;
  font-style: normal;
  letter-spacing: 0;
}

.online-status-dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 4px rgba(16, 185, 129, 0.6); }
  50% { opacity: 0.6; box-shadow: 0 0 8px rgba(16, 185, 129, 0.8); }
}

/* ===== CHAT BODY ===== */
.chat-body {
  flex: 1;
  overflow-y: auto;
  background: #FAFAFA;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
}

#chat-messages {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ===== MESSAGES ===== */
.chat-message {
  padding: 13px 16px;
  border-radius: 16px;
  max-width: 85%;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0;
  animation: messageSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes messageSlideUp {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chat-message.user {
  background: #D1D5DB;
  color: #000000;
  align-self: flex-end;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

.chat-message.bot,
.chat-message.agent {
  background: #FFFFFF;
  color: #000000;
  align-self: flex-start;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

/* ===== TYPING INDICATOR ===== */
.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 16px;
  background: #FFFFFF;
  border-radius: 16px;
  align-self: flex-start;
  max-width: 80px;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

.typing-dot {
  width: 8px;
  height: 8px;
  background: #A3A3A3;
  border-radius: 50%;
  animation: typingBounce 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typingBounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.7; }
  30% { transform: translateY(-8px); opacity: 1; }
}

/* ===== PRODUCT CARDS ===== */
.chat-product-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 8px 24px rgba(0, 0, 0, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 280px;
  margin: 12px 0;
}

.chat-product-card:hover {
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.06);
}

.chat-product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #FAFAFA;
}

.chat-product-main {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chat-product-name {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  line-height: 1.375;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.chat-product-price {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
}

.chat-product-desc {
  font-size: 13px;
  color: #404040;
  line-height: 1.625;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.chat-product-btn {
  width: 100%;
  padding: 16px 20px;
  background: linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.1) inset;
  transition: all 0.3s;
}

.chat-product-btn:hover {
  background: linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%);
  transform: translateY(-2px) scale(1.01);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.20),
    0 8px 32px rgba(0, 0, 0, 0.12);
}

/* ===== CHAT INPUT ===== */
.chat-input {
  display: flex;
  gap: 10px;
  padding: 16px;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.chat-input textarea {
  flex: 1;
  font-size: 15px;
  padding: 13px 18px;
  background: #F8F9FB;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  outline: none;
  min-height: 56px;
  max-height: 140px;
  resize: none;
  font-family: inherit;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
}

.chat-input textarea::placeholder {
  color: #A3A3A3;
}

.chat-input textarea:focus {
  background: #FFFFFF;
  border-color: #000000;
  box-shadow: 
    0 0 0 3px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.06);
}

.chat-input button#send-button {
  min-width: 56px;
  min-height: 56px;
  background: linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.10);
}

.chat-input button#send-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%);
  transform: scale(1.08);
}

.chat-input button#send-button:disabled {
  background: linear-gradient(135deg, #F0F0F0 0%, #E5E5E5 100%);
  color: #A3A3A3;
  cursor: not-allowed;
}

/* ===== MOBILE RESPONSIVE ===== */
@media (max-width: 480px) {
  .chat-widget {
    width: 100%;
    height: 100dvh;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    border-radius: 0;
  }
}
```

---

## 📊 EXAMPLE DATA

### **User Messages**

```typescript
const userMessages = [
  { type: 'user', text: 'Wo ist meine Bestellung #4782?' },
  { type: 'user', text: 'Ich suche schwarze Sneaker in Größe 42' },
  { type: 'user', text: 'Habt ihr einen Rabattcode?' }
];
```

### **AI Messages with Products**

```typescript
const aiMessagesWithProducts = [
  {
    type: 'ai',
    text: 'Hier sind unsere Top-Empfehlungen:',
    products: [
      {
        title: 'Urban Sneaker Black Edition',
        price: '€89.99',
        description: 'Premium leather sneaker with ultra-comfortable sole.',
        imageUrl: 'https://example.com/sneaker-black.jpg',
        productUrl: 'https://shop.com/products/urban-sneaker-black'
      }
    ]
  }
];
```

### **Discount Data**

```typescript
const discountExample = {
  code: 'SAVE10',
  type: 'percentage',
  value: 10,
  expiresAt: '2025-12-31',
  usageLimit: 100
};
```

### **Checkout Data**

```typescript
const checkoutExample = {
  products: [
    { title: 'Urban Sneaker Black', quantity: 1, price: '€89.99' },
    { title: 'Sport Socks White 3-Pack', quantity: 2, price: '€19.98' },
    { title: 'Sneaker Care Kit', quantity: 1, price: '€15.00' }
  ],
  totalPrice: '114.97',
  currency: '€',
  checkoutUrl: 'https://shop.com/checkout/abc123',
  discount: {
    type: 'PERCENTAGE',
    value: '10'
  }
};
```

---

##  🎨 ALL ICON SVGs (Lucide React)

### **Bot Icon** (AI Avatar Fallback - 20x20px)

```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 8V4H8"/>
  <rect width="16" height="12" x="4" y="8" rx="2"/>
  <path d="M2 14h2"/>
  <path d="M20 14h2"/>
  <path d="M15 13v2"/>
  <path d="M9 13v2"/>
</svg>
```

### **Send Icon** (Arrow Up - 22x22px)

```html
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 19V5M5 12l7-7 7 7"/>
</svg>
```

### **Ticket Icon** (Discount Card - 20x20px, Green)

```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
  <path d="M13 5v2"/>
  <path d="M13 17v2"/>
  <path d="M13 11v2"/>
</svg>
```

### **Copy Icon** (Discount Copy Button - 16x16px)

```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
</svg>
```

### **Check Icon** (Copy Success - 16x16px, Green)

```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"/>
</svg>
```

### **Clock Icon** (Discount Expiry - 14x14px)

```html
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
</svg>
```

### **Truck Icon** (Tracking Card - 20x20px, Gray)

```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="1" y="3" width="15" height="13"/>
  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
  <circle cx="5.5" cy="18.5" r="2.5"/>
  <circle cx="18.5" cy="18.5" r="2.5"/>
</svg>
```

### **Close Icon** (X - 20x20px)

```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 18L18 6M6 6l12 12"/>
</svg>
```

---

## 🏠 TEAM AVATARS (Home Tab Header)

### **Team Avatar CSS**

```css
.team-avatar {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #FAFAFA;
  border: none;  /* ✅ No border for full 40px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  overflow: visible;  /* Allow green dot to overflow */
  flex-shrink: 0;
}

.team-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

/* Online Indicator - Green Dot (12px) */
.avatar-online-indicator {
  position: absolute !important;
  bottom: -2px !important;
  right: -2px !important;
  width: 12px !important;
  height: 12px !important;
  background: #10b981 !important;  /* Green */
  border: 2px solid white !important;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.6) !important;
  z-index: 999 !important;
  pointer-events: none;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}
```

### **Team Avatars HTML**

```html
<div class="home-team-avatars">
  <!-- Agent 1 -->
  <div class="team-avatar team-avatar-online" title="Sarah - 🟢 Online">
    <img 
      class="team-avatar-img" 
      src="[AGENT_AVATAR_URL]" 
      alt="Sarah"
    />
    <div class="avatar-online-indicator"></div>
  </div>
  
  <!-- Agent 2 -->
  <div class="team-avatar team-avatar-online" title="Max - 🟢 Online">
    <img 
      class="team-avatar-img" 
      src="[AGENT_AVATAR_URL]" 
      alt="Max"
    />
    <div class="avatar-online-indicator"></div>
  </div>
</div>
```

---

## 💬 SYSTEM MESSAGES

1. **✅ Clean & Minimal** - No unnecessary borders or gradients
2. **✅ Multi-layer Shadows** - Depth without borders
3. **✅ Round Avatars** - All avatars 40px × 40px, border-radius: 50%
4. **✅ Pill-shaped Input** - border-radius: 24px
5. **✅ Dark Buttons** - Black gradient, not blue
6. **✅ Gray User Messages** - #D1D5DB, not black
7. **✅ White AI/Agent Messages** - Pure white (#FFFFFF)
8. **✅ Subtle Animations** - Smooth, not distracting
9. **✅ 8px Grid System** - Consistent spacing
10. **✅ Emerald Green** - #10B981 for success/online

---

## 🚀 READY TO USE!

Dieses Dokument enthält **ALLES** was du brauchst um das Chat Widget 1:1 nachzubauen!

- ✅ Komplette CSS
- ✅ React Components
- ✅ Alle Farben & Variables
- ✅ Alle Animationen
- ✅ HTML Structures
- ✅ Example Data

**Copy & Paste Ready!** 💪

---

**Erstellt von**: Live Chat Widget Repo Agent  
**Datum**: 29. November 2025  
**Version**: Widget v2.0 with GSAP Animations  
**Status**: COMPLETE & READY TO DEPLOY! 🎉

