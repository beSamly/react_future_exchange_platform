console.log('sw.js in public folder');

let cacheData = 'wine-platform';
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll(['/index.html', '/']);
        }),
    );
});

this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((res) => {
                if (res) {
                    return res;
                }
            }),
        );
    }
});
