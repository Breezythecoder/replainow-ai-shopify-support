import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface CheckoutProduct {
  name: string;
  quantity: number;
  price: string;
}

interface CheckoutCardProps {
  products: CheckoutProduct[];
  discount?: number;
  total: string;
  url?: string;
  delay?: number;
}

const CheckoutCard = ({ products, discount, total, url = "#", delay = 0 }: CheckoutCardProps) => {
  const displayProducts = products.slice(0, 3);
  const remainingCount = products.length - 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
      whileHover={{ 
        y: -4, 
        scale: 1.01,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.06), 0 16px 32px rgba(0, 0, 0, 0.08)"
      }}
      className="max-w-[448px] w-full mx-auto bg-white rounded-2xl p-4"
      style={{
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04)",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 flex items-center justify-center bg-[#FAFAFA] rounded-xl text-lg">
          🛒
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-black">Ready to Checkout</p>
          <p className="text-[11px] text-[#525252]">{products.length} items</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-[#FAFAFA] rounded-xl p-4 mb-4">
        {displayProducts.map((product, i) => (
          <div key={i} className="flex justify-between items-start gap-2 mb-2 last:mb-0">
            <span className="flex-1 text-[13px] text-black">
              {product.quantity}× {product.name}
            </span>
            <span className="text-[13px] font-semibold text-[#525252] whitespace-nowrap">
              {product.price}
            </span>
          </div>
        ))}
        
        {remainingCount > 0 && (
          <p className="text-[11px] text-[#525252] mt-2 pt-2 border-t border-black/[0.06]">
            +{remainingCount} more items
          </p>
        )}

        {discount && (
          <div className="flex justify-between items-center pt-2 mt-2 border-t border-black/[0.06]">
            <span className="text-xs font-semibold text-[#10B981]">Discount Applied</span>
            <span className="text-xs font-bold text-[#10B981]">-{discount}%</span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between py-2 mb-3 border-t border-black/[0.06]">
        <span className="text-sm font-semibold text-black">Total</span>
        <span className="text-xl font-bold text-black tracking-tight">{total}</span>
      </div>

      {/* CTA Button */}
      <a
        href={url}
        className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#17191a] text-white text-sm font-semibold rounded-xl hover:bg-black hover:scale-[1.02] transition-all duration-200 mb-3"
      >
        <ArrowRight className="w-4 h-4" />
        Complete Purchase
      </a>

      {/* Trust Indicators */}
      <div className="flex justify-between gap-2 text-[11px] text-[#525252]">
        <span className="flex items-center gap-1">🔒 Secure Checkout</span>
        <span className="flex items-center gap-1">✓ No Account Required</span>
      </div>
    </motion.div>
  );
};

export default CheckoutCard;

