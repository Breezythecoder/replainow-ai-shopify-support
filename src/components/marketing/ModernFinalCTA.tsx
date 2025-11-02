import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { t } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernFinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-purple to-purple-700">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("ui.finalCta.title") || "Bereit, deine Customer Experience zu 10x-en?"}
        </motion.h2>
        
        <motion.p
          className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t("ui.finalCta.subtitle") || "Schließe dich über 50.000 Shopify-Händlern an, die AI nutzen, um Kunden zu begeistern und Umsätze zu steigern"}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href={OAUTH_URL}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-purple bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            {t("ui.finalCta.cta") || "7 Tage kostenlos testen"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#live-demo"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-purple transition-all duration-200"
          >
            {t("ui.finalCta.demo") || "Demo ansehen"}
          </a>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-purple-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Keine Kreditkarte erforderlich
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            5-Minuten Setup
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Jederzeit kündbar
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernFinalCTA;
