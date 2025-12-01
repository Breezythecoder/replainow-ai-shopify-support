/**
 * 🎬 GSAP ScrollTrigger - Scroll-Linked Animations
 * Created: November 30, 2025
 * Purpose: Advanced scroll-based animations using GSAP ScrollTrigger
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize all scroll-triggered animations
 * Call this once on app mount
 */
export const initScrollAnimations = () => {
  // Parallax background elements
  const parallaxElements = gsap.utils.toArray('.parallax-bg');
  
  parallaxElements.forEach((element: any) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, // Smooth scrubbing
        markers: false, // Set to true for debugging
      },
      y: -100,
      ease: 'none',
    });
  });

  // Fade sections on scroll
  const fadeElements = gsap.utils.toArray('.fade-on-scroll');
  
  fadeElements.forEach((element: any) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        markers: false,
      },
      opacity: 0,
      y: 50,
    });
  });

  // Scale elements on scroll
  const scaleElements = gsap.utils.toArray('.scale-on-scroll');
  
  scaleElements.forEach((element: any) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'top 60%',
        scrub: 1,
        markers: false,
      },
      scale: 0.95,
      opacity: 0.8,
    });
  });

  // Stagger children on scroll
  const staggerContainers = gsap.utils.toArray('.stagger-children');
  
  staggerContainers.forEach((container: any) => {
    const children = container.querySelectorAll('.stagger-item');
    
    gsap.from(children, {
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'top 50%',
        scrub: false, // No scrubbing for stagger
        markers: false,
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
    });
  });

  // Refresh ScrollTrigger (important after DOM changes)
  ScrollTrigger.refresh();
};

/**
 * Create a parallax effect for a specific element
 * @param selector - CSS selector for the element
 * @param speed - Parallax speed (default: 50)
 */
export const createParallax = (selector: string, speed: number = 50) => {
  const element = document.querySelector(selector);
  
  if (!element) return;
  
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
    y: -speed,
    ease: 'none',
  });
};

/**
 * Pin an element while scrolling
 * @param selector - CSS selector for the element to pin
 * @param duration - How long to pin (in viewport height units)
 */
export const pinElement = (selector: string, duration: number = 1) => {
  const element = document.querySelector(selector);
  
  if (!element) return;
  
  ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: `+=${window.innerHeight * duration}`,
    pin: true,
    pinSpacing: true,
  });
};

/**
 * Create a scroll progress indicator
 * @param selector - CSS selector for the progress bar element
 */
export const createScrollProgress = (selector: string) => {
  const progressBar = document.querySelector(selector);
  
  if (!progressBar) return;
  
  gsap.to(progressBar, {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
    scaleX: 1,
    transformOrigin: 'left center',
    ease: 'none',
  });
};

/**
 * Batch animation for multiple elements
 * More performant than individual ScrollTriggers
 */
export const batchAnimation = (selector: string, animation: gsap.TweenVars) => {
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => {
      gsap.to(batch, {
        ...animation,
        stagger: 0.1,
      });
    },
    start: 'top 90%',
  });
};

/**
 * Kill all ScrollTrigger instances
 * Use when unmounting or resetting
 */
export const killScrollAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

/**
 * Refresh ScrollTrigger
 * Call after DOM changes or window resize
 */
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger };









