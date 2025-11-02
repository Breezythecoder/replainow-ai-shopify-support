import { motion } from "framer-motion";
import { ShoppingBag, Smartphone, Sparkles, Home } from "lucide-react";

const IndustryExamples2025 = () => {
  const industries = [
    {
      icon: ShoppingBag,
      color: "pink",
      title: "Fashion & Mode",
      example: "ModeStore",
      challenge: "Größenberatung, Rückgaben, Styling-Tipps",
      solution: "AI erkennt Produktmerkmale und gibt personalisierte Empfehlungen",
      result: "+45% Conversion, -60% Support-Tickets",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Smartphone,
      color: "blue",
      title: "Elektronik & Tech",
      example: "TechGadgets",
      challenge: "Technische Fragen, Kompatibilität, Setup-Hilfe",
      solution: "AI kennt alle Produktspezifikationen und löst 91% der Fragen",
      result: "+67% Kundenzufriedenheit, -80% Wartezeiten",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      color: "purple",
      title: "Beauty & Kosmetik",
      example: "BeautyStore",
      challenge: "Produktberatung, Hauttyp-Analyse, Anwendungstipps",
      solution: "AI analysiert Hauttyp und empfiehlt passende Produkte",
      result: "+52% Upselling, -70% Retouren",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Home,
      color: "green",
      title: "Home & Garden",
      example: "HomeGarden",
      challenge: "Montageanleitungen, Pflegetipps, Kompatibilität",
      solution: "AI liefert detaillierte Anleitungen und Pflegehinweise",
      result: "+38% Kundenzufriedenheit, -55% Support-Aufwand",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-4">
            <span className="text-primary-purple font-semibold">🏭 BRANCHENLÖSUNGEN</span>
          </div>
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Perfekt für deine Branche
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ReplAInow passt sich automatisch an deine Branche an und löst branchenspezifische Kundenfragen
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Beispiel:</div>
                    <div className="text-gray-900">{industry.example}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Herausforderung:</div>
                    <div className="text-gray-700">{industry.challenge}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">AI-Lösung:</div>
                    <div className="text-gray-700">{industry.solution}</div>
                  </div>

                  {/* Result Badge */}
                  <div className={`bg-gradient-to-r ${industry.gradient} text-white px-4 py-3 rounded-lg font-semibold text-center mt-6`}>
                    {industry.result}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 text-center bg-white rounded-2xl p-8 max-w-3xl mx-auto border-2 border-primary-purple"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-700">
            <span className="font-bold text-primary-purple">Deine Branche nicht dabei?</span>
            <br />
            ReplAInow funktioniert für ALLE E-Commerce Bereiche - die AI lernt automatisch von deinen Produkten!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryExamples2025;

