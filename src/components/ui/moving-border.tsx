/**
 * 🎨 Moving Border - Aceternity UI Style
 * Animated gradient border that moves around the element
 */

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 3000,
  borderRadius = "1rem",
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  borderRadius?: string;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
  [key: string]: any;
}) => {
  return (
    <Component
      className={cn(
        "relative text-xl h-16 w-full p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorderInternal duration={duration} borderRadius={borderRadius}>
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorderInternal>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export const MovingBorderInternal = ({
  children,
  duration = 3000,
  borderRadius = "1rem",
  className,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  borderRadius?: string;
  className?: string;
  [key: string]: any;
}) => {
  const ref = useRef<any>(null);
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};















