const CACHE_NAME = "mongle-ledger-cache-v61";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./assets/icon-192.svg",
  "./assets/icon-512.svg",
  "./assets/fonts/EF_jejudoldam.otf",
  "./assets/fonts/EF_jejudoldam.ttf",
  "./assets/fonts/GmarketSansTTFLight.ttf",
  "./assets/fonts/GmarketSansTTFMedium.ttf",
  "./assets/fonts/KERISKEDU_B.ttf",
  "./assets/fonts/KERISKEDU_Line.ttf",
  "./assets/fonts/KERISKEDU_B.otf",
  "./assets/fonts/KERISKEDU_Line.otf",
  "./assets/fonts/BMKkubulim.otf",
  "./assets/chars/blue.svg",
  "./assets/chars/pink.svg",
  "./assets/chars/yellow.svg",
  "./assets/chars/green.svg",
  "./assets/chars/black.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
