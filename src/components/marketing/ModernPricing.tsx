import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Kostenlos",
      period: "14 Tage",
      features: ["100 AI-Antworten", "3 Sprachen", "Email Support", "Basis Analytics"],
      cta: "Kostenlos starten",
      highlight: false,
      description: "Perfekt zum Testen"
    },
    {
      name: "Professional", 
      price: "€19",
      period: "/Monat",
      features: [
        "Unbegrenzte AI-Antworten", 
        "32+ Sprachen", 
        "Echtzeit Shopify-Sync", 
        "Intelligente Produktempfehlungen", 
        "Analytics Dashboard", 
        "Priority Support",
        "Custom Branding"
      ],
      cta: "Jetzt upgraden", 
      highlight: true,
      badge: "MOST POPULAR",
      description: "Für erfolgreiche Stores"
    },
    {
      name: "Enterprise",
      price: "€49", 
      period: "/Monat",
      features: [
        "Alles aus Professional", 
        "Custom AI Training", 
        "White-Label Option", 
        "API Access", 
        "Dedicated Success Manager",
        "Advanced Analytics",
        "Multi-Store Management"
      ],
      cta: "Enterprise wählen",
      highlight: false,
      description: "Für Store-Ketten & Agenturen"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-4 tracking-tight">
          Preise die <span className="text-green-500">Sinn machen</span>
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Überlegen UND günstiger - so geht modernes SaaS. Starte kostenlos und upgrade nur wenn du wächst.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlight 
                  ? 'glass-card border-2 border-indigo-300 shadow-hero scale-105 bg-gradient-to-br from-white to-indigo-50' 
                  : 'glass-card border border-slate-200 shadow-glass hover:shadow-float'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-black shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-800">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                <div className="text-5xl font-black text-gradient-primary mb-2">{plan.price}</div>
                <div className="text-slate-600 font-medium">{plan.period}</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-0.5">✅</span>
                    <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                variant={plan.highlight ? "cta" : "glass"} 
                size="lg" 
                className="w-full"
              >
                <a href={OAUTH_URL}>
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
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
              Bei überlegener AI-Performance und 3x besserer Conversion Rate!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernPricing;