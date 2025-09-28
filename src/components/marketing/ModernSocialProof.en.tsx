import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import { Star } from "lucide-react";
import { STORE_COUNT } from "@/config/siteStats";

const ModernSocialProof = () => {
  const testimonials = [
    {
      company: "BeautyStore",
      owner: "Lisa M.",
      result: "15 Stunden/Woche gespart",
      quote: "ReplAInow hat unseren Support revolutioniert. Die AI versteht unsere Produkte besser als manche Mitarbeiter!",
      image: testimonialLisa
    },
    {
      company: "TechGadgets", 
      owner: "Marco K.",
      result: "+37% Kundenzufriedenheit",
      quote: "Kunden lieben die instant Antworten. Conversion ist durch die Decke gegangen!",
      image: testimonialMarco
    },
    {
      company: "FashionHub",
      owner: "Sarah T.", 
      result: "12x ROI in 3 Monaten",
      quote: "Von Intercom zu ReplAInow - best Entscheidung ever! Kosten runter, Performance hoch.",
      image: testimonialSarah
    },
    {
      company: "ElectroMax",
      owner: "Thomas R.",
      result: "85% weniger Support-Tickets",
      quote: "Endlich keine 24/7 Support-Schichten mehr! Die AI beantwortet 90% der Fragen automatisch. Game Changer für unser Shopify-Store!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      company: "HomeDecor Plus",
      owner: "Anna L.",
      result: "+42% Conversion Rate",
      quote: "Unsere Kunden get sofort Antworten zu Versand, Rücksendungen und Produktdetails. Shopify-Integration war super einfach!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      company: "SportGear Pro",
      owner: "Mike S.",
      result: "€50k+ zusätzlicher Umsatz",
      quote: "Die AI kennt jeden Artikel in unserem Shopify-Store. Kunden kaufen mehr, weil sie perfekt beraten werden. Unser Support-Team kann sich auf wichtige Anfragen konzentrieren.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
          <img 
            src="/images/shopify-logo-black.svg" 
            alt="Shopify Plus Partner" 
            className="h-8 grayscale hover:grayscale-0 transition-all" 
          />
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
            </div>
            <span className="font-bold text-slate-700">4.9/5</span>
          </div>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold border border-green-200">
            GDPR Compliant
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold border border-blue-200">
            {STORE_COUNT} Stores
          </span>
        </div>
        
        <h2 className="text-4xl font-black text-center mb-16 tracking-tight">
          Das sagen <span className="text-blue-600">echte Händler</span>
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 interactive-card border border-slate-200 shadow-lg">
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
          <h3 className="text-2xl font-bold mb-8">Bewiesene Resultate für Shopify-Händler</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">{STORE_COUNT}</div>
              <div className="text-white/90">Aktive Shopify-Stores</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">187%</div>
              <div className="text-white/90">Conversion Steigerung</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">€2.1M</div>
              <div className="text-white/90">Zusätzlicher Umsatz</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">90%</div>
              <div className="text-white/90">Weniger Support-Tickets</div>
            </div>
          </div>
          
          {/* Shopify-specific benefits */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">🚀 Shopify-Integration</h4>
              <p className="text-white/90 text-sm">1-Klick Installation aus dem Shopify App Store</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">📊 Echtzeit-Daten</h4>
              <p className="text-white/90 text-sm">Automatische Synchronisation mit Produkten, Bestellungen & Kunden</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">💬 24/7 Support</h4>
              <p className="text-white/90 text-sm">Kunden get sofort Antworten zu Versand, Rücksendungen & Produkten</p>
            </div>
          </div>
        </div>
        
        {/* Shopify-specific CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Bereit für deinen Shopify-Store?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Schließe dich über {STORE_COUNT} zufriedenen Shopify-Händlern an und automatisiere deinen Customer Support in nur 5 Minuten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.shopify.com/replainow/install" 
                className="bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg"
              >
                🚀 Now im Shopify App Store Install
              </a>
              <a 
                href="#live-demo" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all"
              >
                📺 Live-Demo Watch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSocialProof;