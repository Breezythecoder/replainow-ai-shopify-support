import { Mail, MessageCircle, Sparkles, CheckCircle } from "lucide-react";

/**
 * BANNER 3: DUAL CHANNEL
 * Shopify App Store Standard: 1600x900px
 */
const BannerDualChannel = () => {
  const banner = {
    badge: "All channels unified",
    mainHeadline: "Email + Live Chat",
    subHeadline: "in one intelligent platform",
    emailTitle: "📧 Email Support",
    emailFeatures: [
      "Gmail-style threading",
      "AI quality scoring 0-100",
      "Auto-send or review mode",
      "Rich text editor + attachments"
    ],
    chatTitle: "💬 Live Chat",
    chatFeatures: [
      "Beautiful multi-tab widget",
      "Proactive chat triggers",
      "Product cards & discount codes",
      "Order tracking integration"
    ],
    footer: "One dashboard. Complete customer context. Perfect collaboration."
  };

  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-20 text-white">
        
        {/* Top Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-lg font-bold text-white">{banner.badge}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold mb-4">{banner.mainHeadline}</h1>
          <p className="text-3xl font-light text-white/90">{banner.subHeadline}</p>
        </div>

        {/* Two-Column Features */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Email Column */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-12 h-12 text-white" />
              <h2 className="text-3xl font-bold">{banner.emailTitle}</h2>
            </div>
            
            <div className="space-y-4">
              {banner.emailFeatures.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span className="text-lg text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Column */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="w-12 h-12 text-white" />
              <h2 className="text-3xl font-bold">{banner.chatTitle}</h2>
            </div>
            
            <div className="space-y-4">
              {banner.chatFeatures.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span className="text-lg text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-2xl font-light text-white/90">{banner.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerDualChannel;

