/**
 * 🎨 REPLAINOW CHAT WIDGET - TypeScript Types
 * Version: 2.0 (Nov 29, 2025)
 * For: Marketing Website Integration
 */

// ═══════════════════════════════════════════════════════════════
// MESSAGE TYPES
// ═══════════════════════════════════════════════════════════════

export type MessageSender = 'user' | 'ai' | 'agent' | 'system';

export interface BaseMessage {
  id: string;
  conversationId: string;
  sender: MessageSender;
  content: string;
  createdAt: string;
  timestamp?: string;
}

export interface UserMessage extends BaseMessage {
  sender: 'user';
  type: 'text';
}

export interface AIMessage extends BaseMessage {
  sender: 'ai';
  type: 'text' | 'product_suggestion' | 'discount_offer';
  aiName?: string;
  aiSignature?: string;
}

export interface AgentMessage extends BaseMessage {
  sender: 'agent';
  type: 'text';
  agentName?: string;
  agentAvatar?: string;
  agentSignature?: string;
}

export interface SystemMessage extends BaseMessage {
  sender: 'system';
  type: 'system';
  systemType?: 'agent_joined' | 'agent_left' | 'ai_takeover' | 'chat_closed';
}

export type ChatMessage = UserMessage | AIMessage | AgentMessage | SystemMessage;

// ═══════════════════════════════════════════════════════════════
// PRODUCT TYPES
// ═══════════════════════════════════════════════════════════════

export interface Product {
  title: string;
  price: string;
  description?: string;
  imageUrl?: string;
  productUrl: string;
  inventory?: number;
  vendor?: string;
}

export interface ProductCardProps {
  title: string;
  price: string;
  description?: string;
  imageUrl?: string;
  productUrl: string;
  buttonText?: string;
}

// Agent Product Card (Dashboard System)
export interface AgentProductCardProps {
  title: string;
  price: string;
  description?: string;
  imageUrl?: string;
  productUrl: string;
  inventory?: number;
}

// ═══════════════════════════════════════════════════════════════
// DISCOUNT TYPES
// ═══════════════════════════════════════════════════════════════

export type DiscountType = 'percentage' | 'fixed' | 'free_shipping';

export interface DiscountData {
  code: string;
  type: DiscountType;
  value: string | number;
  expiresAt?: string;
  usageLimit?: number;
}

export interface DiscountCardProps extends DiscountData {}

// ═══════════════════════════════════════════════════════════════
// CHECKOUT TYPES
// ═══════════════════════════════════════════════════════════════

export interface CheckoutProduct {
  title: string;
  quantity: number;
  price: string;
  imageUrl?: string;
}

export interface CheckoutDiscount {
  type: 'PERCENTAGE' | 'FIXED';
  value: string;
}

export interface CheckoutData {
  products: CheckoutProduct[];
  totalPrice: string;
  currency: string;
  checkoutUrl: string;
  discount?: CheckoutDiscount;
}

export interface CheckoutCardProps extends CheckoutData {}

// ═══════════════════════════════════════════════════════════════
// TRACKING TYPES
// ═══════════════════════════════════════════════════════════════

export interface TrackingData {
  orderNumber: string;
  carrier: string;
  trackingNumber: string;
  trackingUrl: string;
  status?: 'pending' | 'in_transit' | 'delivered';
  estimatedDelivery?: string;
}

export interface TrackingCardProps extends TrackingData {}

// ═══════════════════════════════════════════════════════════════
// CHAT HEADER TYPES
// ═══════════════════════════════════════════════════════════════

export interface ChatHeaderProps {
  name: string;
  signature?: string | null;
  avatarUrl?: string | null;
  isOnline?: boolean;
  onClose?: () => void;
}

// ═══════════════════════════════════════════════════════════════
// CHAT INPUT TYPES
// ═══════════════════════════════════════════════════════════════

export interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

// ═══════════════════════════════════════════════════════════════
// CHAT WINDOW TYPES
// ═══════════════════════════════════════════════════════════════

export interface ChatWindowProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  isOpen?: boolean;
  onToggle?: () => void;
}

// ═══════════════════════════════════════════════════════════════
// TEAM AVATAR TYPES
// ═══════════════════════════════════════════════════════════════

export interface TeamAgent {
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
  isOnline: boolean;
}

export interface TeamAvatarProps {
  agent: TeamAgent;
  size?: number;  // Default: 40px
  showOnlineIndicator?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// COLOR PALETTE (TypeScript)
// ═══════════════════════════════════════════════════════════════

export const chatColors = {
  // Grays
  gray: {
    1: '#FAFAFA',
    2: '#F5F5F5',
    3: '#E5E5E5',
    4: '#D4D4D4',
    5: '#A3A3A3',
    6: '#737373',
    7: '#525252',
    8: '#404040',
    9: '#262626',
    10: '#171717',
    11: '#0A0A0A',
    12: '#000000',
  },
  
  // Semantic
  success: '#10B981',
  danger: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // Brand
  purple: '#8B5CF6',
  pink: '#EC4899',
  
  // Gradients
  gradients: {
    aiAvatar: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    darkButton: 'linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%)',
    darkButtonHover: 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)',
  }
} as const;

export type ChatColors = typeof chatColors;

// ═══════════════════════════════════════════════════════════════
// ANIMATION TYPES
// ═══════════════════════════════════════════════════════════════

export interface GSAPAnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
}

export interface MessageEntranceAnimation extends GSAPAnimationConfig {
  from: {
    opacity: number;
    y: number;
    scale: number;
  };
}

export interface HoverAnimation extends GSAPAnimationConfig {
  to: {
    y?: number;
    scale?: number;
    boxShadow?: string;
  };
}

// ═══════════════════════════════════════════════════════════════
// UTILITY TYPES
// ═══════════════════════════════════════════════════════════════

export type ChatTheme = 'light' | 'dark';
export type ChatLanguage = 'en' | 'de' | 'fr' | 'es' | 'it' | 'pt' | 'nl' | string;

export interface ChatConfig {
  shopId: string;
  shopDomain: string;
  language: ChatLanguage;
  theme: ChatTheme;
  multiTab?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// EXPORT ALL
// ═══════════════════════════════════════════════════════════════

export type {
  BaseMessage,
  UserMessage,
  AIMessage,
  AgentMessage,
  SystemMessage,
  ChatMessage,
  Product,
  ProductCardProps,
  AgentProductCardProps,
  DiscountType,
  DiscountData,
  DiscountCardProps,
  CheckoutProduct,
  CheckoutDiscount,
  CheckoutData,
  CheckoutCardProps,
  TrackingData,
  TrackingCardProps,
  ChatHeaderProps,
  ChatInputProps,
  ChatWindowProps,
  TeamAgent,
  TeamAvatarProps,
  GSAPAnimationConfig,
  MessageEntranceAnimation,
  HoverAnimation,
  ChatTheme,
  ChatLanguage,
  ChatConfig,
};

