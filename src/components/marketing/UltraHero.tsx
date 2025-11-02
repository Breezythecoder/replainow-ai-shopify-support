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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* ULTRA Purple Mesh Background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(107, 70, 193, 0.15) 0%, transparent 50%),
              radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(at 100% 100%, rgba(167, 139, 250, 0.15) 0%, transparent 50%),
              radial-gradient(at 0% 100%, rgba(107, 70, 193, 0.15) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Floating Purple Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animation: 'float-orb 20s ease-in-out infinite' }}></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-300/15 rounded-full blur-3xl" style={{ animation: 'float-orb 25s ease-in-out infinite', animationDelay: '5s' }}></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Centered */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'rgba(107, 70, 193, 0.1)',
                border: '1px solid rgba(107, 70, 193, 0.2)'
              }}
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-purple-900 font-semibold text-sm">
                #1 AI Helpdesk für Shopify
              </span>
            </motion.div>

            {/* ULTRA Bold Headline */}
            <motion.h1
              className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-ultra-black">
                Verwandle Besucher in
              </span>
              <br />
              <span
                className="ultra-text-shimmer inline-block"
                style={{
                  background: 'linear-gradient(90deg, #6B46C1 0%, #A78BFA 50%, #6B46C1 100%)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer 3s linear infinite'
                }}
              >
                Käufer.
              </span>{" "}
              <span className="text-ultra-black">Sofort.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Die intelligenteste AI für Shopify. Antwortet in &lt;1 Sekunde. 
              <span className="font-bold text-ultra-black"> 24/7. In 95+ Sprachen.</span>
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

            {/* Trust Line - Minimal */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-purple-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-ultra-black">4.9/5</span>
                <span className="text-gray-600">Shopify Rating</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-700 font-semibold">{STORE_COUNT}+ Händler weltweit</span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">DSGVO-konform</span>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Visual - Glass Card */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Purple Glow Behind */}
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(107, 70, 193, 0.2) 0%, transparent 70%)'
                }}
              ></div>

              {/* Glass Card Container */}
              <div 
                className="relative rounded-3xl p-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(107, 70, 193, 0.15)',
                  boxShadow: '0 40px 100px rgba(107, 70, 193, 0.2)'
                }}
              >
                <img
                  src="/assets/193e41bc-af60-4d70-947d-659804d66b83.png"
                  alt="ReplAInow AI Dashboard"
                  className="w-full h-auto rounded-2xl"
                  loading="eager"
                />

                {/* Floating Stats - Purple Glass */}
                <motion.div
                  className="absolute -bottom-6 -left-6 px-8 py-4 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  style={{
                    background: 'rgba(107, 70, 193, 0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(107, 70, 193, 0.4)'
                  }}
                >
                  <div className="text-4xl font-black text-white mb-1">91%</div>
                  <div className="text-sm text-purple-100 font-medium">Automatisiert</div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 px-8 py-4 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  style={{
                    background: 'rgba(16, 185, 129, 0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  <div className="text-4xl font-black text-white mb-1">&lt;1s</div>
                  <div className="text-sm text-green-50 font-medium">Antwortzeit</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar - Purple Minimal */}
          <motion.div
            className="mt-24 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div 
              className="grid grid-cols-4 gap-8 rounded-2xl p-8"
              style={{
                background: 'rgba(107, 70, 193, 0.05)',
                border: '1px solid rgba(107, 70, 193, 0.1)'
              }}
            >
              <div className="text-center">
                <div className="text-5xl font-black text-purple-600 mb-2">{STORE_COUNT}+</div>
                <div className="text-sm text-gray-600 font-medium">Stores</div>
              </div>
              <div className="text-center border-l border-purple-200">
                <div className="text-5xl font-black text-purple-600 mb-2">95+</div>
                <div className="text-sm text-gray-600 font-medium">Sprachen</div>
              </div>
              <div className="text-center border-l border-purple-200">
                <div className="text-5xl font-black text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
              <div className="text-center border-l border-purple-200">
                <div className="text-5xl font-black text-purple-600 mb-2">4.9★</div>
                <div className="text-sm text-gray-600 font-medium">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .ultra-btn-primary {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          padding: 20px 48px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          box-shadow: 
            0 10px 30px rgba(16, 185, 129, 0.3),
            0 0 60px rgba(16, 185, 129, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
        }

        .ultra-btn-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(16, 185, 129, 0.4),
            0 0 80px rgba(16, 185, 129, 0.3);
        }
      `}</style>
    </section>
  );
};

export default UltraHero;

