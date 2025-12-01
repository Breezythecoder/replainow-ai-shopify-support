/**
 * 💭 TYPING INDICATOR - Demo Component
 * Three bouncing dots to show AI/Agent is typing
 * Matches message bubble design
 */

import React from 'react';
import { Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

export interface TypingIndicatorProps {
  sender: 'ai' | 'agent';
  visible: boolean;
  senderName?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ 
  sender, 
  visible,
  senderName = sender === 'ai' ? 'ReplAInow' : 'Agent'
}) => {
  if (!visible) return null;

  return (
    <motion.div
      className={`message-bubble-wrapper ${sender}`}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Avatar (AI or Agent) */}
      <div className="message-avatar">
        <div className={`avatar-circle ${sender}`}>
          {sender === 'ai' ? (
            <Bot className="avatar-icon" size={16} />
          ) : (
            <User className="avatar-icon" size={16} />
          )}
        </div>
      </div>

      {/* Typing Bubble */}
      <div className="message-content-wrapper">
        <div className="typing-indicator-bubble">
          <div className="typing-dots">
            <motion.span
              className="typing-dot"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            />
            <motion.span
              className="typing-dot"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.15
              }}
            />
            <motion.span
              className="typing-dot"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};


















