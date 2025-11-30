/**
 * 🌟 BACKGROUND BEAMS - Animated Light Beams
 * Creates vertical animated light beams in background
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = Array.from({ length: 8 });

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {beams.map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
          style={{
            left: `${10 + i * 12}%`,
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};







