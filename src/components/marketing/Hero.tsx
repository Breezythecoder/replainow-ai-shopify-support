import { useState, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-ai-bg.jpg";

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
        className="relative isolate hero-spotlight"
        onMouseMove={onMove}
        style={{ ['--x' as any]: pos.x, ['--y' as any]: pos.y } as React.CSSProperties}
      >
        <img
          src={heroBg}
          alt="Abstrakte, subtile AI-Hintergrundgrafik"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
        />
        <div className="relative container mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              ReplAInow – Dein KI-gestützter Kundensupport für Shopify
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Automatisiere Antworten, bearbeite Bestellungen und löse Support-Anfragen blitzschnell – direkt in deinem Shopify-Admin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
                <a href={OAUTH_URL}>Jetzt installieren</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#demo">Demo ansehen</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
