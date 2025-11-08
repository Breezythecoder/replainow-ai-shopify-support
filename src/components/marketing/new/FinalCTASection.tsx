import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Shield, Award, Users } from "lucide-react";

const FinalCTASection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Bereit, Ihren Support zu
            <br />
            <span className="font-semibold bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent">
              automatisieren?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Schließen Sie sich 1,247+ erfolgreichen Shopify-Händlern an, 
            die mit ReplAInow Zeit und Kosten sparen
          </p>

          {/* CTA Button */}
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-40"></div>
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-6 rounded-xl font-bold text-lg transition-all shadow-2xl"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>14 Tage kostenlos testen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </motion.button>
          </div>

          {/* Guarantee Text */}
          <p className="text-gray-700 text-sm mb-10 font-medium">
            Keine Kreditkarte erforderlich · 30-Tage Geld-zurück-Garantie · Jederzeit kündbar
          </p>

          {/* Trust Icons */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="font-medium">DSGVO-konform</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="font-medium">ISO 27001</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="font-medium">1.247+ Händler</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTASection;









