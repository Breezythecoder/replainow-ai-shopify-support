const ModernFeatures = () => {
  const features = [
    {
      icon: "🧠",
      title: "GPT-4.1 Intelligence",
      desc: "Neueste AI-Technologie versteht Kontext wie ein menschlicher Experte",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: "⚡",
      title: "3-Sekunden Antworten",
      desc: "Instant-Responses während Gorgias & Co. noch laden",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌍",
      title: "32+ Sprachen Nativ",
      desc: "Perfekte Antworten in Kundensprache - keine Übersetzungsfehler",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: "📊",
      title: "Echtzeit Shopify-Daten",
      desc: "AI kennt ALLE Produkte, Preise, Lagerbestände automatisch",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "💰",
      title: "75% Kosteneinsparung",
      desc: "Überlegen UND günstiger als teure Konkurrenz",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: "🚀",
      title: "1-Klick Installation",
      desc: "Setup in unter 60 Sekunden - keine komplexe Konfiguration",
      gradient: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">
          Warum <span className="text-gradient-primary">ReplAInow</span> überlegen ist
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16">
          Modernste GPT-4.1 Technologie trifft auf perfekte Shopify-Integration
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group glass-card rounded-3xl p-8 interactive-card border border-white/40"
            >
              <div className={`text-4xl mb-6 w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-float group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;