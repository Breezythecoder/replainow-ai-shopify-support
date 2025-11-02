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
        background: 'linear-gradient(135deg, #0A0B0D 0%, #111218 100%)'
      }}
    >
      {/* NEON Purple-Cyan Mesh Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15), transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.1), transparent 50%)
            `
          }}
        />
      </div>

      {/* Floating NEON Orbs */}
      <div className="ultra-orb ultra-orb-purple-neon top-20 left-20"></div>
      <div className="ultra-orb ultra-orb-cyan bottom-20 right-20" style={{ animationDelay: '5s' }}></div>
      <div className="ultra-orb ultra-orb-purple-glow top-1/2 right-1/4" style={{ animationDelay: '10s', width: '400px', height: '400px' }}></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Centered */}
          <div className="text-center mb-16">
            {/* NEON Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'rgba(147, 51, 234, 0.15)',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                boxShadow: '0 0 30px rgba(147, 51, 234, 0.2)'
              }}
            >
              <div className="w-2 h-2 rounded-full pulse-glow-purple" style={{ background: '#9333EA' }}></div>
              <span className="ultra-text-neon-purple font-bold text-sm">
                #1 AI Helpdesk für Shopify
              </span>
            </motion.div>

            {/* MASSIVE NEON Headline */}
            <motion.h1
              className="font-black leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span style={{ color: '#FFFFFF' }}>
                Verwandle Besucher in
              </span>
              <br />
              <span
                className="ultra-text-shimmer inline-block"
                style={{
                  background: 'linear-gradient(90deg, #9333EA 0%, #E879F9 50%, #9333EA 100%)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer 3s linear infinite',
                  filter: 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.5))'
                }}
              >
                Käufer.
              </span>{" "}
              <span style={{ color: '#FFFFFF' }}>Sofort.</span>
            </motion.h1>

            {/* Subheadline - GLOW */}
            <motion.p
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: '#94A3B8' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Die intelligenteste AI für Shopify. Antwortet in &lt;1 Sekunde. 
              <span className="font-bold" style={{ color: '#E2E8F0' }}> 24/7. In 95+ Sprachen.</span>
            </motion.p>

            {/* CTA - Single, Bold */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={OAUTH_URL}
                className="ultra-btn-primary group inline-flex items-center justify-center"
              >
                Jetzt kostenlos starten
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust Line - NEON */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" style={{ color: '#9333EA' }} viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold" style={{ color: '#FFFFFF' }}>4.9/5</span>
                <span style={{ color: '#94A3B8' }}>Shopify Rating</span>
              </div>
              <span style={{ color: '#475569' }}>•</span>
              <span className="font-semibold" style={{ color: '#E2E8F0' }}>{STORE_COUNT}+ Händler weltweit</span>
              <span style={{ color: '#475569' }}>•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full pulse-glow-cyan" style={{ background: '#06B6D4' }}></div>
                <span style={{ color: '#E2E8F0' }}>DSGVO-konform</span>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Visual - DARK GLASS NEON */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* NEON GLOW Behind - Multi-Layer */}
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)
                  `
                }}
              ></div>

              {/* DARK GLASS Container */}
              <div 
                className="relative rounded-3xl p-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '2px solid rgba(147, 51, 234, 0.3)',
                  boxShadow: `
                    0 40px 120px rgba(147, 51, 234, 0.3),
                    0 0 80px rgba(6, 182, 212, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `
                }}
              >
                <img
                  src="/assets/193e41bc-af60-4d70-947d-659804d66b83.png"
                  alt="ReplAInow AI Dashboard"
                  className="w-full h-auto rounded-2xl"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                  loading="eager"
                />

                {/* NEON Floating Badge: 91% - Purple */}
                <motion.div
                  className="absolute -bottom-6 -left-6 px-8 py-4 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  style={{
                    background: 'linear-gradient(135deg, #9333EA 0%, #7C3AED 100%)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: `
                      0 20px 60px rgba(147, 51, 234, 0.5),
                      0 0 40px rgba(147, 51, 234, 0.4)
                    `
                  }}
                >
                  <div className="text-4xl font-black text-white mb-1">91%</div>
                  <div className="text-sm font-medium" style={{ color: '#E9D5FF' }}>Automatisiert</div>
                </motion.div>

                {/* NEON Floating Badge: <1s - Cyan */}
                <motion.div
                  className="absolute -top-6 -right-6 px-8 py-4 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  style={{
                    background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: `
                      0 20px 60px rgba(6, 182, 212, 0.5),
                      0 0 40px rgba(6, 182, 212, 0.4)
                    `
                  }}
                >
                  <div className="text-4xl font-black text-white mb-1">&lt;1s</div>
                  <div className="text-sm font-medium" style={{ color: '#CFFAFE' }}>Antwortzeit</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar - DARK GLASS NEON */}
          <motion.div
            className="mt-24 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.4),
                  0 0 40px rgba(147, 51, 234, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.05)
                `
              }}
            >
              <div className="text-center">
                <div className="text-5xl font-black mb-2 ultra-text-neon-purple">{STORE_COUNT}+</div>
                <div className="text-sm font-medium" style={{ color: '#94A3B8' }}>Stores</div>
              </div>
              <div className="text-center md:border-l" style={{ borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                <div className="text-5xl font-black mb-2 ultra-text-cyan">95+</div>
                <div className="text-sm font-medium" style={{ color: '#94A3B8' }}>Sprachen</div>
              </div>
              <div className="text-center md:border-l" style={{ borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                <div className="text-5xl font-black mb-2 ultra-text-neon-purple">24/7</div>
                <div className="text-sm font-medium" style={{ color: '#94A3B8' }}>Support</div>
              </div>
              <div className="text-center md:border-l" style={{ borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                <div className="text-5xl font-black mb-2 ultra-text-fusion">4.9★</div>
                <div className="text-sm font-medium" style={{ color: '#94A3B8' }}>Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default UltraHero;

