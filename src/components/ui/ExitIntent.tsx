import { useState, useEffect } from 'react';
import { Button } from './button';
import { X } from 'lucide-react';

const ExitIntent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showPopup) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Warte! Verpasse nicht deine Chance!
          </h3>
          <p className="text-slate-600 mb-6">
            Sichere dir jetzt 30% Rabatt auf alle Pläne. 
            Nur noch heute verfügbar!
          </p>
          
          <div className="space-y-3">
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3"
            >
              <a href="https://apps.shopify.com/replainow-ai-support">
                🎯 JETZT 30% SPAREN
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setShowPopup(false)}
            >
              Nein, danke
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntent;
