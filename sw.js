importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// Use a stale-while-revalidate strategy for all requests.
workbox.routing.setDefaultHandler(
  new workbox.strategies.StaleWhileRevalidate()
);
