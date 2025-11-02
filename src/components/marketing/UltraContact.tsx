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
    <section id="contact" className="py-24" style={{ background: '#F9FAFB' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Lass uns <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>sprechen</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl p-12" style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
          }}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#111827' }}>Nachricht gesendet!</h3>
                <p style={{ color: '#6B7280' }}>Wir melden uns innerhalb von 24h</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#111827' }}>Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl transition-colors"
                    style={{
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#8B5CF6';
                      e.currentTarget.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                    }}
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#111827' }}>E-Mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl transition-colors"
                    style={{
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#8B5CF6';
                      e.currentTarget.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                    }}
                    placeholder="you@shop.de"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#111827' }}>Nachricht *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl resize-none transition-colors"
                    style={{
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#8B5CF6';
                      e.currentTarget.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                    }}
                    rows={5}
                    placeholder="Deine Frage..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-5 font-semibold text-white rounded-xl flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
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

