import { AlertTriangle, CheckCircle, Clock, Users, TrendingDown, TrendingUp, Zap, Brain, Globe, Target } from "lucide-react";
import { t } from "@/i18n";
import { safeArray } from "@/utils/safeT";
import { z } from "zod";

// Schema for problem/solution points
const PointsArraySchema = z.array(z.string());

const ModernProblemSolution = () => {
  // Get points from i18n
  const beforePoints = safeArray(PointsArraySchema, "ui.problemSolution.before.points");
  const afterPoints = safeArray(PointsArraySchema, "ui.problemSolution.after.points");

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* AI-Powered Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-green-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
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
      
      <div className="container mx-auto px-6 relative z-10">
        {/* AI Badge */}
        <div className="inline-block mb-6">
          <span className="px-6 py-3 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <span className="relative z-10">{t("ui.problemSolution.badge")}</span>
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">{t("ui.problemSolution.problemTitle")}</span> <span className="text-white">{t("ui.problemSolution.problemSubtitle")}</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">{t("ui.problemSolution.solutionTitle")}</span> <span className="text-white">{t("ui.problemSolution.solutionSubtitle")}</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Before Card - Problem */}
          <div className="bg-white/95 backdrop-blur-lg border border-red-500/30 rounded-3xl p-8 relative shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-102">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ⚠️ {t("ui.problemSolution.before.title").toUpperCase()}
            </div>
            <img 
              src="/assets/1d082320-2e70-4359-aaed-382d72ddacb7.png" 
              alt={t("ui.problemSolution.before.imageAlt")}
              className="w-full h-auto mb-6 rounded-xl shadow-md" 
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
            />
            <ul className="space-y-4 text-slate-600">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  {index === 0 && <AlertTriangle className="text-red-500 w-5 h-5 flex-shrink-0" />}
                  {index === 1 && <AlertTriangle className="text-red-500 w-5 h-5 flex-shrink-0" />}
                  {index === 2 && <Clock className="text-red-500 w-5 h-5 flex-shrink-0" />}
                  {index === 3 && <TrendingDown className="text-red-500 w-5 h-5 flex-shrink-0" />}
                  {index === 4 && <Users className="text-red-500 w-5 h-5 flex-shrink-0" />}
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* After Card - Solution */}
          <div className="bg-white/95 backdrop-blur-lg border border-green-500/30 rounded-3xl p-8 relative shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-102">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-green-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🚀 {t("ui.problemSolution.after.title").toUpperCase()}
            </div>
            <img 
              src="/assets/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" 
              alt={t("ui.problemSolution.after.imageAlt")}
              className="w-full h-auto mb-6 rounded-xl shadow-md" 
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
            />
            <ul className="space-y-4 text-slate-600">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  {index === 0 && <Zap className="text-green-500 w-5 h-5 flex-shrink-0" />}
                  {index === 1 && <Target className="text-green-500 w-5 h-5 flex-shrink-0" />}
                  {index === 2 && <Globe className="text-green-500 w-5 h-5 flex-shrink-0" />}
                  {index === 3 && <TrendingUp className="text-green-500 w-5 h-5 flex-shrink-0" />}
                  {index === 4 && <Brain className="text-green-500 w-5 h-5 flex-shrink-0" />}
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProblemSolution;