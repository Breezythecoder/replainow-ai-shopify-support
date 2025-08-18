import Navbar from "@/components/marketing/Navbar.nl";
import Hero from "@/components/marketing/Hero.nl";
import HowItWorks from "@/components/marketing/HowItWorks.nl";
import ProblemSolution from "@/components/marketing/ProblemSolution.nl";
import Features from "@/components/marketing/Features.nl";
import SocialProof from "@/components/marketing/SocialProof.nl";
import LiveDemo from "@/components/marketing/LiveDemo.nl";
import Pricing from "@/components/marketing/Pricing.nl";
import About from "@/components/marketing/About.nl";
import Contact from "@/components/marketing/Contact.nl";
import FinalCTA from "@/components/marketing/FinalCTA.nl";
import Footer from "@/components/marketing/Footer.nl";
import StoreDataFlow from "@/components/marketing/StoreDataFlow.nl";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ.nl";
import StickyInstallBar from "@/components/marketing/StickyInstallBar.nl";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat.nl";
import LanguageSwitcher from "@/components/ui/language-switcher";

const IndexNl = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Shopify Ondersteuning automatiseren met AI"
        description="Beantwoord klantenvragen in seconden: GDPR-conform, merkconform, directe Shopify-data. 14 dagen gratis testen."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ProblemSolution />
        <Features />
        <MailAndChat />
        <StoreDataFlow />
        <SocialProof />
        <LiveDemo />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexNl;