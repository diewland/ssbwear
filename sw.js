importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// json files - network first
// - manifest.json
// - .well-known/assetlinks.json
workbox.routing.registerRoute(
  /(manifest|assetlinks)\.json$/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'json',
  })
);

// images - cache first
workbox.routing.registerRoute(
  /\.(jpg|gif|png)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
  })
);

// Use a stale-while-revalidate strategy for all other requests.
workbox.routing.setDefaultHandler(
  new workbox.strategies.StaleWhileRevalidate()
);
