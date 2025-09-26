import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHowItWorksFr = () => {
  const steps = [
    { step: "01", icon: "⬇️", title: "Installer l'app", desc: "Installation en 1 clic depuis Shopify App Store" },
    { step: "02", icon: "🔗", title: "Connexion automatique", desc: "L'IA apprend tous vos produits & politiques" },
    { step: "03", icon: "🤖", title: "IA répond instantanément", desc: "Réponses parfaites en 3 secondes" },
    { step: "04", icon: "📈", title: "Les profits explosent", desc: "+187% de conversion à 75% moins cher" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 tracking-tight px-4 text-center">
          Comment vous <span className="text-gradient-primary">dominez</span> le support client
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((s, i) => (
            <div key={i} className="text-center group px-4">
              <div className="relative mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-3xl sm:text-4xl text-white shadow-hero group-hover:shadow-brand-mega group-hover:scale-110 transition-all duration-300">
                  {s.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-white text-indigo-600 font-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full border-2 border-indigo-200 shadow-lg">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 sm:top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 -z-10"></div>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-slate-800 px-2">{s.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed px-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center px-4">
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 font-bold min-h-[56px] max-w-md mx-auto">
            <a href={OAUTH_URL} className="flex items-center justify-center gap-2">🚀 Commencer Gratuitement</a>
          </Button>
          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">✅ 14 jours gratuits • ✅ Sans setup • ✅ Résiliable à tout moment</p>
        </div>
      </div>
    </section>
  );
};

export default ModernHowItWorksFr;