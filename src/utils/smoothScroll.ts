// Instant scroll for immediate navigation
export const instantScrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'auto' // Instant scroll
  });
};

// Browser-native smooth scroll (faster than custom animation)
export const smoothScrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Handle hash navigation for React Router
export const handleHashNavigation = () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    // Small delay to ensure React has rendered
    setTimeout(() => {
      smoothScrollToElement(hash);
    }, 100);
  }
};

// Fast smooth scroll with optimal timing
export const enhancedSmoothScroll = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = window.pageYOffset;
  const elementPosition = element.getBoundingClientRect().top;
  const targetPosition = elementPosition + start - offset;
  const distance = targetPosition - start;
  
  // Optimized duration: Faster for better UX
  const baseDuration = 400; // Base 400ms
  const distanceFactor = Math.abs(distance) / 1000; // Distance influence
  const duration = Math.max(300, Math.min(baseDuration + distanceFactor * 200, 600)); // 300-600ms range
  
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Faster easing function (ease-out-quart)
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    
    window.scrollTo(0, start + distance * easeOutQuart);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
