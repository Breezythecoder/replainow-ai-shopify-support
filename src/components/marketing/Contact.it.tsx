import { Mail, MessageSquare, Clock } from "lucide-react";

const ContactIt = () => {
  return (
    <section id="contatto" aria-labelledby="contact-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-4xl">
        <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Hai domande? Contattaci!
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Il nostro team di supporto è qui per aiutarti. Riceverai una risposta entro 24 ore.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <article className="text-center p-6 rounded-lg bg-card border">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Per supporto tecnico e domande generali
            </p>
            <a 
              href="mailto:support@replainow.com" 
              className="text-primary hover:underline text-sm font-medium"
            >
              support@replainow.com
            </a>
          </article>

          <article className="text-center p-6 rounded-lg bg-card border">
            <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Chat dal vivo durante l'orario di ufficio
            </p>
            <p className="text-sm font-medium text-primary">
              Lun-Ven 9:00-18:00 CET
            </p>
          </article>

          <article className="text-center p-6 rounded-lg bg-card border">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Tempo di risposta</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Rispondiamo rapidamente
            </p>
            <p className="text-sm font-medium text-primary">
              Entro 24 ore
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactIt;