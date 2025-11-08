import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, TrendingDown, TrendingUp, Sparkles } from "lucide-react";

const Banner3_BeforeAfter = () => {
  return (
    <div className="w-[1600px] h-[900px] bg-white flex items-center relative overflow-hidden">
      
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gradient-to-br from-red-50 to-orange-50"></div>
        <div className="w-1/2 bg-gradient-to-br from-green-50 to-emerald-50"></div>
      </div>

      {/* Divider with VS */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-2xl border-4 border-gray-200">
          <span className="text-2xl font-bold text-gray-900">VS</span>
        </div>
      </div>

      <div className="relative flex w-full h-full">
        
        {/* BEFORE (Left) */}
        <div className="w-1/2 flex items-center justify-center p-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-100 border border-red-200 rounded-full mb-6">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="font-bold text-red-900">OHNE ReplAInow</span>
              </div>
            </motion.div>

            <div className="space-y-6">
              {/* Stressed Agent Icon */}
              <div className="text-8xl mb-6">😰</div>
              
              <div className="space-y-4">
                <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-red-200">
                  <div className="flex items-center gap-4 text-red-900">
                    <TrendingUp className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-4xl font-bold">847</div>
                      <div className="text-sm">Support-Tickets/Monat</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-red-200">
                  <div className="flex items-center gap-4 text-red-900">
                    <AlertCircle className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-4xl font-bold">45 Min</div>
                      <div className="text-sm">Ø Antwortzeit</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-red-200">
                  <div className="flex items-center gap-4 text-red-900">
                    <TrendingDown className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-4xl font-bold">3 Agenten</div>
                      <div className="text-sm">Vollzeit benötigt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AFTER (Right) */}
        <div className="w-1/2 flex items-center justify-center p-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 border border-green-200 rounded-full mb-6">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-900">MIT ReplAInow</span>
              </div>
            </motion.div>

            <div className="space-y-6">
              {/* Happy Agent Icon */}
              <div className="text-8xl mb-6">🎉</div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="flex items-center gap-4 text-green-900">
                    <TrendingDown className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-4xl font-bold">110</div>
                      <div className="text-sm">Support-Tickets/Monat</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="flex items-center gap-4 text-green-900">
                    <Sparkles className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-4xl font-bold">&lt;2 Min</div>
                      <div className="text-sm">Ø Antwortzeit</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="flex items-center gap-4 text-green-900">
                    <TrendingUp className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-4xl font-bold">€3.200</div>
                      <div className="text-sm">Gespart/Monat</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-violet-600 text-white py-6">
        <div className="text-center">
          <p className="text-2xl font-bold">
            87% weniger Support-Tickets • 95% schnellere Antworten • ROI in 11 Tagen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner3_BeforeAfter;
