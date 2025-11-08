import { RefreshCw, Zap, ArrowRight } from "lucide-react";

/**
 * BANNER 5: REAL-TIME SYNC
 * Shopify App Store Standard: 1600x900px
 */
const BannerRealtimeSync = () => {
  const banner = {
    badge: "Always up-to-date",
    mainHeadline: "Real-time",
    subHeadline: "Shopify synchronization",
    syncTime: "2-10 seconds",
    syncLabel: "From Shopify update to AI knowledge",
    step1: "Change in Shopify",
    step1Desc: "Update product, price, policy",
    step2: "Webhook fires",
    step2Desc: "Instant notification",
    step3: "AI processes",
    step3Desc: "Chunks & embeddings",
    step4: "Knowledge updated",
    step4Desc: "AI uses new information",
    autoImport: "Automatic Import:",
    importTypes: "Products • Orders • Customers • Pages • Policies • Collections • Blogs",
    footer: "Change once in Shopify. AI knows it instantly. No manual updates."
  };

  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative text-center text-white px-20 max-w-7xl">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-12">
          <RefreshCw className="w-6 h-6 text-white" />
          <span className="text-lg font-bold text-white">{banner.badge}</span>
        </div>

        {/* Headline */}
        <div className="mb-16">
          <h1 className="text-8xl font-bold mb-4">{banner.mainHeadline}</h1>
          <p className="text-4xl font-light text-white/90">{banner.subHeadline}</p>
        </div>

        {/* Time Display */}
        <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-3xl p-12 mb-16 inline-block">
          <div className="flex items-center gap-6">
            <Zap className="w-20 h-20 text-white" />
            <div className="text-left">
              <div className="text-7xl font-bold mb-2">{banner.syncTime}</div>
              <div className="text-2xl text-white/80">{banner.syncLabel}</div>
            </div>
          </div>
        </div>

        {/* 4-Step Flow */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 min-w-[200px]">
            <div className="text-5xl font-light mb-2">1</div>
            <div className="text-lg font-semibold mb-1">{banner.step1}</div>
            <div className="text-sm text-white/70">{banner.step1Desc}</div>
          </div>

          <ArrowRight className="w-10 h-10 text-white/60" strokeWidth={2} />

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 min-w-[200px]">
            <div className="text-5xl font-light mb-2">2</div>
            <div className="text-lg font-semibold mb-1">{banner.step2}</div>
            <div className="text-sm text-white/70">{banner.step2Desc}</div>
          </div>

          <ArrowRight className="w-10 h-10 text-white/60" strokeWidth={2} />

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 min-w-[200px]">
            <div className="text-5xl font-light mb-2">3</div>
            <div className="text-lg font-semibold mb-1">{banner.step3}</div>
            <div className="text-sm text-white/70">{banner.step3Desc}</div>
          </div>

          <ArrowRight className="w-10 h-10 text-white/60" strokeWidth={2} />

          <div className="bg-white/15 backdrop-blur border-2 border-white/40 rounded-2xl p-6 min-w-[200px]">
            <div className="text-5xl font-light mb-2">4</div>
            <div className="text-lg font-bold mb-1">{banner.step4}</div>
            <div className="text-sm text-white/80">{banner.step4Desc}</div>
          </div>
        </div>

        {/* Import Types */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mb-10">
          <div className="text-xl font-bold mb-3">{banner.autoImport}</div>
          <div className="text-lg text-white/80">{banner.importTypes}</div>
        </div>

        {/* Footer */}
        <div className="text-2xl text-white/90 font-light">
          {banner.footer}
        </div>
      </div>
    </div>
  );
};

export default BannerRealtimeSync;

