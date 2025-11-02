import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

const UltraContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Lass uns <span style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>sprechen</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl p-12" style={{
            background: 'white',
            border: '2px solid rgba(107, 70, 193, 0.1)',
            boxShadow: '0 40px 100px rgba(0, 0, 0, 0.05)'
          }}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-ultra-black mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-600">Wir melden uns innerhalb von 24h</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold text-ultra-black mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-colors"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-ultra-black mb-2">E-Mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-colors"
                    placeholder="you@shop.de"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-ultra-black mb-2">Nachricht *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-colors resize-none"
                    rows={5}
                    placeholder="Deine Frage..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-5 font-bold text-white rounded-xl flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <Send className="w-5 h-5" />
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltraContact;

