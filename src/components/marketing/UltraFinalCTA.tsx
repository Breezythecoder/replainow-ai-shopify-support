import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraFinalCTA = () => {
  return (
    <section 
      className="py-32 relative overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #0A0B0D 0%, #111218 100%)'
      }}
    >
      {/* NEON Purple-Cyan Mesh */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.2), transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15), transparent 50%)
            `
          }}
        />
      </div>

      {/* NEON Floating Orbs */}
      <div className="ultra-orb ultra-orb-purple-neon top-20 left-20"></div>
      <div className="ultra-orb ultra-orb-cyan bottom-20 right-20" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-5xl lg:text-7xl font-black mb-8 leading-tight"
          style={{ color: '#FFFFFF' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bereit für mehr 
          <span className="ultra-text-neon-purple" style={{
            background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.5))'
          }}> Umsatz</span>?
        </motion.h2>

        <motion.p
          className="text-2xl mb-12 max-w-3xl mx-auto"
          style={{ color: '#94A3B8' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Über <span style={{ color: '#E2E8F0', fontWeight: 'bold' }}>280+ Shopify-Händler</span> nutzen ReplAInow. Sei der Nächste.
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
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: 'white',
              boxShadow: `
                0 20px 60px rgba(16, 185, 129, 0.5),
                0 0 80px rgba(16, 185, 129, 0.3)
              `,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
              e.currentTarget.style.boxShadow = `
                0 30px 80px rgba(16, 185, 129, 0.6),
                0 0 120px rgba(16, 185, 129, 0.4)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = `
                0 20px 60px rgba(16, 185, 129, 0.5),
                0 0 80px rgba(16, 185, 129, 0.3)
              `;
            }}
          >
            Jetzt kostenlos starten
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6" style={{ color: '#94A3B8' }}>
            ✓ <span style={{ color: '#E2E8F0' }}>7 Tage kostenlos</span> • ✓ <span style={{ color: '#E2E8F0' }}>Keine Kreditkarte</span> • ✓ <span style={{ color: '#E2E8F0' }}>5min Setup</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFinalCTA;

