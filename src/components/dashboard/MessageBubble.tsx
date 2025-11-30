/**
 * 💬 MESSAGE BUBBLE - CUSTOMER / AI / AGENT
 * Three different bubble designs!
 */

import { format } from 'date-fns';
import { User, Bot, UserCircle } from 'lucide-react';
import { useTranslation } from '@/i18n';
import type { MessageBubbleProps } from '@/types/dashboard';

export const MessageBubble = ({ 
  message, 
  showAvatar = true, 
  showTimestamp = true, 
  showSenderName = true 
}: MessageBubbleProps) => {
  const { t } = useTranslation();
  
  const formatTime = (timestamp: string) => {
    try {
      return format(new Date(timestamp), 'HH:mm');
    } catch {
      return '';
    }
  };

  const getIcon = () => {
    if (message.sender === 'customer') return User;
    if (message.sender === 'ai') return Bot;
    return UserCircle;
  };

  // Get message content - translate if it's a translation key
  const getMessageContent = () => {
    if (message.translate && message.content.startsWith('dashboard.')) {
      return t(message.content);
    }
    return message.content;
  };

  const Icon = getIcon();

  return (
    <div className={`message-bubble-wrapper ${message.sender}`}>
      {/* Avatar */}
      {showAvatar && (
        <div className={`message-avatar ${message.sender}`}>
          {/* Agent with photo: Show image! */}
          {message.sender === 'agent' && message.agent_avatar_url ? (
            <img 
              src={message.agent_avatar_url} 
              alt={message.agent_display_name || 'Agent'}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Icon className="w-5 h-5" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="message-content-wrapper">
        {/* Message Bubble */}
        {message.content && (
          <div className={`message-bubble ${message.sender}`}>
            {getMessageContent()}
          </div>
        )}

        {/* Metadata (Timestamp + Sender Name) */}
        {(showTimestamp || showSenderName) && (
          <div className="message-metadata">
            {/* Customer: Nur Timestamp (kein Name!) */}
            {message.sender === 'customer' ? (
              showTimestamp && (
                <span className="message-timestamp">
                  {formatTime(message.created_at)}
                </span>
              )
            ) : (
              // AI/Agent: Name + Timestamp
              <>
                {showSenderName && (
                  <span className="message-sender-name">
                    {message.sender === 'ai' 
                      ? 'ReplAInow AI' 
                      : message.agent_display_name || message.sender_name}
                  </span>
                )}
                {showTimestamp && (
                  <span className="message-timestamp">
                    {formatTime(message.created_at)}
                  </span>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};



