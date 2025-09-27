import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";

const ModernSocialProofEn = () => {
  const testimonials = [
    {
      company: "BeautyStore",
      owner: "Lisa M.",
      result: "15 hours/week saved",
      quote: "ReplAInow revolutionized our support. The AI understands our products better than some employees!",
      image: testimonialLisa
    },
    {
      company: "TechGadgets", 
      owner: "Marco K.",
      result: "+37% customer satisfaction",
      quote: "Customers love the instant responses. Conversion went through the roof!",
      image: testimonialMarco
    },
    {
      company: "FashionHub",
      owner: "Sarah T.", 
      result: "12x ROI in 3 months",
      quote: "From Intercom to ReplAInow - best decision ever! Costs down, performance up.",
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
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold border border-green-200">
            GDPR Compliant
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold border border-blue-200">
            5000+ Stores
          </span>
        </div>
        
        <h2 className="text-4xl font-black text-center mb-16 tracking-tight">
          What <span className="text-gradient-primary">real merchants</span> say
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="glass-card rounded-3xl p-8 interactive-card border border-white/40">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.owner} Profile`}
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
          <h3 className="text-2xl font-bold mb-8">Proven results in numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">5000+</div>
              <div className="text-white/90">Happy merchants</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">187%</div>
              <div className="text-white/90">Avg conversion increase</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">$2.1M</div>
              <div className="text-white/90">Additional revenue generated</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">90%</div>
              <div className="text-white/90">Less support effort</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSocialProofEn;