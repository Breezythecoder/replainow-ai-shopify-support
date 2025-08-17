import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Comment ReplAInow s'intègre-t-il dans Shopify?",
    a: "Via installation d'app. Après connexion, ReplAInow extrait données pertinentes (commandes, statut livraison, produits) conforme RGPD directement de Shopify pour générer réponses.",
  },
  {
    q: "Est-ce conforme RGPD?",
    a: "Oui. Les données sont traitées à des fins spécifiques. Vous pouvez restreindre ou révoquer l'accès aux données à tout moment. Nous ne stockons que ce qui est nécessaire pour la réponse.",
  },
  {
    q: "À quelle vitesse j'obtiens des réponses?",
    a: "En secondes. ReplAInow structure la requête, vérifie les données Shopify correspondantes et livre une réponse conforme à la marque – généralement sous 3 secondes.",
  },
  {
    q: "Puis-je personnaliser le ton de marque?",
    a: "Oui. Vous définissez des directives de style (ex. formel/informel, tonalité, emojis). Les réponses s'alignent automatiquement avec elles.",
  },
  {
    q: "Comment sont les prix?",
    a: "Plans transparents avec limites claires, 14 jours d'essai gratuit sans carte de crédit. Upgrade possible à tout moment.",
  },
];

const FAQFr = () => {
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
          Questions Fréquentes
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Tout ce que vous voulez savoir avant de commencer – court et clair.
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

export default FAQFr;