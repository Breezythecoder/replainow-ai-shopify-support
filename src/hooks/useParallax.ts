import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export const useParallax = (offset: number = 100): { ref: React.RefObject<HTMLDivElement>; y: MotionValue<number> } => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  
  return { ref, y };
};


