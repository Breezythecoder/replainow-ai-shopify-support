/**
 * 🖱️ ANIMATED CURSOR - Demo Component
 * Custom cursor with smooth animations and click effects
 * Moves to target elements with bezier curves
 */

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { getElementPosition } from '@/hooks/useElementPosition';

export interface AnimatedCursorProps {
  visible: boolean;
  targetSelector: string | null;
  isClicking: boolean;
  moveDuration?: number;
  onMoveComplete?: () => void;
}

export const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  visible,
  targetSelector,
  isClicking,
  moveDuration = 1200,
  onMoveComplete
}) => {
  console.log('[AnimatedCursor] 🎨 Render:', { visible, targetSelector, isClicking });
  
  // FINAL FIX: Detect dashboard zoom scale for manual cursor scaling
  const [dashboardScale, setDashboardScale] = React.useState(1.0);
  
  React.useEffect(() => {
    // Find dashboard zoom wrapper and get its zoom value
    const zoomWrapper = document.querySelector('.dashboard-zoom-wrapper') as HTMLElement;
    if (zoomWrapper) {
      const zoom = parseFloat(window.getComputedStyle(zoomWrapper).zoom || '1');
      console.log('[AnimatedCursor] 📏 Detected dashboard zoom:', zoom);
      setDashboardScale(zoom);
    }
  }, [visible]);
  
  // Motion values for smooth animation (start at top-right for visibility)
  const cursorX = useMotionValue(window.innerWidth - 200);
  const cursorY = useMotionValue(200);

  // Spring configuration for smooth, natural movement
  const springConfig = { 
    damping: 25, 
    stiffness: 150,
    mass: 0.8
  };
  
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Move cursor to target element (with retry mechanism AND continuous position tracking!)
  useEffect(() => {
    if (!visible || !targetSelector) return;

    let completionTimer: NodeJS.Timeout | null = null;
    let retryTimer: NodeJS.Timeout | null = null;
    let retryCount = 0;
    const MAX_RETRIES = 10;
    let trackingActive = false;

    const updateCursorPosition = () => {
      if (!trackingActive) return;
      
      const position = getElementPosition(`[data-demo-target="${targetSelector}"]`);
      if (position) {
        cursorX.set(position.centerX);
        cursorY.set(position.centerY);
      }
    };

    const moveToTarget = () => {
      const position = getElementPosition(`[data-demo-target="${targetSelector}"]`);
      
      if (position) {
        console.log('[AnimatedCursor] ✅ Target found, moving cursor!', {
          target: targetSelector,
          position: { x: position.centerX, y: position.centerY }
        });
        
        // Move to center of element
        cursorX.set(position.centerX);
        cursorY.set(position.centerY);
        
        // 🔥 START CONTINUOUS TRACKING: Update position on scroll!
        trackingActive = true;
        window.addEventListener('scroll', updateCursorPosition, true);
        console.log('[AnimatedCursor] 📍 Continuous position tracking ENABLED');
        
        // Call onMoveComplete after duration
        if (onMoveComplete) {
          completionTimer = setTimeout(onMoveComplete, moveDuration);
        }
      } else {
        console.warn(`[AnimatedCursor] ⚠️ Target not found (attempt ${retryCount + 1}/${MAX_RETRIES}): ${targetSelector}`);
        
        // Retry after 100ms if element not found yet
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          retryTimer = setTimeout(moveToTarget, 100);
        } else {
          console.error(`[AnimatedCursor] ❌ Target NOT FOUND after ${MAX_RETRIES} retries: ${targetSelector}`);
        }
      }
    };

    // Start with small delay
    const timer = setTimeout(moveToTarget, 50);

    return () => {
      clearTimeout(timer);
      if (completionTimer) clearTimeout(completionTimer);
      if (retryTimer) clearTimeout(retryTimer);
      
      // 🔥 STOP CONTINUOUS TRACKING
      trackingActive = false;
      window.removeEventListener('scroll', updateCursorPosition, true);
      console.log('[AnimatedCursor] 📍 Continuous position tracking DISABLED');
    };
  }, [targetSelector, visible, cursorX, cursorY, moveDuration, onMoveComplete]);

  if (!visible) {
    console.log('[AnimatedCursor] ❌ NOT VISIBLE - Returning null');
    return null;
  }

  console.log('[AnimatedCursor] ✅ RENDERING CURSOR at position:', {
    x: smoothX.get(),
    y: smoothY.get(),
    targetSelector
  });

  return (
    <motion.div
        className="demo-cursor"
        style={{
          x: smoothX,
          y: smoothY,
          // FINAL FIX: Back to position:fixed (viewport coords) + manual zoom!
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 999999,
          // Apply dashboard zoom manually via transform!
          transform: `translate(-50%, -50%) scale(${dashboardScale})`,
          transformOrigin: 'top left',
          willChange: 'transform'
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: isClicking ? 0.9 * dashboardScale : dashboardScale
        }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
      >
      {/* CLEAN PROFESSIONAL CURSOR - No kitsch! */}
      <div className="cursor-pointer-wrapper" style={{ position: 'relative' }}>
        {/* Main Cursor Arrow - Clean & Simple */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="cursor-pointer"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
          }}
        >
          {/* Clean cursor arrow */}
          <path
            d="M4 4L13 26L16 16L26 13L4 4Z"
            fill="#1F2937"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        {/* CLEAN Click Ripple - Exactly at cursor TIP */}
        {isClicking && (
          <motion.div
            className="cursor-click-ripple"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: '4px',   // Exactly at cursor tip!
              left: '4px',  // Exactly at cursor tip!
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '2px solid #3B82F6',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          />
        )}
        
        {/* Subtle pulse on click */}
        {isClicking && (
          <motion.div
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              top: '4px',
              left: '4px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#3B82F6',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          />
        )}
      </div>
    </motion.div>
  );
};







