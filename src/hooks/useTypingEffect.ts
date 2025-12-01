/**
 * ⌨️ USE TYPING EFFECT - Character by Character Typing Hook
 * Creates realistic typing animation effect
 */

import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseTypingEffectOptions {
  text: string;
  speed?: number; // ms per character
  onComplete?: () => void;
  enabled?: boolean;
}

export const useTypingEffect = ({
  text,
  speed = 35,
  onComplete,
  enabled = true
}: UseTypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const currentIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const reset = useCallback(() => {
    setDisplayedText('');
    setIsTyping(false);
    setIsComplete(false);
    currentIndexRef.current = 0;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const start = useCallback(() => {
    if (!enabled || !text) return;
    
    reset();
    setIsTyping(true);
    currentIndexRef.current = 0;

    const typeNextCharacter = () => {
      if (currentIndexRef.current < text.length) {
        currentIndexRef.current += 1;
        setDisplayedText(text.slice(0, currentIndexRef.current));
        
        timeoutRef.current = setTimeout(typeNextCharacter, speed);
      } else {
        // Typing complete
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
      }
    };

    // Start typing
    timeoutRef.current = setTimeout(typeNextCharacter, speed);
  }, [text, speed, enabled, onComplete, reset]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    displayedText,
    isTyping,
    isComplete,
    start,
    reset
  };
};


















