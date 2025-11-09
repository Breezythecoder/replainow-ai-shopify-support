import { motion } from "framer-motion";
import { Truck } from "lucide-react";

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
  const statusConfig = {
    pending: { 
      color: "#F59E0B", 
      bg: "rgba(245, 158, 11, 0.2)",
      label: "Processing",
      subtitle: "Order confirmed"
    },
    "in-transit": { 
      color: "#3B82F6", 
      bg: "rgba(59, 130, 246, 0.2)",
      label: "In Transit",
      subtitle: expectedDelivery ? `Expected: ${expectedDelivery}` : "On the way"
    },
    delivered: { 
      color: "#10B981", 
      bg: "rgba(16, 185, 129, 0.2)",
      label: "Delivered",
      subtitle: "Successfully delivered"
    }
  };

  const currentStatus = statusConfig[status];

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
      className="max-w-[384px] w-full mx-auto bg-white rounded-2xl p-4"
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
          <p className="text-sm font-semibold text-black">Shipment Tracking</p>
          <p className="text-[11px] text-[#525252]">Order #{orderNumber}</p>
        </div>
      </div>

      {/* Tracking Info */}
      <div className="bg-[#FAFAFA] rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[#525252] font-medium">Carrier</span>
          <span className="text-[13px] text-black font-semibold">{carrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#525252] font-medium">Tracking Number</span>
          <span className="text-[13px] text-black font-semibold">{trackingNumber}</span>
        </div>
      </div>

      {/* Status */}
      <div 
        className="flex items-center gap-3 p-3 rounded-xl mb-4"
        style={{ background: "#F8F9FB" }}
      >
        <div 
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ 
            background: currentStatus.color,
            boxShadow: `0 0 0 4px ${currentStatus.bg}`
          }}
        />
        <div className="flex-1">
          <p className="text-[13px] font-semibold text-black mb-0.5">
            {currentStatus.label}
          </p>
          <p className="text-[11px] text-[#525252]">
            {currentStatus.subtitle}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={url}
        className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#f3f4f6] text-[#111827] text-sm font-semibold rounded-xl hover:bg-[#e5e7eb] hover:text-black transition-all duration-200"
      >
        Track Shipment
        <span>→</span>
      </a>
    </motion.div>
  );
};

export default TrackingCard;

