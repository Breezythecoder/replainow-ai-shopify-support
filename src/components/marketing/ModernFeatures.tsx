import { motion } from "framer-motion";
import { Brain, MessageSquare, Globe2, BarChart3, Zap, ShoppingCart } from "lucide-react";
import { t } from "@/i18n";

const ModernFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligente Produktempfehlungen",
      benefits: [
        "Versteht den Kontext",
        "Cross-Selling automatisch",
        "23% höherer Warenkorbwert"
      ],
      quote: "Wie dein bester Verkäufer - rund um die Uhr online",
      image: "/assets/193e41bc-af60-4d70-947d-659804d66b83.png",
      imageAlt: "ReplAInow AI zeigt intelligente Produktempfehlungen"
    },
    {
      icon: MessageSquare,
      title: "Sofortige Support-Lösung",
      benefits: [
        "91% Erstlösungsrate",
        "Bestellungen, Retouren, FAQ",
        "Integration in dein Helpdesk"
      ],
      quote: "70% weniger Support-Kosten",
      image: "/assets/193e41bc-af60-4d70-947d-659804d66b83.png",
      imageAlt: "Support-Chat zeigt Bestellverfolgung und automatische Antworten"
    },
    {
      icon: Globe2,
      title: "WhatsApp Integration",
      benefits: [
        "90% Öffnungsrate",
        "Warenkorb-Rückgewinnung",
        "Persönlicher Shopping-Assistent"
      ],
      quote: "Wo 3 Milliarden Menschen shoppen möchten",
      image: "/assets/193e41bc-af60-4d70-947d-659804d66b83.png",
      imageAlt: "WhatsApp Chat-Demo mit ReplAInow"
    },
    {
      icon: BarChart3,
      title: "Umsatz-Analytics",
      benefits: [
        "Echtzeit-Insights",
        "Conversion-Tracking",
        "KI-gestützte Optimierung"
      ],
      quote: "Datenbasierte Entscheidungen treffen",
      image: "/assets/193e41bc-af60-4d70-947d-659804d66b83.png",
      imageAlt: "Analytics Dashboard zeigt Conversion-Metriken"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Alles, was du brauchst
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leistungsstarke Features, die deinen Shop transformieren
          </p>
        </motion.div>
        
        {/* Features - Alternating Layout */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Text Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-primary-purple" />
              </div>
              
                  <h3 className="text-3xl lg:text-subsection font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
                  <ul className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-lg text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <blockquote className="border-l-4 border-primary-purple pl-6 py-2">
                    <p className="text-lg italic text-gray-600">"{feature.quote}"</p>
                  </blockquote>
              </div>

                {/* Image/Visual */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
                    
                    {/* Image */}
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
              </div>
            </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-primary-purple to-purple-700 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-light text-white mb-2">91%</div>
              <div className="text-purple-200">Erstlösungsrate</div>
              </div>
            <div>
              <div className="text-5xl font-light text-white mb-2">&lt;1s</div>
              <div className="text-purple-200">Antwortzeit</div>
              </div>
            <div>
              <div className="text-5xl font-light text-white mb-2">95+</div>
              <div className="text-purple-200">Sprachen</div>
              </div>
            <div>
              <div className="text-5xl font-light text-white mb-2">24/7</div>
              <div className="text-purple-200">Verfügbar</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernFeatures;
