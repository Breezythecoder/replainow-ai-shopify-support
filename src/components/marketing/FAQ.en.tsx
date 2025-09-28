import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { t, getLocaleFromPath } from "@/i18n";

const FAQ = () => {
  // Get current locale from URL path
  const locale = getLocaleFromPath(window.location.pathname);

  const faqs = [
    {
      q: t('ui.faq.questions.0.q', locale),
      a: t('ui.faq.questions.0.a', locale),
    },
    {
      q: t('ui.faq.questions.1.q', locale),
      a: t('ui.faq.questions.1.a', locale),
    },
    {
      q: t('ui.faq.questions.2.q', locale),
      a: t('ui.faq.questions.2.a', locale),
    },
    {
      q: t('ui.faq.questions.3.q', locale),
      a: t('ui.faq.questions.3.a', locale),
    },
    {
      q: t('ui.faq.questions.4.q', locale),
      a: t('ui.faq.questions.4.a', locale),
    },
  ];

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
          {t('ui.faq.title', locale)}
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t('ui.faq.subtitle', locale)}
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
