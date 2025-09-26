import ModernNavbarIt from "@/components/marketing/ModernNavbar.it";
import ModernHeroIt from "@/components/marketing/ModernHero.it";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernComparison from "@/components/marketing/ModernComparison";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";
import FAQIt from "@/components/marketing/FAQ.it";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";

const IndexIt = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="it" />
      <AdvancedSEO
        title="ReplAInow – Helpdesk AI per Shopify | Automatizza Supporto con IA"
        description="Automatizza il supporto clienti Shopify con GPT-4 AI. ✅ 3sec tempo risposta ✅ 32+ lingue ✅ Conforme GDPR ✅ 75% più economico di Gorgias e Zendesk. Prova 14 giorni gratis!"
        keywords={[
          "Helpdesk AI Shopify",
          "Supporto AI Shopify", 
          "Supporto Clienti IA Shopify",
          "Supporto Automatizzato Shopify",
          "Integrazione GPT-4 Shopify",
          "Automazione Supporto Shopify",
          "Chatbot AI Shopify",
          "Alternativa Gorgias",
          "Alternativa Intercom",
          "Alternativa Zendesk"
        ]}
        canonicalUrl="https://replainow.com/it/"
        locale="it_IT"
        structuredData={structuredData}
        hreflang={{
          "it": "https://replainow.com/it/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "es": "https://replainow.com/es/",
          "fr": "https://replainow.com/fr/",
          "nl": "https://replainow.com/nl/",
          "pt": "https://replainow.com/pt/",
          "zh": "https://replainow.com/zh/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatizza il Supporto Shopify con l'AI"
        description="Rispondi alle richieste dei clienti in secondi: conforme GDPR, rispettoso del brand, dati Shopify diretti. Prova 14 giorni gratis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarIt />
      <main id="main-content" role="main" aria-label="Contenuto principale" className="pb-0">
        <ModernHeroIt />
        <ModernFeatures />
        <ModernComparison />
        <ModernPricing />
        <AIOptimizedFAQ />
        <ModernFinalCTA />
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
    </>
  );
};

export default IndexIt;