import ModernNavbar from "@/components/marketing/PremiumNavbar";
import Footer from "@/components/marketing/UltraFooter";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const Impressum = () => {
  return (
    <div>
      <SEO
        title="Impressum | ReplAInow"
        description="Impressum der PrimeVision Group LLC (ReplAInow): Anschrift, Contact, Verantwortlicher gem. § 55 Abs. 2 RStV, Tax Registration Number."
        path="/impressum"
      />
      <PremiumNavbar />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Impressum</h1>
              <p className="text-sm text-muted-foreground">Zuletzt aktualisiert: {lastUpdated}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Anbieter</h2>
              <p>PrimeVision Group LLC</p>
              <p>Rechtsform & Sitz: LLC, Dubai, Vereinigte Arabische Emirate</p>
              <p>Geschäftsadresse: Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>E-Mail: <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Verantwortlich i. S. d. § 55 Abs. 2 RStV</h2>
              <p>Ruben Calabrese</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Steuerangaben</h2>
              <p>Tax Registration Number: 104756281200001</p>
            </section>
          </article>
        </section>
      </main>
      <UltraFooter />
    </div>
  );
};

export default Impressum;
