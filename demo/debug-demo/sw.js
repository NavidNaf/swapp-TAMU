console.log('[Debug Demo SW] Initializing service worker');

self.importScripts('../../Storage.js', '../../swapp.js');
self.importScripts('./apps/debug_logger.js');

self.addEventListener('install', event => {
  console.log('[Debug Demo SW] install event');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('[Debug Demo SW] activate event');
  event.waitUntil((async () => {
    await clients.claim();
    console.log('[Debug Demo SW] clients claimed, activating SWAPP apps');
    swappInst.activateSupervisor();
  })());
});

self.addEventListener('fetch', event => {
  console.log('[Debug Demo SW] fetch event for', event.request.url);
  event.respondWith((async () => {
    try {
      const response = await swappInst.fetchSupervisor(event.request);
      if (response) {
        console.log('[Debug Demo SW] fetchSupervisor response ready for', event.request.url, response);
        return response;
      }

      console.warn('[Debug Demo SW] fetchSupervisor returned null, falling back to network for', event.request.url);
      return fetch(event.request);
    } catch (err) {
      console.error('[Debug Demo SW] Error in fetch pipeline for', event.request.url, err);
      return fetch(event.request);
    }
  })());
});

self.addEventListener('message', event => {
  console.log('[Debug Demo SW] message received', event.data);
  swappInst.messageManager(event);
});
