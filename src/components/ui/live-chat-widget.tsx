/**
 * 💬 LIVE CHAT WIDGET - ECHTES Design!
 * Mit echten ProductCards, TrackingCards, DiscountCards!
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, User, ArrowRight } from "lucide-react";
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

export const LiveChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");

  // ECHTE Demo Conversation mit ECHTEN Cards!
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
      text: 'Super! Habt ihr das auch in anderen Farben?',
      delay: 4000,
    },
    {
      id: 4,
      type: 'ai',
      text: 'Ja! Das Urban Sneaker Set gibt es auch in Blau:',
      delay: 5500,
      card: 'product',
      cardData: {
        title: "Urban Sneaker Set - Blau",
        description: "Premium Leder, wasserfest, atmungsaktiv",
        price: "€89,99",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        stock: 12,
      }
    },
    {
      id: 5,
      type: 'user',
      text: 'Perfekt! Gibt es noch einen Rabatt?',
      delay: 7500,
    },
    {
      id: 6,
      type: 'ai',
      text: 'Natürlich! Hier ist ein exklusiver 15% Rabattcode für Sie:',
      delay: 9000,
      card: 'discount',
      cardData: {
        code: "WELCOME15",
        discount: "15% Rabatt",
        expiryDays: 7,
        usageLimit: 1,
      }
    },
  ];

  useEffect(() => {
    if (currentMessageIndex >= conversation.length) {
      // Reset nach Ende
      setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
      }, 5000);
      return;
    }

    const message = conversation[currentMessageIndex];
    const timer = setTimeout(() => {
      if (message.type === 'ai') {
        // AI typing effect
        setIsTyping(true);
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          if (charIndex <= message.text.length) {
            setTypingText(message.text.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
            setTypingText("");
            setMessages(prev => [...prev, message]);
            setCurrentMessageIndex(prev => prev + 1);
          }
        }, 30);
      } else {
        // User message - instant
        setMessages(prev => [...prev, message]);
        setCurrentMessageIndex(prev => prev + 1);
      }
    }, message.delay);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* 🔒 CLICK BLOCKER - Prevents ALL user interaction with chat demo */}
      <div
        className="absolute inset-0 z-[9999]"
        style={{
          cursor: "default",
          userSelect: "none",
          pointerEvents: "all",
          backgroundColor: "transparent",
        }}
        aria-hidden="true"
      />
      
      {/* Chat Container */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold flex items-center gap-2">
                ReplAInow AI
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-purple-100 text-xs">Online · Antwortet in 3s</div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-4 min-h-[500px] max-h-[500px] overflow-y-auto bg-gray-50">
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
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-gray-300' 
                      : 'bg-gradient-to-br from-purple-500 to-violet-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-gray-700" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Text Message */}
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gray-200 text-gray-900'
                        : 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>

                    {/* Card Content - ECHTE CARDS! */}
                    {message.card && message.cardData && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {message.card === 'product' && (
                          <ProductCard {...message.cardData} />
                        )}
                        {message.card === 'tracking' && (
                          <TrackingCard {...message.cardData} />
                        )}
                        {message.card === 'discount' && (
                          <DiscountCard {...message.cardData} />
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator mit Text */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-2 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg">
                    <p className="text-sm leading-relaxed">
                      {typingText}
                      <span className="inline-block w-0.5 h-4 bg-white ml-1 animate-pulse"></span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Typing dots wenn AI gleich antwortet */}
            {isTyping && !typingText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white shadow-md border border-gray-200">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chat Input */}
        <div className="px-4 py-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Nachricht schreiben..."
              disabled
              className="flex-1 px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-400 focus:outline-none"
            />
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center shadow-lg">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Powered by Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border border-purple-200"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-gray-900">Powered by GPT-4</span>
        </div>
      </motion.div>
    </div>
  );
};















