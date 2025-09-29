// SW NEUTRALIZER - Clears all caches and unregisters itself
const VERSION = 'KILL-1';

self.addEventListener('install', (e) => self.skipWaiting());

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      // Delete all caches (regardless of name)
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      // Take control, then self-unregister
      await self.clients.claim();
      await self.registration.unregister();
    })()
  );
});

// NO fetch handler -> SW intercepts nothing