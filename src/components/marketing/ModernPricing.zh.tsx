import { Button } from "@/components/ui/button";
const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";
const baseFeatures = ["","","AI  & AI ",""];
const plans = [
  { name: "Starter", price: "$19", period: "/ ", quota: " 300  AI ", trial: "14 ", features: [...baseFeatures, " ReplAInow "], highlight: false, description: "" },
  { name: "Growth", price: "$49", period: "/ ", quota: " 1500  AI ", trial: "14 ", features: [...baseFeatures, ""], highlight: true, badge: "", description: "" },
  { name: "Pro", price: "$99", period: "/ ", quota: " 3000  AI ", trial: "14 ", features: [...baseFeatures, ""], highlight: false, description: "" },
  { name: "Scale", price: "$199", period: "/ ", quota: "AI ", trial: "14 ", features: [...baseFeatures, ""], highlight: false, description: "" },
];
const ModernPricingZh = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 tracking-tight px-4"> <span className="text-brand-success"></span> </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-2 text-lg"> 2,000</p>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">ReplAInow  <strong className="text-gradient-primary">$19/</strong>   24/7 </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {plans.map((plan) => {
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
                  <li className="flex items-start gap-2 sm:gap-3"><span className="text-brand-success text-base sm:text-lg mt-0.5 flex-shrink-0"></span><span className="text-slate-700 font-bold text-xs sm:text-sm leading-relaxed">{plan.quota}</span></li>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3"><span className="text-brand-success text-base sm:text-lg mt-0.5 flex-shrink-0"></span><span className="text-slate-700 font-medium leading-relaxed text-xs sm:text-sm">{feature}</span></li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <Button asChild variant={plan.highlight ? 'cta' : 'glass'} size="lg" className="w-full text-sm sm:text-base"><a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(plan.name)}&utm_content=pricing`}></a></Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500"><img src="/images/shopify-logo-black.svg" alt="Shopify Logo" className="h-3 sm:h-4 w-auto opacity-80" loading="lazy" /><span> Shopify App Store</span></div>
                </div>
              </div>
            );
            return plan.highlight ? (
              <div key={plan.name} className="relative"><div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-black shadow-lg z-10">{plan.badge}</div><div className="relative rounded-3xl p-1 bg-gradient-primary shadow-hero">{Card}</div></div>
            ) : (
              <div key={plan.name} className="relative">{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ModernPricingZh;