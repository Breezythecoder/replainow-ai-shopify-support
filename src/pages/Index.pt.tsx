import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import About from "@/components/marketing/About.pt";
import Contact from "@/components/marketing/Contact.pt";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer.pt";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ.pt";
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
        structuredData={structuredData}
        hreflang={{
          "pt": "https://replainow.com/pt/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatize o Suporte Shopify com IA"
        description="Responda consultas de clientes em segundos: conforme LGPD, conforme à marca, dados diretos do Shopify. Teste 14 dias grátis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Conteúdo principal">
        <ModernHero />
        <ModernProblemSolution />
        <ModernFeatures />
        <ModernHowItWorks />
        <ModernLiveDemo />
        <ModernSocialProof />
        <ModernComparison />
        <ModernPricing />
        <AIOptimizedFAQ />
        <ModernFinalCTA />
        <Contact />
      </main>
      <Footer />
      <ModernStickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexPt;