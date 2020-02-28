/**
 * Application Version
 */
var appVersion = "app-version" + new Date().getTime();

/**
 * Command Handler
 */
var staticRoutes = [
    '/',
];

/**
 * Command Handler
 */
self.addEventListener('message', (event) => {
    console.log('WorkerMessage',event.data)
    event.ports[0].postMessage(event.data);
});

/**
 * Installation / Prime Caches
 */
self.addEventListener("install", event => {
    this.skipWaiting().then(()=>{
        event.waitUntil(
            caches
                .open(appVersion)
                .then(async cache => {
                    await cache.addAll(staticRoutes);
                    await fetch('/mix-manifest.json')
                        .then(response => response.json())
                        .then(data => {
                            cache.addAll(Object.entries(data)
                                .filter(([key, value])=>(
                                    !key.endsWith('.map')
                                    && !key.endsWith('worker.js')
                                    && !key.endsWith('hot-update.js')
                                ))
                                .map(([key, value])=>value))
                        })
                        .catch((error)=>{
                            console.error(error)
                        })
                })
        )
    });
});

/**
 * Activation / Clear Caches
 */
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("app-")))
                    .filter(cacheName => (cacheName !== appVersion))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

/**
 * Serve from Cache
 */
self.addEventListener("fetch", event => {
    event.respondWith(
        caches
        .match(event.request)
        .then(response => response || fetch(event.request))
        .catch(() => caches.match('offline'))
    )
});
