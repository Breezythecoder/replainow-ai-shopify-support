import { motion } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n";

const PricingSection = () => {
  const { t, getTranslation } = useTranslation();
  const plans = getTranslation('marketing.pricing.plans') || [
    {
      name: "Launch",
      price: "19",
      description: "Für ambitionierte Shops, die AI-Support testen möchten",
      aiAnswers: "200 AI-Antworten inklusive",
      ticketRange: "Ideal für 10–80 Tickets pro Monat",
      extraCost: "$0.05 pro zusätzliche Antwort",
      features: [
        "Live Chat Widget (KI + Mensch)",
        "Mail Dashboard mit KI E-Mail-Antworten",
        "Automatischer Shopify Import (Produkte, Bestellungen, Richtlinien)",
        "Mehrsprachiger Support (100+ Sprachen)",
        "Unbegrenzt Teammitglieder (keine Kosten pro Nutzer)",
        "Bestellverfolgung & Verwaltung",
        "KI Rabattcodes (unbegrenzt)",
        "Proaktive Chat-Auslöser (unbegrenzt)",
        "Nachrichten-Feed für Ankündigungen",
        "Produktempfehlungen",
        "Individuelles Branding & Logo",
        "WhatsApp Business KI (Demnächst verfügbar)",
        "Und vieles mehr..."
      ],
      cta: "14 Tage kostenlos testen",
      highlighted: false
    },
    {
      name: "Growth",
      price: "49",
      description: "Beliebteste Wahl für wachsende Marken",
      badge: "BELIEBTESTE WAHL",
      aiAnswers: "2.500 AI-Antworten inklusive",
      ticketRange: "Perfekt für 100–600 Tickets pro Monat",
      extraCost: "$0.03 pro zusätzliche Antwort",
      features: [
        "Live Chat Widget (KI + Mensch)",
        "Mail Dashboard mit KI E-Mail-Antworten",
        "Automatischer Shopify Import (Produkte, Bestellungen, Richtlinien)",
        "Mehrsprachiger Support (100+ Sprachen)",
        "Unbegrenzt Teammitglieder (keine Kosten pro Nutzer)",
        "Bestellverfolgung & Verwaltung",
        "KI Rabattcodes (unbegrenzt)",
        "Proaktive Chat-Auslöser (unbegrenzt)",
        "Nachrichten-Feed für Ankündigungen",
        "Produktempfehlungen",
        "Individuelles Branding & Logo",
        "WhatsApp Business KI (Demnächst verfügbar)",
        "Und vieles mehr..."
      ],
      cta: "14 Tage kostenlos testen",
      highlighted: true
    },
    {
      name: "Scale",
      price: "99",
      description: "Operational Excellence für D2C Leader",
      aiAnswers: "5.000 AI-Antworten inklusive",
      ticketRange: "Optimiert für 600–1.500 Tickets pro Monat",
      extraCost: "$0.03 pro zusätzliche Antwort",
      features: [
        "Live Chat Widget (KI + Mensch)",
        "Mail Dashboard mit KI E-Mail-Antworten",
        "Automatischer Shopify Import (Produkte, Bestellungen, Richtlinien)",
        "Mehrsprachiger Support (100+ Sprachen)",
        "Unbegrenzt Teammitglieder (keine Kosten pro Nutzer)",
        "Bestellverfolgung & Verwaltung",
        "KI Rabattcodes (unbegrenzt)",
        "Proaktive Chat-Auslöser (unbegrenzt)",
        "Nachrichten-Feed für Ankündigungen",
        "Produktempfehlungen",
        "Individuelles Branding & Logo",
        "WhatsApp Business KI (Demnächst verfügbar)",
        "Und vieles mehr..."
      ],
      cta: "14 Tage kostenlos testen",
      highlighted: false
    },
    {
      name: "Ultimate",
      price: "399",
      description: "Enterprise-Support mit SLA & Compliance",
      badge: "ENTERPRISE",
      aiAnswers: "40.000 AI-Antworten inklusive",
      ticketRange: "Für 1.500+ Tickets pro Monat & Enterprise-Teams",
      extraCost: "$0.02 pro zusätzliche Antwort",
      features: [
        "Live Chat Widget (KI + Mensch)",
        "Mail Dashboard mit KI E-Mail-Antworten",
        "Automatischer Shopify Import (Produkte, Bestellungen, Richtlinien)",
        "Mehrsprachiger Support (100+ Sprachen)",
        "Unbegrenzt Teammitglieder (keine Kosten pro Nutzer)",
        "Bestellverfolgung & Verwaltung",
        "KI Rabattcodes (unbegrenzt)",
        "Proaktive Chat-Auslöser (unbegrenzt)",
        "Nachrichten-Feed für Ankündigungen",
        "Produktempfehlungen",
        "Individuelles Branding & Logo",
        "WhatsApp Business KI (Demnächst verfügbar)",
        "Und vieles mehr..."
      ],
      cta: "14 Tage kostenlos testen",
      highlighted: false,
      premium: true
    }
  ];

  return (
    <div id="pricing" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-12 md:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            {t('marketing.pricing.badge')}
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            {t('marketing.pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            {t('marketing.pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards - 4 Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pt-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative group overflow-visible ${plan.highlighted ? 'md:scale-110 md:-translate-y-4' : ''}`}
            >
              {/* Glow effect stronger on highlighted */}
              <div className={`absolute -inset-1 rounded-3xl blur-2xl transition-opacity duration-500 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-purple-500/40 to-violet-500/40 opacity-100'
                  : plan.premium
                    ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100'
              }`} />

              {/* Floating badge above the card */}
              {plan.badge && (
                <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
                  <motion.div
                    className={`px-6 py-2 rounded-full shadow-elevation-4 border-2 flex items-center gap-2 ${
                      plan.premium
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-400 border-amber-500'
                        : 'bg-white border-purple-300'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.premium ? <Sparkles className="w-4 h-4 text-amber-900" /> : <Zap className="w-4 h-4 text-purple-700" />}
                    <span
                      className={`text-xs font-black tracking-wide ${
                        plan.premium ? 'text-amber-900' : 'text-purple-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </motion.div>
                </div>
              )}
              
              {/* Solid Card with strong borders */}
              <div className={`
                relative rounded-3xl border-2 h-full overflow-hidden
                ${plan.highlighted 
                  ? 'bg-gradient-to-br from-purple-600 to-violet-600 text-white border-purple-400 shadow-elevation-5' 
                  : plan.premium
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white shadow-elevation-5'
                    : 'bg-white text-gray-900 border-gray-200 shadow-card-strong hover:shadow-white-card-hover hover:border-purple-400'
                }
                transition-all duration-300
              `}>
                <div className="p-6">
                {/* Plan Name */}
                <h3 className={`text-xl font-bold mb-2 ${
                  plan.highlighted || plan.premium ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className={`text-xs mb-4 leading-relaxed ${
                  plan.highlighted ? 'text-white' : plan.premium ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                {/* Price with hover animation */}
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-light ${
                      plan.highlighted || plan.premium 
                        ? 'text-white' 
                        : 'text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-purple-600 to-gray-900'
                    }`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white/95' : plan.premium ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      /Monat
                    </span>
                  </div>
                </motion.div>

                {/* AI Answers Info */}
                <div className={`mb-4 pb-4 border-b ${
                  plan.highlighted ? 'border-white/20' : plan.premium ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className={`text-sm font-semibold mb-1 ${
                    plan.highlighted || plan.premium ? 'text-white' : 'text-purple-700'
                  }`}>
                    {plan.aiAnswers}
                  </div>
                  <div className={`text-xs mb-1 ${
                    plan.highlighted ? 'text-white/95' : plan.premium ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {plan.ticketRange}
                  </div>
                  <div className={`text-xs ${
                    plan.highlighted ? 'text-white/95' : plan.premium ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {plan.extraCost}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`
                  w-full py-3 rounded-xl font-bold text-sm transition-all mb-4
                  ${plan.highlighted 
                    ? 'bg-white text-purple-700 hover:bg-gray-50 shadow-white-button hover:shadow-white-button-hover' 
                    : plan.premium
                      ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 shadow-elevation-3'
                      : 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-elevation-3 hover:shadow-elevation-4'
                  }
                `}>
                  {plan.cta}
                </button>

                {/* Features Header */}
                <div className={`text-xs font-bold mb-3 ${
                  plan.highlighted || plan.premium ? 'text-white' : 'text-gray-900'
                }`}>
                  Alles inklusive
                </div>

                {/* Features List - Condensed */}
                <ul className="space-y-2 text-xs">
                  {plan.features.slice(0, 8).map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted || plan.premium ? 'text-white' : 'text-purple-700'
                      }`} />
                      <span className={`leading-tight ${
                        plan.highlighted ? 'text-white' : plan.premium ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.features.length > 8 && (
                    <li className={`text-xs italic pl-5 ${
                      plan.highlighted ? 'text-white/95' : plan.premium ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {t('marketing.pricing.moreFeatures')}
                    </li>
                  )}
                </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-600 text-sm">
            {t('marketing.pricing.bottomNote')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
