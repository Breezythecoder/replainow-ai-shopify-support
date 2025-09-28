import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Hoe snel kan ik ReplAInow installeren?",
    answer: "De installatie duurt slechts 5 minuten. Na installatie vanuit de Shopify App Store, configureer je de AI-instellingen en kun je direct starten met geautomatiseerde klantenservice."
  },
  {
    question: "Is ReplAInow GDPR-conform?",
    answer: "Ja, ReplAInow is volledig GDPR-conform. Al je klantgegevens worden verwerkt op servers binnen de EU en we volgen strikte privacy-regels. Je behoudt altijd volledige controle over je data."
  },
  {
    question: "Kan de AI mijn merkidentiteit begrijpen?",
    answer: "Absoluut! De AI leert jouw merktoon, communicatiestijl en productkennis aan. Je kunt specifieke richtlijnen instellen zodat alle antwoorden consistent zijn met je merk."
  },
  {
    question: "Welke Shopify-gegevens kan de AI gebruiken?",
    answer: "De AI heeft toegang tot producten, bestellingen, klantgegevens, voorraad, verzendstatus en meer. Je bepaalt zelf welke data beschikbaar is voor de AI om nauwkeurige antwoorden te geven."
  },
  {
    question: "Wat als de AI een vraag niet kan beantwoorden?",
    answer: "Als de AI onzeker is, escaleert het automatisch naar je team. Je krijgt een melding en kunt handmatig overnemen. Zo blijft de kwaliteit altijd gegarandeerd."
  },
  {
    question: "Kan ik ReplAInow integreren met mijn bestaande systemen?",
    answer: "Ja, ReplAInow integreert met alle populaire kanalen: email, live chat, WhatsApp Business, Facebook Messenger, Instagram en meer. Ook custom integraties zijn mogelijk."
  },
  {
    question: "Hoe nauwkeurig zijn de AI-antwoorden?",
    answer: "Onze AI heeft een nauwkeurigheid van 94% bij het beantwoorden van klantenvragen. Door gebruik van real-time Shopify-data zijn antwoorden altijd up-to-date en relevant."
  },
  {
    question: "Kan ik de proefperiode verlengen?",
    answer: "De standaard proefperiode is 14 dagen. Als je meer tijd nodig hebt om ReplAInow volledig te test, neem dan contact met ons op voor een verlengde proefperiode."
  }
];

const FAQNl = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section aria-labelledby="faq-heading" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-xl text-muted-foreground">
              Alles wat je wilt weten over ReplAInow
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQNl;