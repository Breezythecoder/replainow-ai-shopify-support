import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Zap, Brain, Clock } from "lucide-react";

const ModernLiveDemo = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentResponse, setCurrentResponse] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedScenario, setSelectedScenario] = useState(0);
  const demoRef = useRef<HTMLDivElement>(null);

  const scenarios = [
    {
      name: "Tech Store",
      icon: "📱",
      messages: [
        "Hallo! Ich suche ein iPhone Case für mein iPhone 14 Pro. Was könnt ihr empfehlen?",
        "Gibt es Rabatte für Studenten?",
        "Wie lange dauert der Versand nach Deutschland?",
        "Kann ich das Produkt zurückgeben, wenn es mir nicht gefällt?"
      ],
      responses: [
        "Hallo! Für dein iPhone 14 Pro empfehle ich unser Premium Clear Case (€24.99) oder das Rugged Case (€29.99). Beide sind gerade auf Lager und bieten optimalen Schutz! 🛡️",
        "Ja! Studenten bekommen 15% Rabatt mit dem Code STUDENT15. Einfach bei der Bestellung eingeben! 🎓",
        "Standard-Versand nach Deutschland dauert 2-3 Werktage (€4.99), Express-Versand 1-2 Werktage (€9.99). Kostenloser Versand ab €50! 🚚",
        "Ja, du hast 30 Tage Rückgaberecht! Kostenlose Rücksendung, Geld-zurück-Garantie. Einfach in deinem Account die Rücksendung anmelden! ✅"
      ]
    },
    {
      name: "Fashion Store",
      icon: "👗",
      messages: [
        "Welche Größe sollte ich bei diesem Kleid wählen?",
        "Ist das Material nachhaltig?",
        "Kann ich mehrere Farben bestellen?",
        "Wie ist die Qualität?"
      ],
      responses: [
        "Basierend auf deinen Angaben empfehle ich Größe M. Das Kleid fällt locker und ist true-to-size. Bei Unsicherheit lieber eine Größe größer! 📏",
        "Ja! 100% Bio-Baumwolle, fair gehandelt und umweltfreundlich verpackt. 🌱 Nachhaltigkeit ist uns wichtig!",
        "Natürlich! Du kannst alle verfügbaren Farben bestellen. Aktuell haben wir: Schwarz, Weiß, Navy und Beige auf Lager. 🎨",
        "Premium-Qualität! 200g/m² Bio-Baumwolle, maschinenwaschbar, bügelfrei. Unsere Kunden lieben es! ⭐⭐⭐⭐⭐"
      ]
    },
    {
      name: "Beauty Store",
      icon: "💄",
      messages: [
        "Welche Hautpflege-Routine empfiehlst du für trockene Haut?",
        "Sind eure Produkte vegan?",
        "Kann ich eine Proben-Box bestellen?",
        "Wie lange halten die Produkte?"
      ],
      responses: [
        "Für trockene Haut empfehle ich: Morgens unser Hydrating Serum (€29.99) + Moisturizer (€24.99), abends das Repair Night Cream (€34.99). Perfekt für deinen Hauttyp! ✨",
        "Ja! Alle unsere Produkte sind 100% vegan, cruelty-free und dermatologisch getestet. 🌿 Keine tierischen Inhaltsstoffe!",
        "Ja! Unsere Discovery Box (€19.99) enthält 5 Mini-Produkte zum Testen. Ideal zum Kennenlernen unserer Marke! 📦",
        "Ungeöffnet 3 Jahre, nach Öffnung 12 Monate. Alle Produkte haben das PAO-Symbol (Period After Opening) auf der Verpackung! ⏰"
      ]
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

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-typing demo
  useEffect(() => {
    if (!isVisible || !isPlaying) return;

    const currentScenario = scenarios[selectedScenario];
    const interval = setInterval(() => {
      if (messageIndex < currentScenario.messages.length) {
        // Set current message
        setCurrentMessage(currentScenario.messages[messageIndex]);
        
        // Show typing indicator
        setIsTyping(true);
        
        // After 2 seconds, show the CORRECT response for this message
        setTimeout(() => {
          setCurrentResponse(currentScenario.responses[messageIndex]);
          setIsTyping(false);
          
          // Move to next message after showing response
          setTimeout(() => {
            setMessageIndex(prev => prev + 1);
          }, 3000);
        }, 2000);
      } else {
        setMessageIndex(0);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [isVisible, messageIndex, isPlaying, selectedScenario]);

  const resetDemo = () => {
    setMessageIndex(0);
    setCurrentMessage("");
    setCurrentResponse("");
    setIsTyping(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      resetDemo();
    }
  };

  return (
    <section 
      ref={demoRef}
      id="live-demo" 
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* AI-Powered Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
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

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              <span className="relative z-10">⚡ INTERAKTIVE DEMO</span>
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tight text-center px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              Live AI in Aktion
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            <span className="text-cyan-400 font-bold">Echte AI-Antworten</span> in Echtzeit - 
            <span className="text-purple-400 font-bold"> 3 Sekunden</span> von Frage zu Lösung
          </p>
        </div>
        
        {/* Revolutionary Interactive Chat Demo */}
        <div className={`max-w-7xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            {/* Clean Frame */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl animate-pulse"></div>
            
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              {/* Scenario Selector */}
              <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Wähle ein Szenario:</h3>
                    <div className="flex flex-wrap gap-2">
                      {scenarios.map((scenario, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedScenario(index);
                            resetDemo();
                          }}
                          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                            selectedScenario === index
                              ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                              : 'bg-white text-slate-600 border border-slate-300 hover:bg-blue-50 hover:border-blue-300'
                          }`}
                        >
                          <span className="mr-2">{scenario.icon}</span>
                          {scenario.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={togglePlay}
                      variant={isPlaying ? "destructive" : "default"}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {isPlaying ? "Pause" : "Play"}
                    </Button>
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold">ReplAInow AI Support</span>
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">LIVE</span>
                    <span className="text-blue-200 text-sm">{scenarios[selectedScenario].name}</span>
                  </div>
                  <div className="text-blue-200 text-sm font-bold">3s Response Time</div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-6 max-h-96 overflow-y-auto p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl max-w-lg shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs font-bold">Kunde</span>
                        <span className="text-xs text-blue-200">vor 2s</span>
                      </div>
                      <p className="text-sm leading-relaxed">{currentMessage || "Hallo! Ich habe eine Frage..."}</p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-white text-slate-800 p-4 rounded-2xl max-w-lg shadow-lg border border-slate-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-xs text-white">
                          <Brain className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-bold text-blue-600">ReplAInow AI</span>
                        <span className="text-xs text-slate-500">vor 1s</span>
                        {isTyping && (
                          <div className="flex gap-1 ml-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        )}
                      </div>
                      <div className="text-sm leading-relaxed">
                        {isTyping ? (
                          <div className="flex items-center gap-2 text-blue-600">
                            <Clock className="w-4 h-4 animate-spin" />
                            <span className="animate-pulse">AI denkt nach...</span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {currentResponse ? (
                              <div className="prose prose-sm max-w-none">
                                <p className="m-0">{currentResponse}</p>
                              </div>
                            ) : (
                              <p className="text-slate-600">Hallo! Wie kann ich dir heute helfen?</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-4 gap-4 mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="text-center">
                    <div className="text-2xl font-black text-blue-600 flex items-center justify-center gap-1">
                      <Zap className="w-5 h-5" />
                      3s
                    </div>
                    <div className="text-xs text-slate-600 font-medium">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-600">98%</div>
                    <div className="text-xs text-slate-600 font-medium">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-indigo-600">24/7</div>
                    <div className="text-xs text-slate-600 font-medium">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-purple-600">32+</div>
                    <div className="text-xs text-slate-600 font-medium">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Store Activity */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">
              <span className="text-blue-600">Live</span> aus echten Shopify Stores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-green-600 font-bold text-sm">TechGadgets24</div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                   "AI hat gerade eine Produktempfehlung zu iPhone Cases gegeben - Kunde kauft sofort 3 Stück!"
                </div>
                <div className="text-green-600 text-xs font-bold">+EUR 89.97 Umsatz</div>
              </div>
              
              <div className="space-y-3 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="text-purple-600 font-bold text-sm">BeautyStore</div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                   "Französische Kundin bekommt perfekte Antwort auf Französisch über Hautpflege-Routine"
                </div>
                <div className="text-purple-600 text-xs font-bold">+37% Conversion</div>
              </div>
              
              <div className="space-y-3 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="text-blue-600 font-bold text-sm">FashionHub</div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                   "AI erklärt Größentabelle und empfiehlt passende Größe - Return Rate sinkt um 60%"
                </div>
                <div className="text-blue-600 text-xs font-bold">-60% Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernLiveDemo;