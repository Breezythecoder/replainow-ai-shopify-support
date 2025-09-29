import * as Sentry from "@sentry/browser";
import { onLCP, onINP, onCLS } from 'web-vitals';

// Sentry Configuration
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN || "https://your-dsn@sentry.io/project";
const ENVIRONMENT = import.meta.env.MODE || 'development';
const VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

export function initSentry() {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: ENVIRONMENT,
    release: `replainow@${VERSION}`,
    tracesSampleRate: ENVIRONMENT === 'production' ? 0.1 : 1.0,
    beforeSend(event, hint) {
      // Filter out non-critical errors in production
      if (ENVIRONMENT === 'production') {
        const error = hint.originalException;
        if (error && typeof error === 'string') {
          // Don't send network errors or user agent issues
          if (error.includes('Network Error') ||
              error.includes('Non-Error promise rejection captured') ||
              error.includes('Loading chunk') ||
              error.includes('Script error')) {
            return null;
          }
        }
      }

      // Add context
      event.tags = {
        ...event.tags,
        version: VERSION,
        locale: getCurrentLocale(),
        route: getCurrentRoute(),
      };

      return event;
    },
  });

  // Add global error handlers
  window.addEventListener('error', (event) => {
    Sentry.captureException(event.error || event.message, {
      contexts: {
        errorInfo: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        }
      }
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    Sentry.captureException(event.reason, {
      contexts: {
        promise: {
          reason: event.reason
        }
      }
    });
  });

  return Sentry;
}

// Web Vitals integration
export function initWebVitals() {
  // LCP (Largest Contentful Paint)
  onLCP((metric) => {
    console.log('[Web Vitals] LCP:', metric.value);
    Sentry.setTag('lcp', metric.value.toString());
    if (metric.value > 4000) {
      Sentry.captureMessage(`Poor LCP: ${metric.value}ms`, 'warning');
    }
  });

  // INP (Interaction to Next Paint)
  onINP((metric) => {
    console.log('[Web Vitals] INP:', metric.value);
    Sentry.setTag('inp', metric.value.toString());
    if (metric.value > 500) {
      Sentry.captureMessage(`Poor INP: ${metric.value}ms`, 'warning');
    }
  });

  // CLS (Cumulative Layout Shift)
  onCLS((metric) => {
    console.log('[Web Vitals] CLS:', metric.value);
    Sentry.setTag('cls', metric.value.toString());
    if (metric.value > 0.25) {
      Sentry.captureMessage(`Poor CLS: ${metric.value}`, 'warning');
    }
  });
}

// Utility functions
function getCurrentLocale(): string {
  // Get from localStorage or detect from path
  const stored = localStorage.getItem('locale');
  if (stored) return stored;

  // Detect from pathname
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/de')) return 'de';
    if (path.startsWith('/es')) return 'es';
    if (path.startsWith('/fr')) return 'fr';
  }

  return 'unknown';
}

function getCurrentRoute(): string {
  if (typeof window !== 'undefined') {
    return window.location.pathname + window.location.search;
  }
  return 'unknown';
}

// Export Sentry instance
export { Sentry };
