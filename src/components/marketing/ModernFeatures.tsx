import { useState, useEffect, useRef } from "react";
import { Brain, Zap, Clock, Globe, Target, Shield, TrendingUp, Users, MessageSquare, BarChart3, CheckCircle } from "lucide-react";

const ModernFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Brain,
      title: "GPT-4.1 Intelligence",
      desc: "Neueste AI-Technologie versteht Kontext wie ein menschlicher Experte",
      gradient: "from-indigo-500 to-blue-500",
      story: "Deine AI denkt wie ein 10-jähriger Shopify-Experte - nur 1000x schneller",
      impact: "+187% Conversion",
      color: "cyan"
    },
    {
      icon: Clock,
      title: "3-Sekunden Antworten",
      desc: "Instant-Responses während Gorgias & Co. noch laden",
      gradient: "from-purple-500 to-pink-500",
      story: "Kunde fragt  AI antwortet  Kunde kauft. Alles in 3 Sekunden",
      impact: "90% weniger Tickets",
      color: "purple"
    },
    {
      icon: Globe,
      title: "32+ Sprachen Nativ",
      desc: "Perfekte Antworten in Kundensprache - keine Übersetzungsfehler",
      gradient: "from-cyan-500 to-teal-500",
      story: "Französische Kundin bekommt perfekte Antwort auf Französisch",
      impact: "+45% International",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Echtzeit Shopify-Daten",
      desc: "AI kennt ALLE Produkte, Preise, Lagerbestände automatisch",
      gradient: "from-green-500 to-emerald-500",
      story: "AI weiß: 'iPhone Case ist auf Lager, 15% Rabatt verfügbar, Versand morgen'",
      impact: "100% Accuracy",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "75% Kosteneinsparung",
      desc: "Überlegen UND günstiger als teure Konkurrenz",
      gradient: "from-amber-500 to-orange-500",
      story: "Während Gorgias €200/Monat kostet, zahlst du nur €19",
      impact: "€1.368/Jahr gespart",
      color: "yellow"
    },
    {
      icon: "Zap",
      title: "1-Klick Installation",
      desc: "Setup in unter 60 Sekunden - keine komplexe Konfiguration",
      gradient: "from-rose-500 to-red-500",
      story: "Klick → AI lernt deinen Store → Fertig. Keine IT-Abteilung nötig",
      impact: "60s Setup",
      color: "red"
    }
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate features
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={featuresRef}
      id="features"
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* AI-Powered Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              <span className="relative z-10">🚀 AI FEATURES</span>
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 tracking-tight px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              Warum ReplAInow
            </span>
            <span className="block text-white mt-2">die Konkurrenz zerstört</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
            <span className="text-cyan-400 font-bold">Revolutionäre GPT-4.1 Technologie</span> trifft auf
            <span className="text-purple-400 font-bold"> perfekte Shopify-Integration</span>
          </p>
        </div>
        
        {/* Revolutionary Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`group bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl h-full relative overflow-hidden cursor-pointer transition-all duration-500 ${
                activeFeature === i ? 'scale-105 shadow-blue-500/25 border-blue-400/60 bg-slate-800/70' : 'hover:scale-102 hover:border-blue-400/50'
              }`}
              onClick={() => setActiveFeature(i)}
            >
              {/* AI Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl`}></div>
              
              {/* Feature Icon with Animation */}
              <div className={`relative text-4xl sm:text-5xl mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              {/* Feature Content */}
              <h3 className="relative text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="relative text-blue-200 leading-loose text-sm sm:text-base mb-4 group-hover:text-blue-100 transition-all duration-300">
                {feature.desc}
              </p>

              {/* AI Story */}
              <div className="relative bg-blue-500/10 rounded-2xl p-4 mb-4 border border-blue-400/30">
                <p className="text-cyan-400 text-sm font-bold mb-2">🚀 AI Realität:</p>
                <p className="text-blue-200 text-sm leading-loose">{feature.story}</p>
              </div>

              {/* Impact Badge */}
              <div className="relative">
                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${feature.gradient} text-white text-sm font-black rounded-full shadow-lg border border-white/20`}>
                  {feature.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Revolutionary Stats Counter */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-slate-800 text-center">
               <span className="text-blue-600">Bewiesene</span> Resultate
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">5000+</div>
                <div className="text-sm text-slate-600">Aktive Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600 mb-2">187%</div>
                <div className="text-sm text-slate-600">Conversion Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-indigo-600 mb-2">2.1M</div>
                <div className="text-sm text-slate-600">Umsatz generiert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600 mb-2">90%</div>
                <div className="text-sm text-slate-600">Weniger Tickets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;