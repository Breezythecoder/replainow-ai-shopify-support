import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";

const ModernSocialProofFr = () => {
  const testimonials = [
    { company: "BeautyStore", owner: "Lisa M.", result: "15 h/semaine gagnes", quote: "ReplAInow a rvolutionn notre support. L'IA comprend nos produits mieux que certains employs !", image: testimonialLisa },
    { company: "TechGadgets", owner: "Marco K.", result: "+37% satisfaction client", quote: "Les clients adorent les rponses instantanes. La conversion a explos !", image: testimonialMarco },
    { company: "FashionHub", owner: "Sarah T.", result: "ROI x12 en 3 mois", quote: "D'Intercom  ReplAInow  meilleur choix ! Moins de cots, plus de performance.", image: testimonialSarah },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
          <img src="/images/shopify-logo-black.svg" alt="Partenaire Shopify Plus" className="h-8 grayscale hover:grayscale-0 transition-all" />
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <span className="text-yellow-500 text-lg"></span>
            <span className="font-bold text-slate-700">4.9/5</span>
          </div>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold border border-green-200">Conforme RGPD</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold border border-blue-200">5000+ Boutiques</span>
        </div>
        <h2 className="text-4xl font-black text-center mb-16 tracking-tight">
          Ce que disent <span className="text-gradient-primary">de vrais marchands</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-3xl p-8 interactive-card border border-white/40">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={`Profil ${t.owner}`} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200" />
                <div>
                  <div className="font-bold text-slate-800">{t.owner}</div>
                  <div className="text-sm text-slate-500 font-medium">{t.company}</div>
                </div>
              </div>
              <blockquote className="text-slate-700 leading-relaxed mb-6 italic">"{t.quote}"</blockquote>
              <div className="text-gradient-primary font-bold text-lg"> {t.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSocialProofFr;