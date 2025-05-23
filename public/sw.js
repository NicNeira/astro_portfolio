const CACHE_VERSION = 'v2';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;

// Estrategia de cache más específica
const STATIC_ASSETS = [
  '/',
  '/favicon.svg',
];

// Patrones de URLs para cache
const CACHE_PATTERNS = {
  static: /\.(css|js|woff2?|ttf|eot)$/,
  images: /\.(jpg|jpeg|png|webp|avif|svg|gif)$/,
  pages: /\.html$/,
};

// Instalación optimizada
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      self.skipWaiting()
    ])
  );
});

// Activación con limpieza de cache viejo
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(key => key.includes('static-') || key.includes('dynamic-') || key.includes('images-'))
            .filter(key => !key.includes(CACHE_VERSION))
            .map(key => caches.delete(key))
        )
      ),
      self.clients.claim()
    ])
  );
});

// Estrategia de fetch optimizada
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo cachear requests del mismo origen
  if (url.origin !== location.origin) return;

  // Estrategia Cache First para assets estáticos
  if (CACHE_PATTERNS.static.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(STATIC_CACHE).then(cache => cache.put(request, responseClone));
          }
          return fetchResponse;
        });
      })
    );
  }

  // Estrategia Cache First para imágenes
  else if (CACHE_PATTERNS.images.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(IMAGE_CACHE).then(cache => cache.put(request, responseClone));
          }
          return fetchResponse;
        });
      })
    );
  }

  // Estrategia Network First para páginas HTML
  else if (CACHE_PATTERNS.pages.test(url.pathname) || url.pathname === '/') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
}); 