import { Button } from "@/components/ui/button";
import { Download, Zap, Brain, TrendingUp } from "lucide-react";
import { smoothScrollToElement } from "@/utils/smoothScroll";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHowItWorksEn = () => {
  const steps = [
    {
      step: "01",
      icon: <Download className="w-8 h-8" />,
      title: "Install App",
      desc: "1-Click installation from Shopify App Store"
    },
    {
      step: "02", 
      icon: <Zap className="w-8 h-8" />,
      title: "Automatic Connection",
      desc: "AI learns ALL your products & policies automatically"
    },
    {
      step: "03",
      icon: <Brain className="w-8 h-8" />,
      title: "AI Responds Instantly",
      desc: "Customers get perfect answers in 3 seconds"
    },
    {
      step: "04",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Profits Explode", 
      desc: "+187% Conversion with 75% lower costs"
    }
  ];

  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Get your AI-powered support running in minutes, not months
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                {step.step}
              </div>

              {/* Step Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 pt-12 group-hover:scale-105 transition-all duration-300 group-hover:bg-white/10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-200 mb-6">
              Join 280+ satisfied Shopify merchants and transform your support today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <a href={OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  Install Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white border-2 bg-white/10 backdrop-blur-lg text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300 font-semibold shadow-lg px-8 py-4 text-lg rounded-xl"
              >
                <a href="#live-demo" onClick={(e) => handleNavClick(e, 'live-demo')}>
                  View Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHowItWorksEn;
