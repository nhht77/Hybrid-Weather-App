const cacheName = 'v1';

const cacheAssets = [,
  '/'
  'index.html',
  '/css/style.css',
  '/css/index.css',
  '/favicon/android-chrome-192x192.png',
  '/favicon/apple-touch-icon.png',
  '/favicon/browserconfig.xml',
  '/favicon/favicon-16x16.png',
  '/favicon/favicon-32x32.png',
  '/favicon/favicon.ico',
  '/favicon/mstile-150x150.png',
  '/favicon/safari-pinned-tab.svg',
  '/favicon/site.webmanifest',
  '/js/bundle.js',
  '/js/main.js',
  '/js/index.js'
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
