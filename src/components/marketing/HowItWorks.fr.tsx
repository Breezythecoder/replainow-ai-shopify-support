import { Button } from "@/components/ui/button";
import { Plug, Database, Bot, Settings2 } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Step = ({
  Icon,
  title,
  desc,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}) => (
  <div className="rounded-xl border bg-card p-5 shadow-sm h-full">
    <div className="flex items-start gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-brand">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-medium leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 leading-snug">{desc}</p>
      </div>
    </div>
  </div>
);

const HowItWorksFr = () => {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="py-16 md:py-24">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 id="how-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Commencez en quelques minutes
          </h2>
          <p className="text-muted-foreground">
            Installer, connecter, envoyer des réponses – et automatiser avec des règles.
          </p>
        </header>

        <div className="relative max-w-6xl mx-auto">
          <svg className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-6" width="720" height="40" viewBox="0 0 720 40" fill="none">
            <defs>
              <linearGradient id="how-g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M0 20 C 120 20, 240 20, 360 20 C 480 20, 600 20, 720 20" stroke="url(#how-g)" strokeWidth="2" />
          </svg>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Step Icon={Plug} title="Installer" desc="1 clic dans Shopify App Store." />
            <Step Icon={Database} title="Connecter" desc="Accès temps réel aux données Shopify." />
            <Step Icon={Bot} title="Répondre" desc="Suggestions IA directement dans admin." />
            <Step Icon={Settings2} title="Automatiser" desc="Règles & envoi automatique optionnels." />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-10 md:mt-14">
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
              <a href={OAUTH_URL}>Essayer gratuitement</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#live-demo">Voir la démo en direct</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFr;