import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does ReplAInow integrate into Shopify?",
    a: "Via app installation. After connecting, ReplAInow pulls relevant data (orders, shipping status, products) GDPR-compliant directly from Shopify to generate responses.",
  },
  {
    q: "Is this GDPR compliant?",
    a: "Yes. Data is processed for specific purposes. You can restrict or revoke data access at any time. We only store what is necessary for the response.",
  },
  {
    q: "How fast do I get responses?",
    a: "In seconds. ReplAInow structures the inquiry, checks matching Shopify data and delivers a brand-compliant response – usually under 3 seconds.",
  },
  {
    q: "Can I customize the brand tone?",
    a: "Yes. You define style guidelines (e.g. formal/informal, tonality, emojis). Responses are automatically aligned to them.",
  },
  {
    q: "What does the pricing look like?",
    a: "Transparent plans with clear limits, 14 days free trial without credit card. Upgrade possible at any time.",
  },
];

const FAQEn = () => {
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
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Everything you want to know before getting started – short and clear.
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

export default FAQEn;