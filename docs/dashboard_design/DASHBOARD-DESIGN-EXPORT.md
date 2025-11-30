# 🎨 REPLAINOW DASHBOARD — COMPLETE DESIGN EXPORT

**Version**: v1.0 Enterprise  
**Date**: November 29, 2025  
**Target**: Marketing Website Integration  
**Status**: PRODUCTION-READY ✅  

---

## 📋 TABLE OF CONTENTS

1. [Design System & Colors](#1-design-system--colors)
2. [Typography System](#2-typography-system)
3. [Spacing & Layout](#3-spacing--layout)
4. [Shadow System](#4-shadow-system)
5. [Complete CSS Variables](#5-complete-css-variables)
6. [Layout Structure](#6-layout-structure)
7. [Sidebar Navigation](#7-sidebar-navigation)
8. [Live Chat Dashboard](#8-live-chat-dashboard)
9. [Mail Dashboard](#9-mail-dashboard)
10. [TypeScript Types](#10-typescript-types)
11. [React Components](#11-react-components)
12. [Example Data](#12-example-data)
13. [Integration Guide](#13-integration-guide)

---

## 1. DESIGN SYSTEM & COLORS

### 1.1 Complete Color Palette

#### PRIMARY BRAND COLOR - **PURPLE**
```css
--primary: 235 100% 71%; /* HSL for #6B7CFF */
--primary-foreground: 0 0% 100%; /* White on purple */
```

**HEX VALUES:**
```
Primary (500): #6B7CFF
Primary 50:   #F5F7FF
Primary 100:  #EBEEFF
Primary 200:  #D6DDFF
Primary 300:  #B3BDFF
Primary 400:  #8F9DFF
Primary 500:  #6B7CFF (DEFAULT)
Primary 600:  #5A67D8
Primary 700:  #4A52B8
Primary 800:  #3A4298
Primary 900:  #2A3278
```

#### NEUTRAL SLATE (Full Scale)
```
Slate 50:  #F8FAFC
Slate 100: #F1F5F9
Slate 200: #E2E8F0
Slate 300: #CBD5E1
Slate 400: #94A3B8
Slate 500: #64748B
Slate 600: #475569
Slate 700: #334155
Slate 800: #1E293B
Slate 900: #0F172A
Slate 950: #020617
```

#### SEMANTIC COLORS
```css
/* Success (Green) */
--success: 142 71% 45%;
Success: #10B981
Success 50:  #ECFDF5
Success 100: #D1FAE5
Success 500: #10B981
Success 600: #059669
Success 900: #064E3B

/* Warning (Amber) */
--warning: 38 92% 50%;
Warning: #F59E0B
Warning 50:  #FFFBEB
Warning 100: #FEF3C7
Warning 500: #F59E0B
Warning 600: #D97706
Warning 900: #78350F

/* Danger (Red) */
--destructive: 0 84% 60%;
Danger: #EF4444
Danger 50:  #FEF2F2
Danger 100: #FEE2E2
Danger 500: #EF4444
Danger 600: #DC2626
Danger 900: #7F1D1D

/* Info (Blue) */
--info: 217 91% 60%;
Info: #3B82F6
Info 50:  #EFF6FF
Info 100: #DBEAFE
Info 500: #3B82F6
Info 600: #2563EB
Info 900: #1E3A8A
```

#### BACKGROUND COLORS
```css
--background: 0 0% 100%; /* Pure white #FFFFFF */
--foreground: 222 47% 11%; /* Near black #0F172A */
--card: 0 0% 100%; /* White #FFFFFF */
--card-foreground: 222 47% 11%;
--popover: 0 0% 100%;
--popover-foreground: 222 47% 11%;

/* Specific Dashboard Backgrounds */
Conversation List: #F9FAFB
Chat Area: #FFFFFF
Customer Panel: #FFFFFF
```

#### TEXT COLORS
```css
--foreground: 222 47% 11%; /* Primary text #0F172A */
--muted-foreground: 215 16% 47%; /* Secondary text #64748B */

Specific:
Primary Text: #0F172A
Secondary Text: #64748B
Muted Text: #94A3B8
Link Color: #6B7CFF
Link Hover: rgba(107, 124, 255, 0.8)
```

#### BORDER COLORS
```css
--border: 220 13% 91%; /* #E5E7EB */
--input: 220 13% 91%;
--ring: 235 100% 71%; /* Purple focus ring #6B7CFF */

Default Border: #E5E7EB
Card Border: #E5E7EB
Table Border: #F3F4F6
Divider: #F3F4F6
```

#### SIDEBAR DARK MODE (Special!)
```css
/* Dark Sidebar */
Background: #18191B
Border: #2D2E30
Hover: #252627
Active Tab: #2D2E30
Text: #9CA3AF
Text Active: #FFFFFF
```

---

### 1.2 CSS Variables Export

```css
:root {
  /* ═══════════════════════════════════════════════════════════════════
   * LIGHT MODE — Premium Neutrals + Purple Accent
   * ═══════════════════════════════════════════════════════════════════ */
  
  /* Surfaces */
  --background: 0 0% 100%; /* Pure white */
  --foreground: 222 47% 11%; /* Near black */
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;
  
  /* Brand Purple (#6B7CFF) */
  --primary: 235 100% 71%;
  --primary-foreground: 0 0% 100%;
  
  /* Subtle Secondary */
  --secondary: 220 14% 96%;
  --secondary-foreground: 222 47% 11%;
  
  /* Muted (disabled/metadata) */
  --muted: 220 14% 96%;
  --muted-foreground: 215 16% 47%;
  
  /* Accent (hover states) */
  --accent: 235 100% 97%;
  --accent-foreground: 235 100% 71%;
  
  /* Semantic Colors */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --success: 142 71% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 0 0% 100%;
  --info: 217 91% 60%;
  --info-foreground: 0 0% 100%;
  
  /* Borders & Inputs */
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 235 100% 71%;
  
  /* Elevation (box-shadow tokens) */
  --elevation-xs: 0 1px 2px 0 rgba(15, 23, 42, 0.04);
  --elevation-sm: 0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04);
  --elevation-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06);
  --elevation-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.06);
  --elevation-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.06);
  --elevation-2xl: 0 25px 50px -12px rgba(15, 23, 42, 0.12);
  
  /* Radii */
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius: var(--radius-sm);
  
  /* Motion */
  --motion-fast: 120ms;
  --motion-base: 200ms;
  --motion-moderate: 300ms;
  --motion-slow: 400ms;
  --motion-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
  
  /* Dashboard Specific */
  --conversation-list-bg: #F9FAFB;
  --chat-area-bg: #FFFFFF;
  --customer-panel-bg: #FFFFFF;
  --sidebar-bg: #18191B;
  --sidebar-border: #2D2E30;
  --sidebar-hover: #252627;
}

.dark {
  /* Dark mode values (if needed for marketing site) */
  --background: 222 47% 11%;
  --foreground: 220 14% 96%;
  --card: 217 33% 17%;
  --card-foreground: 220 14% 96%;
  --primary: 235 86% 65%;
  --primary-foreground: 222 47% 11%;
  /* ...rest omitted for brevity */
}
```

---

## 2. TYPOGRAPHY SYSTEM

### 2.1 Font Family

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
```

**Fallback System**: Uses native OS fonts for PERFECT rendering:
- **macOS**: -apple-system, San Francisco Pro
- **Windows**: Segoe UI
- **Linux**: Roboto, Ubuntu

**Font Features Enabled:**
```css
font-feature-settings: "rlig" 1, "calt" 1, "kern" 1;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

### 2.2 Font Sizes & Weights

```css
/* HEADINGS */
H1 (Page Title): 
  font-size: 24px (1.5rem)
  font-weight: 700 (bold)
  letter-spacing: -0.02em
  line-height: 1.3

H2 (Section Title):
  font-size: 20px (1.25rem)
  font-weight: 700
  letter-spacing: -0.02em
  line-height: 1.3

H3 (Card Title):
  font-size: 18px (1.125rem)
  font-weight: 600 (semibold)
  letter-spacing: -0.01em
  line-height: 1.4

H4 (Subsection):
  font-size: 16px (1rem)
  font-weight: 600
  letter-spacing: -0.01em
  line-height: 1.5

/* BODY TEXT */
Base/Body (Desktop): 15px
Base/Body (Mobile): 16px
Small Text: 14px (0.875rem)
Tiny Text: 12px (0.75rem)
Micro Text: 11px (used for timestamps)
Mini Text: 10px (used for badges)

/* UI ELEMENTS */
Button Text: 14px, font-weight: 500
Tab Text: 14px, font-weight: 500
Input Text: 15px (Desktop), 16px (Mobile - iOS zoom prevention!)
Sidebar Items: 14px, font-weight: 500

/* TABLE */
Table Headers: 12px, font-weight: 600, uppercase, tracking-wide
Table Cells: 14px, font-weight: 400

/* CONVERSATION LIST */
Customer Name: 14px (sm), font-weight: 600 (unread) | 500 (read)
Customer Email: 12px (xs), font-weight: 400, color: muted
Last Message: 13-14px (xs-sm), font-weight: 600 (unread) | 400 (read)
Timestamp: 11px (xs), font-weight: 400, color: muted
Badges: 11-12px (xs), font-weight: 600-700
```

### 2.3 Line Heights

```css
Headlines: 1.2 - 1.4
Body: 1.5 - 1.7
UI Elements: 1.4 - 1.5
Tight (Labels): 1.2
Relaxed (Reading): 1.7
```

### 2.4 Letter Spacing

```css
Headlines (H1-H2): -0.02em (tight)
Subheadlines (H3-H4): -0.01em (slightly tight)
Body: 0em (normal)
UI Elements: 0em
Uppercase Labels: 0.02em - 0.05em (wide)
```

---

## 3. SPACING & LAYOUT

### 3.1 Spacing Scale (Tailwind-based)

```css
Base Unit: 4px

Scale:
0.5 = 2px
1   = 4px
1.5 = 6px
2   = 8px
2.5 = 10px
3   = 12px
3.5 = 14px
4   = 16px
5   = 20px
6   = 24px
7   = 28px
8   = 32px
9   = 36px
10  = 40px
11  = 44px
12  = 48px
14  = 56px
16  = 64px
20  = 80px
24  = 96px
```

### 3.2 Container & Layout

```css
/* Max Widths */
Max Content Width: 1600px (2xl breakpoint)
Sidebar Width (Expanded): 260px
Sidebar Width (Collapsed): 64px
Content Padding: 16px (1rem)

/* Column Widths (Live Chat Dashboard) */
Conversation List: 
  - Mobile: 100%
  - md: 300px
  - lg: 300px
  - xl: 320px

Chat Thread (Center):
  - flex-1 (fluid, fills remaining space)
  - min-width: 280px

Customer Info Panel (Right):
  - hidden on mobile & tablet
  - lg: 340px
  - xl: 340px
  - 2xl: 380px

/* Padding Standards */
Page Padding: 16px (mobile), 24px (desktop)
Card Padding: 16px (mobile), 24px (desktop)
Section Padding: 12px - 16px
Button Padding: 10px 16px (default)
Input Padding: 10px 12px

/* Gaps */
Gap between Cards: 16px - 24px
Gap between Sections: 24px - 32px
Gap in Flexbox: 8px - 12px (common)
```

### 3.3 Border Radius

```css
--radius-xs: 6px   /* Small elements, inputs */
--radius-sm: 8px   /* Cards, buttons (default) */
--radius-md: 12px  /* Modals, larger cards */
--radius-lg: 16px  /* Message bubbles */
--radius-xl: 24px  /* Hero elements */

Usage:
Cards: 8px (sm)
Buttons: 6px (md from Tailwind)
Inputs: 6px (md)
Modals: 12px (md)
Badges: 6px (md) or 9999px (full/pill)
Avatars: 9999px (full/round)
Message Bubbles: 16px (lg) with pointed corners
```

---

## 4. SHADOW SYSTEM

### 4.1 Elevation Shadows

```css
/* XS - Subtle lift */
--elevation-xs: 0 1px 2px 0 rgba(15, 23, 42, 0.04);
Usage: Inputs (resting), Small cards

/* SM - Card resting */
--elevation-sm: 0 1px 3px 0 rgba(15, 23, 42, 0.06), 
                0 1px 2px -1px rgba(15, 23, 42, 0.04);
Usage: Cards, Conversation List, Sidebar

/* MD - Card hover */
--elevation-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 
                0 2px 4px -2px rgba(15, 23, 42, 0.06);
Usage: Card hover, Message bubble, Inputs (focused)

/* LG - Elevated panels */
--elevation-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 
                0 4px 6px -4px rgba(15, 23, 42, 0.06);
Usage: Dropdowns, Popovers

/* XL - Modals */
--elevation-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 
                0 8px 10px -6px rgba(15, 23, 42, 0.06);
Usage: Modals, Large overlays

/* 2XL - Hero elements */
--elevation-2xl: 0 25px 50px -12px rgba(15, 23, 42, 0.12);
Usage: Large modals, Full-page overlays
```

### 4.2 Widget Shadow (Borderless Floating)

```css
/* 4-Layer Premium Shadows - Resting */
.shadow-widget {
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.04);
}

/* 4-Layer Premium Shadows - Hover */
.shadow-widget-hover {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.06),
    0 8px 16px rgba(0, 0, 0, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.08);
}

/* Message Bubbles (Softer) */
.shadow-message {
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### 4.3 Shadow Usage Map

```
Sidebar: shadow-elevation-sm
Conversation List Column: shadow-elevation-sm
Chat Window Column: shadow-elevation-sm
Customer Info Panel: shadow-elevation-sm
Cards (resting): shadow-elevation-xs or shadow-elevation-sm
Cards (hover): shadow-elevation-md
Message Bubbles: shadow-elevation-xs - shadow-elevation-sm
Buttons: shadow-elevation-sm (primary), none (ghost)
Dropdowns/Popovers: shadow-elevation-lg
Modals: shadow-elevation-xl
Toasts: shadow-elevation-lg
```

---

## 5. COMPLETE CSS VARIABLES

```css
:root {
  /* Colors (HSL format for Tailwind compatibility) */
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;
  --primary: 235 100% 71%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 14% 96%;
  --secondary-foreground: 222 47% 11%;
  --muted: 220 14% 96%;
  --muted-foreground: 215 16% 47%;
  --accent: 235 100% 97%;
  --accent-foreground: 235 100% 71%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --success: 142 71% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 0 0% 100%;
  --info: 217 91% 60%;
  --info-foreground: 0 0% 100%;
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 235 100% 71%;
  
  /* Elevation */
  --elevation-xs: 0 1px 2px 0 rgba(15, 23, 42, 0.04);
  --elevation-sm: 0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04);
  --elevation-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06);
  --elevation-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.06);
  --elevation-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.06);
  --elevation-2xl: 0 25px 50px -12px rgba(15, 23, 42, 0.12);
  
  /* Border Radius */
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius: var(--radius-sm);
  
  /* Motion */
  --motion-fast: 120ms;
  --motion-base: 200ms;
  --motion-moderate: 300ms;
  --motion-slow: 400ms;
  --motion-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

---

## 6. LAYOUT STRUCTURE

### 6.1 Overall Dashboard Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  Sidebar (Left) — DARK                                           │
│  - Logo                                                          │
│  - Navigation Tabs                                               │
│  - AI Usage Meter                                                │
│  - Billing Link                                                  │
│  - User Profile                                                  │
│                                                                  │
│  Width: 260px (expanded) | 64px (collapsed)                     │
│  Background: #18191B                                            │
│  Border Right: #2D2E30                                          │
│  Position: Fixed (Mobile drawer) | Static (Desktop)             │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│  MAIN CONTENT AREA (3-Column Layout for Live Chat)              │
├──────────────────┬───────────────────────┬───────────────────────┤
│ Column 1         │ Column 2              │ Column 3              │
│ Conversation     │ Chat Thread           │ Customer Info         │
│ List             │ (Messages)            │ (Right Sidebar)       │
│                  │                       │                       │
│ Width:           │ Width:                │ Width:                │
│ - Mobile: 100%   │ - flex-1 (fluid)      │ - Hidden on mobile   │
│ - md: 300px      │ - min: 280px          │ - lg: 340px          │
│ - lg: 300px      │                       │ - xl: 340px          │
│ - xl: 320px      │                       │ - 2xl: 380px         │
│                  │                       │                       │
│ BG: #F9FAFB      │ BG: #FFFFFF           │ BG: #FFFFFF          │
│ Border: Right    │ Border: None          │ Border: Left         │
│ Shadow: sm       │ Shadow: sm            │ Shadow: sm           │
└──────────────────┴───────────────────────┴───────────────────────┘
```

### 6.2 Layout Dimensions

```css
/* Sidebar */
Sidebar Expanded: 260px
Sidebar Collapsed: 64px
Sidebar Mobile: Drawer (full width overlay)

/* Header (if exists) */
Header Height: 64px
Header Background: #FFFFFF
Header Border Bottom: #E5E7EB
Header Shadow: elevation-sm

/* Content Heights */
Full Height: calc(100vh) or h-full
Content Area: h-full (fills available space)
Overflow: overflow-y-auto (scrollable)

/* Responsive Breakpoints (Tailwind) */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 7. SIDEBAR NAVIGATION

### 7.1 Complete Sidebar Design

```html
<aside class="sidebar">
  <!-- Logo Section -->
  <div class="sidebar-header">
    <img src="/logo.png" width="40" height="40" />
    <span class="logo-text">Repl<strong>AI</strong>now</span>
  </div>
  
  <!-- Navigation Items -->
  <nav class="sidebar-nav">
    <a href="/live-chats" class="nav-item active">
      <MessageSquare class="nav-icon" />
      <span class="nav-label">Conversations</span>
      <span class="nav-badge">12</span>
    </a>
    
    <a href="/mails" class="nav-item">
      <Mail class="nav-icon" />
      <span class="nav-label">Mails</span>
      <span class="nav-badge">5</span>
    </a>
    
    <a href="/whatsapp" class="nav-item nav-item-disabled">
      <Phone class="nav-icon" />
      <span class="nav-label">WhatsApp</span>
      <span class="nav-coming-soon">Coming Soon</span>
    </a>
    
    <a href="/knowledge" class="nav-item">
      <Brain class="nav-icon" />
      <span class="nav-label">Knowledge</span>
    </a>
    
    <a href="/settings" class="nav-item">
      <Settings class="nav-icon" />
      <span class="nav-label">Settings</span>
    </a>
  </nav>
  
  <!-- AI Usage Meter -->
  <div class="ai-usage">
    <div class="usage-header">
      <span class="usage-label">AI USAGE</span>
      <span class="usage-count">1,247 / 3,000</span>
    </div>
    <div class="usage-bar">
      <div class="usage-fill" style="width: 41.6%"></div>
    </div>
    <div class="usage-footer">
      <span class="usage-plan">🚀 Launch</span>
      <span class="usage-percentage">42%</span>
    </div>
  </div>
  
  <!-- Billing Link -->
  <a href="/billing" class="nav-item">
    <CreditCard class="nav-icon" />
    <span class="nav-label">Billing</span>
  </a>
  
  <!-- User Profile -->
  <button class="user-profile">
    <div class="user-avatar">JD</div>
    <div class="user-info">
      <span class="user-name">John Doe</span>
      <span class="user-status"><span class="status-dot"></span>Online</span>
    </div>
  </button>
</aside>
```

### 7.2 Sidebar CSS

```css
/* Sidebar Container */
.sidebar {
  width: 260px;
  height: 100vh;
  background: #18191B;
  border-right: 1px solid #2D2E30;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 0 12px rgba(0, 0, 0, 0.15);
}

/* Logo Section */
.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #2D2E30;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-text {
  font-size: 18px;
  font-weight: 500;
  color: #E5E7EB;
  letter-spacing: -0.01em;
}

.logo-text strong {
  font-weight: 700;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navigation */
.sidebar-nav {
  flex: 1;
  padding: 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #9CA3AF;
  text-decoration: none;
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  min-height: 44px; /* Touch target */
}

.nav-item:hover {
  background: #252627;
  color: #FFFFFF;
}

.nav-item.active {
  background: #2D2E30;
  color: #FFFFFF;
  letter-spacing: -0.01em;
}

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 200ms;
}

.nav-item:hover .nav-icon {
  transform: scale(1.05);
}

.nav-label {
  flex: 1;
}

.nav-badge {
  background: #EF4444;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.nav-coming-soon {
  background: #2D2E30;
  color: #9CA3AF;
  border: 1px solid #3D3E40;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
}

.nav-item-disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* AI Usage Section */
.ai-usage {
  margin: 8px;
  padding: 12px;
  background: #252627;
  border: 1px solid #2D2E30;
  border-radius: 8px;
}

.usage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.usage-label {
  font-size: 11px;
  font-weight: 700;
  color: #9CA3AF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.usage-count {
  font-size: 11px;
  font-weight: 700;
  color: #FFFFFF;
}

.usage-bar {
  width: 100%;
  height: 8px;
  background: #18191B;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 6px;
}

.usage-fill {
  height: 100%;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  border-radius: 9999px;
  transition: width 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.usage-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.usage-plan {
  font-size: 10px;
  color: #8A8A8A;
}

.usage-percentage {
  font-size: 10px;
  font-weight: 700;
  color: #10B981; /* Green */
}

/* User Profile */
.user-profile {
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #2D2E30;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 200ms;
}

.user-profile:hover {
  background: #252627;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  display: flex;
  align-items: center;
  justify-center;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
}

.user-status {
  font-size: 12px;
  color: #8A8A8A;
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 9999px;
}

/* Collapsed State */
.sidebar.collapsed {
  width: 64px;
}

.sidebar.collapsed .logo-text,
.sidebar.collapsed .nav-label,
.sidebar.collapsed .nav-badge,
.sidebar.collapsed .user-info,
.sidebar.collapsed .ai-usage {
  display: none;
}

.sidebar.collapsed .nav-item,
.sidebar.collapsed .user-profile {
  justify-content: center;
  padding: 10px;
}
```

---

## 8. LIVE CHAT DASHBOARD

### 8.1 Layout Structure

**3-Column Layout**:
1. **Left**: Conversation List (300-320px)
2. **Center**: Chat Thread / Messages (flex-1, fluid)
3. **Right**: Customer Info Panel (340-380px, hidden on mobile/tablet)

### 8.2 Conversation List (Left Column)

#### HTML Structure

```html
<div class="conversation-list-column">
  <!-- Header with Search -->
  <div class="column-header">
    <div class="header-title-row">
      <h2 class="title">Conversations</h2>
      <div class="live-badge">
        <span class="pulse-dot"></span>
        <span class="live-text">LIVE</span>
      </div>
    </div>
    
    <div class="search-box">
      <Search class="search-icon" />
      <input type="search" placeholder="Search conversations..." />
    </div>
  </div>
  
  <!-- Status Filter Tabs -->
  <div class="status-filter">
    <button class="status-tab active">Active</button>
    <button class="status-tab">Resolved</button>
  </div>
  
  <!-- Category Filter (Collapsible) -->
  <button class="category-filter-toggle">
    <span>All Categories</span>
    <ChevronDown />
  </button>
  
  <div class="category-chips">
    <button class="chip chip-active">All</button>
    <button class="chip">Question</button>
    <button class="chip">Complaint</button>
    <button class="chip">Order</button>
    <button class="chip">Proactive</button>
  </div>
  
  <!-- Agent Request Toggle -->
  <button class="agent-request-toggle">
    <HandHeart class="icon" />
    <span>Agent Requests</span>
  </button>
  
  <!-- Conversation Items (Virtualized List) -->
  <div class="conversation-list">
    <!-- See Conversation Item section below -->
  </div>
</div>
```

#### CSS for Conversation List Column

```css
.conversation-list-column {
  width: 300px; /* md breakpoint */
  height: 100%;
  background: #F9FAFB;
  border-right: 1px solid #E5E7EB;
  display: flex;
  flex-direction: column;
  box-shadow: var(--elevation-sm);
}

/* Header */
.column-header {
  padding: 16px;
  background: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  flex-shrink: 0;
}

.header-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.01em;
}

.live-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(107, 124, 255, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: #6B7CFF;
  border-radius: 9999px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.live-text {
  font-size: 12px;
  font-weight: 700;
  color: #6B7CFF;
}

/* Search Box */
.search-box {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #64748B;
}

.search-box input {
  width: 100%;
  height: 40px;
  padding-left: 36px;
  padding-right: 12px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  background: #FFFFFF;
  box-shadow: var(--elevation-xs);
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.search-box input:hover {
  box-shadow: var(--elevation-sm);
}

.search-box input:focus {
  outline: none;
  border-color: #6B7CFF;
  box-shadow: var(--elevation-md), 0 0 0 3px rgba(107, 124, 255, 0.1);
}

/* Status Filter Tabs */
.status-filter {
  display: flex;
  border-bottom: 1px solid #E5E7EB;
  background: #FFFFFF;
  flex-shrink: 0;
}

.status-tab {
  flex: 1;
  padding: 12px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  cursor: pointer;
  transition: all 200ms;
}

.status-tab:hover {
  background: #F9FAFB;
  color: #0F172A;
}

.status-tab.active {
  color: #6B7CFF;
  border-bottom-color: #6B7CFF;
  font-weight: 600;
}

/* Category Chips */
.category-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid #E5E7EB;
  background: rgba(248, 250, 252, 0.5);
}

.chip {
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  color: #64748B;
  cursor: pointer;
  transition: all 200ms;
}

.chip:hover {
  background: #F9FAFB;
  border-color: #CBD5E1;
  color: #0F172A;
}

.chip-active,
.chip.active {
  background: #6B7CFF;
  border-color: #6B7CFF;
  color: #FFFFFF;
  font-weight: 600;
}

/* Conversation List */
.conversation-list {
  flex: 1;
  overflow-y: auto;
  background: #F9FAFB;
}
```

---

### 8.3 Conversation Item (CRITICAL!)

This is THE most important component - pixel-perfect specs!

#### HTML Structure

```html
<div class="conversation-item">
  <!-- Header Row -->
  <div class="item-header">
    <div class="avatar-section">
      <div class="avatar">SK</div>
      <div class="customer-info">
        <div class="customer-name">Sarah Klein</div>
        <div class="customer-email">sarah@example.com</div>
      </div>
    </div>
    <div class="timestamp">vor 5 Min</div>
  </div>
  
  <!-- Preview Row -->
  <div class="preview-row">
    <div class="unread-dot"></div>
    <span class="sender-label">CUSTOMER:</span>
    <span class="message-preview">Wo ist meine Bestellung?</span>
  </div>
  
  <!-- Badges Row -->
  <div class="badges-row">
    <span class="badge badge-unread">1 new</span>
    <span class="badge badge-agent">👤 John Doe</span>
    <span class="badge badge-urgent">🔥 URGENT</span>
  </div>
</div>
```

#### CSS for Conversation Item (PIXEL-PERFECT!)

```css
.conversation-item {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
  background: #FFFFFF;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  min-height: 72px;
}

.conversation-item:hover {
  background: #F8FAFC;
}

.conversation-item:active {
  background: #F1F5F9;
}

.conversation-item.selected {
  background: #F8FAFC;
}

.conversation-item.unread {
  background: #FEFEFE;
}

/* Header Row */
.item-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.avatar-section {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

/* Avatar */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: var(--elevation-sm);
}

/* Customer Info */
.customer-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.customer-name {
  font-size: 14px;
  font-weight: 600; /* 600 if unread, 500 if read */
  color: #0F172A;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}

.conversation-item.unread .customer-name {
  font-weight: 700;
}

.customer-email {
  font-size: 12px;
  font-weight: 400;
  color: #64748B;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}

/* Timestamp */
.timestamp {
  font-size: 11px;
  color: #94A3B8;
  flex-shrink: 0;
}

/* Preview Row */
.preview-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  min-width: 0;
  overflow: hidden;
}

.unread-dot {
  width: 6px;
  height: 6px;
  background: #0F172A;
  border-radius: 9999px;
  flex-shrink: 0;
}

.sender-label {
  font-size: 11px;
  font-weight: 600;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.message-preview {
  font-size: 13px;
  font-weight: 400; /* 600 if unread, 400 if read */
  color: #64748B;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 220px;
  flex: 1;
}

.conversation-item.unread .message-preview {
  font-weight: 600;
  color: #0F172A;
}

/* Badges Row */
.badges-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

/* Badge Variants */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
}

.badge-unread {
  background: #0F172A;
  color: #FFFFFF;
  box-shadow: var(--elevation-xs);
}

.badge-agent {
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  color: #FFFFFF;
  box-shadow: var(--elevation-sm);
}

.badge-ai {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #10B981;
}

.badge-available {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #10B981;
}

.badge-urgent {
  background: #F59E0B;
  color: #FFFFFF;
  border: 1px solid rgba(245, 158, 11, 0.8);
  box-shadow: var(--elevation-sm);
}

.badge-closed {
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  color: #64748B;
}

.badge-proactive {
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  color: #A855F7;
}
```

### 8.4 EXACT Dimensions Summary for Conversation Item

```
Total Height: ~88px (min-height: 72px, varies with content)
Padding: 12px 16px (top/bottom left/right)

AVATAR:
- Size: 40px × 40px
- Border-Radius: 9999px (full circle)
- Gradient: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%)
- Font-Size: 14px
- Font-Weight: 700
- Shadow: var(--elevation-sm)

CUSTOMER NAME:
- Font-Size: 14px
- Font-Weight: 600 (unread) | 500 (read)
- Color: #0F172A
- Letter-Spacing: -0.01em
- Max-Width: 200px
- Overflow: ellipsis

CUSTOMER EMAIL:
- Font-Size: 12px
- Font-Weight: 400
- Color: #64748B
- Max-Width: 200px

TIMESTAMP:
- Font-Size: 11px
- Color: #94A3B8

MESSAGE PREVIEW:
- Font-Size: 13px
- Font-Weight: 600 (unread) | 400 (read)
- Color: #0F172A (unread) | #64748B (read)
- Max-Width: 220px
- Line-Clamp: 1 line

UNREAD DOT:
- Size: 6px × 6px
- Background: #0F172A
- Border-Radius: full

BADGES:
- Padding: 4px 8px
- Border-Radius: 6px
- Font-Size: 11px
- Font-Weight: 700
- Gap: 6px (between badges)
```

---

## TO BE CONTINUED IN NEXT PART...

This is Part 1 of the complete export. Due to size limitations, I'll create additional files for:

- Part 2: Chat Window & Messages (Center Column)
- Part 3: Customer Info Panel (Right Column)
- Part 4: Mail Dashboard
- Part 5: Components & Types
- Part 6: Example Data
- Part 7: Integration Guide

**Would you like me to continue with the next parts?**

