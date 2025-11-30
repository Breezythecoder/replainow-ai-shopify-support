/**
 * ❓ FAQ SECTION - MODERN CARD REDESIGN
 * Glassmorphic cards with search functionality
 */

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/i18n";

const FAQSection = () => {
  const { t, getTranslation } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allFaqs = getTranslation("marketing.faq.items") || [];

  // Filter FAQs
  const faqs = searchQuery
    ? allFaqs.filter(
        (faq: any) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allFaqs;

  return (
    <div
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-32"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 60%)",
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("marketing.faq.title")}
          </h2>
          <p className="text-xl text-gray-700">{t("marketing.faq.subtitle")}</p>
        </div>

        {/* Search Input - Glassmorphic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </motion.div>

        {/* FAQ Accordion - Glassmorphic Cards */}
        <div className="space-y-4">
          {faqs.map((faq: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative overflow-hidden bg-white backdrop-blur-2xl rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-8 flex items-center justify-between group"
              >
                <span className="font-bold text-gray-900 pr-8 group-hover:text-purple-700 transition-colors text-lg">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-base pt-6">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
