/**
 * 🔗 CHECKOUT LINK CARD - PRODUCTION DESIGN
 * Professional black button checkout card (EXACT from production specs!)
 */

import { ShoppingCart, ExternalLink, Lock, Zap } from 'lucide-react';
import { useTranslation } from '@/i18n';

export interface CheckoutLinkCardProps {
  checkoutUrl: string;
  products: Array<{
    title: string;
    quantity: number;
    price: string;
    image?: string;
  }>;
  subtotal: string;
  discount?: {
    code: string;
    type: 'PERCENTAGE' | 'FIXED_AMOUNT';
    percentage?: string;
    amount: string;
  };
  total: string;
  currency?: string;
}

export const CheckoutLinkCard: React.FC<CheckoutLinkCardProps> = ({
  checkoutUrl,
  products,
  subtotal,
  discount,
  total,
  currency = 'EUR'
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="checkout-link-card">
      {/* Header */}
      <div className="checkout-card-header">
        <div className="checkout-icon-box">
          <ShoppingCart className="checkout-icon" />
        </div>
        <div className="checkout-header-text">
          <p className="checkout-title">{t('dashboard.checkoutCard.title')}</p>
          <p className="checkout-subtitle">{t('dashboard.checkoutCard.items').replace('{count}', products.length.toString())}</p>
        </div>
      </div>

      {/* Products Preview Box */}
      <div className="checkout-products-preview">
        {products.slice(0, 3).map((product, idx) => (
          <div key={idx} className="checkout-product-row">
            <span className="product-quantity-title">
              {product.quantity}× {product.title}
            </span>
            <span className="product-price-text">{product.price}</span>
          </div>
        ))}
        
        {products.length > 3 && (
          <p className="checkout-more-items">{t('dashboard.checkoutCard.moreItems').replace('{count}', (products.length - 3).toString())}</p>
        )}
        
        {/* Discount Badge (GREEN!) */}
        {discount && (
          <div className="checkout-discount-badge">
            <span className="discount-badge-text">{t('dashboard.checkoutCard.discountApplied')}</span>
            <span className="discount-badge-value">
              {discount.type === 'PERCENTAGE' ? `-${discount.percentage}` : `-${currency} ${discount.amount}`}
            </span>
          </div>
        )}
      </div>

      {/* Total Row */}
      <div className="checkout-total-row">
        <span className="total-label">{t('dashboard.checkoutCard.total')}</span>
        <span className="total-value">{currency} {total}</span>
      </div>

      {/* BLACK BUTTON - Professional! */}
      <button 
        className="checkout-cta-button"
        onClick={() => window.open(checkoutUrl, '_blank')}
      >
        <ShoppingCart className="btn-icon-left" />
        <span className="btn-text">{t('dashboard.checkoutCard.button')}</span>
        <ExternalLink className="btn-icon-right" />
      </button>

      {/* Trust Signals */}
      <div className="checkout-trust-signals">
        <div className="trust-signal-item">
          <Lock className="trust-icon" />
          <span className="trust-text">{t('dashboard.checkoutCard.trust.secure')}</span>
        </div>
        <div className="trust-signal-item">
          <Zap className="trust-icon" />
          <span className="trust-text">{t('dashboard.checkoutCard.trust.noAccount')}</span>
        </div>
      </div>
    </div>
  );
};
