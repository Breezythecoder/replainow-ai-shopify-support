import { motion } from "framer-motion";
import { ShoppingBag, Gift, Link2, RefreshCcw, CheckCircle2, Sparkles, Eye, Package } from "lucide-react";
import { useTranslation } from "@/i18n";

const AgentProductivity = () => {
  const { t, getTranslation } = useTranslation();
  
  const iconMap = { ShoppingBag, Gift, RefreshCcw, Eye };
  const tools = getTranslation('marketing.agentProductivity.tools') || [
    {title: "Product Picker", desc: "Varianten wählen (Größe, Farbe), als Karten oder Checkout-Link senden", color: "purple"},
    {title: "Rabatt-Generator", desc: "10%, 15%, 20% Quick-Buttons. Ein Klick → Kunde hat Code", color: "green"},
    {title: "Rückerstattungen", desc: "Direkt aus Dashboard. Artikel wählen, Betrag, fertig", color: "blue"},
    {title: "Kunden-Journey", desc: "Welche Seiten besucht, was im Warenkorb, Kaufabsicht-Score", color: "violet"}
  ].map((tool, i) => ({...tool, icon: [ShoppingBag, Gift, RefreshCcw, Eye][i]}));
  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
      data-section="agent-productivity"
    >
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-mesh-blue opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            {t('marketing.agentProductivity.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('marketing.agentProductivity.subtitle')}
          </p>
        </motion.div>

        {/* Main Layout: Dashboard Preview + Tools */}
        <div className="grid md:grid-cols-5 gap-8 mb-20">
          
          {/* Left: Dashboard Visual (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="md:col-span-3 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
              <img 
                src="/dashboard-screenshots/Screenshot-1-livechat.png" 
                alt="ReplAInow Agent Dashboard - Product Picker, Discount Creator, Order Management"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Right: Key Tools (2 columns) */}
          <div className="md:col-span-2 space-y-6">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="relative group"
              >
                <div className={`
                  absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg
                  ${tool.color === 'purple' ? 'bg-purple-500/20' : ''}
                  ${tool.color === 'green' ? 'bg-green-500/20' : ''}
                  ${tool.color === 'blue' ? 'bg-blue-500/20' : ''}
                  ${tool.color === 'violet' ? 'bg-violet-500/20' : ''}
                `}></div>
                
                <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-200 group-hover:border-purple-300 transition-all duration-300 shadow-card-strong group-hover:shadow-float">
                  <div className="flex items-start gap-4">
                    <div className={`
                      p-3 rounded-xl flex-shrink-0
                      ${tool.color === 'purple' ? 'bg-purple-50' : ''}
                      ${tool.color === 'green' ? 'bg-green-50' : ''}
                      ${tool.color === 'blue' ? 'bg-blue-50' : ''}
                      ${tool.color === 'violet' ? 'bg-violet-50' : ''}
                    `}>
                      <tool.icon className={`
                        w-6 h-6
                        ${tool.color === 'purple' ? 'text-purple-700' : ''}
                        ${tool.color === 'green' ? 'text-green-700' : ''}
                        ${tool.color === 'blue' ? 'text-blue-700' : ''}
                        ${tool.color === 'violet' ? 'text-violet-700' : ''}
                      `} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1.5">{tool.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Picker Workflow Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-r from-purple-50 via-violet-50 to-blue-50 rounded-3xl p-10 md:p-14 border-2 border-purple-200">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t('marketing.agentProductivity.exampleTitle')}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('marketing.agentProductivity.exampleSubtitle')}
              </p>
            </div>

            {/* Flow Steps */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { 
                  num: "1", 
                  title: "Produkte wählen",
                  desc: "Dress + Shoes + Bag",
                  icon: ShoppingBag,
                  color: "purple"
                },
                { 
                  num: "2", 
                  title: "Varianten setzen",
                  desc: "Größe M, Farbe Rot",
                  icon: CheckCircle2,
                  color: "violet"
                },
                { 
                  num: "3", 
                  title: "Rabatt hinzu",
                  desc: "Optional: 20% OFF",
                  icon: Gift,
                  color: "blue"
                },
                { 
                  num: "4", 
                  title: "Link senden",
                  desc: "Kunde klickt → Checkout",
                  icon: Link2,
                  color: "green"
                }
              ].map((step, i) => (
                <div key={i} className="relative">
                  {/* Connection Arrow */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-3 z-10">
                      <div className="text-purple-400">→</div>
                    </div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                    
                    <div className={`
                      inline-flex p-4 rounded-xl mb-4 mt-2
                      ${step.color === 'purple' ? 'bg-purple-50' : ''}
                      ${step.color === 'violet' ? 'bg-violet-50' : ''}
                      ${step.color === 'blue' ? 'bg-blue-50' : ''}
                      ${step.color === 'green' ? 'bg-green-50' : ''}
                    `}>
                      <step.icon className={`
                        w-6 h-6
                        ${step.color === 'purple' ? 'text-purple-700' : ''}
                        ${step.color === 'violet' ? 'text-violet-700' : ''}
                        ${step.color === 'blue' ? 'text-blue-700' : ''}
                        ${step.color === 'green' ? 'text-green-700' : ''}
                      `} />
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h4>
                    <p className="text-xs text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Result */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 border-2 border-green-300 shadow-lg">
                <Package className="w-6 h-6 text-green-700" />
                <span className="font-bold text-gray-900">
                  Resultat: Pre-filled Cart mit 20% Rabatt → Ein-Klick-Checkout für Kunde
                </span>
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-gray-900">
            <span className="text-purple-600">AI macht 87%</span> automatisch –{" "}
            <span className="text-violet-600">Ihre Agenten die 13%</span>{" "}
            mit den besten Tools
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgentProductivity;

