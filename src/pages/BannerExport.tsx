import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

// Hero Banners
import Hero1_ZeroSetup from "@/components/marketing/shopify-banners/Hero1_ZeroSetup";
import Hero2_Automation from "@/components/marketing/shopify-banners/Hero2_Automation";
import Hero3_DualChannel from "@/components/marketing/shopify-banners/Hero3_DualChannel";
import Hero4_GlobalLanguages from "@/components/marketing/shopify-banners/Hero4_GlobalLanguages";
import Hero5_RealtimeSync from "@/components/marketing/shopify-banners/Hero5_RealtimeSync";
import Hero6_QualityScores from "@/components/marketing/shopify-banners/Hero6_QualityScores";
import Hero7_VisualCommerce from "@/components/marketing/shopify-banners/Hero7_VisualCommerce";
import Hero8_HumanAITeam from "@/components/marketing/shopify-banners/Hero8_HumanAITeam";

// Feature Banners
import Feature1_ShopifyImport from "@/components/marketing/shopify-banners/Feature1_ShopifyImport";
import Feature2_Dashboard from "@/components/marketing/shopify-banners/Feature2_Dashboard";
import Feature3_ChatWidget from "@/components/marketing/shopify-banners/Feature3_ChatWidget";
import Feature4_ProactiveTriggers from "@/components/marketing/shopify-banners/Feature4_ProactiveTriggers";
import Feature5_ThreadEmail from "@/components/marketing/shopify-banners/Feature5_ThreadEmail";

const banners: Record<string, React.ComponentType> = {
  'h1': Hero1_ZeroSetup,
  'h2': Hero2_Automation,
  'h3': Hero3_DualChannel,
  'h4': Hero4_GlobalLanguages,
  'h5': Hero5_RealtimeSync,
  'h6': Hero6_QualityScores,
  'h7': Hero7_VisualCommerce,
  'h8': Hero8_HumanAITeam,
  'f1': Feature1_ShopifyImport,
  'f2': Feature2_Dashboard,
  'f3': Feature3_ChatWidget,
  'f4': Feature4_ProactiveTriggers,
  'f5': Feature5_ThreadEmail,
};

const BannerExport = () => {
  const [searchParams] = useSearchParams();
  const bannerId = searchParams.get('id') || 'h1';
  
  const BannerComponent = banners[bannerId] || Hero1_ZeroSetup;

  // Hide ALL website UI elements for clean export
  useEffect(() => {
    // Hide Design Auditor
    const auditor = document.querySelector('[data-design-auditor]');
    if (auditor) (auditor as HTMLElement).style.display = 'none';
    
    // Hide any other overlays
    const overlays = document.querySelectorAll('[role="complementary"], [role="status"]');
    overlays.forEach(el => (el as HTMLElement).style.display = 'none');
    
    // Set body to exact banner size
    document.body.style.width = '1600px';
    document.body.style.height = '900px';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }, []);

  return (
    <div 
      style={{ 
        width: '1600px', 
        height: '900px',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <BannerComponent />
    </div>
  );
};

export default BannerExport;

