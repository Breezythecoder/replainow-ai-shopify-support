import { useState, useEffect, useRef } from "react";
import { STORE_COUNT } from "@/config/siteStats";
import { Brain, Zap, Clock, Globe, Target, Shield, TrendingUp, Users, MessageSquare, BarChart3, CheckCircle, Download } from "lucide-react";

const ModernFeaturesEn = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Brain,
      title: "GPT-4.1 Intelligence",
      desc: "Latest AI technology understands context like a human expert",
      gradient: "from-indigo-500 to-blue-500",
      story: "Your AI thinks like a 10-year Shopify expert - just 1000x faster",
      impact: "+187% Conversion",
      color: "cyan"
    },
    {
      icon: Clock,
      title: "3-Second Responses",
      desc: "Instant responses while Gorgias & Co. are still loading",
      gradient: "from-purple-500 to-pink-500",
      story: "Customer asks → AI responds → Customer buys. Everything in 3 seconds",
      impact: "90% fewer tickets",
      color: "purple"
    },
    {
      icon: Globe,
      title: "32+ Native Languages",
      desc: "Perfect answers in customer language - no translation errors",
      gradient: "from-cyan-500 to-teal-500",
      story: "French customer gets perfect answer in French",
      impact: "+45% International",
      color: "teal"
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      desc: "Full data protection compliance for European customers",
      gradient: "from-green-500 to-emerald-500",
      story: "Your customer data is safe and compliant with European standards",
      impact: "100% Compliant",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "75% Cost Savings",
      desc: "Reduce support costs while improving customer satisfaction",
      gradient: "from-orange-500 to-red-500",
      story: "Save thousands on support staff while providing better service",
      impact: "€2,400/month saved",
      color: "orange"
    },
    {
      icon: Users,
      title: "24/7 Availability",
      desc: "Never miss a customer inquiry, even at 3 AM",
      gradient: "from-blue-500 to-indigo-500",
      story: "Your AI never sleeps, never takes breaks, always responds",
      impact: "100% Uptime",
      color: "blue"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={featuresRef}
      id="features" 
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
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
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ReplAInow</span>?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Transform your Shopify store with AI-powered customer support
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Feature Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Feature Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 text-sm italic mb-2">
                    "{feature.story}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-sm">
                      {feature.impact}
                    </span>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Support?
            </h3>
            <p className="text-blue-200 mb-6">
              Join {STORE_COUNT} satisfied Shopify merchants and start saving today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.shopify.com/replainow-ai-support" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="#live-demo" 
                className="border border-blue-400 bg-white/10 backdrop-blur-lg text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300 font-semibold shadow-lg px-8 py-4 rounded-xl"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesEn;
