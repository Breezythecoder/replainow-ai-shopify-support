import { motion } from "framer-motion";
import { useState } from "react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraROICalculator = () => {
  const [visitors, setVisitors] = useState(10000);
  const [avgOrder, setAvgOrder] = useState(75);

  const additionalRevenue = Math.round(visitors * 0.023 * avgOrder + (visitors * 0.7 * 0.25) * avgOrder);
  const roi = Math.round((additionalRevenue / 49) * 100);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Dein <span style={{
              background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>ROI</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden" style={{
            background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
            boxShadow: '0 40px 100px rgba(107, 70, 193, 0.3)'
          }}>
            <div className="p-12">
              {/* Sliders */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className="block text-white font-semibold mb-4">Besucher/Monat</label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-4xl font-black text-white mt-4">{visitors.toLocaleString('de-DE')}</div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-4">Ø Bestellwert</label>
                  <input
                    type="range"
                    min="25"
                    max="500"
                    step="5"
                    value={avgOrder}
                    onChange={(e) => setAvgOrder(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-4xl font-black text-white mt-4">€{avgOrder}</div>
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-8 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <div className="text-5xl font-black text-white mb-2">€{additionalRevenue.toLocaleString('de-DE')}</div>
                  <div className="text-purple-200">Zusätzlicher Umsatz/Monat</div>
                </div>
                <div className="text-center p-8 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <div className="text-5xl font-black text-white mb-2">{roi}%</div>
                  <div className="text-purple-200">ROI</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href={OAUTH_URL}
                  className="inline-block px-10 py-4 font-bold rounded-xl"
                  style={{
                    background: 'white',
                    color: '#6B46C1',
                    boxShadow: '0 8px 20px rgba(255, 255, 255, 0.2)'
                  }}
                >
                  Jetzt kostenlos starten
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltraROICalculator;

