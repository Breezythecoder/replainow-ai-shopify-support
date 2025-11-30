/**
 * 🎨 DASHBOARD LAYOUT - MAIN COMPONENT
 * 5-Column Layout: Sidebar, IconNav, Conversations, Chat, Customer Panel
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar';
import { IconNavigation } from './IconNavigation';
import { ConversationList } from './ConversationList';
import { ChatWindow } from './ChatWindow';
import { CustomerInfoPanel } from './CustomerInfoPanel';
import type { Conversation, Message, Customer, Order } from '@/types/dashboard';

import { 
  getExampleConversations, 
  exampleMessages, 
  exampleCustomers, 
  exampleOrders 
} from '@/data/dashboard';
import { useLocale } from '@/i18n/LocaleContext';

/**
 * Props Interface - All Optional for Demo Support
 */
export interface DashboardLayoutProps {
  // Data Props (optional - uses internal state if not provided)
  conversations?: Conversation[];
  selectedConversationId?: string;
  messages?: Message[];
  customers?: Customer[];
  orders?: Order[];
  
  // Callbacks (optional - uses console.log if not provided)
  onSelectConversation?: (id: string) => void;
  onSendMessage?: (content: string) => void;
  onTakeOver?: () => void;
  onGiveToAI?: () => void;
  onClose?: () => void;
  
  // Demo Support (optional - for live demo)
  demoInputValue?: string;
  demoProductPickerOpen?: boolean;
  demoOnProductPickerClose?: () => void;
  demoSelectedProductIds?: string[];
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  conversations: propConversations,
  selectedConversationId: propSelectedId,
  messages: propMessages,
  customers: propCustomers,
  orders: propOrders,
  onSelectConversation,
  onSendMessage,
  onTakeOver,
  onGiveToAI,
  onClose,
  demoInputValue,
  demoProductPickerOpen,
  demoOnProductPickerClose,
  demoSelectedProductIds
}) => {
  const { locale } = useLocale();
  
  // Internal state (only used if props not provided)
  const [internalSelectedId, setInternalSelectedId] = useState<string>('conv_001');

  // Use props if provided, otherwise use internal data
  const conversations = propConversations || getExampleConversations(locale);
  const selectedConversationId = propSelectedId || internalSelectedId;
  const customers = propCustomers || exampleCustomers;
  const orders = propOrders || exampleOrders;

  // Get selected conversation
  const selectedConversation = conversations.find(
    c => c.conversation_id === selectedConversationId
  );

  // Get messages (use props if provided, otherwise filter from exampleMessages)
  const conversationMessages = propMessages || exampleMessages.filter(
    m => m.conversation_id === selectedConversationId
  );

  const customer = customers[0];
  const order = orders[0];

  // Handlers (use props if provided, otherwise use defaults)
  const handleSelectConversation = onSelectConversation || setInternalSelectedId;
  
  const handleSendMessage = (content: string) => {
    if (onSendMessage) {
      onSendMessage(content);
    } else {
      console.log('Send message:', content);
    }
  };

  const handleTakeOver = () => {
    if (onTakeOver) {
      onTakeOver();
    } else {
      console.log('Take over conversation');
    }
  };

  const handleGiveToAI = () => {
    if (onGiveToAI) {
      onGiveToAI();
    } else {
      console.log('Give to AI');
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      console.log('Close conversation');
    }
  };

  return (
    <motion.div 
      className="dashboard-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.4,
        ease: [0.2, 0.8, 0.2, 1]
      }}
    >
      {/* Column 1: Sidebar (Dark Mode) */}
      <Sidebar 
        conversationCount={conversations.filter(c => c.status === 'open').length}
        mailCount={5}
      />

      {/* Column 2: Icon Navigation (Gray) */}
      <IconNavigation />

      {/* Main Content Area (Columns 3-5) */}
      <div className="flex flex-1">
        {/* Column 3: Conversation List */}
        <ConversationList
          conversations={conversations}
          selectedId={selectedConversationId}
          onSelect={handleSelectConversation}
        />

        {/* Column 4: Chat Window */}
        {selectedConversation && (
          <ChatWindow
            conversation={selectedConversation}
            messages={conversationMessages}
            onSendMessage={handleSendMessage}
            onTakeOver={handleTakeOver}
            onGiveToAI={handleGiveToAI}
            onClose={handleClose}
            demoInputValue={demoInputValue}
            demoProductPickerOpen={demoProductPickerOpen}
            demoOnProductPickerClose={demoOnProductPickerClose}
            demoSelectedProductIds={demoSelectedProductIds}
          />
        )}

        {/* Column 5: Customer Info Panel */}
        {selectedConversation && (
          <CustomerInfoPanel
            customer={customer}
            order={order}
            conversation={selectedConversation}
          />
        )}
      </div>
    </motion.div>
  );
};


