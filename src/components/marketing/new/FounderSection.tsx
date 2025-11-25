import { useTranslation } from "@/i18n";

const FounderSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            
            {/* Photo - Left Side */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-violet-400 rounded-3xl blur-xl opacity-20"></div>
                
                {/* Photo placeholder - Replace with actual photo */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/ruben-calabrese-founder.jpg" 
                    alt="Ruben Calabrese, Founder & CEO of ReplAInow"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if photo doesn't exist yet
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                            <span class="text-white text-6xl font-bold">R</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="flex-1 text-center md:text-left">
              
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('marketing.founder.title')}
              </h2>
              
              {/* Story */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                
                {/* Paragraph 1 */}
                <p>
                  {t('marketing.founder.paragraph1')}
                </p>
                
                {/* Problem statement - emphasized */}
                <p className="font-semibold text-gray-900 text-xl">
                  {t('marketing.founder.problem')}
                </p>
                
                {/* Paragraph 2 - The existing solutions */}
                <div className="space-y-2">
                  <p>{t('marketing.founder.paragraph2Intro')}</p>
                  <div className="pl-4 space-y-1 text-gray-600">
                    <p>→ {t('marketing.founder.problem1')}</p>
                    <p>→ {t('marketing.founder.problem2')}</p>
                    <p>→ {t('marketing.founder.problem3')}</p>
                  </div>
                </div>
                
                {/* Paragraph 3 - The solution */}
                <p>
                  {t('marketing.founder.paragraph3')}
                </p>
                
                {/* Closing statement - highlighted */}
                <p className="font-semibold text-purple-700 text-xl pt-2">
                  {t('marketing.founder.closer')}
                </p>
              </div>
              
              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xl font-bold text-gray-900">
                  — Ruben Calabrese
                </p>
                <p className="text-gray-600 font-medium">
                  Founder & CEO
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

