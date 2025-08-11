import { useState, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-ai-bg.jpg";
import { ShieldCheck, Zap, Plug } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Hero = () => {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <section aria-label="ReplAInow Hero" className="relative overflow-hidden">
      <div
        className="relative isolate hero-spotlight bg-gradient-primary"
        onMouseMove={onMove}
        style={{ ['--x' as any]: pos.x, ['--y' as any]: pos.y } as React.CSSProperties}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 speed-lines" />
        <div className="relative container mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left md:order-2">
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary-foreground">
                Maximiere deinen Kundensupport – mit KI-Power für Shopify.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
                ReplAInow beantwortet Kundenanfragen blitzschnell, präzise und direkt aus deinem Shopify-Admin – 24/7, DSGVO-konform.
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                <Button asChild size="lg" variant="default" className="w-full sm:w-auto rounded-full h-12 px-6">
                  <a href={OAUTH_URL}>Jetzt installieren</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-12 px-6">
                  <a href="#live-demo">Demo ansehen</a>
                </Button>
              </div>
              <p className="mt-2 text-sm text-primary-foreground/80">In 2 Minuten startklar. Ohne Kreditkarte. Ohne Risiko.</p>
              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-primary-foreground/90">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1"><ShieldCheck className="size-4" /> DSGVO-konform</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1"><Zap className="size-4" /> Antwort in Sekunden</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1"><Plug className="size-4" /> Nahtlose Shopify Integr.</span>
              </div>
            </div>
            <figure className="hidden md:block md:order-1">
              <img
                src={heroBg}
                alt="Shopify Inbox Mockup mit KI-Antwort"
                className="w-full h-auto rounded-xl border shadow-brand-glow"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption className="sr-only">Subtile AI/Chat-Illustration</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
