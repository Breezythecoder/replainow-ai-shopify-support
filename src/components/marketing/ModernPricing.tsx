import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { t } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernPricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "€19",
      period: "/Monat",
      description: "Perfekt zum Testen",
      features: [
        "Bis zu 300 AI-Antworten/Monat",
        "Basis AI-Support",
        "E-Mail-Support",
        "95+ Sprachen",
        "Shopify Integration"
      ],
      cta: "Kostenlos testen",
      popular: false
    },
    {
      name: "Growth",
      price: "€49",
      period: "/Monat",
      description: "Für wachsende Shops",
      features: [
        "Bis zu 1.500 AI-Antworten/Monat",
        "Erweiterte AI",
        "Prioritäts-Support",
        "WhatsApp Integration",
        "Analytics Dashboard",
        "Custom Branding",
        "API Zugang"
      ],
      cta: "Kostenlos testen",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Unbegrenzt skalieren",
      features: [
        "Unbegrenzte AI-Antworten",
        "Custom AI Training",
        "Dedicated Customer Success Manager",
        "API Zugang",
        "White Label Option",
        "SLA Garantie",
        "Persönliches Onboarding"
      ],
      cta: "Vertrieb kontaktieren",
      popular: false
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            {t("ui.pricing.title") || "Einfache, transparente Preise"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Starte kostenlos. Keine Kreditkarte erforderlich. Jederzeit kündbar.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-primary-purple text-white shadow-2xl scale-105 border-4 border-primary-purple'
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-green text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Beliebteste Wahl
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className={`text-2xl font-bold mb-2 ${
                tier.popular ? 'text-white' : 'text-gray-900'
              }`}>
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-5xl font-light ${
                  tier.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.price}
                </span>
                <span className={`text-xl ${
                  tier.popular ? 'text-purple-100' : 'text-gray-600'
                }`}>
                  {tier.period}
                </span>
              </div>

              {/* Description */}
              <p className={`mb-6 ${
                tier.popular ? 'text-purple-100' : 'text-gray-600'
              }`}>
                {tier.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      tier.popular ? 'text-green-300' : 'text-accent-green'
                    }`} />
                    <span className={
                      tier.popular ? 'text-purple-50' : 'text-gray-700'
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={tier.popular || tier.name === "Starter" ? OAUTH_URL : "#contact"}
                className={`block w-full text-center px-6 py-4 font-semibold rounded-lg transition-all duration-200 ${
                  tier.popular
                    ? 'bg-white text-primary-purple hover:bg-gray-100 shadow-lg'
                    : 'bg-gradient-to-r from-accent-green to-emerald-600 text-white hover:shadow-xl hover:-translate-y-0.5'
                }`}
              >
                {tier.cta}
                {(tier.popular || tier.name === "Starter") && (
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                )}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust Elements */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 font-medium">
            ✓ 7 Tage kostenlose Testversion • ✓ Keine Kreditkarte erforderlich • ✓ Jederzeit kündbar
          </p>
          <p className="text-sm text-gray-500">
            Alle Pläne beinhalten: DSGVO-Konformität, SSL-Verschlüsselung, 99.9% Uptime
          </p>
        </motion.div>

        {/* Comparison Note */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-8 text-center border border-purple-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Spare bis zu 75% im Vergleich zu Gorgias & Zendesk
          </h3>
          <p className="text-gray-600 mb-4">
            Mit identischen Features und besserer AI-Technologie
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary-purple hover:text-purple-700 font-semibold"
          >
            Preisvergleich anfordern
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernPricing;
