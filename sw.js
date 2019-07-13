importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// manifest must always fresh
workbox.routing.registerRoute(
  /manifest\.json$/,
  new workbox.strategies.NetworkFirst()
);

// Use a stale-while-revalidate strategy for all other requests.
workbox.routing.setDefaultHandler(
  new workbox.strategies.StaleWhileRevalidate()
);
