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
    <section id="live-demo" className="py-32 relative overflow-hidden" style={{ background: '#111218' }}>
      {/* CYAN GLOW Orb */}
      <div className="ultra-orb ultra-orb-cyan top-20 left-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6" style={{ color: '#FFFFFF' }}>
            Sieh <span className="ultra-text-cyan" style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))'
            }}>AI</span> in Aktion
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '2px solid rgba(6, 182, 212, 0.3)',
            boxShadow: `
              0 40px 120px rgba(0, 0, 0, 0.5),
              0 0 80px rgba(6, 182, 212, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.05)
            `
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header - CYAN GRADIENT */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full pulse-glow-cyan" style={{ background: '#10B981' }}></div>
              <span className="text-white font-bold">ReplAInow AI - Live</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
            </button>
          </div>

          {/* Chat - DARK */}
          <div className="p-8 space-y-4 min-h-[400px]" style={{ background: '#16171D' }}>
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
                      ? 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: msg.type === 'customer' ? 'blur(20px)' : undefined,
                    WebkitBackdropFilter: msg.type === 'customer' ? 'blur(20px)' : undefined,
                    border: msg.type === 'customer' ? '1px solid rgba(147, 51, 234, 0.2)' : 'none',
                    color: msg.type === 'ai' ? '#FFFFFF' : '#E2E8F0',
                    boxShadow: msg.type === 'ai' ? '0 0 30px rgba(6, 182, 212, 0.3)' : undefined
                  }}
                >
                  {msg.type === 'ai' && (
                    <div className="text-xs font-semibold mb-1" style={{ color: '#CFFAFE' }}>AI • &lt;1s</div>
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

