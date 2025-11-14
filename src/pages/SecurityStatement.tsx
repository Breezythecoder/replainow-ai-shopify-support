import { Helmet } from "react-helmet-async";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

const SecurityStatement = () => {
  return (
    <>
      <Helmet>
        <title>Security Statement - ReplAInow | Data Protection & Security</title>
        <meta
          name="description"
          content="Learn about ReplAInow's security measures, data protection practices, and commitment to keeping your merchant and customer data safe."
        />
        <meta property="og:title" content="Security Statement - ReplAInow" />
        <meta
          property="og:description"
          content="Security measures and data protection for ReplAInow AI Shopify Helpdesk"
        />
        <link rel="canonical" href="https://www.replainow.com/security" />
      </Helmet>

      <LegalNavbar />

      <main
        id="main-content"
        role="main"
        aria-label="Security Statement"
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20"
      >
        <article className="container mx-auto max-w-4xl px-6 py-16">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Security Statement
            </h1>
            <p className="text-gray-600">Last updated: November 14, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                Protecting merchant and customer data is our top priority. ReplAInow implements rigorous 
                technical and organizational measures to safeguard information processed through our app.
              </p>
              <p className="text-gray-700">
                We follow Shopify's App Security Requirements and industry best practices to protect data 
                confidentiality, integrity, and availability.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Measures</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <ul className="list-none space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>SSL/TLS encryption</strong> for all data in transit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>AES-256 encryption</strong> for data at rest where supported by our infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>HMAC-signed Shopify webhooks</strong> for authenticity and integrity verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Role-based access controls (RBAC)</strong> and least-privilege principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Secure key management</strong> and secret rotation practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Regular security audits</strong> and timely patching of dependencies and infrastructure</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizational Measures</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <ul className="list-none space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Staff training</strong> on security, privacy, and data protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Access logging, monitoring,</strong> and anomaly detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Vendor risk management</strong> and contractual safeguards with sub-processors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Regular reviews</strong> of permissions and access keys</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Location</h2>
              <p className="text-gray-700">
                Depending on the service provider, data may be processed in the EU and/or the US. We select 
                providers with strong security practices and rely on appropriate legal mechanisms for 
                international transfers, including Standard Contractual Clauses (SCCs) where required.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Standards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR Compliant</h3>
                  <p className="text-gray-700">
                    Full compliance with EU General Data Protection Regulation requirements for data processing 
                    and protection.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Shopify Requirements</h3>
                  <p className="text-gray-700">
                    Adherence to Shopify's App Security Requirements and API best practices.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Incident Response</h2>
              <p className="text-gray-700 mb-4">
                We maintain procedures for detecting, assessing, and responding to security incidents. In the 
                event of a data incident, we will investigate promptly and notify affected parties and 
                authorities as required by applicable laws.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Incident Response Time:</strong> We aim to acknowledge security incidents within 24 
                  hours and provide regular updates throughout the investigation and remediation process.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Responsible Disclosure</h2>
              <p className="text-gray-700">
                We encourage responsible disclosure of security vulnerabilities. If you discover a security 
                issue, please report it to us privately so we can investigate and address it promptly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                If you suspect a security issue or have questions, contact us at:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:security@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                    security@replainow.com
                  </a>
                </p>
                <p className="text-gray-700">
                  We encourage responsible disclosure and will work with you to investigate and remediate 
                  issues promptly.
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <UltraFooter />
    </>
  );
};

export default SecurityStatement;
