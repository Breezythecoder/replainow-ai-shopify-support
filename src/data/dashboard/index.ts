/**
 * 📊 DASHBOARD DATA - MAIN EXPORT
 * Central export for all dashboard example data
 */

export { exampleConversations, getExampleConversations } from './conversations';
export { exampleMessages, exampleMessagesDiscount, allMessages } from './messages';
export { exampleCustomers } from './customers';
export { exampleOrders } from './orders';
export { nikeProducts } from './products';
export type { Product, ProductVariant } from './products';

// Re-export types for convenience
export type {
  Conversation,
  Message,
  Customer,
  Order,
  ConversationStatus,
  MessageSender,
  MessageType
} from '@/types/dashboard';



