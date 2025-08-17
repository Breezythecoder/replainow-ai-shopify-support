import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Come si integra ReplAInow in Shopify?",
    a: "Tramite installazione app. Dopo la connessione, ReplAInow estrae dati rilevanti (ordini, stato spedizione, prodotti) direttamente da Shopify in conformità GDPR per generare risposte.",
  },
  {
    q: "È conforme al GDPR?",
    a: "Sì. I dati vengono elaborati per scopi specifici. Puoi limitare o revocare l'accesso ai dati in qualsiasi momento. Archiviamo solo ciò che è necessario per la risposta.",
  },
  {
    q: "Quanto velocemente ottengo le risposte?",
    a: "In secondi. ReplAInow struttura la richiesta, controlla i dati Shopify appropriati e fornisce una risposta conforme al brand – solitamente in meno di 3 secondi.",
  },
  {
    q: "Posso personalizzare il tono del brand?",
    a: "Sì. Definisci le linee guida di stile (es. formale/informale, tonalità, emoji). Le risposte vengono automaticamente allineate di conseguenza.",
  },
  {
    q: "Come funziona la tariffazione?",
    a: "Piani trasparenti con limiti chiari, 14 giorni di prova gratuita senza carta di credito. Upgrade possibile in qualsiasi momento.",
  },
];

const FAQIt = () => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
    []
  );

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Domande frequenti
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Tutto quello che vuoi sapere prima di iniziare – breve e chiaro.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default FAQIt;