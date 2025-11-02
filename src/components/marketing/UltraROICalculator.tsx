import { motion } from "framer-motion";
import { useState } from "react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraROICalculator = () => {
  const [visitors, setVisitors] = useState(10000);
  const [avgOrder, setAvgOrder] = useState(75);

  const additionalRevenue = Math.round(visitors * 0.023 * avgOrder + (visitors * 0.7 * 0.25) * avgOrder);
  const roi = Math.round((additionalRevenue / 49) * 100);

  return (
    <section className="py-32" style={{ background: '#111218' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6" style={{ color: '#FFFFFF' }}>
            Dein <span className="ultra-text-neon-purple" style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
            }}>ROI</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '2px solid rgba(147, 51, 234, 0.3)',
            boxShadow: `
              0 40px 120px rgba(147, 51, 234, 0.4),
              0 0 80px rgba(147, 51, 234, 0.3)
            `
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

              {/* Results - NEON GLASS */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-8 rounded-2xl" style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 30px rgba(147, 51, 234, 0.2)'
                }}>
                  <div className="text-5xl font-black text-white mb-2">€{additionalRevenue.toLocaleString('de-DE')}</div>
                  <div style={{ color: '#E9D5FF' }}>Zusätzlicher Umsatz/Monat</div>
                </div>
                <div className="text-center p-8 rounded-2xl" style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)'
                }}>
                  <div className="text-5xl font-black text-white mb-2">{roi}%</div>
                  <div style={{ color: '#CFFAFE' }}>ROI</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href={OAUTH_URL}
                  className="inline-block px-10 py-4 font-bold rounded-xl transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)';
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

