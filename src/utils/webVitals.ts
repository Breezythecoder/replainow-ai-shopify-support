// RUM web-vitals messen & INP-Spitzen sehen
import { onLCP, onCLS, onINP } from "web-vitals";

type Payload = { 
  name: string; 
  value: number; 
  id: string; 
  path: string; 
  ts: number; 
};

const send = (p: Payload) => {
  // Send to analytics endpoint
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/rum", JSON.stringify(p));
  } else {
    // Fallback for older browsers
    fetch("/api/rum", {
      method: "POST",
      body: JSON.stringify(p),
      keepalive: true,
      headers: { "Content-Type": "application/json" }
    }).catch(() => {
      // Silent fail for analytics
    });
  }
};

export function initWebVitals() {
  const path = location.pathname;
  
  onLCP((m) => send({ 
    name: "LCP", 
    value: m.value, 
    id: m.id, 
    path, 
    ts: Date.now() 
  }));
  
  onCLS((m) => send({ 
    name: "CLS", 
    value: m.value, 
    id: m.id, 
    path, 
    ts: Date.now() 
  }));
  
  onINP((m) => send({ 
    name: "INP", 
    value: m.value, 
    id: m.id, 
    path, 
    ts: Date.now() 
  }));
  
  // Log to console in development
  if (import.meta.env.MODE === 'development') {
    console.log('📊 Web Vitals monitoring initialized');
  }
}
