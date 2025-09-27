import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const baseFeatures = [
  "1-Click Installation",
  "Unlimited Shop Data (Products, Pages, Policies etc.)",
  "AI Email & AI Live Chat",
  "Customizable Branding",
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/ month",
    quota: "Up to 300 AI responses / month",
    trial: "14 days free trial",
    features: [
      ...baseFeatures,
      "Email sending via ReplAInow address",
    ],
    highlight: false,
    description: "Perfect for testing"
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ month",
    quota: "Up to 1500 AI responses / month",
    trial: "14 days free trial",
    features: [
      ...baseFeatures,
      "Email sending with your domain",
    ],
    highlight: true,
    badge: "Most Popular Plan",
    description: "For growing stores"
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ month",
    quota: "Up to 3000 AI responses / month",
    trial: "14 days free trial",
    features: [
      ...baseFeatures,
      "Email sending with your domain",
    ],
    highlight: false,
    description: "For established stores"
  },
  {
    name: "Scale",
    price: "$199",
    period: "/ month",
    quota: "Unlimited AI responses",
    trial: "14 days free trial",
    features: [
      ...baseFeatures,
      "Email sending with your domain",
    ],
    highlight: false,
    description: "For store chains"
  }
];

const ModernPricingEn = () => {
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
          More support power for <span className="text-brand-success">less money</span>
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-2 text-lg">
          A support agent costs on average $2,000 per month.
        </p>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
          ReplAInow starts at <strong className="text-gradient-primary">$19/month</strong>  and works 24/7, without breaks.
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
                      Try Free
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <img
                      src="/images/shopify-logo-black.svg"
                      alt="Shopify Logo"
                      className="h-3 sm:h-4 w-auto opacity-80"
                      loading="lazy"
                    />
                    <span>In Shopify App Store</span>
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
               Massive cost savings vs. per-ticket billing
            </h3>
            <p className="text-center text-brand-success mb-8 text-lg font-semibold">
              While competitors charge <span className="text-destructive font-black">per ticket</span>, our Scale plan is <span className="text-brand-success font-black">COMPLETELY UNLIMITED</span>!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-destructive/20">
                <div className="text-destructive font-bold text-lg mb-2"> Gorgias</div>
                <div className="text-destructive font-semibold mb-1">$50+/month</div>
                <div className="text-xs text-destructive/70 mb-3">+ $2-5 per ticket</div>
                <div className="text-brand-success font-black text-xl">$372+/year saved</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-destructive/20">
                <div className="text-destructive font-bold text-lg mb-2"> Intercom</div>
                <div className="text-destructive font-semibold mb-1">$74+/month</div>
                <div className="text-xs text-destructive/70 mb-3">+ $1-3 per ticket</div>
                <div className="text-brand-success font-black text-xl">$660+/year saved</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-destructive/20">
                <div className="text-destructive font-bold text-lg mb-2"> Zendesk</div>
                <div className="text-destructive font-semibold mb-1">$115+/month</div>
                <div className="text-xs text-destructive/70 mb-3">+ $0.50-2 per ticket</div>
                <div className="text-brand-success font-black text-xl">$1,152+/year saved</div>
              </div>
            </div>

            <div className="bg-gradient-primary text-white rounded-2xl p-6 text-center">
              <h4 className="text-2xl font-black mb-3"> ReplAInow Scale Plan: $199/month</h4>
              <p className="text-lg font-semibold mb-2"> UNLIMITED AI responses</p>
              <p className="text-sm opacity-90">No hidden costs  No per-ticket fees  No limits</p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-brand-success font-bold text-lg mb-2">
                At 1,000 tickets/month you pay Gorgias over $3,000 extra!
              </p>
              <p className="text-brand-success font-semibold">
                With ReplAInow: $0 extra  whether 100 or 10,000 tickets! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernPricingEn;