// Service Worker für perfekte Performance
const VERSION = "v1.3.2"; // bump on each deploy
const CACHE_NAME = `replainow-${VERSION}`;

// Install Event - Cache Resources
self.addEventListener('install', (event) => {
  console.log('SW: Installing new version', VERSION);
  self.skipWaiting();
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  console.log('SW: Activating new version', VERSION);
  self.clients.claim();
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event - Smart caching strategy
self.addEventListener('fetch', (event) => {
  // For HTML files, always fetch from network first
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  } else {
    // For assets, try cache first, then network
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
