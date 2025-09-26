import ModernNavbarEs from "@/components/marketing/ModernNavbar.es";
import HeroEs from "@/components/marketing/Hero.es";
import HowItWorksEs from "@/components/marketing/HowItWorks.es";
import ProblemSolutionEs from "@/components/marketing/ProblemSolution.es";
import FeaturesEs from "@/components/marketing/Features.es";
import SocialProofEs from "@/components/marketing/SocialProof.es";
import LiveDemoEs from "@/components/marketing/LiveDemo.es";
import PricingEs from "@/components/marketing/Pricing.es";
import ModernComparisonEs from "@/components/marketing/ModernComparison.es";
import AboutEs from "@/components/marketing/About.es";
import ContactEs from "@/components/marketing/Contact.es";
import FinalCTAEs from "@/components/marketing/FinalCTA.es";
import FooterEs from "@/components/marketing/Footer.es";
import SEO from "@/components/SEO";
import FAQEs from "@/components/marketing/FAQ.es";
import ModernStickyInstallBar from "@/components/marketing/ModernStickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";

const IndexEs = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <div>
      <AdvancedSEO
        title="ReplAInow – Mesa de Ayuda AI para Shopify | Automatiza Soporte con IA"
        description="Automatiza tu soporte al cliente de Shopify con GPT-4 AI. ✅ 3seg tiempo respuesta ✅ 32+ idiomas ✅ Cumple RGPD ✅ 75% más barato que Gorgias y Zendesk. ¡Prueba 14 días gratis!"
        keywords={[
          "Mesa de Ayuda AI Shopify",
          "Soporte AI Shopify", 
          "Soporte Cliente IA Shopify",
          "Soporte Automatizado Shopify",
          "Integración GPT-4 Shopify",
          "Automatización Soporte Shopify",
          "Chatbot AI Shopify",
          "Alternativa Gorgias",
          "Alternativa Intercom",
          "Alternativa Zendesk"
        ]}
        canonicalUrl="https://replainow.com/es/"
        locale="es_ES"
        structuredData={structuredData}
        hreflang={{
          "es": "https://replainow.com/es/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "fr": "https://replainow.com/fr/",
          "it": "https://replainow.com/it/",
          "nl": "https://replainow.com/nl/",
          "pt": "https://replainow.com/pt/",
          "zh": "https://replainow.com/zh/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatiza el Soporte de Shopify con IA"
        description="Responde consultas de clientes en segundos: cumple GDPR, conforme a marca, datos directos de Shopify. Prueba 14 días gratis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarEs />
      <main id="main-content" role="main" aria-label="Contenido principal" className="pb-20 md:pb-0">
        <HeroEs />
        <ProblemSolutionEs />
        <FeaturesEs />
        <HowItWorksEs />
        <LiveDemoEs />
        <SocialProofEs />
        <ModernComparisonEs />
        <PricingEs />
        <FAQEs />
        <FinalCTAEs />
        <ContactEs />
      </main>
      <FooterEs />
      <ModernStickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexEs;