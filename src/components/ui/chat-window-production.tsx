/**
 * 💬 CHAT WINDOW PRODUCTION - PERFEKTE VERSION!
 * 1:1 vom Live Chat Repo mit Timestamps, AI Name, Typing Dots
 * ✅ MULTILINGUAL (DE, EN, ES, FR) - i18n Ready!
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Bot, User, ArrowUp } from "lucide-react";
import ProductCard from "@/components/marketing/cards/ProductCard";
import TrackingCard from "@/components/marketing/cards/TrackingCard";
import DiscountCard from "@/components/marketing/cards/DiscountCard";
import { useTranslation } from "@/i18n";

interface Message {
  id: number;
  type: 'user' | 'ai';
  text: string;
  delay: number;
  timestamp: string;
  card?: 'product' | 'tracking' | 'discount';
  cardData?: any;
}

export const ChatWindowProduction = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [userInputText, setUserInputText] = useState("");
  const [showTypingDots, setShowTypingDots] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  
  // ENTERPRISE: Visibility tracking für Performance!
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Timestamps für realistische Demo
  const getTimestamp = (minutesAgo: number = 0) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - minutesAgo);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // EVENT-DRIVEN - Keine delays mehr! Jede Message startet nach vorheriger!
  const conversation: Message[] = [
    {
      id: 1,
      type: 'user',
      text: t('marketing.liveChatDemo.messages.user1'),
      delay: 0, // Wird ignoriert (event-driven!)
      timestamp: getTimestamp(8),
    },
    {
      id: 2,
      type: 'ai',
      text: t('marketing.liveChatDemo.messages.ai1'),
      delay: 0,
      timestamp: getTimestamp(8),
    },
    {
      id: 3,
      type: 'user',
      text: t('marketing.liveChatDemo.messages.user2'),
      delay: 0,
      timestamp: getTimestamp(7),
    },
    {
      id: 4,
      type: 'ai',
      text: t('marketing.liveChatDemo.messages.ai2'),
      delay: 0,
      timestamp: getTimestamp(7),
      card: 'product',
      cardData: {
        title: t('marketing.liveChatDemo.productCard.title'),
        description: t('marketing.liveChatDemo.productCard.description'),
        price: t('marketing.liveChatDemo.productCard.price'),
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        stock: parseInt(t('marketing.liveChatDemo.productCard.stock')),
      }
    },
    {
      id: 5,
      type: 'user',
      text: t('marketing.liveChatDemo.messages.user3'),
      delay: 0,
      timestamp: getTimestamp(6),
    },
    {
      id: 6,
      type: 'ai',
      text: t('marketing.liveChatDemo.messages.ai3'),
      delay: 0,
      timestamp: getTimestamp(6),
    },
    {
      id: 7,
      type: 'user',
      text: t('marketing.liveChatDemo.messages.user4'),
      delay: 0,
      timestamp: getTimestamp(5),
    },
    {
      id: 8,
      type: 'ai',
      text: t('marketing.liveChatDemo.messages.ai4'),
      delay: 0,
      timestamp: getTimestamp(5),
      card: 'discount',
      cardData: {
        code: t('marketing.liveChatDemo.discountCard.code'),
        discount: t('marketing.liveChatDemo.discountCard.discount'),
        expiryDays: parseInt(t('marketing.liveChatDemo.discountCard.expiryDays')),
      }
    },
    {
      id: 9,
      type: 'user',
      text: t('marketing.liveChatDemo.messages.user5'),
      delay: 0,
      timestamp: getTimestamp(4),
    },
    {
      id: 10,
      type: 'ai',
      text: t('marketing.liveChatDemo.messages.ai5'),
      delay: 0,
      timestamp: getTimestamp(4),
      card: 'tracking',
      cardData: {
        orderNumber: t('marketing.liveChatDemo.trackingCard.orderNumber'),
        carrier: t('marketing.liveChatDemo.trackingCard.carrier'),
        trackingNumber: t('marketing.liveChatDemo.trackingCard.trackingNumber'),
        status: t('marketing.liveChatDemo.trackingCard.status'),
      }
    },
  ];

  // ENTERPRISE: Intersection Observer - Demo nur wenn sichtbar!
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('[ChatDemo] 🎬 Visible - Starting demo!');
          setIsVisible(true);
        } else {
          console.log('[ChatDemo] 👁️ Not visible - Stopping demo!');
          setIsVisible(false);
          // Reset demo when not visible
          setMessages([]);
          setCurrentMessageIndex(0);
          setIsTyping(false);
          setTypingText("");
          setUserInputText("");
          setShowTypingDots(false);
        }
      },
      {
        threshold: 0.3, // 30% sichtbar = start demo
        rootMargin: "0px",
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-scroll to bottom - smooth & multiple attempts
  useEffect(() => {
    const scrollToBottom = () => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTo({
          top: chatBodyRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    };
    
    scrollToBottom();
    const timer1 = setTimeout(scrollToBottom, 50);
    const timer2 = setTimeout(scrollToBottom, 200);
    const timer3 = setTimeout(scrollToBottom, 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [messages, isTyping, typingText, showTypingDots]);

  // ✅ EVENT-DRIVEN mit Visibility Check - Nur wenn sichtbar!
  useEffect(() => {
    // STOP wenn nicht sichtbar!
    if (!isVisible) {
      console.log('[ChatDemo] ⏸️ Not visible - skipping');
      return;
    }

    if (currentMessageIndex >= conversation.length) {
      // Loop restart
      setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
      }, 2000);
      return;
    }

    const message = conversation[currentMessageIndex];
    const isFirstMessage = currentMessageIndex === 0;
    
    // Smoothere Pausen - weniger flackern!
    const pauseBeforeStart = isFirstMessage ? 500 : 300; // 300ms statt 200ms
    
    const startTimer = setTimeout(() => {
      if (message.type === 'user') {
        // USER TYPING in input field
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex <= message.text.length) {
            setUserInputText(message.text.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
            // Send → Message erscheint → 200ms Pause → Nächste!
            setTimeout(() => {
              setUserInputText("");
              setMessages(prev => [...prev, message]);
              setTimeout(() => {
                setCurrentMessageIndex(prev => prev + 1);
              }, 300); // 300ms Pause - smoother!
            }, 250); // 250ms send animation - smoother!
          }
        }, 25);
      } else if (message.type === 'ai') {
        // AI: DIREKT Typing → Message → 200ms → Nächste! (KEINE DOTS!)
        setIsTyping(true);
        
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex <= message.text.length) {
            setTypingText(message.text.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
              setTimeout(() => {
                setIsTyping(false);
                setTypingText("");
                setMessages(prev => [...prev, message]);
                // Card animation (500ms) ODER Text pause (200ms) + 300ms → Nächste!
                const cardPause = message.card ? 500 : 200;
                setTimeout(() => {
                  setCurrentMessageIndex(prev => prev + 1);
                }, cardPause + 300); // +300ms Pause - smoother!
              }, 150); // 150ms - smoother!
          }
        }, 20);
      }
    }, pauseBeforeStart);

    return () => clearTimeout(startTimer);
  }, [currentMessageIndex, isVisible]); // Re-run wenn visibility ändert!

  return (
    <div className="relative w-full max-w-md mx-auto pb-8" ref={containerRef}>
      {/* Chat Container */}
      <div className="chat-window-container">
        
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-avatar-ai-fallback">
            <Bot className="w-5 h-5 text-white" />
          </div>
          
          <div className="chat-title">
            <div className="chat-title-info">
              <span className="chat-title-text">{t('marketing.liveChatDemo.aiName')}</span>
              <div className="chat-title-subtitle">
                <span className="online-status-dot"></span>
                <span>{t('marketing.liveChatDemo.status')}</span>
                <span style={{ opacity: 0.5 }}> · </span>
                <span>{t('marketing.liveChatDemo.responseTime')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div className="chat-body" ref={chatBodyRef} style={{ paddingBottom: '24px' }}>
          <div id="chat-messages" style={{ gap: '16px' }}>
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                  className="flex flex-col gap-1 w-full"
                  style={{ alignItems: message.type === 'user' ? 'flex-end' : 'flex-start' }}
                >
                  {/* Message Bubble */}
                  <div className={`chat-message ${message.type === 'user' ? 'user' : 'bot'}`}>
                    {message.text}
                  </div>

                  {/* Name & Timestamp UNTER der Bubble */}
                  {message.type === 'user' ? (
                    <div className="px-1 mt-0.5">
                      <span className="text-[11px] text-[#525252]">{message.timestamp}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-1 mt-0.5">
                      <span className="text-[11px] font-semibold text-black">{t('marketing.liveChatDemo.aiName')}</span>
                      <span className="text-[11px] text-[#525252]">{message.timestamp}</span>
                    </div>
                  )}

                  {/* Card Content - linksbündig mit extra spacing! */}
                  {message.card && message.cardData && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="w-full mt-2 mb-2"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      {message.card === 'product' && (
                        <ProductCard
                          title={message.cardData.title}
                          description={message.cardData.description}
                          price={message.cardData.price}
                          image={message.cardData.image}
                          stock={message.cardData.stock}
                          delay={0}
                        />
                      )}
                      {message.card === 'tracking' && (
                        <TrackingCard {...message.cardData} delay={0} />
                      )}
                      {message.card === 'discount' && (
                        <DiscountCard {...message.cardData} delay={0} />
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Typing Dots - 3 bouncing dots! */}
              {showTypingDots && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{ alignSelf: 'flex-start' }}
                >
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </motion.div>
              )}

              {/* Streaming Text */}
              {isTyping && typingText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-1"
                  style={{ alignItems: 'flex-start' }}
                >
                  <div className="chat-message bot">
                    {typingText}
                    <span className="inline-block w-0.5 h-4 bg-black ml-1 animate-pulse"></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <textarea
            placeholder={t('marketing.liveChatDemo.inputPlaceholder')}
            value={userInputText}
            readOnly
            rows={userInputText.length > 60 ? 3 : userInputText.length > 30 ? 2 : 1}
            className="flex-1 px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-sm outline-none resize-none min-h-[56px] transition-all duration-200"
            style={{
              color: userInputText ? '#000000' : '#A3A3A3',
              maxHeight: '120px', // Wie im echten Chat!
              height: 'auto'
            }}
          />
          <button 
            className="chat-send-button" 
            disabled={!userInputText}
            style={{
              background: userInputText 
                ? 'linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%)' 
                : 'linear-gradient(135deg, #F0F0F0 0%, #E5E5E5 100%)',
              color: userInputText ? 'white' : '#A3A3A3'
            }}
          >
            <ArrowUp className="w-5.5 h-5.5" />
          </button>
        </div>
      </div>

      {/* Powered by Badge - PROPER SPACING! */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2.5 shadow-xl border-2 border-gray-200"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-900">{t('marketing.liveChatDemo.poweredBy')}</span>
        </div>
      </motion.div>
    </div>
  );
};
