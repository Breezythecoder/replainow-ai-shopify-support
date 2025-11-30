/**
 * 💬 Animated Chat Demo - Zeigt AI in Aktion!
 * Live typing effect, chat bubbles animieren sich rein
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, User, ArrowRight, Sparkles } from "lucide-react";

interface Message {
  id: number;
  type: 'user' | 'ai';
  text: string;
  delay: number;
}

export const AnimatedChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingMessage, setTypingMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);

  const chatSequence: Message[] = [
    {
      id: 1,
      type: 'user',
      text: 'Wo ist meine Bestellung #4782?',
      delay: 500,
    },
    {
      id: 2,
      type: 'ai',
      text: 'Ihre Bestellung ist auf dem Weg! 📦 Aktueller Status: In Zustellung. Voraussichtliche Lieferung: Morgen vor 18 Uhr.',
      delay: 2000,
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
      text: 'Ja! Das "Urban Sneaker Set" gibt es auch in Blau. Ich schicke Ihnen direkt den Link: [Produkt ansehen] 💙',
      delay: 6500,
    },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let messageTimeout: NodeJS.Timeout;
    let typingTimeout: NodeJS.Timeout;

    const showNextMessage = () => {
      if (currentIndex >= chatSequence.length) {
        // Reset und von vorne
        setTimeout(() => {
          setMessages([]);
          currentIndex = 0;
          showNextMessage();
        }, 3000);
        return;
      }

      const message = chatSequence[currentIndex];

      messageTimeout = setTimeout(() => {
        if (message.type === 'ai') {
          setIsTyping(true);
          
          // Typing effect
          let charIndex = 0;
          const typeText = () => {
            if (charIndex < message.text.length) {
              setTypingMessage(message.text.slice(0, charIndex + 1));
              charIndex++;
              typingTimeout = setTimeout(typeText, 30);
            } else {
              setMessages((prev) => [...prev, message]);
              setTypingMessage("");
              setIsTyping(false);
              currentIndex++;
              showNextMessage();
            }
          };
          typeText();
        } else {
          setMessages((prev) => [...prev, message]);
          currentIndex++;
          showNextMessage();
        }
      }, message.delay);
    };

    showNextMessage();

    return () => {
      clearTimeout(messageTimeout);
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Chat Container */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
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
        <div className="p-6 space-y-4 min-h-[400px] bg-gray-50">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
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

                  {/* Message Bubble */}
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gray-200 text-gray-900'
                      : 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && typingMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg">
                    <p className="text-sm leading-relaxed">
                      {typingMessage}
                      <span className="inline-block w-1 h-4 bg-white ml-1 animate-pulse"></span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Typing dots when AI is about to respond */}
            {isTyping && !typingMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

        {/* Chat Input - Disabled aber zeigt UI */}
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Nachricht schreiben..."
              disabled
              className="flex-1 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-400"
            />
            <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Badge unter dem Chat */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border border-purple-200"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-gray-900">Powered by GPT-4</span>
        </div>
      </motion.div>
    </div>
  );
};

