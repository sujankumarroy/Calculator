const APP_VERSION = "1.2.8";
const CACHE_NAME = `calculator-v${APP_VERSION}`;
const STATIC_ASSETS = [
    '/',
    '/index',
    '/history',
    '/css/style.css',
    '/css/history.css',
    '/js/script.js',
    '/js/history.js'
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(cachedResponse => {
            return cachedResponse || fetch(e.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200 && e.request.url.startsWith(self.location.origin)) {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request, networkResponse.clone());
                        return networkResponse;
                    });
                }
                return networkResponse;
            });
        });
    );
});
