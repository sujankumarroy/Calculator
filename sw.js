const APP_VERSION = "1.2.5";
const CACHE_NAME = `calculator-v${APP_VERSION}`;
const STATIC_ASSETS = [
    '/',
    '/index',
    '/style.css',
    '/script.js'
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
});
