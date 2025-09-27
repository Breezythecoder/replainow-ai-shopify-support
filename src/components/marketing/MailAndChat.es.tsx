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

const MailAndChatEs = () => {
  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            Mail & Live Chat con IA  24/7, Completamente Integrado
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Maneja cada mensaje de cliente instantneamente en cualquier canal. ReplAInow se conecta a tu tienda Shopify y responde emails
            y mensajes de live chat en menos de 3 segundos  conforme a marca, consciente del contexto y multiidioma.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mail */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Mail  Bandeja IA</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt="Bandeja Mail ReplAInow  Respuesta IA con datos Shopify"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={CheckCircle2}>Respuestas IA instantneas a emails de clientes</Bullet>
              <Bullet Icon={Globe}>Datos Shopify embebidos automticamente (pedidos, productos, envo)</Bullet>
              <Bullet Icon={CheckCircle2}>Tono multiidioma y conforme a marca  automticamente</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Bandeja cero, todos los das</Bullet>
              <Bullet Icon={CheckCircle2}>Respuestas precisas, integradas con Shopify</Bullet>
              <Bullet Icon={CheckCircle2}>Ahorra 15+ horas por semana</Bullet>
            </ul>
          </article>

          {/* Live Chat */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Live Chat  en tiempo real</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt="ReplAInow Live Chat  Chat IA en tiempo real en desktop y mvil"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={Clock}>Soporte de chat completamente automtico  IA responde consultas las 24 horas.</Bullet>
              <Bullet Icon={CheckCircle2}>Datos Shopify en tiempo real  info de pedidos y envo, datos de productos, polticas accesibles al instante.</Bullet>
              <Bullet Icon={CheckCircle2}>Vista backend de todos los chats  comerciantes ven todas las conversaciones en curso centralmente.</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Toggle de modo auto IA  comerciantes pueden tomar control en cualquier momento o dejar que IA responda.</Bullet>
              <Bullet Icon={CheckCircle2}>Categorizacin y gestin  organizar, etiquetar y priorizar chats.</Bullet>
              <Bullet Icon={Globe}>Soporte multiidioma  IA responde automticamente en el idioma del cliente.</Bullet>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label="Probar ReplAInow gratis">Probar ReplAInow Gratis</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label="Ver demo en vivo">Ver Demo en Vivo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatEs;