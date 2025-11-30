/**
 * 📱 ICON NAVIGATION - COLUMN 2 (Gray Column)
 * Subnavigation for Live Chats section
 * 
 * FROM PRODUCTION SPECS: Lines 457-658 in FINAL-DASHBOARD-SPECS-FOR-WEBSITE.md
 */

import { useState } from 'react';
import { MessageSquareText, Zap, Newspaper, Ticket, ChevronLeft } from 'lucide-react';
import { useTranslation } from '@/i18n';

export const IconNavigation = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('live-chats');

  const navItems = [
    { id: 'live-chats', label: t('dashboard.iconNav.items.liveChats'), icon: MessageSquareText },
    { id: 'proactive', label: t('dashboard.iconNav.items.proactiveChat'), icon: Zap },
    { id: 'newsfeed', label: t('dashboard.iconNav.items.newsfeed'), icon: Newspaper },
    { id: 'discounts', label: t('dashboard.iconNav.items.aiDiscounts'), icon: Ticket },
  ];

  return (
    <nav 
      className={`icon-nav-container ${collapsed ? 'collapsed' : ''}`}
      aria-label={t('dashboard.iconNav.ariaLabel')}
    >
      <div className="icon-nav-items">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <a
              key={item.id}
              href="#"
              className={`icon-nav-item ${isActive ? 'icon-nav-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.id);
              }}
            >
              {/* Active Indicator Bar (Left edge) */}
              {isActive && <div className="active-indicator-bar"></div>}
              
              {/* Icon */}
              <Icon className={`icon-nav-svg ${isActive ? 'icon-active' : ''}`} />
              
              {/* Label */}
              {!collapsed && (
                <span className="icon-nav-label">{item.label}</span>
              )}
            </a>
          );
        })}
      </div>

      {/* Collapse Button (Bottom) */}
      <div className="icon-nav-footer">
        <button 
          className="icon-nav-collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? t('dashboard.iconNav.expand') : t('dashboard.iconNav.collapse')}
          data-demo-target="icon-nav-collapse-btn"
        >
          <ChevronLeft className={`collapse-chevron ${collapsed ? 'rotate-180' : ''}`} />
          {!collapsed && <span className="collapse-text">{t('dashboard.iconNav.collapse')}</span>}
        </button>
      </div>
    </nav>
  );
};








