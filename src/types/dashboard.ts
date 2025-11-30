/**
 * 🎯 REPLAINOW DASHBOARD - TYPESCRIPT TYPES
 * Complete type definitions for Live Chat & Email Dashboard
 * Version: 1.0 Enterprise
 * Date: November 29, 2025
 */

/* ═══════════════════════════════════════════════════════════════════
 * CORE TYPES
 * ═══════════════════════════════════════════════════════════════════ */

export type ConversationStatus = 'open' | 'resolved' | 'snoozed';
export type MessageSender = 'customer' | 'ai' | 'agent';
export type MessageType = 'text' | 'product_card' | 'discount_card' | 'tracking_card' | 'order_card' | 'checkout_link';
export type SentimentType = 'positive' | 'neutral' | 'negative';
export type DeviceType = 'desktop' | 'mobile' | 'tablet';
export type ChatPageType = 'home' | 'product' | 'collection' | 'cart' | 'checkout' | 'account' | 'other';
export type FinancialStatus = 'pending' | 'authorized' | 'paid' | 'partially_paid' | 'refunded' | 'voided';
export type FulfillmentStatus = 'UNFULFILLED' | 'PARTIALLY_FULFILLED' | 'FULFILLED';

/* ═══════════════════════════════════════════════════════════════════
 * CONVERSATION
 * ═══════════════════════════════════════════════════════════════════ */

export interface Conversation {
  conversation_id: string;
  shop_id: string;
  
  // Customer Info
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  
  // Status
  status: ConversationStatus;
  started_at: string; // ISO 8601
  last_message_at: string; // ISO 8601
  closed_at?: string;
  
  // Latest Message
  latest_message_preview: string;
  latest_message_sender: MessageSender;
  
  // AI/Agent Handling
  wants_human_agent: boolean;
  category?: string; // "Order Status", "Product Question", "Complaint", etc.
  auto_mode: boolean;
  handled_by?: string; // agent_id
  handled_by_name?: string; // "John Doe"
  
  // Visitor Tracking
  visitor_id?: string;
  session_id?: string;
  device_type?: DeviceType;
  chat_page_url?: string;
  chat_page_type?: ChatPageType;
  
  // Conversion
  converted?: boolean;
  conversion_value?: number;
  
  // AI Metadata
  ai_sentiment_start?: SentimentType;
  ai_sentiment_end?: SentimentType;
  ai_confidence_avg?: number; // 0-100
  ai_resolution_status?: 'pending' | 'resolved' | 'escalated';
  
  // Stats
  message_count: number;
  unread_count?: number;
}

/* ═══════════════════════════════════════════════════════════════════
 * MESSAGE
 * ═══════════════════════════════════════════════════════════════════ */

export interface Message {
  id: string;
  conversation_id: string;
  shop_id: string;
  
  // Sender
  sender: MessageSender;
  sender_name: string;
  
  // Content
  content: string;
  type: MessageType;
  
  // Timestamps
  created_at: string; // ISO 8601
  updated_at?: string;
  
  // Metadata
  created_by_ai: boolean;
  is_visible: boolean;
  source: 'widget' | 'dashboard' | 'api' | 'email' | 'whatsapp';
  
  // i18n support
  translate?: boolean;  // If true, content is a translation key to be translated
  
  // Agent Info (if sender === 'agent')
  created_by_user_id?: string;
  agent_display_name?: string;
  agent_avatar_url?: string;
  agent_chat_signature?: string;
  
  // AI Metadata (if sender === 'ai')
  ai_model?: string;
  ai_confidence?: number; // 0-100
  ai_sentiment?: SentimentType;
  
  // Card Data (if type !== 'text')
  metadata?: MessageMetadata;
}

export interface MessageMetadata {
  // Product Card
  product_id?: string;
  product_title?: string;
  product_price?: string;
  product_image?: string;
  product_url?: string;
  inventory_quantity?: number;
  description?: string;
  
  // Discount Card
  discount_data?: {
    code: string;
    type: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_SHIPPING';
    value: string;
    expires_at?: string;
    usage_limit?: number;
    once_per_customer?: boolean;
  };
  
  // Tracking Card
  tracking_data?: {
    carrier: string;
    tracking_number: string;
    tracking_url?: string;
    status?: string;
  };
  
  // Order Card
  order_data?: {
    order_id: string;
    order_number: string;
    total: string;
    currency: string;
    status: string;
  };
  
  // Checkout Link Card
  checkout_data?: {
    checkout_url: string;
    products: Array<{
      title: string;
      quantity: number;
      price: string;
      image?: string;
    }>;
    subtotal: string;
    discount?: {
      code: string;
      type: 'PERCENTAGE' | 'FIXED_AMOUNT';
      percentage?: string;
      amount: string;
    };
    total: string;
    currency: string;
    expires_at?: string;
  };
}

/* ═══════════════════════════════════════════════════════════════════
 * CUSTOMER
 * ═══════════════════════════════════════════════════════════════════ */

export interface Customer {
  id: string;
  shop_id: string;
  
  // Shopify Data
  shopify_customer_id?: string; // gid://shopify/Customer/...
  email: string;
  phone?: string;
  first_name: string;
  last_name: string;
  
  // Stats
  orders_count: number;
  total_spent: number;
  currency: string;
  
  // Timestamps
  created_at: string; // ISO 8601
  updated_at?: string;
  
  // Tags & Flags
  tags?: string[];
  is_vip?: boolean;
  is_verified?: boolean;
  
  // Location (optional)
  country?: string;
  city?: string;
  
  // Address
  default_address?: {
    address1?: string;
    address2?: string;
    city: string;
    province?: string;
    zip: string;
    country: string;
    phone?: string;
  };
}

/* ═══════════════════════════════════════════════════════════════════
 * ORDER
 * ═══════════════════════════════════════════════════════════════════ */

export interface Order {
  id: string;
  shop_id: string;
  
  // Shopify Data
  shopify_order_id: string; // gid://shopify/Order/...
  order_number: string; // "#12847"
  
  // Customer
  customer_name: string;
  email: string;
  
  // Financial
  total_price: number;
  currency: string;
  financial_status: FinancialStatus;
  fulfillment_status: FulfillmentStatus;
  gateway?: string; // "Stripe", "PayPal", etc.
  
  // Line Items
  line_items: LineItem[];
  
  // Tracking
  tracking_info?: TrackingInfo[];
  
  // Timestamps
  created_at: string; // ISO 8601
  updated_at?: string;
  fulfilled_at?: string;
}

export interface LineItem {
  line_item_id: string;
  id: string; // gid://shopify/LineItem/...
  product_id: string;
  variant_id: string;
  title: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
  sku?: string;
}

export interface TrackingInfo {
  number: string;
  url?: string;
  company: string; // "DHL", "UPS", "FedEx", etc.
  status?: string;
}

/* ═══════════════════════════════════════════════════════════════════
 * SHOP (OPTIONAL)
 * ═══════════════════════════════════════════════════════════════════ */

export interface Shop {
  shop_id: string;
  shopify_domain: string;
  shop_name: string;
  
  // AI Settings
  ai_enabled: boolean;
  ai_auto_mode: boolean;
  ai_model?: string;
  
  // Branding
  logo_url?: string;
  primary_color?: string;
  
  // i18n
  locale?: string;
  currency?: string;
}

/* ═══════════════════════════════════════════════════════════════════
 * UI STATE
 * ═══════════════════════════════════════════════════════════════════ */

export interface ConversationFilter {
  status?: ConversationStatus;
  category?: string;
  wants_agent?: boolean;
  search_query?: string;
}

export interface ConversationStats {
  total: number;
  open: number;
  resolved: number;
  unread: number;
  agent_requests: number;
}

export interface ExtendedMessage extends Message {
  // UI-specific fields
  timestamp_formatted?: string; // "14:30"
  is_card?: boolean;
  is_typing?: boolean;
}

/* ═══════════════════════════════════════════════════════════════════
 * COMPONENT PROPS
 * ═══════════════════════════════════════════════════════════════════ */

export interface SidebarProps {
  conversationCount?: number;
  mailCount?: number;
  collapsed?: boolean;
  onNavigate?: (path: string) => void;
}

export interface ConversationListProps {
  conversations: Conversation[];
  selectedId?: string;
  onSelect?: (conversationId: string) => void;
  filter?: ConversationFilter;
}

export interface ConversationItemProps {
  conversation: Conversation;
  selected?: boolean;
  onClick?: () => void;
}

export interface ChatWindowProps {
  conversation: Conversation;
  messages: Message[];
  onSendMessage?: (content: string) => void;
  onTakeOver?: () => void;
  onGiveToAI?: () => void;
  onClose?: () => void;
  // Demo Support: Show typing text in input field
  demoInputValue?: string;
  // Demo Support: Control Product Picker externally
  demoProductPickerOpen?: boolean;
  demoOnProductPickerClose?: () => void;
  // Demo Support: Control selected products in Product Picker
  demoSelectedProductIds?: string[];
}

export interface MessageBubbleProps {
  message: Message;
  showAvatar?: boolean;
  showTimestamp?: boolean;
  showSenderName?: boolean;
}

export interface ProductCardDashboardProps {
  productId: string;
  title: string;
  description?: string;
  price: string;
  image?: string;
  stock?: number;
  url?: string;
}

export interface DiscountCardDashboardProps {
  code: string;
  type: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_SHIPPING';
  value: string;
  expiresAt?: string;
  description?: string;
}

export interface CustomerInfoPanelProps {
  customer: Customer;
  order?: Order;
  conversation: Conversation;
}

export interface OrderSectionProps {
  order: Order;
}

export interface AIInsightsProps {
  conversation: Conversation;
}

export interface ComposerProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

/* ═══════════════════════════════════════════════════════════════════
 * HELPER TYPES
 * ═══════════════════════════════════════════════════════════════════ */

export interface DashboardTab {
  id: 'live-chat' | 'email' | 'whatsapp';
  label: string;
  icon: string;
  count?: number;
  disabled?: boolean;
}

export interface ActionButton {
  label: string;
  icon?: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

export interface Badge {
  type: 'unread' | 'agent' | 'ai' | 'urgent' | 'closed' | 'vip';
  label: string;
  icon?: string;
}



