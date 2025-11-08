import { Globe, Languages, CheckCircle2 } from "lucide-react";

/**
 * BANNER 4: GLOBAL LANGUAGES
 * Shopify App Store Standard: 1600x900px
 */
const BannerGlobalLanguages = () => {
  const banner = {
    badge: "True global support",
    mainHeadline: "Speaks",
    languageCount: "100+",
    subHeadline: "languages fluently",
    tagline: "No translation errors. No language barriers. Just perfect communication.",
    feature1: "Automatic detection",
    feature1Desc: "AI recognizes customer language",
    feature2: "Native responses",
    feature2Desc: "Perfect grammar & context",
    feature3: "All languages included",
    feature3Desc: "No extra costs, no limits",
    languages: "English • German • French • Spanish • Italian • Portuguese • Dutch • Polish • Japanese • Chinese • Arabic • Korean • Russian • Turkish • Swedish • Danish • Norwegian • Finnish • Czech • Hungarian • Romanian • Greek • Hebrew • Thai • Vietnamese • Indonesian • Malay • Hindi • Bengali • Urdu...",
    footer: "Your customers speak. AI responds in their language. Worldwide."
  };

  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative text-center text-white px-20 max-w-6xl">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-12">
          <Globe className="w-6 h-6 text-white" />
          <span className="text-lg font-bold text-white">{banner.badge}</span>
        </div>

        {/* Giant Language Count */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Languages className="w-28 h-28 text-white/90" strokeWidth={1.5} />
            <div>
              <div className="text-[140px] font-bold leading-none mb-2">{banner.languageCount}</div>
              <div className="text-4xl font-semibold tracking-wide">{banner.subHeadline}</div>
            </div>
          </div>
          
          <div className="text-2xl text-white/90 mb-14 font-light">
            {banner.tagline}
          </div>
        </div>

        {/* 3 Features */}
        <div className="grid grid-cols-3 gap-6 mb-14">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <CheckCircle2 className="w-12 h-12 text-white mb-4 mx-auto" />
            <div className="text-xl font-bold mb-2">{banner.feature1}</div>
            <div className="text-sm text-white/80">{banner.feature1Desc}</div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <CheckCircle2 className="w-12 h-12 text-white mb-4 mx-auto" />
            <div className="text-xl font-bold mb-2">{banner.feature2}</div>
            <div className="text-sm text-white/80">{banner.feature2Desc}</div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <CheckCircle2 className="w-12 h-12 text-white mb-4 mx-auto" />
            <div className="text-xl font-bold mb-2">{banner.feature3}</div>
            <div className="text-sm text-white/80">{banner.feature3Desc}</div>
          </div>
        </div>

        {/* Language List */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mb-10">
          <p className="text-base leading-relaxed text-white/80">
            {banner.languages}
          </p>
        </div>

        {/* Footer */}
        <div className="text-xl text-white/90 font-light">
          {banner.footer}
        </div>
      </div>
    </div>
  );
};

export default BannerGlobalLanguages;

