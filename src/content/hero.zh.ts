export type ImageSrc = string;

export type HeroContent = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  media: {
    background?: { src: ImageSrc; alt: string };
    image: { src: ImageSrc; alt: string };
  };
};

// 注意：您可以轻松替换图片URL。
// - 使用导入的资源（如下所示）
// - 或将文件放在"/public/images"文件夹中并在此处作为字符串引用，例如"/images/mein-screenshot.png"
import heroBackground from "@/assets/hero-ai-bg.jpg";


export const heroContent: HeroContent = {
  headline: "Shopify AI客服。几秒内回答询问。",
  subheadline:
    "结合实时Shopify数据的AI：更高转化率，更快回复，更少工单。",
  primaryCta: { label: "免费试用", href: "https://apps.shopify.com/replainow-ai-support" },
  secondaryCta: { label: "观看演示", href: "#live-demo" },
  media: {
    background: { src: heroBackground, alt: "抽象AI背景图" },
    image: { src: "/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png", alt: "ReplAInow – 笔记本电脑和移动设备展示" },
  },
};