import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Weber",
      role: "CEO, Fashion & Style GmbH",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      text: "ReplAInow hat unseren Support-Aufwand um 78% reduziert. Die KI versteht unsere Produkte perfekt!",
      metric: "€2.840/Monat gespart",
      color: "purple"
    },
    {
      name: "Sarah Klein",
      role: "Head of Operations, TechStore",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
      text: "Beste Investition 2024! Unsere Kunden bekommen jetzt rund um die Uhr perfekte Antworten.",
      metric: "92% Automatisierung",
      color: "violet"
    },
    {
      name: "Thomas Müller",
      role: "Owner, BeautyWorld",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
      text: "Die Integration war in 5 Minuten fertig. ROI nach 9 Tagen. Absolut beeindruckend!",
      metric: "ROI in 9 Tagen",
      color: "pink"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
            Vertraut von führenden <span className="font-semibold">Shopify-Händlern</span>
          </h3>
          <p className="text-lg text-gray-600">Echte Resultate von echten Geschäften</p>
        </div>

        {/* Testimonials Grid - 3D Floating Cards - KRASSER */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -16, rotateY: 6, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
              style={{ perspective: '1500px' }}
            >
              {/* VIEL STÄRKERER Glow */}
              <div className={`
                absolute -inset-2 rounded-3xl blur-2xl transition-all duration-500
                ${testimonial.color === 'violet' ? 'bg-gradient-to-br from-violet-500/0 to-blue-500/0 group-hover:from-violet-500/40 group-hover:to-blue-500/40' : ''}
                ${testimonial.color === 'purple' ? 'bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/40 group-hover:to-violet-500/40' : ''}
                ${testimonial.color === 'pink' ? 'bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/40 group-hover:to-purple-500/40' : ''}
              `}></div>
              
              {/* Glass card - STÄRKER */}
              <div className="relative rounded-3xl p-10 transform-gpu transition-all duration-500 group-hover:shadow-float-lg backface-hidden border-2 border-white/60 shadow-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)'
                }}
              >
                {/* Quote mark - large, subtle */}
                <div className={`
                  absolute top-4 right-4 text-7xl font-serif leading-none opacity-10
                  ${testimonial.color === 'violet' ? 'text-violet-600' : ''}
                  ${testimonial.color === 'purple' ? 'text-purple-600' : ''}
                  ${testimonial.color === 'pink' ? 'text-pink-600' : ''}
                `}>"</div>
                
                {/* Avatar - GRÖßER mit STÄRKEREM glow */}
                <div className="relative w-28 h-28 mb-8">
                  <div className={`
                    absolute -inset-4 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity
                    ${testimonial.color === 'violet' ? 'bg-gradient-to-br from-violet-500 to-blue-500' : ''}
                    ${testimonial.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-violet-500' : ''}
                    ${testimonial.color === 'pink' ? 'bg-gradient-to-br from-pink-500 to-purple-500' : ''}
                  `}></div>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="relative w-full h-full rounded-full border-4 border-white object-cover shadow-2xl ring-4 ring-white/50"
                  />
                </div>
                
                {/* Quote - GRÖßER */}
                <p className="text-gray-800 text-xl font-medium leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
                
                {/* Name & Role */}
                <div className="mb-5">
                  <h4 className="font-black text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 font-medium">{testimonial.role}</p>
                </div>
                
                {/* Metric - floating badge - GRÖßER */}
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderColor: testimonial.color === 'violet' ? 'rgb(139 92 246 / 0.4)' : testimonial.color === 'purple' ? 'rgb(168 85 247 / 0.4)' : 'rgb(236 72 153 / 0.4)'
                  }}
                >
                  <TrendingUp className={`
                    w-4 h-4
                    ${testimonial.color === 'violet' ? 'text-violet-600' : ''}
                    ${testimonial.color === 'purple' ? 'text-purple-600' : ''}
                    ${testimonial.color === 'pink' ? 'text-pink-600' : ''}
                  `} />
                  <span className="font-bold text-gray-900">{testimonial.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;









