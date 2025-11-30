/**
 * 🎬 DEMO ORCHESTRATOR - Main Demo Controller
 * Coordinates the entire live demo flow with perfect timing
 * This is the BRAIN of the demo - controls everything!
 */

import React, { useEffect, useRef, useCallback } from 'react';
import { useDemoState, type DemoState } from '@/hooks/useDemoState';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useTranslation } from '@/i18n';
import { 
  DEMO_TIMING, 
  MESSAGE_TIMING, 
  getTypingMessages,
  getTiming 
} from './demoConfig';
import { useLocale } from '@/i18n/LocaleContext';
import { DEMO_INITIAL_MESSAGES } from '@/data/dashboard/demoMessages';
import type { Conversation } from '@/types/dashboard';

export interface DemoOrchestratorProps {
  // Control
  autoPlay?: boolean;
  loop?: boolean;
  
  // Callbacks to control parent components
  onUpdateConversation?: (updates: Partial<Conversation>) => void;
  onShowMessage?: (messageId: string) => void;
  onHideAllMessages?: () => void;
  onStateChange?: (state: DemoState) => void;
  
  // Refs for external components
  productPickerRef?: React.RefObject<any>;
}

export const DemoOrchestrator: React.FC<DemoOrchestratorProps> = ({
  autoPlay = false,
  loop = true,
  onUpdateConversation,
  onShowMessage,
  onHideAllMessages,
  onStateChange
}) => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const demoState = useDemoState();
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const phaseTimeoutRef = useRef<NodeJS.Timeout>();
  
  // FIX: Prevent infinite loop - track if already started
  const hasStartedRef = useRef(false);
  const loopEnabledRef = useRef(loop);
  
  // Get typing messages for current locale
  const TYPING_MESSAGES = getTypingMessages(locale);
  
  // FIX: Store callbacks and props in refs to avoid stale closures
  const callbacksRef = useRef({ onUpdateConversation, onShowMessage, onHideAllMessages });
  const demoStateRef = useRef(demoState);
  
  // Update refs on every render (before any effects run)
  callbacksRef.current = { onUpdateConversation, onShowMessage, onHideAllMessages };
  demoStateRef.current = demoState;

  /**
   * UTILITY: Schedule an event at a specific time
   * Uses arrow function to capture current scope
   */
  const scheduleEvent = (time: number, callback: () => void) => {
    const timer = setTimeout(() => {
      // Execute callback with try-catch for debugging
      try {
        callback();
      } catch (error) {
        console.error('[DEMO] ❌ Error in scheduled callback:', error);
      }
    }, getTiming(time));
    timersRef.current.push(timer);
    return timer;
  };

  /**
   * UTILITY: Clear all timers
   */
  const clearAllTimers = () => {
    console.log('[DEMO] 🧹 Clearing all timers...', timersRef.current.length, 'timers');
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
    if (phaseTimeoutRef.current) {
      clearTimeout(phaseTimeoutRef.current);
    }
  };

  /**
   * PHASE 0: UI CLEANUP - Collapse navigations for focus!
   * NEW: Makes more space for chat by collapsing sidebars
   * ENTERPRISE FIX: Trigger REAL CLICK EVENTS on buttons!
   */
  const executeUICleanupPhase = () => {
    console.log('[DEMO] 🧹 Phase: UI_CLEANUP - Collapsing navigations');
    
    // Show initial customer message
    DEMO_INITIAL_MESSAGES.forEach(msgId => {
      callbacksRef.current.onShowMessage?.(msgId);
    });

    // Set conversation to AI Active mode
    callbacksRef.current.onUpdateConversation?.({
      auto_mode: true,
      handled_by: null,
      handled_by_name: null
    });

    // Show cursor
    demoStateRef.current.showCursor(true);
    
    // STEP 1: Collapse Icon Navigation (right sidebar)
    demoStateRef.current.setCursorTarget('icon-nav-collapse-btn');
    
    scheduleEvent(1200, () => {
      console.log('[DEMO] 🖱️ Clicking Icon Nav Collapse...');
      demoStateRef.current.setIsClicking(true);
      
      scheduleEvent(300, () => {
        demoStateRef.current.setIsClicking(false);
        
        // TRIGGER REAL CLICK EVENT!
        const iconNavBtn = document.querySelector('[data-demo-target="icon-nav-collapse-btn"]') as HTMLButtonElement;
        if (iconNavBtn) {
          iconNavBtn.click();
          console.log('[DEMO] ✅ Icon Nav clicked (real event)');
        }
        
        // STEP 2: Collapse Categories
        scheduleEvent(800, () => {
          demoStateRef.current.setCursorTarget('category-toggle');
          
          scheduleEvent(1000, () => {
            console.log('[DEMO] 🖱️ Clicking Category Toggle...');
            demoStateRef.current.setIsClicking(true);
            
            scheduleEvent(300, () => {
              demoStateRef.current.setIsClicking(false);
              
              // TRIGGER REAL CLICK EVENT!
              const categoryBtn = document.querySelector('[data-demo-target="category-toggle"]') as HTMLButtonElement;
              if (categoryBtn) {
                categoryBtn.click();
                console.log('[DEMO] ✅ Categories clicked (real event)');
              }
              
              // Hide cursor after UI cleanup
              scheduleEvent(500, () => {
                demoStateRef.current.showCursor(false);
                
                // Now start the actual demo
                scheduleEvent(1000, () => {
                  demoStateRef.current.setPhase('initial');
                  executeInitialPhase();
                });
              });
            });
          });
        });
      });
    });
  };

  /**
   * PHASE 1: INITIAL STATE
   * Customer message visible, wait for AI to respond
   */
  const executeInitialPhase = () => {
    console.log('[DEMO] ✅ Phase: INITIAL - Customer question visible, UI clean');

    demoStateRef.current.setPhase('initial');

    // After 2 seconds, AI starts responding
    scheduleEvent(2000, () => {
      demoStateRef.current.setPhase('ai-responding-tracking');
      executeAIRespondingTrackingPhase();
    });
  };

  /**
   * PHASE 2: AI RESPONDING + TRACKING
   * AI responds to order question + sends tracking card
   */
  const executeAIRespondingTrackingPhase = () => {
    console.log('[DEMO] ✅ Phase: AI_RESPONDING_TRACKING');

    // Show typing dots briefly
    demoStateRef.current.startTypingDots('ai');
    
    // Message 2: AI response (0:02.5)
    scheduleEvent(500, () => {
      demoStateRef.current.stopTypingDots();
      callbacksRef.current.onShowMessage?.('msg_demo_002');
      
      // Update conversation preview to latest TEXT message
      callbacksRef.current.onUpdateConversation?.({
        latest_message_preview: t('dashboard.demo.messages.ai.trackingResponse'),
        latest_message_sender: 'ai',
        last_message_at: new Date().toISOString()
      });
    });

    // Message 3: Tracking Card (0:03.5)
    scheduleEvent(1000, () => {
      callbacksRef.current.onShowMessage?.('msg_demo_003');
    });

    // After tracking card, customer asks about products (0:05)
    scheduleEvent(2500, () => {
      demoStateRef.current.setPhase('customer-asks-products');
      executeCustomerAsksProductsPhase();
    });
  };

  /**
   * PHASE 3: CUSTOMER ASKS ABOUT PRODUCTS
   * Customer question about joggers + t-shirt
   */
  const executeCustomerAsksProductsPhase = () => {
    console.log('[DEMO] ✅ Phase: CUSTOMER_ASKS_PRODUCTS');

    // Message 4: Customer asks (0:05)
    callbacksRef.current.onShowMessage?.('msg_demo_004');
    
    // Update conversation preview
    callbacksRef.current.onUpdateConversation?.({
      latest_message_preview: t('dashboard.demo.messages.customer.products'),
      latest_message_sender: 'customer',
      last_message_at: new Date().toISOString()
    });

    // After 1.5 seconds, AI starts showing products
    scheduleEvent(1500, () => {
      demoStateRef.current.setPhase('ai-shows-products');
      executeAIShowsProductsPhase();
    });
  };

  /**
   * PHASE 4: AI SHOWS PRODUCTS
   * AI responds + shows 2 product cards
   */
  const executeAIShowsProductsPhase = () => {
    console.log('[DEMO] ✅ Phase: AI_SHOWS_PRODUCTS');

    // Show typing dots
    demoStateRef.current.startTypingDots('ai');
    
    // Message 5: AI product response (0:06.5)
    scheduleEvent(600, () => {
      demoStateRef.current.stopTypingDots();
      callbacksRef.current.onShowMessage?.('msg_demo_005');
      
      // Update conversation preview
      callbacksRef.current.onUpdateConversation?.({
        latest_message_preview: t('dashboard.demo.messages.ai.productResponse'),
        latest_message_sender: 'ai',
        last_message_at: new Date().toISOString()
      });
    });

    // Message 6: Jogger Card (0:07.5)
    scheduleEvent(1000, () => {
      callbacksRef.current.onShowMessage?.('msg_demo_006');
    });

    // Message 7: T-Shirt Card (0:08.5)
    scheduleEvent(1500, () => {
      callbacksRef.current.onShowMessage?.('msg_demo_007');
    });

    // After products shown, customer wants to order (0:10)
    scheduleEvent(3000, () => {
      demoStateRef.current.setPhase('customer-wants-order');
      executeCustomerWantsOrderPhase();
    });
  };

  /**
   * PHASE 5: CUSTOMER WANTS TO ORDER
   * Customer urgent order request
   */
  const executeCustomerWantsOrderPhase = () => {
    console.log('[DEMO] ✅ Phase: CUSTOMER_WANTS_ORDER');

    // Message 8: Customer urgent (0:10)
    callbacksRef.current.onShowMessage?.('msg_demo_008');
    
    // Update conversation preview
    callbacksRef.current.onUpdateConversation?.({
      latest_message_preview: t('dashboard.demo.messages.customer.urgent'),
      latest_message_sender: 'customer',
      last_message_at: new Date().toISOString()
    });
    
    // After 1 second, collapse main sidebar for more focus
    scheduleEvent(1000, () => {
      demoStateRef.current.setPhase('collapse-sidebar');
      executeCollapseSidebarPhase();
    });
  };

  /**
   * PHASE 5.5: COLLAPSE MAIN SIDEBAR
   * Make more space for chat before agent takeover
   * ENTERPRISE FIX: Trigger real click event on button!
   */
  const executeCollapseSidebarPhase = () => {
    console.log('[DEMO] 🧹 Phase: COLLAPSE_SIDEBAR - Making space for agent');

    // Show cursor
    demoStateRef.current.showCursor(true);
    demoStateRef.current.setCursorTarget('sidebar-collapse-btn');
    
    // Wait for cursor to arrive
    scheduleEvent(1200, () => {
      console.log('[DEMO] 🖱️ Clicking Sidebar Collapse...');
      demoStateRef.current.setIsClicking(true);
      
      scheduleEvent(300, () => {
        demoStateRef.current.setIsClicking(false);
        
        // TRIGGER REAL CLICK EVENT!
        const button = document.querySelector('[data-demo-target="sidebar-collapse-btn"]') as HTMLButtonElement;
        if (button) {
          button.click(); // Real click!
          console.log('[DEMO] ✅ Main Sidebar clicked (real event)');
        }
        
        // Wait for sidebar animation to complete
        scheduleEvent(500, () => {
          // Now agent takes over!
          demoStateRef.current.setPhase('cursor-to-takeover');
          executeCursorToTakeoverPhase();
        });
      });
    });
  };

  /**
   * PHASE 6: CURSOR TO TAKEOVER
   * Cursor moves to "Take Over" button and clicks it
   */
  const executeCursorToTakeoverPhase = () => {
    console.log('[DEMO] 🖱️ Phase: CURSOR_TO_TAKEOVER - STARTING!');

    // Show cursor
    console.log('[DEMO] 🔍 DEBUG: Calling showCursor(true)...');
    demoStateRef.current.showCursor(true);
    console.log('[DEMO] 🔍 DEBUG: showCursor called!');

    // Move cursor to Take Over button
    console.log('[DEMO] 🔍 DEBUG: Setting cursor target to take-over-btn...');
    demoStateRef.current.setCursorTarget('take-over-btn');

    // After 1.2 seconds, click
    console.log('[DEMO] 🔍 DEBUG: Scheduling click in', DEMO_TIMING.CURSOR_MOVE_LONG, 'ms');
    scheduleEvent(DEMO_TIMING.CURSOR_MOVE_LONG, () => {
      console.log('[DEMO] 🔍 DEBUG: Click timer fired!');
      demoStateRef.current.setIsClicking(true);
      
      // Click animation
      scheduleEvent(DEMO_TIMING.CURSOR_CLICK_DURATION, () => {
        console.log('[DEMO] 🔍 DEBUG: Click complete!');
        demoStateRef.current.setIsClicking(false);
        
        // STATE CHANGE!
        demoStateRef.current.setPhase('taking-over');
        executeTakingOverPhase();
      });
    });
  };

  /**
   * PHASE 7: TAKING OVER
   * State changes from AI Active → Agent Handling
   */
  const executeTakingOverPhase = () => {
    console.log('[DEMO] ✅ Phase: TAKING_OVER - State Change');

    // Update conversation state
    callbacksRef.current.onUpdateConversation?.({
      auto_mode: false,
      handled_by: 'agent_laura',
      handled_by_name: 'Laura S.'
    });

    demoStateRef.current.setConversationState(false, 'agent_laura', 'Laura S.');

    // After quick transition, move cursor to input
    scheduleEvent(DEMO_TIMING.STATE_TRANSITION_DURATION + DEMO_TIMING.PAUSE_AFTER_TAKEOVER, () => {
      demoStateRef.current.setPhase('cursor-to-input');
      executeCursorToInputPhase();
    });
  };

  /**
   * PHASE 8: CURSOR TO INPUT FIELD
   * Cursor moves to input field and clicks
   */
  const executeCursorToInputPhase = () => {
    console.log('[DEMO] 🖱️ Phase: CURSOR_TO_INPUT');

    // Move cursor to input field
    demoStateRef.current.setCursorTarget('message-input');

    // After cursor arrives, click
    scheduleEvent(DEMO_TIMING.CURSOR_MOVE_MEDIUM, () => {
      demoStateRef.current.setIsClicking(true);
      
      scheduleEvent(DEMO_TIMING.CURSOR_CLICK_DURATION, () => {
        demoStateRef.current.setIsClicking(false);
        
        // Hide cursor during typing
        demoStateRef.current.showCursor(false);
        
        // Start agent typing IN INPUT FIELD!
        scheduleEvent(200, () => {
          demoStateRef.current.setPhase('agent-typing-input');
          executeAgentTypingInputPhase();
        });
      });
    });
  };

  /**
   * PHASE 9: AGENT TYPING IN INPUT FIELD ⭐⭐⭐
   * Agent message streams character by character IN THE INPUT FIELD!
   * This is the HIGHLIGHT of the demo!
   */
  const executeAgentTypingInputPhase = () => {
    console.log('[DEMO] ⌨️ Phase: AGENT_TYPING_INPUT - Live Streaming!');

    const agentMessage = TYPING_MESSAGES.AGENT_RESPONSE;
    const typingSpeed = DEMO_TIMING.TYPING_SPEED_AGENT;

    // Start typing in input field
    demoStateRef.current.setIsTypingInInput(true);

    let currentIndex = 0;
    const typeCharacter = () => {
      if (currentIndex < agentMessage.length) {
        currentIndex++;
        demoStateRef.current.setTypingText(agentMessage.slice(0, currentIndex));
        scheduleEvent(typingSpeed, typeCharacter);
      } else {
        // Typing complete
        demoStateRef.current.setIsTypingInInput(false);
        
        // Show cursor moving to Send button
        scheduleEvent(300, () => {
          demoStateRef.current.setPhase('agent-sending');
          executeAgentSendingPhase();
        });
      }
    };

    // Start typing
    typeCharacter();
  };

  /**
   * PHASE 10: AGENT SENDING MESSAGE
   * Cursor moves to Send button and clicks
   */
  const executeAgentSendingPhase = () => {
    console.log('[DEMO] 🖱️ Phase: AGENT_SENDING');

    // Show cursor
    demoStateRef.current.showCursor(true);
    demoStateRef.current.setCursorTarget('send-btn');
    
    // After cursor arrives, click Send
    scheduleEvent(DEMO_TIMING.CURSOR_MOVE_SHORT, () => {
      demoStateRef.current.setIsClicking(true);
      
      scheduleEvent(DEMO_TIMING.CURSOR_CLICK_DURATION, () => {
        demoStateRef.current.setIsClicking(false);
        demoStateRef.current.showCursor(false);
        
        // Clear input
        demoStateRef.current.setTypingText('');
        
        // Show agent message in chat
        callbacksRef.current.onShowMessage?.('msg_demo_009');
        
        // UPDATE CONVERSATION PREVIEW to show latest text message!
        callbacksRef.current.onUpdateConversation?.({
          latest_message_preview: t('dashboard.demo.messages.agent.takeover').substring(0, 60) + "...",
          latest_message_sender: 'agent',
          last_message_at: new Date().toISOString()
        });
        
        demoStateRef.current.setPhase('agent-message-sent');
        executeAgentMessageSentPhase();
      });
    });
  };

  /**
   * PHASE 11: AGENT MESSAGE SENT
   * Agent message visible, prepare for product picker
   */
  const executeAgentMessageSentPhase = () => {
    console.log('[DEMO] ✅ Phase: AGENT_MESSAGE_SENT');

    // Brief pause, then open product picker
    scheduleEvent(DEMO_TIMING.PAUSE_AFTER_AGENT_MSG, () => {
      demoStateRef.current.setPhase('opening-picker');
      executeOpeningPickerPhase();
    });
  };


  /**
   * PHASE 12: OPENING PICKER
   * Cursor moves to Product Picker button and opens modal
   */
  const executeOpeningPickerPhase = () => {
    console.log('[DEMO] 🖱️ Phase: OPENING_PICKER');

    // Show cursor
    demoStateRef.current.showCursor(true);
    demoStateRef.current.setCursorTarget('product-picker-btn');

    // After cursor arrives, click
    scheduleEvent(DEMO_TIMING.CURSOR_MOVE_SHORT, () => {
      demoStateRef.current.setIsClicking(true);
      
      scheduleEvent(DEMO_TIMING.CURSOR_CLICK_DURATION, () => {
        demoStateRef.current.setIsClicking(false);
        
        // Open Product Picker
        demoStateRef.current.setProductPickerOpen(true);
        console.log('[DEMO] 🎨 Product Picker opened - waiting for DOM render...');
        
        // ENTERPRISE FIX: Increased delay to 1800ms for complete Framer Motion animations
        // Modal fade-in (~300ms) + Grid stagger (~400ms) + Right panel slide (~300ms) + Buffer
        scheduleEvent(1800, () => {
          console.log('[DEMO] ⏰ DOM should be ready - starting product selection...');
          
          // DEBUG: List all available demo targets
          const allTargets = document.querySelectorAll('[data-demo-target]');
          console.log('[DEMO] 🎯 Available targets:', 
            Array.from(allTargets).map(el => el.getAttribute('data-demo-target'))
          );
          
          demoStateRef.current.setPhase('selecting-products');
          executeSelectingProductsPhase();
        });
      });
    });
  };

  /**
   * PHASE 13: SELECTING PRODUCTS
   * Select Jogger THEN Shirt - ONE AT A TIME!
   * ENTERPRISE FIX: Synchronize cursor clicks with actual product selection!
   */
  const executeSelectingProductsPhase = () => {
    console.log('[DEMO] 🛍️ Phase: SELECTING_PRODUCTS - Step-by-step synchronized');

    // Show cursor at Jogger position
    demoStateRef.current.showCursor(true);
    demoStateRef.current.setCursorTarget('product-jogger-checkbox');
    
    // STEP 1: SELECT JOGGER
    // Wait for cursor to arrive at Jogger
    scheduleEvent(1000, () => {
      console.log('[DEMO] 🖱️ Clicking Jogger...');
      
      // Click animation on Jogger
      demoStateRef.current.setIsClicking(true);
      
      scheduleEvent(300, () => {
        demoStateRef.current.setIsClicking(false);
        
        // ADD JOGGER NOW! (not both products)
        demoStateRef.current.setSelectedProducts(['prod_nike_jogger']);
        console.log('[DEMO] ✅ Jogger added to state');
        
        // Wait for Jogger to appear in UI (1200ms from ProductPicker useEffect)
        scheduleEvent(1400, () => {
          console.log('[DEMO] ✅ Jogger should be visible now');
          
          // STEP 2: SELECT SHIRT
          // Move cursor to T-Shirt
          demoStateRef.current.setCursorTarget('product-shirt-checkbox');
          
          // Wait for cursor to arrive at Shirt
          scheduleEvent(1000, () => {
            console.log('[DEMO] 🖱️ Clicking Shirt...');
            
            // Click animation on Shirt
            demoStateRef.current.setIsClicking(true);
            
            scheduleEvent(300, () => {
              demoStateRef.current.setIsClicking(false);
              
              // ADD SHIRT NOW! (add to existing selection)
              demoStateRef.current.addSelectedProduct('prod_nike_shirt');
              console.log('[DEMO] ✅ Shirt added to state');
              
              // Wait for Shirt to appear in UI
              scheduleEvent(1400, () => {
                console.log('[DEMO] ✅ Both products selected, moving to checkout...');
                
                // Both products visible, move to checkout
                demoStateRef.current.setPhase('creating-checkout');
                executeCreatingCheckoutPhase();
              });
            });
          });
        });
      });
    });
  };

  /**
   * PHASE 14: CREATING CHECKOUT
   * Create checkout link (simplified - no discount dialog, shows in card)
   * ENTERPRISE FIX: Button exists now because products are selected!
   */
  const executeCreatingCheckoutPhase = () => {
    console.log('[DEMO] 🔗 Phase: CREATING_CHECKOUT');

    // Show cursor moving to checkout button
    demoStateRef.current.showCursor(true);
    demoStateRef.current.setCursorTarget('create-checkout-btn');
    
    // Wait for cursor to arrive, then simulate click
    scheduleEvent(1000, () => {
      demoStateRef.current.setIsClicking(true);
      
      scheduleEvent(DEMO_TIMING.CURSOR_CLICK_DURATION, () => {
        demoStateRef.current.setIsClicking(false);
        
        console.log('[DEMO] ✅ Checkout button clicked - closing picker...');
        
        // Close Product Picker
        demoStateRef.current.setProductPickerOpen(false);
        demoStateRef.current.showCursor(false);
        
        // Clear selected products (for next loop)
        demoStateRef.current.setSelectedProducts([]);
        
        // Show checkout link card (with 20% discount already in the card)
        scheduleEvent(DEMO_TIMING.MODAL_CLOSE_DURATION + 200, () => {
          console.log('[DEMO] 📦 Showing checkout link card...');
          callbacksRef.current.onShowMessage?.('msg_demo_010');
          
          demoStateRef.current.setPhase('checkout-complete');
          executeCheckoutCompletePhase();
        });
      });
    });
  };

  /**
   * PHASE 15: CHECKOUT COMPLETE
   * Show final checkout card
   */
  const executeCheckoutCompletePhase = () => {
    console.log('[DEMO] ✅ Phase: CHECKOUT_COMPLETE - Checkout Link visible');

    // Show checkout card for 2 seconds
    scheduleEvent(DEMO_TIMING.PAUSE_SHOW_CHECKOUT, () => {
      demoStateRef.current.setPhase('demo-complete');
      executeDemoCompletePhase();
    });
  };

  /**
   * PHASE 16: DEMO COMPLETE
   * Demo finished, prepare for loop
   */
  const executeDemoCompletePhase = () => {
    console.log('[DEMO] ✅ Phase: DEMO_COMPLETE - 35 seconds complete!');

    // Pause, then loop if enabled
    scheduleEvent(1000, () => {
      if (loopEnabledRef.current) {
        demoStateRef.current.setPhase('looping');
        executeLoopPhase();
      }
    });
  };

  /**
   * PHASE 17: LOOP
   * Fade out and restart demo
   * ENTERPRISE FIX: Re-open all collapsed sidebars for clean restart!
   */
  const executeLoopPhase = () => {
    console.log('[DEMO] 🔄 Phase: LOOPING - Restarting demo...');

    // Pause before restart
    scheduleEvent(DEMO_TIMING.LOOP_DELAY, () => {
      // STEP 1: Re-open all collapsed sidebars by clicking them again!
      console.log('[DEMO] 🔄 Re-opening sidebars for clean restart...');
      
      // Re-open Icon Navigation if collapsed
      const iconNavBtn = document.querySelector('[data-demo-target="icon-nav-collapse-btn"]') as HTMLButtonElement;
      if (iconNavBtn && iconNavBtn.closest('.icon-nav-container')?.classList.contains('collapsed')) {
        iconNavBtn.click();
        console.log('[DEMO] ✅ Icon Nav re-opened');
      }
      
      // Re-open Categories if collapsed
      const categoryBtn = document.querySelector('[data-demo-target="category-toggle"]') as HTMLButtonElement;
      if (categoryBtn && categoryBtn.getAttribute('aria-expanded') === 'false') {
        categoryBtn.click();
        console.log('[DEMO] ✅ Categories re-opened');
      }
      
      // Re-open Main Sidebar if collapsed
      const sidebarBtn = document.querySelector('[data-demo-target="sidebar-collapse-btn"]') as HTMLButtonElement;
      if (sidebarBtn && sidebarBtn.closest('.dashboard-sidebar')?.classList.contains('collapsed')) {
        sidebarBtn.click();
        console.log('[DEMO] ✅ Main Sidebar re-opened');
      }
      
      // STEP 2: Reset demo state
      callbacksRef.current.onHideAllMessages?.();
      demoStateRef.current.resetDemo();
      
      // STEP 3: Wait for animations to complete, then restart
      scheduleEvent(DEMO_TIMING.FADE_OUT_DURATION + 500, () => {
        console.log('[DEMO] 🔄 RESTART - Demo starting again with clean UI!');
        executeUICleanupPhase(); // Start fresh with UI cleanup!
      });
    });
  };

  /**
   * START DEMO
   */
  const startDemo = () => {
    console.log('[DEMO] 🚀 STARTING DEMO - UI Cleanup First!');
    clearAllTimers();
    demoStateRef.current.resetDemo();
    demoStateRef.current.startDemo();
    executeUICleanupPhase(); // Start with UI cleanup!
  };

  /**
   * Notify parent of state changes
   */
  useEffect(() => {
    if (onStateChange) {
      onStateChange(demoStateRef.current.state);
    }
  }, [demoState.state, onStateChange]);

  /**
   * Auto-play on mount
   * FIX: Only run ONCE on mount, prevent infinite loop!
   */
  useEffect(() => {
    // Update loop ref when prop changes
    loopEnabledRef.current = loop;
  }, [loop]);

  useEffect(() => {
    if (autoPlay) {
      // AUTO-PLAY: Start demo wenn noch nicht gestartet
      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        
        const initTimer = setTimeout(() => {
          startDemo();
        }, 100);

        return () => {
          clearTimeout(initTimer);
        };
      }
    } else {
      // PAUSE: Reset demo wenn autoPlay false!
      console.log('[DemoOrchestrator] ⏸️ AutoPlay OFF - Resetting demo!');
      hasStartedRef.current = false;
      clearAllTimers();
      
      // Reset to initial state
      demoStateRef.current.resetDemo();
      callbacksRef.current.onHideAllMessages?.();
    }

    return () => {
      // Clean up on unmount
      clearAllTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  return null;
};

