import NavbarEn from "@/components/marketing/NavbarEn";
import FooterEn from "@/components/marketing/FooterEn";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const TermsOfServiceEn = () => {
  return (
    <div>
      <SEO
        title="Terms of Service | ReplAInow"
        description="Read the Terms of Service for ReplAInow, covering account, payments, acceptable use, liability, termination, and governing law (UAE)."
        path="/en/terms"
      />
      <NavbarEn />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Terms of Service</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </header>
            <p>
              Welcome to ReplAInow, an AI-powered helpdesk app for Shopify merchants. These Terms of Service (the "Terms") govern your access to and use of the ReplAInow application (the "App") provided by PrimeVision Group LLC, a company registered in Dubai, UAE ("we", "us", "our"). By installing or using the App, you agree to be bound by these Terms.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-2">1. Account</h2>
              <p>
                To use the App, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access or security breaches.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">2. Payments</h2>
              <p>
                The App offers various subscription plans. By subscribing, you agree to pay the applicable fees. Payments are processed via Shopify's billing system. You can upgrade or cancel your subscription at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">3. Acceptable Use</h2>
              <p>
                You agree to use the App in compliance with these Terms and all applicable laws. You must not:
              </p>
              <ul className="list-disc list-inside">
                <li>Use the App for any illegal or unauthorized purpose.</li>
                <li>Transmit viruses or malicious code.</li>
                <li>Interfere with the operation of the App.</li>
                <li>Violate the rights of others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">4. Liability</h2>
              <p>
                The App is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the App, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
              <p>
                We may terminate your access to the App at any time for any reason. You may also terminate your account at any time. Upon termination, your right to use the App will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">6. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United Arab Emirates, without regard to its conflict of laws principles. Any disputes arising from these Terms will be resolved in the courts of Dubai, UAE.
              </p>
            </section>
          </article>
        </section>
      </main>
      <FooterEn />
    </div>
  );
};

export default TermsOfServiceEn;
