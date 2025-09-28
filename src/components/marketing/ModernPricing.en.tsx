import { Button } from "@/components/ui/button";
import { t } from "@/i18n";
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
    price: "€19",
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
    price: "€49",
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
    price: "€99",
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
    price: "€199",
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
    <section id="pricing" aria-labelledby="pricing-heading" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* AI-Powered background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* AI Badge */}
        <div className="inline-block mb-6">
          <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <span className="relative z-10">💰 AI PRICING</span>
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 tracking-tight px-4">
          <span className="text-white">Mehr Support-Power für</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">weniger Geld</span>
        </h2>
        <p className="text-center text-blue-100 max-w-3xl mx-auto mb-2 text-lg">
          Ein Support-Agent kostet im Schnitt €2.000 pro Monat.
        </p>
        <p className="text-center text-blue-100 max-w-3xl mx-auto mb-16 text-lg">
          ReplAInow startet bei <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">€19/Monat</strong> und arbeitet 24/7, ohne Pause.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {plans.map((plan, i) => {
            const Card = (
              <div className={`bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 h-full flex flex-col border ${plan.highlight ? 'border-blue-400/60 shadow-blue-500/25 bg-slate-800/70' : 'border-blue-500/30 shadow-2xl'} relative overflow-hidden hover:border-blue-400/50 transition-all duration-300`}>
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-blue-100 mb-3 sm:mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1 sm:gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{plan.price}</span>
                    <span className="text-blue-100 font-medium text-sm sm:text-base">{plan.period}</span>
                  </div>
                  <p className="text-xs text-blue-300 font-medium">{plan.trial}</p>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-brand-success text-base sm:text-lg mt-0.5 flex-shrink-0"></span>
                    <span className="text-blue-100 font-bold text-xs sm:text-sm leading-relaxed">{plan.quota}</span>
                  </li>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-success text-base sm:text-lg mt-0.5 flex-shrink-0"></span>
                      <span className="text-blue-100 font-medium leading-relaxed text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <Button 
                    asChild 
                    variant={plan.highlight ? "cta" : "glass"} 
                    size="lg" 
                    className="w-full text-sm sm:text-base"
                  >
                    <a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(plan.name)}&utm_content=pricing`}>
                      Kostenlos testen
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <img
                      src="/images/shopify-logo-black.svg"
                      alt="Shopify Logo"
                      className="h-3 sm:h-4 w-auto opacity-80"
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
        
        {/* Savings Calculator - Modernized */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                KOSTENVERGLEICH
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                Massive Kosteneinsparung
              </h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Während Konkurrenten <span className="text-red-400 font-bold">pro Ticket</span> abrechnen, 
                ist bei uns <span className="text-green-400 font-bold">ALLES UNLIMITIERT</span>
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {/* Competitors */}
              <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all">
                  <div className="text-red-400 font-bold text-lg mb-3">Gorgias</div>
                  <div className="text-white font-semibold mb-2">€50+/Monat</div>
                  <div className="text-sm text-red-300 mb-4">+ €2-5 pro Ticket</div>
                  <div className="text-green-400 font-bold text-lg">€372+ gespart/Jahr</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all">
                  <div className="text-red-400 font-bold text-lg mb-3">Intercom</div>
                  <div className="text-white font-semibold mb-2">€74+/Monat</div>
                  <div className="text-sm text-red-300 mb-4">+ €1-3 pro Ticket</div>
                  <div className="text-green-400 font-bold text-lg">€660+ gespart/Jahr</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all">
                  <div className="text-red-400 font-bold text-lg mb-3">Zendesk</div>
                  <div className="text-white font-semibold mb-2">€115+/Monat</div>
                  <div className="text-sm text-red-300 mb-4">+ €0.50-2 pro Ticket</div>
                  <div className="text-green-400 font-bold text-lg">€1.152+ gespart/Jahr</div>
                </div>
              </div>
              
              {/* ReplAInow */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 border border-blue-500/30 shadow-lg">
                <div className="text-white font-bold text-lg mb-3">ReplAInow Scale</div>
                <div className="text-white font-bold text-2xl mb-2">€199/Monat</div>
                <div className="text-blue-100 text-sm mb-4">Alles inklusive</div>
                <div className="space-y-2">
                  <div className="text-green-300 text-sm font-semibold">✓ UNLIMITIERTE AI-Antworten</div>
                  <div className="text-green-300 text-sm font-semibold">✓ Keine Per-Ticket-Gebühren</div>
                  <div className="text-green-300 text-sm font-semibold">✓ Keine versteckten Kosten</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="text-center">
                <p className="text-green-400 font-bold text-lg mb-2">
                  Bei 1.000 Tickets/Monat: Gorgias kostet €3.000+ extra!
                </p>
                <p className="text-white font-semibold">
                  Mit ReplAInow: 0 extra - egal ob 100 oder 10.000 Tickets!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernPricing;