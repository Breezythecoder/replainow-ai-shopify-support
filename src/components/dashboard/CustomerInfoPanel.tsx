/**
 * 👤 CUSTOMER INFO PANEL - RIGHT COLUMN
 * Customer details, orders, and AI insights
 * PRODUCTION SPECS - Dashboard Agent (Nov 29, 2025)
 */

import { ExternalLink, Package2, ChevronUp } from 'lucide-react';
import { useTranslation } from '@/i18n';
import type { CustomerInfoPanelProps } from '@/types/dashboard';
import { useState } from 'react';

export const CustomerInfoPanel = ({ 
  customer, 
  order, 
  conversation 
}: CustomerInfoPanelProps) => {
  const { t } = useTranslation();
  const [orderExpanded, setOrderExpanded] = useState(true);
  const [insightsExpanded, setInsightsExpanded] = useState(true);

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  const getSentimentColor = (sentiment?: string) => {
    if (sentiment === 'positive') return 'positive';
    if (sentiment === 'negative') return 'negative';
    return 'neutral';
  };

  const getStatusClass = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('fulfilled')) return 'status-fulfilled';
    if (statusLower.includes('partial')) return 'status-partial';
    if (statusLower.includes('cancelled')) return 'status-cancelled';
    return 'status-unfulfilled';
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="dashboard-customer-panel">
      {/* Customer Header Section */}
      <section className="customer-panel-header">
        <div className="customer-header-card">
          {/* Avatar (Left) */}
          <div className="customer-avatar-large">
            {getInitials(customer.first_name, customer.last_name)}
          </div>

          {/* Customer Info (Right of Avatar) */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="customer-name-large">
                {customer.first_name} {customer.last_name}
              </h3>
              {customer.is_verified && (
                <span className="text-xs bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded-full font-semibold">
                  ✓ {t('dashboard.customerPanel.verified')}
                </span>
              )}
              <a 
                href="#"
                className="text-gray-400 hover:text-purple-600 transition-colors"
                title={t('dashboard.customerPanel.viewInShopify')}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="customer-email-large">{customer.email}</p>
          </div>
        </div>

        {/* Customer Tags */}
        {customer.tags && customer.tags.length > 0 && (
          <div className="customer-tags">
            {customer.tags.map((tag) => {
              const isVIP = tag.toUpperCase() === 'VIP';
              const isReturning = tag.toLowerCase().includes('returning');
              return (
                <span 
                  key={tag}
                  className={`customer-tag ${isVIP ? 'customer-tag-vip' : isReturning ? 'customer-tag-returning' : ''}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}

        {/* Customer Stats */}
        <div className="customer-stats-grid">
          {customer.phone && (
            <div className="customer-stat-row">
              <span className="customer-stat-label">{t('dashboard.customerPanel.stats.phone')}</span>
              <span className="customer-stat-value">{customer.phone}</span>
            </div>
          )}
          <div className="customer-stat-row">
            <span className="customer-stat-label">{t('dashboard.customerPanel.stats.totalOrders')}</span>
            <span className="customer-stat-value">{customer.orders_count}</span>
          </div>
          <div className="customer-stat-row">
            <span className="customer-stat-label">{t('dashboard.customerPanel.stats.totalSpent')}</span>
            <span className="customer-stat-value">
              {customer.currency} {customer.total_spent.toFixed(2)}
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
       * CURRENT ORDER SECTION - EXACT PRODUCTION SPECS!
       * ═══════════════════════════════════════════════════════════════ */}
      {order && (
        <section className="customer-order-section">
          {/* Collapsible Header */}
          <button 
            type="button"
            className="order-section-header"
            onClick={() => setOrderExpanded(!orderExpanded)}
            aria-expanded={orderExpanded}
          >
            <h3 className="order-section-title">📦 {t('dashboard.customerPanel.currentOrder.title')}</h3>
            <ChevronUp className={`collapse-chevron ${orderExpanded ? '' : 'rotate-180'}`} />
          </button>

          {orderExpanded && (
            <>
              {/* Order Card - Light Purple Background! */}
              <div className="order-card-main">
                {/* Order Number + Status Badge */}
                <div className="order-header-row">
                  <span className="order-number-text">{order.order_number}</span>
                  <span className={`order-status-badge ${getStatusClass(order.fulfillment_status)}`}>
                    {order.fulfillment_status}
                  </span>
                </div>

                {/* Order Meta (Item count + Date) */}
                <div className="order-meta-text">
                  {order.line_items.length} {order.line_items.length === 1 ? t('dashboard.customerPanel.currentOrder.item') : t('dashboard.customerPanel.currentOrder.items')} • {t('dashboard.customerPanel.currentOrder.ordered')} {formatDate(order.created_at)}
                </div>

                {/* Order Products List */}
                <div className="order-products-list">
                  {order.line_items.map((item) => (
                    <div key={item.line_item_id} className="order-product-item">
                      {/* Product Image */}
                      <div className="product-image-box">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="product-img" />
                        ) : (
                          <Package2 className="product-placeholder-icon" />
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="product-item-info">
                        <div className="product-item-title">{item.title}</div>
                        <div className="product-item-meta">
                          <span>{t('dashboard.customerPanel.currentOrder.qty')}: {item.quantity}</span>
                          <span>•</span>
                          <span className="product-item-price">
                            {order.currency} {item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="order-total-row">
                  <span className="total-label">{t('dashboard.customerPanel.currentOrder.total')}</span>
                  <span className="total-value">
                    {order.currency} {order.total_price.toFixed(2)}
                  </span>
                </div>

                {/* View in Shopify Button - Shopify Purple! */}
                <div className="shopify-button-container">
                  <a 
                    href="#" 
                    className="shopify-view-button"
                    onClick={(e) => e.preventDefault()}
                    title={t('dashboard.customerPanel.currentOrder.viewOrder')}
                  >
                    <ExternalLink className="shopify-icon" />
                    <span>{t('dashboard.customerPanel.currentOrder.viewOrder')}</span>
                  </a>
                </div>

                {/* Track Package Button (if tracking exists) */}
                {order.tracking_info && order.tracking_info.length > 0 && (
                  <div className="track-button-container">
                    <a 
                      href={order.tracking_info[0].url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="track-package-button"
                    >
                      {t('dashboard.customerPanel.currentOrder.trackPackage')}
                    </a>
                  </div>
                )}
              </div>

              {/* Action Buttons Row - NO ICONS! Just text! */}
              <div className="action-buttons-row">
                <span className="actions-label">{t('dashboard.customerPanel.actions.label')}</span>
                <div className="actions-badges">
                  <button type="button" className="action-badge action-badge-refund">
                    {t('dashboard.customerPanel.actions.refund')}
                  </button>
                  <button type="button" className="action-badge action-badge-cancel">
                    {t('dashboard.customerPanel.actions.cancel')}
                  </button>
                  <button type="button" className="action-badge action-badge-tracking">
                    {t('dashboard.customerPanel.actions.tracking')}
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
       * AI INSIGHTS SECTION - EXACT PRODUCTION SPECS!
       * ═══════════════════════════════════════════════════════════════ */}
      <section className="ai-insights-section">
        {/* Collapsible Header */}
        <button 
          type="button"
          className="insights-section-header"
          onClick={() => setInsightsExpanded(!insightsExpanded)}
          aria-expanded={insightsExpanded}
        >
          <h3 className="insights-section-title">{t('dashboard.customerPanel.aiInsights.title')}</h3>
          <ChevronUp className={`collapse-chevron ${insightsExpanded ? '' : 'rotate-180'}`} />
        </button>

        {insightsExpanded && (
          <div className="insights-grid">
            {/* Row 1: Sentiment */}
            <div className="insight-row">
              <span className="insight-label">{t('dashboard.customerPanel.aiInsights.sentiment')}</span>
              <span className={`insight-value ${getSentimentColor(conversation.ai_sentiment_end)}`}>
                {conversation.ai_sentiment_start && conversation.ai_sentiment_end 
                  ? `${conversation.ai_sentiment_start} → ${conversation.ai_sentiment_end}`
                  : conversation.ai_sentiment_end || t('dashboard.customerPanel.aiInsights.neutral')}
              </span>
            </div>

            {/* Row 2: Topic */}
            <div className="insight-row">
              <span className="insight-label">{t('dashboard.customerPanel.aiInsights.topic')}</span>
              <span className="insight-value">
                {conversation.category || t('dashboard.customerPanel.aiInsights.general')}
              </span>
            </div>

            {/* Row 3: Confidence */}
            <div className="insight-row">
              <span className="insight-label">{t('dashboard.customerPanel.aiInsights.confidence')}</span>
              <span className="insight-value">
                {conversation.ai_confidence_avg}%
              </span>
            </div>

            {/* Row 4: Action */}
            <div className="insight-row">
              <span className="insight-label">{t('dashboard.customerPanel.aiInsights.action')}</span>
              <span className="insight-value">
                {conversation.wants_human_agent ? t('dashboard.customerPanel.aiInsights.agentRequested') : t('dashboard.customerPanel.aiInsights.aiHandled')}
              </span>
            </div>

            {/* Row 5: Conversation */}
            <div className="insight-row">
              <span className="insight-label">{t('dashboard.customerPanel.aiInsights.conversation')}</span>
              <span className="insight-value">
                {conversation.message_count} {t('dashboard.customerPanel.aiInsights.messages')} • 15 {t('dashboard.customerPanel.aiInsights.min')}
              </span>
            </div>

            {/* Row 6: Resolution */}
            <div className="insight-row">
              <span className="insight-label">{t('dashboard.customerPanel.aiInsights.resolution')}</span>
              <span className="insight-value">
                {conversation.ai_resolution_status || conversation.status}
              </span>
            </div>

            {/* Row 7: Language */}
            <div className="insight-row">
              <span className="insight-label">{t('dashboard.customerPanel.aiInsights.language')}</span>
              <span className="insight-value">
                {t('dashboard.customerPanel.aiInsights.languageGerman')}
              </span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
