import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { useState } from "react";

const ROICalculator2025 = () => {
  const [visitors, setVisitors] = useState(10000);
  const [avgOrder, setAvgOrder] = useState(75);

  // Calculations
  const conversionBoost = 0.023; // 2.3% conversion boost
  const cartRecovery = 0.25; // 25% cart recovery
  const abandonmentRate = 0.70; // 70% abandon carts
  
  const additionalSales = visitors * conversionBoost;
  const recoveredCarts = (visitors * abandonmentRate) * cartRecovery;
  const totalNewOrders = additionalSales + recoveredCarts;
  const additionalRevenue = Math.round(totalNewOrders * avgOrder);
  const roi = Math.round((additionalRevenue / 49) * 100); // Based on Growth plan €49
  const paybackDays = Math.round(49 / (additionalRevenue / 30));

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-4">
            <span className="text-accent-green font-semibold flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              ROI RECHNER
            </span>
          </div>
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Berechne deine Umsatzsteigerung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sieh genau, wie viel mehr du mit ReplAInow verdienen kannst
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Input Section */}
            <div className="p-8 lg:p-12 bg-white border-b-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Visitors Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Monatliche Besucher
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value))}
                    className="w-full h-3 bg-purple-100 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="mt-3 text-center">
                    <span className="text-4xl font-bold text-primary-purple">
                      {visitors.toLocaleString('de-DE')}
                    </span>
                    <span className="text-gray-600 ml-2">Besucher/Monat</span>
                  </div>
                </div>

                {/* Average Order Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Durchschnittlicher Bestellwert
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="500"
                    step="5"
                    value={avgOrder}
                    onChange={(e) => setAvgOrder(Number(e.target.value))}
                    className="w-full h-3 bg-green-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-3 text-center">
                    <span className="text-4xl font-bold text-accent-green">
                      €{avgOrder}
                    </span>
                    <span className="text-gray-600 ml-2">pro Bestellung</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-primary-purple to-purple-700 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Deine Ergebnisse mit ReplAInow:
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Additional Revenue */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
                  <DollarSign className="w-8 h-8 mx-auto mb-3 text-green-300" />
                  <div className="text-3xl font-bold mb-2">
                    €{additionalRevenue.toLocaleString('de-DE')}
                  </div>
                  <div className="text-purple-100">Zusätzlicher Umsatz/Monat</div>
                </div>

                {/* ROI */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                  <div className="text-3xl font-bold mb-2">{roi}%</div>
                  <div className="text-purple-100">ROI (Return on Investment)</div>
                </div>

                {/* Payback Period */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
                  <Calculator className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <div className="text-3xl font-bold mb-2">{paybackDays}</div>
                  <div className="text-purple-100">Tage bis Break-Even</div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-bold mb-4 text-white">Berechnungsdetails:</h4>
                <div className="space-y-2 text-purple-100">
                  <div className="flex justify-between">
                    <span>Zusätzliche Conversions durch AI:</span>
                    <span className="font-semibold text-white">+{Math.round(additionalSales)} Verkäufe</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zurückgewonnene Warenkörbe:</span>
                    <span className="font-semibold text-white">+{Math.round(recoveredCarts)} Verkäufe</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2">
                    <span>Gesamt neue Bestellungen:</span>
                    <span className="font-semibold text-white">{Math.round(totalNewOrders)}/Monat</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kosten ReplAInow (Growth):</span>
                    <span className="font-semibold text-white">€49/Monat</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-purple font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  Jetzt kostenlos testen
                </a>
                <p className="mt-4 text-sm text-purple-200">
                  ✓ 7 Tage kostenlos • ✓ Keine Kreditkarte • ✓ Jederzeit kündbar
                </p>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <p className="text-center mt-8 text-sm text-gray-500">
            * Basierend auf durchschnittlichen Daten von 280+ Shopify-Händlern. 
            Individuelle Ergebnisse können variieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator2025;

