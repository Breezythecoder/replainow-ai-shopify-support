/**
 * 🛍️ PRODUCT CARD (Agent-Sent)
 * PRODUCTION SPECS - Dashboard Agent (Nov 29, 2025)
 * Responsive: Mobile (Image top), Desktop (Image left)
 */

import { ExternalLink } from 'lucide-react';
import { useTranslation } from '@/i18n';
import type { ProductCardDashboardProps } from '@/types/dashboard';

export const ProductCardDashboard = ({
  productId,
  title,
  description,
  price,
  image,
  stock,
  url
}: ProductCardDashboardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="product-card-container">
      {/* Image + Info Row (Responsive!) */}
      <div className="product-card-inner">
        {/* Image */}
        <div className="product-image-wrapper">
          {image ? (
            <img 
              src={image}
              alt={title}
              className="product-image-img"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-50 to-slate-100">
              <span className="text-gray-400 text-sm">{t('dashboard.productCard.noImage')}</span>
            </div>
          )}
        </div>
        
        {/* Details */}
        <div className="product-details-section">
          <h4 className="product-title-text">{title}</h4>
          
          {description && (
            <p className="product-desc-text">{description}</p>
          )}
          
          <div className="product-spacer"></div>
          
          <div className="product-price-row">
            <p className="product-price-text">€{price}</p>
            {stock !== undefined && stock > 0 && (
              <span className="product-stock-text">
                ✓ {t('dashboard.productCard.inStock').replace('({count})', stock.toString())}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* View Button - SCHWARZER BUTTON! */}
      <a 
        href={url || '#'} 
        target="_blank"
        rel="noopener noreferrer"
        className="product-view-btn"
        onClick={(e) => e.preventDefault()}
      >
        <span>{t('dashboard.productCard.button')}</span>
        <ExternalLink className="external-icon" />
      </a>
    </div>
  );
};
