import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraFinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 50%, #A78BFA 100%)'
    }}>
      {/* Animated Purple Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bereit für mehr Umsatz?
        </motion.h2>

        <motion.p
          className="text-2xl text-purple-100 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Über 280+ Shopify-Händler nutzen ReplAInow. Sei der Nächste.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={OAUTH_URL}
            className="inline-flex items-center px-12 py-6 text-xl font-black rounded-2xl group"
            style={{
              background: 'white',
              color: '#6B46C1',
              boxShadow: '0 20px 60px rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.3)';
            }}
          >
            Jetzt kostenlos starten
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-purple-200">
            ✓ 7 Tage kostenlos • ✓ Keine Kreditkarte • ✓ 5min Setup
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFinalCTA;

