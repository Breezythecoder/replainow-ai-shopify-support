import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQIt = () => {
  const faqs = [
    {
      question: "Quanto tempo richiede l'installazione?",
      answer: "L'installazione richiede meno di 2 minuti. ReplAInow è un'app ufficiale Shopify che si installa con un clic. Dopo l'installazione, l'AI è immediatamente pronta all'uso con i tuoi dati Shopify."
    },
    {
      question: "Come accede l'AI ai miei dati Shopify?",
      answer: "ReplAInow utilizza l'API sicura di Shopify per accedere ai dati di ordini, prodotti e clienti. Tutti i dati rimangono nel tuo Shopify e sono trasmessi in modo sicuro e criptato. Non archiviamo dati sensibili sui nostri server."
    },
    {
      question: "Posso controllare le risposte dell'AI prima dell'invio?",
      answer: "Sì, per impostazione predefinita tutte le risposte dell'AI vengono mostrate nell'admin Shopify per la revisione prima dell'invio. Puoi anche attivare l'invio automatico per determinate tipologie di richieste."
    },
    {
      question: "In quali lingue può rispondere l'AI?",
      answer: "ReplAInow supporta oltre 25 lingue, tra cui italiano, inglese, tedesco, francese, spagnolo, portoghese e molte altre. L'AI rileva automaticamente la lingua della richiesta e risponde nella stessa lingua."
    },
    {
      question: "È sicuro per il mio negozio Shopify?",
      answer: "Assolutamente sì. ReplAInow è completamente conforme a GDPR, utilizza crittografia SSL/TLS e autenticazione HMAC. Come app ufficiale Shopify, soddisfiamo tutti gli standard di sicurezza di Shopify. I tuoi dati rimangono sempre nel tuo Shopify."
    },
    {
      question: "Cosa succede se l'AI non sa come rispondere?",
      answer: "Se l'AI non è sicura di una risposta, ti inoltrerà automaticamente la richiesta per una risposta manuale. Puoi anche addestrare l'AI con domande frequenti specifiche per migliorare continuamente le risposte."
    },
    {
      question: "Posso annullare in qualsiasi momento?",
      answer: "Sì, puoi annullare il tuo abbonamento in qualsiasi momento nell'admin Shopify. Non ci sono periodi minimi di contratto o commissioni di cancellazione. La prova gratuita di 14 giorni può essere annullata senza costi."
    },
    {
      question: "Come funziona la prova gratuita?",
      answer: "La prova gratuita dura 14 giorni e include tutte le funzionalità del piano Professional. Non è richiesta nessuna carta di credito. Dopo la prova puoi scegliere un piano a pagamento o disinstallare l'app."
    }
  ];

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Domande frequenti
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Hai domande? Abbiamo le risposte. Ecco tutto quello che devi sapere su ReplAInow.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQIt;