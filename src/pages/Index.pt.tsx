import NavbarPt from "@/components/marketing/Navbar.pt";
import HeroPt from "@/components/marketing/Hero.pt";
import HowItWorksPt from "@/components/marketing/HowItWorks.pt";
import ProblemSolutionPt from "@/components/marketing/ProblemSolution.pt";
import FeaturesPt from "@/components/marketing/Features.pt";
import SocialProofPt from "@/components/marketing/SocialProof.pt";
import LiveDemoPt from "@/components/marketing/LiveDemo.pt";
import PricingPt from "@/components/marketing/Pricing.pt";
import AboutPt from "@/components/marketing/About.pt";
import ContactPt from "@/components/marketing/Contact.pt";
import FinalCTAPt from "@/components/marketing/FinalCTA.pt";
import FooterPt from "@/components/marketing/Footer.pt";
import StoreDataFlowPt from "@/components/marketing/StoreDataFlow.pt";
import SEO from "@/components/SEO";
import FAQPt from "@/components/marketing/FAQ.pt";
import StickyInstallBarPt from "@/components/marketing/StickyInstallBar.pt";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChatPt from "@/components/marketing/MailAndChat.pt";
import LanguageSwitcher from "@/components/ui/language-switcher";

const IndexPt = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automatize o Suporte Shopify com IA"
        description="Responda consultas de clientes em segundos: conforme GDPR, alinhado à marca, dados Shopify diretos. Teste 14 dias grátis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <NavbarPt />
      <main>
        <HeroPt />
        <HowItWorksPt />
        <ProblemSolutionPt />
        <FeaturesPt />
        <MailAndChatPt />
        <StoreDataFlowPt />
        <SocialProofPt />
        <LiveDemoPt />
        <PricingPt />
        <FAQPt />
        <FinalCTAPt />
        <AboutPt />
        <ContactPt />
      </main>
      <FooterPt />
      <StickyInstallBarPt />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexPt;