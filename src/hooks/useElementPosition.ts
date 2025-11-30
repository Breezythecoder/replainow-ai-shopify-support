/**
 * 📍 USE ELEMENT POSITION - Track Element Position Hook
 * Tracks the position of an element for cursor animations
 */

import { useState, useEffect, useCallback, RefObject } from 'react';

export interface ElementPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

export const useElementPosition = (
  elementRef: RefObject<HTMLElement> | null,
  enabled: boolean = true
) => {
  const [position, setPosition] = useState<ElementPosition>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0
  });

  const updatePosition = useCallback(() => {
    if (!elementRef?.current || !enabled) return;

    const rect = elementRef.current.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    setPosition({
      x: rect.left + scrollX,
      y: rect.top + scrollY,
      width: rect.width,
      height: rect.height,
      centerX: rect.left + scrollX + rect.width / 2,
      centerY: rect.top + scrollY + rect.height / 2
    });
  }, [elementRef, enabled]);

  // Update on mount and when enabled changes
  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  // Update on resize and scroll
  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [enabled, updatePosition]);

  return { position, updatePosition };
};

/**
 * Detect parent scale transformation
 * When dashboard is scaled (transform: scale(0.75)), we need to compensate!
 */
const getParentScale = (element: Element): number => {
  let currentElement: Element | null = element;
  
  while (currentElement) {
    const style = window.getComputedStyle(currentElement);
    const transform = style.transform;
    
    if (transform && transform !== 'none') {
      // Extract scale from transform matrix
      // matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)
      const match = transform.match(/matrix\(([^,]+)/);
      if (match) {
        const scaleX = parseFloat(match[1]);
        if (scaleX !== 1) {
          console.log('[getElementPosition] 🎯 Detected parent scale:', scaleX, 'on element:', currentElement.className);
          return scaleX;
        }
      }
    }
    
    currentElement = currentElement.parentElement;
  }
  
  return 1.0; // No scale detected
};

/**
 * Get element position by selector
 * FINAL FIX DEC 2025: Cursor is position:fixed with manual zoom!
 * Returns viewport coordinates (getBoundingClientRect already includes zoom!)
 */
export const getElementPosition = (selector: string): ElementPosition | null => {
  console.log('[getElementPosition] 🔍 Looking for selector:', selector);
  
  const element = document.querySelector(selector);
  
  if (!element) {
    console.warn('[getElementPosition] ❌ Element not found:', selector);
    return null;
  }

  const rect = element.getBoundingClientRect();
  
  console.log('[getElementPosition] ✅ Element found:', {
    selector,
    rect: {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    },
    center: {
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2
    }
  });

  // FINAL FIX: Return viewport coordinates directly!
  // getBoundingClientRect() already accounts for zoom in the CSS
  // Cursor is position:fixed with manual transform:scale() matching dashboard zoom
  // So coordinates are PERFECT as-is! ✅
  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
    centerX: rect.left + rect.width / 2,
    centerY: rect.top + rect.height / 2
  };
};







