import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, MessageSquare, CheckCircle2, Globe, Clock } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Bullet = ({ Icon, children }: { Icon: any; children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
      <Icon className="h-4 w-4" />
    </span>
    <span className="text-sm text-muted-foreground">{children}</span>
  </li>
);

const MailAndChatEn = () => {
  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            AI‑powered Mail & Live Chat — 24/7, fully integrated
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Handle every customer message instantly in any channel. ReplAInow connects to your Shopify store and answers emails
            and live chat messages in under 3 seconds — on‑brand, context‑aware and multilingual.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Mail — AI inbox</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt="ReplAInow mail inbox — AI reply with Shopify data"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={CheckCircle2}>Instant AI replies to customer emails</Bullet>
              <Bullet Icon={Globe}>Shopify data automatically embedded (orders, products, shipping)</Bullet>
              <Bullet Icon={CheckCircle2}>Multilingual and on‑brand tone — automatically</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>Inbox zero, every day</Bullet>
              <Bullet Icon={CheckCircle2}>Precise, Shopify‑integrated answers</Bullet>
              <Bullet Icon={CheckCircle2}>Save 15+ hours per week</Bullet>
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">Live chat — in real time</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt="ReplAInow live chat — AI chat in real time on desktop & mobile"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={Clock}>Fully automated chat support — AI answers around the clock.</Bullet>
              <Bullet Icon={CheckCircle2}>Real‑time Shopify data — order & shipping info, product data, policies on demand.</Bullet>
              <Bullet Icon={CheckCircle2}>Backend overview of all chats — see all conversations in one place.</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>AI auto‑mode toggle — take over anytime or let AI reply.</Bullet>
              <Bullet Icon={CheckCircle2}>Categorize & manage — organize, tag and prioritize chats.</Bullet>
              <Bullet Icon={Globe}>Multilingual support — AI replies in the customer’s language.</Bullet>
            </ul>
          </article>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label="Try ReplAInow for free">Try ReplAInow for free</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label="See live demo">See live demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatEn;
