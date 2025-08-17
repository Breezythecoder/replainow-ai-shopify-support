import NavbarEs from "@/components/marketing/Navbar.es";
import HeroEs from "@/components/marketing/Hero.es";
import HowItWorksEs from "@/components/marketing/HowItWorks.es";
import ProblemSolutionEs from "@/components/marketing/ProblemSolution.es";
import FeaturesEs from "@/components/marketing/Features.es";
import SocialProofEs from "@/components/marketing/SocialProof.es";
import LiveDemoEs from "@/components/marketing/LiveDemo.es";
import PricingEs from "@/components/marketing/Pricing.es";
import AboutEs from "@/components/marketing/About.es";
import ContactEs from "@/components/marketing/Contact.es";
import FinalCTAEs from "@/components/marketing/FinalCTA.es";
import FooterEs from "@/components/marketing/Footer.es";
import StoreDataFlowEs from "@/components/marketing/StoreDataFlow.es";
import SEO from "@/components/SEO";
import FAQEs from "@/components/marketing/FAQ.es";
import StickyInstallBarEs from "@/components/marketing/StickyInstallBar.es";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChatEs from "@/components/marketing/MailAndChat.es";
import LanguageSwitcher from "@/components/ui/language-switcher";

const IndexEs = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automatiza el Soporte de Shopify con IA"
        description="Responde consultas de clientes en segundos: cumple GDPR, conforme a marca, datos directos de Shopify. Prueba 14 días gratis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <NavbarEs />
      <main>
        <HeroEs />
        <HowItWorksEs />
        <ProblemSolutionEs />
        <FeaturesEs />
        <MailAndChatEs />
        <StoreDataFlowEs />
        <SocialProofEs />
        <LiveDemoEs />
        <PricingEs />
        <FAQEs />
        <FinalCTAEs />
        <AboutEs />
        <ContactEs />
      </main>
      <FooterEs />
      <StickyInstallBarEs />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexEs;