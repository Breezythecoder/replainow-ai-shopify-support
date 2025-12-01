import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  stock: number;
  url?: string;
  delay?: number;
}

const ProductCard = ({ title, description, price, image, stock, url = "#", delay = 0 }: ProductCardProps) => {
  const { t } = useTranslation();
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
      className="max-w-[400px] w-full bg-white rounded-2xl overflow-hidden cursor-pointer"
      style={{
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04)",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {/* Image & Info Container */}
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="relative flex-shrink-0">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={image}
            alt={title}
            className="w-[120px] h-[120px] rounded-xl object-cover"
            style={{
              background: "linear-gradient(to bottom right, #f8fafc, #f1f5f9)"
            }}
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0 flex flex-col">
          <h4 className="text-[15px] font-semibold text-black leading-tight mb-2 line-clamp-2">
            {title}
          </h4>
          <p className="text-[13px] text-[#525252] leading-snug mb-2 line-clamp-2">
            {description}
          </p>
          <p className="text-xl font-semibold text-black mt-auto mb-1 tracking-tight">
            {price}
          </p>
          <p className="text-xs text-[#525252] font-medium">
            📦 {stock} {t('marketing.liveChatDemo.cards.product.inStock')}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={url}
        className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#f3f4f6] text-[#111827] text-sm font-semibold border-t border-gray-200 hover:bg-[#e5e7eb] hover:text-black transition-all duration-200"
        style={{ transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        {t('marketing.liveChatDemo.cards.product.viewProduct')}
        <span>→</span>
      </a>
    </motion.div>
  );
};

export default ProductCard;

