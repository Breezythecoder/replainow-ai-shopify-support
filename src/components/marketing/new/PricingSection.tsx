import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "19",
      description: "Perfekt für kleine Shops",
      features: [
        "100 AI-Antworten/Monat",
        "Live-Chat Widget",
        "E-Mail Support",
        "1 Agent-Seat",
        "Basis-Analytics"
      ],
      cta: "Jetzt starten",
      highlighted: false
    },
    {
      name: "Growth",
      price: "49",
      description: "Ideal für wachsende Shops",
      badge: "BELIEBT",
      features: [
        "Unbegrenzte AI-Antworten",
        "Live-Chat + E-Mail",
        "3 Agent-Seats",
        "Proaktive Chat-Trigger",
        "Erweiterte Analytics",
        "Prioritäts-Support"
      ],
      cta: "Kostenlos testen",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "149",
      description: "Für etablierte Händler",
      features: [
        "Alles aus Growth",
        "Unbegrenzte Agent-Seats",
        "Dedizierter Account Manager",
        "Custom AI-Training",
        "99.9% SLA Garantie",
        "Prioritärer Support"
      ],
      cta: "Kontakt aufnehmen",
      highlighted: false
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Einfache <span className="font-semibold">Preisgestaltung</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wählen Sie den Plan, der zu Ihrem Business passt. Jederzeit kündbar.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`
                relative rounded-2xl p-8 border
                ${plan.highlighted 
                  ? 'bg-gradient-to-br from-purple-500 to-violet-600 text-white border-purple-400 shadow-2xl shadow-purple-500/30 md:-mt-4' 
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300'
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              
              {/* Description */}
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-light ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    €{plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                    /Monat
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-purple-600'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/95' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`
                w-full py-4 rounded-xl font-bold text-base transition-all
                ${plan.highlighted 
                  ? 'bg-white text-purple-600 hover:bg-gray-50' 
                  : 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-lg hover:shadow-xl'
                }
              `}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm">
            Alle Pläne inkludieren 14-Tage-Test · Keine Kreditkarte erforderlich · Jederzeit kündbar
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
