import NavbarEs from "@/components/marketing/Navbar.es";
import HeroEs from "@/components/marketing/Hero.es";
import HowItWorksEs from "@/components/marketing/HowItWorks.es";
import ProblemSolution from "@/components/marketing/ProblemSolution";
import FeaturesEs from "@/components/marketing/Features.es";
import SocialProof from "@/components/marketing/SocialProof";
import LiveDemo from "@/components/marketing/LiveDemo";
import Pricing from "@/components/marketing/Pricing";
import AboutEs from "@/components/marketing/About.es";
import Contact from "@/components/marketing/Contact";
import FinalCTAEs from "@/components/marketing/FinalCTA.es";
import Footer from "@/components/marketing/Footer";
import StoreDataFlow from "@/components/marketing/StoreDataFlow";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ";
import StickyInstallBar from "@/components/marketing/StickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat";
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
        <ProblemSolution />
        <FeaturesEs />
        <MailAndChat />
        <StoreDataFlow />
        <SocialProof />
        <LiveDemo />
        <Pricing />
        <FAQ />
        <FinalCTAEs />
        <AboutEs />
        <Contact />
      </main>
      <Footer />
      <StickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexEs;