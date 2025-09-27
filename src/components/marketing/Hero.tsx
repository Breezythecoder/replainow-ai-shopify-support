import { useState, MouseEvent, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Plug, Star } from "lucide-react";
import { heroContent as content } from "@/content/hero";
import { OptimizedImage, performanceMonitor } from "@/components/ui/performance";

const Hero = () => {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const onMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  }, []);

  return (
    <section aria-label="ReplAInow Hero" className="relative overflow-hidden bg-gradient-primary">
      <div
        className="relative hero-spotlight min-h-[600px] md:min-h-[700px]"
        onMouseMove={onMove}
        style={{ ["--x" as any]: pos.x, ["--y" as any]: pos.y } as React.CSSProperties}
      >
        {/* Optionaler Hintergrund (austauschbar) */}
        {content.media.background?.src && (
          <OptimizedImage
            src={content.media.background.src}
            alt={content.media.background.alt}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 z-0"
            priority={true}
            sizes="100vw"
          />
        )}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 speed-lines z-0" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Textspalte */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary-foreground">
                {content.headline}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
                {content.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                <Button asChild size="lg" variant="hero" className="w-full sm:w-auto rounded-full h-12 px-6">
                  <a href={content.primaryCta.href} aria-label={content.primaryCta.label}>
                    {content.primaryCta.label}
                  </a>
                </Button>
                {content.secondaryCta?.href && (
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-12 px-6">
                    <a href={content.secondaryCta.href} aria-label={content.secondaryCta.label}>
                      {content.secondaryCta.label}
                    </a>
                  </Button>
                )}
              </div>

              <p className="mt-2 text-sm text-primary-foreground/80">
                In 2 Minuten startklar. Ohne Kreditkarte. Ohne Risiko.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-primary-foreground/90">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1">
                  <ShieldCheck className="size-4" /> DSGVO-konform
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1">
                  <Zap className="size-4" /> Antwort in Sekunden
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1">
                  <Plug className="size-4" /> Nahtlose Shopify Integr.
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3 text-primary-foreground/90">
                <span className="inline-flex items-center gap-2 text-sm">
                  <Star className="size-4 fill-current" aria-hidden="true" />
                  <span>4.9/5 im Shopify App Store</span>
                </span>
                <span className="hidden md:inline text-sm opacity-80"></span>
                <span className="text-sm">Vertraut von Shopify-Merchant-Teams</span>
              </div>
            </div>

            {/* Medien-/Screenshotspalte */}
            <figure className="order-1 md:order-2">
              <OptimizedImage
                src={content.media.image.src}
                alt={content.media.image.alt}
                className="w-full max-w-[560px] md:max-w-[640px] mx-auto rounded-xl shadow-brand hover-lift ring-1 ring-brand-primary/10 object-contain"
                priority={true}
                sizes="(min-width: 768px) 640px, 100vw"
                width={640}
                height={400}
              />
              <figcaption className="sr-only">{content.media.image.alt}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
