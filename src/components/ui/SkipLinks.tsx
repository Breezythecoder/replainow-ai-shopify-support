import { useState, useEffect } from 'react';
import { t } from '@/i18n';

const SkipLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 z-50 bg-white shadow-lg rounded-br-lg">
      <div className="p-2 space-y-1">
        <a
          href="#main-content"
          className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {t('ui.skipToMain')}
        </a>
        <a
          href="#features"
          className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {t('ui.navigation.features')}
        </a>
        <a
          href="#live-demo"
          className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {t('ui.navigation.demo')}
        </a>
        <a
          href="#preise"
          className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {t('ui.navigation.pricing')}
        </a>
      </div>
    </div>
  );
};

export default SkipLinks;
