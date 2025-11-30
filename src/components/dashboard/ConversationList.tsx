/**
 * 📋 CONVERSATION LIST - LEFT COLUMN
 * List of all conversations with filters
 */

import { useState } from 'react';
import { Search, MessageSquare, Zap, CheckCircle, ChevronUp, ChevronDown, Target, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n';
import { ConversationItem } from './ConversationItem';
import type { ConversationListProps } from '@/types/dashboard';

export const ConversationList = ({ 
  conversations, 
  selectedId, 
  onSelect,
  filter
}: ConversationListProps) => {
  const { t } = useTranslation();
  const [activeStatusTab, setActiveStatusTab] = useState<'all' | 'active' | 'resolved'>('active');
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAgentRequestsOnly, setShowAgentRequestsOnly] = useState(false);

  const activeConversations = conversations.filter(c => c.status === 'open');
  const resolvedConversations = conversations.filter(c => c.status === 'resolved');
  
  const allConversations = conversations;
  
  let displayConversations = activeStatusTab === 'all' 
    ? allConversations 
    : activeStatusTab === 'active'
    ? activeConversations
    : resolvedConversations;
  
  // Filter by category
  if (activeCategory !== 'all') {
    displayConversations = displayConversations.filter(c => 
      c.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }
  
  // Filter by agent requests
  if (showAgentRequestsOnly) {
    displayConversations = displayConversations.filter(c => c.wants_human_agent);
  }

  // Category counts
  const categoryCount = (category: string) => {
    const filtered = activeStatusTab === 'all' 
      ? allConversations 
      : activeStatusTab === 'active'
      ? activeConversations
      : resolvedConversations;
    
    if (category === 'all') return filtered.length;
    return filtered.filter(c => c.category?.toLowerCase() === category.toLowerCase()).length;
  };

  return (
    <div className="dashboard-conversation-list-column">
      {/* Header */}
      <div className="conversation-list-header">
        <div className="conversation-header-title-row">
          <h2 className="conversation-list-title">{t('dashboard.conversationList.header.title')}</h2>
          <div className="live-badge">
            <span className="live-badge-dot"></span>
            <span className="live-badge-text">{t('dashboard.conversationList.header.liveBadge')}</span>
          </div>
        </div>

        {/* Search Box */}
        <div className="conversation-search-box">
          <Search className="conversation-search-icon" />
          <input
            type="search"
            placeholder={t('dashboard.conversationList.searchPlaceholder')}
            className="conversation-search-input"
          />
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="status-tabs-container">
        <div className="status-tabs-inner">
          {/* All Tab */}
          <button 
            className={`status-tab ${activeStatusTab === 'all' ? 'status-tab-active' : ''}`}
            onClick={() => setActiveStatusTab('all')}
          >
            <MessageSquare className="status-tab-icon" />
            <span className="status-tab-text">{t('dashboard.conversationList.tabs.all')}</span>
          </button>
          
          {/* Active Tab */}
          <button 
            className={`status-tab ${activeStatusTab === 'active' ? 'status-tab-active' : ''}`}
            onClick={() => setActiveStatusTab('active')}
          >
            <Zap className="status-tab-icon" />
            <span className="status-tab-text">{t('dashboard.conversationList.tabs.active')}</span>
          </button>
          
          {/* Resolved Tab */}
          <button 
            className={`status-tab ${activeStatusTab === 'resolved' ? 'status-tab-active' : ''}`}
            onClick={() => setActiveStatusTab('resolved')}
          >
            <CheckCircle className="status-tab-icon" />
            <span className="status-tab-text">{t('dashboard.conversationList.tabs.resolved')}</span>
          </button>
        </div>
      </div>

      {/* Category Dropdown & Chips */}
      <button 
        className="category-toggle" 
        aria-expanded={isCategoriesExpanded}
        onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
        data-demo-target="category-toggle"
      >
        <span className="category-toggle-text">{t('dashboard.conversationList.categories.all')}</span>
        {isCategoriesExpanded ? (
          <ChevronUp className="category-toggle-icon" />
        ) : (
          <ChevronDown className="category-toggle-icon" />
        )}
      </button>

      {isCategoriesExpanded && (
        <div className="category-chips-area">
          {/* Proactive Chip (Special - Purple!) */}
          <div className="chip-row chip-row-special">
            <button className="category-chip chip-proactive">
              <Target className="chip-proactive-icon" />
              <span className="chip-text">{t('dashboard.conversationList.categories.proactive')}</span>
              <span className="chip-count-badge chip-count-proactive">0</span>
            </button>
          </div>
          
          {/* Normal Chips (Multi-row grid) */}
          <div className="chip-row">
            <button 
              className={`category-chip ${activeCategory === 'all' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span className="chip-text">{t('dashboard.conversationList.tabs.all')}</span>
              <span className={`chip-count-badge ${activeCategory === 'all' ? 'chip-count-active' : ''}`}>
                {categoryCount('all')}
              </span>
            </button>
            
            <button 
              className={`category-chip ${activeCategory === 'complaint' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('complaint')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.complaint')}</span>
              <span className="chip-count-badge">{categoryCount('complaint')}</span>
            </button>
            
            <button 
              className={`category-chip ${activeCategory === 'return' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('return')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.return')}</span>
              <span className="chip-count-badge">{categoryCount('return')}</span>
            </button>
          </div>
          
          <div className="chip-row">
            <button 
              className={`category-chip ${activeCategory === 'support' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('support')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.support')}</span>
              <span className="chip-count-badge">{categoryCount('support')}</span>
            </button>
            
            <button 
              className={`category-chip ${activeCategory === 'presale' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('presale')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.presale')}</span>
              <span className="chip-count-badge">{categoryCount('presale')}</span>
            </button>
            
            <button 
              className={`category-chip ${activeCategory === 'product' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('product')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.product')}</span>
              <span className="chip-count-badge">{categoryCount('product')}</span>
            </button>
          </div>
          
          <div className="chip-row">
            <button 
              className={`category-chip ${activeCategory === 'cooperation' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('cooperation')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.cooperation')}</span>
              <span className="chip-count-badge">{categoryCount('cooperation')}</span>
            </button>
            
            <button 
              className={`category-chip ${activeCategory === 'delivery' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('delivery')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.delivery')}</span>
              <span className="chip-count-badge">{categoryCount('delivery')}</span>
            </button>
          </div>
          
          <div className="chip-row">
            <button 
              className={`category-chip ${activeCategory === 'spam' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('spam')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.spam')}</span>
              <span className="chip-count-badge">{categoryCount('spam')}</span>
            </button>
            
            <button 
              className={`category-chip ${activeCategory === 'billing' ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory('billing')}
            >
              <span className="chip-text">{t('dashboard.conversationList.categories.billing')}</span>
              <span className="chip-count-badge">{categoryCount('billing')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Agent Request Toggle */}
      <div className="agent-request-section">
        <button 
          className="agent-request-btn"
          aria-checked={showAgentRequestsOnly}
          onClick={() => setShowAgentRequestsOnly(!showAgentRequestsOnly)}
        >
          <HandHeart className="agent-request-icon" />
          <span className="agent-request-text">{t('dashboard.conversationList.filters.agentRequests')}</span>
        </button>
      </div>

      {/* Conversation Items List */}
      <div className="conversation-list">
        {displayConversations.map((conversation, index) => (
          <motion.div
            key={conversation.conversation_id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.05,
              duration: 0.3,
              ease: [0.2, 0.8, 0.2, 1]
            }}
          >
            <ConversationItem
              conversation={conversation}
              selected={selectedId === conversation.conversation_id}
              onClick={() => onSelect?.(conversation.conversation_id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

