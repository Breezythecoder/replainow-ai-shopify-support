import { lazy, Suspense, ComponentType, ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
}

// Professional lazy loading wrapper with error boundary
export const LazyLoad = ({ children, fallback }: LazyLoadProps) => (
  <Suspense fallback={fallback || <div className="animate-pulse bg-muted rounded h-32" />}>
    {children}
  </Suspense>
);

// Image optimization component with lazy loading and performance enhancements
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  sizes = "100vw",
  loading = "lazy",
  fetchPriority = "auto"
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : loading}
      fetchPriority={priority ? "high" : fetchPriority}
      decoding="async"
      sizes={sizes}
      style={{ 
        contentVisibility: priority ? "visible" : "auto",
        containIntrinsicSize: width && height ? `${width}px ${height}px` : "auto"
      }}
    />
  );
};

// Performance monitoring utility
export const performanceMonitor = {
  markStart: (name: string) => {
    if (typeof performance !== "undefined" && performance.mark) {
      performance.mark(`${name}-start`);
    }
  },
  
  markEnd: (name: string) => {
    if (typeof performance !== "undefined" && performance.mark && performance.measure) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
    }
  },

  getMetrics: () => {
    if (typeof performance === "undefined") return null;
    
    return {
      navigation: performance.getEntriesByType("navigation")[0],
      paint: performance.getEntriesByType("paint"),
      resources: performance.getEntriesByType("resource")
    };
  }
};

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window === "undefined") return;

  // Track Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      const entryData = entry as any; // Type assertion for performance entries with value
      console.log(`[Web Vitals] ${entry.name}:`, entryData.value || entry.duration);
      // Here you could send metrics to analytics
    });
  });

  try {
    observer.observe({ entryTypes: ["measure", "navigation", "paint"] });
  } catch (error) {
    console.warn("Performance Observer not supported");
  }
};

// Intersection Observer hook for performance-aware animations
export const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    ...options
  };

  const observerRef = (node: HTMLElement | null) => {
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting);
      });
    }, defaultOptions);

    observer.observe(node);

    return () => observer.disconnect();
  };

  return observerRef;
};