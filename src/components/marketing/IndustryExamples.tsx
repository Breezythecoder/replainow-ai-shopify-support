const IndustryExamples = () => {
  const industries = [
    {
      name: "Fashion & Mode",
      icon: "Fashion",
      example: "ModeStore",
        challenge: "Größenberatung, Rückgabe, Styling-Tipps",
      solution: "AI erkennt Produktmerkmale und gibt personalisierte Empfehlungen",
      result: "+45% Conversion, -60% Support-Tickets"
    },
    {
      name: "Elektronik & Tech",
      icon: "Tech",
      example: "TechGadgets",
        challenge: "Technische Fragen, Kompatibilität, Setup-Hilfe",
        solution: "AI kennt alle Produktspezifikationen und löst 90% der Fragen",
      result: "+67% Kundenzufriedenheit, -80% Wartezeiten"
    },
    {
      name: "Beauty & Kosmetik",
      icon: "Beauty",
      example: "BeautyStore",
      challenge: "Produktberatung, Hauttyp-Analyse, Anwendungstipps",
      solution: "AI analysiert Hauttyp und empfiehlt passende Produkte",
      result: "+52% Upselling, -70% Retouren"
    },
    {
      name: "Home & Garten",
      icon: "Home",
      example: "HomeGarden",
        challenge: "Montageanleitungen, Pflegetipps, Kompatibilität",
      solution: "AI liefert detaillierte Anleitungen und Pflegehinweise",
      result: "+38% Kundenzufriedenheit, -55% Support-Aufwand"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            <span className="text-blue-600">Branchenspezifische</span> Lösungen
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            ReplAInow passt sich perfekt an deine Branche an und löst 
            <span className="text-indigo-600 font-bold"> branchenspezifische Kundenfragen</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-4 text-center font-bold text-blue-600">{industry.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                {industry.name}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-slate-600">Beispiel:</span>
                  <span className="text-slate-800 ml-1">{industry.example}</span>
                </div>
                <div>
                  <span className="font-semibold text-red-600">Herausforderung:</span>
                  <span className="text-slate-800 ml-1">{industry.challenge}</span>
                </div>
                <div>
                    <span className="font-semibold text-blue-600">Lösung:</span>
                  <span className="text-slate-800 ml-1">{industry.solution}</span>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <span className="font-semibold text-green-600">Ergebnis:</span>
                  <span className="text-slate-800 ml-1">{industry.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExamples;
