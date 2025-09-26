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
    <section id="features" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16 sm:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gradient-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-gradient-button rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16 tracking-tight px-4">
          Warum <span className="text-gradient-hero">ReplAInow</span> überlegen ist
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
          Modernste GPT-4.1 Technologie trifft auf perfekte Shopify-Integration
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group glass-world-class rounded-3xl p-6 sm:p-8 world-class-card border border-white/30 shadow-card h-full relative overflow-hidden"
            >
              {/* Professional card glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-3 transition-opacity rounded-3xl"></div>
              
              <div className={`relative text-3xl sm:text-4xl mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-card group-hover:scale-105 group-hover:shadow-brand transition-all duration-500`}>
                {feature.icon}
              </div>
              <h3 className="relative text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-neutral-800 group-hover:text-brand-primary transition-all duration-300">{feature.title}</h3>
              <p className="relative text-brand-neutral-800/80 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
              
              {/* Professional connecting lines */}
              {i < features.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-brand-primary/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-16 sm:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default ModernFeatures;