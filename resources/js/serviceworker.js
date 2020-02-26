var staticCacheName = "pwa-v" + new Date().getTime();
var filesToCache = [
    '/auth/login',
];
var filesToExclude = [
    "/worker.js",
];

// in the service worker
self.addEventListener('message', (event) => {
    if(event.data.command === 'cache'){
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(Object.entries(event.data.data)
                .filter(([url, entry])=>!(
                    entry.endsWith('.map') || entry.endsWith('worker.js')
                ))
                .map(([file, name])=>file))
        })
    }
});

// Cache on install
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches
            .match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});
