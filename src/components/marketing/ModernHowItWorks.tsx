import { Button } from "@/components/ui/button";
import { Download, Zap, Brain } from "lucide-react";
import { t } from "@/i18n";
import { safeArray } from "@/utils/safeT";
import { z } from "zod";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

// Schema for step validation
const StepSchema = z.object({
  title: z.string(),
  description: z.string()
});

const StepsArraySchema = z.array(StepSchema);

const ModernHowItWorks = () => {
  // Get steps from i18n using safeArray
  const stepsData = safeArray(StepsArraySchema, "ui.howItWorks.steps");
  
  // Icons for the steps
  const icons = [Download, Zap, Brain];
  
  // Build steps array with proper data
  const steps = stepsData.map((stepData, index) => ({
    step: String(index + 1).padStart(2, '0'),
    icon: icons[index] || Download,
    title: stepData.title,
    desc: stepData.description
  }));

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 tracking-tight px-4 text-center"
          dangerouslySetInnerHTML={{ 
            __html: t('ui.howItWorks.title')
              .replace('{highlight}', '<span class="text-gradient-primary">')
              .replace('{/highlight}', '</span>')
          }}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="text-center group px-4 lg:px-6">
              <div className="relative mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="absolute -top-2 -right-2 bg-white text-indigo-600 font-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full border-2 border-indigo-200 shadow-lg">
                  {step.step}
                </div>
                {/* Connection Line - Desktop only */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 sm:top-12 left-full w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 -z-10 transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-800 leading-tight">{step.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile-Optimized CTA */}
        <div className="text-center px-4">
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 font-bold min-h-[56px] max-w-md mx-auto">
            <a href={OAUTH_URL} className="flex items-center justify-center gap-2">
              Kostenlos starten
            </a>
          </Button>
          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">
            14 Tage kostenlos • Setup-frei • Jederzeit kündbar
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernHowItWorks;