import { motion } from "framer-motion";
import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";

const UltraSocialProof = () => {
  const testimonials = [
    {
      quote: "ReplAInow hat unseren Support revolutioniert. Die AI ist unfassbar gut!",
      author: "Lisa M.",
      role: "BeautyStore",
      metric: "15h/Woche gespart",
      image: testimonialLisa
    },
    {
      quote: "ROI innerhalb einer Woche. Conversion +23%. Einfach wow!",
      author: "Marco S.",
      role: "SportGear",
      metric: "+23% Conversion",
      image: testimonialMarco
    },
    {
      quote: "Beste Entscheidung ever. Kunden lieben die schnellen Antworten.",
      author: "Sarah K.",
      role: "FashionHub",
      metric: "91% Zufriedenheit",
      image: testimonialSarah
    }
  ];

  return (
    <section className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Echte Händler.
            <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}> Echte Ergebnisse.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-8"
              style={{
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#8B5CF6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" style={{ color: '#8B5CF6' }} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-base mb-6 italic leading-relaxed" style={{ color: '#111827' }}>
                "{t.quote}"
              </p>

              <div 
                className="inline-block px-4 py-2 rounded-lg mb-6 font-semibold text-sm"
                style={{
                  background: '#F5F3FF',
                  color: '#8B5CF6',
                  border: '1px solid #E5E7EB'
                }}
              >
                {t.metric}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: '#E5E7EB' }}>
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold" style={{ color: '#111827' }}>{t.author}</div>
                  <div className="text-sm" style={{ color: '#6B7280' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltraSocialProof;

