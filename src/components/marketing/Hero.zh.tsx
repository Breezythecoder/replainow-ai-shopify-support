import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero.zh";
import heroBackground from "@/assets/hero-ai-bg.jpg";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const HeroZh = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="AI客服背景"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={OAUTH_URL}>{heroContent.primaryCTA}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#live-demo">{heroContent.secondaryCTA}</a>
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {heroContent.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-card border shadow-sm">
                <span className="text-sm font-medium text-center">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroZh;