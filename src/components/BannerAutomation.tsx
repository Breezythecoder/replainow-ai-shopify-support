import { Brain, TrendingDown, Sparkles, BarChart3 } from "lucide-react";

/**
 * BANNER 2: AUTOMATION POWER
 * Shopify App Store Standard: 1600x900px
 */
const BannerAutomation = () => {
  const banner = {
    badge: "AI that actually works",
    mainHeadline: "AI handles",
    percentage: "60-80%",
    subHeadline: "of your support tickets",
    tagline: "Automatically. Precisely. Around the clock.",
    beforeTitle: "WITHOUT ReplAInow",
    afterTitle: "WITH ReplAInow",
    metric1Label: "Support Tickets/Month",
    metric1Before: "847",
    metric1After: "110",
    metric1Change: "↓ 87% less",
    metric2Label: "Average Response Time",
    metric2Before: "45 Min",
    metric2After: "<2 Min",
    metric2Change: "↓ 95% faster",
    metric3Label: "Agents",
    metric3Before: "3",
    metric3BeforeDesc: "Full-time needed",
    metric3After: "1",
    metric3AfterDesc: "For complex cases",
    metric3AfterNote: "AI handles the rest",
    footer: "AI works 24/7. Your team focuses on conversations that truly matter."
  };

  return (
    <div className="w-[1600px] h-[900px] bg-white flex items-center justify-center relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-100 border border-purple-200 rounded-full mb-8">
            <Brain className="w-5 h-5 text-purple-600" />
            <span className="font-bold text-purple-900">{banner.badge}</span>
          </div>

          <h1 className="text-7xl font-light text-gray-900 mb-6">
            {banner.mainHeadline}{" "}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              {banner.percentage}
            </span>
            <br/>{banner.subHeadline}
          </h1>

          <p className="text-2xl text-gray-600">
            {banner.tagline}
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-2 gap-12">
          
          {/* BEFORE (Left) */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12 border-2 border-pink-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-pink-100 border border-pink-200 rounded-full mb-4">
                  <span className="font-bold text-pink-900">{banner.beforeTitle}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-200">
                  <div className="flex items-center gap-6">
                    <TrendingDown className="w-16 h-16 text-pink-600 flex-shrink-0" />
                    <div>
                      <div className="text-5xl font-bold text-gray-900 mb-1">{banner.metric1Before}</div>
                      <div className="text-gray-600 text-lg">{banner.metric1Label}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-200">
                  <div className="flex items-center gap-6">
                    <BarChart3 className="w-16 h-16 text-pink-600 flex-shrink-0" />
                    <div>
                      <div className="text-5xl font-bold text-gray-900 mb-1">{banner.metric2Before}</div>
                      <div className="text-gray-600 text-lg">{banner.metric2Label}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-200">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-3xl flex-shrink-0">
                      {banner.metric3Before}
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-gray-900 mb-1">{banner.metric3Label}</div>
                      <div className="text-gray-600 text-lg">{banner.metric3BeforeDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AFTER (Right) */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="font-bold text-white">{banner.afterTitle}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                  <div className="flex items-center gap-6">
                    <TrendingDown className="w-16 h-16 text-white flex-shrink-0" />
                    <div>
                      <div className="text-5xl font-bold text-white mb-1">{banner.metric1After}</div>
                      <div className="text-white/90 text-lg">{banner.metric1Label}</div>
                      <div className="text-white/70 text-sm mt-1">{banner.metric1Change}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                  <div className="flex items-center gap-6">
                    <Sparkles className="w-16 h-16 text-white flex-shrink-0" />
                    <div>
                      <div className="text-5xl font-bold text-white mb-1">{banner.metric2After}</div>
                      <div className="text-white/90 text-lg">{banner.metric2Label}</div>
                      <div className="text-white/70 text-sm mt-1">{banner.metric2Change}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-4xl text-white flex-shrink-0">
                      {banner.metric3After}
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-white mb-1">{banner.metric3Label}</div>
                      <div className="text-white/90 text-lg">{banner.metric3AfterDesc}</div>
                      <div className="text-white/70 text-sm mt-1">{banner.metric3AfterNote}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Value Line */}
        <div className="text-center mt-16">
          <div className="text-2xl text-gray-700">
            {banner.footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAutomation;

