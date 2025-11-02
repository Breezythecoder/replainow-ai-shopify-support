import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const LiveDemo2025 = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      name: "Tech Store",
      icon: "📱",
      messages: [
        { type: 'customer', text: 'Hallo! Ich habe eine Frage zu den iPhone Cases...', delay: 0 },
        { type: 'ai', text: 'Hallo! Gerne helfe ich dir bei den iPhone Cases. Welches Modell hast du?', delay: 1000 },
        { type: 'customer', text: 'iPhone 15 Pro', delay: 2000 },
        { type: 'ai', text: 'Perfekt! Wir haben 12 Cases für iPhone 15 Pro auf Lager. Suchst du etwas Bestimmtes? Transparent, Leder, mit Kartenfach?', delay: 3000 },
      ]
    },
    {
      name: "Fashion Store",
      icon: "👗",
      messages: [
        { type: 'customer', text: 'Welche Größe sollte ich bei den Jeans nehmen?', delay: 0 },
        { type: 'ai', text: 'Gerne helfe ich dir! Unsere Jeans fallen normal aus. Was ist normalerweise deine Größe?', delay: 1000 },
        { type: 'customer', text: 'Normalerweise Größe 38', delay: 2000 },
        { type: 'ai', text: 'Dann empfehle ich dir Größe 38. Die Jeans sind aus Stretch-Denim und passen sich gut an. Kostenlose Retoure falls es doch nicht passt! 😊', delay: 3000 },
      ]
    },
    {
      name: "Beauty Store",
      icon: "💄",
      messages: [
        { type: 'customer', text: 'Ist diese Creme für empfindliche Haut geeignet?', delay: 0 },
        { type: 'ai', text: 'Ja! Die "Sensitive Care Creme" ist speziell für empfindliche Haut entwickelt. Dermatologisch getestet, parfümfrei und hypoallergen.', delay: 1000 },
        { type: 'customer', text: 'Perfekt! Wie viel kostet sie?', delay: 2000 },
        { type: 'ai', text: '€29,90 und aktuell 15% Rabatt mit Code SENSITIVE15. Versandkostenfrei ab €40!', delay: 3000 },
      ]
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const scenario = scenarios[selectedScenario];
      if (currentStep < scenario.messages.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying, currentStep, selectedScenario]);

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="live-demo" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-4">
            <span className="text-primary-purple font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              LIVE DEMO
            </span>
          </div>
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Sieh ReplAInow in Aktion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schau zu, wie unsere AI echte Kundengespräche mit perfekter Genauigkeit und Blitzgeschwindigkeit abwickelt
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Scenario Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {scenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedScenario(index);
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedScenario === index
                    ? 'bg-primary-purple text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-purple'
                }`}
              >
                {scenario.icon} {scenario.name}
              </button>
            ))}
          </motion.div>

          {/* Demo Window */}
          <motion.div
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-purple to-purple-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">ReplAInow AI Support - Live</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white" />
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Reset"
                >
                  <RotateCcw className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-8 space-y-4 min-h-[400px] bg-gray-50">
              {scenarios[selectedScenario].messages.slice(0, currentStep + 1).map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`max-w-[80%] px-6 py-4 rounded-2xl ${
                    message.type === 'ai'
                      ? 'bg-white border-2 border-purple-200 text-gray-800'
                      : 'bg-gradient-to-r from-primary-purple to-purple-600 text-white'
                  }`}>
                    {message.type === 'ai' && (
                      <div className="text-xs text-primary-purple font-semibold mb-1">
                        AI • &lt;1s
                      </div>
                    )}
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Footer */}
            <div className="bg-white border-t-2 border-gray-200 p-4 grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-purple">&lt;1s</div>
                <div className="text-xs text-gray-600">Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-green">98%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-blue">24/7</div>
                <div className="text-xs text-gray-600">Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-orange">95+</div>
                <div className="text-xs text-gray-600">Languages</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.p
            className="text-center mt-8 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            💡 <span className="font-semibold">Live aus echten Shopify Stores</span> - Die AI lernt von jedem Gespräch
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo2025;

