import { Button } from "@/components/ui/button";
import { heroContentIt } from "@/content/hero.it";

const HeroIt = () => {
  const { headline, subheadline, primaryCta, secondaryCta, media } = heroContentIt;

  return (
    <section 
      id="hero" 
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.95), hsl(var(--primary-dark) / 0.98)), url(${media.background?.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="text-center lg:text-left">
          <h1 id="hero-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" variant="hero">
              <a href={primaryCta.href} aria-label={primaryCta.label}>
                {primaryCta.label}
              </a>
            </Button>
            {secondaryCta && (
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={secondaryCta.href} aria-label={secondaryCta.label}>
                  {secondaryCta.label}
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="relative">
          <img 
            src={media.image.src} 
            alt={media.image.alt} 
            className="w-full h-auto rounded-lg shadow-brand-glow"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroIt;