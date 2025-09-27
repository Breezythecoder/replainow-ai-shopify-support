import { useState, useEffect, useRef } from "react";

const ModernLiveDemo = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentResponse, setCurrentResponse] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  const demoMessages = [
     "Hallo! Ich suche ein iPhone Case für mein iPhone 14 Pro. Was könnt ihr empfehlen?",
     "Gibt es Rabatte für Studenten?",
    "Wie lange dauert der Versand nach Deutschland?",
    "Kann ich das Produkt zurückgeben, wenn es mir nicht gefällt?",
    "Welche Zahlungsmethoden akzeptiert ihr?"
  ];

  const aiResponses = [
    "Hallo! Für dein iPhone 14 Pro empfehle ich unser Premium Clear Case (EUR 24.99) oder das Rugged Case (EUR 29.99). Beide sind gerade auf Lager und bieten optimalen Schutz!",
    "Ja! Studenten bekommen 15% Rabatt mit dem Code STUDENT15. Einfach bei der Bestellung eingeben!",
    "Standard-Versand nach Deutschland dauert 2-3 Werktage (EUR 4.99), Express-Versand 1-2 Werktage (EUR 9.99). Kostenloser Versand ab EUR 50!",
    "Ja, du hast 30 Tage Rückgaberecht! Kostenlose Rücksendung, Geld-zurück-Garantie. Einfach in deinem Account die Rücksendung anmelden!",
    "Wir akzeptieren: Kreditkarte, PayPal, Klarna, Apple Pay, Google Pay, SEPA-Lastschrift und Bitcoin!"
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
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (messageIndex < demoMessages.length) {
        // Set current message
        setCurrentMessage(demoMessages[messageIndex]);
        
        // Show typing indicator
        setIsTyping(true);
        
        // After 2 seconds, show the CORRECT response for this message
        setTimeout(() => {
          setCurrentResponse(aiResponses[messageIndex]);
          setIsTyping(false);
          
          // Move to next message after showing response
          setTimeout(() => {
            setMessageIndex(prev => prev + 1);
          }, 2000);
        }, 2000);
      } else {
        setMessageIndex(0);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible, messageIndex]);

  return (
    <section 
      ref={demoRef}
      id="live-demo" 
      className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Clean Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm rounded-full shadow-lg animate-pulse">
              INTERAKTIVE DEMO
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tight text-center px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
              Live AI in Aktion
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            <span className="text-blue-600 font-bold">Echte AI-Antworten</span> in Echtzeit - 
            <span className="text-indigo-600 font-bold"> 3 Sekunden</span> von Frage zu Lösung
          </p>
        </div>
        
        {/* Revolutionary Interactive Chat Demo */}
        <div className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            {/* Clean Frame */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl animate-pulse"></div>
            
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-6">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-bold">ReplAInow AI Support</span>
                  <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">LIVE</span>
                </div>
                <div className="text-blue-200 text-sm font-bold">3s Response Time</div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {/* Customer Message */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl max-w-md shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">
                         <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                         </svg>
                       </div>
                      <span className="text-xs font-bold">Kunde</span>
                    </div>
                    <p className="text-sm">{currentMessage || "Hallo! Ich habe eine Frage..."}</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 p-4 rounded-2xl max-w-md shadow-lg border border-slate-300">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-xs text-white">
                         <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                         </svg>
                       </div>
                      <span className="text-xs font-bold text-blue-600">ReplAInow AI</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                    <p className="text-sm">
                      {isTyping ? (
                        <span className="text-blue-600 animate-pulse">AI denkt nach...</span>
                      ) : (
                        currentResponse || "Hallo! Wie kann ich dir heute helfen?"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 p-4 bg-slate-100 rounded-2xl border border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-600">3s</div>
                  <div className="text-xs text-slate-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-600">98%</div>
                  <div className="text-xs text-slate-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-indigo-600">24/7</div>
                  <div className="text-xs text-slate-600">Available</div>
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