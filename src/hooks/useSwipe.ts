import { useEffect, useRef } from 'react';

interface SwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}

export const useSwipe = (options: SwipeOptions = {}) => {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);
  const threshold = options.threshold || 50;

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const deltaX = touchStart.current.x - touchEnd.current.x;
    const deltaY = touchStart.current.y - touchEnd.current.y;
    
    // Only trigger swipe if horizontal movement is significantly greater than vertical
    // This prevents accidental swipes during vertical scrolling
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 2;
    const isVerticalSwipe = Math.abs(deltaY) > Math.abs(deltaX) * 2;
    
    const isLeftSwipe = isHorizontalSwipe && deltaX > threshold;
    const isRightSwipe = isHorizontalSwipe && deltaX < -threshold;
    const isUpSwipe = isVerticalSwipe && deltaY > threshold;
    const isDownSwipe = isVerticalSwipe && deltaY < -threshold;

    if (isLeftSwipe && options.onSwipeLeft) {
      options.onSwipeLeft();
    }
    if (isRightSwipe && options.onSwipeRight) {
      options.onSwipeRight();
    }
    if (isUpSwipe && options.onSwipeUp) {
      options.onSwipeUp();
    }
    if (isDownSwipe && options.onSwipeDown) {
      options.onSwipeDown();
    }
  };

  useEffect(() => {
    const element = document.body;
    element.addEventListener('touchstart', onTouchStart, { passive: true });
    element.addEventListener('touchmove', onTouchMove, { passive: true });
    element.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchmove', onTouchMove);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }, [options]);
};
