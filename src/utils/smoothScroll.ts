// Smooth scrolling utility for hash navigation
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

// Enhanced smooth scroll with easing
export const enhancedSmoothScroll = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = window.pageYOffset;
  const elementPosition = element.getBoundingClientRect().top;
  const targetPosition = elementPosition + start - offset;
  const distance = targetPosition - start;
  const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function (ease-out-cubic)
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    
    window.scrollTo(0, start + distance * easeOutCubic);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
