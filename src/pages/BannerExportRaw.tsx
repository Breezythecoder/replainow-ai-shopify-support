import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BannerZeroSetup from "@/components/BannerZeroSetup";
import BannerAutomation from "@/components/BannerAutomation";
import BannerDualChannel from "@/components/BannerDualChannel";
import BannerGlobalLanguages from "@/components/BannerGlobalLanguages";
import BannerRealtimeSync from "@/components/BannerRealtimeSync";
import BannerVisualCommerce from "@/components/BannerVisualCommerce";
import { Helmet } from "react-helmet-async";

/**
 * RAW BANNER EXPORT PAGE
 * Renders banners at FULL SIZE (1600x900px) without any scaling
 * CLEAN - NO debug tools, NO overlays, NO auditors
 * Used for automated screenshot generation
 */
const BannerExportRaw = () => {
  const { bannerId } = useParams<{ bannerId: string }>();
  
  // Hide ALL overlays and debug tools
  useEffect(() => {
    // Hide Design Auditor
    const auditorElements = document.querySelectorAll('[class*="Auditor"]');
    auditorElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.display = 'none';
      }
    });

    // Hide contrast problems
    const contrastElements = document.querySelectorAll('[class*="ontrast"]');
    contrastElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.display = 'none';
      }
    });

    // Hide skip links
    const skipLinks = document.querySelectorAll('a[href="#main-content"]');
    skipLinks.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.display = 'none';
      }
    });
  }, []);
  
  const banners: Record<string, React.ComponentType> = {
    '1': BannerZeroSetup,
    '2': BannerAutomation,
    '3': BannerDualChannel,
    '4': BannerGlobalLanguages,
    '5': BannerRealtimeSync,
    '6': BannerVisualCommerce,
  };

  const BannerComponent = bannerId && banners[bannerId];

  if (!BannerComponent) {
    return (
      <div style={{ width: '1600px', height: '900px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff', fontSize: '48px' }}>
        Banner not found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <style>{`
          /* HIDE ALL DEBUG TOOLS */
          [class*="Auditor"],
          [class*="auditor"],
          [class*="ontrast"],
          [class*="debug"],
          .skiplink,
          a[href="#main-content"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
        `}</style>
      </Helmet>
      <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: '1600px', height: '900px' }}>
        <BannerComponent />
      </div>
    </>
  );
};

export default BannerExportRaw;


