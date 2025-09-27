import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // Send email using Formspree (free service for contact forms)
      const response = await fetch('https://formspree.io/f/xgvewbae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          message: data.message,
          _replyto: data.email,
          _subject: `Kontaktformular Nachricht von ${data.name}`
        })
      });

      if (response.ok) {
        toast({ title: "Danke!", description: "Wir melden uns zeitnah bei dir." });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ 
        title: "Fehler", 
        description: "Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder schreibe direkt an support@replainow.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl sm:text-5xl font-bold mb-6 text-slate-800">
            Kontakt
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Haben Sie Fragen? Wir sind hier, um zu helfen. 
            <span className="text-blue-600 font-semibold"> Antworten innerhalb von 24 Stunden.</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Kontaktinformationen</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">E-Mail Support</h4>
                      <p className="text-slate-600">support@replainow.com</p>
                      <p className="text-sm text-slate-500">Antworten innerhalb von 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Support Zeiten</h4>
                      <p className="text-slate-600">Mo-Fr: 9:00 - 18:00 CET</p>
                      <p className="text-sm text-slate-500">24/7 AI Support verfgbar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Live Chat</h4>
                      <p className="text-slate-600">Direkt auf der Website</p>
                      <p className="text-sm text-slate-500">AI antwortet sofort</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4">Hufige Fragen</h4>
                <div className="space-y-3">
                  <a href="#faq" className="block text-blue-600 hover:text-blue-800 text-sm">Wie funktioniert die Installation?</a>
                  <a href="#faq" className="block text-blue-600 hover:text-blue-800 text-sm">Welche Sprachen werden untersttzt?</a>
                  <a href="#faq" className="block text-blue-600 hover:text-blue-800 text-sm">Kann ich die AI trainieren?</a>
                  <a href="#faq" className="block text-blue-600 hover:text-blue-800 text-sm">Wie sicher sind meine Daten?</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Nachricht senden</h3>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Max Mustermann" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      E-Mail *
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="you@shop.de" 
                      required 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Nachricht *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Beschreiben Sie Ihr Anliegen..." 
                    rows={5} 
                    required 
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Wird gesendet...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
