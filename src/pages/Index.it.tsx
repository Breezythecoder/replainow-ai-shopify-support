import SEO from "@/components/SEO";
import SEOOrganization from "@/components/SEOOrganization";
import NavbarIt from "@/components/marketing/Navbar.it";
import HeroIt from "@/components/marketing/Hero.it";
import HowItWorksIt from "@/components/marketing/HowItWorks.it";
import FeaturesIt from "@/components/marketing/Features.it";
import ProblemSolutionIt from "@/components/marketing/ProblemSolution.it";
import SocialProofIt from "@/components/marketing/SocialProof.it";
import LiveDemoIt from "@/components/marketing/LiveDemo.it";
import PricingIt from "@/components/marketing/Pricing.it";
import StoreDataFlowIt from "@/components/marketing/StoreDataFlow.it";
import MailAndChatIt from "@/components/marketing/MailAndChat.it";
import FAQIt from "@/components/marketing/FAQ.it";
import AboutIt from "@/components/marketing/About.it";
import FinalCTAIt from "@/components/marketing/FinalCTA.it";
import ContactIt from "@/components/marketing/Contact.it";
import FooterIt from "@/components/marketing/Footer.it";
import StickyInstallBarIt from "@/components/marketing/StickyInstallBar.it";
import LanguageSwitcher from "@/components/ui/language-switcher";

const IndexIt = () => {
  return (
    <div>
      <SEO 
        title="ReplAInow - Helpdesk AI per Shopify | Risposte automatiche in secondi"
        description="Helpdesk AI intelligente per Shopify. Risponde automaticamente alle richieste dei clienti con dati in tempo reale. Prova gratuita 14 giorni. Installazione in 2 minuti."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <SEOOrganization />
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