import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Globe, Users } from "lucide-react";
import { STORE_COUNT } from "@/config/siteStats";
import { smoothScrollToElement } from "@/utils/smoothScroll";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHeroEn = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
      onMouseMove={onMove}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Dynamic Holographic Light */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 30%, transparent 70%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI Helpdesk for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Shopify
                </span>
                .
              </h1>
              <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
                Responds in 3 seconds
              </p>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto lg:mx-0">
                Revolutionary GPT-4.1 AI with real-time Shopify data: Higher conversion, faster responses, 90% fewer support tickets.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{STORE_COUNT}</div>
                <div className="text-blue-200 text-sm">Active Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">3s</div>
                <div className="text-blue-200 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">32+</div>
                <div className="text-blue-200 text-sm">Languages</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <a href={OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  INSTALL NOW
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white border-2 bg-white/10 backdrop-blur-lg text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300 font-semibold shadow-lg px-8 py-4 text-lg rounded-xl"
              >
                <a href="#live-demo" onClick={(e) => handleNavClick(e, 'live-demo')}>
                  <Play className="mr-2 h-5 w-5" />
                  View Live Demo
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-blue-200 text-sm mb-4">Trusted by 280+ Shopify merchants worldwide</p>
              <div className="flex justify-center lg:justify-start space-x-6 text-blue-200 text-sm">
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  3s Response
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  32+ Languages
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  280+ Stores
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Demo Preview */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
              {/* Demo Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-blue-200 text-sm ml-4">ReplAInow AI Assistant</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-green-400 text-sm mb-2">Customer:</div>
                  <div className="text-white">"What's your return policy?"</div>
                </div>
                
                <div className="bg-blue-600 rounded-lg p-4">
                  <div className="text-blue-200 text-sm mb-2">AI Assistant (3s later):</div>
                  <div className="text-white">"Our return policy allows returns within 30 days. Here are the details..."</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                    <Zap className="h-4 w-4 mr-2" />
                    Instant Response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroEn;
