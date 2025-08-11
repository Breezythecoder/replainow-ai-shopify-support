import NavbarEn from "@/components/marketing/NavbarEn";
import FooterEn from "@/components/marketing/FooterEn";
import SEO from "@/components/SEO";

const lastUpdated = "2025-08-11";

const Imprint = () => {
  return (
    <div>
      <SEO
        title="Imprint | ReplAInow"
        description="Imprint of PrimeVision Group LLC (ReplAInow): Address, contact, responsible person, Tax Registration Number."
        path="/en/imprint"
      />
      <NavbarEn />
      <main>
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Imprint</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Provider</h2>
              <p>PrimeVision Group LLC</p>
              <p>Legal form & seat: LLC, Dubai, United Arab Emirates</p>
              <p>Business address: Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>Email: <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Responsible under media law</h2>
              <p>Ruben Calabrese</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Tax information</h2>
              <p>Tax Registration Number: 104756281200001</p>
            </section>
          </article>
        </section>
      </main>
      <FooterEn />
    </div>
  );
};

export default Imprint;
