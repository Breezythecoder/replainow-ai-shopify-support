import { Mail, MessageCircle, Smartphone } from "lucide-react";

const MailAndChatIt = () => {
  return (
    <section id="channels" aria-labelledby="channels-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-6xl">
        <h2 id="channels-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Funziona con tutti i canali di supporto
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ReplAInow risponde automaticamente via email, chat, moduli di contatto e app mobile – ovunque arrivino le richieste dei clienti.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <article className="bg-card rounded-xl p-6 border shadow-sm text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Riceve automaticamente email di supporto e genera risposte complete con dati ordine e prodotto.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Gmail, Outlook, Zendesk</li>
              <li>• Integrazione IMAP/SMTP</li>
              <li>• Allegati e forwarding</li>
            </ul>
          </article>

          <article className="bg-card rounded-xl p-6 border shadow-sm text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Si integra con i sistemi di chat esistenti per risposte istantanee durante gli orari di ufficio.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Shopify Inbox</li>
              <li>• Intercom, Zendesk Chat</li>
              <li>• Widget chat personalizzati</li>
            </ul>
          </article>

          <article className="bg-card rounded-xl p-6 border shadow-sm text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">App Mobile</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Gestisci e monitora tutti i ticket di supporto direttamente dalla app mobile Shopify.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• App Shopify per iOS/Android</li>
              <li>• Notifiche push</li>
              <li>• Approvazione con un tocco</li>
            </ul>
          </article>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Configurazione automatica
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Integrazione senza interruzioni
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Sincronizzazione in tempo reale
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatIt;