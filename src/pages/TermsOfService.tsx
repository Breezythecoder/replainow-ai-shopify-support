import { Helmet } from "react-helmet-async";
import PremiumNavbar from "@/components/marketing/PremiumNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ReplAInow | AI Shopify Helpdesk Terms</title>
        <meta
          name="description"
          content="Terms of Service for ReplAInow AI Shopify Helpdesk. Usage terms, subscription details, and legal information for merchants."
        />
        <meta property="og:title" content="Terms of Service - ReplAInow" />
        <meta
          property="og:description"
          content="Terms of Service for ReplAInow AI Shopify Helpdesk"
        />
        <link rel="canonical" href="https://www.replainow.com/terms" />
      </Helmet>
      
      <PremiumNavbar />

      <main
        id="main-content"
        role="main"
        aria-label="Terms of Service"
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20"
      >
        <article className="container mx-auto max-w-4xl px-6 py-16">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">Last updated: November 14, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Definitions</h2>
              <p className="text-gray-700">
                "Merchant" means the person or entity installing or using the ReplAInow app on a Shopify store. 
                "App" means the ReplAInow application. "We", "Us", and "Our" refer to PrimeVision Group LLC 
                (Dubai, UAE). "You" and "Your" refer to the Merchant.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By installing or using the App, you agree to be bound by these Terms of Service and our 
                Privacy Policy. If you do not agree, do not install or use the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Description of Service</h2>
              <p className="text-gray-700">
                ReplAInow provides AI-powered customer support automation and helpdesk tools for Shopify 
                merchants, including message triage, suggested replies, automated responses, and integrations 
                with Shopify data to improve customer service workflows.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Account & Installation</h2>
              <p className="text-gray-700">
                To use the App, you must have a valid Shopify store and install the App via the Shopify App 
                Store. You authorize the App to access required Shopify API scopes to function. You are 
                responsible for maintaining the confidentiality of your account credentials and for all 
                activities under your account.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Payment & Subscription</h2>
              <p className="text-gray-700">
                The App is offered on a subscription basis (monthly or yearly). Prices and billing terms are 
                shown in the Shopify App Store listing and during installation. Fees are billed through 
                Shopify's billing system. Subscriptions automatically renew unless canceled before the renewal 
                date. Taxes may apply.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Marketing Communications</h2>
              <p className="text-gray-700 mb-4">
                ReplAInow may send business development emails to publicly listed business email addresses. 
                We comply with CAN-SPAM (US), GDPR (EU), CASL (Canada), and UK Data Protection Act.
              </p>
              <p className="text-gray-700 mb-4"><strong>Our Emails Include:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Clear sender identification</li>
                <li>Physical business address (Dubai, UAE)</li>
                <li>One-click opt-out ("No more emails" link)</li>
                <li>Honest subject lines</li>
              </ul>
              <p className="text-gray-700">
                <strong>Opt-Out:</strong> Processed within 24 hours. You can unsubscribe anytime via the link 
                in our emails or by contacting privacy@replainow.com.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Acceptable Use</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>No illegal, harmful, or infringing content</li>
                <li>No harassment, abuse, or discrimination</li>
                <li>No attempts to bypass security or misuse APIs</li>
                <li>No reverse engineering or unauthorized access</li>
                <li>Compliance with Shopify's terms and all applicable laws</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700">
                We retain all rights, title, and interest in and to the App, including all related 
                intellectual property. You may not copy, modify, or create derivative works based on the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700">
                To the maximum extent permitted by law, we are not liable for indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, arising from your use 
                of the App. Our total liability for any claim shall not exceed the fees paid by you to us 
                during the twelve (12) months preceding the event giving rise to the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700">
                You may terminate at any time by uninstalling the App from your Shopify store. We may suspend 
                or terminate your access to the App if you violate these Terms or if required by law. Upon 
                termination, your access ceases and data will be handled according to our Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of the United Arab Emirates (UAE), with venue in Dubai, 
                without regard to conflict of laws principles.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Relationship with Shopify</h2>
              <p className="text-gray-700">
                ReplAInow is developed and provided by PrimeVision Group LLC and is not a product of, nor 
                officially associated with, Shopify Inc. We access and use Shopify store data solely in 
                accordance with the permissions granted during installation and in compliance with Shopify's 
                API Terms and applicable policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Role in Data Processing</h2>
              <p className="text-gray-700">
                Merchants are the Data Controllers of any personal data of their customers processed via the 
                App. PrimeVision Group LLC acts solely as a Data Processor, processing such data only on the 
                Merchant's documented instructions, including those provided through App configuration and the 
                permissions granted during installation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
              <p className="text-gray-700">
                We may update these Terms from time to time. If we make material changes, we will update the 
                "Last updated" date at the top and provide notice via email or within the App. Your continued 
                use of the App after changes become effective constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Uninstall & Data Deletion</h2>
              <p className="text-gray-700">
                You may uninstall the App at any time from your Shopify Admin by navigating to Apps, selecting 
                ReplAInow, and choosing Remove. Details about data deletion timing and options are provided in 
                our{" "}
                <a href="/privacy" className="text-purple-600 hover:text-purple-700 underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/uninstall" className="text-purple-600 hover:text-purple-700 underline">
                  Uninstall Instructions
                </a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Support & Service Availability</h2>
              <p className="text-gray-700">
                Support is available via email at{" "}
                <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                  support@replainow.com
                </a>. While we strive for high availability, 100% uptime is not guaranteed and occasional 
                maintenance or outages may occur.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact</h2>
              <p className="text-gray-700">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                  support@replainow.com
                </a>.
              </p>
              <p className="text-sm text-gray-600 mt-2">PrimeVision Group LLC – Dubai, UAE</p>
            </section>
          </div>
        </article>
      </main>

      <UltraFooter />
    </>
  );
};

export default TermsOfService;
