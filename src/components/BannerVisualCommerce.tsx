import { ShoppingCart, CreditCard, Package, Percent, TrendingUp } from "lucide-react";

/**
 * BANNER 6: VISUAL COMMERCE
 * Shopify App Store Standard: 1600x900px
 */
const BannerVisualCommerce = () => {
  const banner = {
    badge: "Built for conversion",
    mainHeadline: "Support that",
    highlightWord: "sells",
    feature1Title: "Product Cards",
    feature1Desc: "Visual recommendations with images, prices, and 'View Product' buttons",
    feature2Title: "Discount Codes",
    feature2Desc: "One-click copy or auto-apply to cart",
    feature3Title: "Checkout Links",
    feature3Desc: "Pre-filled carts for instant purchase",
    feature4Title: "Order Tracking",
    feature4Desc: "Carrier logos and tracking links",
    conversionTitle: "Result",
    conversionStat: "+187%",
    conversionLabel: "Higher conversion rate",
    footer: "Visual elements that turn support conversations into sales."
  };

  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-rose-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-20 text-white">
        
        {/* Top Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3">
            <ShoppingCart className="w-6 h-6 text-white" />
            <span className="text-lg font-bold text-white">{banner.badge}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <h1 className="text-8xl font-bold mb-6">
            {banner.mainHeadline}{" "}
            <span className="bg-white text-rose-600 px-8 py-2 rounded-2xl">{banner.highlightWord}</span>
          </h1>
        </div>

        {/* 4 Features Grid */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-10">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 rounded-2xl p-4">
                <Package className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{banner.feature1Title}</h3>
                <p className="text-lg text-white/80">{banner.feature1Desc}</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-10">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 rounded-2xl p-4">
                <Percent className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{banner.feature2Title}</h3>
                <p className="text-lg text-white/80">{banner.feature2Desc}</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-10">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 rounded-2xl p-4">
                <CreditCard className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{banner.feature3Title}</h3>
                <p className="text-lg text-white/80">{banner.feature3Desc}</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-10">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 rounded-2xl p-4">
                <Package className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{banner.feature4Title}</h3>
                <p className="text-lg text-white/80">{banner.feature4Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Result Banner */}
        <div className="bg-white text-rose-600 rounded-3xl p-12 text-center">
          <div className="flex items-center justify-center gap-8">
            <TrendingUp className="w-20 h-20" strokeWidth={2} />
            <div className="text-left">
              <div className="text-xl font-semibold mb-2">{banner.conversionTitle}</div>
              <div className="text-8xl font-bold">{banner.conversionStat}</div>
              <div className="text-2xl font-semibold mt-2">{banner.conversionLabel}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-2xl font-light text-white/90">{banner.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerVisualCommerce;

