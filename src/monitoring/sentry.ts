// Basic Web Vitals integration (Production-ready)
import { onLCP, onINP, onCLS } from 'web-vitals';

export function initWebVitals() {
  console.log('[Web Vitals] Performance monitoring enabled');

  // LCP (Largest Contentful Paint)
  onLCP((metric) => {
    console.log('[Web Vitals] LCP:', metric.value);
    if (metric.value > 4000) {
      console.warn(`Poor LCP: ${metric.value}ms`);
    }
  });

  // INP (Interaction to Next Paint)
  onINP((metric) => {
    console.log('[Web Vitals] INP:', metric.value);
    if (metric.value > 500) {
      console.warn(`Poor INP: ${metric.value}ms`);
    }
  });

  // CLS (Cumulative Layout Shift)
  onCLS((metric) => {
    console.log('[Web Vitals] CLS:', metric.value);
    if (metric.value > 0.25) {
      console.warn(`Poor CLS: ${metric.value}`);
    }
  });
}

