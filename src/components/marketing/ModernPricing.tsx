import { Button } from "@/components/ui/button";
import { t } from "@/i18n";
import { safeArray, safeObject } from "@/utils/safeT";
import { z } from "zod";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const BaseFeaturesSchema = z.array(z.string().min(1));

const PlanSchema = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
  period: z.string().min(1),
  quota: z.string().min(1),
  trial: z.string().min(1),
  features: z.array(z.string().min(1)),
  highlight: z.boolean().optional(),
  badge: z.string().optional(),
  description: z.string().optional(),
  cta: z.string().optional()
});

const SavingsSchema = z.object({
  badge: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  competitors: z.array(
    z.object({
      name: z.string().min(1),
      price: z.string().min(1),
      surcharge: z.string().min(1),
      savings: z.string().min(1)
    })
  ),
  ownPlan: z.object({
    name: z.string().min(1),
    price: z.string().min(1),
    tagline: z.string().min(1),
    bullets: z.array(z.string().min(1))
  }),
  bottomCallout: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1)
  })
});

const ModernPricing = () => {
  const baseFeatures = safeArray(BaseFeaturesSchema, "ui.pricing.baseFeatures");
  const pricingPlans = safeArray(z.array(PlanSchema), "ui.pricing.plans");
  const savingsSection = safeObject(SavingsSchema, "ui.pricing.savings");

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
          <span className="text-white">{t("ui.pricing.headline.primary")}</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">{t("ui.pricing.headline.secondary")}</span>
        </h2>
        <p className="text-center text-blue-100 max-w-3xl mx-auto mb-2 text-lg">
          {t("ui.pricing.headline.tagline")}
        </p>
        <p className="text-center text-blue-100 max-w-3xl mx-auto mb-16 text-lg">
          {t("ui.pricing.headline.detail")}
        </p>

        {baseFeatures.length > 0 && (
          <div className="max-w-4xl mx-auto mb-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-100 text-sm sm:text-base">
              {baseFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {pricingPlans.map((plan) => {
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
                  {plan.features?.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3">
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
                      {plan.cta ?? t("ui.pricing.cta")}
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
                {savingsSection?.badge ?? ""}
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {savingsSection?.title ?? ""}
              </h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {savingsSection?.description ?? ""}
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {/* Competitors */}
              <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
                {savingsSection?.competitors?.map((competitor) => (
                  <div key={competitor.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all">
                    <div className="text-red-400 font-bold text-lg mb-3">{competitor.name}</div>
                    <div className="text-white font-semibold mb-2">{competitor.price}</div>
                    <div className="text-sm text-red-300 mb-4">{competitor.surcharge}</div>
                    <div className="text-green-400 font-bold text-lg">{competitor.savings}</div>
                  </div>
                ))}
              </div>
              
              {/* ReplAInow */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 border border-blue-500/30 shadow-lg">
                <div className="text-white font-bold text-lg mb-3">{savingsSection?.ownPlan?.name}</div>
                <div className="text-white font-bold text-2xl mb-2">{savingsSection?.ownPlan?.price}</div>
                <div className="text-blue-100 text-sm mb-4">{savingsSection?.ownPlan?.tagline}</div>
                <div className="space-y-2">
                  {savingsSection?.ownPlan?.bullets?.map((bullet) => (
                    <div key={bullet} className="text-green-300 text-sm font-semibold">{bullet}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="text-center">
                <p className="text-green-400 font-bold text-lg mb-2">
                  {savingsSection?.bottomCallout?.title}
                </p>
                <p className="text-white font-semibold">
                  {savingsSection?.bottomCallout?.subtitle}
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