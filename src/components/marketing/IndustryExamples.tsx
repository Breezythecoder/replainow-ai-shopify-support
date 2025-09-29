import { ShoppingBag, Smartphone, Heart, Home, Sparkles } from "lucide-react";
import { t } from "@/i18n";
import { safeArray } from "@/utils/safeT";
import { z } from "zod";

// Schema for Industry Examples
const IndustrySchema = z.object({
  name: z.string(),
  example: z.string(),
  challenges: z.array(z.string()),
  solution: z.string(),
  results: z.string()
});

const IndustriesArraySchema = z.array(IndustrySchema);

const IndustryExamples = () => {
  // Get industries from i18n
  const industriesData = safeArray(IndustriesArraySchema, "ui.industryExamples.industries");
  
  // Map with static icons and gradients
  const iconMap = [ShoppingBag, Smartphone, Heart, Home];
  const gradientMap = [
    "from-pink-500 to-rose-500",
    "from-blue-500 to-indigo-500", 
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500"
  ];
  
  const industries = industriesData.map((industry, index) => ({
    ...industry,
    icon: iconMap[index] || ShoppingBag,
    gradient: gradientMap[index] || gradientMap[0]
  }));

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* AI-Powered Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
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
        {/* AI Badge */}
        <div className="inline-block mb-6">
          <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <span className="relative z-10">{t("ui.industryExamples.badge")}</span>
          </span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              {t("ui.industryExamples.title")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            {t("ui.industryExamples.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <div key={i} className="bg-slate-800/80 backdrop-blur-lg rounded-3xl p-6 border border-blue-500/50 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group h-full flex flex-col">
              {/* AI Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl`}></div>
              
              {/* Icon with Animation */}
              <div className={`relative text-4xl mb-4 w-16 h-16 rounded-3xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mx-auto`}>
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="relative text-xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-all duration-300">
                {industry.name}
              </h3>
              <div className="relative space-y-3 text-sm flex-1 flex flex-col">
                <div className="flex flex-col">
                  <span className="font-semibold text-blue-400">Beispiel:</span>
                  <span className="text-blue-100">{industry.example}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-red-400">Herausforderung:</span>
                  <span className="text-blue-100 break-words">{industry.challenges.join(", ")}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-green-400">AI-Lösung:</span>
                  <span className="text-blue-100 break-words">{industry.solution}</span>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-3 border border-green-400/30 mt-auto">
                  <span className="font-semibold text-green-400">Ergebnis:</span>
                  <span className="text-green-300 ml-1 font-semibold break-words">{industry.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExamples;
