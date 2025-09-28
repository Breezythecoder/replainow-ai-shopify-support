import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";

const ModernSocialProofEs = () => {
  const testimonials = [
    {
      company: "BeautyStore",
      owner: "Lisa M.",
      result: "15 horas/semana ahorradas",
      quote: "ReplAInow revolucion nuestro soporte. La IA entiende nuestros productos mejor que algunos empleados!",
      image: testimonialLisa
    },
    {
      company: "TechGadgets", 
      owner: "Marco K.",
      result: "+37% satisfaccin del cliente",
      quote: "Los clientes aman las respuestas instantneas. La conversin se fue por las nubes!",
      image: testimonialMarco
    },
    {
      company: "FashionHub",
      owner: "Sarah T.", 
      result: "12x ROI en 3 meses",
      quote: "De Intercom a ReplAInow - mejor decisin de la vida! Costos abajo, rendimiento arriba.",
      image: testimonialSarah
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
          <img 
            src="/images/shopify-logo-black.svg" 
            alt="Shopify Plus Partner" 
            className="h-8 grayscale hover:grayscale-0 transition-all" 
          />
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <span className="text-yellow-500 text-lg"></span>
            <span className="font-bold text-slate-700">4.9/5</span>
          </div>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold border border-green-200">
            Cumple RGPD
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold border border-blue-200">
            280+ Tiendas
          </span>
        </div>
        
        <h2 className="text-4xl font-black text-center mb-16 tracking-tight">
          Lo que dicen <span className="text-gradient-primary">comerciantes reales</span>
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="glass-card rounded-3xl p-8 interactive-card border border-white/40">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={`Perfil de ${testimonial.owner}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200" 
                />
                <div>
                  <div className="font-bold text-slate-800">{testimonial.owner}</div>
                  <div className="text-sm text-slate-500 font-medium">{testimonial.company}</div>
                </div>
              </div>
              <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-gradient-primary font-bold text-lg">
                 {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-primary rounded-3xl p-8 text-center text-white shadow-hero">
          <h3 className="text-2xl font-bold mb-8">Resultados probados en nmeros</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">280+</div>
              <div className="text-white/90">Comerciantes felices</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">187%</div>
              <div className="text-white/90">Aumento promedio de conversin</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">2.1M</div>
              <div className="text-white/90">Ingresos adicionales generados</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">90%</div>
              <div className="text-white/90">Menos esfuerzo de soporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSocialProofEs;