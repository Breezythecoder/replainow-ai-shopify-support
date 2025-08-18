import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-ai-bg.jpg";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const HeroNl = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      onMouseMove={onMove}
      style={{
        '--x': `${pos.x}px`,
        '--y': `${pos.y}px`,
      } as React.CSSProperties}
    >
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Shopify{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                  Klantenservice
                </span>{" "}
                geautomatiseerd
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Beantwoord klantenvragen in seconden met AI die direct toegang heeft tot je Shopify-data. 
                GDPR-conform en volledig aangepast aan jouw merk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <a href={OAUTH_URL}>14 dagen gratis testen</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <a href="#live-demo">Live Demo bekijken</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                GDPR-conform
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Antwoord in seconden
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                24/7 beschikbaar
              </span>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5</span>
              <span className="text-sm text-muted-foreground">op Shopify App Store</span>
            </div>
          </div>

          <div className="relative">
            <figure className="relative">
              <img
                src={heroImage}
                alt="ReplAInow AI-interface toont automatische Shopify klantenservice met productinformatie, bestellingsstatus en gepersonaliseerde antwoorden"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              <figcaption className="sr-only">
                ReplAInow AI-dashboard dat laat zien hoe kunstmatige intelligentie automatisch klantenvragen beantwoordt 
                met real-time Shopify-data zoals productdetails, bestellingsstatus en gepersonaliseerde aanbevelingen
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNl;