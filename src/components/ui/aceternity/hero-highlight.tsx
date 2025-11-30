/**
 * ✨ HERO HIGHLIGHT - Animated Text Highlight
 * Highlights text with animated gradient background
 */

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const HeroHighlight = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-purple-300 to-violet-300 dark:from-purple-500 dark:to-violet-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};







