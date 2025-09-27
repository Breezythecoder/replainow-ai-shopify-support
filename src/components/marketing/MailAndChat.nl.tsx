import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, MessageSquare, CheckCircle2, Globe, Clock } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const Bullet = ({ Icon, children }: { Icon: any; children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
      <Icon className="h-4 w-4" />
    </span>
    <span className="text-sm text-muted-foreground">{children}</span>
  </li>
);

const MailAndChatNl = () => {
  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            AI-Powered Mail & Live Chat  24/7, volledig gentegreerd
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Behandel elk klantbericht direct in elk kanaal. ReplAInow verbindt zich met je ShopifyStore en beantwoordt emails
            en livechatberichten in onder 3 seconden  merkconform, contextbewust en meertalig.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mail */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Mail  AIInbox</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt="ReplAInow Mail Inbox  AIantwoord met Shopifydata"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={CheckCircle2}>Directe AIantwoorden op klantemails</Bullet>
              <Bullet Icon={Globe}>Shopifydata automatisch ingebed (bestellingen, producten, verzending)</Bullet>
              <Bullet Icon={CheckCircle2}>Meertalig en merkconforme toon  automatisch</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Inbox zero, elke dag</Bullet>
              <Bullet Icon={CheckCircle2}>Precieze, Shopifygentegreerde antwoorden</Bullet>
              <Bullet Icon={CheckCircle2}>Bespaar 15+ uur per week</Bullet>
            </ul>
          </article>

          {/* Live Chat */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">LiveChat  in realtime</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt="ReplAInow Live Chat  AIchat in realtime op desktop & mobile"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={Clock}>Vollautomatische chatondersteuning  AI beantwoordt vragen 24/7.</Bullet>
              <Bullet Icon={CheckCircle2}>Shopifydata in realtime  bestel & verzendinfo, productgegevens, beleid direct beschikbaar.</Bullet>
              <Bullet Icon={CheckCircle2}>Backendoverzicht van alle chats  merchants zien alle lopende gesprekken centraal.</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>AI Automodus schakelaar  merchant kan altijd zelf overnemen of AI laten antwoorden.</Bullet>
              <Bullet Icon={CheckCircle2}>Categorisering & beheer  chats organiseren, taggen en prioriteren.</Bullet>
              <Bullet Icon={Globe}>Meertalige ondersteuning  AI antwoordt automatisch in de taal van de klant.</Bullet>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label="ReplAInow gratis testen">ReplAInow Gratis Testen</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label="Live-demo bekijken">Live-demo Bekijken</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatNl;