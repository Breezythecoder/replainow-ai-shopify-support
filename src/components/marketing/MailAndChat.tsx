import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, MessageSquare, CheckCircle2, Globe, Clock } from "lucide-react";
import { t } from "@/i18n";
import { safeObject, safeArray } from "@/utils/safeT";
import { z } from "zod";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const Bullet = ({ Icon, children }: { Icon: any; children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mt-0.5">
      <Icon className="h-3 w-3" />
    </span>
    <span className="text-sm text-slate-600 font-medium leading-relaxed">{children}</span>
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
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* AI-Powered Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        
        {/* Floating AI Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl relative z-10">
        <header className="mb-16 text-center">
          <h2 id="mail-live-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            {sectionContent ? (
              <>
                <span className="text-white">{sectionContent.titleMain} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">{sectionContent.titleHighlight}</span>
              </>
            ) : (
              <span className="text-white">AI Mail & Live Chat</span>
            )}
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
            {sectionContent?.subtitle ?? t("ui.mailAndChat.fallbackSubtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mail */}
          <article className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-102 group">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-xl text-slate-800">{sectionContent?.mailTitle ?? "Mail · AI Inbox"}</h3>
            </div>

            <figure className="rounded-2xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50 p-2 shadow-inner mb-6">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt={sectionContent?.mailAlt ?? "Mail AI Inbox"}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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
          <article className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-102 group">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                <MessageSquare className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-xl text-slate-800">{sectionContent?.chatTitle ?? "Live Chat"}</h3>
            </div>

            <figure className="rounded-2xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50 to-pink-50 p-2 shadow-inner mb-6">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/assets/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt={sectionContent?.chatAlt ?? "Live chat interface"}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default MailAndChat;
