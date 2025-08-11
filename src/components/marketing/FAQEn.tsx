import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does ReplAInow integrate with Shopify?", a: "Via App installation. After connecting, ReplAInow pulls relevant data (orders, shipping status, products) directly from Shopify in a GDPR‑compliant way to generate replies." },
  { q: "Is it GDPR‑compliant?", a: "Yes. Data is processed for its purpose only. You can restrict or revoke access at any time. We store only what is necessary for the reply." },
  { q: "How fast are replies?", a: "Seconds. ReplAInow structures the request, checks the right Shopify data and delivers an on‑brand reply — usually under 3 seconds." },
  { q: "Can I adapt the brand tone?", a: "Yes. You define style guidelines (e.g. you/we, formal/informal, emojis). Replies are aligned automatically." },
  { q: "What about pricing?", a: "Transparent plans with clear limits, 14‑day free trial without credit card. Upgrade anytime." },
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
          Frequently asked questions
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Everything you want to know before starting — short and clear.
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
};

export default FAQEn;
