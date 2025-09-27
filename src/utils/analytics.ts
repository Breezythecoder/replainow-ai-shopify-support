// Google Analytics 4 + Conversion Tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initializeGA = () => {
  if (typeof window === 'undefined') return;
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Configure GA4
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
};

// Track events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', eventName, {
    event_category: 'engagement',
    ...parameters
  });
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number, currency: string = 'EUR') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'purchase', {
    transaction_id: Date.now().toString(),
    value: value,
    currency: currency,
    event_category: 'ecommerce',
    event_label: conversionType
  });
};

// Track custom events
export const trackCustomEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

// Track user engagement
export const trackEngagement = (engagementType: string, details?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'engagement', {
    event_category: 'user_engagement',
    event_label: engagementType,
    ...details
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'form_submit', {
    event_category: 'form',
    event_label: formName,
    custom_parameter_success: success
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'click', {
    event_category: 'button',
    event_label: buttonName,
    custom_parameter_location: location
  });
};
