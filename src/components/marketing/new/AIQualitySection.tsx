import { motion, useInView } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle, Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Count-up animation hook
const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);
  
  return count;
};

const AIQualitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scoreCount = useCountUp(94, 2000, isInView);

  const examples = [
    {
      score: 96,
      status: "Automatisch gesendet",
      color: "green",
      icon: CheckCircle2,
      example: "Kunde fragt nach Rückgabe-Richtlinie → AI zitiert exakt Ihre Policy",
      badge: "AUTO-SEND"
    },
    {
      score: 84,
      status: "Zur Prüfung vorgelegt",
      color: "yellow",
      icon: AlertTriangle,
      example: "Komplexe Frage zu Sonder-Bestellung → AI entwirft Antwort, Sie prüfen",
      badge: "REVIEW"
    },
    {
      score: 62,
      status: "Überarbeitung nötig",
      color: "red",
      icon: XCircle,
      example: "AI unsicher bei Antwort → Sie schreiben komplett neu",
      badge: "REWRITE"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-purple-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Qualitäts-Garantie
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            AI die <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">sich selbst kontrolliert</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jede Antwort bekommt eine Note von 0-100. Nur perfekte Antworten (90+) werden automatisch gesendet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          
          {/* Left: Animated Score Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
              
              {/* Score Circle */}
              <div className="relative w-80 h-80 rounded-full border-[16px] border-gray-100 flex items-center justify-center bg-white shadow-2xl">
                {/* Animated border based on score */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="160"
                    cy="160"
                    r="144"
                    stroke="url(#scoreGradient)"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(scoreCount / 100) * 904} 904`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Score Display */}
                <div className="text-center">
                  <div className="text-7xl font-light text-gray-900 mb-2">{scoreCount}</div>
                  <div className="text-2xl text-gray-400">/100</div>
                  <div className="mt-4 px-4 py-2 bg-green-50 rounded-full">
                    <span className="text-sm font-bold text-green-700">EXZELLENT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Sie stellen ein: Ab 90 Punkte automatisch senden
              </p>
              <p className="text-sm text-gray-600">
                Niedrigere Scores landen in Ihrer Review-Warteschlange
              </p>
            </div>
          </motion.div>

          {/* Right: Examples */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Nie wieder peinliche AI-Fehler
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AI bewertet jede eigene Antwort. Sie behalten die volle Kontrolle 
                über Qualität und entscheiden selbst, ab welchem Score automatisch 
                gesendet wird.
              </p>
            </div>

            {/* Example Cards */}
            {examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className={`
                  relative rounded-2xl p-6 border-2 transition-all duration-300
                  ${example.color === 'green' ? 'border-green-200 bg-green-50/30 hover:border-green-300 hover:bg-green-50/50' : ''}
                  ${example.color === 'yellow' ? 'border-yellow-200 bg-yellow-50/30 hover:border-yellow-300 hover:bg-yellow-50/50' : ''}
                  ${example.color === 'red' ? 'border-red-200 bg-red-50/30 hover:border-red-300 hover:bg-red-50/50' : ''}
                `}
              >
                <div className="flex items-start gap-4">
                  {/* Score Circle */}
                  <div className={`
                    flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl
                    ${example.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                    ${example.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                    ${example.color === 'red' ? 'bg-red-100 text-red-700' : ''}
                  `}>
                    {example.score}
                  </div>

                  <div className="flex-1">
                    {/* Status Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <example.icon className={`
                        w-5 h-5
                        ${example.color === 'green' ? 'text-green-600' : ''}
                        ${example.color === 'yellow' ? 'text-yellow-600' : ''}
                        ${example.color === 'red' ? 'text-red-600' : ''}
                      `} />
                      <span className="font-semibold text-gray-900">{example.status}</span>
                      <div className={`
                        px-2 py-1 rounded text-xs font-bold
                        ${example.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                        ${example.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                        ${example.color === 'red' ? 'bg-red-100 text-red-700' : ''}
                      `}>
                        {example.badge}
                      </div>
                    </div>

                    {/* Example */}
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {example.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom Benefits */}
            <div className="pt-6 border-t border-gray-200">
              <div className="space-y-3">
                {[
                  "Sie behalten die Kontrolle",
                  "Schlechte Antworten landen nie beim Kunden",
                  "Qualitäts-Schwelle selbst einstellen (80-95)"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl">
            <Shield className="w-6 h-6 text-purple-600" />
            <span className="font-bold text-purple-900">
              Qualitäts-Garantie: Nur exzellente AI-Antworten erreichen Ihre Kunden
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIQualitySection;

