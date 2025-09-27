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

const MailAndChatFr = () => {
  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            Mail & Live Chat IA  24/7, Entirement Intgr
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Grez chaque message client instantanment sur n'importe quel canal. ReplAInow se connecte  votre boutique Shopify et rpond aux emails
            et messages de live chat en moins de 3 secondes  conforme  la marque, conscient du contexte et multilingue.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mail */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Mail  Bote IA</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt="Bote Mail ReplAInow  Rponse IA avec donnes Shopify"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={CheckCircle2}>Rponses IA instantanes aux emails clients</Bullet>
              <Bullet Icon={Globe}>Donnes Shopify intgres automatiquement (commandes, produits, livraison)</Bullet>
              <Bullet Icon={CheckCircle2}>Ton multilingue et conforme  la marque  automatiquement</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Bote zro, tous les jours</Bullet>
              <Bullet Icon={CheckCircle2}>Rponses prcises, intgres Shopify</Bullet>
              <Bullet Icon={CheckCircle2}>conomise 15+ heures par semaine</Bullet>
            </ul>
          </article>

          {/* Live Chat */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Live Chat  en temps rel</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt="ReplAInow Live Chat  Chat IA en temps rel sur desktop et mobile"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={Clock}>Support de chat entirement automatique  l'IA rpond aux demandes 24h/24.</Bullet>
              <Bullet Icon={CheckCircle2}>Donnes Shopify en temps rel  infos commandes & livraison, donnes produits, politiques accessibles instantanment.</Bullet>
              <Bullet Icon={CheckCircle2}>Vue backend de tous les chats  les marchands voient toutes les conversations en cours centralement.</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Basculer mode auto IA  les marchands peuvent prendre le contrle  tout moment ou laisser l'IA rpondre.</Bullet>
              <Bullet Icon={CheckCircle2}>Catgorisation & gestion  organiser, tiqueter et prioriser les chats.</Bullet>
              <Bullet Icon={Globe}>Support multilingue  l'IA rpond automatiquement dans la langue du client.</Bullet>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label="Essayer ReplAInow gratuitement">Essayer ReplAInow Gratuitement</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label="Voir la dmo en direct">Voir la Dmo en Direct</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatFr;