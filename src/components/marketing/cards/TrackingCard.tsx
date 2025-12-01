import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import { useTranslation } from "@/i18n";

interface TrackingCardProps {
  orderNumber: string;
  carrier: string;
  trackingNumber: string;
  status: "pending" | "in-transit" | "delivered";
  expectedDelivery?: string;
  url?: string;
  delay?: number;
}

const TrackingCard = ({ orderNumber, carrier, trackingNumber, status, expectedDelivery, url = "#", delay = 0 }: TrackingCardProps) => {
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
      className="max-w-[400px] w-full bg-white rounded-2xl p-4"
      style={{
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04)",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 flex items-center justify-center bg-[#FAFAFA] rounded-xl">
          <Truck className="w-5 h-5 text-[#525252]" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-black">{t('marketing.liveChatDemo.cards.tracking.title')}</p>
          <p className="text-[11px] text-[#525252]">{t('marketing.liveChatDemo.cards.tracking.order')} #{orderNumber}</p>
        </div>
      </div>

      {/* Tracking Info */}
      <div className="bg-[#FAFAFA] rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[#525252] font-medium">{t('marketing.liveChatDemo.cards.tracking.carrierLabel')}</span>
          <span className="text-[13px] text-black font-semibold">{carrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#525252] font-medium">{t('marketing.liveChatDemo.cards.tracking.trackingNumberLabel')}</span>
          <span className="text-[13px] text-black font-semibold">{trackingNumber}</span>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={url}
        className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#f3f4f6] text-[#111827] text-sm font-semibold rounded-xl hover:bg-[#e5e7eb] hover:text-black transition-all duration-200"
      >
        {t('marketing.liveChatDemo.cards.tracking.trackOrder')}
        <span>→</span>
      </a>
    </motion.div>
  );
};

export default TrackingCard;

