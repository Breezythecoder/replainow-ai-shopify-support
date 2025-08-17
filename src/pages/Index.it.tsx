import NavbarIt from "@/components/marketing/Navbar.it";
import HeroIt from "@/components/marketing/Hero.it";
import HowItWorksIt from "@/components/marketing/HowItWorks.it";
import ProblemSolutionIt from "@/components/marketing/ProblemSolution.it";
import FeaturesIt from "@/components/marketing/Features.it";
import SocialProofIt from "@/components/marketing/SocialProof.it";
import LiveDemoIt from "@/components/marketing/LiveDemo.it";
import PricingIt from "@/components/marketing/Pricing.it";
import AboutIt from "@/components/marketing/About.it";
import ContactIt from "@/components/marketing/Contact.it";
import FinalCTAIt from "@/components/marketing/FinalCTA.it";
import FooterIt from "@/components/marketing/Footer.it";
import StoreDataFlowIt from "@/components/marketing/StoreDataFlow.it";
import SEO from "@/components/SEO";
import FAQIt from "@/components/marketing/FAQ.it";
import StickyInstallBarIt from "@/components/marketing/StickyInstallBar.it";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChatIt from "@/components/marketing/MailAndChat.it";
import LanguageSwitcher from "@/components/ui/language-switcher";

const IndexIt = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automatizza il Supporto Shopify con l'AI"
        description="Rispondi alle richieste dei clienti in secondi: conforme GDPR, rispettoso del brand, dati Shopify diretti. Prova 14 giorni gratis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <NavbarIt />
      <main>
        <HeroIt />
        <HowItWorksIt />
        <ProblemSolutionIt />
        <FeaturesIt />
        <MailAndChatIt />
        <StoreDataFlowIt />
        <SocialProofIt />
        <LiveDemoIt />
        <PricingIt />
        <FAQIt />
        <FinalCTAIt />
        <AboutIt />
        <ContactIt />
      </main>
      <FooterIt />
      <StickyInstallBarIt />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexIt;