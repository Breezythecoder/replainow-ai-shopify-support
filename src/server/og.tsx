// OG-Bild-Generator (dynamisch) – sofortige Social/Share-Verbesserung
import satori from "satori";
import { readFileSync } from "fs";
import { createServer } from "http";

// Font loading (Inter Regular)
const fontRegular = readFileSync("./public/fonts/Inter-Regular.ttf");

function template({ title, subtitle }: { title: string; subtitle?: string }) {
  return `
  <div style="width:1200px;height:630px;display:flex;flex-direction:column;justify-content:center;padding:80px;background:linear-gradient(135deg, #0B1220 0%, #1e293b 50%, #334155 100%);color:#fff;position:relative;font-family:Inter,system-ui,sans-serif;">
    <!-- AI Grid Background -->
    <div style="position:absolute;top:0;left:0;right:0;bottom:0;background-image:linear-gradient(rgba(59,130,246,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.1) 1px,transparent 1px);background-size:50px 50px;opacity:0.3;"></div>
    
    <!-- Main Content -->
    <div style="position:relative;z-index:10;">
      <!-- Logo -->
      <div style="display:flex;align-items:center;margin-bottom:40px;">
        <div style="width:60px;height:60px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-right:20px;">
          <span style="font-size:32px;font-weight:bold;color:#fff;">R</span>
        </div>
        <div>
          <div style="font-size:36px;font-weight:800;color:#fff;">Repl<span style="color:#3b82f6;">AI</span>now</div>
          <div style="font-size:18px;color:#94a3b8;margin-top:4px;">AI Shopify Helpdesk</div>
        </div>
      </div>
      
      <!-- Title -->
      <div style="font-size:64px;line-height:1.1;font-weight:700;max-width:1000px;margin-bottom:20px;background:linear-gradient(135deg,#fff,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${title}</div>
      
      <!-- Subtitle -->
      <div style="font-size:32px;color:#94a3b8;max-width:900px;line-height:1.3;">${subtitle ?? "AI Helpdesk für Shopify – Automate deinen Kundenservice mit GPT-4.1"}</div>
      
      <!-- Features -->
      <div style="display:flex;gap:30px;margin-top:40px;font-size:20px;">
        <div style="display:flex;align-items:center;color:#10b981;">
          <span style="margin-right:8px;">⚡</span>
          <span>3-seconds Antworten</span>
        </div>
        <div style="display:flex;align-items:center;color:#8b5cf6;">
          <span style="margin-right:8px;">🌍</span>
          <span>32+ languages</span>
        </div>
        <div style="display:flex;align-items:center;color:#f59e0b;">
          <span style="margin-right:8px;">💰</span>
          <span>75% Kosteneinsparung</span>
        </div>
      </div>
    </div>
    
    <!-- Bottom URL -->
    <div style="position:absolute;bottom:60px;left:80px;font-size:28px;color:#64748b;font-weight:600;">replainow.com</div>
    
    <!-- AI Activity Indicator -->
    <div style="position:absolute;top:80px;right:80px;width:16px;height:16px;background:#10b981;border-radius:50%;animation:pulse 2s infinite;"></div>
  </div>`;
}

async function renderPng(params: URLSearchParams) {
  const svg = await satori(template({
    title: params.get("title") ?? "ReplAInow",
    subtitle: params.get("subtitle") ?? undefined
  }), { 
    width: 1200, 
    height: 630, 
    fonts: [{ 
      name: "Inter", 
      data: fontRegular, 
      weight: 400, 
      style: "normal" 
    }] 
  });
  
  const { default: sharp } = await import("sharp");
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

// Minimal HTTP route (ersetzbar durch eure Serverless/Adapter)
createServer(async (req, res) => {
  if (!req.url?.startsWith("/og")) { 
    res.statusCode = 404; 
    return res.end("Not found"); 
  }
  
  try {
    const url = new URL(req.url, "http://localhost");
    const img = await renderPng(url.searchParams);
    
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400"); // 24h cache
    res.end(img);
  } catch (error) {
    console.error("OG Image generation error:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}).listen(process.env.OG_PORT || 8787, () => {
  console.log(`🖼️ OG Image server running on port ${process.env.OG_PORT || 8787}`);
});
