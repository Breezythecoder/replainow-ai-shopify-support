/**
 * 💬 CONVERSATION ITEM - PIXEL-PERFECT!
 * Individual conversation in the list
 */

import { formatDistanceToNow } from 'date-fns';
import { de, enUS, es, fr } from 'date-fns/locale';
import { Bot, User, AlertCircle } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { useLocale } from '@/i18n/LocaleContext';
import type { ConversationItemProps } from '@/types/dashboard';

export const ConversationItem = ({ conversation, selected, onClick }: ConversationItemProps) => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const dateFnsLocales = { de, en: enUS, es, fr };

  const formatTimestamp = (timestamp: string) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { 
        addSuffix: true, 
        locale: dateFnsLocales[locale as keyof typeof dateFnsLocales] || de
      }).replace('etwa ', '');
    } catch {
      return t('dashboard.conversationItem.justNow');
    }
  };

  const isUnread = conversation.unread_count && conversation.unread_count > 0;

  return (
    <div 
      className={`conversation-item ${selected ? 'selected' : ''} ${isUnread ? 'unread' : ''}`}
      onClick={onClick}
    >
      {/* Header Row */}
      <div className="conversation-item-header">
        <div className="conversation-avatar-section">
          <div className="conversation-avatar">
            {getInitials(conversation.customer_name)}
          </div>
          <div className="conversation-customer-info">
            <div className="conversation-customer-name">
              {conversation.customer_name}
            </div>
            <div className="conversation-customer-email">
              {conversation.customer_email}
            </div>
          </div>
        </div>
        <div className="conversation-timestamp">
          {formatTimestamp(conversation.last_message_at)}
        </div>
      </div>

      {/* Preview Row */}
      <div className="conversation-preview-row">
        {isUnread ? <div className="conversation-unread-dot"></div> : null}
        <span className="conversation-sender-label">
          {conversation.latest_message_sender === 'customer' ? t('dashboard.conversationList.senderLabels.customer') : 
           conversation.latest_message_sender === 'ai' ? t('dashboard.conversationList.senderLabels.ai') : t('dashboard.conversationList.senderLabels.agent')}
        </span>
        <span className="conversation-message-preview">
          {conversation.latest_message_preview}
        </span>
      </div>

      {/* Badges Row */}
      <div className="conversation-badges-row">
        {isUnread ? (
          <span className="conversation-badge conversation-badge-unread">
            <span className="badge-text">{conversation.unread_count} {t('dashboard.conversationItem.badges.new')}</span>
          </span>
        ) : null}
        {(conversation.handled_by && conversation.handled_by_name) ? (
          <span className="conversation-badge conversation-badge-agent">
            <User className="badge-icon-svg" />
            <span className="badge-text">{conversation.handled_by_name}</span>
          </span>
        ) : null}
        {(conversation.auto_mode && !conversation.handled_by) ? (
          <span className="conversation-badge conversation-badge-ai">
            <Bot className="badge-icon-svg" />
            <span className="badge-text">{t('dashboard.conversationItem.badges.ai')}</span>
          </span>
        ) : null}
        {(conversation.wants_human_agent && !conversation.handled_by) ? (
          <span className="conversation-badge conversation-badge-urgent">
            <AlertCircle className="badge-icon-svg" />
            <span className="badge-text">{t('dashboard.conversationItem.badges.urgent')}</span>
          </span>
        ) : null}
      </div>
    </div>
  );
};


