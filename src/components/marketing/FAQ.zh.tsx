import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQZh = () => {
  const faqs = [
    {
      question: "ReplAInowGDPR",
      answer: "GDPR"
    },
    {
      question: "AI",
      answer: "ReplAInowAI"
    },
    {
      question: "",
      answer: "2''Shopify App StoreAI24"
    },
    {
      question: "AI",
      answer: "ReplAInow"
    },
    {
      question: "AI",
      answer: "AIAI"
    },
    {
      question: "",
      answer: "ReplAInowAI"
    },
    {
      question: "",
      answer: "14AIShopify"
    },
    {
      question: "",
      answer: "ShopifyAIGDPR"
    }
  ];

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          ReplAInow
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 py-2 bg-card"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQZh;