import { motion } from "framer-motion";
import { ShoppingBag, Check, Sparkles, TrendingUp, Link2 } from "lucide-react";

const ProductPickerSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Support <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">der verkauft</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Zeigen Sie Produkte mit Bildern, Größen, Farben – Kunde kauft mit einem Klick. 
            Conversion direkt im Support-Gespräch.
          </p>
        </motion.div>

        {/* Asymmetrisches 2:1 Bento Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Product Picker Modal Mockup - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="md:col-span-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-3xl blur-2xl"></div>
            
            <div className="bg-white rounded-3xl p-1 shadow-elevation-5 border-2 border-gray-200 relative">
              <div className="bg-white/90 rounded-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gray-900 p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="font-semibold">Produkte senden</span>
                </div>
                <div className="text-xs bg-white/20 px-2 py-1 rounded">
                  3 ausgewählt
                </div>
              </div>

              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-gray-700">🔍</span>
                  <label htmlFor="product-search" className="sr-only">Produkte suchen</label>
                  <input 
                    type="text"
                    id="product-search"
                    name="product-search"
                    placeholder="Produkte suchen..."
                    aria-label="Produkte im Shop suchen"
                    className="flex-1 bg-transparent text-sm outline-none"
                    disabled
                  />
                </div>
              </div>

              {/* Product Grid */}
              <div className="p-4 grid grid-cols-2 gap-3">
                {[
                  { 
                    name: "Summer Dress", 
                    price: "€49,90", 
                    selected: true,
                    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop"
                  },
                  { 
                    name: "Blue Sneakers", 
                    price: "€89,90", 
                    selected: true,
                    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop"
                  },
                  { 
                    name: "Beach Bag", 
                    price: "€29,90", 
                    selected: true,
                    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=200&h=200&fit=crop"
                  },
                  { 
                    name: "Sunglasses", 
                    price: "€39,90", 
                    selected: false,
                    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop"
                  }
                ].map((product, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, rotateZ: product.selected ? 0 : 2 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      relative rounded-lg border-2 overflow-hidden transition-all cursor-pointer
                      ${product.selected 
                        ? 'border-purple-500 bg-purple-50/50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-purple-300'
                      }
                    `}
                  >
                    {product.selected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center z-10">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="h-20 bg-gray-100 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-semibold text-gray-900 mb-1">{product.name}</div>
                      <div className="text-xs text-gray-600">{product.price}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Selected Products Config */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
                <div className="text-xs font-bold text-gray-700 mb-2">Ausgewählte Produkte (3):</div>
                {[
                  { name: "Summer Dress", variant: "Größe M, Farbe Blau" },
                  { name: "Blue Sneakers", variant: "Größe 42" },
                  { name: "Beach Bag", variant: "Standard" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-900">{item.name}</div>
                      <div className="text-[10px] text-gray-600">{item.variant}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <label htmlFor={`cart-item-${i}`} className="sr-only">Anzahl für {item.name}</label>
                      <input 
                        type="number"
                        id={`cart-item-${i}`}
                        name={`cart-item-${i}`}
                        aria-label={`Anzahl für ${item.name}`}
                        value="1" 
                        className="w-12 text-center text-xs border border-gray-300 rounded px-1 py-1"
                        disabled
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-white border-t border-gray-200 space-y-2">
                <button className="w-full px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Als Karten senden
                </button>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-violet-700 transition-colors flex items-center justify-center gap-2">
                  <Link2 className="w-4 h-4" />
                  Checkout-Link erstellen
                </button>
              </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits - Spans 1 column */}
          <div className="space-y-6">
            {[
              {
                icon: ShoppingBag,
                title: "Conversion steigern",
                desc: "Support wird zu Verkauf – direkt im Gespräch"
              },
              {
                icon: Sparkles,
                title: "Ein-Klick-Checkout",
                desc: "Warenkorb vorgefüllt, Rabatt angewendet, fertig"
              },
              {
                icon: TrendingUp,
                title: "Höherer AOV",
                desc: "Mehr Produkte pro Kunde durch visuelle Empfehlungen"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 hover:shadow-white-card-hover transition-all duration-300 border-2 border-gray-200 hover:border-purple-400 group shadow-card-strong"
              >
          <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
          >
                  <benefit.icon className="w-8 h-8 text-purple-700 mb-3" />
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">{benefit.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
                ))}
              </div>
            </div>

        {/* Bottom CTA - Glass */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white inline-flex items-center gap-3 px-8 py-4 border-2 border-purple-200 rounded-2xl shadow-white-card hover:shadow-white-card-hover hover:border-purple-400 transition-all duration-300">
            <Sparkles className="w-6 h-6 text-purple-700" />
            <span className="font-bold text-purple-900">
              Support wird zum Verkaufstool – visuelle Empfehlungen steigern Conversion
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPickerSection;

