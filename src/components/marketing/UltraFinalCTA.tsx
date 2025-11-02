import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraFinalCTA = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)'
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
          style={{ color: '#FFFFFF' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bereit für mehr Umsatz?
        </motion.h2>

        <motion.p
          className="text-xl mb-12 max-w-3xl mx-auto"
          style={{ color: '#E9D5FF' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Über <span style={{ color: '#FFFFFF', fontWeight: 'semibold' }}>280+ Shopify-Händler</span> nutzen ReplAInow. Sei der Nächste.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={OAUTH_URL}
            className="inline-flex items-center px-10 py-5 text-lg font-semibold rounded-xl group"
            style={{
              background: '#FFFFFF',
              color: '#7C3AED',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            }}
          >
            Jetzt kostenlos starten
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6" style={{ color: '#E9D5FF' }}>
            ✓ <span style={{ color: '#FFFFFF' }}>7 Tage kostenlos</span> • ✓ <span style={{ color: '#FFFFFF' }}>Keine Kreditkarte</span> • ✓ <span style={{ color: '#FFFFFF' }}>5min Setup</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFinalCTA;

