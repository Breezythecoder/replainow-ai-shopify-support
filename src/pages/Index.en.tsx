import NavbarEn from "@/components/marketing/Navbar.en";
import HeroEn from "@/components/marketing/Hero.en";
import HowItWorksEn from "@/components/marketing/HowItWorks.en";
import ProblemSolutionEn from "@/components/marketing/ProblemSolution.en";
import FeaturesEn from "@/components/marketing/Features.en";
import SocialProofEn from "@/components/marketing/SocialProof.en";
import LiveDemoEn from "@/components/marketing/LiveDemo.en";
import PricingEn from "@/components/marketing/Pricing.en";
import AboutEn from "@/components/marketing/About.en";
import ContactEn from "@/components/marketing/Contact.en";
import FinalCTAEn from "@/components/marketing/FinalCTA.en";
import FooterEn from "@/components/marketing/Footer.en";
import StoreDataFlowEn from "@/components/marketing/StoreDataFlow.en";
import SEO from "@/components/SEO";
import FAQEn from "@/components/marketing/FAQ.en";
import StickyInstallBarEn from "@/components/marketing/StickyInstallBar.en";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChatEn from "@/components/marketing/MailAndChat.en";

const IndexEn = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automate Shopify Support with AI"
        description="Answer customer inquiries in seconds: GDPR-compliant, brand-compliant, direct Shopify data. Try 14 days free."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <NavbarEn />
      <main>
        <HeroEn />
        <HowItWorksEn />
        <ProblemSolutionEn />
        <FeaturesEn />
        <MailAndChatEn />
        <StoreDataFlowEn />
        <SocialProofEn />
        <LiveDemoEn />
        <PricingEn />
        <FAQEn />
        <FinalCTAEn />
        <AboutEn />
        <ContactEn />
      </main>
      <FooterEn />
      <StickyInstallBarEn />
    </div>
  );
};

export default IndexEn;