import ModernNavbar from "@/components/marketing/UltraNavbar";
import Footer from "@/components/marketing/UltraFooter";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const TermsOfService = () => {
  return (
    <div>
      <SEO
        title="Terms of Service | ReplAInow"
        description="Read the Terms of Service for ReplAInow, covering account, payments, acceptable use, liability, termination, and governing law (UAE)."
        path="/terms"
      />
      <UltraNavbar />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Terms of Service</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">1. Definitions</h2>
              <p>
                "Merchant" means the person or entity installing or using the ReplAInow app on a Shopify store. "App" means the ReplAInow application. "We", "Us", and "Our" refer to PrimeVision Group LLC (Dubai, UAE). "You" and "Your" refer to the Merchant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">2. Acceptance of Terms</h2>
              <p>
                By installing or using the App, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not install or use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">3. Description of Service</h2>
              <p>
                ReplAInow provides AI-powered customer support automation and helpdesk tools for Shopify merchants, including message triage, suggested replies, automated responses, and integrations with Shopify data to improve customer service workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">4. Account & Installation</h2>
              <p>
                To use the App, you must have a valid Shopify store and install the App via the Shopify App Store. You authorize the App to access required Shopify API scopes to function. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">5. Payment & Subscription</h2>
              <p>
                The App is offered on a subscription basis (monthly or yearly). Prices and billing terms are shown in the Shopify App Store listing and during installation. Fees are billed through Shopify’s billing system. Subscriptions automatically renew unless canceled before the renewal date. Taxes may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">6. Acceptable Use</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>No illegal, harmful, or infringing content</li>
                <li>No harassment, abuse, or discrimination</li>
                <li>No attempts to bypass security or misuse APIs</li>
                <li>No reverse engineering or unauthorized access</li>
                <li>Compliance with Shopify’s terms and all applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
              <p>
                We retain all rights, title, and interest in and to the App, including all related intellectual property. You may not copy, modify, or create derivative works based on the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of the App. Our total liability for any claim shall not exceed the fees paid by you to us during the twelve (12) months preceding the event giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">9. Termination</h2>
              <p>
                You may terminate at any time by uninstalling the App from your Shopify store. We may suspend or terminate your access to the App if you violate these Terms or if required by law. Upon termination, your access ceases and data will be handled according to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United Arab Emirates (UAE), with venue in Dubai, without regard to conflict of laws principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Relationship with Shopify</h2>
              <p>
                ReplAInow is developed and provided by PrimeVision Group LLC and is not a product of, nor officially associated with, Shopify Inc. We access and use Shopify store data solely in accordance with the permissions granted during installation and in compliance with Shopify’s API Terms and applicable policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Role in Data Processing</h2>
              <p>
                Merchants are the Data Controllers of any personal data of their customers processed via the App. PrimeVision Group LLC acts solely as a Data Processor, processing such data only on the Merchant’s documented instructions, including those provided through App configuration and the permissions granted during installation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. If we make material changes, we will update the “Last updated” date at the top and provide notice via email or within the App. Your continued use of the App after changes become effective constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Uninstall & Data Deletion</h2>
              <p>
                You may uninstall the App at any time from your Shopify Admin by navigating to Apps, selecting ReplAInow, and choosing Remove. Details about data deletion timing and options are provided in our <a className="underline" href="/privacy">Privacy Policy</a> and <a className="underline" href="/uninstall">Uninstall Instructions</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Support & Service Availability</h2>
              <p>
                Support is available via email at <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a>. While we strive for high availability, 100% uptime is not guaranteed and occasional maintenance or outages may occur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">11. Contact</h2>
              <p>
                For questions about these Terms, contact us at <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a>.
              </p>
            </section>
          </article>
        </section>
      </main>
      <UltraFooter />
    </div>
  );
};

export default TermsOfService;
