import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Download, Loader2, CheckCircle2 } from "lucide-react";
import { toPng } from "html-to-image";

// Banner Components
import BannerZeroSetup from "@/components/BannerZeroSetup";
import BannerAutomation from "@/components/BannerAutomation";
import BannerDualChannel from "@/components/BannerDualChannel";
import BannerGlobalLanguages from "@/components/BannerGlobalLanguages";
import BannerRealtimeSync from "@/components/BannerRealtimeSync";
import BannerVisualCommerce from "@/components/BannerVisualCommerce";

const BannersExport = () => {
  const [downloadingBanner, setDownloadingBanner] = useState<number | null>(null);
  const [downloadingAll, setDownloadingAll] = useState(false);
  const [completedDownloads, setCompletedDownloads] = useState<number[]>([]);

  const banners = [
    { id: 1, name: "Zero-Setup", component: BannerZeroSetup, fileName: "ReplAInow-Zero-Setup-60s" },
    { id: 2, name: "Automation-Power", component: BannerAutomation, fileName: "ReplAInow-Automation-60-80" },
    { id: 3, name: "Dual-Channel", component: BannerDualChannel, fileName: "ReplAInow-Email-Chat" },
    { id: 4, name: "Global-Languages", component: BannerGlobalLanguages, fileName: "ReplAInow-100-Languages" },
    { id: 5, name: "Realtime-Sync", component: BannerRealtimeSync, fileName: "ReplAInow-Realtime-Sync" },
    { id: 6, name: "Visual-Commerce", component: BannerVisualCommerce, fileName: "ReplAInow-Visual-Commerce" }
  ];

  // Download single banner
  const handleDownload = async (bannerId: number, fileName: string) => {
    setDownloadingBanner(bannerId);

    try {
      const element = document.getElementById(`banner-${bannerId}`);
      if (!element) {
        throw new Error('Banner not found');
      }

      // Use html-to-image with exact dimensions
      const dataUrl = await toPng(element, {
        width: 1600,
        height: 900,
        pixelRatio: 1, // Exact 1:1 ratio for 1600x900px
        backgroundColor: '#ffffff',
        cacheBust: true,
      });

      // Download
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();

      setCompletedDownloads(prev => [...prev, bannerId]);
      setDownloadingBanner(null);
    } catch (error) {
      console.error('Download error:', error);
      alert(`❌ Download fehlgeschlagen!\n\nBitte versuche es nochmal oder kontaktiere Support.`);
      setDownloadingBanner(null);
    }
  };

  // Download ALL banners
  const handleDownloadAll = async () => {
    setDownloadingAll(true);
    setCompletedDownloads([]);
    
    try {
      for (const banner of banners) {
        await new Promise(resolve => setTimeout(resolve, 500)); // Small delay between downloads
        
        const element = document.getElementById(`banner-${banner.id}`);
        if (!element) continue;

        const dataUrl = await toPng(element, {
          width: 1600,
          height: 900,
          pixelRatio: 1,
          backgroundColor: '#ffffff',
          cacheBust: true,
        });

        const link = document.createElement('a');
        link.download = `${banner.fileName}.png`;
        link.href = dataUrl;
        link.click();

        setCompletedDownloads(prev => [...prev, banner.id]);
      }
      
      alert(`✅ Alle ${banners.length} Banners wurden heruntergeladen!\n\nCheck deinen Downloads-Ordner.`);
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
        <title>Shopify App Store Banners - ReplAInow</title>
        <meta name="description" content="Export professional banners for Shopify App Store" />
      </Helmet>

      {/* Header */}
      <div className="max-w-[1800px] mx-auto mb-12">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4">
              🎨 Shopify App Store Banners
            </h1>
            <p className="text-gray-400 text-2xl mb-6">
              {banners.length} Professional Banners • 1600×900px (Shopify Standard) • Ready to Download
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
                Lade alle herunter... ({completedDownloads.length}/{banners.length})
              </>
            ) : (
              <>
                <Download className="w-6 h-6" />
                Alle {banners.length} Banners downloaden
              </>
            )}
          </button>
        </div>
        
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-purple-600 rounded-2xl shadow-lg shadow-purple-500/30">
          <span className="text-white font-bold text-lg">✅ Shopify-Ready:</span>
          <span className="text-white/90 text-lg">1600×900px • PNG Format • Optimiert für App Store</span>
        </div>
      </div>

      {/* Banners Grid */}
      <div className="max-w-[1800px] mx-auto space-y-8">
        {banners.map((banner) => {
          const BannerComponent = banner.component;
          const isDownloading = downloadingBanner === banner.id;
          const isCompleted = completedDownloads.includes(banner.id);
          
          return (
            <div 
              key={banner.id}
              className="group relative bg-gray-800 rounded-2xl p-6 border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{banner.id}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{banner.name}</div>
                    <div className="text-gray-400 text-sm">1600 × 900 px</div>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(banner.id, banner.fileName)}
                  disabled={isDownloading}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg ${
                    isCompleted
                      ? 'bg-green-600 hover:bg-green-700'
                      : isDownloading 
                        ? 'bg-purple-700 cursor-wait' 
                        : 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/50'
                  } text-white`}
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Heruntergeladen
                    </>
                  ) : isDownloading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download PNG
                    </>
                  )}
                </button>
              </div>

              {/* Banner Preview - Scaled to 50% (800x450) for display */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div 
                  id={`banner-${banner.id}`}
                  style={{ 
                    width: '1600px', 
                    height: '900px',
                    transform: 'scale(0.5)',
                    transformOrigin: 'top left',
                  }}
                >
                  <BannerComponent />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="max-w-[1800px] mx-auto mt-12 bg-gray-800 rounded-2xl p-8 border-2 border-purple-500/30 shadow-2xl">
        <h3 className="text-white font-bold mb-6 text-3xl flex items-center gap-3">
          <Download className="w-8 h-8 text-purple-400" />
          Export Anleitung
        </h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl p-8 border-2 border-purple-500/50">
            <h4 className="text-purple-300 font-bold mb-4 text-3xl flex items-center gap-3">
              🚀 EINFACHSTE METHODE
            </h4>
            <div className="text-white text-xl space-y-4">
              <p className="flex items-center gap-3">
                <span className="text-3xl">1️⃣</span>
                <span>Klicke oben rechts auf <strong className="text-purple-300">"Alle {banners.length} Banners downloaden"</strong></span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">2️⃣</span>
                <span>Warte ca. 5 Sekunden - <strong className="text-purple-300">alle Banners werden automatisch heruntergeladen</strong></span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">3️⃣</span>
                <span>Check deinen Downloads-Ordner - <strong className="text-purple-300">{banners.length} PNGs mit je 1600×900px!</strong></span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">4️⃣</span>
                <span>Upload zu Shopify App Store unter <strong className="text-purple-300">"Feature Media"</strong></span>
              </p>
            </div>
            <div className="mt-6 p-5 bg-green-600/20 rounded-xl border-2 border-green-500/50">
              <p className="text-green-200 text-lg">
                ✅ <strong>Perfekt:</strong> Alle Banners sind exakt 1600×900px und Shopify-konform!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannersExport;

