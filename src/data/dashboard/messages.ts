/**
 * 💬 DASHBOARD EXAMPLE DATA - MESSAGES
 * Realistic messages for conversation conv_001 (Sarah Klein - Agent Takeover)
 */

import type { Message } from '@/types/dashboard';

export const exampleMessages: Message[] = [
  {
    id: "msg_001",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "customer",
    sender_name: "Sarah Klein",
    content: "Hallo! Wo ist meine Bestellung? Ich warte schon seit 5 Tagen!",
    type: "text",
    created_at: "2024-11-29T14:20:00Z",
    created_by_ai: false,
    is_visible: true,
    source: "widget"
  },
  {
    id: "msg_002",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "Hallo Sarah 😊, deine Bestellung #12847 wurde bereits versandt. Ich sende dir hier die Tracking Übersicht damit du sie verfolgen kannst.",
    type: "text",
    created_at: "2024-11-29T14:20:30Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    ai_model: "gpt-4",
    ai_confidence: 98,
    ai_sentiment: "positive"
  },
  {
    id: "msg_003",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "",
    type: "tracking_card",
    created_at: "2024-11-29T14:20:35Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    metadata: {
      tracking_data: {
        orderNumber: "12847",
        carrier: "DHL Express",
        trackingNumber: "ABC123456789",
        status: "in-transit",
        url: "https://tracking.dhl.de/ABC123456789"
      }
    }
  },
  {
    id: "msg_004",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "customer",
    sender_name: "Sarah Klein",
    content: "Super! Kann ich eigentlich die Bestellung noch um Laufschuhe erweitern?",
    type: "text",
    created_at: "2024-11-29T14:22:00Z",
    created_by_ai: false,
    is_visible: true,
    source: "widget"
  }
];

// Additional messages for conv_005 (Julia - Discount Request)
export const exampleMessagesDiscount: Message[] = [
  {
    id: "msg_007",
    conversation_id: "conv_005",
    shop_id: "shop_123",
    sender: "customer",
    sender_name: "Julia Fischer",
    content: "Hallo! Kann ich noch einen Rabattcode bekommen?",
    type: "text",
    created_at: "2024-11-29T14:10:00Z",
    created_by_ai: false,
    is_visible: true,
    source: "widget"
  },
  {
    id: "msg_008",
    conversation_id: "conv_005",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "Aber klar! Ich habe einen exklusiven 20% Rabattcode für Sie:",
    type: "text",
    created_at: "2024-11-29T14:10:10Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    ai_model: "gpt-4",
    ai_confidence: 98,
    ai_sentiment: "positive"
  },
  {
    id: "msg_009",
    conversation_id: "conv_005",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "",
    type: "discount_card",
    created_at: "2024-11-29T14:28:00Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    metadata: {
      discount_data: {
        code: "SAVE20",
        type: "PERCENTAGE",
        value: "20",
        expires_at: "2025-12-31T23:59:59Z",
        usage_limit: 100,
        once_per_customer: true
      }
    }
  }
];

// Combine all messages
export const allMessages: Message[] = [...exampleMessages, ...exampleMessagesDiscount];



