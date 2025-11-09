import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
}

export const FloatingCard = ({ children, delay = 0, intensity = 'medium', className = '' }: FloatingCardProps) => {
  const intensityMap = {
    light: { y: 5, duration: 4 },
    medium: { y: 10, duration: 6 },
    strong: { y: 15, duration: 8 }
  };
  
  const config = intensityMap[intensity];
  
  return (
    <motion.div
      animate={{
        y: [0, -config.y, 0]
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};


