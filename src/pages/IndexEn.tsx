import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import ProblemSolution from "@/components/marketing/ProblemSolution";
import Features from "@/components/marketing/Features";
import SocialProof from "@/components/marketing/SocialProof";
import LiveDemo from "@/components/marketing/LiveDemo";
import Pricing from "@/components/marketing/Pricing";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import FinalCTA from "@/components/marketing/FinalCTA";
import Footer from "@/components/marketing/Footer";
import StoreDataFlow from "@/components/marketing/StoreDataFlow";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ";
import StickyInstallBar from "@/components/marketing/StickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat";

const IndexEn = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automate Shopify support with AI"
        description="Answer customer requests in seconds: GDPR‑compliant, on‑brand, direct Shopify data. Try free for 14 days."
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
    </div>
  );
};

export default IndexEn;
