import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { STORE_COUNT } from "@/config/siteStats";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { t } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraHero = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #F5F3FF 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Centered */}
          <div className="text-center mb-16">
            {/* Clean Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: '#F5F3FF',
                border: '1px solid #E5E7EB'
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: '#8B5CF6' }}></div>
              <span className="font-bold text-sm" style={{ color: '#8B5CF6' }}>
                #1 AI Helpdesk für Shopify
              </span>
            </motion.div>

            {/* Clean Headline */}
            <motion.h1
              className="font-bold leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: 'clamp(48px, 7vw, 72px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span style={{ color: '#111827' }}>
                Verwandle Besucher in
              </span>
              <br />
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Käufer.
              </span>{" "}
              <span style={{ color: '#111827' }}>Sofort.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: '#6B7280' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Die intelligenteste AI für Shopify. Antwortet in &lt;1 Sekunde. 
              <span className="font-semibold" style={{ color: '#111827' }}> 24/7. In 95+ Sprachen.</span>
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={OAUTH_URL}
                className="clean-btn-primary group"
              >
                Jetzt kostenlos starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" style={{ color: '#8B5CF6' }} viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold" style={{ color: '#111827' }}>4.9/5</span>
                <span style={{ color: '#6B7280' }}>Shopify Rating</span>
              </div>
              <span style={{ color: '#D1D5DB' }}>•</span>
              <span className="font-semibold" style={{ color: '#111827' }}>{STORE_COUNT}+ Händler weltweit</span>
              <span style={{ color: '#D1D5DB' }}>•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: '#10B981' }}></div>
                <span style={{ color: '#111827' }}>DSGVO-konform</span>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Visual - Clean */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Clean Container */}
              <div 
                className="relative rounded-2xl p-2"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 24px 48px rgba(0, 0, 0, 0.12)'
                }}
              >
                <img
                  src="/assets/193e41bc-af60-4d70-947d-659804d66b83.png"
                  alt="ReplAInow AI Dashboard"
                  className="w-full h-auto rounded-xl"
                  loading="eager"
                />

                {/* Clean Floating Badge: 91% */}
                <motion.div
                  className="absolute -bottom-6 -left-6 px-8 py-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                    boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)'
                  }}
                >
                  <div className="text-4xl font-black text-white mb-1">91%</div>
                  <div className="text-sm font-medium" style={{ color: '#EDE9FE' }}>Automatisiert</div>
                </motion.div>

                {/* Clean Floating Badge: <1s */}
                <motion.div
                  className="absolute -top-6 -right-6 px-8 py-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <div className="text-4xl font-black text-white mb-1">&lt;1s</div>
                  <div className="text-sm font-medium" style={{ color: '#D1FAE5' }}>Antwortzeit</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar - Clean */}
          <motion.div
            className="mt-24 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl p-8"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className="text-center">
                <div className="text-5xl font-black mb-2" style={{ color: '#8B5CF6' }}>{STORE_COUNT}+</div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>Stores</div>
              </div>
              <div className="text-center md:border-l" style={{ borderColor: '#E5E7EB' }}>
                <div className="text-5xl font-black mb-2" style={{ color: '#8B5CF6' }}>95+</div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>Sprachen</div>
              </div>
              <div className="text-center md:border-l" style={{ borderColor: '#E5E7EB' }}>
                <div className="text-5xl font-black mb-2" style={{ color: '#8B5CF6' }}>24/7</div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>Support</div>
              </div>
              <div className="text-center md:border-l" style={{ borderColor: '#E5E7EB' }}>
                <div className="text-5xl font-black mb-2" style={{ color: '#8B5CF6' }}>4.9★</div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default UltraHero;

