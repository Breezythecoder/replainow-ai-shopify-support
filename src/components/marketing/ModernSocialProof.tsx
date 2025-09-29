import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import { Star } from "lucide-react";
import { STORE_COUNT } from "@/config/siteStats";
import { t } from "@/i18n";
import { safeArray } from "@/utils/safeT";
import { z } from "zod";

// Schema for testimonials
const TestimonialSchema = z.object({
  company: z.string(),
  owner: z.string(),
  result: z.string(),
  quote: z.string()
});

const TestimonialsArraySchema = z.array(TestimonialSchema);

const ModernSocialProof = () => {
  // Get testimonials from i18n
  const testimonialData = safeArray(TestimonialsArraySchema, "ui.socialProof.testimonials");
  
  // Map testimonials with images
  const testimonials = testimonialData.map((testimonial, index) => ({
    ...testimonial,
    image: [testimonialLisa, testimonialMarco, testimonialSarah, 
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"][index] || testimonialLisa
  }));

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
          <img 
            src="/images/shopify-logo-black.svg" 
            alt={t("ui.socialProof.trustBadges.shopifyPartner")}
            className="h-8 grayscale hover:grayscale-0 transition-all" 
          />
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-slate-600">{t("ui.socialProof.trustBadges.rating")}</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-slate-600">{t("ui.socialProof.trustBadges.merchants")}</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-slate-600">{t("ui.socialProof.trustBadges.gdprCompliant")}</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient-x">
              {t("ui.socialProof.title")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            {t("ui.socialProof.subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-blue-200/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Header with avatar and company */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.owner}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200" 
                  />
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.owner}</h4>
                    <p className="text-sm text-slate-600">{testimonial.company}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Result badge */}
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white/90 backdrop-blur-lg border border-blue-200/50 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                280+
              </div>
              <div className="text-sm text-slate-600 font-medium">Aktive Stores</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-600 mb-2">
                187%
              </div>
              <div className="text-sm text-slate-600 font-medium">Conversion Boost</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                2.1M
              </div>
              <div className="text-sm text-slate-600 font-medium">Umsatz generiert</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                90%
              </div>
              <div className="text-sm text-slate-600 font-medium">Weniger Tickets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSocialProof;