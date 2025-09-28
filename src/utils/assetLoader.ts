/**
 * Locale-aware Asset Loader
 * Handles loading of locale-specific assets and optimizes resource loading
 */

export interface LocaleAsset {
  path: string;
  locale: string;
  type: 'image' | 'font' | 'css' | 'js';
  priority: 'high' | 'medium' | 'low';
}

// Locale-specific asset mappings
const LOCALE_ASSETS: Record<string, LocaleAsset[]> = {
  de: [
    {
      path: '/images/shopify-logo-black.svg',
      locale: 'de',
      type: 'image',
      priority: 'high'
    },
    {
      path: '/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png',
      locale: 'de',
      type: 'image',
      priority: 'high'
    }
  ],
  en: [
    {
      path: '/images/shopify-logo-black.svg',
      locale: 'en',
      type: 'image',
      priority: 'high'
    },
    {
      path: '/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png',
      locale: 'en',
      type: 'image',
      priority: 'high'
    }
  ],
  fr: [
    {
      path: '/images/shopify-logo-black.svg',
      locale: 'fr',
      type: 'image',
      priority: 'high'
    },
    {
      path: '/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png',
      locale: 'fr',
      type: 'image',
      priority: 'high'
    }
  ],
  es: [
    {
      path: '/images/shopify-logo-black.svg',
      locale: 'es',
      type: 'image',
      priority: 'high'
    },
    {
      path: '/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png',
      locale: 'es',
      type: 'image',
      priority: 'high'
    }
  ]
};

/**
 * Preload critical assets for a specific locale
 */
export const preloadLocaleAssets = (locale: string): void => {
  const assets = LOCALE_ASSETS[locale] || LOCALE_ASSETS.de;
  
  assets.forEach(asset => {
    if (asset.priority === 'high') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = asset.path;
      
      switch (asset.type) {
        case 'image':
          link.as = 'image';
          break;
        case 'font':
          link.as = 'font';
          link.type = 'font/ttf';
          link.crossOrigin = 'anonymous';
          break;
        case 'css':
          link.as = 'style';
          break;
        case 'js':
          link.as = 'script';
          break;
      }
      
      document.head.appendChild(link);
    }
  });
};

/**
 * Load non-critical assets after page load
 */
export const loadNonCriticalAssets = (locale: string): void => {
  const assets = LOCALE_ASSETS[locale] || LOCALE_ASSETS.de;
  
  // Use requestIdleCallback for non-critical assets
  const loadAssets = () => {
    assets.forEach(asset => {
      if (asset.priority !== 'high') {
        // Load non-critical assets
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = asset.path;
        document.head.appendChild(link);
      }
    });
  };
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadAssets);
  } else {
    setTimeout(loadAssets, 2000);
  }
};

/**
 * Initialize asset loading for the current locale
 */
export const initializeAssetLoading = (locale: string): void => {
  // Preload critical assets immediately
  preloadLocaleAssets(locale);
  
  // Load non-critical assets after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadNonCriticalAssets(locale);
    });
  } else {
    loadNonCriticalAssets(locale);
  }
};
