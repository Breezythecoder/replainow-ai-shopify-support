/**
 * 🌈 Aurora Background - MEGA SICHTBAR!
 * Große farbige Orbs die sich bewegen
 */

import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Purple Orb - TOP RIGHT */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(139, 92, 246, 0.4), transparent)",
        }}
      />

      {/* Blue Orb - BOTTOM LEFT */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-0 left-1/4 w-[550px] h-[550px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.7), rgba(59, 130, 246, 0.3), transparent)",
        }}
      />

      {/* Green Orb - MIDDLE */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.6), rgba(16, 185, 129, 0.3), transparent)",
        }}
      />

      {/* Pink Orb - EXTRA! */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 9,
        }}
        className="absolute top-1/4 left-1/2 w-[450px] h-[450px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.5), rgba(236, 72, 153, 0.2), transparent)",
        }}
      />
    </div>
  );
};















