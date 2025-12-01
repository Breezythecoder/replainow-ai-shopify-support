/**
 * ☄️ METEORS EFFECT - Shooting Stars
 * Animated meteors falling across the component
 */

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Meteors = ({ number = 20, className }: { number?: number; className?: string }) => {
  const meteors = new Array(number).fill(true);
  
  return (
    <>
      {meteors.map((_, idx) => (
        <motion.span
          key={"meteor" + idx}
          className={cn(
            "absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-purple-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-purple-500 before:to-transparent",
            className
          )}
          style={{
            top: Math.floor(Math.random() * 100) + "%",
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 0.6 + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
          }}
          animate={{
            x: [0, -400],
            y: [0, 400],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};









