import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Download, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";

// Hero Banners (8)
import Hero1_ZeroSetup from "@/components/marketing/shopify-banners/Hero1_ZeroSetup";
import Hero2_Automation from "@/components/marketing/shopify-banners/Hero2_Automation";
import Hero3_DualChannel from "@/components/marketing/shopify-banners/Hero3_DualChannel";
import Hero4_GlobalLanguages from "@/components/marketing/shopify-banners/Hero4_GlobalLanguages";
import Hero5_RealtimeSync from "@/components/marketing/shopify-banners/Hero5_RealtimeSync";
import Hero6_QualityScores from "@/components/marketing/shopify-banners/Hero6_QualityScores";
import Hero7_VisualCommerce from "@/components/marketing/shopify-banners/Hero7_VisualCommerce";
import Hero8_HumanAITeam from "@/components/marketing/shopify-banners/Hero8_HumanAITeam";

// Feature Banners (5)
import Feature1_ShopifyImport from "@/components/marketing/shopify-banners/Feature1_ShopifyImport";
import Feature2_Dashboard from "@/components/marketing/shopify-banners/Feature2_Dashboard";
import Feature3_ChatWidget from "@/components/marketing/shopify-banners/Feature3_ChatWidget";
import Feature4_ProactiveTriggers from "@/components/marketing/shopify-banners/Feature4_ProactiveTriggers";
import Feature5_ThreadEmail from "@/components/marketing/shopify-banners/Feature5_ThreadEmail";

const AllBannersPreview = () => {
  const [downloadingBanner, setDownloadingBanner] = useState<number | null>(null);
  const [downloadingAll, setDownloadingAll] = useState(false);

  const heroBanners = [
    { id: 1, name: "Zero-Setup-60-Sekunden", displayName: "Zero Setup - 60 Sekunden", component: Hero1_ZeroSetup, category: "HERO", desc: "Live in 60 Sekunden - Null Konfiguration" },
    { id: 2, name: "Automation-Power", displayName: "Automation Power", component: Hero2_Automation, category: "HERO", desc: "60-80% Automatisierung - AI übernimmt" },
    { id: 3, name: "Dual-Channel", displayName: "Dual Channel", component: Hero3_DualChannel, category: "HERO", desc: "Email + Chat in einem Tool" },
    { id: 4, name: "Global-Languages", displayName: "Global Languages", component: Hero4_GlobalLanguages, category: "HERO", desc: "100+ Sprachen automatisch" },
    { id: 5, name: "Real-Time-Sync", displayName: "Real-Time Sync", component: Hero5_RealtimeSync, category: "HERO", desc: "Shopify → AI in Sekunden" },
    { id: 6, name: "Quality-Scores", displayName: "Quality Scores", component: Hero6_QualityScores, category: "HERO", desc: "AI bewertet sich selbst 0-100" },
    { id: 7, name: "Visual-Commerce", displayName: "Visual Commerce", component: Hero7_VisualCommerce, category: "HERO", desc: "Support der verkauft" },
    { id: 8, name: "Human-AI-Team", displayName: "Human + AI Team", component: Hero8_HumanAITeam, category: "HERO", desc: "Perfekte Zusammenarbeit" },
  ];

  const featureBanners = [
    { id: 9, name: "Shopify-Auto-Import", displayName: "Shopify Auto-Import", component: Feature1_ShopifyImport, category: "FEATURE", desc: "Automatischer Daten-Import" },
    { id: 10, name: "3-Column-Dashboard", displayName: "3-Column Dashboard", component: Feature2_Dashboard, category: "FEATURE", desc: "Professional Agent Interface" },
    { id: 11, name: "Multi-Tab-Widget", displayName: "Multi-Tab Widget", component: Feature3_ChatWidget, category: "FEATURE", desc: "Customer-Facing Chat" },
    { id: 12, name: "Proactive-Triggers", displayName: "Proactive Triggers", component: Feature4_ProactiveTriggers, category: "FEATURE", desc: "Verhaltensbasierte Trigger" },
    { id: 13, name: "Thread-Based-Email", displayName: "Thread-Based Email", component: Feature5_ThreadEmail, category: "FEATURE", desc: "Gmail-Style Threading" },
  ];

  const allBanners = [...heroBanners, ...featureBanners];

  // Download single banner
  const handleDownload = async (bannerId: number, bannerName: string) => {
    setDownloadingBanner(bannerId);

    try {
      // Get the preview container
      const previewContainer = document.getElementById(`preview-${bannerId}`);
      if (!previewContainer) {
        throw new Error('Banner not found');
      }

      // Capture at 2x scale for full resolution (800*2=1600, 450*2=900)
      const canvas = await html2canvas(previewContainer, {
        scale: 2,
        width: 800,
        height: 450,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      // Download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `ReplAInow-${bannerName}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
        setDownloadingBanner(null);
      }, 'image/png');
    } catch (error) {
      console.error('Download error:', error);
      alert('Download fehlgeschlagen!\n\nAlternative Methode:\n1. F12 drücken → Console öffnen\n2. Rechtsklick auf Banner → Element untersuchen\n3. Screenshot Tool nutzen');
      setDownloadingBanner(null);
    }
  };

  // Download ALL banners at once
  const handleDownloadAll = async () => {
    setDownloadingAll(true);
    
    try {
      for (const banner of allBanners) {
        // Small delay between downloads to not overwhelm the browser
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const previewContainer = document.getElementById(`preview-${banner.id}`);
        if (!previewContainer) continue;

        const canvas = await html2canvas(previewContainer, {
          scale: 2,
          width: 800,
          height: 450,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true,
          allowTaint: true,
        });

        // Download each banner
        await new Promise<void>((resolve) => {
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `ReplAInow-${banner.name}.png`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }
            resolve();
          }, 'image/png');
        });
      }
      
      alert('✅ Alle 13 Banners wurden heruntergeladen!\n\nCheck deinen Downloads-Ordner.');
      setDownloadingAll(false);
    } catch (error) {
      console.error('Download all error:', error);
      alert('❌ Download fehlgeschlagen!\n\nBitte verwende die einzelnen Download-Buttons.');
      setDownloadingAll(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6">
      <Helmet>
        <title>All Banners Preview - ReplAInow</title>
        <meta name="description" content="Preview all Shopify App Store banners" />
      </Helmet>

      {/* Header */}
      <div className="max-w-[1800px] mx-auto mb-12">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4">
              🎨 Shopify App Store Banners
            </h1>
            <p className="text-gray-400 text-2xl mb-6">
              13 Banners Total • 8 Hero Impact • 5 Detailed Features • 1600x900px (Shopify Standard)
            </p>
          </div>
          
          {/* Download All Button */}
          <button
            onClick={handleDownloadAll}
            disabled={downloadingAll}
            className={`flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 ${
              downloadingAll
                ? 'bg-purple-700 cursor-wait'
                : 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:scale-105'
            } text-white`}
          >
            {downloadingAll ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Lade alle herunter...
              </>
            ) : (
              <>
                <Download className="w-6 h-6" />
                Alle 13 Banners downloaden
              </>
            )}
          </button>
        </div>
        
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-purple-600 rounded-2xl shadow-lg shadow-purple-500/30">
          <span className="text-white font-bold text-lg">✅ 100% Policy-Konform:</span>
          <span className="text-white/90 text-lg">Kein Grün • Keine Emojis im UI • Keine Fake-Zahlen</span>
        </div>
      </div>

      {/* Hero Banners Section */}
      <div className="max-w-[1800px] mx-auto mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="px-4 py-2 bg-purple-600 rounded-xl">
            <span className="text-white font-bold text-xl">💥 HERO BANNERS</span>
          </div>
          <div className="text-gray-400 text-lg">8 Impact-Focused Banners</div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {heroBanners.map((banner) => {
            const BannerComponent = banner.component;
            const isDownloading = downloadingBanner === banner.id;
            return (
              <div 
                key={banner.id}
                className="group relative bg-gray-800 rounded-2xl p-6 border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">H{banner.id}</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{banner.displayName}</div>
                      <div className="text-gray-400 text-sm">{banner.desc}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(banner.id, banner.name)}
                    disabled={isDownloading}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-semibold shadow-lg ${
                      isDownloading 
                        ? 'bg-purple-700 cursor-wait' 
                        : 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/50'
                    } text-white`}
                  >
                    {isDownloading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Download PNG
                      </>
                    )}
                  </button>
                </div>

                {/* Banner Preview - Scaled to 800x450 (50% of 1600x900) */}
                <div 
                  id={`preview-${banner.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-2xl"
                  style={{ 
                    width: '800px', 
                    height: '450px',
                    transform: 'scale(1)',
                    transformOrigin: 'top left'
                  }}
                >
                  <div style={{ width: '1600px', height: '900px', transform: 'scale(0.5)', transformOrigin: 'top left' }}>
                    <BannerComponent />
                  </div>
                </div>

                {/* Size Info */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 font-mono text-sm">
                    1600 × 900 px
                  </div>
                  <div className="text-gray-500 text-sm">
                    Klick "Download PNG" für direkten Export
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Banners Section */}
      <div className="max-w-[1800px] mx-auto mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="px-4 py-2 bg-violet-600 rounded-xl">
            <span className="text-white font-bold text-xl">🎯 FEATURE BANNERS</span>
          </div>
          <div className="text-gray-400 text-lg">5 Detail-Focused Banners</div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {featureBanners.map((banner) => {
            const BannerComponent = banner.component;
            const isDownloading = downloadingBanner === banner.id;
            return (
              <div 
                key={banner.id}
                className="group relative bg-gray-800 rounded-2xl p-6 border-2 border-gray-700 hover:border-violet-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">F{banner.id - 8}</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{banner.displayName}</div>
                      <div className="text-gray-400 text-sm">{banner.desc}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(banner.id, banner.name)}
                    disabled={isDownloading}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-semibold shadow-lg ${
                      isDownloading 
                        ? 'bg-violet-700 cursor-wait' 
                        : 'bg-violet-600 hover:bg-violet-700 hover:shadow-violet-500/50'
                    } text-white`}
                  >
                    {isDownloading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Download PNG
                      </>
                    )}
                  </button>
                </div>

                {/* Banner Preview - Scaled to 800x450 (50% of 1600x900) */}
                <div 
                  id={`preview-${banner.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-2xl"
                  style={{ 
                    width: '800px', 
                    height: '450px',
                    transform: 'scale(1)',
                    transformOrigin: 'top left'
                  }}
                >
                  <div style={{ width: '1600px', height: '900px', transform: 'scale(0.5)', transformOrigin: 'top left' }}>
                    <BannerComponent />
                  </div>
                </div>

                {/* Size Info */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 font-mono text-sm">
                    1600 × 900 px
                  </div>
                  <div className="text-gray-500 text-sm">
                    Klick "Download PNG" für direkten Export
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Export Instructions */}
      <div className="max-w-[1800px] mx-auto bg-gray-800 rounded-2xl p-8 border-2 border-purple-500/30 shadow-2xl">
        <h3 className="text-white font-bold mb-6 text-3xl flex items-center gap-3">
          <Download className="w-8 h-8 text-purple-400" />
          Download Anleitung
        </h3>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl p-8 border-2 border-purple-500/50">
            <h4 className="text-purple-300 font-bold mb-4 text-3xl flex items-center gap-3">
              🚀 EINFACHSTE METHODE: "Alle 13 Banners downloaden" Button
            </h4>
            <div className="text-white text-xl space-y-4">
              <p className="flex items-center gap-3">
                <span className="text-3xl">1️⃣</span>
                <span>Klicke oben rechts auf <strong className="text-purple-300">"Alle 13 Banners downloaden"</strong></span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">2️⃣</span>
                <span>Warte ca. 10 Sekunden - <strong className="text-purple-300">alle Banners werden automatisch heruntergeladen</strong></span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">3️⃣</span>
                <span>Check deinen Downloads-Ordner - <strong className="text-purple-300">13 PNGs mit je 1600×900px!</strong></span>
              </p>
            </div>
            <div className="mt-6 p-5 bg-green-600/20 rounded-xl border-2 border-green-500/50">
              <p className="text-green-200 text-lg">
                ✅ <strong>Vorteil:</strong> Ein Klick und ALLE Banners sind heruntergeladen! 
                <strong> Perfekt für Shopify Upload!</strong>
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-750 rounded-xl p-6 border border-gray-700">
            <h4 className="text-purple-400 font-bold mb-3 text-lg">📌 Alternative 1: Download PNG Button</h4>
            <ol className="text-gray-300 space-y-2 list-decimal list-inside text-sm">
              <li>Klick auf "Download PNG" Button</li>
              <li>Banner wird automatisch heruntergeladen</li>
              <li>Datei ist als 1600×900px PNG gespeichert</li>
            </ol>
            <p className="text-gray-500 text-xs mt-2">⚠️ Kann bei manchen Browsern nicht funktionieren</p>
          </div>
          <div className="bg-gray-750 rounded-xl p-6 border border-gray-700">
            <h4 className="text-purple-400 font-bold mb-3 text-lg">📌 Alternative 2: Browser DevTools</h4>
            <ol className="text-gray-300 space-y-2 list-decimal list-inside text-sm">
              <li>F12 drücken → DevTools öffnen</li>
              <li>Screenshot-Tool aktivieren (Cmd/Ctrl+Shift+P → Screenshot)</li>
              <li>Exact 1600×900px Banner-Bereich auswählen</li>
            </ol>
            <p className="text-gray-500 text-xs mt-2">💡 Für fortgeschrittene User</p>
          </div>
        </div>
        
        <div className="p-6 bg-purple-600/20 border-2 border-purple-500/50 rounded-xl">
          <div className="text-purple-200 text-lg">
            <strong className="text-white text-xl">📋 Shopify Requirements:</strong> 1600×900px exact • PNG or JPG • Max 5 MB • Upload in "Feature Media" section
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBannersPreview;

