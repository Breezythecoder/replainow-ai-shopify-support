import NavbarFr from "@/components/marketing/Navbar.fr";
import HeroFr from "@/components/marketing/Hero.fr";
import HowItWorksFr from "@/components/marketing/HowItWorks.fr";
import ProblemSolutionFr from "@/components/marketing/ProblemSolution.fr";
import FeaturesFr from "@/components/marketing/Features.fr";
import SocialProofFr from "@/components/marketing/SocialProof.fr";
import LiveDemoFr from "@/components/marketing/LiveDemo.fr";
import PricingFr from "@/components/marketing/Pricing.fr";
import AboutFr from "@/components/marketing/About.fr";
import ContactFr from "@/components/marketing/Contact.fr";
import FinalCTAFr from "@/components/marketing/FinalCTA.fr";
import FooterFr from "@/components/marketing/Footer.fr";
import StoreDataFlowFr from "@/components/marketing/StoreDataFlow.fr";
import SEO from "@/components/SEO";
import FAQFr from "@/components/marketing/FAQ.fr";
import StickyInstallBarFr from "@/components/marketing/StickyInstallBar.fr";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChatFr from "@/components/marketing/MailAndChat.fr";
import LanguageSwitcher from "@/components/ui/language-switcher";

const IndexFr = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automatisez le Support Shopify avec l'IA"
        description="Répondez aux demandes clients en secondes : conforme RGPD, respectueux de la marque, données Shopify directes. Essayez 14 jours gratuitement."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <NavbarFr />
      <main>
        <HeroFr />
        <HowItWorksFr />
        <ProblemSolutionFr />
        <FeaturesFr />
        <MailAndChatFr />
        <StoreDataFlowFr />
        <SocialProofFr />
        <LiveDemoFr />
        <PricingFr />
        <FAQFr />
        <FinalCTAFr />
        <AboutFr />
        <ContactFr />
      </main>
      <FooterFr />
      <StickyInstallBarFr />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexFr;