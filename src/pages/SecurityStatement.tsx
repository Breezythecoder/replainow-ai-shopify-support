import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const SecurityStatement = () => {
  return (
    <div>
      <SEO
        title="Security Statement | ReplAInow"
        description="Our commitment to security: encryption in transit and at rest, HMAC webhooks, RBAC, monitoring, data location, and incident response."
        path="/security"
      />
      <Navbar />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Security Statement</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
              <p>
                Protecting merchant and customer data is our top priority. ReplAInow implements rigorous technical and organizational measures to safeguard information processed through our app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Technical Measures</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>SSL/TLS encryption for all data in transit</li>
                <li>AES-256 encryption for data at rest where supported by our infrastructure</li>
                <li>HMAC-signed Shopify webhooks for authenticity and integrity verification</li>
                <li>Role-based access controls (RBAC) and least-privilege principles</li>
                <li>Secure key management and secret rotation practices</li>
                <li>Regular security audits and timely patching of dependencies and infrastructure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Organizational Measures</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Staff training on security, privacy, and data protection</li>
                <li>Access logging, monitoring, and anomaly detection</li>
                <li>Vendor risk management and contractual safeguards with sub-processors</li>
                <li>Regular reviews of permissions and access keys</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data Location</h2>
              <p>
                Depending on the service provider, data may be processed in the EU and/or the US. We select providers with strong security practices and rely on appropriate legal mechanisms for international transfers, including Standard Contractual Clauses (SCCs) where required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Incident Response</h2>
              <p>
                We maintain procedures for detecting, assessing, and responding to security incidents. In the event of a data incident, we will investigate promptly and notify affected parties and authorities as required by applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>
                If you suspect a security issue or have questions, contact us at <a className="underline" href="mailto:security@replainow.com">security@replainow.com</a>. We encourage responsible disclosure and will work with you to investigate and remediate issues promptly.
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityStatement;
