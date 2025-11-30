/**
 * ⏱️ DEMO CONFIGURATION - Timing Constants
 * OPTIMIZED FOR 35-SECOND PERFECT DEMO
 * All values in milliseconds
 */

import { t } from '@/i18n';

export const DEMO_TIMING = {
  // Message Appearance (Fast & Smooth)
  MESSAGE_APPEAR_DURATION: 250,      // Quick fade-in
  MESSAGE_GAP: 800,                  // Minimal gap between messages
  
  // Typing Effects (Optimized)
  TYPING_DOTS_DURATION: 600,         // Short typing indication
  TYPING_SPEED_AI: 15,               // Fast AI typing
  TYPING_SPEED_AGENT: 18,            // Fast agent typing (in input field)
  
  // Cursor Animation (Smooth & Quick)
  CURSOR_MOVE_SHORT: 600,            // Short movements
  CURSOR_MOVE_MEDIUM: 900,           // Medium movements
  CURSOR_MOVE_LONG: 1200,            // Long movements (Take Over)
  CURSOR_HOVER_DELAY: 150,           // Quick hover
  CURSOR_CLICK_DURATION: 120,        // Snappy click
  
  // State Transitions (Instant Feel)
  STATE_TRANSITION_DURATION: 300,    // Quick AI → Agent transition
  
  // Modal Animations (Fast)
  MODAL_OPEN_DURATION: 250,          // Quick modal open
  MODAL_CLOSE_DURATION: 200,         // Quick modal close
  
  // Product Selection (Efficient)
  PRODUCT_SELECT_DURATION: 400,      // Quick selection
  PRODUCT_SELECT_GAP: 600,           // Short gap between selections
  
  // Pauses (Minimal, Just Enough)
  PAUSE_AFTER_TRACKING: 600,         // Brief pause
  PAUSE_AFTER_PRODUCTS: 800,         // Brief pause
  PAUSE_AFTER_TAKEOVER: 400,         // Quick transition
  PAUSE_AFTER_AGENT_MSG: 600,        // Brief pause
  PAUSE_SHOW_CHECKOUT: 2000,         // Show final result
  
  // Loop
  LOOP_DELAY: 3000,                  // Quick restart
  FADE_OUT_DURATION: 800             // Smooth fade
};

/**
 * DEMO PHASES - 35-SECOND OPTIMIZED FLOW
 * State machine phases for the demo orchestrator
 */
export type DemoPhase =
  | 'initial'                  // 0:00 - Initial state (1 message: customer question)
  | 'ai-responding-tracking'   // 0:02-0:04 - AI responds + tracking card
  | 'customer-asks-products'   // 0:05 - Customer asks about products
  | 'ai-shows-products'        // 0:06-0:09 - AI response + 2 product cards
  | 'customer-wants-order'     // 0:10 - Customer urgent order request
  | 'cursor-to-takeover'       // 0:11-0:13 - Cursor → Take Over button
  | 'taking-over'              // 0:13 - State change (AI → Agent)
  | 'cursor-to-input'          // 0:14 - Cursor → Input field
  | 'agent-typing-input'       // 0:14-0:19 - Agent types IN INPUT FIELD (streaming!)
  | 'agent-sending'            // 0:19-0:20 - Cursor → Send + Click
  | 'agent-message-sent'       // 0:20 - Agent message appears in chat
  | 'opening-picker'           // 0:21 - Cursor → Product Picker + Click
  | 'selecting-products'       // 0:22-0:24 - Select Jogger + T-Shirt
  | 'creating-checkout'        // 0:25-0:26 - Create Checkout + Discount
  | 'checkout-complete'        // 0:27 - Checkout link card appears
  | 'demo-complete'            // 0:30 - Show final result
  | 'looping';                 // 0:33 - Fade out + restart

/**
 * MESSAGE TIMING MAP - 35-SECOND OPTIMIZED TIMELINE
 * When each message should appear (in ms from demo start)
 */
export const MESSAGE_TIMING = {
  // Initial message (ONLY customer question at t=0)
  msg_demo_001: 0,        // 0:00 - Customer: "Wo ist meine Bestellung?"
  
  // AI Response Phase (2-5 seconds)
  msg_demo_002: 2500,     // 0:02.5 - AI: "Hallo Sarah... versandt"
  msg_demo_003: 3500,     // 0:03.5 - Tracking Card
  
  // Customer Product Question (5 seconds)
  msg_demo_004: 5000,     // 0:05 - Customer: "Danke! Joggers + T-Shirt?"
  
  // AI Product Response (6-9 seconds)
  msg_demo_005: 6500,     // 0:06.5 - AI: "Ja natürlich! Schau mal:"
  msg_demo_006: 7500,     // 0:07.5 - Product Card (Jogger)
  msg_demo_007: 8500,     // 0:08.5 - Product Card (T-Shirt)
  
  // Customer Urgent Request (10 seconds)
  msg_demo_008: 10000,    // 0:10 - Customer: "WOW! Möchte bestellen!"
  
  // Agent Message (after takeover + typing, ~20 seconds)
  msg_demo_009: 20000,    // 0:20 - Agent message (after input streaming)
  
  // Checkout Link (27 seconds)
  msg_demo_010: 27000     // 0:27 - Checkout Link Card
};

/**
 * CURSOR TARGET POSITIONS
 * Where the cursor should move to
 */
export const CURSOR_TARGETS = {
  TAKE_OVER_BUTTON: 'take-over-btn',
  SEND_BUTTON: 'send-btn',
  PRODUCT_PICKER_BUTTON: 'product-picker-btn',
  JOGGER_CHECKBOX: 'product-jogger-checkbox',
  SHIRT_CHECKBOX: 'product-shirt-checkbox',
  CHECKOUT_BUTTON: 'create-checkout-btn',
  DISCOUNT_20_OPTION: 'discount-20-option'
};

/**
 * TYPING MESSAGES
 * Complete text for typing animations (locale-aware!)
 */
export const getTypingMessages = (locale?: string) => ({
  AI_INTRO: t('dashboard.demo.messages.ai.trackingResponse', locale),
  AI_PRODUCTS: t('dashboard.demo.messages.ai.productResponse', locale),
  AGENT_RESPONSE: t('dashboard.demo.messages.agent.takeover', locale)
});

// Legacy export for backward compatibility
export const TYPING_MESSAGES = getTypingMessages();

/**
 * SPEED MULTIPLIER
 * Adjust overall demo speed (1.0 = normal, 0.5 = half speed, 2.0 = double speed)
 */
export let SPEED_MULTIPLIER = 1.0;

export const setDemoSpeed = (multiplier: number) => {
  SPEED_MULTIPLIER = Math.max(0.1, Math.min(3.0, multiplier));
};

/**
 * Get adjusted timing value
 */
export const getTiming = (value: number): number => {
  return value * SPEED_MULTIPLIER;
};







