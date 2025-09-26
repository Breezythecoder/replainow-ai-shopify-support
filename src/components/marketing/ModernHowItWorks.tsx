import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: "⬇️",
      title: "App installieren",
      desc: "1-Klick Installation aus dem Shopify App Store"
    },
    {
      step: "02", 
      icon: "🔗",
      title: "Automatische Verbindung",
      desc: "AI lernt ALLE deine Produkte & Policies automatisch"
    },
    {
      step: "03",
      icon: "🤖",
      title: "AI antwortet sofort",
      desc: "Kunden bekommen perfekte Antworten in 3 Sekunden"
    },
    {
      step: "04",
      icon: "📈",
      title: "Profits explodieren", 
      desc: "+187% Conversion bei 75% niedrigeren Kosten"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-12 sm:mb-16 tracking-tight px-4">
          So einfach <span className="text-gradient-primary">dominierst</span> du den Kundenservice
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl text-white shadow-hero group-hover:shadow-brand-mega group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-white text-indigo-600 font-black text-sm px-3 py-2 rounded-full border-2 border-indigo-200 shadow-lg">
                  {step.step}
                </div>
                {/* Connection Line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 -z-10"></div>
                )}
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-800">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Row */}
        <div className="text-center">
          <Button asChild variant="cta" size="xl" className="text-lg px-4 sm:px-8 md:px-12 py-6 max-w-[95vw]">
            <a href={OAUTH_URL} className="whitespace-nowrap">
              🚀 Kostenlos starten
            </a>
          </Button>
          <p className="text-xs sm:text-sm text-slate-500 mt-4 px-4">
            ✅ 14 Tage kostenlos • ✅ Setup-frei • ✅ Jederzeit kündbar
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernHowItWorks;