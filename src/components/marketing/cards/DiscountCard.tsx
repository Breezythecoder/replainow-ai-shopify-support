import { motion } from "framer-motion";
import { Ticket, Copy, Check, Clock, Users } from "lucide-react";
import { useState } from "react";

interface DiscountCardProps {
  code: string;
  discount: string;
  expiryDays?: number;
  usageLimit?: number;
  delay?: number;
}

const DiscountCard = ({ code, discount, expiryDays, usageLimit, delay = 0 }: DiscountCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="w-9 h-9 flex items-center justify-center bg-[#ECFDF5] rounded-xl">
          <Ticket className="w-5 h-5 text-[#10B981]" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-black">Rabattcode</p>
          <p className="text-[11px] font-semibold text-[#10B981]">{discount}</p>
        </div>
      </div>

      {/* Code Section */}
      <div className="bg-[#FAFAFA] rounded-xl p-4 mb-4 flex items-center gap-2">
        <code className="flex-1 font-mono text-[15px] font-semibold text-black tracking-wider select-all">
          {code}
        </code>
        <button
          onClick={handleCopy}
          className="w-8 h-8 flex items-center justify-center bg-transparent hover:bg-black/5 rounded-md transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#10B981]" />
          ) : (
            <Copy className="w-4 h-4 text-[#525252]" />
          )}
        </button>
      </div>

      {/* Details */}
      {(expiryDays || usageLimit) && (
        <div className="space-y-2">
          {expiryDays && (
            <p className="text-[11px] text-[#525252] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Läuft ab in {expiryDays} Tagen</span>
            </p>
          )}
          {usageLimit && (
            <p className="text-[11px] text-[#525252] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Limitiert auf {usageLimit} Nutzungen</span>
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default DiscountCard;

