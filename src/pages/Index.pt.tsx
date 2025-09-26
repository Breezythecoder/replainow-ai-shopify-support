import ModernNavbar from "@/components/marketing/ModernNavbar";
import HeroPt from "@/components/marketing/Hero.pt";
import HowItWorksPt from "@/components/marketing/HowItWorks.pt";
import ProblemSolutionPt from "@/components/marketing/ProblemSolution.pt";
import FeaturesPt from "@/components/marketing/Features.pt";
import SocialProofPt from "@/components/marketing/SocialProof.pt";
import LiveDemoPt from "@/components/marketing/LiveDemo.pt";
import PricingPt from "@/components/marketing/Pricing.pt";
import ModernComparison from "@/components/marketing/ModernComparison";
import AboutPt from "@/components/marketing/About.pt";
import ContactPt from "@/components/marketing/Contact.pt";
import FinalCTAPt from "@/components/marketing/FinalCTA.pt";
import FooterPt from "@/components/marketing/Footer.pt";
import SEO from "@/components/SEO";
import FAQPt from "@/components/marketing/FAQ.pt";
import ModernStickyInstallBar from "@/components/marketing/ModernStickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";

const IndexPt = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <div>
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
      <main id="main-content" role="main" aria-label="Conteúdo principal">
        <HeroPt />
        <ProblemSolutionPt />
        <FeaturesPt />
        <HowItWorksPt />
        <LiveDemoPt />
        <SocialProofPt />
        <ModernComparisonPt />
        <PricingPt />
        <FAQPt />
        <FinalCTAPt />
        <ContactPt />
      </main>
      <FooterPt />
      <ModernStickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexPt;