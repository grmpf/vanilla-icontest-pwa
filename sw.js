/** TODO
 * - add .error() while testing
 */


const cacheName = "stPWA-cache4"; // Change value to force update

self.addEventListener("install", function (event) {
    // Kick out the old service worker
    self.skipWaiting().then(function (values) {
        //console.info('install:skipWaiting - yay', values);
    }).catch(function (err) {
        console.error('install:skipWaiting - error:', err);
    });

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll([
                "/", // ???
                "browserconfig.xml", // IE11 icon configuration file
                "manifest.json", // Manifest file
                "index.html", // Main HTML file
                "de/index.html",
                "test.html",
                "de/test.html",

                "404.html",
                "debug.html",

                "opensearch.xml",
                "opensearch-de.xml",
                "robots.txt",
                "safari-pinned-tab.svg",
                "sitemap.xml",

                "favicon.ico", // Favicon, IE and fallback for other browsers
                "favicon.svg", // Favicon 2021, modern browsers
                //"assets/imgs/android-chrome-36x36.png", // Favicon, Android Chrome M39+ with 0.75 screen density
                //"assets/imgs/android-chrome-48x48.png", // Favicon, Android Chrome M39+ with 1.0 screen density
                //"assets/imgs/android-chrome-72x72.png", // Favicon, Android Chrome M39+ with 1.5 screen density
                //"assets/imgs/android-chrome-96x96.png", // Favicon, Android Chrome M39+ with 2.0 screen density
                //"assets/imgs/android-chrome-144x144.png", // Favicon, Android Chrome M39+ with 3.0 screen density
//"assets/imgs/icons/icon-144x144.png", // Favicon, Android Chrome M39+ with 3.0 screen density
                //"assets/imgs/android-chrome-192x192.png", // Favicon, Android Chrome M39+ with 4.0 screen density
//"assets/imgs/icons/icon-192x192.png", // Favicon, Android Chrome M39+ with 4.0 screen density
                //"assets/imgs/android-chrome-256x256.png", // Favicon, Android Chrome M47+ Splash screen with 1.5 screen density
                //"assets/imgs/android-chrome-384x384.png", // Favicon, Android Chrome M47+ Splash screen with 3.0 screen density
                //"assets/imgs/android-chrome-512x512.png", // Favicon, Android Chrome M47+ Splash screen with 4.0 screen density
                //"assets/imgs/apple-touch-icon.png", // Favicon, Apple default
                //"assets/imgs/apple-touch-icon-57x57.png", // Apple iPhone, Non-retina with iOS6 or prior
                //"assets/imgs/apple-touch-icon-60x60.png", // Apple iPhone, Non-retina with iOS7
                //"assets/imgs/apple-touch-icon-72x72.png", // Apple iPad, Non-retina with iOS6 or prior
                //"assets/imgs/apple-touch-icon-76x76.png", // Apple iPad, Non-retina with iOS7
                //"assets/imgs/apple-touch-icon-114x114.png", // Apple iPhone, Retina with iOS6 or prior
                //"assets/imgs/apple-touch-icon-120x120.png", // Apple iPhone, Retina with iOS7
                //"assets/imgs/apple-touch-icon-144x144.png", // Apple iPad, Retina with iOS6 or prior
                //"assets/imgs/apple-touch-icon-152x152.png", // Apple iPad, Retina with iOS7
                //"assets/imgs/apple-touch-icon-180x180.png", // Apple iPhone 6 Plus with iOS8
                //"assets/imgs/favicon-16x16.png", // Favicon, default
                //"assets/imgs/favicon-32x32.png", // Favicon, Safari on Mac OS
                //"assets/imgs/logo.png", // Logo
                //"assets/imgs/maskable_icon.png", // Favicon, maskable https://web.dev/maskable-icon
                //"assets/imgs/mstile-70x70.png", // Favicon, Windows 8 / IE11
                //"assets/imgs/mstile-144x144.png", // Favicon, Windows 8 / IE10
                //"assets/imgs/mstile-150x150.png", // Favicon, Windows 8 / IE11
                //"assets/imgs/mstile-310x150.png", // Favicon, Windows 8 / IE11
                //"assets/imgs/mstile-310x310.png", // Favicon, Windows 8 / IE11
                //"assets/imgs/safari-pinned-tab.svg", // Favicon, Safari pinned tab
                //"assets/imgs/share.jpg", // Social media sharing

                //"assets/scripts/main.js", // Main Javascript file
                "assets/styles/main.css", // Main CSS file
            ]);
        })
    );
});

self.addEventListener("activate", function (event) {
    // Delete any non-current cache
    event.waitUntil(
        caches.keys().then(function (keys) {
            Promise.all(
                keys.map(function (key) {
                    if (![cacheName].includes(key)) {
                        return caches.delete(key);
                    }
                })
            ).then(function (values) {
                //console.info('[Service Worker] activate - yay', values); // [valueOfPromise1, valueOfPromise2, ...]
            }).catch(function (err) {
                console.error('[Service Worker] activate - error', err); // rejectReason of any first rejected promise
            });
        })
    );
});

// Offline-first, cache-first strategy
// Kick off two asynchronous requests, one to the cache and one to the network
// If there's a cached version available, use it, but fetch an update for next time.
// Gets data on screen as quickly as possible, then updates once the network has returned the latest data.
self.addEventListener("fetch", function (event) {

    // check if request is made by chrome extensions or web page
    // if request is made for web page, url must contains http(s).
    // Also: According to mozilla, the promise will reject with a TypeError if the URL scheme is not http or https.
    if (!(event.request.url.indexOf('http') === 0)) {
        // skip the request. if request is not made with http(s) protocol
        return;
    }

    event.respondWith(
        caches.open(cacheName).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
                return response || fetch(event.request).then(function (networkResponse) {
                    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
                    cache.put(event.request, networkResponse.clone())
                        .then(function (values) {
                            console.info('fetch:cache.put() - yay', values);
                        }).catch(function (err) {
                        console.error('fetch:cache.put() - error', err);
                    });
                    return networkResponse;
                });
            })
        })
    );

    // send some data back to the client
    event.waitUntil(async function() {
        // Exit early if we don't have access to the client.
        // e.g. if it's cross-origin.
        if (!event.clientId) return;

        // Get the client.
        const client = await clients.get(event.clientId);
        // Exit early if we don't get the client.
        // e.g. if it's closed.
        if (!client) return;

        // Send a message to the client.
        client.postMessage({
            msg: "SW fetch:",
            type: "file",
            url: event.request.url
        });
    }());
});

/*
// Fetching content using Service Worker
self.addEventListener('fetch2', function (e) {
    e.respondWith((async function() {
        try {
            const r = await caches.match(e.request);
            console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
            if (r) {
                return r;
            }
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
            await cache.put(e.request, response.clone());
            return response;
        } catch (error) {
            console.warn(`[Service Worker] fetch error: ${e.request.url}`, error);
        }
    })());
});
*/
