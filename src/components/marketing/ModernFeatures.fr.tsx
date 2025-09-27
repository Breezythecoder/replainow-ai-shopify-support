const ModernFeaturesFr = () => {
  const features = [
    { icon: "", title: "Intelligence GPT-4.1", desc: "La dernire IA comprend le contexte comme un expert humain", gradient: "from-indigo-500 to-blue-500" },
    { icon: "", title: "Rponses en 3 secondes", desc: "Rponses instantanes pendant que Gorgias & Co. chargent encore", gradient: "from-purple-500 to-pink-500" },
    { icon: "", title: "32+ langues natives", desc: "Rponses parfaites dans la langue du client", gradient: "from-cyan-500 to-teal-500" },
    { icon: "", title: "Donnes Shopify en temps rel", desc: "L'IA connat tous les produits, prix, stocks", gradient: "from-green-500 to-emerald-500" },
    { icon: "", title: "75% d'conomies", desc: "Suprieur ET moins cher que la concurrence", gradient: "from-amber-500 to-orange-500" },
    { icon: "", title: "Installation 1-clic", desc: "Mise en place en moins de 60s, zro complexit", gradient: "from-rose-500 to-red-500" },
  ];

  return (
    <section id="features" className="py-24 bg-ultra-light">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16 tracking-tight px-4">
          Pourquoi <span className="text-gradient-primary">ReplAInow</span> est suprieur
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
          La technologie GPT-4.1 rencontre une intgration Shopify parfaite
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div key={i} className="group glass-card rounded-3xl p-6 sm:p-8 interactive-card border border-white/40 hover-lift h-full">
              <div className={`text-3xl sm:text-4xl mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-r ${f.gradient} flex items-center justify-center text-white shadow-float group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesFr;