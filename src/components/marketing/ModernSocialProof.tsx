import { motion } from "framer-motion";
import { Star, Shield, Award } from "lucide-react";
import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import { STORE_COUNT } from "@/config/siteStats";
import { t } from "@/i18n";

const ModernSocialProof = () => {
  const testimonials = [
    {
      quote: "ReplAInow hat unseren Support revolutioniert. Die AI versteht unsere Produkte besser als manche Mitarbeiter!",
      author: "Lisa M.",
      role: "Gründerin",
      company: "BeautyStore",
      metric: "15 Stunden/Woche gespart",
      image: testimonialLisa,
      rating: 5
    },
    {
      quote: "Innerhalb einer Woche hatten wir unseren ROI. Die Conversion-Rate ist um 23% gestiegen!",
      author: "Marco S.",
      role: "E-Commerce Manager",
      company: "SportGear",
      metric: "23% höhere Conversion",
      image: testimonialMarco,
      rating: 5
    },
    {
      quote: "Der beste Schritt für unser Wachstum. Kunden lieben die schnellen, präzisen Antworten.",
      author: "Sarah K.",
      role: "Shop-Inhaberin",
      company: "FashionHub",
      metric: "91% Kundenzufriedenheit",
      image: testimonialSarah,
      rating: 5
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            {t("ui.socialProof.title") || "Echte Händler. Echte Ergebnisse."}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über {STORE_COUNT} Shopify-Händler vertrauen auf ReplAInow
          </p>
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">auf Shopify</span>
          </div>

          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <Shield className="w-5 h-5 text-accent-green" />
            <span className="font-medium text-gray-700">DSGVO-konform</span>
          </div>

          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <Award className="w-5 h-5 text-primary-purple" />
            <span className="font-medium text-gray-700">Shopify Partner</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Metric Badge */}
              <div className="inline-block bg-accent-green/10 text-accent-green px-4 py-2 rounded-lg mb-6 font-semibold text-sm">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Cloud */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-8 font-medium">
            Vertraut von führenden Shopify-Händlern weltweit
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {/* Shopify Logo */}
            <img 
              src="/images/shopify-logo-black.svg" 
              alt="Shopify Partner"
              className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
            {/* Add more logos here as needed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernSocialProof;
