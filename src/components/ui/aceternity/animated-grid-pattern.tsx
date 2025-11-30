/**
 * 🎯 ANIMATED GRID PATTERN - Background Grid
 * Animated dot grid pattern for backgrounds
 */

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AnimatedGridPattern = ({
  className,
  dotSize = 1,
  dotColor = "rgba(139, 92, 246, 0.3)",
}: {
  className?: string;
  dotSize?: number;
  dotColor?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <motion.circle
              cx="20"
              cy="20"
              r={dotSize}
              fill={dotColor}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                r: [dotSize, dotSize * 1.5, dotSize],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};







