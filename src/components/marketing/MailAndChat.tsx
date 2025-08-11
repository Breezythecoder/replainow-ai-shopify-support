import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, MessageSquare, CheckCircle2, Globe, Clock, Rocket } from "lucide-react";
import inboxImg from "@/assets/mock-inbox.jpg";
import chatImg from "@/assets/mock-chat.jpg";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Bullet = ({ Icon, children }: { Icon: any; children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
      <Icon className="h-4 w-4" />
    </span>
    <span className="text-sm text-muted-foreground">{children}</span>
  </li>
);

const MailAndChat = () => {
  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            AI-Powered Mail & Live Chat – 24/7, Fully Integrated
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Handle every customer message instantly in any channel. ReplAInow verbindet sich mit deinem Shopify‑Store und beantwortet E‑Mails
            und Live‑Chat‑Nachrichten in unter 3 Sekunden – markenkonform, kontextbewusst und mehrsprachig.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mail */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Mail – AI‑Inbox</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src={inboxImg}
                  alt="ReplAInow Mail Inbox – AI‑Antwort mit Shopify‑Daten"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={CheckCircle2}>Sofortige AI‑Antworten auf Kunden‑E‑Mails</Bullet>
              <Bullet Icon={Globe}>Shopify‑Daten automatisch eingebettet (Bestellungen, Produkte, Versand)</Bullet>
              <Bullet Icon={Rocket}>Mehrsprachig und markenkonformer Ton – automatisch</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Inbox zero, jeden Tag</Bullet>
              <Bullet Icon={CheckCircle2}>Präzise, Shopify‑integrierte Antworten</Bullet>
              <Bullet Icon={CheckCircle2}>Spare 15+ Stunden pro Woche</Bullet>
            </ul>
          </article>

          {/* Live Chat */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Live‑Chat – in Echtzeit</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src={chatImg}
                  alt="ReplAInow Live Chat – AI‑Chat in Echtzeit auf Desktop & Mobile"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={Clock}>AI‑Chat‑Antworten in unter 3 Sekunden</Bullet>
              <Bullet Icon={Rocket}>Kontext‑aware Vorschläge & Auto‑Send‑Regeln</Bullet>
              <Bullet Icon={Globe}>Nahtloses Human‑Handoff bei Bedarf</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>24/7 sofortige Antworten</Bullet>
              <Bullet Icon={CheckCircle2}>Höhere Conversion durch schnelleren Support</Bullet>
              <Bullet Icon={CheckCircle2}>Mehrsprachiger Support</Bullet>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label="ReplAInow kostenlos testen">Try ReplAInow for Free</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label="Live-Demo ansehen">See Live Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChat;
