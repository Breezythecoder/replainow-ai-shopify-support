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
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
            Vertraut von führenden <span className="font-semibold">Shopify-Händlern</span>
          </h3>
          <p className="text-lg text-gray-600">Echte Resultate von echten Geschäften</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Avatar + Info */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              {/* Metric Badge */}
              <div className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold
                ${testimonial.color === 'violet' ? 'bg-violet-50 text-violet-700' : ''}
                ${testimonial.color === 'purple' ? 'bg-purple-50 text-purple-700' : ''}
                ${testimonial.color === 'pink' ? 'bg-pink-50 text-pink-700' : ''}
              `}>
                <TrendingUp className="w-3 h-3" />
                {testimonial.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;









