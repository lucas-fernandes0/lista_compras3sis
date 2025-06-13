const CACHE_NAME = 'lista-compras-v1';
const urlsToCache = [
  '/',
  '/login.html',
  '/login.css',
  '/index.html',
  '/style.css',
  'app.js',
  '/manifest.json',
  '/img/icon-72.png',
  '/img/icon-96.png',
  '/img/icon-128.png',
  '/img/icon-144.png',
  '/img/icon-152.png',
  '/img/icon-192.png',
  '/img/icon-384.png',
  '/img/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});