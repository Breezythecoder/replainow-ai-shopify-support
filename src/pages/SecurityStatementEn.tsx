import NavbarEn from "@/components/marketing/NavbarEn";
import FooterEn from "@/components/marketing/FooterEn";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const SecurityStatementEn = () => {
  return (
    <div>
      <SEO
        title="Security Statement | ReplAInow"
        description="Our commitment to security: encryption in transit and at rest, HMAC webhooks, RBAC, monitoring, data location, and incident response."
        path="/en/security"
      />
      <NavbarEn />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Security Statement</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data security</h2>
              <p>
                We take data security seriously. Here’s an overview of our measures:
              </p>
              <ul>
                <li>
                  <strong>Encryption:</strong> All data is encrypted in transit and at rest.
                </li>
                <li>
                  <strong>Webhooks:</strong> All webhooks are HMAC-verified.
                </li>
                <li>
                  <strong>RBAC:</strong> Role-based access control.
                </li>
                <li>
                  <strong>Monitoring:</strong> 24/7 monitoring.
                </li>
                <li>
                  <strong>Location:</strong> Data is stored in the EU.
                </li>
                <li>
                  <strong>Incident Response:</strong> Documented incident response plan.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Compliance</h2>
              <p>
                We are committed to GDPR compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Questions?</h2>
              <p>
                If you have any questions, please contact us at <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a>.
              </p>
            </section>
          </article>
        </section>
      </main>
      <FooterEn />
    </div>
  );
};

export default SecurityStatementEn;
