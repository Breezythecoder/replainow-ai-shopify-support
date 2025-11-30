/**
 * 💬 CHAT WINDOW - CENTER COLUMN
 * Complete chat interface with messages and composer
 */

import { useEffect, useRef, useState } from 'react';
import { Send, Smile, Ticket, ShoppingBag, User, Bot, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n';
import { MessageBubble } from './MessageBubble';
import { ProductCardDashboard } from './ProductCardDashboard';
import { DiscountCardDashboard } from './DiscountCardDashboard';
import { TrackingCardDashboard } from './TrackingCardDashboard';
import { ProductPickerModal } from './ProductPickerModal';
import { CheckoutLinkCard } from './demo/CheckoutLinkCard';
import { nikeProducts } from '@/data/dashboard/products';
import type { ChatWindowProps } from '@/types/dashboard';

export const ChatWindow = ({ 
  conversation, 
  messages,
  onSendMessage,
  onTakeOver,
  onGiveToAI,
  onClose,
  demoInputValue,
  demoProductPickerOpen,
  demoOnProductPickerClose,
  demoSelectedProductIds
}: ChatWindowProps) => {
  const { t } = useTranslation();
  const messagesRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [localProductPickerOpen, setLocalProductPickerOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Check if AI is active (handling conversation)
  const isAIActive = conversation.auto_mode === true && !conversation.handled_by;
  const isAgentHandling = conversation.handled_by !== null;

  // Use demo input value if provided, otherwise use local state
  const displayInputValue = demoInputValue !== undefined ? demoInputValue : inputValue;
  
  // Use demo product picker state if provided, otherwise use local state
  const productPickerOpen = demoProductPickerOpen !== undefined ? demoProductPickerOpen : localProductPickerOpen;
  const handleProductPickerClose = demoOnProductPickerClose || (() => setLocalProductPickerOpen(false));
  
  console.log('[ChatWindow] 🎨 Render - ProductPicker:', { 
    open: productPickerOpen, 
    isDemo: demoProductPickerOpen !== undefined 
  });

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesRef.current) {
        messagesRef.current.scrollTo({
          top: messagesRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    };

    scrollToBottom();
    // Multiple timeouts for smooth scrolling (like in chat widget)
    const t1 = setTimeout(scrollToBottom, 50);
    const t2 = setTimeout(scrollToBottom, 200);
    const t3 = setTimeout(scrollToBottom, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [messages]);

  // AUTO-RESIZE TEXTAREA based on content (for demo typing effect!)
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to calculate new height
    textarea.style.height = 'auto';
    
    // Set height based on scrollHeight (content)
    const newHeight = Math.min(textarea.scrollHeight, 150); // Max 150px (about 6 lines)
    textarea.style.height = `${newHeight}px`;
    
    console.log('[ChatWindow] 📏 Textarea auto-resize:', { 
      value: displayInputValue, 
      height: newHeight 
    });
  }, [displayInputValue]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const textarea = e.currentTarget.querySelector('textarea');
    if (textarea && textarea.value.trim()) {
      onSendMessage?.(textarea.value.trim());
      textarea.value = '';
      
      // Reset textarea height after sending
      textarea.style.height = 'auto';
      
      // Also clear local input value
      setInputValue('');
    }
  };

  const handleSendProducts = (selectedProducts: any[]) => {
    console.log('Sending products to chat:', selectedProducts);
    // In production: Create product card messages
    // For demo: Just log and close
    setProductPickerOpen(false);
  };

  const handleCreateCheckout = (selectedProducts: any[], discountPercent?: number) => {
    console.log('Creating checkout link:', selectedProducts, discountPercent);
    // In production: Create checkout link
    // For demo: Just log and close
    setProductPickerOpen(false);
  };

  return (
    <div className="dashboard-chat-window">
      {/* Chat Header */}
      <header className="chat-header">
        <div className="chat-header-left">
          {/* Avatar */}
          <div className="chat-header-avatar">
            {conversation.customer_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
          </div>
          
          {/* Customer Info */}
          <div className="chat-customer-info-header">
            <h3 className="chat-customer-name-header">{conversation.customer_name}</h3>
            <span className="chat-status-header">
              <span className="status-dot"></span>
              {t('dashboard.chatWindow.status.active')}
            </span>
          </div>
        </div>

        <div className="chat-header-actions">
          {/* AI Active Badge (XL 1280px+ only!) */}
          {isAIActive && (
            <div className="ai-active-badge">
              <Bot className="ai-active-icon" />
              <span className="ai-active-text">{t('dashboard.chatWindow.badges.aiActive')}</span>
              <span className="ai-active-dot"></span>
            </div>
          )}

          {/* You're Handling Badge (XL 1280px+ only!) */}
          {isAgentHandling && (
            <div className="agent-handling-badge">
              <User className="agent-icon" />
              <span className="agent-text">{t('dashboard.chatWindow.badges.youHandling')}</span>
            </div>
          )}
          
          {/* Close Button (Always visible) */}
          <button 
            className="chat-action-btn chat-btn-outline"
            onClick={onClose}
            data-demo-target="close-btn"
          >
            <X className="btn-icon" />
            <span className="btn-text">{t('dashboard.chatWindow.buttons.close')}</span>
          </button>
          
          {/* Conditional Buttons based on state */}
          {isAIActive ? (
            // AI Active: Show Take Over button (Purple Primary!)
            <button 
              className="chat-action-btn chat-btn-primary"
              onClick={onTakeOver}
              data-demo-target="take-over-btn"
            >
              <User className="btn-icon" />
              <span className="btn-text">{t('dashboard.chatWindow.buttons.takeOver')}</span>
            </button>
          ) : (
            // Agent Handling: Show Give to AI button
            <button 
              className="chat-action-btn chat-btn-outline"
              onClick={onGiveToAI}
              data-demo-target="give-to-ai-btn"
            >
              <Bot className="btn-icon" />
              <span className="btn-text">{t('dashboard.chatWindow.buttons.giveToAI')}</span>
            </button>
          )}
        </div>
      </header>

      {/* Messages Container */}
      <div className="chat-messages-container" ref={messagesRef}>
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: [0.2, 0.8, 0.2, 1]
            }}
          >
            {/* Regular Message Bubble */}
            {message.type === 'text' && (
              <MessageBubble message={message} />
            )}

            {/* Product Card */}
            {message.type === 'product_card' && message.metadata?.product_title && (
              <div className="message-bubble-wrapper agent">
                <div className="message-content-wrapper">
                  <ProductCardDashboard
                    productId={message.metadata.product_id || ''}
                    title={message.metadata.product_title}
                    description={message.metadata.description}
                    price={message.metadata.product_price || ''}
                    image={message.metadata.product_image}
                    stock={message.metadata.inventory_quantity}
                    url={message.metadata.product_url}
                  />
                </div>
              </div>
            )}

            {/* Discount Card */}
            {message.type === 'discount_card' && message.metadata?.discount_data && (
              <div className="message-bubble-wrapper ai">
                <div className="message-content-wrapper">
                  <DiscountCardDashboard
                    code={message.metadata.discount_data.code}
                    type={message.metadata.discount_data.type}
                    value={message.metadata.discount_data.value}
                    expiresAt={message.metadata.discount_data.expires_at}
                    description={`${message.metadata.discount_data.value}${message.metadata.discount_data.type === 'PERCENTAGE' ? '%' : '€'} discount`}
                  />
                </div>
              </div>
            )}

            {/* Tracking Card */}
            {message.type === 'tracking_card' && message.metadata?.tracking_data && (
              <div className="message-bubble-wrapper ai">
                <div className="message-content-wrapper">
                  <TrackingCardDashboard
                    orderNumber={message.metadata.tracking_data.orderNumber}
                    carrier={message.metadata.tracking_data.carrier}
                    trackingNumber={message.metadata.tracking_data.trackingNumber}
                    status={message.metadata.tracking_data.status}
                    url={message.metadata.tracking_data.url}
                  />
                </div>
              </div>
            )}

            {/* Checkout Link Card */}
            {message.type === 'checkout_link' && message.metadata?.checkout_data && (
              <div className="message-bubble-wrapper agent">
                <div className="message-content-wrapper">
                  <CheckoutLinkCard
                    checkoutUrl={message.metadata.checkout_data.checkout_url}
                    products={message.metadata.checkout_data.products}
                    subtotal={message.metadata.checkout_data.subtotal}
                    discount={message.metadata.checkout_data.discount}
                    total={message.metadata.checkout_data.total}
                    currency={message.metadata.checkout_data.currency}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Composer Area */}
      <div className="composer-area-container">
        {isAIActive ? (
          // AI Active State: Show "AI is handling" message (NO input!)
          <div className="ai-handling-message-box">
            <div className="ai-handling-icon-wrapper">
              <Bot className="ai-handling-icon" />
            </div>
            <div className="ai-handling-text-content">
              <p className="ai-handling-title">{t('dashboard.chatWindow.composer.aiHandling')}</p>
              <p className="ai-handling-description">Click "{t('dashboard.chatWindow.buttons.takeOver')}" to send messages</p>
            </div>
          </div>
        ) : (
          // Normal State: Show full composer
          <form className="composer-inner" onSubmit={handleSend}>
            <div className="composer-toolbar">
              {/* Emoji Picker */}
              <button 
                type="button" 
                className="toolbar-btn toolbar-btn-emoji" 
                title={t('dashboard.chatWindow.toolbar.emoji')}
                data-demo-target="emoji-btn"
              >
                <Smile className="h-4 w-4" />
              </button>
              
              {/* Discount Picker */}
              <button 
                type="button" 
                className="toolbar-btn toolbar-btn-discount" 
                title={t('dashboard.chatWindow.toolbar.discount')}
                data-demo-target="discount-btn"
              >
                <Ticket className="h-4 w-4" />
              </button>
              
              {/* Product Picker */}
              <button 
                type="button" 
                className="toolbar-btn toolbar-btn-product" 
                title={t('dashboard.chatWindow.toolbar.product')}
                onClick={() => {
                  // Only handle click if not in demo mode
                  if (demoProductPickerOpen === undefined) {
                    setLocalProductPickerOpen(true);
                  }
                }}
                data-demo-target="product-picker-btn"
              >
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>

            <div className="composer-input-row">
              <textarea
                ref={textareaRef}
                className="composer-textarea"
                placeholder={t('dashboard.chatWindow.composer.placeholder')}
                rows={1}
                value={displayInputValue}
                onChange={(e) => setInputValue(e.target.value)}
                data-demo-target="message-input"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e as any);
                  }
                }}
                readOnly={demoInputValue !== undefined}
                style={{ 
                  resize: 'none', 
                  overflow: 'hidden',
                  minHeight: '40px',
                  maxHeight: '150px'
                }}
              />
              <button 
                type="submit" 
                className="composer-send-button"
                data-demo-target="send-btn"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="composer-hint">
              {t('dashboard.chatWindow.composer.hints.enter')} • {t('dashboard.chatWindow.composer.hints.shiftEnter')}
            </div>
          </form>
        )}
      </div>

      {/* Product Picker Modal */}
      <ProductPickerModal
        isOpen={productPickerOpen}
        onClose={handleProductPickerClose}
        products={nikeProducts}
        onSendProducts={handleSendProducts}
        onCreateCheckout={handleCreateCheckout}
        demoSelectedProductIds={demoSelectedProductIds}
      />
    </div>
  );
};

