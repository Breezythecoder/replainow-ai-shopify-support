import NavbarEn from "@/components/marketing/NavbarEn";
import FooterEn from "@/components/marketing/FooterEn";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const PrivacyPolicyEn = () => {
  return (
    <div>
      <SEO
        title="Privacy Policy | ReplAInow – GDPR & Shopify API"
        description="Learn how ReplAInow collects, uses, stores, and protects merchant data. GDPR-compliant privacy policy with Shopify API usage explained."
        path="/en/privacy"
      />
      <NavbarEn />
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
              <h2 className="text-2xl font-semibold mb-2">Data Controller</h2>
              <p>PrimeVision Group LLC is the data controller responsible for the processing of your personal data under this policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
              <p>We collect the following types of personal data:</p>
              <ul>
                <li>
                  <strong>Shopify Data:</strong> We access and process data from your Shopify store, including order information, customer details, product data, and store content (pages, FAQs, shipping policies). This data is used to provide AI-powered customer support and improve the App's functionality.
                </li>
                <li>
                  <strong>User Data:</strong> When you install the App, we collect your name, email address, and Shopify store URL. We also collect data related to your usage of the App, such as settings, preferences, and interactions with our support team.
                </li>
                <li>
                  <strong>AI Interactions:</strong> We log AI-generated replies and interactions with customers to improve the accuracy and relevance of our AI models.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul>
                <li>
                  <strong>Providing the App:</strong> To provide AI-powered customer support, generate replies, and automate customer interactions.
                </li>
                <li>
                  <strong>Improving the App:</strong> To analyze usage patterns, improve AI models, and develop new features.
                </li>
                <li>
                  <strong>Communication:</strong> To communicate with you about updates, support, and promotional offers.
                </li>
                <li>
                  <strong>Compliance:</strong> To comply with legal obligations and protect our rights.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data Sharing and Disclosure</h2>
              <p>We may share your personal data with the following categories of recipients:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We use third-party service providers to host the App, process payments, and provide customer support. These providers have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> We may disclose your personal data to legal authorities if required by law or legal process.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
              <ul>
                <li>
                  <strong>Encryption:</strong> We use encryption to protect your personal data in transit and at rest.
                </li>
                <li>
                  <strong>Access Controls:</strong> We restrict access to your personal data to authorized personnel only.
                </li>
                <li>
                  <strong>Regular Security Assessments:</strong> We conduct regular security assessments to identify and address vulnerabilities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
              <p>We retain your personal data for as long as necessary to provide the App and fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul>
                <li>
                  <strong>Access:</strong> You have the right to access your personal data and receive a copy of it.
                </li>
                <li>
                  <strong>Rectification:</strong> You have the right to rectify inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Erasure:</strong> You have the right to request the erasure of your personal data.
                </li>
                <li>
                  <strong>Restriction:</strong> You have the right to restrict the processing of your personal data.
                </li>
                <li>
                  <strong>Portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit it to another data controller.
                </li>
                <li>
                  <strong>Objection:</strong> You have the right to object to the processing of your personal data.
                </li>
              </ul>
              <p>To exercise these rights, please contact us at <a href="mailto:support@replainow.com">support@replainow.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Changes to this Policy</h2>
              <p>We may update this policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p>If you have any questions or concerns about this policy, please contact us at:</p>
              <p>PrimeVision Group LLC</p>
              <p>Email: <a href="mailto:support@replainow.com">support@replainow.com</a></p>
            </section>
          </article>
        </section>
      </main>
      <FooterEn />
    </div>
  );
};

export default PrivacyPolicyEn;
