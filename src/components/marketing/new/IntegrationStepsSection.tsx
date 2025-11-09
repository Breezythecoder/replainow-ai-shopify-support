import { motion } from "framer-motion";
import { Clock, Sparkles, CheckCircle2 } from "lucide-react";

const IntegrationStepsSection = () => {
  const steps = [
    { 
      num: 1, 
      title: "App installieren", 
      desc: "1-Klick Installation aus dem Shopify App Store", 
      time: "30 Sekunden", 
      icon: Clock 
    },
    { 
      num: 2, 
      title: "KI lernt automatisch", 
      desc: "Automatisches Training anhand Ihrer Shopify-Daten", 
      time: "Vollautomatisch", 
      icon: Sparkles 
    },
    { 
      num: 3, 
      title: "Support läuft", 
      desc: "KI beantwortet Anfragen eigenständig", 
      time: "Sofort live", 
      icon: CheckCircle2 
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Nahtlose <span className="font-semibold">Shopify-Integration</span>
          </h2>
          <p className="text-lg text-gray-600">Vollautomatische Einrichtung in unter 60 Sekunden</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className={`relative ${i === 1 ? 'md:-mt-4' : ''}`}
              >
                <div className={`
                  rounded-2xl p-8 shadow-md transition-all duration-300
                  ${i === 1 
                    ? 'bg-gradient-to-br from-purple-500 to-violet-600 text-white border-0' 
                    : 'bg-white border border-gray-200 hover:border-purple-200 hover:shadow-lg'
                  }
                `}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg
                      ${i === 1 ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'}
                    `}>
                      {step.num}
                    </div>
                    <step.icon className={`w-5 h-5 ${i === 1 ? 'text-white/90' : 'text-gray-400'}`} />
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-3 ${i === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 leading-relaxed ${i === 1 ? 'text-white/95' : 'text-gray-600'}`}>
                    {step.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${i === 1 ? 'bg-white' : 'bg-purple-500'}`}></div>
                    <span className={i === 1 ? 'text-white' : 'text-purple-700'}>{step.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 mb-4">
            Keine Schulung erforderlich. Keine komplexe Einrichtung. Einfach installieren und loslegen.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full border border-green-200">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Live in 60 Sekunden</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationStepsSection;









