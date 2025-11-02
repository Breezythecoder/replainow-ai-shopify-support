import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact2025 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FormSubmit.co integration
    try {
      await fetch('https://formsubmit.co/ajax/support@replainow.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Neue Kontaktanfrage von ${formData.name}`,
          _template: 'table'
        })
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Kontaktiere uns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen? Wir sind hier, um zu helfen. 
            <span className="text-primary-purple font-semibold"> Antworten innerhalb von 24 Stunden.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kontaktinformationen
            </h3>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">E-Mail Support</h4>
                <p className="text-gray-600">support@replainow.com</p>
                <p className="text-sm text-gray-500">Antworten innerhalb von 24h</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent-green" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Support Zeiten</h4>
                <p className="text-gray-600">Mo-Fr: 9:00 - 18:00 CET</p>
                <p className="text-sm text-gray-500">24/7 AI Support verfügbar</p>
              </div>
            </div>

            {/* Live Chat */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                <p className="text-gray-600">Direkt auf der Website</p>
                <p className="text-sm text-gray-500">AI antwortet sofort</p>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Häufige Fragen</h4>
              <div className="space-y-2">
                <a href="#faq" className="block text-primary-purple hover:underline">
                  → Wie funktioniert die Installation?
                </a>
                <a href="#faq" className="block text-primary-purple hover:underline">
                  → Welche Sprachen werden unterstützt?
                </a>
                <a href="#faq" className="block text-primary-purple hover:underline">
                  → Kann ich die AI trainieren?
                </a>
                <a href="#faq" className="block text-primary-purple hover:underline">
                  → Wie sicher sind meine Daten?
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nachricht senden
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-accent-green" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Nachricht gesendet!
                </h4>
                <p className="text-gray-600">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-primary-purple hover:underline font-semibold"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Max Mustermann"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@shop.de"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-purple focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-accent-green to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Nachricht senden
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact2025;

