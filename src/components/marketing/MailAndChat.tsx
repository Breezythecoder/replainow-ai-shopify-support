import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, MessageSquare, CheckCircle2, Globe, Clock } from "lucide-react";
import { t } from "@/i18n";
import { safeObject, safeArray } from "@/utils/safeT";
import { z } from "zod";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const Bullet = ({ Icon, children }: { Icon: any; children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
      <Icon className="h-4 w-4" />
    </span>
    <span className="text-sm text-muted-foreground">{children}</span>
  </li>
);

const SectionSchema = z.object({
  titleMain: z.string().min(1),
  titleHighlight: z.string().min(1),
  subtitle: z.string().min(1),
  mailTitle: z.string().min(1),
  mailAlt: z.string().min(1),
  chatTitle: z.string().min(1),
  chatAlt: z.string().min(1)
});

const FeatureListSchema = z.object({
  mailPrimary: z.array(z.string().min(1)),
  mailSecondary: z.array(z.string().min(1)),
  chatPrimary: z.array(z.string().min(1)),
  chatSecondary: z.array(z.string().min(1))
});

const MailAndChat = () => {
  const sectionContent = safeObject(SectionSchema, "ui.mailAndChat.meta");
  const featureLists = safeObject(FeatureListSchema, "ui.mailAndChat.features");

  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            {sectionContent ? (
              <>
                {sectionContent.titleMain}{" "}
                <span className="text-gradient-primary">{sectionContent.titleHighlight}</span>
              </>
            ) : (
              "AI Mail & Live Chat"
            )}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {sectionContent?.subtitle ?? t("ui.mailAndChat.fallbackSubtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mail */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">{sectionContent?.mailTitle ?? "Mail · AI Inbox"}</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt={sectionContent?.mailAlt ?? "Mail AI Inbox"}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              {featureLists?.mailPrimary?.map((item) => (
                <Bullet key={item} Icon={CheckCircle2}>
                  {item}
                </Bullet>
              ))}
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featureLists?.mailSecondary?.map((item) => (
                <Bullet key={item} Icon={CheckCircle2}>
                  {item}
                </Bullet>
              ))}
            </ul>
          </article>

          {/* Live Chat */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">{sectionContent?.chatTitle ?? "Live Chat"}</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt={sectionContent?.chatAlt ?? "Live chat interface"}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              {featureLists?.chatPrimary?.map((item) => (
                <Bullet key={item} Icon={Clock}>
                  {item}
                </Bullet>
              ))}
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featureLists?.chatSecondary?.map((item, index) => (
                <Bullet key={item} Icon={index === featureLists.chatSecondary.length - 1 ? Globe : CheckCircle2}>
                  {item}
                </Bullet>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label={t("ui.mailAndChat.cta.installAria")}>{t("ui.mailAndChat.cta.install")}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label={t("ui.mailAndChat.cta.demoAria")}>{t("ui.mailAndChat.cta.demo")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChat;
