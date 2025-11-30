/**
 * 🏷️ DISCOUNT CARD - DASHBOARD VERSION (PIXEL-PERFECT!)
 * Yellow/Amber Gradient Background with Header & Details Section
 */

import { Copy } from 'lucide-react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { useTranslation } from '@/i18n';
import type { DiscountCardDashboardProps } from '@/types/dashboard';

export const DiscountCardDashboard = ({
  code,
  type,
  value,
  expiresAt,
  description
}: DiscountCardDashboardProps) => {
  const { t } = useTranslation();
  
  const getDiscountText = () => {
    if (type === 'PERCENTAGE') return `${value}% OFF`;
    if (type === 'FIXED_AMOUNT') return `€${value} OFF`;
    return 'FREE SHIPPING';
  };

  const getExpiryText = () => {
    if (!expiresAt) return null;
    try {
      const expiryDate = new Date(expiresAt);
      return format(expiryDate, 'dd. MMM yyyy', { locale: de });
    } catch {
      return null;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      // Could show toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="discount-card-dashboard">
      {/* Header with Icon & Title */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🏷️</span>
        <h4 className="text-base font-bold text-amber-900 m-0">
          {t('dashboard.discountCard.title')}
        </h4>
      </div>

      {/* Code Container with Copy Button */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 bg-white border-2 border-dashed border-amber-500 rounded-lg px-4 py-3 text-center">
          <div className="font-mono font-bold text-lg tracking-widest text-amber-900">
            {code}
          </div>
        </div>
        <button 
          className="px-4 py-2.5 bg-white border-2 border-amber-500 rounded-lg font-semibold text-sm text-amber-700 hover:bg-amber-500 hover:text-white transition-all duration-200 flex items-center gap-2"
          onClick={handleCopy}
          title={t('dashboard.discountCard.button')}
        >
          <Copy className="w-4 h-4" />
          {t('dashboard.discountCard.button')}
        </button>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-2 pt-4 border-t border-dashed border-amber-500/30">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-amber-900">{t('dashboard.discountCard.valueLabel')}:</span>
          <span className="text-xs font-bold text-amber-800">{getDiscountText()}</span>
        </div>
        {expiresAt && (
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-amber-900">{t('dashboard.discountCard.expires')}:</span>
            <span className="text-xs font-bold text-amber-800">{getExpiryText()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

