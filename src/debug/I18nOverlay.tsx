import React, { useState, useEffect } from 'react';
import { translations, type Locale } from '../i18n';

interface I18nDebugInfo {
  currentLocale: Locale;
  missingKeys: string[];
  totalKeys: number;
  missingPercentage: number;
  route: string;
  userAgent: string;
}

export const I18nOverlay: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<I18nDebugInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in staging/development
    if (import.meta.env.VITE_DEBUG_I18N !== '1') {
      return;
    }

    const updateDebugInfo = () => {
      const currentLocale = getCurrentLocale();
      const route = window.location.pathname;
      const missingKeys = getMissingKeys(currentLocale);
      const totalKeys = getTotalKeys();

      setDebugInfo({
        currentLocale,
        missingKeys,
        totalKeys,
        missingPercentage: (missingKeys.length / totalKeys) * 100,
        route,
        userAgent: navigator.userAgent,
      });
    };

    // Update on route change
    const handleRouteChange = () => updateDebugInfo();
    window.addEventListener('popstate', handleRouteChange);

    // Initial update
    updateDebugInfo();

    // Update every 2 seconds
    const interval = setInterval(updateDebugInfo, 2000);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      clearInterval(interval);
    };
  }, []);

  // Don't render if not in debug mode or no debug info
  if (import.meta.env.VITE_DEBUG_I18N !== '1' || !debugInfo) {
    return null;
  }

  const getStatusColor = (percentage: number) => {
    if (percentage === 0) return 'text-green-600 bg-green-100';
    if (percentage < 5) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getStatusText = (percentage: number) => {
    if (percentage === 0) return 'Perfect';
    if (percentage < 5) return 'Good';
    return 'Issues';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`
          px-3 py-2 rounded-lg shadow-lg font-mono text-sm font-bold transition-all
          ${getStatusColor(debugInfo.missingPercentage)}
          hover:scale-105 active:scale-95
        `}
        title="i18n Debug Panel"
      >
        🌐 {debugInfo.currentLocale.toUpperCase()} ({debugInfo.missingPercentage.toFixed(1)}%)
      </button>

      {isVisible && (
        <div className="absolute bottom-12 right-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-900">i18n Debug Panel</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Status:</span>
              <span className={`ml-2 px-2 py-1 rounded text-xs ${getStatusColor(debugInfo.missingPercentage)}`}>
                {getStatusText(debugInfo.missingPercentage)}
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Current Locale:</span>
              <span className="ml-2 font-mono text-blue-600">{debugInfo.currentLocale}</span>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Route:</span>
              <span className="ml-2 font-mono text-gray-600 break-all">{debugInfo.route}</span>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Translation Coverage:</span>
              <span className="ml-2">
                {debugInfo.totalKeys - debugInfo.missingKeys.length} / {debugInfo.totalKeys}
                ({((debugInfo.totalKeys - debugInfo.missingKeys.length) / debugInfo.totalKeys * 100).toFixed(1)}%)
              </span>
            </div>

            {debugInfo.missingKeys.length > 0 && (
              <div>
                <span className="font-semibold text-red-600">Missing Keys:</span>
                <div className="mt-2 max-h-32 overflow-y-auto">
                  {debugInfo.missingKeys.slice(0, 10).map((key, index) => (
                    <div key={index} className="font-mono text-xs text-red-500 py-1 border-b border-red-100">
                      {key}
                    </div>
                  ))}
                  {debugInfo.missingKeys.length > 10 && (
                    <div className="text-xs text-gray-500 py-1">
                      ... and {debugInfo.missingKeys.length - 10} more
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-gray-200">
              <details>
                <summary className="font-semibold text-gray-700 cursor-pointer">Technical Details</summary>
                <div className="mt-2 text-xs text-gray-600 space-y-1">
                  <div><strong>User Agent:</strong> {debugInfo.userAgent}</div>
                  <div><strong>Timestamp:</strong> {new Date().toISOString()}</div>
                  <div><strong>Environment:</strong> {import.meta.env.MODE}</div>
                </div>
              </details>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper functions
function getCurrentLocale(): Locale {
  // Get from localStorage or detect from path
  const stored = localStorage.getItem('locale');
  if (stored && ['de', 'en', 'es', 'fr'].includes(stored)) {
    return stored as Locale;
  }

  // Detect from pathname
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/de')) return 'de';
    if (path.startsWith('/es')) return 'es';
    if (path.startsWith('/fr')) return 'fr';
  }

  return 'de'; // default
}

function getMissingKeys(locale: Locale): string[] {
  const localeTranslations = translations[locale];
  const defaultTranslations = translations.de; // Use DE as reference

  const missingKeys: string[] = [];

  function checkKeys(obj: any, prefix = '', reference: any = defaultTranslations) {
    for (const [key, value] of Object.entries(reference)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Nested object
        if (!obj?.[key] || typeof obj[key] !== 'object') {
          missingKeys.push(fullKey);
        } else {
          checkKeys(obj[key], fullKey, value);
        }
      } else {
        // Leaf value
        if (obj?.[key] === undefined || obj[key] === null) {
          missingKeys.push(fullKey);
        }
      }
    }
  }

  checkKeys(localeTranslations, '', defaultTranslations);
  return missingKeys;
}

function getTotalKeys(): number {
  const defaultTranslations = translations.de;

  function countKeys(obj: any): number {
    let count = 0;
    for (const value of Object.values(obj)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        count += countKeys(value);
      } else {
        count++;
      }
    }
    return count;
  }

  return countKeys(defaultTranslations);
}
