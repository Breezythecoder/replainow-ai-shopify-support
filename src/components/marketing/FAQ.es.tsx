import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo se integra ReplAInow en Shopify?",
    a: "Vía instalación de app. Después de conectar, ReplAInow extrae datos relevantes (pedidos, estado de envío, productos) cumpliendo GDPR directamente de Shopify para generar respuestas.",
  },
  {
    q: "¿Cumple con GDPR?",
    a: "Sí. Los datos se procesan para propósitos específicos. Puedes restringir o revocar acceso a datos en cualquier momento. Solo almacenamos lo necesario para la respuesta.",
  },
  {
    q: "¿Qué tan rápido obtengo respuestas?",
    a: "En segundos. ReplAInow estructura la consulta, verifica datos coincidentes de Shopify y entrega una respuesta conforme a la marca – usualmente bajo 3 segundos.",
  },
  {
    q: "¿Puedo personalizar el tono de marca?",
    a: "Sí. Defines directrices de estilo (ej. formal/informal, tonalidad, emojis). Las respuestas se alinean automáticamente con ellas.",
  },
  {
    q: "¿Cómo es el precio?",
    a: "Planes transparentes con límites claros, 14 días de prueba gratis sin tarjeta de crédito. Upgrade posible en cualquier momento.",
  },
];

const FAQEs = () => {
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
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Todo lo que quieres saber antes de comenzar – corto y claro.
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

export default FAQEs;