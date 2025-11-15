import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import { Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // Handle form submission (Web3Forms API)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      // Create FormData with Web3Forms access key
      const formData = new FormData();
      formData.append("access_key", "db4d28c6-0c42-4ca4-9ee8-eb048da17dcb");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("subject", `Kontaktformular Nachricht von ${name}`);
      formData.append("from_name", "ReplAInow Website");
      
      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Success! Email sent
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          setIsSuccess(false);
        }, 3000);
      } else {
        // Error from API
        setIsSubmitting(false);
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      }
    } catch (error) {
      // Network error
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Kontakt – ReplAInow | AI-Helpdesk für Shopify</title>
        <meta name="description" content="Kontaktieren Sie ReplAInow für Fragen zu unserem AI-Helpdesk für Shopify. E-Mail: support@replainow.com. Antworten innerhalb von 24 Stunden." />
        <meta name="keywords" content="ReplAInow Kontakt, Support, Helpdesk Kontakt, Shopify AI Support" />
        <link rel="canonical" href="https://replainow.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kontakt – ReplAInow" />
        <meta property="og:description" content="Kontaktieren Sie uns für Fragen zu unserem AI-Helpdesk für Shopify. Schnelle Antworten innerhalb von 24h." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://replainow.com/contact" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kontakt – ReplAInow" />
        <meta name="twitter:description" content="Kontaktieren Sie uns für Fragen zu unserem AI-Helpdesk." />
        
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <LegalNavbar />
      
      <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                {t('common.contact.title')}
              </h1>
              <p className="text-xl text-gray-700 mb-2">
                {t('common.contact.subtitle')}
              </p>
              <p className="text-lg text-purple-700 font-semibold">
                {t('common.contact.subtitleHighlight')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info + Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Left: Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    {t('common.contact.info.title')}
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {t('common.contact.info.email.title')}
                        </h3>
                        <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 font-semibold">
                          {t('common.contact.info.email.value')}
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          {t('common.contact.info.email.note')}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hours */}
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {t('common.contact.info.hours.title')}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {t('common.contact.info.hours.value')}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {t('common.contact.info.hours.note')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Contact Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    {t('common.contact.form.title')}
                  </h2>
                  
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {t('common.contact.toast.success.title')}
                      </h3>
                      <p className="text-gray-600">
                        {t('common.contact.toast.success.description')}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                          {t('common.contact.form.fields.name')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder={t('common.contact.form.placeholders.name')}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          {t('common.contact.form.fields.email')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder={t('common.contact.form.placeholders.email')}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                          {t('common.contact.form.fields.message')}
                        </label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={6}
                          placeholder={t('common.contact.form.placeholders.message')}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        ></textarea>
                      </div>
                      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            {t('common.contact.form.submitting')}
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {t('common.contact.form.submit')}
                          </>
                        )}
                      </button>
                      
                      {/* Error Message */}
                      {isError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                          <p className="text-red-700 font-semibold mb-1">
                            {t('common.contact.toast.error.title')}
                          </p>
                          <p className="text-sm text-red-600">
                            {t('common.contact.toast.error.description')}
                          </p>
                        </div>
                      )}
                      
                      <p className="text-xs text-gray-500 text-center">
                        Ihre Nachricht wird direkt an support@replainow.com gesendet.
                      </p>
                    </form>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-violet-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Bereit für KI-gestützten Kundensupport?
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Installieren Sie ReplAInow in 60 Sekunden. Keine Kreditkarte erforderlich.
              </p>
              <a
                href="https://apps.shopify.com/replainow"
                className="inline-flex items-center gap-3 bg-white text-purple-700 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                14 Tage kostenlos testen
                <span className="text-2xl">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <UltraFooter />
    </>
  );
};

export default Contact;

