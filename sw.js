//sw,js
self.addEventListener('install', event => {
  event.waitUntil(
   caches.open('mi-pwa-cache').then(cache => {
    return cache.addAll([
      '/',
      '/index.html',
      '/style.css',
      '/app.js',
      '/manifest.json',
      '/icons/icon-192.png',
      '/icons/icon-512.png'
	]);
     }) 
);
});

self.addEventListener('fetch', event => { 
event.respondWith(
caches.match(event.request).then(respuesta => {
return respuesta || fetch(event.request);
})
);
});
