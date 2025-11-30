/**
 * 📦 TRACKING CARD - DASHBOARD VERSION
 * Sendungsverfolgung Card für Chat Messages
 * Design: Same as Hero Live Chat Demo
 */

import { Truck } from 'lucide-react';
import { useTranslation } from '@/i18n';

interface TrackingCardDashboardProps {
  orderNumber: string;
  carrier: string;
  trackingNumber: string;
  status: 'pending' | 'in-transit' | 'delivered';
  url?: string;
}

export const TrackingCardDashboard = ({
  orderNumber,
  carrier,
  trackingNumber,
  status,
  url = '#'
}: TrackingCardDashboardProps) => {
  const { t } = useTranslation();
  
  const getStatusText = () => {
    switch (status) {
      case 'pending': return t('dashboard.trackingCard.status.shipped');
      case 'in-transit': return t('dashboard.trackingCard.status.inTransit');
      case 'delivered': return t('dashboard.trackingCard.status.delivered');
      default: return t('dashboard.trackingCard.status.shipped');
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'pending': return '#F59E0B'; // Orange
      case 'in-transit': return '#3B82F6'; // Blue
      case 'delivered': return '#10B981'; // Green
      default: return '#64748B'; // Gray
    }
  };

  return (
    <div className="tracking-card-dashboard">
      {/* Header */}
      <div className="tracking-card-header">
        <div className="tracking-icon-box">
          <Truck className="tracking-icon" />
        </div>
        <div className="tracking-header-text">
          <p className="tracking-title">{t('dashboard.trackingCard.tracking')}</p>
          <p className="tracking-subtitle">{t('dashboard.trackingCard.title')} #{orderNumber}</p>
        </div>
      </div>

      {/* Tracking Info Box */}
      <div className="tracking-info-box">
        <div className="tracking-info-row">
          <span className="tracking-label">{t('dashboard.trackingCard.carrierLabel')}</span>
          <span className="tracking-value">{carrier}</span>
        </div>
        <div className="tracking-info-row">
          <span className="tracking-label">{t('dashboard.trackingCard.trackingLabel')}</span>
          <span className="tracking-value">{trackingNumber}</span>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="tracking-cta-button"
        onClick={(e) => e.preventDefault()}
      >
        {t('dashboard.trackingCard.button')}
        <span>→</span>
      </a>
    </div>
  );
};

