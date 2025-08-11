import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";

const UninstallInstructions = () => {
  return (
    <div>
      <SEO
        title="Uninstall Instructions | ReplAInow"
        description="How to uninstall ReplAInow from your Shopify store. Simple steps and data deletion policy with GDPR options."
        path="/uninstall"
      />
      <Navbar />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Uninstall Instructions</h1>
              <p className="text-sm text-muted-foreground">Remove ReplAInow from your Shopify store in a few steps.</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Steps to Uninstall</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Log in to your Shopify Admin.</li>
                <li>Go to <strong>Apps</strong>.</li>
                <li>Find <strong>ReplAInow</strong> and click <strong>Remove</strong>.</li>
                <li>Confirm the removal when prompted.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What Happens to Your Data</h2>
              <p>
                Upon uninstall, we begin the process of deleting stored shop data related to your account. All data will be deleted within 30 days unless we are legally required to retain certain information for a longer period (e.g., billing or compliance records).
              </p>
              <p className="mt-2">
                If you would like to request immediate deletion, contact us at <a className="underline" href="mailto:privacy@replainow.com">privacy@replainow.com</a>.
              </p>
              <p className="mt-2">
                For details on how we handle data, see our <a className="underline" href="/privacy">Privacy Policy</a>.
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UninstallInstructions;
