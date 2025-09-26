const ModernFeaturesEs = () => {
  const features = [
    {
      icon: "🧠",
      title: "Inteligencia GPT-4.1",
      desc: "La última tecnología IA entiende el contexto como un experto humano",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: "⚡",
      title: "Respuestas en 3 Segundos",
      desc: "Respuestas instantáneas mientras Gorgias y compañía aún cargan",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌍",
      title: "32+ Idiomas Nativos",
      desc: "Respuestas perfectas en el idioma del cliente - sin errores de traducción",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: "📊",
      title: "Datos Shopify en Tiempo Real",
      desc: "IA conoce TODOS los productos, precios, inventarios automáticamente",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "💰",
      title: "75% Ahorro de Costos",
      desc: "Superior Y más barato que la competencia cara",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: "🚀",
      title: "Instalación con 1 Clic",
      desc: "Configuración en menos de 60 segundos - sin configuración compleja",
      gradient: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-ultra-light">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12 lg:mb-16 tracking-tight px-4">
          Por qué <span className="text-gradient-primary">ReplAInow</span> es superior
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
          La última tecnología GPT-4.1 se encuentra con la integración perfecta de Shopify
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group glass-card rounded-3xl p-6 sm:p-8 interactive-card border border-white/40 hover-lift h-full"
            >
              <div className={`text-3xl sm:text-4xl mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-float group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesEs;