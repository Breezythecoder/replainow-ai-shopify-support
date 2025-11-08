import { motion } from "framer-motion";
import { ShoppingBag, Gift, Package, CreditCard } from "lucide-react";

const VisualCommerceBanner = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Verkaufen <span className="font-semibold">direkt im Chat</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visuelle Commerce-Tools für höhere Conversions – 
            Produktkarten, Rabattcodes und Checkout-Links
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Visual Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: ShoppingBag,
                  title: "Produkt-Karten",
                  desc: "Agenten senden Produkte mit Bild, Preis und 'Produkt ansehen' Button – visuell statt nur Text",
                  benefit: "Höhere Click-Rate",
                  color: "purple"
                },
                {
                  icon: Gift,
                  title: "Rabatt-Codes",
                  desc: "AI oder Agenten erstellen sofort Shopify-Rabattcodes (10%, 15%, 20%) mit Ein-Klick-Kopieren",
                  benefit: "Conversion Boost",
                  color: "violet"
                },
                {
                  icon: CreditCard,
                  title: "Checkout-Links",
                  desc: "Agenten erstellen vorausgefüllte Warenkörbe mit optionalem Rabatt – One-Click Checkout",
                  benefit: "Schnellere Käufe",
                  color: "blue"
                },
                {
                  icon: Package,
                  title: "Tracking-Karten",
                  desc: "Kunde fragt 'Wo ist meine Bestellung?' → AI zeigt Tracking mit Carrier-Logo und Link",
                  benefit: "Weniger Tickets",
                  color: "pink"
                }
              ].map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className={`
                    p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300
                    ${tool.color === 'purple' ? 'bg-purple-50' : ''}
                    ${tool.color === 'violet' ? 'bg-violet-50' : ''}
                    ${tool.color === 'blue' ? 'bg-blue-50' : ''}
                    ${tool.color === 'pink' ? 'bg-pink-50' : ''}
                  `}>
                    <tool.icon className={`
                      w-6 h-6
                      ${tool.color === 'purple' ? 'text-purple-600' : ''}
                      ${tool.color === 'violet' ? 'text-violet-600' : ''}
                      ${tool.color === 'blue' ? 'text-blue-600' : ''}
                      ${tool.color === 'pink' ? 'text-pink-600' : ''}
                    `} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{tool.title}</h4>
                      <span className={`
                        px-2 py-0.5 text-xs font-bold rounded
                        ${tool.color === 'purple' ? 'bg-purple-100 text-purple-700' : ''}
                        ${tool.color === 'violet' ? 'bg-violet-100 text-violet-700' : ''}
                        ${tool.color === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                        ${tool.color === 'pink' ? 'bg-pink-100 text-pink-700' : ''}
                      `}>
                        {tool.benefit}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mockup/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-3xl blur-2xl"></div>
              
              {/* Chat Example with Product Card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-2xl border border-gray-200">
                <div className="space-y-4">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-purple-600 rounded-lg p-3 max-w-[70%]">
                      <p className="text-sm text-white">Habt ihr das in anderen Farben?</p>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 max-w-[80%]">
                      <p className="text-sm text-gray-800 mb-3">
                        Ja! Wir haben 3 Farben verfügbar. Hier sind alle Varianten:
                      </p>
                      
                      {/* Product Card Preview */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
                        <div className="h-32 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>
                        <div className="p-3">
                          <h5 className="font-semibold text-gray-900 text-sm mb-1">Summer Dress</h5>
                          <p className="text-xs text-gray-600 mb-2">Blau, Rot, Grün verfügbar</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">€49.90</span>
                            <button className="px-3 py-1.5 bg-purple-600 text-white text-xs font-semibold rounded-lg">
                              Ansehen
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Discount Offer */}
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 shadow-sm border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-bold text-purple-900">SPECIAL OFFER</span>
                      </div>
                      <p className="text-sm font-bold text-gray-900 mb-1">SAVE20-XYZ</p>
                      <p className="text-xs text-gray-600 mb-2">20% OFF – Gültig 7 Tage</p>
                      <button className="w-full px-3 py-1.5 bg-purple-600 text-white text-xs font-semibold rounded">
                        Code kopieren
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "Visual Product Cards", value: "Höhere Click-Rate", icon: ShoppingBag },
            { label: "Instant Discounts", value: "Mehr Conversions", icon: Gift },
            { label: "One-Click Checkout", value: "Schnellere Käufe", icon: CreditCard }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="font-semibold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VisualCommerceBanner;









