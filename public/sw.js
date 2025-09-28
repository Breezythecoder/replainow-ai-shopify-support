// HOTFIX: Service Worker deaktiviert für Live-Incident
// Verhindert alte Bundles und Cache-Stickiness
self.addEventListener('install', (event) => {
  console.log('SW: Skipping waiting for live incident');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW: Claiming clients for live incident');
  self.clients.claim();
});

// Fetch Event - Always fetch from network (no cache)
self.addEventListener('fetch', (event) => {
  // Always fetch from network, no cache
  event.respondWith(fetch(event.request));
});
