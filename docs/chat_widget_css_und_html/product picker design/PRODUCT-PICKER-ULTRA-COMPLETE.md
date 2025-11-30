# 🛍️ PRODUCT PICKER — ULTRA-COMPLETE SPECIFICATIONS
## EVERY PIXEL, EVERY STATE, EVERY DETAIL!

**Date**: November 29, 2025  
**Source**: Production Code (product-picker-enterprise.tsx + selected-products-panel.tsx)  
**Purpose**: Perfect Product Picker for Marketing Website Demo  
**Status**: ABSOLUTE PERFEKTION! 🔥  

---

## 📋 TABLE OF CONTENTS

1. [Overview & Flow](#overview--flow)
2. [Dialog/Modal Structure](#dialogmodal-structure)
3. [Left Panel: Product Search & Grid](#left-panel-product-search--grid)
4. [Right Panel: Selected Products](#right-panel-selected-products)
5. [Bottom Buttons & Actions](#bottom-buttons--actions)
6. [Discount Dialog (Nested)](#discount-dialog-nested)
7. [Complete CSS (All Styles)](#complete-css)
8. [Mock Data (Nike Products)](#mock-data-nike-products)
9. [Icons Reference](#icons-reference)
10. [Implementation Guide](#implementation-guide)

---

## 🎯 OVERVIEW & FLOW

### What is Product Picker?

Ein **Enterprise-Grade Modal** wo Agents Produkte auswählen und an Kunden senden können!

### User Flow

1. **Agent klickt** auf 🛍️ ShoppingBag Button (Composer Toolbar)
2. **Modal öffnet sich** (Large, fullscreen on mobile)
3. **Agent searched** für Produkte (Search bar)
4. **Agent wählt aus** (Checkbox + Click auf Product)
5. **Rechte Spalte erscheint** mit Selected Products
6. **Agent konfiguriert** (Variant dropdown, Quantity input)
7. **Agent sendet** ODER erstellt Checkout Link:
   - **Send Products**: Sendet Product Cards in Chat
   - **Create Checkout**: Öffnet Discount Dialog → erstellt Checkout Link

### Layout States

**No Products Selected** (Initial):
```
┌──────────────────────────────────────┐
│ Product Picker                       │
├──────────────────────────────────────┤
│ [Search Bar]                         │
├──────────────────────────────────────┤
│                                      │
│ Product Grid (Full Width)            │
│ □ Product 1                          │
│ □ Product 2                          │
│ □ Product 3                          │
│ ...                                  │
│                                      │
└──────────────────────────────────────┘
```

**Products Selected**:
```
┌─────────────────────┬────────────────┐
│ Product Picker      │ Selected (2)   │
├─────────────────────┼────────────────┤
│ [Search Bar]        │ ┌────────────┐ │
├─────────────────────┤ │ Product 1  │ │
│                     │ │ [Variant]  │ │
│ Product Grid        │ │ [Qty: 1]   │ │
│ ☑ Product 1         │ └────────────┘ │
│ ☑ Product 2         │ ┌────────────┐ │
│ □ Product 3         │ │ Product 2  │ │
│ ...                 │ │ [Variant]  │ │
│                     │ │ [Qty: 2]   │ │
│                     │ └────────────┘ │
│                     ├────────────────┤
│                     │ Subtotal: €259 │
└─────────────────────┴────────────────┘
          │
          ▼
┌──────────────────────────────────────┐
│ [Clear] [Send Products (3 items)]    │
│ [Create Checkout Link]               │
└──────────────────────────────────────┘
```

---

## 📐 DIALOG/MODAL STRUCTURE

### From Production Code (Lines 419-441)

### Container Specifications

```css
/* Mobile (< 768px) */
Height: 100vh (fullscreen!)
Width: 100vw (fullscreen!)
Max-Width: none
Margin: 0
Border-Radius: 0 (NO rounded corners on mobile!)

/* Tablet (768px - 1023px) */
Height: 600px
Width: 90vw
Max-Width: 768px (3xl = 48rem)
Margin: 16px (m-4)
Border-Radius: 0 (STILL no radius!)

/* Desktop (1024px+, NO selection) */
Height: 700px
Max-Width: 768px (3xl)
Border-Radius: 0

/* Desktop (1024px+, WITH selection) */
Height: 700px
Max-Width: 1152px (6xl = 72rem)
Border-Radius: 0
```

**CRITICAL**: Dialog has **NO rounded corners** on ANY breakpoint! (`rounded-none` everywhere!)

### HTML Structure

```html
<div class="product-picker-dialog" role="dialog" aria-modal="true">
  <div class="dialog-inner">
    <!-- LEFT PANEL -->
    <div class="product-picker-left-panel">
      <!-- Header, Search, Grid -->
    </div>
    
    <!-- RIGHT PANEL (Conditional!) -->
    <div class="product-picker-right-panel" data-visible="true">
      <!-- Selected Products -->
    </div>
  </div>
</div>
```

### Dialog CSS

```css
/* ═══════════════════════════════════════════════════════════════════
 * PRODUCT PICKER DIALOG — PRODUCTION SPECS!
 * ═══════════════════════════════════════════════════════════════════ */
.product-picker-dialog {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5); /* Backdrop */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

/* Mobile: Fullscreen */
.dialog-inner {
  height: 100vh;
  width: 100vw;
  max-width: none;
  margin: 0;
  background: #FFFFFF;
  border-radius: 0; /* NO radius on mobile! */
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

/* Tablet */
@media (min-width: 768px) {
  .dialog-inner {
    height: 600px;
    width: 90vw;
    max-width: 768px; /* md:max-w-3xl */
    margin: 16px; /* md:m-4 */
    border-radius: 0; /* STILL no radius! */
  }
}

/* Desktop (no selection) */
@media (min-width: 1024px) {
  .dialog-inner {
    height: 700px;
    max-width: 768px; /* lg:max-w-3xl */
    border-radius: 0;
  }
}

/* Desktop (with selection - wider!) */
@media (min-width: 1024px) {
  .dialog-inner[data-has-selection="true"] {
    max-width: 1152px; /* lg:max-w-6xl */
  }
}
```

---

## 📋 LEFT PANEL: PRODUCT SEARCH & GRID

### Panel Container

```css
Flex: 1 (fills available space)
Min-Width: 0
Display: flex
Flex-Direction: column
Overflow: hidden
Background: #FFFFFF
```

### Header (Title + Description)

```html
<div class="picker-header">
  <h2 class="picker-title">Send Products</h2>
  <p class="picker-description">
    Search and select products to send to the customer
  </p>
</div>
```

```css
.picker-header {
  padding: 16px 24px 12px 24px; /* p-4 md:p-6 pb-3 md:pb-4 */
  border-bottom: 1px solid #E5E7EB; /* border-border */
  flex-shrink: 0;
  background: #FFFFFF;
}

@media (min-width: 768px) {
  .picker-header {
    padding: 24px 24px 16px 24px; /* md:p-6 md:pb-4 */
  }
}

.picker-title {
  font-size: 18px; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: #0F172A; /* text-foreground */
  margin: 0 0 4px 0;
}

@media (min-width: 768px) {
  .picker-title {
    font-size: 20px; /* md:text-xl */
  }
}

.picker-description {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin: 0;
}

@media (min-width: 768px) {
  .picker-description {
    font-size: 14px; /* md:text-sm */
  }
}
```

---

### Search Bar Section

```html
<div class="picker-search-section">
  <div class="search-input-wrapper">
    <svg class="search-icon-absolute"><!-- Search icon --></svg>
    <input 
      type="search" 
      placeholder="Search products..." 
      class="search-input-main"
      autofocus
    />
  </div>
  
  <!-- Stats Row -->
  <div class="search-stats-row">
    <p class="stats-left-text">128 products found</p>
    <p class="stats-right-text">2 selected</p>
  </div>
</div>
```

```css
.picker-search-section {
  padding: 12px 16px; /* px-4 md:px-6 py-3 md:py-4 */
  border-bottom: 1px solid #E5E7EB;
  flex-shrink: 0;
  background: #FFFFFF;
}

@media (min-width: 768px) {
  .picker-search-section {
    padding: 16px 24px; /* md:px-6 md:py-4 */
  }
}

/* Search Input Wrapper */
.search-input-wrapper {
  position: relative;
  margin-bottom: 12px; /* mb-3 */
}

.search-icon-absolute {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px; /* h-4 */
  height: 16px; /* w-4 */
  color: #64748B; /* text-muted-foreground */
  pointer-events: none;
}

.search-input-main {
  width: 100%;
  height: 40px; /* h-10 */
  padding: 0 12px 0 40px; /* pl-9 (9 * 4px = 36px, but code uses pl-9 which is left-padding for icon space) */
  border: 1px solid #E5E7EB; /* border-input */
  border-radius: 6px; /* rounded-md = 6px */
  font-size: 14px; /* text-sm */
  background: #FFFFFF;
  color: #0F172A;
  box-shadow: var(--elevation-xs);
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1); /* duration-base */
}

.search-input-main::placeholder {
  color: #94A3B8; /* placeholder:text-muted-foreground */
}

.search-input-main:focus {
  outline: none;
  border-color: #6B7CFF; /* focus:border-primary */
  box-shadow: var(--elevation-sm); /* focus:shadow-elevation-sm */
}

/* Stats Row */
.search-stats-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stats-left-text {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin: 0;
}

.stats-right-text {
  font-size: 12px; /* text-xs */
  font-weight: 500; /* font-medium */
  color: #6B7CFF; /* text-primary */
  margin: 0;
}
```

---

### Product Grid (Scrollable)

```html
<div class="product-grid-scroll-area">
  <div class="product-grid-content">
    <!-- Product Item -->
    <div class="product-grid-item" data-selected="false">
      <!-- Checkbox -->
      <div class="product-checkbox">
        <svg class="checkbox-check"><!-- Check icon --></svg>
      </div>
      
      <!-- Product Image -->
      <div class="product-grid-image">
        <img src="/nike-shoe.jpg" alt="Nike Air Max" />
      </div>
      
      <!-- Product Info -->
      <div class="product-grid-info">
        <h4 class="product-grid-title">Nike Air Max 2024</h4>
        <p class="product-grid-stock">✓ In stock: 45</p>
      </div>
      
      <!-- Price -->
      <div class="product-grid-price">
        <p class="price-value">$129.99</p>
      </div>
    </div>
    
    <!-- When Selected: Variant + Quantity controls appear below! -->
    <div class="product-grid-item" data-selected="true">
      <!-- Same as above, plus: -->
      
      <!-- Expanded Controls (shown when selected!) -->
      <div class="product-controls-expanded">
        <!-- Variant Dropdown (if has variants) -->
        <div class="control-field">
          <label class="control-label">Variant</label>
          <select class="control-select">
            <option>Size M (12 in stock)</option>
            <option>Size L (8 in stock)</option>
          </select>
        </div>
        
        <!-- Quantity Input -->
        <div class="control-field">
          <label class="control-label">Quantity</label>
          <input type="number" min="1" value="1" class="control-input" />
        </div>
      </div>
    </div>
    
    <!-- More products... -->
  </div>
</div>
```

### Product Grid CSS

```css
/* ═══════════════════════════════════════════════════════════════════
 * PRODUCT GRID — PRODUCTION SPECS!
 * ═══════════════════════════════════════════════════════════════════ */

/* Scroll Area Container */
.product-grid-scroll-area {
  flex: 1;
  overflow-y: auto;
  padding: 12px 16px;
}

@media (min-width: 768px) {
  .product-grid-scroll-area {
    padding: 16px 24px; /* md:px-6 */
  }
}

.product-grid-content {
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px; /* space-y-2 */
}

@media (min-width: 768px) {
  .product-grid-content {
    padding: 16px 0; /* md:py-4 */
  }
}

/* ═══════════════════════════════════════════════════════════════════
 * PRODUCT GRID ITEM — CRITICAL!
 * ═══════════════════════════════════════════════════════════════════ */
.product-grid-item {
  padding: 12px; /* p-3 on mobile and desktop! */
  background: #FFFFFF;
  border: 1px solid #E5E7EB; /* border-border */
  border-radius: 8px; /* rounded-lg */
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1); /* duration-base */
  cursor: pointer;
}

.product-grid-item:hover {
  box-shadow: var(--elevation-sm); /* hover:shadow-elevation-sm */
}

.product-grid-item:active {
  box-shadow: var(--elevation-md); /* active:shadow-elevation-md */
}

/* Selected State */
.product-grid-item[data-selected="true"] {
  border-color: #6B7CFF; /* border-primary */
  background: rgba(107, 124, 255, 0.05); /* bg-primary/5 */
  box-shadow: var(--elevation-xs); /* shadow-elevation-xs */
}

/* Main Row (Checkbox + Image + Info + Price) */
.product-grid-item > .product-main-row {
  display: flex;
  align-items: center;
  gap: 12px; /* gap-3 */
}

/* ═══════════════════════════════════════════════════════════════════
 * CHECKBOX
 * ═══════════════════════════════════════════════════════════════════ */
.product-checkbox {
  width: 20px; /* h-5 w-5 */
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #E5E7EB; /* border-border */
  border-radius: 4px; /* rounded */
  background: #FFFFFF;
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1); /* duration-base */
}

.product-grid-item:hover .product-checkbox {
  border-color: rgba(107, 124, 255, 0.5); /* group-hover:border-primary/50 */
}

/* Selected State */
.product-grid-item[data-selected="true"] .product-checkbox {
  background: #6B7CFF; /* bg-primary */
  border-color: #6B7CFF; /* border-primary */
}

.checkbox-check {
  width: 12px; /* h-3 */
  height: 12px; /* w-3 */
  color: #FFFFFF;
  opacity: 0;
  transition: opacity 200ms;
}

.product-grid-item[data-selected="true"] .checkbox-check {
  opacity: 1;
}

/* ═══════════════════════════════════════════════════════════════════
 * PRODUCT IMAGE
 * ═══════════════════════════════════════════════════════════════════ */
.product-grid-image {
  position: relative;
  width: 64px; /* h-16 w-16 on mobile */
  height: 64px;
  flex-shrink: 0;
  border-radius: 6px; /* rounded-md */
  overflow: hidden;
  background: #F1F5F9; /* bg-slate-100 */
}

@media (min-width: 768px) {
  .product-grid-image {
    width: 56px; /* md:h-14 md:w-14 */
    height: 56px;
  }
}

.product-grid-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ═══════════════════════════════════════════════════════════════════
 * PRODUCT INFO
 * ═══════════════════════════════════════════════════════════════════ */
.product-grid-info {
  flex: 1;
  min-width: 0;
}

.product-grid-title {
  font-size: 14px; /* text-sm on both mobile and desktop */
  font-weight: 600; /* font-semibold */
  color: #0F172A; /* text-foreground */
  margin: 0 0 4px 0; /* mb-0.5 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.product-grid-stock {
  font-size: 12px; /* text-xs on both */
  color: #64748B; /* text-muted-foreground */
  margin: 0;
}

/* Stock Status Colors */
.product-grid-stock[data-status="in-stock-high"] {
  color: #059669; /* text-success (> 10) */
}

.product-grid-stock[data-status="in-stock-low"] {
  color: #D97706; /* text-warning (1-10) */
}

.product-grid-stock[data-status="out-of-stock"] {
  color: #DC2626; /* text-destructive (0) */
}

/* ═══════════════════════════════════════════════════════════════════
 * PRICE (Right-aligned)
 * ═══════════════════════════════════════════════════════════════════ */
.product-grid-price {
  flex-shrink: 0;
  text-align: right;
}

.price-value {
  font-size: 16px; /* text-base */
  font-weight: 700; /* font-bold */
  color: #0F172A; /* text-foreground */
  margin: 0;
}

/* ═══════════════════════════════════════════════════════════════════
 * EXPANDED CONTROLS (When Product Selected!)
 * ═══════════════════════════════════════════════════════════════════ */
.product-controls-expanded {
  margin-top: 8px; /* mt-2 */
  padding-left: 32px; /* pl-8 (offset for checkbox alignment) */
  display: flex;
  flex-direction: column;
  gap: 8px; /* space-y-2 */
}

.control-field {
  display: flex;
  flex-direction: column;
}

.control-label {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin-bottom: 4px; /* mb-1 */
  display: block;
}

/* Variant Select Dropdown */
.control-select {
  width: 100%;
  padding: 8px 12px; /* px-3 py-2 */
  font-size: 14px; /* text-sm */
  background: #FFFFFF;
  border: 1px solid #E2E8F0; /* border-slate-200 */
  border-radius: 6px; /* rounded-md */
  color: #0F172A;
  cursor: pointer;
  transition: all 200ms;
}

.control-select:hover {
  border-color: rgba(107, 124, 255, 0.5); /* hover:border-primary/50 */
}

.control-select:focus {
  outline: none;
  border-color: #6B7CFF; /* focus:border-primary */
  box-shadow: 0 0 0 1px #6B7CFF; /* focus:ring-1 focus:ring-primary */
}

/* Quantity Input */
.control-input {
  width: 100%;
  padding: 8px 12px; /* px-3 py-2 */
  font-size: 14px; /* text-sm */
  background: #FFFFFF;
  border: 1px solid #E2E8F0; /* border-slate-200 */
  border-radius: 6px; /* rounded-md */
  color: #0F172A;
  transition: all 200ms;
}

.control-input:hover {
  border-color: rgba(107, 124, 255, 0.5);
}

.control-input:focus {
  outline: none;
  border-color: #6B7CFF;
  box-shadow: 0 0 0 1px #6B7CFF;
}

/* Remove spinner buttons (cleaner look) */
.control-input[type="number"]::-webkit-inner-spin-button,
.control-input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.control-input[type="number"] {
  -moz-appearance: textfield;
}
```

---

## 📦 RIGHT PANEL: SELECTED PRODUCTS

### From Production: `selected-products-panel.tsx`

**Only shows when products are selected!**

### Panel Container

```css
Width: 384px; /* w-96 = 24rem */
Height: 100% (matches dialog height)
Background: rgba(248, 250, 252, 0.3); /* bg-slate-50/30 */
Border-Left: 1px solid #E5E7EB; /* border-border */
Display: flex
Flex-Direction: column
```

### Panel Header

```html
<div class="selected-panel-header">
  <div class="selected-header-content">
    <!-- Icon Box -->
    <div class="selected-icon-box">
      <svg class="selected-icon"><!-- ShoppingCart --></svg>
    </div>
    
    <!-- Text -->
    <div class="selected-header-text">
      <h3 class="selected-title">Selected</h3>
      <p class="selected-count">2 products</p>
    </div>
  </div>
</div>
```

```css
.selected-panel-header {
  padding: 16px; /* p-4 */
  border-bottom: 1px solid #E5E7EB; /* border-border */
  background: #FFFFFF; /* bg-white */
  flex-shrink: 0;
}

.selected-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Icon Box */
.selected-icon-box {
  width: 32px; /* h-8 w-8 */
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 124, 255, 0.1); /* bg-primary/10 */
  border-radius: 8px; /* rounded-lg */
  flex-shrink: 0;
}

.selected-icon {
  width: 16px; /* h-4 */
  height: 16px; /* w-4 */
  color: #6B7CFF; /* text-primary */
  stroke-width: 2;
}

.selected-header-text {
  flex: 1;
  margin-left: 8px; /* gap-2 from parent */
}

.selected-title {
  font-size: 14px; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: #0F172A; /* text-foreground */
  margin: 0;
}

.selected-count {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin: 0;
}
```

---

### Selected Product Card (In Right Panel!)

```html
<div class="selected-product-card">
  <!-- Header Row: Image + Title + Remove -->
  <div class="selected-card-header">
    <!-- Image -->
    <div class="selected-product-image">
      <img src="/nike-shoe.jpg" alt="Nike Air Max" />
    </div>
    
    <!-- Info -->
    <div class="selected-product-info">
      <h4 class="selected-product-title">Nike Air Max 2024</h4>
      <p class="selected-variant-text">Size M</p>
    </div>
    
    <!-- Remove Button -->
    <button class="selected-remove-btn">
      <svg class="remove-icon"><!-- X icon --></svg>
    </button>
  </div>
  
  <!-- Quantity + Price Row -->
  <div class="selected-quantity-price-row">
    <!-- Quantity -->
    <div class="quantity-field-wrapper">
      <label class="quantity-label">Qty</label>
      <input type="number" min="1" value="1" class="quantity-input-small" />
    </div>
    
    <!-- Total -->
    <div class="line-total-wrapper">
      <p class="line-total-label">Total</p>
      <p class="line-total-value">€129.99</p>
    </div>
  </div>
  
  <!-- Variant Dropdown (if has variants) -->
  <div class="variant-dropdown-wrapper">
    <label class="variant-label">Variant</label>
    <select class="variant-select-small">
      <option>Size M (12 in stock)</option>
      <option>Size L (8 in stock)</option>
    </select>
  </div>
</div>
```

### Selected Card CSS

```css
/* ═══════════════════════════════════════════════════════════════════
 * SELECTED PRODUCT CARD — RIGHT PANEL!
 * ═══════════════════════════════════════════════════════════════════ */
.selected-product-card {
  padding: 12px; /* p-3 */
  background: #FFFFFF; /* bg-white */
  border: 1px solid #E5E7EB; /* border-border */
  border-radius: 8px; /* rounded-lg */
  box-shadow: var(--elevation-sm); /* shadow-sm */
  transition: box-shadow 200ms;
}

.selected-product-card:hover {
  box-shadow: var(--elevation-md); /* hover:shadow-md */
}

/* Header Row */
.selected-card-header {
  display: flex;
  gap: 8px; /* gap-2 */
  margin-bottom: 8px; /* mb-2 */
  align-items: flex-start;
}

/* Image */
.selected-product-image {
  position: relative;
  width: 56px; /* h-14 w-14 */
  height: 56px;
  flex-shrink: 0;
  border-radius: 6px; /* rounded-md */
  overflow: hidden;
  background: #F1F5F9; /* bg-slate-100 */
}

.selected-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Info */
.selected-product-info {
  flex: 1;
  min-width: 0;
}

.selected-product-title {
  font-size: 14px; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: #0F172A; /* text-foreground */
  line-height: 1.3; /* leading-tight */
  margin: 0 0 2px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.selected-variant-text {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin: 0;
  margin-top: 2px; /* mt-0.5 */
}

/* Remove Button */
.selected-remove-btn {
  width: 24px; /* h-6 w-6 */
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px; /* rounded-md */
  cursor: pointer;
  flex-shrink: 0;
  transition: background 200ms;
}

.selected-remove-btn:hover {
  background: #F1F5F9; /* hover:bg-slate-100 */
}

.remove-icon {
  width: 16px; /* h-4 */
  height: 16px; /* w-4 */
  color: #64748B; /* text-muted-foreground */
  stroke-width: 2;
}

/* ═══════════════════════════════════════════════════════════════════
 * QUANTITY + PRICE ROW
 * ═══════════════════════════════════════════════════════════════════ */
.selected-quantity-price-row {
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
  margin-bottom: 8px; /* mb-2 if variant dropdown follows */
}

.quantity-field-wrapper {
  flex: 1;
}

.quantity-label {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin-bottom: 4px; /* mb-1 */
  display: block;
}

.quantity-input-small {
  width: 100%;
  padding: 6px 8px; /* px-2 py-1.5 */
  font-size: 14px; /* text-sm */
  background: #FFFFFF;
  border: 1px solid #E2E8F0; /* border-slate-200 */
  border-radius: 6px; /* rounded-md */
  color: #0F172A;
  transition: all 200ms;
}

.quantity-input-small:focus {
  outline: none;
  border-color: #6B7CFF;
  box-shadow: 0 0 0 1px #6B7CFF;
}

.line-total-wrapper {
  flex: 1;
  text-align: right;
}

.line-total-label {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin: 0 0 4px 0; /* mb-1 */
}

.line-total-value {
  font-size: 14px; /* text-sm */
  font-weight: 700; /* font-bold */
  color: #0F172A; /* text-foreground */
  margin: 0;
}

/* ═══════════════════════════════════════════════════════════════════
 * VARIANT DROPDOWN (In Selected Card)
 * ═══════════════════════════════════════════════════════════════════ */
.variant-dropdown-wrapper {
  margin-top: 8px; /* mt-2 */
}

.variant-label {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin-bottom: 4px; /* mb-1 */
  display: block;
}

.variant-select-small {
  width: 100%;
  padding: 6px 8px; /* px-2 py-1.5 */
  font-size: 12px; /* text-xs */
  background: #FFFFFF;
  border: 1px solid #E2E8F0; /* border-slate-200 */
  border-radius: 6px; /* rounded-md */
  color: #0F172A;
  cursor: pointer;
  transition: all 200ms;
}

.variant-select-small:hover {
  border-color: rgba(107, 124, 255, 0.5);
}

.variant-select-small:focus {
  outline: none;
  border-color: #6B7CFF;
  box-shadow: 0 0 0 1px #6B7CFF;
}
```

---

### Selected Panel Footer (Subtotal)

```html
<div class="selected-panel-footer">
  <!-- Total Items Row -->
  <div class="footer-row">
    <span class="footer-label">Total Items</span>
    <span class="footer-value">3</span>
  </div>
  
  <!-- Subtotal Row -->
  <div class="footer-row footer-row-subtotal">
    <span class="footer-label-bold">Subtotal</span>
    <span class="footer-value-large">€389.97</span>
  </div>
</div>
```

```css
.selected-panel-footer {
  padding: 16px; /* p-4 */
  border-top: 1px solid #E5E7EB; /* border-border */
  background: #FFFFFF; /* bg-white */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px; /* space-y-2 */
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px; /* text-sm */
}

.footer-row-subtotal {
  padding-top: 8px; /* pt-2 */
  border-top: 1px solid #E2E8F0; /* border-slate-200 */
}

.footer-label {
  color: #64748B; /* text-muted-foreground */
}

.footer-value {
  font-weight: 600; /* font-semibold */
  color: #0F172A; /* text-foreground */
}

.footer-label-bold {
  font-weight: 600; /* font-semibold */
  color: #0F172A; /* text-foreground */
}

.footer-value-large {
  font-size: 18px; /* text-lg */
  font-weight: 700; /* font-bold */
  color: #0F172A; /* text-foreground */
}
```

---

## 🎬 BOTTOM ACTIONS (Main Footer!)

### Footer Section (Below Left Panel)

```html
<div class="picker-main-footer">
  <!-- Stats Row -->
  <div class="footer-stats-row">
    <span class="footer-stats-label">Total Items</span>
    <span class="footer-stats-value">3</span>
  </div>
  
  <!-- Buttons Row -->
  <div class="footer-buttons-row">
    <!-- Clear Button -->
    <button class="footer-btn footer-btn-clear">
      Clear (2)
    </button>
    
    <!-- Send Products Button (Purple!) -->
    <button class="footer-btn footer-btn-send">
      <svg class="btn-icon-svg"><!-- ShoppingBag --></svg>
      <span>Send 3 items</span>
    </button>
  </div>
  
  <!-- Create Checkout Button (Blue outline!) -->
  <button class="footer-btn footer-btn-checkout">
    <svg class="btn-icon-svg"><!-- ExternalLink --></svg>
    <span>Create Checkout Link</span>
  </button>
</div>
```

### Footer CSS

```css
/* ═══════════════════════════════════════════════════════════════════
 * MAIN FOOTER (Bottom Actions)
 * ═══════════════════════════════════════════════════════════════════ */
.picker-main-footer {
  padding: 16px 24px 12px 24px; /* p-4 md:p-6 pt-3 md:pt-4 */
  border-top: 1px solid #E5E7EB; /* border-border */
  background: rgba(248, 250, 252, 0.5); /* bg-slate-50/50 */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 12px; /* gap-3 */
}

@media (min-width: 768px) {
  .picker-main-footer {
    padding: 16px 24px; /* md:p-6 md:pt-4 */
  }
}

/* Stats Row */
.footer-stats-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px; /* text-sm */
  margin-bottom: 8px; /* mb-2 */
}

.footer-stats-label {
  color: #64748B; /* text-muted-foreground */
}

.footer-stats-value {
  font-weight: 600; /* font-semibold */
  color: #0F172A; /* text-foreground */
}

/* Buttons Row (Clear + Send) */
.footer-buttons-row {
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
}

/* Base Button */
.footer-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px; /* gap-1.5 */
  padding: 8px 12px; /* size="sm" = h-9 px-3 */
  height: 36px; /* h-9 */
  border-radius: 6px; /* rounded-md */
  font-size: 14px; /* text-sm */
  font-weight: 500; /* font-medium */
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 1px solid;
  white-space: nowrap;
}

.btn-icon-svg {
  width: 16px; /* h-4 */
  height: 16px; /* w-4 */
  stroke-width: 2;
  flex-shrink: 0;
}

/* Clear Button (Outline variant) */
.footer-btn-clear {
  flex-shrink: 0;
  background: #FFFFFF; /* bg-background */
  border-color: #E5E7EB; /* border-input */
  color: #0F172A; /* text-foreground */
}

.footer-btn-clear:hover {
  background: #F9FAFB; /* hover:bg-accent */
  color: #0F172A; /* hover:text-accent-foreground */
}

/* Send Products Button (Primary - Purple Gradient!) */
.footer-btn-send {
  flex: 1; /* Takes remaining space */
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%); /* bg-gradient-primary */
  border-color: transparent;
  color: #FFFFFF; /* text-white */
  box-shadow: var(--elevation-sm), 0 4px 12px rgba(107, 124, 255, 0.25); /* shadow-elevation-sm + purple glow */
}

.footer-btn-send:hover {
  box-shadow: var(--elevation-md), 0 8px 16px rgba(107, 124, 255, 0.3); /* hover:shadow-elevation-md + enhanced glow */
  opacity: 0.95;
}

.footer-btn-send:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Create Checkout Button (Info outline - Blue!) */
.footer-btn-checkout {
  width: 100%;
  gap: 6px; /* gap-1.5 */
  background: #FFFFFF;
  border-color: rgba(59, 130, 246, 0.3); /* border-info/30 */
  color: #3B82F6; /* text-info */
  box-shadow: var(--elevation-xs);
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1); /* duration-base */
}

.footer-btn-checkout:hover {
  background: rgba(59, 130, 246, 0.05); /* hover:bg-info/5 */
  border-color: #3B82F6; /* hover:border-info */
}

.footer-btn-checkout:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## 💰 DISCOUNT DIALOG (Nested!)

### When "Create Checkout" clicked, opens another dialog!

### HTML Structure

```html
<div class="discount-dialog-overlay">
  <div class="discount-dialog-content">
    <!-- Header -->
    <div class="discount-dialog-header">
      <h3 class="discount-dialog-title">Add Discount</h3>
      <p class="discount-dialog-desc">Choose a discount percentage for the checkout link</p>
    </div>
    
    <!-- Options -->
    <div class="discount-options-list">
      <!-- No Discount -->
      <button class="discount-option-btn">
        <span class="discount-option-text">
          <svg class="discount-option-icon"><!-- ExternalLink --></svg>
          No Discount
        </span>
      </button>
      
      <!-- 10% OFF -->
      <button class="discount-option-btn">
        <span class="discount-option-text">
          <svg class="discount-option-icon icon-success"><!-- Ticket --></svg>
          10% OFF
        </span>
        <span class="discount-option-hint">Auto-generated</span>
      </button>
      
      <!-- 15% OFF -->
      <button class="discount-option-btn">
        <span class="discount-option-text">
          <svg class="discount-option-icon icon-success"><!-- Ticket --></svg>
          15% OFF
        </span>
        <span class="discount-option-hint">Auto-generated</span>
      </button>
      
      <!-- 20% OFF -->
      <button class="discount-option-btn">
        <span class="discount-option-text">
          <svg class="discount-option-icon icon-success"><!-- Ticket --></svg>
          20% OFF
        </span>
        <span class="discount-option-hint">Auto-generated</span>
      </button>
      
      <!-- Custom Discount Input -->
      <div class="discount-custom-section">
        <label class="custom-discount-label">CUSTOM DISCOUNT</label>
        <div class="custom-discount-row">
          <input 
            type="number" 
            min="1" 
            max="100" 
            placeholder="Enter %" 
            class="custom-discount-input"
          />
          <button class="custom-discount-apply">Apply</button>
        </div>
        <p class="custom-discount-hint">Enter a value between 1-100%</p>
      </div>
    </div>
    
    <!-- Cancel Button -->
    <button class="discount-cancel-btn">Cancel</button>
  </div>
</div>
```

### Discount Dialog CSS

```css
/* ═══════════════════════════════════════════════════════════════════
 * DISCOUNT DIALOG (Nested Dialog!)
 * ═══════════════════════════════════════════════════════════════════ */
.discount-dialog-overlay {
  position: fixed;
  inset: 0;
  z-index: 60; /* Higher than product picker! */
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.discount-dialog-content {
  width: 100%;
  max-width: 448px; /* sm:max-w-md */
  background: #FFFFFF;
  border-radius: 8px; /* rounded-lg (HAS radius unlike product picker!) */
  padding: 24px;
  box-shadow: var(--elevation-xl);
}

/* Header */
.discount-dialog-header {
  margin-bottom: 16px;
}

.discount-dialog-title {
  font-size: 18px; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: #0F172A;
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}

.discount-dialog-desc {
  font-size: 14px; /* text-sm */
  color: #64748B;
  margin: 0;
}

/* Options List */
.discount-options-list {
  display: flex;
  flex-direction: column;
  gap: 8px; /* space-y-2 */
  margin-bottom: 16px;
}

/* Option Button */
.discount-option-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px; /* px-3 py-2.5 approximate */
  height: 36px; /* size="sm" */
  background: #FFFFFF;
  border: 1px solid #E5E7EB; /* variant="outline" */
  border-radius: 6px; /* rounded-md */
  color: #0F172A;
  font-size: 14px; /* text-sm */
  font-weight: 500; /* font-medium */
  cursor: pointer;
  transition: all 200ms;
  text-align: left;
}

.discount-option-btn:hover {
  background: #F9FAFB; /* hover:bg-accent */
}

.discount-option-text {
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
}

.discount-option-icon {
  width: 16px; /* h-4 */
  height: 16px; /* w-4 */
  stroke-width: 2;
  flex-shrink: 0;
}

.icon-success {
  color: #10B981; /* text-success */
}

.discount-option-hint {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
}

/* Custom Discount Section */
.discount-custom-section {
  padding-top: 12px; /* pt-3 */
  margin-top: 8px; /* mt-2 */
  border-top: 1px solid #E5E7EB; /* border-border */
}

.custom-discount-label {
  font-size: 11px; /* text-xs */
  font-weight: 600; /* font-semibold */
  color: #64748B; /* text-muted-foreground */
  text-transform: uppercase;
  letter-spacing: 0.05em; /* tracking-wide */
  display: block;
  margin-bottom: 8px; /* mb-2 */
}

.custom-discount-row {
  display: flex;
  gap: 8px; /* gap-2 */
}

.custom-discount-input {
  flex: 1;
  height: 36px; /* h-9 */
  padding: 0 12px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  background: #FFFFFF;
  color: #0F172A;
}

.custom-discount-input:focus {
  outline: none;
  border-color: #6B7CFF;
  box-shadow: 0 0 0 2px rgba(107, 124, 255, 0.1);
}

.custom-discount-apply {
  flex-shrink: 0;
  height: 36px; /* size="sm" */
  padding: 0 12px;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  border: none;
  border-radius: 6px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms;
  box-shadow: var(--elevation-sm);
}

.custom-discount-apply:hover {
  opacity: 0.95;
  box-shadow: var(--elevation-md);
}

.custom-discount-apply:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.custom-discount-hint {
  font-size: 12px; /* text-xs */
  color: #64748B; /* text-muted-foreground */
  margin-top: 4px; /* mt-1 */
}

/* Cancel Button */
.discount-cancel-btn {
  width: 100%;
  height: 36px; /* size="sm" */
  padding: 0 12px;
  background: transparent; /* variant="ghost" */
  border: none;
  border-radius: 6px;
  color: #0F172A;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms;
  margin-top: 16px; /* mt-4 */
}

.discount-cancel-btn:hover {
  background: #F9FAFB; /* hover:bg-accent */
}
```

---

## 📊 MOCK DATA (NIKE PRODUCTS!)

### Product Data Structure

```json
{
  "products": [
    {
      "id": "prod_nike_001",
      "title": "Nike Air Max 2024 - Running Shoes",
      "price": "159.99",
      "primary_image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      "inventory_quantity": 45,
      "sku": "NIKE-AM2024",
      "description": "Premium running shoes with Air Max cushioning technology",
      "product_url": "https://shop.example.com/products/nike-air-max-2024",
      "variant_data": [
        {
          "id": "var_001_m",
          "sku": "NIKE-AM2024-M",
          "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
          "price": "159.99",
          "title": "Size M",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "M" }],
          "availableForSale": true,
          "inventoryQuantity": 12
        },
        {
          "id": "var_001_l",
          "sku": "NIKE-AM2024-L",
          "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
          "price": "159.99",
          "title": "Size L",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "L" }],
          "availableForSale": true,
          "inventoryQuantity": 18
        },
        {
          "id": "var_001_xl",
          "sku": "NIKE-AM2024-XL",
          "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
          "price": "159.99",
          "title": "Size XL",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "XL" }],
          "availableForSale": true,
          "inventoryQuantity": 15
        }
      ]
    },
    {
      "id": "prod_nike_002",
      "title": "Nike Tech Fleece Joggers - Black",
      "price": "89.99",
      "primary_image_url": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
      "inventory_quantity": 32,
      "sku": "NIKE-TF-JOG-BLK",
      "description": "Premium joggers with lightweight Tech Fleece fabric",
      "product_url": "https://shop.example.com/products/nike-tech-joggers",
      "variant_data": [
        {
          "id": "var_002_s",
          "sku": "NIKE-TF-JOG-BLK-S",
          "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
          "price": "89.99",
          "title": "Size S",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "S" }],
          "availableForSale": true,
          "inventoryQuantity": 8
        },
        {
          "id": "var_002_m",
          "sku": "NIKE-TF-JOG-BLK-M",
          "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
          "price": "89.99",
          "title": "Size M",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "M" }],
          "availableForSale": true,
          "inventoryQuantity": 14
        },
        {
          "id": "var_002_l",
          "sku": "NIKE-TF-JOG-BLK-L",
          "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
          "price": "89.99",
          "title": "Size L",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "L" }],
          "availableForSale": true,
          "inventoryQuantity": 10
        }
      ]
    },
    {
      "id": "prod_nike_003",
      "title": "Nike Dri-FIT Training Shirt",
      "price": "39.99",
      "primary_image_url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      "inventory_quantity": 67,
      "sku": "NIKE-DF-SHIRT",
      "description": "Moisture-wicking training shirt for peak performance",
      "product_url": "https://shop.example.com/products/nike-dri-fit-shirt",
      "variant_data": [
        {
          "id": "var_003_default",
          "sku": "NIKE-DF-SHIRT",
          "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
          "price": "39.99",
          "title": "Default Title",
          "compareAtPrice": null,
          "selectedOptions": [],
          "availableForSale": true,
          "inventoryQuantity": 67
        }
      ]
    },
    {
      "id": "prod_nike_004",
      "title": "Nike Pro Compression Leggings",
      "price": "64.99",
      "primary_image_url": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      "inventory_quantity": 28,
      "sku": "NIKE-PRO-LEG",
      "description": "High-performance compression leggings",
      "product_url": "https://shop.example.com/products/nike-pro-leggings",
      "variant_data": [
        {
          "id": "var_004_s",
          "sku": "NIKE-PRO-LEG-S",
          "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
          "price": "64.99",
          "title": "Size S",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "S" }],
          "availableForSale": true,
          "inventoryQuantity": 10
        },
        {
          "id": "var_004_m",
          "sku": "NIKE-PRO-LEG-M",
          "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
          "price": "64.99",
          "title": "Size M",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "M" }],
          "availableForSale": true,
          "inventoryQuantity": 18
        }
      ]
    },
    {
      "id": "prod_nike_005",
      "title": "Nike Air Force 1 '07 - White",
      "price": "119.99",
      "primary_image_url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      "inventory_quantity": 52,
      "sku": "NIKE-AF1-WHT",
      "description": "Iconic sneakers with timeless design",
      "product_url": "https://shop.example.com/products/nike-air-force-1",
      "variant_data": [
        {
          "id": "var_005_8",
          "sku": "NIKE-AF1-WHT-8",
          "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
          "price": "119.99",
          "title": "Size 8",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "8" }],
          "availableForSale": true,
          "inventoryQuantity": 12
        },
        {
          "id": "var_005_9",
          "sku": "NIKE-AF1-WHT-9",
          "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
          "price": "119.99",
          "title": "Size 9",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "9" }],
          "availableForSale": true,
          "inventoryQuantity": 20
        },
        {
          "id": "var_005_10",
          "sku": "NIKE-AF1-WHT-10",
          "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
          "price": "119.99",
          "title": "Size 10",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "10" }],
          "availableForSale": true,
          "inventoryQuantity": 20
        }
      ]
    },
    {
      "id": "prod_nike_006",
      "title": "Nike Swoosh Sports Bra",
      "price": "34.99",
      "primary_image_url": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
      "inventory_quantity": 41,
      "sku": "NIKE-SWOOSH-BRA",
      "description": "Medium support sports bra for training",
      "product_url": "https://shop.example.com/products/nike-swoosh-bra",
      "variant_data": [
        {
          "id": "var_006_s",
          "sku": "NIKE-SWOOSH-BRA-S",
          "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
          "price": "34.99",
          "title": "Size S",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "S" }],
          "availableForSale": true,
          "inventoryQuantity": 15
        },
        {
          "id": "var_006_m",
          "sku": "NIKE-SWOOSH-BRA-M",
          "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
          "price": "34.99",
          "title": "Size M",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "M" }],
          "availableForSale": true,
          "inventoryQuantity": 26
        }
      ]
    },
    {
      "id": "prod_nike_007",
      "title": "Nike Windrunner Jacket - Navy",
      "price": "99.99",
      "primary_image_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      "inventory_quantity": 19,
      "sku": "NIKE-WR-JAC-NAV",
      "description": "Classic windrunner with weather protection",
      "product_url": "https://shop.example.com/products/nike-windrunner",
      "variant_data": [
        {
          "id": "var_007_m",
          "sku": "NIKE-WR-JAC-NAV-M",
          "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
          "price": "99.99",
          "title": "Size M",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "M" }],
          "availableForSale": true,
          "inventoryQuantity": 7
        },
        {
          "id": "var_007_l",
          "sku": "NIKE-WR-JAC-NAV-L",
          "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
          "price": "99.99",
          "title": "Size L",
          "compareAtPrice": null,
          "selectedOptions": [{ "name": "Size", "value": "L" }],
          "availableForSale": true,
          "inventoryQuantity": 12
        }
      ]
    },
    {
      "id": "prod_nike_008",
      "title": "Nike Everyday Cushion Crew Socks (3 Pack)",
      "price": "19.99",
      "primary_image_url": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400",
      "inventory_quantity": 156,
      "sku": "NIKE-SOCK-3PK",
      "description": "Comfortable everyday socks with cushioned footbed",
      "product_url": "https://shop.example.com/products/nike-socks-3pack",
      "variant_data": [
        {
          "id": "var_008_default",
          "sku": "NIKE-SOCK-3PK",
          "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400",
          "price": "19.99",
          "title": "Default Title",
          "compareAtPrice": null,
          "selectedOptions": [],
          "availableForSale": true,
          "inventoryQuantity": 156
        }
      ]
    }
  ]
}
```

---

## 🎨 ICONS REFERENCE

### All Icons Used (Lucide React)

```tsx
import { 
  Search,        // Search bar (16px)
  ShoppingBag,   // Toolbar button + Send button (16px)
  Check,         // Checkbox checkmark (12px)
  ShoppingCart,  // Selected panel header (16px)
  X,             // Remove button (16px)
  ExternalLink,  // Checkout options (16px)
  Ticket,        // Discount options (16px, green!)
  Loader2,       // Loading spinner (16px)
  Package2,      // Product placeholder (24px in grid, 24px in order)
} from 'lucide-react';
```

### Icon Sizes Map

```
Search: 16px (h-4 w-4)
ShoppingBag (Toolbar): 16px (h-4 w-4)
ShoppingBag (Send Button): 16px (h-4 w-4)
Check (Checkbox): 12px (h-3 w-3)
ShoppingCart (Selected Panel): 16px (h-4 w-4)
X (Remove): 16px (h-4 w-4)
ExternalLink (Checkout): 16px (h-4 w-4)
Ticket (Discount): 16px (h-4 w-4)
Loader2 (Sending state): 16px (h-4 w-4)
Package2 (Placeholder): 24px (h-6 w-6 in grid), 24px in order panel
```

---

## 📏 EXACT DIMENSIONS

### Dialog

```
Mobile: 100vh × 100vw (fullscreen!)
Tablet: 600px × 90vw (max 768px)
Desktop (no selection): 700px × 768px (max-w-3xl)
Desktop (with selection): 700px × 1152px (max-w-6xl)
Border-Radius: 0 (NO radius!)
Padding: 0
```

### Left Panel

```
Flex: 1
Header Padding: 16px 24px (mobile), 24px 24px (desktop)
Search Padding: 12px 16px (mobile), 16px 24px (desktop)
Grid Padding: 12px 16px (mobile), 16px 24px (desktop)
Footer Padding: 16px 24px
```

### Product Grid Item

```
Padding: 12px (p-3, both mobile and desktop!)
Border: 1px solid #E5E7EB
Border-Radius: 8px (rounded-lg)
Gap: 12px (between checkbox, image, info, price)
```

### Checkbox

```
Size: 20px × 20px (h-5 w-5)
Border: 2px solid #E5E7EB
Border-Radius: 4px (rounded)
Check Icon: 12px (h-3 w-3)
```

### Product Image (Grid)

```
Mobile: 64px × 64px (h-16 w-16)
Desktop: 56px × 56px (md:h-14 md:w-14)
Border-Radius: 6px (rounded-md)
Background: #F1F5F9 (slate-100)
```

### Right Panel

```
Width: 384px (w-96)
Background: rgba(248, 250, 252, 0.3) (slate-50/30)
Border-Left: 1px solid #E5E7EB
Header Padding: 16px (p-4)
Content Padding: 12px (p-3)
Footer Padding: 16px (p-4)
```

### Selected Product Card (Right Panel)

```
Padding: 12px (p-3)
Border: 1px solid #E5E7EB
Border-Radius: 8px (rounded-lg)
Gap: 8px (gap-2 between elements)
Box-Shadow: var(--elevation-sm)
```

### Selected Product Image (Right Panel)

```
Size: 56px × 56px (h-14 w-14)
Border-Radius: 6px (rounded-md)
Background: #F1F5F9
```

### Remove Button (Right Panel)

```
Size: 24px × 24px (h-6 w-6)
Border-Radius: 6px (rounded-md)
Background: transparent
Hover: #F1F5F9 (slate-100)
Icon: 16px (h-4 w-4)
```

### Variant Dropdown (In Expanded Controls)

```
Width: 100%
Padding: 8px 12px (px-3 py-2 in grid), 6px 8px (px-2 py-1.5 in selected panel)
Border: 1px solid #E2E8F0 (slate-200)
Border-Radius: 6px (rounded-md)
Font-Size: 14px (in grid), 12px (in selected panel)
```

### Quantity Input

```
Width: 100%
Padding: 8px 12px (in grid), 6px 8px (in selected panel)
Border: 1px solid #E2E8F0
Border-Radius: 6px
Font-Size: 14px (in grid), 14px (in selected panel)
```

### Footer Buttons

```
Clear Button:
  Height: 36px (size="sm")
  Padding: 0 12px (px-3)
  Border-Radius: 6px
  Background: #FFFFFF
  Border: 1px solid #E5E7EB

Send Products Button:
  Height: 36px
  Padding: 0 12px
  Border-Radius: 6px
  Background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%)
  Border: none
  Shadow: var(--elevation-sm) + purple glow

Create Checkout Button:
  Width: 100%
  Height: 36px
  Padding: 0 12px
  Border-Radius: 6px
  Background: #FFFFFF
  Border: 1px solid rgba(59, 130, 246, 0.3) (info/30)
  Color: #3B82F6 (info)
```

---

## ✅ BORDER-RADIUS SUMMARY

```
Dialog Container: 0 (NO radius!)
Header Section: 0
Search Input: 6px
Product Grid Item: 8px
Checkbox: 4px
Product Image (Grid): 6px
Product Image (Selected Panel): 6px
Selected Product Card: 8px
Remove Button: 6px
Variant Dropdown: 6px
Quantity Input: 6px
Footer Buttons: 6px
Discount Dialog: 8px (HAS radius!)
Discount Options: 6px
Selected Panel Icon Box: 8px
```

---

## TO BE CONTINUED...

**Next section will include:**
- Complete CSS File (all styles)
- React Component Template (copy-paste ready!)
- Implementation Guide (step-by-step)
- State Management Logic
- Keyboard Navigation
- Loading States (Skeleton)
- Empty States
- Error States

**Should I continue?** 🚀

