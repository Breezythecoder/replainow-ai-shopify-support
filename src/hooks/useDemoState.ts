/**
 * 🎬 USE DEMO STATE - Demo State Management Hook
 * Manages the complete state of the live demo
 */

import { useState, useCallback } from 'react';
import type { DemoPhase } from '@/components/dashboard/demo/demoConfig';

export interface DemoState {
  // Phase Control
  phase: DemoPhase;
  isPlaying: boolean;
  isPaused: boolean;
  
  // Message Visibility
  visibleMessageIds: string[];
  
  // Typing State
  showTypingDots: boolean;
  typingSender: 'ai' | 'agent' | null;
  typingText: string;
  isTypingInInput: boolean;
  
  // Conversation State
  conversationAutoMode: boolean;
  conversationHandledBy: string | null;
  conversationHandledByName: string | null;
  
  // Cursor State
  showCursor: boolean;
  cursorPosition: { x: number; y: number };
  cursorTarget: string | null;
  isClicking: boolean;
  
  // Modal State
  productPickerOpen: boolean;
  selectedProductIds: string[];
  discountDialogOpen: boolean;
  selectedDiscount: number | null;
  
  // UI State (NEW - for demo-controlled collapses!)
  iconNavCollapsed: boolean;
  categoriesCollapsed: boolean;
  sidebarCollapsed: boolean;
  
  // Timing
  demoStartTime: number;
  currentTime: number;
}

export const INITIAL_DEMO_STATE: DemoState = {
  phase: 'initial',
  isPlaying: false,
  isPaused: false,
  
  visibleMessageIds: [],
  
  showTypingDots: false,
  typingSender: null,
  typingText: '',
  isTypingInInput: false,
  
  conversationAutoMode: true,
  conversationHandledBy: null,
  conversationHandledByName: null,
  
  showCursor: false,
  cursorPosition: { x: 0, y: 0 },
  cursorTarget: null,
  isClicking: false,
  
  productPickerOpen: false,
  selectedProductIds: [],
  discountDialogOpen: false,
  selectedDiscount: null,
  
  // UI State (start expanded, collapse during demo)
  iconNavCollapsed: false,
  categoriesCollapsed: false,
  sidebarCollapsed: false,
  
  demoStartTime: 0,
  currentTime: 0
};

export const useDemoState = () => {
  const [state, setState] = useState<DemoState>(INITIAL_DEMO_STATE);

  // Phase Management
  const setPhase = useCallback((phase: DemoPhase) => {
    setState(prev => ({ ...prev, phase }));
  }, []);

  const startDemo = useCallback(() => {
    setState(prev => ({
      ...prev,
      isPlaying: true,
      isPaused: false,
      demoStartTime: Date.now(),
      phase: 'showing-messages'
    }));
  }, []);

  const pauseDemo = useCallback(() => {
    setState(prev => ({ ...prev, isPaused: true, isPlaying: false }));
  }, []);

  const resumeDemo = useCallback(() => {
    setState(prev => ({ ...prev, isPaused: false, isPlaying: true }));
  }, []);

  const resetDemo = useCallback(() => {
    setState(INITIAL_DEMO_STATE);
  }, []);

  // Message Visibility
  const showMessage = useCallback((messageId: string) => {
    setState(prev => ({
      ...prev,
      visibleMessageIds: [...prev.visibleMessageIds, messageId]
    }));
  }, []);

  const hideAllMessages = useCallback(() => {
    setState(prev => ({ ...prev, visibleMessageIds: [] }));
  }, []);

  // Typing State
  const startTypingDots = useCallback((sender: 'ai' | 'agent') => {
    setState(prev => ({
      ...prev,
      showTypingDots: true,
      typingSender: sender
    }));
  }, []);

  const stopTypingDots = useCallback(() => {
    setState(prev => ({
      ...prev,
      showTypingDots: false,
      typingSender: null
    }));
  }, []);

  const setTypingText = useCallback((text: string) => {
    setState(prev => ({ ...prev, typingText: text }));
  }, []);

  const setIsTypingInInput = useCallback((isTyping: boolean) => {
    setState(prev => ({ ...prev, isTypingInInput: isTyping }));
  }, []);

  // Conversation State
  const setConversationState = useCallback((
    autoMode: boolean,
    handledBy: string | null,
    handledByName?: string | null
  ) => {
    setState(prev => ({
      ...prev,
      conversationAutoMode: autoMode,
      conversationHandledBy: handledBy,
      conversationHandledByName: handledByName || null
    }));
  }, []);

  // Cursor State
  const showCursor = useCallback((show: boolean) => {
    console.log('[useDemoState] 🖱️ showCursor called:', show);
    setState(prev => {
      console.log('[useDemoState] 🔄 Updating state - showCursor:', show);
      return { ...prev, showCursor: show };
    });
  }, []);

  const setCursorPosition = useCallback((x: number, y: number) => {
    setState(prev => ({ ...prev, cursorPosition: { x, y } }));
  }, []);

  const setCursorTarget = useCallback((target: string | null) => {
    console.log('[useDemoState] 🎯 setCursorTarget called:', target);
    setState(prev => ({ ...prev, cursorTarget: target }));
  }, []);

  const setIsClicking = useCallback((clicking: boolean) => {
    setState(prev => ({ ...prev, isClicking: clicking }));
  }, []);

  // Modal State
  const setProductPickerOpen = useCallback((open: boolean) => {
    setState(prev => ({ ...prev, productPickerOpen: open }));
  }, []);

  const setSelectedProducts = useCallback((productIds: string[]) => {
    setState(prev => ({ ...prev, selectedProductIds: productIds }));
  }, []);

  const addSelectedProduct = useCallback((productId: string) => {
    setState(prev => ({
      ...prev,
      selectedProductIds: [...prev.selectedProductIds, productId]
    }));
  }, []);

  const setDiscountDialogOpen = useCallback((open: boolean) => {
    setState(prev => ({ ...prev, discountDialogOpen: open }));
  }, []);

  const setSelectedDiscount = useCallback((discount: number | null) => {
    setState(prev => ({ ...prev, selectedDiscount: discount }));
  }, []);

  // UI State (NEW - for demo-controlled collapses!)
  const setIconNavCollapsed = useCallback((collapsed: boolean) => {
    setState(prev => ({ ...prev, iconNavCollapsed: collapsed }));
  }, []);

  const setCategoriesCollapsed = useCallback((collapsed: boolean) => {
    setState(prev => ({ ...prev, categoriesCollapsed: collapsed }));
  }, []);

  const setSidebarCollapsed = useCallback((collapsed: boolean) => {
    setState(prev => ({ ...prev, sidebarCollapsed: collapsed }));
  }, []);

  // Time
  const updateCurrentTime = useCallback((time: number) => {
    setState(prev => ({ ...prev, currentTime: time }));
  }, []);

  return {
    state,
    setState,
    
    // Phase
    setPhase,
    startDemo,
    pauseDemo,
    resumeDemo,
    resetDemo,
    
    // Messages
    showMessage,
    hideAllMessages,
    
    // Typing
    startTypingDots,
    stopTypingDots,
    setTypingText,
    setIsTypingInInput,
    
    // Conversation
    setConversationState,
    
    // Cursor
    showCursor,
    setCursorPosition,
    setCursorTarget,
    setIsClicking,
    
    // Modals
    setProductPickerOpen,
    setSelectedProducts,
    addSelectedProduct,
    setDiscountDialogOpen,
    setSelectedDiscount,
    
    // UI State
    setIconNavCollapsed,
    setCategoriesCollapsed,
    setSidebarCollapsed,
    
    // Time
    updateCurrentTime
  };
};







