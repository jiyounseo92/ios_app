const CACHE_NAME = "doer-worship-v41";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./config.js",
  "./config.example.js",
  "./manifest.json",
  "./assets/brand/icon-1.png",
  "./assets/brand/icon-2.png",
  "./assets/brand/icon-door-white-192.png",
  "./assets/brand/icon-door-white-512.png",
  "./assets/brand/apple-touch-door-white-180.png",
  "./assets/logo/simple-1.png",
  "./assets/logo/simple-2.png",
  "./assets/logo/full-logo.png",
  "./assets/logo/about-main.png",
  "./assets/startup/start-1.png",
  "./assets/startup/start-2.png",
  "./assets/startup/start-3.png",
  "./assets/startup/start-4.png",
  "./assets/startup/always-start.png",
  "./assets/data/duranno_wb_utf8.txt",
  "./assets/fonts/GmarketSansTTFBold.ttf",
  "./assets/fonts/GmarketSansTTFLight.ttf",
  "./assets/fonts/ChosunNm.ttf",
  "./assets/fonts/NanumMyeongjo.ttf",
  "./assets/fonts/NanumMyeongjo.otf",
  "./lib/pdf-lib.min.js",
  "./lib/pdfjs.mjs",
  "./lib/pdf.worker.mjs"
];

const NETWORK_FIRST_PATHS = new Set(["/", "/index.html", "/styles.css", "/app.js", "/config.js", "/manifest.json"]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => Promise.resolve())
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event && event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
    return;
  }

  if (shouldUseNetworkFirst(event.request)) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(cacheFirst(event.request));
});

function shouldUseNetworkFirst(request) {
  const url = new URL(request.url);
  if (request.mode === "navigate") {
    return true;
  }
  if (url.origin !== self.location.origin) {
    return false;
  }
  return NETWORK_FIRST_PATHS.has(url.pathname);
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    cacheResponse(request, response);
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    if (request.mode === "navigate") {
      const indexFallback = await caches.match("./index.html");
      if (indexFallback) {
        return indexFallback;
      }
    }
    throw error;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  cacheResponse(request, response);
  return response;
}

function cacheResponse(request, response) {
  if (!response || !response.ok) {
    return;
  }
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  const copy = response.clone();
  caches
    .open(CACHE_NAME)
    .then((cache) => cache.put(request, copy))
    .catch(() => Promise.resolve());
}
