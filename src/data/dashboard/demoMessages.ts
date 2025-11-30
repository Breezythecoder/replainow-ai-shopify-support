/**
 * 🎬 COMPLETE DEMO MESSAGES - Live Demo Orchestration
 * All 10 messages for the ultimate product showcase demo
 * Timeline: 0:00 - 0:47 (47 seconds total)
 */

import type { Message } from '@/types/dashboard';

/**
 * COMPLETE DEMO MESSAGE FLOW (10 Messages)
 * 
 * Initial State (Visible at start):
 * - msg_demo_001: Customer asks about order
 * - msg_demo_002: AI responds with tracking info
 * - msg_demo_003: AI sends tracking card
 * - msg_demo_004: Customer asks about joggers + t-shirt
 * 
 * Demo Sequence (Appear during demo):
 * - msg_demo_005: AI responds with product recommendations
 * - msg_demo_006: AI sends Product Card (Jogger)
 * - msg_demo_007: AI sends Product Card (T-Shirt)
 * - msg_demo_008: Customer wants to order, in a hurry
 * - msg_demo_009: Agent takes over, types response (AFTER TAKE OVER!)
 * - msg_demo_010: Agent sends Checkout Link Card
 */

export const demoMessages: Message[] = [
  // ═══════════════════════════════════════════════════════════════════
  // INITIAL STATE - Already visible when demo starts
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "msg_demo_001",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "customer",
    sender_name: "Sarah Klein",
    content: "dashboard.demo.messages.customer.initial",
    type: "text",
    created_at: "2024-11-29T14:20:00Z",
    created_by_ai: false,
    is_visible: true,
    source: "widget",
    translate: true  // Flag to translate this content
  },
  {
    id: "msg_demo_002",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "dashboard.demo.messages.ai.trackingResponse",
    type: "text",
    created_at: "2024-11-29T14:20:30Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    ai_model: "gpt-4",
    ai_confidence: 98,
    ai_sentiment: "positive",
    translate: true  // Flag to translate this content
  },
  {
    id: "msg_demo_003",
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
    id: "msg_demo_004",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "customer",
    sender_name: "Sarah Klein",
    content: "dashboard.demo.messages.customer.products",
    type: "text",
    created_at: "2024-11-29T14:22:00Z",
    created_by_ai: false,
    is_visible: true,
    source: "widget",
    translate: true  // Flag to translate this content
  },

  // ═══════════════════════════════════════════════════════════════════
  // DEMO SEQUENCE - Messages that appear during demo
  // ═══════════════════════════════════════════════════════════════════
  
  // [0:14] AI responds with product recommendations
  {
    id: "msg_demo_005",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "dashboard.demo.messages.ai.productResponse",
    type: "text",
    created_at: "2024-11-29T14:22:15Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    ai_model: "gpt-4",
    ai_confidence: 96,
    ai_sentiment: "positive",
    translate: true  // Flag to translate this content
  },

  // [0:15] AI sends Product Card - Jogger
  {
    id: "msg_demo_006",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "",
    type: "product_card",
    created_at: "2024-11-29T14:22:20Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    metadata: {
      product_id: "prod_nike_jogger",
      product_title: "Nike Tech Fleece Joggers - Black",
      product_price: "89.99",
      product_image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop&q=90",
      product_url: "https://shop.example.com/products/nike-tech-fleece-joggers",
      inventory_quantity: 68,
      description: "Premium Jogger mit Tech Fleece. Ultra-leicht, perfekter Fit."
    }
  },

  // [0:16] AI sends Product Card - T-Shirt
  {
    id: "msg_demo_007",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "ai",
    sender_name: "ReplAInow",
    content: "",
    type: "product_card",
    created_at: "2024-11-29T14:22:21Z",
    created_by_ai: true,
    is_visible: true,
    source: "api",
    metadata: {
      product_id: "prod_nike_shirt",
      product_title: "Nike Dri-FIT ADV Training Shirt",
      product_price: "44.99",
      product_image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
      product_url: "https://shop.example.com/products/nike-dri-fit-shirt",
      inventory_quantity: 94,
      description: "Performance T-Shirt, atmungsaktiv, schnelltrocknend."
    }
  },

  // [0:18] Customer wants to order, is in a hurry
  {
    id: "msg_demo_008",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "customer",
    sender_name: "Sarah Klein",
    content: "dashboard.demo.messages.customer.urgent",
    type: "text",
    created_at: "2024-11-29T14:23:00Z",
    created_by_ai: false,
    is_visible: true,
    source: "widget",
    translate: true  // Flag to translate this content
  },

  // ═══════════════════════════════════════════════════════════════════
  // AFTER TAKE OVER - Agent messages (created after state change)
  // ═══════════════════════════════════════════════════════════════════
  
  // [0:32] Agent response (after typing effect)
  {
    id: "msg_demo_009",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "agent",
    sender_name: "Laura S.",
    content: "dashboard.demo.messages.agent.takeover",
    type: "text",
    created_at: "2024-11-29T14:24:00Z",
    created_by_ai: false,
    is_visible: true,
    source: "dashboard",
    created_by_user_id: "agent_laura",
    agent_display_name: "Laura S.",
    agent_avatar_url: "/agent-avatar-laura.jpg",
    translate: true  // Flag to translate this content
  },

  // [0:44] Agent sends Checkout Link Card
  {
    id: "msg_demo_010",
    conversation_id: "conv_001",
    shop_id: "shop_123",
    sender: "agent",
    sender_name: "Laura S.",
    content: "",
    type: "checkout_link",
    created_at: "2024-11-29T14:24:30Z",
    created_by_ai: false,
    is_visible: true,
    source: "dashboard",
    created_by_user_id: "agent_laura",
    agent_display_name: "Laura S.",
    agent_avatar_url: "/agent-avatar-laura.jpg",
    metadata: {
      checkout_data: {
        checkout_url: "https://shop.example.com/checkout/ABC123XYZ",
        products: [
          { 
            title: "Nike Tech Fleece Joggers - Black", 
            quantity: 1, 
            price: "89.99",
            image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop&q=90"
          },
          { 
            title: "Nike Dri-FIT ADV Training Shirt", 
            quantity: 1, 
            price: "44.99",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90"
          }
        ],
        subtotal: "134.98",
        discount: {
          code: "SAVE20",
          type: "PERCENTAGE",
          percentage: "20%",
          amount: "27.00"
        },
        total: "107.98",
        currency: "EUR"
      }
    }
  }
];

/**
 * TIMING REFERENCE - 35-SECOND OPTIMIZED DEMO:
 * 
 * Initial (0:00):
 * - ONLY msg_demo_001 (Customer question)
 * 
 * Demo Sequence Timeline:
 * - 0:02 - AI typing dots
 * - 0:02.5 - msg_demo_002 (AI response)
 * - 0:03.5 - msg_demo_003 (Tracking Card)
 * - 0:05 - msg_demo_004 (Customer asks products)
 * - 0:06 - AI typing dots
 * - 0:06.5 - msg_demo_005 (AI product response)
 * - 0:07.5 - msg_demo_006 (Jogger Card)
 * - 0:08.5 - msg_demo_007 (T-Shirt Card)
 * - 0:10 - msg_demo_008 (Customer urgent)
 * - 0:11-0:13 - Cursor to Take Over + Click
 * - 0:13 - State Change (AI → Agent)
 * - 0:14 - Cursor to Input Field
 * - 0:14-0:19 - Agent types IN INPUT FIELD (live streaming!)
 * - 0:19-0:20 - Cursor to Send + Click
 * - 0:20 - msg_demo_009 appears (Agent message)
 * - 0:21 - Product Picker Flow
 * - 0:27 - msg_demo_010 (Checkout Link)
 * - 0:30 - Demo Complete
 * - 0:33 - Loop Restart
 */

export const DEMO_INITIAL_MESSAGES = [
  "msg_demo_001"  // ONLY customer question initially visible!
];

export const DEMO_SEQUENCE_MESSAGES = [
  "msg_demo_005",
  "msg_demo_006",
  "msg_demo_007",
  "msg_demo_008"
];

export const DEMO_AGENT_MESSAGES = [
  "msg_demo_009",
  "msg_demo_010"
];







