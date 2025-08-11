import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const PrivacyPolicy = () => {
  return (
    <div>
      <SEO
        title="Privacy Policy | ReplAInow – GDPR & Shopify API"
        description="Learn how ReplAInow collects, uses, stores, and protects merchant data. GDPR-compliant privacy policy with Shopify API usage explained."
        path="/privacy"
      />
      <Navbar />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </header>

            <p>
              ReplAInow is an AI-powered helpdesk app for Shopify merchants, operated by PrimeVision Group LLC, a company registered in Dubai, UAE ("we", "us", "our"). This policy explains how we collect, use, disclose, and protect personal data when you install and use the ReplAInow application (the "App"). We comply with the EU General Data Protection Regulation (GDPR) and relevant privacy laws.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data We Collect</h2>
              <p>When you install and use the App, we may collect and process the following data:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Merchant information (merchant name, contact name, business email)</li>
                <li>Store details (store name, store URL, Shopify domain)</li>
                <li>Customer support context (messages, tickets, conversation metadata)</li>
                <li>Order data (order IDs, status, items, totals, dates) when needed to respond to support inquiries</li>
                <li>Product data (titles, SKUs, inventory, pricing) for support replies and automations</li>
                <li>Shopify API scopes granted to the App (only those necessary for operation)</li>
                <li>Technical data (IP address, device, browser, timestamps) for security and service quality</li>
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">Note: Where applicable, certain data may be considered personal data under GDPR.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How We Use Your Data</h2>
              <p>We process data for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To provide AI-based customer support automation and helpdesk features</li>
                <li>To personalize and improve support responses and product features</li>
                <li>To ensure security, prevent abuse, and maintain service integrity</li>
                <li>To provide analytics and operational insights to merchants</li>
                <li>To comply with legal obligations and enforce our Terms of Service</li>
                <li>To provide customer support and respond to requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Third-Party Providers</h2>
              <p>We use trusted sub-processors to deliver our services:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>OpenAI – Natural language processing for AI-generated responses</li>
                <li>Supabase – Secure data storage, authentication, and infrastructure</li>
                <li>Mailgun – Transactional email delivery (e.g., notifications)</li>
                <li>Render – Hosting and background processing</li>
              </ul>
              <p className="mt-2">Data shared with these providers is limited to what is necessary to perform the service and is protected by contractual safeguards, including data processing agreements where applicable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Legal Basis for Processing</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Performance of a contract (providing the App and its features)</li>
                <li>Legitimate interests (improving and securing our services)</li>
                <li>Compliance with legal obligations</li>
                <li>Consent where required (you can withdraw at any time)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Role in Data Processing</h2>
              <p>
                For purposes of applicable data protection laws, Merchants are the Data Controllers of any personal data of their customers processed via the App. PrimeVision Group LLC acts solely as a Data Processor, processing such data only on the Merchant’s documented instructions, including those provided through the App’s configuration and the permissions granted during installation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
              <p>
                We retain data only for as long as necessary to provide the App and fulfill the purposes outlined in this policy. Merchant account and related data are generally deleted within 30 days after app uninstall, unless we are legally required to retain it longer (e.g., for tax or compliance reasons). You can request earlier deletion at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How to Uninstall and Data Deletion</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Log in to your Shopify Admin.</li>
                <li>Go to <strong>Apps</strong>.</li>
                <li>Find <strong>ReplAInow</strong> and click <strong>Remove</strong>.</li>
                <li>Confirm the removal when prompted.</li>
              </ol>
              <p className="mt-2">
                After uninstall, we begin deleting stored shop data related to your account. All such data will be deleted within 30 days unless we are legally required to retain certain information (e.g., billing or compliance records). You may request immediate deletion by contacting <a className="underline" href="mailto:privacy@replainow.com">privacy@replainow.com</a>.
              </p>
              <p className="mt-2">
                For more information, see our <a className="underline" href="/uninstall">Uninstall Instructions</a> and the <a className="underline" href="/privacy">Privacy Policy</a> sections above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">International Transfers</h2>
              <p>
                Depending on the provider, data may be processed in the EU and/or the US. Where data is transferred internationally, we implement appropriate safeguards such as Standard Contractual Clauses (SCCs) or equivalent mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Your GDPR Rights</h2>
              <p>As a data subject, you have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion (right to be forgotten)</li>
                <li>Request data export (data portability)</li>
                <li>Object to or restrict processing under certain conditions</li>
              </ul>
              <p className="mt-2">To exercise your rights, contact us at <a className="underline" href="mailto:privacy@replainow.com">privacy@replainow.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Shopify API Data Usage</h2>
              <p>
                The App accesses Shopify APIs using scopes granted during installation. We only request the minimum scopes necessary to provide the App’s functionality (e.g., reading orders or products to generate accurate support responses). We do not sell personal data. We do not use Shopify data for advertising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Relationship with Shopify</h2>
              <p>
                ReplAInow is developed and provided by PrimeVision Group LLC and is not a product of, nor officially associated with, Shopify Inc. We access and use Shopify store data solely in accordance with the permissions granted during installation and in compliance with Shopify’s API Terms and applicable policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will update the “Last updated” date at the top and provide additional notice via email or within the App. Your continued use of the App after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>
                For privacy questions or requests, contact our Data Protection team: <a className="underline" href="mailto:privacy@replainow.com">privacy@replainow.com</a>.
              </p>
              <p className="text-sm text-muted-foreground">PrimeVision Group LLC – Dubai, UAE</p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
