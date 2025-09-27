const AboutIt = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-4xl">
        <h2 id="about-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Chi siamo
        </h2>
        <p className="text-center text-muted-foreground">
          ReplAInow  un prodotto di <strong>PrimeVision Group LLC</strong>. La nostra missione: 
          Far risparmiare tempo ai merchant Shopify e migliorare durevolmente le esperienze cliente con la moderna tecnologia AI.
        </p>
      </div>
    </section>
  );
};

export default AboutIt;