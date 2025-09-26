import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const baseFeatures = [
  "1-Klick-Installation",
  "Unlimitierte Shopdaten (Produkte, Seiten, Richtlinien etc.)",
  "AI Mail & AI Live Chat",
  "Personalisierbares Branding",
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/ Monat",
    quota: "Bis zu 300 AI Antworten / Monat",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      "E-Mail Versand über ReplAInow Adresse",
    ],
    highlight: false,
    description: "Perfekt zum Testen"
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ Monat",
    quota: "Bis zu 1500 AI Antworten / Monat",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      "E-Mail Versand mit deiner Domain",
    ],
    highlight: true,
    badge: "Beliebtester Plan",
    description: "Für wachsende Stores"
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ Monat",
    quota: "Bis zu 3000 AI Antworten / Monat",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      "E-Mail Versand mit deiner Domain",
    ],
    highlight: false,
    description: "Für etablierte Stores"
  },
  {
    name: "Scale",
    price: "$199",
    period: "/ Monat",
    quota: "Unlimitierte AI Antworten",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      "E-Mail Versand mit deiner Domain",
    ],
    highlight: false,
    description: "Für Store-Ketten"
  }
];

const ModernPricing = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-4 tracking-tight">
          Mehr Support-Power für <span className="text-green-500">weniger Geld</span>
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-2 text-lg">
          Ein Support-Agent kostet im Schnitt 2.000 € pro Monat.
        </p>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
          ReplAInow startet bei <strong className="text-gradient-primary">19 $/Monat</strong> – und arbeitet 24/7, ohne Pause.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {plans.map((plan, i) => {
            const Card = (
              <div className="glass-card rounded-3xl p-8 h-full flex flex-col interactive-card border border-white/40">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-black text-gradient-primary">{plan.price}</span>
                    <span className="text-slate-600 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{plan.trial}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-0.5">✅</span>
                    <span className="text-slate-700 font-bold">{plan.quota}</span>
                  </li>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-green-500 text-lg mt-0.5">✅</span>
                      <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <Button 
                    asChild 
                    variant={plan.highlight ? "cta" : "glass"} 
                    size="lg" 
                    className="w-full"
                  >
                    <a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(plan.name)}&utm_content=pricing`}>
                      Kostenlos testen
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <img
                      src="/public/images/shopify-logo-black.svg"
                      alt="Shopify Logo"
                      className="h-4 w-auto opacity-80"
                      loading="lazy"
                    />
                    <span>Im Shopify App Store</span>
                  </div>
                </div>
              </div>
            );

            return plan.highlight ? (
              <div key={plan.name} className="relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-black shadow-lg z-10">
                  {plan.badge}
                </div>
                <div className="relative rounded-3xl p-1 bg-gradient-primary shadow-hero">
                  {Card}
                </div>
              </div>
            ) : (
              <div key={plan.name} className="relative">
                {Card}
              </div>
            );
          })}
        </div>
        
        {/* Savings Calculator */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 shadow-float">
            <h3 className="text-3xl font-black text-green-700 mb-8 text-center">
              💰 Deine jährliche Ersparnis mit ReplAInow
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-red-500 font-bold text-lg mb-2">vs. Gorgias</div>
                <div className="text-red-500 font-semibold mb-2">€50+/Monat</div>
                <div className="text-green-600 font-black text-xl">€372/Jahr gespart</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-red-500 font-bold text-lg mb-2">vs. Intercom</div>
                <div className="text-red-500 font-semibold mb-2">€74+/Monat</div>
                <div className="text-green-600 font-black text-xl">€660/Jahr gespart</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-red-500 font-bold text-lg mb-2">vs. Zendesk</div>
                <div className="text-red-500 font-semibold mb-2">€115+/Monat</div>
                <div className="text-green-600 font-black text-xl">€1.152/Jahr gespart</div>
              </div>
            </div>
            <p className="text-center text-green-700 font-bold mt-6">
              Bei überlegener AI-Performance und besseren Resultaten!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernPricing;