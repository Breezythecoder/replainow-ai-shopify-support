# 🎨 REPLAINOW DASHBOARD — DESIGN EXPORT PART 3

## CUSTOMER INFO PANEL & TYPESCRIPT TYPES

---

## 9. CUSTOMER INFO PANEL (Right Column)

The right sidebar shows comprehensive customer information, order details, AI insights, and customer journey.

### 9.1 Overall Structure

```html
<div class="customer-info-panel">
  <!-- Section 1: Customer Header -->
  <section class="customer-header-section">
    <!-- Customer Card -->
  </section>
  
  <!-- Section 2: Current Order -->
  <section class="order-section">
    <!-- Order Card -->
  </section>
  
  <!-- Section 3: AI Insights -->
  <section class="insights-section">
    <!-- AI Insights Grid -->
  </section>
  
  <!-- Section 4: Customer Journey -->
  <section class="journey-section">
    <!-- Journey Timeline -->
  </section>
</div>
```

### 9.2 Customer Header Section

```html
<section class="customer-header-section">
  <!-- Avatar & Name -->
  <div class="customer-header-card">
    <div class="customer-avatar-large">SK</div>
    
    <div class="customer-title-group">
      <div class="customer-name-row">
        <h3 class="customer-name-large">Sarah Klein</h3>
        <span class="verified-badge">✓ Verified</span>
        <a href="#" class="shopify-link-icon" title="View in Shopify">
          <ExternalLink />
        </a>
      </div>
      
      <p class="customer-email-large">sarah.klein@example.com</p>
    </div>
  </div>
  
  <!-- Customer Tags -->
  <div class="customer-tags">
    <span class="tag tag-vip">VIP</span>
    <span class="tag tag-returning">Returning</span>
  </div>
  
  <!-- Customer Stats -->
  <div class="customer-stats-grid">
    <div class="stat-row">
      <span class="stat-label">Phone</span>
      <span class="stat-value">+49 123 456 789</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Total Orders</span>
      <span class="stat-value">12</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Total Spent</span>
      <span class="stat-value">EUR 1,284.50</span>
    </div>
  </div>
</section>
```

### CSS for Customer Header

```css
/* ═══════════════════════════════════════════════════════════════════
 * CUSTOMER INFO PANEL (Right Column)
 * ═══════════════════════════════════════════════════════════════════ */
.customer-info-panel {
  width: 340px; /* lg: 340px, xl: 340px, 2xl: 380px */
  height: 100%;
  background: #FFFFFF;
  border-left: 1px solid #E5E7EB;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: var(--elevation-sm);
}

/* Large screens */
@media (min-width: 1536px) {
  .customer-info-panel {
    width: 380px;
  }
}

/* Hide on mobile & tablet */
@media (max-width: 1023px) {
  .customer-info-panel {
    display: none;
  }
}

/* ═══════════════════════════════════════════════════════════════════
 * CUSTOMER HEADER SECTION
 * ═══════════════════════════════════════════════════════════════════ */
.customer-header-section {
  padding: 24px;
  border-bottom: 1px solid #F3F4F6;
}

.customer-header-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

/* Large Avatar */
.customer-avatar-large {
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  box-shadow: var(--elevation-sm);
}

.customer-title-group {
  text-align: center;
  width: 100%;
}

.customer-name-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 4px;
}

.customer-name-large {
  font-size: 18px;
  font-weight: 700;
  color: #0F172A;
  margin: 0;
}

.verified-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  color: #10B981;
}

.shopify-link-icon {
  color: #94A3B8;
  transition: color 200ms;
  display: inline-flex;
}

.shopify-link-icon:hover {
  color: #5C6AC4; /* Shopify purple */
}

.customer-email-large {
  font-size: 14px;
  color: #64748B;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Customer Tags */
.customer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 16px;
}

.tag {
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
}

.tag-vip {
  background: rgba(245, 158, 11, 0.1);
  color: #D97706;
}

.tag-returning {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}

/* Customer Stats Grid */
.customer-stats-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #F9FAFB;
}

.stat-row:last-child {
  border-bottom: none;
}

.stat-label {
  font-size: 14px;
  color: #64748B;
}

.stat-value {
  font-size: 14px;
  font-weight: 700;
  color: #0F172A;
}
```

---

### 9.3 Order Section

```html
<section class="order-section">
  <!-- Collapsible Header -->
  <button class="section-header-toggle">
    <h3 class="section-title">CURRENT ORDER</h3>
    <ChevronUp class="toggle-icon" />
  </button>
  
  <!-- Order Card -->
  <div class="order-card">
    <div class="order-card-header">
      <span class="order-number">#12847</span>
      <span class="order-status-badge status-fulfilled">Fulfilled</span>
    </div>
    
    <div class="order-meta">
      3 items • Ordered Nov 28, 2024
    </div>
    
    <!-- Order Products -->
    <div class="order-products">
      <div class="order-product-item">
        <div class="product-image-small">
          <img src="/product.jpg" alt="Product" />
        </div>
        <div class="product-item-info">
          <div class="product-item-title">Premium Wireless Headphones</div>
          <div class="product-item-meta">
            <span>Qty: 1</span>
            <span>•</span>
            <span class="product-item-price">EUR 129.99</span>
          </div>
        </div>
      </div>
      
      <!-- More product items... -->
    </div>
    
    <!-- Order Total -->
    <div class="order-total-row">
      <span class="order-total-label">Total</span>
      <span class="order-total-value">EUR 389.97</span>
    </div>
    
    <!-- View in Shopify Button -->
    <a href="#" class="btn-view-shopify">
      <ExternalLink class="btn-icon" />
      View Order in Shopify
    </a>
    
    <!-- Track Package Button (if has tracking) -->
    <a href="#" class="btn-track-package">
      Track Package
    </a>
  </div>
</section>
```

### CSS for Order Section

```css
/* ═══════════════════════════════════════════════════════════════════
 * ORDER SECTION
 * ═══════════════════════════════════════════════════════════════════ */
.order-section {
  padding: 24px;
  border-bottom: 1px solid #F3F4F6;
}

/* Section Header (Collapsible) */
.section-header-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 16px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 200ms;
}

.section-header-toggle:hover {
  opacity: 0.7;
}

.section-title {
  font-size: 12px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
}

.toggle-icon {
  width: 16px;
  height: 16px;
  color: #94A3B8;
}

/* Order Card */
.order-card {
  padding: 16px;
  background: rgba(248, 249, 255, 1); /* Soft purple tint */
  border: 1px solid rgba(224, 229, 255, 1);
  border-radius: 12px;
}

.order-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.order-number {
  font-size: 14px;
  font-weight: 700;
  color: #0F172A;
}

.order-status-badge {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  border: 1px solid;
}

.status-fulfilled {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
  color: #059669;
}

.status-pending {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.2);
  color: #D97706;
}

.status-cancelled {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #DC2626;
}

.order-meta {
  font-size: 12px;
  color: #64748B;
  margin-bottom: 12px;
}

/* Order Products */
.order-products {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid rgba(224, 229, 255, 1);
  margin-bottom: 12px;
}

.order-product-item {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #FFFFFF;
  border: 1px solid #F3F4F6;
  border-radius: 8px;
  transition: all 200ms;
}

.order-product-item:hover {
  border-color: rgba(208, 215, 255, 1);
  background: rgba(250, 251, 255, 1);
}

.product-image-small {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #F9FAFB;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-item-info {
  flex: 1;
  min-width: 0;
}

.product-item-title {
  font-size: 12px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-item-meta {
  font-size: 11px;
  color: #64748B;
  display: flex;
  align-items: center;
  gap: 4px;
}

.product-item-price {
  font-weight: 700;
  color: #0F172A;
}

/* Order Total */
.order-total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(224, 229, 255, 1);
  margin-bottom: 12px;
}

.order-total-label {
  font-size: 16px;
  font-weight: 700;
  color: #0F172A;
}

.order-total-value {
  font-size: 16px;
  font-weight: 700;
  color: #0F172A;
}

/* Buttons */
.btn-view-shopify,
.btn-track-package {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.btn-view-shopify {
  background: #5C6AC4; /* Shopify purple */
  color: #FFFFFF;
  margin-bottom: 8px;
}

.btn-view-shopify:hover {
  background: #4A5AB0;
  transform: translateY(-2px);
  box-shadow: var(--elevation-md);
}

.btn-track-package {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  color: #0F172A;
}

.btn-track-package:hover {
  background: #F8FAFC;
  border-color: #CBD5E1;
  box-shadow: var(--elevation-sm);
}

.btn-icon {
  width: 14px;
  height: 14px;
}
```

---

### 9.4 AI Insights Section

```html
<section class="insights-section">
  <button class="section-header-toggle">
    <h3 class="section-title">AI INSIGHTS</h3>
    <ChevronUp class="toggle-icon" />
  </button>
  
  <div class="insights-grid">
    <div class="insight-row">
      <span class="insight-label">Sentiment</span>
      <span class="insight-value">Neutral → Positive</span>
    </div>
    
    <div class="insight-row">
      <span class="insight-label">Topic</span>
      <span class="insight-value">Order Status</span>
    </div>
    
    <div class="insight-row">
      <span class="insight-label">Confidence</span>
      <span class="insight-value">94%</span>
    </div>
    
    <div class="insight-row">
      <span class="insight-label">Action</span>
      <span class="insight-value">Agent Requested</span>
    </div>
    
    <div class="insight-row">
      <span class="insight-label">Conversation</span>
      <span class="insight-value">12 messages • 15 min</span>
    </div>
    
    <div class="insight-row">
      <span class="insight-label">Resolution</span>
      <span class="insight-value">Resolved</span>
    </div>
    
    <div class="insight-row">
      <span class="insight-label">Language</span>
      <span class="insight-value">🇩🇪 German</span>
    </div>
  </div>
</section>
```

### CSS for AI Insights

```css
.insights-section {
  padding: 24px;
  border-bottom: 1px solid #F3F4F6;
}

.insights-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.insight-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #F9FAFB;
  border-radius: 8px;
}

.insight-label {
  font-size: 12px;
  color: #64748B;
  flex-shrink: 0;
}

.insight-value {
  font-size: 12px;
  font-weight: 700;
  color: #0F172A;
  text-align: right;
  white-space: nowrap;
}
```

---

## 10. TYPESCRIPT TYPES

Complete TypeScript type definitions for all dashboard entities.

### 10.1 Core Types

```typescript
/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CORE DATABASE TYPES
 * ═══════════════════════════════════════════════════════════════════════════
 */

export type ConversationStatus = 'open' | 'pending' | 'resolved';
export type MessageSender = 'customer' | 'ai' | 'agent' | 'tracking_bot' | 'product_bot';
export type MessageType = 'text' | 'tracking_info' | 'product_card' | 'product_suggestion' | 
                          'system' | 'discount_card' | 'checkout_link';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';
export type FulfillmentStatus = 'FULFILLED' | 'PARTIAL' | 'UNFULFILLED' | 'RESTOCKED' | 'SCHEDULED';
```

### 10.2 Conversation Type

```typescript
/**
 * CONVERSATION - Main conversation entity
 */
export interface Conversation {
  // Core fields
  conversation_id: string;
  id?: string; // Alias for backwards compatibility
  shop_id: string;
  customer_name: string;
  customer_email: string;
  status: ConversationStatus;
  started_at: string;
  last_message_at: string;
  latest_message_preview: string;
  latest_message_sender: MessageSender;
  wants_human_agent: boolean;
  category: string;
  auto_mode: boolean;
  
  // Multi-agent fields
  handled_by: string | null;
  handled_by_name: string | null;
  handled_at: string | null;
  last_agent_activity: string | null;
  
  // Session data
  visitor_id: string;
  session_id: string;
  page_views_count: number;
  events_count: number;
  utm_source: string | null;
  utm_medium: string | null;
  device_type: DeviceType;
  
  // Chat context
  chat_page_url: string;
  chat_page_type: string;
  chat_product_handle: string | null;
  chat_cart_value: number | null;
  
  // Conversion
  converted: boolean;
  conversion_value: number | null;
  conversion_at: string | null;
  
  // AI Analysis
  ai_sentiment_start: string | null;
  ai_sentiment_end: string | null;
  ai_confidence_avg: number | null;
  ai_resolution_status: string | null;
  
  // Proactive fields
  proactive_trigger_id: string | null;
  
  // Computed
  message_count?: number;
}
```

### 10.3 Message Type

```typescript
/**
 * MESSAGE - Individual message in a conversation
 */
export interface Message {
  id: string;
  conversation_id: string;
  shop_id: string;
  sender: MessageSender;
  sender_name: string;
  content: string;
  type: MessageType;
  created_at: string;
  created_by_ai: boolean;
  is_visible: boolean;
  deleted_at: string | null;
  source: 'widget' | 'dashboard' | 'api';
  
  // Optional metadata
  metadata?: {
    category?: string;
    language?: string;
    sentiment?: string;
    confidence?: number;
    costs?: {
      totalCost: number;
      chatInputCost: number;
      chatOutputCost: number;
    };
    // Product card data
    product_id?: string;
    product_title?: string;
    product_price?: string;
    product_image?: string;
    product_url?: string;
    inventory_quantity?: number;
    description?: string;
    // Discount card data
    discount_data?: {
      code: string;
      type: 'PERCENTAGE' | 'FIXED' | 'FREE_SHIPPING';
      value: string;
      expires_at: string | null;
      usage_limit: number | null;
      once_per_customer: boolean;
    };
    // Checkout link data
    checkout_data?: {
      url: string;
      total_price: string;
      currency: string;
      products: Array<{
        title: string;
        quantity: number;
        price: string;
      }>;
      discount?: {
        code: string;
        amount: string;
      };
    };
  } | null;
  
  file_url?: string | null;
  file_mime?: string | null;
  is_handoff_trigger?: boolean;
  reply_to_id?: string | null;
  token_count?: number | null;
  total_cost_usd?: number | null;
  
  // Multi-agent fields
  created_by_user_id?: string | null;
  agent_display_name?: string | null;
  agent_avatar_url?: string | null;
  agent_chat_signature?: string | null;
}
```

### 10.4 Customer Type

```typescript
/**
 * CUSTOMER - Customer entity from Shopify
 */
export interface Customer {
  id: string;
  shop_id: string;
  shopify_customer_id: string;
  email: string;
  phone: string | null;
  first_name: string;
  last_name: string;
  orders_count: number;
  total_spent: number;
  currency: string;
  created_at: string;
}
```

### 10.5 Order Type

```typescript
/**
 * LINE ITEM - Product in an order
 */
export interface LineItem {
  line_item_id: string;
  id: string;
  product_id: string;
  variant_id: string;
  title: string;
  name?: string;
  quantity: number;
  price: number;
  image: string;
  sku?: string;
}

/**
 * TRACKING INFO - Shipping tracking
 */
export interface TrackingInfo {
  number: string;
  url: string;
  company: string;
}

/**
 * TRANSACTION - Payment transaction
 */
export interface Transaction {
  id: string;
  kind: string;
  gateway: string;
  amount: string;
  currency: string;
  status: string;
  parent_id: string | null;
}

/**
 * ORDER - Shopify order
 */
export interface Order {
  id: string;
  shop_id: string;
  shopify_order_id: string;
  order_number: string;
  customer_name: string;
  email: string;
  total_price: number;
  currency: string;
  financial_status: string;
  fulfillment_status: FulfillmentStatus;
  gateway: string | null;
  transactions: Transaction[] | null;
  line_items: LineItem[];
  tracking_info: TrackingInfo[];
  created_at: string;
}
```

### 10.6 Shop Type

```typescript
/**
 * SHOP - Shop configuration
 */
export interface Shop {
  id: string;
  shopify_domain: string;
  shop_name: string;
  created_at: string;
  
  // AI Identity Settings - Chat
  ai_name: string | null;
  ai_avatar_url: string | null;
  ai_signature: string | null;
  ai_greeting: string | null;
  ai_personality: string | null;
  
  // AI Identity Settings - Email
  agent_name: string | null;
  agent_image_url: string | null;
  agent_closing: string | null;
  
  // Logos
  chat_logo_header: string | null;
  shop_logo_url: string | null;
  
  // i18n
  shopify_primary_locale: string;
  user_selected_locale: string | null;
  effective_locale: string;
}
```

### 10.7 UI State Types

```typescript
/**
 * CONVERSATION FILTER - UI filter state
 */
export interface ConversationFilter {
  status?: ConversationStatus | 'all';
  search?: string;
  sender?: MessageSender;
  hasAgent?: boolean;
  converted?: boolean;
  dateFrom?: string;
  dateTo?: string;
}

/**
 * CONVERSATION STATS - Aggregated statistics
 */
export interface ConversationStats {
  total: number;
  open: number;
  pending: number;
  resolved: number;
  needsAttention: number;
  converted: number;
  conversionRate: number;
  avgResponseTime: number;
  avgResolutionTime: number;
}

/**
 * MESSAGE WITH METADATA - Extended message for UI
 */
export interface MessageWithMetadata extends Message {
  isOptimistic?: boolean;
  error?: string;
}
```

---

## 11. COMPONENT PROPS TYPES

TypeScript prop interfaces for React components.

### 11.1 Component Props

```typescript
/**
 * SIDEBAR PROPS
 */
export interface SidebarProps {
  conversationCount?: number;
  mailCount?: number;
  whatsappCount?: number;
  collapsed?: boolean;
  onToggle?: () => void;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

/**
 * CONVERSATION LIST PROPS
 */
export interface ConversationListProps {
  shopId: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
  filterAgentRequests?: boolean;
  activeFilter?: string;
  activeStatus?: string;
  searchQuery?: string;
  bulkMode?: boolean;
  onToggleBulkMode?: () => void;
}

/**
 * CONVERSATION ITEM PROPS
 */
export interface ConversationItemProps {
  conversation: Conversation;
  isSelected?: boolean;
  isChecked?: boolean;
  onClick?: () => void;
  onToggleSelect?: () => void;
}

/**
 * CHAT WINDOW PROPS
 */
export interface ChatWindowProps {
  conversation: Conversation;
  shopId: string;
  onBackToList?: () => void;
}

/**
 * MESSAGE BUBBLE PROPS
 */
export interface MessageBubbleProps {
  message: Message;
  shopId: string;
  isOptimistic?: boolean;
  customerName?: string;
}

/**
 * CUSTOMER INFO PANEL PROPS
 */
export interface CustomerInfoPanelProps {
  conversation: Conversation;
  order?: Order | null;
  customer?: Customer | null;
}
```

---

## TO BE CONTINUED...

**Next Parts:**
- Part 4: Complete React Components (Copy-Paste Ready)
- Part 5: Example JSON Data
- Part 6: Integration Guide

---

