import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como ReplAInow se integra ao Shopify?",
    a: "Via instalação de app. Após conectar, ReplAInow extrai dados relevantes (pedidos, status de entrega, produtos) conforme GDPR diretamente do Shopify para gerar respostas.",
  },
  {
    q: "É conforme GDPR?",
    a: "Sim. Os dados são processados para propósitos específicos. Você pode restringir ou revogar acesso aos dados a qualquer momento. Armazenamos apenas o que é necessário para a resposta.",
  },
  {
    q: "Quão rápido obtenho respostas?",
    a: "Em segundos. ReplAInow estrutura a consulta, verifica dados correspondentes do Shopify e entrega uma resposta conforme à marca – geralmente em menos de 3 segundos.",
  },
  {
    q: "Posso personalizar o tom da marca?",
    a: "Sim. Você define diretrizes de estilo (ex. formal/informal, tonalidade, emojis). As respostas se alinham automaticamente com elas.",
  },
  {
    q: "Como é o preço?",
    a: "Planos transparentes com limites claros, 14 dias de teste grátis sem cartão de crédito. Upgrade possível a qualquer momento.",
  },
];

const FAQPt = () => {
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
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Tudo o que você quer saber antes de começar – curto e claro.
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

export default FAQPt;