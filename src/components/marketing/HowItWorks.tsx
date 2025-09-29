import { Button } from "@/components/ui/button";
import { Plug, Database, Bot, Settings2 } from "lucide-react";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { t } from "@/i18n";
import { safeArray } from "@/utils/safeT";
import { z } from "zod";

const StepSchema = z.object({
  title: z.string(),
  description: z.string()
});

const StepsArraySchema = z.array(StepSchema);

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

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

const HowItWorks = () => {
  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  // Get steps from i18n
  const steps = safeArray(StepsArraySchema, "ui.howItWorks.steps");
  const icons = [Plug, Database, Bot]; // Only 3 icons for 3 steps

  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="py-16 md:py-24">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 id="how-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            {t("ui.howItWorks.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("ui.howItWorks.subtitle")}
          </p>
        </header>

        <div className="relative max-w-6xl mx-auto">
          {/* Decorative connecting line (desktop) */}
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
            {steps.map((step, index) => (
              <Step 
                key={index}
                Icon={icons[index] || Plug} 
                title={step.title} 
                desc={step.description} 
              />
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-10 md:mt-14">
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
              <a href={OAUTH_URL}>{t("ui.howItWorks.ctaInstall")}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#live-demo" onClick={(e) => handleNavClick(e, 'live-demo')} className="cursor-pointer">{t("ui.howItWorks.ctaDemo")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
