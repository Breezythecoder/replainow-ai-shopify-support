import ModernNavbarPt from "@/components/marketing/ModernNavbar.pt";
import ModernHeroPt from "@/components/marketing/ModernHero.pt";
import ModernProblemSolutionPt from "@/components/marketing/ModernProblemSolution.pt";
import ModernFeaturesPt from "@/components/marketing/ModernFeatures.pt";
import ModernHowItWorksPt from "@/components/marketing/ModernHowItWorks.pt";
import ModernLiveDemoPt from "@/components/marketing/ModernLiveDemo.pt";
import ModernSocialProofPt from "@/components/marketing/ModernSocialProof.pt";
import ModernPricingPt from "@/components/marketing/ModernPricing.pt";
import ModernFinalCTAPt from "@/components/marketing/ModernFinalCTA.pt";
import ContactPt from "@/components/marketing/Contact.pt";
import FooterPt from "@/components/marketing/Footer.pt";
import SEO from "@/components/SEO";
import FAQPt from "@/components/marketing/FAQ.pt";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";

const IndexPt = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="pt" />
      <AdvancedSEO
        title="ReplAInow – Helpdesk AI para Shopify | Automatize Suporte com IA"
        description="Automatize seu suporte ao cliente Shopify com GPT-4 IA. ✅ 3seg tempo resposta ✅ 32+ idiomas ✅ Conforme LGPD ✅ 75% mais barato que Gorgias e Zendesk. Teste 14 dias grátis!"
        keywords={[
          "Helpdesk AI Shopify",
          "Suporte AI Shopify", 
          "Suporte Cliente IA Shopify",
          "Suporte Automatizado Shopify",
          "Integração GPT-4 Shopify",
          "Automação Suporte Shopify",
          "Chatbot AI Shopify",
          "Alternativa Gorgias",
          "Alternativa Intercom",
          "Alternativa Zendesk"
        ]}
        canonicalUrl="https://replainow.com/pt/"
        locale="pt_PT"
        structuredData={structuredData}
        hreflang={{
          "pt": "https://replainow.com/pt/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "es": "https://replainow.com/es/",
          "fr": "https://replainow.com/fr/",
          "it": "https://replainow.com/it/",
          "nl": "https://replainow.com/nl/",
          "zh": "https://replainow.com/zh/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatize o Suporte Shopify com IA"
        description="Responda consultas de clientes em segundos: conforme LGPD, conforme à marca, dados diretos do Shopify. Teste 14 dias grátis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarPt />
      <main id="main-content" role="main" aria-label="Conteúdo principal" className="pb-0">
        <ModernHeroPt />
        <ModernProblemSolutionPt />
        <ModernFeaturesPt />
        <ModernHowItWorksPt />
        <ModernLiveDemoPt />
        <ModernSocialProofPt />
        <ModernPricingPt />
        <AIOptimizedFAQ />
        <ModernFinalCTAPt />
        <ContactPt />
      </main>
      <FooterPt />
      <LanguageSwitcher />
    </>
  );
};

export default IndexPt;