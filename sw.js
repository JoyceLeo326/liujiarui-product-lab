const CACHE_PREFIX = 'portfolio-lab-';
const CACHE_NAME = `${CACHE_PREFIX}v3`;
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './projects.json',
  './favicon.svg',
  './manifest.webmanifest',
  './products/route/',
  './products/route/index.html',
  './products/route/sw.js',
  './products/rural/',
  './products/rural/index.html',
  './products/rural/sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(
    keys
      .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map((key) => caches.delete(key))
  )));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(async (cached) => {
      if (cached) return cached;

      try {
        const response = await fetch(event.request);
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, copy);
        }
        return response;
      } catch {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return Response.error();
      }
    })
  );
});
