import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { STORE_COUNT } from "@/config/siteStats";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { t } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHero = () => {
  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* New Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-700 font-medium">Neu</span>
              <span className="text-gray-600">WhatsApp Integration Live</span>
            </motion.div>
            
            {/* Headline - Clean & Premium */}
            <h1 className="text-5xl lg:text-6xl xl:text-hero font-bold text-gray-900 leading-tight">
              {t('marketing.hero.title')}
              <br />
              <span className="text-primary-purple">
                {t('marketing.hero.subtitle')}
              </span>
            </h1>
            
            {/* Subheadline - Benefits Focused */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              {t('marketing.hero.description')}
            </p>
            
            {/* CTAs - Green Gradient Primary */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={OAUTH_URL}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-accent-green to-emerald-600 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('marketing.hero.installButton')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#live-demo"
                onClick={(e) => handleNavClick(e, 'live-demo')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-800 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-purple hover:text-primary-purple transition-all duration-200 cursor-pointer"
              >
                Live Demo ansehen
              </a>
            </div>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">4.9/5</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 font-medium">{STORE_COUNT} Händler</span>
              <span className="text-gray-400">•</span>
              <span className="text-accent-green font-medium">✓ DSGVO-konform</span>
            </div>
          </motion.div>
          
          {/* Right Column - Dashboard Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Subtle Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
            
            {/* Main Dashboard Image */}
            <div className="relative">
              <img 
                src="/assets/193e41bc-af60-4d70-947d-659804d66b83.png" 
                alt="ReplAInow AI Support Dashboard zeigt intelligente Customer Support-Automatisierung mit GPT-4.1 Technologie für Shopify-Händler" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
                width="600"
                height="400"
                loading="eager"
                decoding="async"
              />
              
              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-3xl font-light text-primary-purple">98%</div>
                <div className="text-sm text-gray-600">AI-Genauigkeit</div>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <div className="text-3xl font-light text-accent-green">3s</div>
                <div className="text-sm text-gray-600">Antwortzeit</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Bar - Clean Design */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl font-light text-primary-purple mb-2">{STORE_COUNT}</div>
            <div className="text-sm text-gray-600 font-medium">Aktive Shops</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-accent-green mb-2">91%</div>
            <div className="text-sm text-gray-600 font-medium">Automatisiert</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-accent-blue mb-2">95+</div>
            <div className="text-sm text-gray-600 font-medium">Sprachen</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-accent-orange mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;
