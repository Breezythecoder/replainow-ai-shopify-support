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

const MailAndChatPt = () => {
  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            Mail & Live Chat com IA  24/7, Totalmente Integrado
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Lide com cada mensagem do cliente instantaneamente em qualquer canal. ReplAInow se conecta  sua loja Shopify e responde emails
            e mensagens de live chat em menos de 3 segundos  conforme  marca, consciente do contexto e multilngue.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mail */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Mail  Caixa IA</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt="Caixa Mail ReplAInow  Resposta IA com dados Shopify"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={CheckCircle2}>Respostas IA instantneas para emails de clientes</Bullet>
              <Bullet Icon={Globe}>Dados Shopify incorporados automaticamente (pedidos, produtos, envio)</Bullet>
              <Bullet Icon={CheckCircle2}>Tom multilngue e conforme  marca  automaticamente</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Caixa zero, todos os dias</Bullet>
              <Bullet Icon={CheckCircle2}>Respostas precisas, integradas ao Shopify</Bullet>
              <Bullet Icon={CheckCircle2}>Economiza 15+ horas por semana</Bullet>
            </ul>
          </article>

          {/* Live Chat */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Live Chat  em tempo real</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt="ReplAInow Live Chat  Chat IA em tempo real no desktop e mobile"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={Clock}>Suporte de chat totalmente automtico  IA responde consultas 24 horas por dia.</Bullet>
              <Bullet Icon={CheckCircle2}>Dados Shopify em tempo real  info de pedidos & envio, dados de produtos, polticas acessveis instantaneamente.</Bullet>
              <Bullet Icon={CheckCircle2}>Viso backend de todos os chats  comerciantes veem todas as conversas em andamento centralmente.</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Toggle de modo auto IA  comerciantes podem assumir controle a qualquer momento ou deixar IA responder.</Bullet>
              <Bullet Icon={CheckCircle2}>Categorizao & gesto  organizar, etiquetar e priorizar chats.</Bullet>
              <Bullet Icon={Globe}>Suporte multilngue  IA responde automaticamente no idioma do cliente.</Bullet>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label="Testar ReplAInow grtis">Testar ReplAInow Grtis</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label="Ver demo ao vivo">Ver Demo ao Vivo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatPt;