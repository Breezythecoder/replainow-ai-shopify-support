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
    <section className="py-32" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Echte Händler.
            <span style={{
              background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
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
              className="rounded-3xl p-8"
              style={{
                background: 'white',
                border: '2px solid rgba(107, 70, 193, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s ease'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 40px 100px rgba(107, 70, 193, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.05)';
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" style={{ color: '#6B46C1' }} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{t.quote}"
              </p>

              <div 
                className="inline-block px-4 py-2 rounded-lg mb-6 font-bold text-sm"
                style={{
                  background: 'rgba(107, 70, 193, 0.1)',
                  color: '#6B46C1'
                }}
              >
                {t.metric}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-ultra-black">{t.author}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
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

