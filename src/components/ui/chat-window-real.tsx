/**
 * 💬 REAL CHAT WINDOW - Exaktes Design vom Live Chat Repo!
 * 99% Minimal Professional | Enterprise Grade
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Bot, User, ArrowUp } from "lucide-react";
import ProductCard from "@/components/marketing/cards/ProductCard";
import TrackingCard from "@/components/marketing/cards/TrackingCard";
import DiscountCard from "@/components/marketing/cards/DiscountCard";

interface Message {
  id: number;
  type: 'user' | 'ai';
  text: string;
  delay: number;
  card?: 'product' | 'tracking' | 'discount';
  cardData?: any;
}

export const ChatWindowReal = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // ECHTE Demo Conversation
  const conversation: Message[] = [
    {
      id: 1,
      type: 'user',
      text: 'Wo ist meine Bestellung #4782?',
      delay: 800,
    },
    {
      id: 2,
      type: 'ai',
      text: 'Ihre Bestellung ist auf dem Weg! 📦',
      delay: 2000,
      card: 'tracking',
      cardData: {
        orderNumber: "4782",
        carrier: "DHL",
        trackingNumber: "JJD0048394345DE",
        status: "in-transit",
        expectedDelivery: "Morgen vor 18 Uhr",
      }
    },
    {
      id: 3,
      type: 'user',
      text: 'Perfekt! Habt ihr das auch in Blau?',
      delay: 4500,
    },
    {
      id: 4,
      type: 'ai',
      text: 'Ja! Das Urban Sneaker Set gibt es auch in Blau:',
      delay: 6000,
      card: 'product',
      cardData: {
        title: "Urban Sneaker Classic - Blau",
        description: "Premium Leder, wasserfest, atmungsaktiv",
        price: "89,99",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        stock: 12,
      }
    },
    {
      id: 5,
      type: 'user',
      text: 'Super! Gibt es noch einen Rabatt?',
      delay: 8500,
    },
    {
      id: 6,
      type: 'ai',
      text: 'Natürlich! Hier ist ein exklusiver 15% Rabattcode:',
      delay: 10000,
      card: 'discount',
      cardData: {
        code: "WELCOME15",
        discount: "15% Rabatt",
        expiryDays: 7,
        usageLimit: 1,
      }
    },
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping, typingText]);

  useEffect(() => {
    if (currentMessageIndex >= conversation.length) {
      setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
      }, 5000);
      return;
    }

    const message = conversation[currentMessageIndex];
    const timer = setTimeout(() => {
      if (message.type === 'ai') {
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
              setCurrentMessageIndex(prev => prev + 1);
            }, 300);
          }
        }, 40);
      } else {
        setMessages(prev => [...prev, message]);
        setCurrentMessageIndex(prev => prev + 1);
      }
    }, message.delay);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <div className="relative w-full max-w-md mx-auto pb-8">
      {/* Chat Container - EXAKTES Design! */}
      <div className="chat-window-container">
        
        {/* Chat Header - Minimal Professional */}
        <div className="chat-header">
          <div className="chat-avatar-fallback">
            <Bot className="w-4 h-4" />
          </div>
          <div className="chat-title">
            <div className="chat-title-text">ReplAInow AI</div>
            <div className="chat-status">Online · Antwortet in 3s</div>
          </div>
        </div>

        {/* Chat Body - Messages */}
        <div className="chat-body" ref={chatBodyRef}>
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} flex-col gap-2`}
              >
                {/* Message Bubble */}
                <div className={`flex gap-2 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end`}>
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-gray-300' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-3.5 h-3.5 text-gray-700" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>

                  {/* Text Bubble */}
                  <div className={`chat-message ${message.type === 'user' ? 'user' : 'bot'}`}>
                    {message.text}
                  </div>
                </div>

                {/* Card Content - ECHTE Cards! */}
                {message.card && message.cardData && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pl-9"
                  >
                    {message.card === 'product' && (
                      <div className="chat-product-card">
                        <img
                          src={message.cardData.image}
                          alt={message.cardData.title}
                          className="chat-product-image"
                        />
                        <div className="chat-product-main">
                          <div className="chat-product-name">{message.cardData.title}</div>
                          <div className="chat-product-price">€{message.cardData.price}</div>
                          <div className="chat-product-desc">{message.cardData.description}</div>
                          <div className="text-xs text-gray-600 mt-2">📦 {message.cardData.stock} auf Lager</div>
                        </div>
                        <div className="p-4 pt-0">
                          <button className="chat-product-btn">
                            Zum Produkt
                          </button>
                        </div>
                      </div>
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

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  {typingText ? (
                    <div className="chat-message bot">
                      {typingText}
                      <span className="inline-block w-0.5 h-4 bg-black ml-1 animate-pulse"></span>
                    </div>
                  ) : (
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Nachricht schreiben…"
            disabled
            className="flex-1 px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-sm text-gray-400 outline-none"
          />
          <button className="chat-send-button" disabled>
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Powered by Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1.5 shadow-lg border border-gray-200"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-gray-900">Powered by GPT-4</span>
        </div>
      </motion.div>
    </div>
  );
};

