/**
 * 🎬 DASHBOARD DEMO SHOWCASE - Complete Integration
 * Wraps DashboardLayout with DemoOrchestrator for live demo
 * This is the MAIN component for the marketing website
 */

import React, { useState, useCallback, useEffect } from 'react';
import { DashboardLayout } from '../DashboardLayout';
import { DemoOrchestrator } from './DemoOrchestrator';
import { AnimatedCursor } from './AnimatedCursor';
import { CursorPortal } from './CursorPortal';
import { TypingIndicator } from './TypingIndicator';
import { demoMessages, DEMO_INITIAL_MESSAGES } from '@/data/dashboard/demoMessages';
import { getExampleConversations } from '@/data/dashboard/conversations';
import { exampleCustomers } from '@/data/dashboard/customers';
import { exampleOrders } from '@/data/dashboard/orders';
import { useLocale } from '@/i18n/LocaleContext';
import type { Conversation, Message } from '@/types/dashboard';
import type { DemoState } from '@/hooks/useDemoState';

export interface DashboardDemoShowcaseProps {
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

export const DashboardDemoShowcase: React.FC<DashboardDemoShowcaseProps> = ({
  autoPlay = true,
  loop = true,
  className = ''
}) => {
  const { locale } = useLocale();
  
  // Demo State
  const [demoActive, setDemoActive] = useState(false);
  const [visibleMessageIds, setVisibleMessageIds] = useState<string[]>(DEMO_INITIAL_MESSAGES);
  const [conversation, setConversation] = useState<Conversation>(getExampleConversations(locale)[0]);
  
  // FIX: Batch Demo UI State updates into single object to prevent multiple re-renders
  const [demoUIState, setDemoUIState] = useState({
    showTypingDots: false,
    typingSender: null as 'ai' | 'agent' | null,
    typingText: '',
    showCursor: false,
    cursorTarget: null as string | null,
    isClicking: false,
    productPickerOpen: false,
    selectedProductIds: [] as string[], // Demo-controlled selected products
    discountDialogOpen: false,
    selectedDiscount: null as number | null,
    // UI State (NEW!)
    iconNavCollapsed: false,
    categoriesCollapsed: false,
    sidebarCollapsed: false
  });
  
  console.log('[DashboardDemoShowcase] 🎬 Demo UI State:', {
    selectedProductIds: demoUIState.selectedProductIds,
    productPickerOpen: demoUIState.productPickerOpen,
    iconNavCollapsed: demoUIState.iconNavCollapsed,
    categoriesCollapsed: demoUIState.categoriesCollapsed,
    sidebarCollapsed: demoUIState.sidebarCollapsed
  });

  // Update conversation when locale changes
  useEffect(() => {
    setConversation(getExampleConversations(locale)[0]);
  }, [locale]);

  // Computed: Visible messages
  const visibleMessages = demoMessages.filter(msg => 
    visibleMessageIds.includes(msg.id)
  );

  /**
   * CALLBACK: Show a message
   */
  const handleShowMessage = useCallback((messageId: string) => {
    setVisibleMessageIds(prev => {
      if (prev.includes(messageId)) return prev;
      return [...prev, messageId];
    });
  }, []);

  /**
   * CALLBACK: Hide all messages
   */
  const handleHideAllMessages = useCallback(() => {
    setVisibleMessageIds([]);
  }, []);

  /**
   * CALLBACK: Update conversation state
   */
  const handleUpdateConversation = useCallback((updates: Partial<Conversation>) => {
    setConversation(prev => ({ ...prev, ...updates }));
  }, []);

  /**
   * CALLBACK: Handle product picker close
   */
  const handleProductPickerClose = useCallback(() => {
    console.log('[DashboardDemoShowcase] 🔍 Product Picker Close requested');
    // In demo mode, we don't actually close it via user action
    // It's controlled by the demo orchestrator
  }, []);

  /**
   * CALLBACK: Handle demo state changes
   * FIX: Single state update instead of multiple ones!
   */
  const handleDemoStateChange = useCallback((demoState: DemoState) => {
    console.log('[DashboardDemoShowcase] 🔄 State Update Received:', {
      showCursor: demoState.showCursor,
      cursorTarget: demoState.cursorTarget,
      isClicking: demoState.isClicking,
      typingText: demoState.typingText,
      productPickerOpen: demoState.productPickerOpen,
      iconNavCollapsed: demoState.iconNavCollapsed,
      categoriesCollapsed: demoState.categoriesCollapsed,
      sidebarCollapsed: demoState.sidebarCollapsed,
      phase: demoState.phase
    });
    
    setDemoUIState({
      showTypingDots: demoState.showTypingDots,
      typingSender: demoState.typingSender,
      typingText: demoState.typingText,
      showCursor: demoState.showCursor,
      cursorTarget: demoState.cursorTarget,
      isClicking: demoState.isClicking,
      productPickerOpen: demoState.productPickerOpen,
      selectedProductIds: demoState.selectedProductIds,
      discountDialogOpen: demoState.discountDialogOpen,
      selectedDiscount: demoState.selectedDiscount,
      // UI State (NEW!)
      iconNavCollapsed: demoState.iconNavCollapsed,
      categoriesCollapsed: demoState.categoriesCollapsed,
      sidebarCollapsed: demoState.sidebarCollapsed
    });
  }, []);

  /**
   * RENDER: Dashboard with demo controls
   */
  return (
    <div 
      className={`dashboard-demo-showcase ${className}`}
      style={{ position: 'relative' }}
    >
      {/* Demo Orchestrator (invisible controller) */}
      <DemoOrchestrator
        autoPlay={autoPlay}
        loop={loop}
        onShowMessage={handleShowMessage}
        onHideAllMessages={handleHideAllMessages}
        onUpdateConversation={handleUpdateConversation}
        onStateChange={handleDemoStateChange}
      />

      {/* Animated Cursor - BACK TO PORTAL with manual zoom! */}
      {/* FINAL FIX DEC 2025: position:fixed + manual transform:scale() = PERFECT! */}
      <CursorPortal>
        <AnimatedCursor
          visible={demoUIState.showCursor}
          targetSelector={demoUIState.cursorTarget}
          isClicking={demoUIState.isClicking}
        />
      </CursorPortal>

      {/* Dashboard Layout */}
      <DashboardLayout
        conversations={[conversation]}
        selectedConversationId={conversation.conversation_id}
        messages={visibleMessages}
        customers={exampleCustomers}
        orders={exampleOrders}
        onSelectConversation={() => {}}
        onSendMessage={(content) => {
          console.log('[DEMO] Send message:', content);
        }}
        onTakeOver={() => {
          console.log('[DEMO] Take over clicked');
        }}
        onGiveToAI={() => {
          console.log('[DEMO] Give to AI clicked');
        }}
        onClose={() => {
          console.log('[DEMO] Close clicked');
        }}
        demoInputValue={demoUIState.typingText}
        demoProductPickerOpen={demoUIState.productPickerOpen}
        demoOnProductPickerClose={handleProductPickerClose}
        demoSelectedProductIds={demoUIState.selectedProductIds}
      />

      {/* Typing Indicator Overlay (if active) */}
      {demoUIState.showTypingDots && demoUIState.typingSender && (
        <div 
          className="typing-indicator-overlay"
          style={{
            position: 'absolute',
            bottom: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100
          }}
        >
          <TypingIndicator
            sender={demoUIState.typingSender}
            visible={demoUIState.showTypingDots}
          />
        </div>
      )}

      {/* Typing Text in Input (if active) */}
      {demoUIState.typingText && (
        <div className="demo-typing-text-overlay">
          {/* This would be rendered inside the composer */}
          {/* For now, we'll handle this in ChatWindow directly */}
        </div>
      )}
    </div>
  );
};

