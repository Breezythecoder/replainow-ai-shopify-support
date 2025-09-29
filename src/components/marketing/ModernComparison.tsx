import { t } from "@/i18n";
import { safeArray, safeObject } from "@/utils/safeT";
import { z } from "zod";
import { Check, X, Zap, Clock, Globe, DollarSign, Settings, TrendingUp, Star, AlertCircle } from "lucide-react";

const ComparisonSchema = z.object({
  titlePrimary: z.string().min(1),
  titleHighlight: z.string().min(1),
  subtitle: z.string().min(1),
  legend: z.object({
    aiComparison: z.string().min(1),
    hero: z.string().min(1),
    poweredBy: z.string().min(1),
    gorgias: z.string().min(1),
    intercom: z.string().min(1),
    zendesk: z.string().min(1)
  }),
  rows: z.array(
    z.object({
      label: z.string().min(1),
      replAInow: z.string().min(1),
      gorgias: z.string().min(1),
      intercom: z.string().min(1),
      zendesk: z.string().min(1)
    })
  )
});

const SavingsIntroSchema = z.object({
  badge: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1)
});

const SavingsCompetitorSchema = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
  bulletPoints: z.array(z.string().min(1)),
  summary: z.string().min(1)
});

const SavingsOwnPlanSchema = z.object({
  price: z.string().min(1),
  tagline: z.string().min(1),
  features: z.array(z.string().min(1))
});

const SavingsTotalsSchema = z.object({
  competitorTotal: z.string().min(1),
  competitorNote: z.string().min(1),
  ownBenefits: z.array(z.string().min(1)),
  calloutTitle: z.string().min(1),
  calloutSubtitle: z.string().min(1)
});

const ModernComparison = () => {
  const comparison = safeObject(ComparisonSchema, "ui.comparison.table");
  const savingsIntro = safeObject(SavingsIntroSchema, "ui.comparison.savings.intro");
  const savingsCompetitors = safeArray(z.array(SavingsCompetitorSchema), "ui.comparison.savings.competitors");
  const savingsOwnPlan = safeObject(SavingsOwnPlanSchema, "ui.comparison.savings.ownPlan");
  const savingsTotals = safeObject(SavingsTotalsSchema, "ui.comparison.savings.totals");

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* AI-Powered Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-block mb-6">
          <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <span className="relative z-10">{comparison?.legend.aiComparison ?? "AI Comparison"}</span>
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            <span className="text-white">{comparison?.titlePrimary ?? ""}</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">{comparison?.titleHighlight ?? ""}</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            {comparison?.subtitle ?? ""}
          </p>
        </div>

        {/* Modern Comparison Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {comparison?.rows?.map((row, index) => {
              // Helper function to parse and render comparison values
              const renderComparisonValue = (value: string, isHero: boolean = false) => {
                const isPositive = value.startsWith("YES") || isHero;
                const cleanValue = value.replace(/^(YES|NO)\s*·\s*/, "");
                
                if (isHero) {
                  return (
                    <div className="flex items-center justify-center gap-2 text-white">
                      <div className="p-1 bg-white/20 rounded-full">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="font-bold">{cleanValue}</span>
                    </div>
                  );
                }
                
                if (isPositive) {
                  return (
                    <div className="flex items-center justify-center gap-2 text-green-300">
                      <div className="p-1 bg-green-500/20 rounded-full">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{cleanValue}</span>
                    </div>
                  );
                }
                
                return (
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <div className="p-1 bg-slate-500/20 rounded-full">
                      <AlertCircle className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-sm">{cleanValue}</span>
                  </div>
                );
              };

              // Get appropriate icon for each feature
              const getFeatureIcon = (label: string) => {
                if (label.includes("AI") || label.includes("Intelligenz")) return <Zap className="w-5 h-5 text-cyan-400" />;
                if (label.includes("Zeit") || label.includes("Antwort")) return <Clock className="w-5 h-5 text-blue-400" />;
                if (label.includes("Sprachen")) return <Globe className="w-5 h-5 text-green-400" />;
                if (label.includes("Preis")) return <DollarSign className="w-5 h-5 text-yellow-400" />;
                if (label.includes("Setup")) return <Settings className="w-5 h-5 text-purple-400" />;
                if (label.includes("ROI")) return <TrendingUp className="w-5 h-5 text-emerald-400" />;
                return <Star className="w-5 h-5 text-orange-400" />;
              };

              return (
                <div key={row.label} className="bg-gradient-to-r from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                    {/* Feature Label */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3">
                        {getFeatureIcon(row.label)}
                        <h3 className="text-lg font-bold text-white">{row.label}</h3>
                      </div>
                    </div>

                    {/* ReplAInow - Hero Column */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl p-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                        <div className="relative z-10">
                          <div className="text-xs font-bold text-blue-100 mb-1 uppercase tracking-wide">
                            {comparison?.legend.hero ?? "ReplAInow"}
                          </div>
                          {renderComparisonValue(row.replAInow, true)}
                        </div>
                        <div className="absolute top-2 right-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Competitors */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
                        <div className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                          {comparison?.legend.gorgias ?? "Gorgias"}
                        </div>
                        {renderComparisonValue(row.gorgias)}
                      </div>
                      
                      <div className="bg-slate-700/40 rounded-lg p-4 border border-slate-600/40">
                        <div className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                          {comparison?.legend.intercom ?? "Intercom"}
                        </div>
                        {renderComparisonValue(row.intercom)}
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                        <div className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                          {comparison?.legend.zendesk ?? "Zendesk"}
                        </div>
                        {renderComparisonValue(row.zendesk)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/20 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-green-300">75% Günstiger</h4>
              </div>
              <p className="text-green-200 text-sm">Spare über €500 pro Jahr im Vergleich zu Konkurrenten</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-blue-300">10x Schneller</h4>
              </div>
              <p className="text-blue-200 text-sm">3 Sekunden statt 2-5 Minuten Antwortzeit</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/20 rounded-full">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-purple-300">32+ Sprachen</h4>
              </div>
              <p className="text-purple-200 text-sm">Mehr als doppelt so viele Sprachen wie Konkurrenten</p>
            </div>
          </div>
        </div>

        {savingsIntro && (
          <div className="mt-20 max-w-7xl mx-auto bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 sm:p-16 border border-blue-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5"></div>
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-green-400/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/5 to-green-200/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  {savingsIntro.badge}
                </div>
                <h3 className="text-5xl sm:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
                  {savingsIntro.title}
                </h3>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  {savingsIntro.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-red-400 mb-2">{t("ui.comparison.savings.headings.competitors")}</h4>
                    <p className="text-slate-300">{t("ui.comparison.savings.headings.competitorsSubtitle")}</p>
                  </div>

                  <div className="space-y-6">
                    {savingsCompetitors.map((competitor) => (
                      <div key={competitor.name} className="bg-gradient-to-r from-red-900/30 to-red-800/20 border-2 border-red-500/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-red-400">
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="font-bold text-red-300 text-xl">{competitor.name}</h5>
                          <span className="text-2xl font-black text-red-200">{competitor.price}</span>
                        </div>
                        <div className="space-y-2">
                          {competitor.bulletPoints.map((point) => (
                            <div key={point} className="flex items-center gap-3 text-sm">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                              <span className="text-red-200">{point}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-sm text-red-200 font-semibold">{competitor.summary}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-red-900/40 to-red-800/30 border-2 border-red-500/40 rounded-2xl p-6 text-center">
                    <div className="text-red-200 font-black text-3xl mb-2">{savingsTotals?.competitorTotal}</div>
                    <div className="text-red-300 font-semibold">{savingsTotals?.competitorNote}</div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-green-400 mb-2">{t("ui.comparison.savings.headings.ownPlan")}</h4>
                    <p className="text-slate-300">{t("ui.comparison.savings.headings.ownPlanSubtitle")}</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl p-8 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-black text-green-300 mb-2">{savingsOwnPlan?.price}</div>
                      <div className="text-green-200 font-semibold text-lg">{savingsOwnPlan?.tagline}</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {savingsOwnPlan?.features?.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                          <span className="text-green-200 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {savingsTotals?.ownBenefits?.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 text-sm text-green-200">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-2 border-blue-500/40 rounded-2xl p-6 text-center">
                    <h5 className="text-2xl font-bold text-blue-300 mb-2">{savingsTotals?.calloutTitle}</h5>
                    <p className="text-blue-200 text-sm leading-relaxed">{savingsTotals?.calloutSubtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModernComparison;