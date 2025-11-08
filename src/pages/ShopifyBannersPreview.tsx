import { useState } from "react";
import Banner1_HeroImpact from "@/components/marketing/shopify-banners/Banner1_HeroImpact";
import Banner2_DataFlow from "@/components/marketing/shopify-banners/Banner2_DataFlow";
import Banner3_BeforeAfter from "@/components/marketing/shopify-banners/Banner3_BeforeAfter";
import Banner4_DashboardPreview from "@/components/marketing/shopify-banners/Banner4_DashboardPreview";
import Banner5_ValueTriple from "@/components/marketing/shopify-banners/Banner5_ValueTriple";

const ShopifyBannersPreview = () => {
  const [selectedBanner, setSelectedBanner] = useState<number>(1);

  const banners = [
    { id: 1, name: "Version 1: Hero Impact", component: Banner1_HeroImpact, desc: "Große Zahlen, minimalistisch, bold - Maximaler Impact" },
    { id: 2, name: "Version 2: Data Flow", component: Banner2_DataFlow, desc: "Visueller Datenfluss - Zeigt wie es funktioniert" },
    { id: 3, name: "Version 3: Before/After", component: Banner3_BeforeAfter, desc: "Transformation Story - Emotionaler Impact" },
    { id: 4, name: "Version 4: Dashboard Preview", component: Banner4_DashboardPreview, desc: "Product Shot - Zeigt Interface" },
    { id: 5, name: "Version 5: Value Triple", component: Banner5_ValueTriple, desc: "3 Kernvorteile - Clean Layout" }
  ];

  const CurrentBanner = banners.find(b => b.id === selectedBanner)?.component || Banner1_HeroImpact;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Shopify App Store Banners Preview
        </h1>
        <p className="text-gray-400 text-lg">
          Alle Banners sind 1600x900px (Shopify Standard)
        </p>
      </div>

      {/* Banner Selector */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="grid grid-cols-5 gap-4">
          {banners.map((banner) => (
            <button
              key={banner.id}
              onClick={() => setSelectedBanner(banner.id)}
              className={`
                p-6 rounded-xl border-2 transition-all duration-300 text-left
                ${selectedBanner === banner.id 
                  ? 'bg-purple-600 border-purple-500 text-white' 
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-purple-500'
                }
              `}
            >
              <div className="text-2xl font-bold mb-2">V{banner.id}</div>
              <div className="text-sm font-semibold mb-2">{banner.name.replace(`Version ${banner.id}: `, '')}</div>
              <div className="text-xs opacity-80">{banner.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Banner Display */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Info Bar */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700">
            <div className="text-white">
              <div className="text-2xl font-bold mb-1">
                {banners.find(b => b.id === selectedBanner)?.name}
              </div>
              <div className="text-gray-400">
                {banners.find(b => b.id === selectedBanner)?.desc}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 font-mono text-sm">
                1600 × 900 px
              </div>
              <button className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
                Als PNG exportieren
              </button>
            </div>
          </div>

          {/* Banner Preview */}
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="transform scale-[0.65] origin-top-left" style={{ width: '1600px', height: '900px' }}>
              <CurrentBanner />
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-7xl mx-auto mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-bold mb-3">📸 Export Instructions:</h3>
        <ol className="text-gray-300 space-y-2 list-decimal list-inside">
          <li>Wähle Banner-Version oben</li>
          <li>Rechtsklick auf Banner → "Speichern unter..."</li>
          <li>Oder: Browser DevTools → Screenshot Tool (1600x900px)</li>
          <li>Upload zu Shopify App Store (Feature Media)</li>
        </ol>
      </div>
    </div>
  );
};

export default ShopifyBannersPreview;









