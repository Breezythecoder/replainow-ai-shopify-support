/**
 * 🎨 DASHBOARD SIDEBAR - DARK MODE
 * Left navigation sidebar with AI usage meter
 */

import { useState } from 'react';
import { MessageSquare, Mail, Phone, Brain, Settings, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/i18n';
import type { SidebarProps } from '@/types/dashboard';

export const Sidebar = ({ 
  conversationCount = 0, 
  mailCount = 0,
  collapsed: collapsedProp = false,
  onNavigate
}: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(collapsedProp);
  
  // Sync with prop changes (for demo mode!)
  if (collapsedProp !== collapsed && collapsedProp !== false) {
    setCollapsed(collapsedProp);
  }
  const aiUsagePercentage = 15; // 376 / 2,500 = 15%
  const aiUsageCurrent = 376;
  const aiUsageTotal = 2500;

  const navItems = [
    { id: 'conversations', label: t('dashboard.sidebar.nav.liveChats'), icon: MessageSquare, count: conversationCount, active: true },
    { id: 'mails', label: t('dashboard.sidebar.nav.mails'), icon: Mail, count: mailCount, active: false },
    { id: 'whatsapp', label: t('dashboard.sidebar.nav.whatsapp'), icon: Phone, disabled: true, comingSoon: true },
    { id: 'knowledge', label: t('dashboard.sidebar.nav.aiKnowledge'), icon: Brain, active: false },
    { id: 'settings', label: t('dashboard.sidebar.nav.settings'), icon: Settings, active: false },
  ];

  return (
    <aside className={`dashboard-sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Logo Section */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img 
            src="/logo.png" 
            alt="ReplAInow" 
            width="40" 
            height="40"
            className="w-10 h-10 object-contain"
          />
        </div>
        {!collapsed && (
          <span className="sidebar-logo-text">
            Repl<strong>AI</strong>now
          </span>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`sidebar-nav-item ${item.active ? 'active' : ''} ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => !item.disabled && onNavigate?.(item.id)}
              disabled={item.disabled}
            >
              <Icon className="sidebar-nav-icon" />
              {!collapsed && (
                <>
                  <span className="sidebar-nav-label">{item.label}</span>
                  {item.count !== undefined && item.count > 0 && (
                    <span className="sidebar-nav-badge">{item.count}</span>
                  )}
                  {item.comingSoon && (
                    <span className="text-[10px] bg-gray-700 border border-gray-600 px-2 py-0.5 rounded font-bold text-gray-400">
                      {t('dashboard.sidebar.nav.comingSoon')}
                    </span>
                  )}
                </>
              )}
            </button>
          );
        })}
      </nav>

      {/* AI Usage Meter (only when expanded) */}
      {!collapsed && (
        <div className="sidebar-ai-usage">
          <div className="ai-usage-header">
            <span className="ai-usage-label">{t('dashboard.sidebar.aiUsage.title')}</span>
            <span className="ai-usage-count">{aiUsageCurrent.toLocaleString()} / {aiUsageTotal.toLocaleString()}</span>
          </div>
          <div className="ai-usage-bar">
            <div 
              className="ai-usage-fill" 
              style={{ width: `${aiUsagePercentage}%` }}
            />
          </div>
          <div className="ai-usage-footer">
            <span className="ai-usage-plan">{t('dashboard.sidebar.aiUsage.plan.growth')}</span>
            <span className="ai-usage-percentage">{aiUsagePercentage}%</span>
          </div>
        </div>
      )}

      {/* Plan & Billing (always visible) */}
      <div className="sidebar-billing">
        <button
          className="sidebar-nav-item"
          onClick={() => onNavigate?.('billing')}
        >
          <CreditCard className="sidebar-nav-icon" />
          {!collapsed && <span className="sidebar-nav-label">{t('dashboard.sidebar.nav.planBilling')}</span>}
        </button>
      </div>

      {/* Collapse Button Section */}
      <div className="sidebar-collapse-section">
        <button 
          className="sidebar-collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? t('dashboard.sidebar.expand') : t('dashboard.sidebar.collapse')}
          data-demo-target="sidebar-collapse-btn"
        >
          {collapsed ? (
            <ChevronRight className="collapse-icon" />
          ) : (
            <>
              <ChevronLeft className="collapse-icon" />
              <span className="collapse-label">{t('dashboard.sidebar.collapse')}</span>
            </>
          )}
        </button>
      </div>

      {/* User Profile */}
      <button className="sidebar-user-profile">
        <div className="user-avatar">LS</div>
        {!collapsed && (
          <div className="user-info">
            <span className="user-name">Laura S.</span>
            <span className="user-status">
              <span className="status-dot"></span>
              {t('dashboard.sidebar.user.online')}
            </span>
          </div>
        )}
      </button>
    </aside>
  );
};


