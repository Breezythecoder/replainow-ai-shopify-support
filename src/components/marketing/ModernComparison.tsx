import { t } from "@/i18n";
import { safeArray, safeObject } from "@/utils/safeT";
import { z } from "zod";

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

        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto -mx-4 sm:mx-0" tabIndex={0} role="region" aria-label="Comparison table - scrollable">
            <div className="inline-block min-w-full align-middle">
              <div className="bg-slate-800/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl mx-4 sm:mx-0 border border-blue-500/50">
                <div className="overflow-hidden rounded-3xl">
                  <table className="w-full min-w-[600px] sm:min-w-full" role="table" aria-label="Comparison table between ReplAInow and competitors">
                    <thead>
                      <tr className="border-b border-blue-500/30">
                        <th className="text-left py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-white text-sm sm:text-base bg-slate-700/50 rounded-tl-3xl">{t("ui.comparison.table.legend.feature")}</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden text-sm sm:text-base min-w-[140px]">
                          <div className="font-black text-base sm:text-lg md:text-xl">{comparison?.legend.hero ?? "ReplAInow"}</div>
                          <div className="text-xs sm:text-sm opacity-90">{comparison?.legend.poweredBy ?? "Powered"}</div>
                          <div className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-white font-semibold bg-slate-700/30 text-sm sm:text-base min-w-[120px]">{comparison?.legend.gorgias ?? "Gorgias"}</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-white font-semibold bg-slate-700/20 text-sm sm:text-base min-w-[120px]">{comparison?.legend.intercom ?? "Intercom"}</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-white font-semibold bg-slate-700/10 text-sm sm:text-base rounded-tr-3xl min-w-[120px]">{comparison?.legend.zendesk ?? "Zendesk"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison?.rows?.map((row) => (
                        <tr key={row.label} className="border-b border-blue-500/20 hover:bg-blue-500/10 transition-all duration-300 group">
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-white bg-slate-700/30 text-sm sm:text-base">
                            {row.label}
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white relative text-sm sm:text-base">
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-base sm:text-lg">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="whitespace-nowrap">{row.replAInow}</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-red-100 font-medium bg-slate-700/20 hover:bg-red-500/20 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row.gorgias}</span>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-red-100 font-medium bg-slate-700/15 hover:bg-red-500/15 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row.intercom}</span>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-red-100 font-medium bg-slate-700/10 hover:bg-red-500/10 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row.zendesk}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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