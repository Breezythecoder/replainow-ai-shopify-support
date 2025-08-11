import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wie integriert sich ReplAInow in Shopify?",
    a: "Per App‑Installation. Nach dem Verbinden zieht ReplAInow relevante Daten (Bestellungen, Versandstatus, Produkte) DSGVO‑konform direkt aus Shopify, um Antworten zu generieren.",
  },
  {
    q: "Ist das DSGVO‑konform?",
    a: "Ja. Daten werden zweckgebunden verarbeitet. Du kannst jederzeit Datenzugriffe einschränken oder entziehen. Wir speichern nur, was für die Antwort nötig ist.",
  },
  {
    q: "Wie schnell bekomme ich Antworten?",
    a: "In Sekunden. ReplAInow strukturiert die Anfrage, prüft passende Shopify‑Daten und liefert eine markenkonforme Antwort – meist unter 3 Sekunden.",
  },
  {
    q: "Kann ich den Ton der Marke anpassen?",
    a: "Ja. Du definierst Stilrichtlinien (z. B. Du/Sie, Tonalität, Emojis). Antworten werden automatisch daran ausgerichtet.",
  },
  {
    q: "Wie sieht die Preisgestaltung aus?",
    a: "Transparente Pläne mit klaren Limits, 14 Tage kostenlos testen ohne Kreditkarte. Upgrade jederzeit möglich.",
  },
];

const FAQ = () => {
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
          Häufige Fragen
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Alles, was du vor dem Start wissen möchtest – kurz und klar.
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

export default FAQ;
