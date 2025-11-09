import { motion } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";

const PricingSection = () => {
  const plans = [
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            14 Tage kostenlos · Keine Kreditkarte · Shopify Billing
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Wähle <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">deinen Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Alle Funktionen in jedem Plan inklusive. Du zahlst nur für AI-Antworten.
          </p>
        </div>

        {/* Pricing Cards - 4 Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pt-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className={`
                relative rounded-2xl border overflow-hidden h-full
                ${plan.highlighted 
                  ? 'bg-gradient-to-br from-purple-600 to-violet-600 text-white border-purple-400 shadow-2xl shadow-purple-500/30 lg:-mt-4 lg:scale-105' 
                  : plan.premium
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white border-gray-700 shadow-xl'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300'
                }
              `}>
                {/* Badge - ON the top border line */}
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 whitespace-nowrap">
                    <div className={`px-4 py-1.5 text-xs font-bold rounded-full shadow-lg flex items-center gap-1 ${
                      plan.premium 
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900'
                        : 'bg-amber-400 text-amber-900'
                    }`}>
                      {plan.premium ? <Sparkles className="w-3 h-3" /> : <Zap className="w-3 h-3" />}
                      {plan.badge}
                    </div>
                  </div>
                )}
                <div className="p-6">
                {/* Plan Name */}
                <h3 className={`text-xl font-bold mb-2 ${
                  plan.highlighted || plan.premium ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className={`text-xs mb-4 leading-relaxed ${
                  plan.highlighted ? 'text-white/90' : plan.premium ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${
                      plan.highlighted || plan.premium ? 'text-white' : 'text-gray-900'
                    }`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white/70' : plan.premium ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      /Monat nach Trial
                    </span>
                  </div>
                </div>

                {/* AI Answers Info */}
                <div className={`mb-4 pb-4 border-b ${
                  plan.highlighted ? 'border-white/20' : plan.premium ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className={`text-sm font-semibold mb-1 ${
                    plan.highlighted || plan.premium ? 'text-white' : 'text-purple-600'
                  }`}>
                    {plan.aiAnswers}
                  </div>
                  <div className={`text-xs mb-1 ${
                    plan.highlighted ? 'text-white/80' : plan.premium ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {plan.ticketRange}
                  </div>
                  <div className={`text-xs ${
                    plan.highlighted ? 'text-white/70' : plan.premium ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {plan.extraCost}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`
                  w-full py-3 rounded-xl font-bold text-sm transition-all mb-4
                  ${plan.highlighted 
                    ? 'bg-white text-purple-600 hover:bg-gray-50 shadow-lg' 
                    : plan.premium
                      ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-lg hover:shadow-xl'
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
                        plan.highlighted || plan.premium ? 'text-white' : 'text-purple-600'
                      }`} />
                      <span className={`leading-tight ${
                        plan.highlighted ? 'text-white/90' : plan.premium ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.features.length > 8 && (
                    <li className={`text-xs italic pl-5 ${
                      plan.highlighted ? 'text-white/70' : plan.premium ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Und viele weitere Features...
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
            💜 Alle Pläne mit 14-Tage-Test · Keine Kreditkarte erforderlich · Über Shopify Billing · Jederzeit kündbar
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
