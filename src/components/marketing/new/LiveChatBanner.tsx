import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Globe, Zap } from "lucide-react";
import ProductCard from "@/components/marketing/cards/ProductCard";
import DiscountCard from "@/components/marketing/cards/DiscountCard";
import CheckoutCard from "@/components/marketing/cards/CheckoutCard";
import TrackingCard from "@/components/marketing/cards/TrackingCard";

const LiveChatBanner = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Live-Chat <span className="font-semibold">der mehr kann</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nicht nur Text-Chat: Produkt-Karten mit Bildern, Rabatt-Codes, Tracking-Links, 
            vorgefüllte Warenkörbe – modernes Widget, kein 90er Jahre Ding
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Real Widget Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            {/* Real Widget Screenshot */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-3xl blur-3xl"></div>
              
              {/* Overflow container to cut off screenshot shadow */}
              <div className="relative max-w-md mx-auto overflow-hidden rounded-3xl">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src="/dashboard-screenshots/Hometab-widget-nobackground.png"
                    alt="ReplAInow Live Chat Widget - Echte Ansicht mit AI-Antworten, Produktempfehlungen und Multi-Channel Support"
                    className="w-full h-auto relative"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Mehr als nur ein Chat-Widget
              </h3>

              {[
                {
                  icon: MessageSquare,
                  title: "Multi-Tab Interface",
                  desc: "Home, Nachrichten, Chat-Historie – alles übersichtlich",
                  color: "purple"
                },
                {
                  icon: Sparkles,
                  title: "Intelligente KI",
                  desc: "Versteht Kontext, empfiehlt Produkte, kennt Bestellungen",
                  color: "violet"
                },
                {
                  icon: Globe,
                  title: "100+ Sprachen",
                  desc: "Automatische Erkennung – antwortet in Kundensprache",
                  color: "blue"
                },
                {
                  icon: Zap,
                  title: "Proaktive Nachrichten",
                  desc: "Begrüßung, Warenkorb-Erinnerungen, Flash-Sales",
                  color: "pink"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className={`
                    p-3 rounded-xl flex-shrink-0
                    ${feature.color === 'purple' ? 'bg-purple-50' : ''}
                    ${feature.color === 'violet' ? 'bg-violet-50' : ''}
                    ${feature.color === 'blue' ? 'bg-blue-50' : ''}
                    ${feature.color === 'pink' ? 'bg-pink-50' : ''}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <feature.icon className={`
                      w-6 h-6
                      ${feature.color === 'purple' ? 'text-purple-700' : ''}
                      ${feature.color === 'violet' ? 'text-violet-600' : ''}
                      ${feature.color === 'blue' ? 'text-blue-700' : ''}
                      ${feature.color === 'pink' ? 'text-pink-700' : ''}
                    `} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{feature.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">&lt;2s</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Antwortzeit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">3</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Tabs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Online</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Special Card Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-900 mb-3">
              Mehr als nur Text
            </h3>
            <p className="text-gray-600">
              Support mit Bildern, Buttons und Ein-Klick-Aktionen
            </p>
          </div>

          {/* 4 Card Types Grid - Real Widget Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* Product Card */}
            <ProductCard
              title="Premium Wireless Headphones"
              description="High-quality sound with active noise cancellation"
              price="€149.99"
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
              stock={5}
              delay={0.2}
            />

            {/* Discount Card */}
            <DiscountCard
              code="WELCOME20"
              discount="20% OFF"
              expiryDays={5}
              usageLimit={100}
              delay={0.3}
            />

            {/* Tracking Card */}
            <TrackingCard
              orderNumber="12345"
              carrier="DHL Express"
              trackingNumber="1234567890"
              status="in-transit"
              expectedDelivery="Tomorrow"
              delay={0.4}
            />

            {/* Checkout Card */}
            <CheckoutCard
              products={[
                { name: "Wireless Headphones", quantity: 1, price: "€149.99" },
                { name: "USB-C Cable", quantity: 2, price: "€29.98" },
                { name: "Phone Case", quantity: 1, price: "€19.99" }
              ]}
              discount={20}
              total="€159.96"
              delay={0.5}
            />
          </div>

          {/* Bottom Benefit */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-purple-700">Visual = mehr Conversions</span> –{' '}
              Kunde klickt, kauft, fertig
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveChatBanner;
