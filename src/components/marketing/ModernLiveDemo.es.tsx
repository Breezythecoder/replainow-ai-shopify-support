const ModernLiveDemoEs = () => {
  return (
    <section id="live-demo" className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 tracking-tight text-center px-4">
          Ve ReplAInow <span className="text-gradient-hero">en vivo en accin</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          De 0 a hroe en 3 segundos - as funciona la tecnologa IA de vanguardia para tu tienda Shopify
        </p>
        
        {/* Video Container */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-hero bg-gradient-primary p-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/x1VLcGBbcgo?controls=1&rel=0&modestbranding=1&showinfo=0"
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="ReplAInow Demo en Vivo - Mesa de Ayuda IA para Shopify"
              />
            </div>
          </div>
        </div>
        
        {/* Demo Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift">
            <div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">3 Seg</div>
            <div className="text-slate-600 font-medium text-sm sm:text-base">Tiempo Promedio de Respuesta</div>
          </div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift">
            <div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">98%</div>
            <div className="text-slate-600 font-medium text-sm sm:text-base">Tasa de Precisin</div>
          </div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift">
            <div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">24/7</div>
            <div className="text-slate-600 font-medium text-sm sm:text-base">Disponibilidad</div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 sm:mt-16 glass-card p-6 sm:p-8 rounded-3xl max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800 text-center px-4">En vivo desde tiendas Shopify reales:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            <div className="space-y-3 p-4 bg-white/50 rounded-2xl">
              <div className="text-brand-success font-bold text-sm sm:text-base"> TechGadgets24</div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">"IA acaba de recomendar fundas iPhone - cliente compra inmediatamente 3 piezas!"</div>
            </div>
            <div className="space-y-3 p-4 bg-white/50 rounded-2xl">
              <div className="text-brand-success font-bold text-sm sm:text-base"> BeautyStore</div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">"Cliente francesa obtiene respuesta perfecta en francs sobre rutina de cuidado de piel"</div>
            </div>
            <div className="space-y-3 p-4 bg-white/50 rounded-2xl">
              <div className="text-brand-success font-bold text-sm sm:text-base"> FashionHub</div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">"IA explica tabla de tallas y recomienda talla perfecta - tasa de devoluciones baja 60%"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernLiveDemoEs;