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
    <section id="live-demo" className="py-32 relative overflow-hidden" style={{ background: '#F5F3FF' }}>
      {/* Subtle Purple Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Sieh <span style={{
              background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>AI</span> in Aktion
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden"
          style={{
            background: 'white',
            border: '2px solid rgba(107, 70, 193, 0.1)',
            boxShadow: '0 40px 100px rgba(107, 70, 193, 0.15)'
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-bold">ReplAInow AI - Live</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
            </button>
          </div>

          {/* Chat */}
          <div className="p-8 space-y-4 min-h-[400px]" style={{ background: '#F8FAFC' }}>
            {messages.slice(0, currentStep + 1).map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.type === 'ai' ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div 
                  className={`max-w-[80%] px-6 py-4 rounded-2xl ${
                    msg.type === 'ai'
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}
                  style={{
                    background: msg.type === 'ai'
                      ? 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)'
                      : 'white'
                  }}
                >
                  {msg.type === 'ai' && (
                    <div className="text-xs text-purple-200 font-semibold mb-1">AI • &lt;1s</div>
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

