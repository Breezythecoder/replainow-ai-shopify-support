import { motion } from "framer-motion";
import { Zap, MessageCircle, Bell, Sparkles } from "lucide-react";

const ProactiveEngagementBanner = () => {
  const triggers = [
    {
      icon: MessageCircle,
      title: "Welcome Messages",
      desc: "Begrüßen Sie Besucher automatisch – 'Willkommen! Brauchen Sie Hilfe?'",
      timing: "Nach 10 Sekunden",
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "Product Page Help",
      desc: "Kunden browsen Produkt für 30s → 'Fragen zu diesem Produkt?'",
      timing: "Nach 30 Sekunden",
      color: "violet"
    },
    {
      icon: Bell,
      title: "Flash Sale Announcements",
      desc: "Öffnen Sie Widget automatisch mit: '🔥 Flash Sale: 25% OFF bis Mitternacht!'",
      timing: "Sofort beim Laden",
      color: "pink"
    },
    {
      icon: Zap,
      title: "Checkout Assistance",
      desc: "Kunde auf Checkout-Seite → 'Fragen vor dem Abschluss?'",
      timing: "Nach 15 Sekunden",
      color: "blue"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-semibold">Proaktives</span> Engagement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Warten Sie nicht, bis Kunden fragen – 
            melden Sie sich zuerst mit verhaltensbasierten Triggern
          </p>
        </motion.div>

        {/* Trigger Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {triggers.map((trigger, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="relative group"
            >
              <div className={`
                absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl
                ${trigger.color === 'purple' ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10' : ''}
                ${trigger.color === 'violet' ? 'bg-gradient-to-br from-violet-500/10 to-blue-500/10' : ''}
                ${trigger.color === 'pink' ? 'bg-gradient-to-br from-pink-500/10 to-purple-500/10' : ''}
                ${trigger.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-violet-500/10' : ''}
              `}></div>
              
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`
                    p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300
                    ${trigger.color === 'purple' ? 'bg-purple-50' : ''}
                    ${trigger.color === 'violet' ? 'bg-violet-50' : ''}
                    ${trigger.color === 'pink' ? 'bg-pink-50' : ''}
                    ${trigger.color === 'blue' ? 'bg-blue-50' : ''}
                  `}>
                    <trigger.icon className={`
                      w-7 h-7
                      ${trigger.color === 'purple' ? 'text-purple-600' : ''}
                      ${trigger.color === 'violet' ? 'text-violet-600' : ''}
                      ${trigger.color === 'pink' ? 'text-pink-600' : ''}
                      ${trigger.color === 'blue' ? 'text-blue-600' : ''}
                    `} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{trigger.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{trigger.desc}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <div className={`
                        w-1.5 h-1.5 rounded-full
                        ${trigger.color === 'purple' ? 'bg-purple-500' : ''}
                        ${trigger.color === 'violet' ? 'bg-violet-500' : ''}
                        ${trigger.color === 'pink' ? 'bg-pink-500' : ''}
                        ${trigger.color === 'blue' ? 'bg-blue-500' : ''}
                      `}></div>
                      <span className="text-gray-500 font-medium">{trigger.timing}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Unbegrenzte Trigger",
              desc: "Erstellen Sie beliebig viele Trigger für verschiedene Szenarien",
              icon: Zap
            },
            {
              title: "Flexible Konfiguration",
              desc: "Setzen Sie Verzögerung, Häufigkeit, Priorität und Bedingungen",
              icon: Sparkles
            },
            {
              title: "Verhaltensbasiert",
              desc: "Trigger basieren auf Seiten, Zeit auf Seite, und Customer Journey",
              icon: Bell
            }
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="inline-flex p-3 bg-purple-50 rounded-xl mb-3">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">{feature.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProactiveEngagementBanner;









