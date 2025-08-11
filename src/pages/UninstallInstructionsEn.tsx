import NavbarEn from "@/components/marketing/NavbarEn";
import FooterEn from "@/components/marketing/FooterEn";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const UninstallInstructionsEn = () => {
  return (
    <div>
      <SEO
        title="Uninstall Instructions | ReplAInow"
        description="How to uninstall ReplAInow from your Shopify store. Simple steps and data deletion policy with GDPR options."
        path="/en/uninstall"
      />
      <NavbarEn />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Uninstall Instructions</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Uninstalling the App</h2>
              <p>
                To uninstall ReplAInow from your Shopify store, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Log in to your Shopify admin panel.
                </li>
                <li>
                  Navigate to <strong>Apps</strong>.
                </li>
                <li>
                  Find <strong>ReplAInow</strong> in your list of installed apps.
                </li>
                <li>
                  Click the <strong>Delete</strong> button next to ReplAInow.
                </li>
                <li>
                  Follow any on-screen prompts to complete the uninstallation process.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data Deletion</h2>
              <p>
                Upon uninstalling the app, we automatically initiate the process of deleting all associated data from our servers. This includes any personal data, store configurations, and other information related to your use of ReplAInow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">GDPR Compliance</h2>
              <p>
                We are committed to GDPR compliance. If you have specific requests related to data deletion or wish to exercise your rights under GDPR, please contact us at <a href="mailto:support@replainow.com" className="underline">support@replainow.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p>
                If you encounter any issues during the uninstallation process or have any questions, please contact our support team at <a href="mailto:support@replainow.com" className="underline">support@replainow.com</a>.
              </p>
            </section>
          </article>
        </section>
      </main>
      <FooterEn />
    </div>
  );
};

export default UninstallInstructionsEn;
