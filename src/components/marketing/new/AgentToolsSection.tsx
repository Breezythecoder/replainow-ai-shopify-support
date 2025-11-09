import { motion } from "framer-motion";
import { Gift, Link2, RefreshCcw, Zap, Check } from "lucide-react";

const AgentToolsSection = () => {
  const tools = [
    {
      icon: Gift,
      title: "Rabatt-Generator",
      color: "green",
      features: [
        "10%, 15%, 20% Quick-Buttons",
        "Eigener Wert + Gültigkeit",
        "Ein Klick → Kunde hat Code"
      ],
      benefit: "Conversion steigern",
      example: "Kunde zögert? 20% Code in 5 Sekunden"
    },
    {
      icon: Link2,
      title: "Checkout-Links",
      color: "purple",
      features: [
        "Produkte wählen + Warenkorb füllen",
        "Optional Rabatt dazu",
        "Pre-filled cart für Kunde"
      ],
      benefit: "Ein-Klick-Kauf",
      example: "Kunde interessiert? Warenkorb senden, fertig!"
    },
    {
      icon: RefreshCcw,
      title: "Rückerstattungen",
      color: "blue",
      features: [
        "Direkt aus Dashboard",
        "Artikel wählen, Betrag, send",
        "Shopify updated automatisch"
      ],
      benefit: "Schnelle Abwicklung",
      example: "Rückerstattung ohne 5 Tabs offen"
    },
    {
      icon: Zap,
      title: "Proaktive Trigger",
      color: "orange",
      features: [
        "Homepage-Begrüßung nach 10s",
        "Warenkorb-Erinnerungen",
        "Flash-Sale Ankündigungen"
      ],
      benefit: "Engagement erhöhen",
      example: "Kunde im Warenkorb 30s? 'Hilfe?' erscheint"
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Ihr <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Support-Center</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rabatte erstellen, Bestellungen verwalten, Nachrichten automatisieren – 
            alles was Sie brauchen, an einem Ort
          </p>
        </motion.div>

        {/* 4 Tool Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative group"
            >
              <div className={`
                absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl
                ${tool.color === 'green' ? 'bg-green-500/20' : ''}
                ${tool.color === 'purple' ? 'bg-purple-500/20' : ''}
                ${tool.color === 'blue' ? 'bg-blue-500/20' : ''}
                ${tool.color === 'orange' ? 'bg-orange-500/20' : ''}
              `}></div>
              
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div className={`
                  inline-flex p-4 rounded-xl mb-4
                  ${tool.color === 'green' ? 'bg-green-50' : ''}
                  ${tool.color === 'purple' ? 'bg-purple-50' : ''}
                  ${tool.color === 'blue' ? 'bg-blue-50' : ''}
                  ${tool.color === 'orange' ? 'bg-orange-50' : ''}
                `}>
                  <tool.icon className={`
                    w-8 h-8
                    ${tool.color === 'green' ? 'text-green-600' : ''}
                    ${tool.color === 'purple' ? 'text-purple-600' : ''}
                    ${tool.color === 'blue' ? 'text-blue-600' : ''}
                    ${tool.color === 'orange' ? 'text-orange-600' : ''}
                  `} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {tool.title}
                </h3>

                {/* Features */}
                <ul className="space-y-2 mb-4 flex-1">
                  {tool.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <Check className={`
                        w-4 h-4 flex-shrink-0 mt-0.5
                        ${tool.color === 'green' ? 'text-green-600' : ''}
                        ${tool.color === 'purple' ? 'text-purple-600' : ''}
                        ${tool.color === 'blue' ? 'text-blue-600' : ''}
                        ${tool.color === 'orange' ? 'text-orange-600' : ''}
                      `} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Benefit Badge */}
                <div className={`
                  px-3 py-2 rounded-lg text-xs font-bold text-center mb-3
                  ${tool.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                  ${tool.color === 'purple' ? 'bg-purple-100 text-purple-700' : ''}
                  ${tool.color === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                  ${tool.color === 'orange' ? 'bg-orange-100 text-orange-700' : ''}
                `}>
                  💡 {tool.benefit}
                </div>

                {/* Example */}
                <div className="text-xs text-gray-600 italic border-t border-gray-200 pt-3">
                  {tool.example}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Gift,
              title: "Unbegrenzte Rabatte",
              desc: "Erstellen Sie so viele Codes wie Sie wollen"
            },
            {
              icon: Zap,
              title: "Unbegrenzte Trigger",
              desc: "So viele proaktive Nachrichten wie nötig"
            },
            {
              icon: RefreshCcw,
              title: "Direkte Shopify-Actions",
              desc: "Rückerstattungen, Stornos – alles im Dashboard"
            }
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <feature.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700">
            <span className="font-bold text-purple-600">Alles in einem Dashboard</span> –{' '}
            keine 10 verschiedenen Tools mehr
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgentToolsSection;

