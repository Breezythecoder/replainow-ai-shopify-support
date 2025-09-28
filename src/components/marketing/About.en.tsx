const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-4xl">
        <h2 id="about-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          ber uns
        </h2>
        <p className="text-center text-muted-foreground">
          ReplAInow ist ein Produkt der <strong>PrimeVision Group LLC</strong>. Unsere Mission: 
          Shopify-Hndlern Zeit sparen und Kundenerlebnisse mit moderner KI-Technologie nachhaltig verbessern.
        </p>
      </div>
    </section>
  );
};

export default About;
