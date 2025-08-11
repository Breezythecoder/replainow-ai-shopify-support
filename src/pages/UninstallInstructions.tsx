import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

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
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
              <p className="text-sm text-muted-foreground">Remove ReplAInow from your Shopify store in a few steps</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Steps to Uninstall:</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Log in to your Shopify Admin.</li>
                <li>Go to <strong>Apps</strong>.</li>
                <li>Find <strong>ReplAInow</strong> and click <strong>Remove</strong>.</li>
                <li>Confirm the removal when prompted.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What Happens to Your Data</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Upon uninstall, we immediately initiate the process of deleting all stored shop data related to your account.</li>
                <li>All such data will be deleted within 30 days unless retention is required by law (e.g., billing or compliance records).</li>
                <li>You may request immediate deletion by contacting us at <a className="underline" href="mailto:privacy@replainow.com">privacy@replainow.com</a>.</li>
                <li>We store Shopify API data only as long as necessary to provide the App’s functionality and in accordance with our <a className="underline" href="/privacy">Privacy Policy</a>.</li>
                <li>We do not retain any Shopify data for advertising or unrelated purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Need Help?</h2>
              <p>If you experience any issues uninstalling the App, contact our Support Team at <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a>.</p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UninstallInstructions;
