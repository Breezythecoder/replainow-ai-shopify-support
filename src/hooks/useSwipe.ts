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
    const isLeftSwipe = deltaX > threshold;
    const isRightSwipe = deltaX < -threshold;
    const isUpSwipe = deltaY > threshold;
    const isDownSwipe = deltaY < -threshold;

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
