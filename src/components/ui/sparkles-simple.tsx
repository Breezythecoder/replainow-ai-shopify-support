/**
 * ✨ Simple Sparkles - GARANTIERT SICHTBAR!
 * Einfache Version die DEFINITIV funktioniert
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SparklesSimple = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2, // 2-6px
      delay: Math.random() * 3,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-500"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 2}px rgba(139, 92, 246, 0.8), 0 0 ${particle.size * 4}px rgba(139, 92, 246, 0.5)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.8, 1, 0],
            scale: [0, 1, 1.2, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};















