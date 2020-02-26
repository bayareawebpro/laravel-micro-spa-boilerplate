var staticCacheName = "pwa-v" + new Date().getTime();
var filesToCache = [
    '/',
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
    this.skipWaiting().then(()=>{
        event.waitUntil(
            caches.open(staticCacheName)
                .then(async cache => {
                    await cache.addAll(filesToCache);
                    await fetch('/mix-manifest.json')
                        .then(response => response.json())
                        .then(data => {
                            cache.addAll(Object
                                .entries(data)
                                .filter(([url, entry])=>!(entry.endsWith('.map') || entry.endsWith('worker.js')))
                                .map(([file, name])=>file)
                            )
                        })
                })
        )
    });
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
