/**
 * 💬 TESTIMONIALS - GRID WITH METEORS REDESIGN
 * Modern grid layout with glassmorphic cards and shooting stars
 */

import { useTranslation } from "@/i18n";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSectionUltra = () => {
  const { t, getTranslation } = useTranslation();

  // Get testimonials from i18n
  const testimonials = getTranslation("marketing.testimonials.items") || [];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-purple-50/30 to-white py-32">
      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(139,92,246,0.12), transparent 60%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("marketing.testimonials.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("marketing.testimonials.subtitle")}
          </p>
        </motion.div>

        {/* GRID LAYOUT - 3 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative"
            >
              {/* Glassmorphic Card - BRIGHTER! */}
              <div className="relative overflow-hidden rounded-3xl p-8 bg-white/95 backdrop-blur-2xl border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 h-full flex flex-col shadow-xl hover:shadow-2xl group">
                {/* Subtle gradient orb */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-300"></div>

                {/* 5 Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-base leading-relaxed mb-8 flex-1 relative z-10">
                  {testimonial.text}
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-200 mb-6 relative z-10" />

                {/* Footer: Avatar + Name */}
                <div className="flex items-center gap-4 relative z-10">
                  {/* Avatar with glow */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-purple-500/30 rounded-full blur-sm"></div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-purple-500/30 shadow-xl"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSectionUltra;
