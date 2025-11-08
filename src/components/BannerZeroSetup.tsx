import { Clock, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * BANNER 1: ZERO SETUP
 * Shopify App Store Standard: 1600x900px
 */
const BannerZeroSetup = () => {
  // Temporary: Hardcoded EN text for quick testing
  const banner = {
    badge: "AI Helpdesk for Shopify",
    timeValue: "60",
    timeUnit: "SECONDS",
    timeLabel: "From Installation to Live Support",
    headline1: "Zero configuration.",
    headline2: "Zero knowledge base.",
    headline3: "Zero training.",
    description: "Just install – AI instantly knows your complete shop.",
    step1Title: "Install",
    step1Desc: "Shopify App Store",
    step2Title: "Activate Widget",
    step2Desc: "One Click",
    step3Title: "Live!",
    step3Desc: "AI responds immediately",
    footer: "Automatic Import: Products • Orders • Policies • Customers"
  };

  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative text-center text-white px-20 max-w-6xl">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-12">
          <Zap className="w-6 h-6 text-white" />
          <span className="text-lg font-bold text-white">{banner.badge}</span>
        </div>

        {/* Giant Time Display */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-8 mb-8">
            <Clock className="w-32 h-32 text-white/90" strokeWidth={1.5} />
            <div className="text-left">
              <div className="text-[160px] font-light leading-none mb-2">{banner.timeValue}</div>
              <div className="text-5xl font-semibold tracking-wide">{banner.timeUnit}</div>
            </div>
          </div>
          
          <div className="w-64 h-2 bg-white/30 rounded-full mx-auto mb-8"></div>
          
          <div className="text-4xl font-bold tracking-wide">
            {banner.timeLabel}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-2xl text-white/90 mb-14 font-light leading-relaxed">
          <span className="font-bold">{banner.headline1}</span> {banner.headline2}<br/>
          <span className="font-bold">{banner.headline3}</span> {banner.description}
        </div>

        {/* 3-Step Visual */}
        <div className="flex items-center justify-center gap-6">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-8 py-6 min-w-[280px]">
            <div className="text-6xl font-light mb-3">1.</div>
            <div className="text-lg font-semibold">{banner.step1Title}</div>
            <div className="text-sm text-white/80 mt-2">{banner.step1Desc}</div>
          </div>

          <ArrowRight className="w-12 h-12 text-white/60" strokeWidth={2} />

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-8 py-6 min-w-[280px]">
            <div className="text-6xl font-light mb-3">2.</div>
            <div className="text-lg font-semibold">{banner.step2Title}</div>
            <div className="text-sm text-white/80 mt-2">{banner.step2Desc}</div>
          </div>

          <ArrowRight className="w-12 h-12 text-white/60" strokeWidth={2} />

          {/* Step 3 */}
          <div className="bg-white/15 backdrop-blur border-2 border-white/40 rounded-2xl px-8 py-6 min-w-[280px]">
            <CheckCircle2 className="w-16 h-16 text-white mb-2 mx-auto" />
            <div className="text-lg font-bold">{banner.step3Title}</div>
            <div className="text-sm text-white/90 mt-2">{banner.step3Desc}</div>
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-14 text-lg text-white/80 font-light">
          {banner.footer}
        </div>
      </div>
    </div>
  );
};

export default BannerZeroSetup;

