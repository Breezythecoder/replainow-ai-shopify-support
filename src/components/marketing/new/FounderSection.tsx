import { useTranslation } from "@/i18n";

const FounderSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-3xl px-6">
        
        {/* Quote-style content */}
        <div className="text-center">
          
          {/* Story - Simple paragraphs */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
            
            <p className="italic">
              {t('marketing.founder.paragraph1')}
            </p>
            
            <p className="font-semibold text-gray-900 text-xl">
              {t('marketing.founder.problem')}
            </p>
            
            <div>
              <p className="mb-3">{t('marketing.founder.paragraph2Intro')}</p>
              <div className="space-y-1 text-gray-600">
                <p>→ {t('marketing.founder.problem1')}</p>
                <p>→ {t('marketing.founder.problem2')}</p>
                <p>→ {t('marketing.founder.problem3')}</p>
              </div>
            </div>
            
            <p>
              {t('marketing.founder.paragraph3')}
            </p>
            
            <p className="font-semibold text-purple-700 text-xl pt-4">
              {t('marketing.founder.closer')}
            </p>
          </div>
          
          {/* Photo + Signature at bottom */}
          <div className="flex flex-col items-center gap-4 pt-8 border-t border-gray-200">
            
            {/* Round photo - small */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-purple-100">
                <img 
                  src="/ruben-calabrese-founder.jpg" 
                  alt="Ruben Calabrese"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                          <span class="text-white text-2xl font-bold">R</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Signature - minimal */}
            <div>
              <p className="text-lg font-bold text-gray-900">
                Ruben Calabrese
              </p>
              <p className="text-sm text-gray-600">
                Founder & CEO
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FounderSection;

