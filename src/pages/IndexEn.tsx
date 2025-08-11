import NavbarEn from "@/components/marketing/NavbarEn";
import HeroEn from "@/components/marketing/HeroEn";
import HowItWorksEn from "@/components/marketing/HowItWorksEn";
import ProblemSolutionEn from "@/components/marketing/ProblemSolutionEn";
import FeaturesEn from "@/components/marketing/FeaturesEn";
import SocialProofEn from "@/components/marketing/SocialProofEn";
import LiveDemoEn from "@/components/marketing/LiveDemoEn";
import PricingEn from "@/components/marketing/PricingEn";
import AboutEn from "@/components/marketing/AboutEn";
import ContactEn from "@/components/marketing/ContactEn";
import FinalCTAEn from "@/components/marketing/FinalCTAEn";
import FooterEn from "@/components/marketing/FooterEn";
import StoreDataFlowEn from "@/components/marketing/StoreDataFlowEn";
import SEO from "@/components/SEO";
import FAQEn from "@/components/marketing/FAQEn";
import StickyInstallBarEn from "@/components/marketing/StickyInstallBarEn";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChatEn from "@/components/marketing/MailAndChatEn";

const IndexEnFull = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automate Shopify support with AI"
        description="Answer customer requests in seconds: GDPR‑compliant, on‑brand, direct Shopify data. Try free for 14 days."
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

export default IndexEnFull;
