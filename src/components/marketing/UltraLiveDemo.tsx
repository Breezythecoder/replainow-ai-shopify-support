import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

const UltraLiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const messages = [
    { type: 'customer', text: 'Hallo! Habt ihr das iPhone 15 Case auf Lager?' },
    { type: 'ai', text: 'Ja! Wir haben 12 verschiedene Cases für iPhone 15 Pro. Transparent, Leder oder Silikon?' },
    { type: 'customer', text: 'Leder bitte, in schwarz' },
    { type: 'ai', text: 'Perfekt! Das Premium Leder Case in Schwarz ist auf Lager. €39,90 - heute 15% Rabatt! Soll ich es für dich reservieren?' },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="live-demo" className="py-24 relative overflow-hidden" style={{ background: '#F5F3FF' }}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Sieh <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>AI</span> in Aktion
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header - Clean Purple */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ background: '#10B981' }}></div>
              <span className="text-white font-semibold">ReplAInow AI - Live</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
            </button>
          </div>

          {/* Chat - Light */}
          <div className="p-8 space-y-4 min-h-[400px]" style={{ background: '#F9FAFB' }}>
            {messages.slice(0, currentStep + 1).map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.type === 'ai' ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div 
                  className={`max-w-[80%] px-6 py-4 rounded-2xl`}
                  style={{
                    background: msg.type === 'ai'
                      ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                      : '#FFFFFF',
                    border: msg.type === 'customer' ? '1px solid #E5E7EB' : 'none',
                    color: msg.type === 'ai' ? '#FFFFFF' : '#111827',
                    boxShadow: msg.type === 'customer' ? '0 2px 8px rgba(0, 0, 0, 0.04)' : undefined
                  }}
                >
                  {msg.type === 'ai' && (
                    <div className="text-xs font-semibold mb-1" style={{ color: '#EDE9FE' }}>AI • &lt;1s</div>
                  )}
                  <p>{msg.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraLiveDemo;

