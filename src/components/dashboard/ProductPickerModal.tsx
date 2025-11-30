/**
 * 🛍️ PRODUCT PICKER MODAL - ENTERPRISE EDITION
 * Ultra-complete Product Picker für Dashboard
 * PRODUCTION SPECS - Dashboard Agent (Nov 29, 2025)
 */

import { useState, useMemo, useEffect } from 'react';
import { X, Search, ShoppingBag, ShoppingCart, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/i18n';
import type { Product, ProductVariant } from '@/data/dashboard/products';

/**
 * ═══════════════════════════════════════════════════════════════════
 * TYPES
 * ═══════════════════════════════════════════════════════════════════
 */
interface SelectedProduct {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

interface ProductPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSendProducts: (products: SelectedProduct[]) => void;
  onCreateCheckout?: (products: SelectedProduct[], discountPercent?: number) => void;
  
  // DEMO SUPPORT: Control selected products from outside
  demoSelectedProductIds?: string[];
}

/**
 * ═══════════════════════════════════════════════════════════════════
 * MAIN COMPONENT
 * ═══════════════════════════════════════════════════════════════════
 */
export const ProductPickerModal = ({
  isOpen,
  onClose,
  products,
  onSendProducts,
  onCreateCheckout,
  demoSelectedProductIds
}: ProductPickerModalProps) => {
  const { t } = useTranslation();
  
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  
  // DEMO SUPPORT: Auto-select products when demoSelectedProductIds changes
  // ENTERPRISE FIX: Immediate selection, delays handled in DemoOrchestrator!
  useEffect(() => {
    if (!demoSelectedProductIds || demoSelectedProductIds.length === 0) {
      // Clear selection if demo resets
      if (selectedProducts.length > 0) {
        console.log('[ProductPicker] 🔄 DEMO: Clearing selection');
        setSelectedProducts([]);
      }
      return;
    }
    
    console.log('[ProductPicker] 🎬 DEMO: Selecting products:', demoSelectedProductIds);
    
    // Build selected products array from IDs
    const newSelectedProducts: SelectedProduct[] = demoSelectedProductIds
      .map(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
          return {
            product,
            selectedVariant: product.variant_data[0],
            quantity: 1
          };
        }
        return null;
      })
      .filter((sp): sp is SelectedProduct => sp !== null);
    
    // Only update if different (prevent infinite loops)
    setSelectedProducts(prev => {
      const prevIds = prev.map(sp => sp.product.id).sort().join(',');
      const newIds = newSelectedProducts.map(sp => sp.product.id).sort().join(',');
      
      if (prevIds === newIds) {
        console.log('[ProductPicker] ⚠️ Same products, skipping update');
        return prev;
      }
      
      console.log('[ProductPicker] ✅ Products selected:', newSelectedProducts.map(sp => sp.product.title));
      return newSelectedProducts;
    });
  }, [demoSelectedProductIds, products]);

  // Filtered products
  // ENTERPRISE FIX: Sort demo products (Jogger + Shirt) to top for live demo
  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query)
      );
    }
    
    // Sort: Demo products (Jogger, Shirt) first for better UX
    return result.sort((a, b) => {
      const aIsDemo = a.id === 'prod_nike_jogger' || a.id === 'prod_nike_shirt';
      const bIsDemo = b.id === 'prod_nike_jogger' || b.id === 'prod_nike_shirt';
      
      if (aIsDemo && !bIsDemo) return -1;
      if (!aIsDemo && bIsDemo) return 1;
      
      // Within demo products: Jogger before Shirt
      if (a.id === 'prod_nike_jogger') return -1;
      if (b.id === 'prod_nike_jogger') return 1;
      
      return 0; // Keep original order for others
    });
  }, [products, searchQuery]);

  // Handlers
  const handleProductToggle = (product: Product) => {
    const isSelected = selectedProducts.some(sp => sp.product.id === product.id);
    
    if (isSelected) {
      // Deselect
      setSelectedProducts(prev => prev.filter(sp => sp.product.id !== product.id));
    } else {
      // Select with default variant
      const defaultVariant = product.variant_data[0];
      setSelectedProducts(prev => [...prev, {
        product,
        selectedVariant: defaultVariant,
        quantity: 1
      }]);
    }
  };

  const handleVariantChange = (productId: string, variantId: string) => {
    setSelectedProducts(prev => prev.map(sp => {
      if (sp.product.id === productId) {
        const newVariant = sp.product.variant_data.find(v => v.id === variantId);
        if (newVariant) {
          return { ...sp, selectedVariant: newVariant };
        }
      }
      return sp;
    }));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    const qty = Math.max(1, Math.min(quantity, 99)); // Clamp between 1-99
    setSelectedProducts(prev => prev.map(sp => 
      sp.product.id === productId ? { ...sp, quantity: qty } : sp
    ));
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(prev => prev.filter(sp => sp.product.id !== productId));
  };

  const handleClear = () => {
    setSelectedProducts([]);
  };

  const handleSendProducts = () => {
    if (selectedProducts.length > 0) {
      onSendProducts(selectedProducts);
      setSelectedProducts([]);
      setSearchQuery('');
    }
  };

  const handleCreateCheckout = () => {
    if (selectedProducts.length > 0 && onCreateCheckout) {
      onCreateCheckout(selectedProducts);
      setSelectedProducts([]);
      setSearchQuery('');
    }
  };

  // Helper: Get demo target name for products
  const getDemoTargetName = (productId: string) => {
    // Map specific products to short demo names
    if (productId === 'prod_nike_jogger') return 'product-jogger-checkbox';
    if (productId === 'prod_nike_shirt') return 'product-shirt-checkbox';
    return `product-${productId}-checkbox`;
  };

  // Calculate totals
  const totalItems = selectedProducts.reduce((sum, sp) => sum + sp.quantity, 0);
  const subtotal = selectedProducts.reduce((sum, sp) => {
    const price = parseFloat(sp.selectedVariant.price);
    return sum + (price * sp.quantity);
  }, 0);

  const isProductSelected = (productId: string) => {
    return selectedProducts.some(sp => sp.product.id === productId);
  };

  const getSelectedProduct = (productId: string) => {
    return selectedProducts.find(sp => sp.product.id === productId);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="product-picker-dialog" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog Content */}
          <motion.div
            className="dialog-inner"
            data-has-selection={selectedProducts.length > 0}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* ═══════════════════════════════════════════════════════════
             * LEFT PANEL
             * ═══════════════════════════════════════════════════════════ */}
            <div className="product-picker-left-panel">
              {/* Header */}
              <div className="picker-header">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="picker-title">{t('dashboard.productPicker.title')}</h2>
                    <p className="picker-description">
                      {t('dashboard.productPicker.searchPlaceholder')}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
                    aria-label={t('dashboard.chatWindow.buttons.close')}
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Search Section */}
              <div className="picker-search-section">
                <div className="search-input-wrapper">
                  <Search className="search-icon-absolute" />
                  <input
                    type="search"
                    placeholder={t('dashboard.productPicker.searchPlaceholder')}
                    className="search-input-main"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="search-stats-row">
                  <p className="stats-left-text">
                    {filteredProducts.length === 1 
                      ? t('dashboard.productPicker.productsFoundSingle')
                      : t('dashboard.productPicker.productsFound').replace('{count}', filteredProducts.length.toString())
                    }
                  </p>
                  <p className="stats-right-text">
                    {t('dashboard.productPicker.selectedCount').replace('{count}', selectedProducts.length.toString())}
                  </p>
                </div>
              </div>

              {/* Product Grid */}
              <div className="product-grid-scroll-area">
                <div className="product-grid-content">
                  {filteredProducts.map((product) => {
                    const selected = isProductSelected(product.id);
                    const selectedProd = getSelectedProduct(product.id);

                    return (
                      <div
                        key={product.id}
                        className="product-grid-item"
                        data-selected={selected}
                        data-demo-target={getDemoTargetName(product.id)}
                        onClick={() => handleProductToggle(product)}
                      >
                        {/* Main Row */}
                        <div className="product-main-row">
                          {/* Checkbox */}
                          <div className="product-checkbox">
                            {selected && (
                              <svg className="checkbox-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>

                          {/* Image */}
                          <div className="product-grid-image">
                            <img
                              src={product.primary_image_url}
                              alt={product.title}
                              loading="lazy"
                            />
                          </div>

                          {/* Info */}
                          <div className="product-grid-info">
                            <h4 className="product-grid-title">{product.title}</h4>
                            <p 
                              className="product-grid-stock"
                              data-status={
                                product.inventory_quantity > 50 ? 'in-stock-high' :
                                product.inventory_quantity > 0 ? 'in-stock-low' :
                                'out-of-stock'
                              }
                            >
                              {product.inventory_quantity > 0 
                                ? `✓ In stock: ${product.inventory_quantity}`
                                : '✗ Out of stock'
                              }
                            </p>
                          </div>

                          {/* Price */}
                          <div className="product-grid-price">
                            <p className="price-value">€{product.price}</p>
                          </div>
                        </div>

                        {/* Expanded Controls (wenn selected) */}
                        {selected && selectedProd && product.variant_data.length > 1 && (
                          <div className="product-controls-expanded" onClick={(e) => e.stopPropagation()}>
                            {/* Variant Dropdown */}
                            <div className="control-field">
                              <label className="control-label">{t('dashboard.productPicker.labels.size')}</label>
                              <select
                                className="control-select"
                                value={selectedProd.selectedVariant.id}
                                onChange={(e) => handleVariantChange(product.id, e.target.value)}
                              >
                                {product.variant_data.map((variant) => (
                                  <option key={variant.id} value={variant.id}>
                                    {variant.title.replace('Größe', t('dashboard.productPicker.labels.sizePrefix')).replace('Size', t('dashboard.productPicker.labels.sizePrefix'))} ({variant.inventoryQuantity} {t('dashboard.productPicker.inStock')})
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Quantity Input */}
                            <div className="control-field">
                              <label className="control-label">{t('dashboard.productPicker.labels.qty')}</label>
                              <input
                                type="number"
                                min="1"
                                max="99"
                                value={selectedProd.quantity}
                                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                                className="control-input"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Empty State */}
                  {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" />
                      <p className="text-sm text-gray-500">{t('dashboard.productPicker.empty')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="picker-main-footer">
                {/* Stats Row */}
                {selectedProducts.length > 0 && (
                  <div className="footer-stats-row">
                    <span className="footer-stats-label">{t('dashboard.productPicker.labels.totalItems')}</span>
                    <span className="footer-stats-value">{totalItems}</span>
                  </div>
                )}

                {/* Buttons Row */}
                <div className="footer-buttons-row">
                  {/* Clear Button */}
                  {selectedProducts.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="footer-btn footer-btn-clear"
                    >
                      <Trash2 className="btn-icon-svg" />
                      {t('dashboard.productPicker.buttons.clear').replace('{count}', selectedProducts.length.toString())}
                    </button>
                  )}

                  {/* Send Products Button */}
                  <button
                    type="button"
                    onClick={handleSendProducts}
                    disabled={selectedProducts.length === 0}
                    className="footer-btn footer-btn-send"
                  >
                    <ShoppingBag className="btn-icon-svg" />
                    <span>
                      {totalItems === 1 
                        ? t('dashboard.productPicker.buttons.sendSingle')
                        : t('dashboard.productPicker.buttons.send').replace('{count}', totalItems.toString())
                      }
                    </span>
                  </button>
                </div>

                {/* Create Checkout Button */}
                {selectedProducts.length > 0 && onCreateCheckout && (
                  <button
                    type="button"
                    onClick={handleCreateCheckout}
                    className="footer-btn footer-btn-checkout"
                    data-demo-target="create-checkout-btn"
                  >
                    <ShoppingCart className="btn-icon-svg" />
                    <span>{t('dashboard.productPicker.buttons.createCheckout')}</span>
                  </button>
                )}
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
             * RIGHT PANEL (CONDITIONAL - Only when products selected!)
             * ═══════════════════════════════════════════════════════════ */}
            <AnimatePresence>
              {selectedProducts.length > 0 && (
                <motion.div
                  className="product-picker-right-panel"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 384, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {/* Header */}
                  <div className="selected-panel-header">
                    <div className="selected-header-content">
                      {/* Icon Box */}
                      <div className="selected-icon-box">
                        <ShoppingCart className="selected-icon" />
                      </div>

                      {/* Text */}
                      <div className="selected-header-text">
                        <h3 className="selected-title">{t('dashboard.productPicker.selected.title')}</h3>
                        <p className="selected-count">
                          {selectedProducts.length === 1 
                            ? t('dashboard.productPicker.selected.count').replace('{count}', '1')
                            : t('dashboard.productPicker.selected.count_plural').replace('{count}', selectedProducts.length.toString())
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Selected Products List */}
                  <div className="selected-products-scroll">
                    <div className="selected-products-content">
                      {selectedProducts.map((sp) => (
                        <div key={sp.product.id} className="selected-product-card">
                          {/* Header Row: Image + Title + Remove */}
                          <div className="selected-card-header">
                            {/* Image */}
                            <div className="selected-product-image">
                              <img
                                src={sp.selectedVariant.image}
                                alt={sp.product.title}
                                loading="lazy"
                              />
                            </div>

                            {/* Info */}
                            <div className="selected-product-info">
                              <h4 className="selected-product-title">{sp.product.title}</h4>
                              <p className="selected-variant-text">
                                {sp.selectedVariant.title
                                  .replace('Größe', t('dashboard.productPicker.labels.sizePrefix'))
                                  .replace('Size', t('dashboard.productPicker.labels.sizePrefix'))
                                }
                              </p>
                            </div>

                            {/* Remove Button */}
                            <button
                              type="button"
                              onClick={() => handleRemoveProduct(sp.product.id)}
                              className="selected-remove-btn"
                              aria-label={t('dashboard.productPicker.removeProduct')}
                            >
                              <X className="remove-icon" />
                            </button>
                          </div>

                          {/* Quantity + Price Row */}
                          <div className="selected-quantity-price-row">
                            {/* Quantity */}
                            <div className="quantity-field-wrapper">
                              <label className="quantity-label">{t('dashboard.productPicker.labels.qty')}</label>
                              <input
                                type="number"
                                min="1"
                                max="99"
                                value={sp.quantity}
                                onChange={(e) => handleQuantityChange(sp.product.id, parseInt(e.target.value) || 1)}
                                className="quantity-input-small"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>

                            {/* Total */}
                            <div className="line-total-wrapper">
                              <p className="line-total-label">{t('dashboard.checkoutCard.total')}</p>
                              <p className="line-total-value">
                                €{(parseFloat(sp.selectedVariant.price) * sp.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>

                          {/* Variant Dropdown (if has multiple variants) */}
                          {sp.product.variant_data.length > 1 && (
                            <div className="variant-dropdown-wrapper">
                              <label className="variant-label">{t('dashboard.productPicker.labels.size')}</label>
                              <select
                                className="variant-select-small"
                                value={sp.selectedVariant.id}
                                onChange={(e) => handleVariantChange(sp.product.id, e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {sp.product.variant_data.map((variant) => (
                                  <option key={variant.id} value={variant.id}>
                                    {variant.title.replace('Größe', t('dashboard.productPicker.labels.sizePrefix')).replace('Size', t('dashboard.productPicker.labels.sizePrefix'))} ({variant.inventoryQuantity} {t('dashboard.productPicker.inStock')})
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer (Subtotal) */}
                  <div className="selected-panel-footer">
                    <div className="footer-row">
                      <span className="footer-label">{t('dashboard.productPicker.labels.totalItems')}</span>
                      <span className="footer-value">{totalItems}</span>
                    </div>

                    <div className="footer-row footer-row-subtotal">
                      <span className="footer-label-bold">{t('dashboard.productPicker.labels.subtotal')}</span>
                      <span className="footer-value-large">€{subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};







