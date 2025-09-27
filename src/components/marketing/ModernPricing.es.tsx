import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const baseFeatures = [
  "Instalacin con 1 Clic",
  "Datos Ilimitados de Tienda (Productos, Pginas, Polticas etc.)",
  "Email IA y Chat en Vivo IA",
  "Branding Personalizable",
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/ mes",
    quota: "Hasta 300 respuestas IA / mes",
    trial: "14 das de prueba gratuita",
    features: [
      ...baseFeatures,
      "Envo de email va direccin ReplAInow",
    ],
    highlight: false,
    description: "Perfecto para probar"
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ mes",
    quota: "Hasta 1500 respuestas IA / mes",
    trial: "14 das de prueba gratuita",
    features: [
      ...baseFeatures,
      "Envo de email con tu dominio",
    ],
    highlight: true,
    badge: "Plan Ms Popular",
    description: "Para tiendas en crecimiento"
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ mes",
    quota: "Hasta 3000 respuestas IA / mes",
    trial: "14 das de prueba gratuita",
    features: [
      ...baseFeatures,
      "Envo de email con tu dominio",
    ],
    highlight: false,
    description: "Para tiendas establecidas"
  },
  {
    name: "Scale",
    price: "$199",
    period: "/ mes",
    quota: "Respuestas IA ilimitadas",
    trial: "14 das de prueba gratuita",
    features: [
      ...baseFeatures,
      "Envo de email con tu dominio",
    ],
    highlight: false,
    description: "Para cadenas de tiendas"
  }
];

const ModernPricingEs = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 tracking-tight px-4">
          Ms poder de soporte por <span className="text-brand-success">menos dinero</span>
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-2 text-lg">
          Un agente de soporte cuesta en promedio 2,000 por mes.
        </p>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
          ReplAInow comienza en <strong className="text-gradient-primary">$19/mes</strong>  y trabaja 24/7, sin descansos.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {plans.map((plan, i) => {
            const Card = (
              <div className="glass-card rounded-3xl p-6 sm:p-8 h-full flex flex-col interactive-card border border-white/40 shadow-brand hover-lift">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-800">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1 sm:gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-primary">{plan.price}</span>
                    <span className="text-slate-600 font-medium text-sm sm:text-base">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{plan.trial}</p>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-brand-success text-base sm:text-lg mt-0.5 flex-shrink-0"></span>
                    <span className="text-slate-700 font-bold text-xs sm:text-sm leading-relaxed">{plan.quota}</span>
                  </li>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-success text-base sm:text-lg mt-0.5 flex-shrink-0"></span>
                      <span className="text-slate-700 font-medium leading-relaxed text-xs sm:text-sm">{feature}</span>
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
                      Probar Gratis
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <img
                      src="/images/shopify-logo-black.svg"
                      alt="Logo de Shopify"
                      className="h-3 sm:h-4 w-auto opacity-80"
                      loading="lazy"
                    />
                    <span>En Shopify App Store</span>
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
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-success/10 to-brand-success/5 rounded-3xl p-8 border border-brand-success/20 shadow-float">
            <h3 className="text-3xl font-black text-brand-success mb-4 text-center">
               Ahorro masivo vs. facturacin por ticket
            </h3>
            <p className="text-center text-brand-success mb-8 text-lg font-semibold">
              Mientras los competidores cobran <span className="text-destructive font-black">por ticket</span>, nuestro plan Scale es <span className="text-brand-success font-black">COMPLETAMENTE ILIMITADO</span>!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-destructive/20">
                <div className="text-destructive font-bold text-lg mb-2"> Gorgias</div>
                <div className="text-destructive font-semibold mb-1">50+/mes</div>
                <div className="text-xs text-destructive/70 mb-3">+ 2-5 por ticket</div>
                <div className="text-brand-success font-black text-xl">372+/ao ahorrados</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-destructive/20">
                <div className="text-destructive font-bold text-lg mb-2"> Intercom</div>
                <div className="text-destructive font-semibold mb-1">74+/mes</div>
                <div className="text-xs text-destructive/70 mb-3">+ 1-3 por ticket</div>
                <div className="text-brand-success font-black text-xl">660+/ao ahorrados</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-destructive/20">
                <div className="text-destructive font-bold text-lg mb-2"> Zendesk</div>
                <div className="text-destructive font-semibold mb-1">115+/mes</div>
                <div className="text-xs text-destructive/70 mb-3">+ 0.50-2 por ticket</div>
                <div className="text-brand-success font-black text-xl">1.152+/ao ahorrados</div>
              </div>
            </div>

            <div className="bg-gradient-primary text-white rounded-2xl p-6 text-center">
              <h4 className="text-2xl font-black mb-3"> Plan ReplAInow Scale: 199/mes</h4>
              <p className="text-lg font-semibold mb-2"> Respuestas IA ILIMITADAS</p>
              <p className="text-sm opacity-90">Sin costos ocultos  Sin tarifas por ticket  Sin lmites</p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-brand-success font-bold text-lg mb-2">
                Con 1,000 tickets/mes pagas a Gorgias ms de 3,000 extra!
              </p>
              <p className="text-brand-success font-semibold">
                Con ReplAInow: 0 extra  ya sean 100 o 10,000 tickets! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernPricingEs;