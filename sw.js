self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});
self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
});
self.addEventListener('fetch', event => {
  // For now, just fetch normally.
  event.respondWith(fetch(event.request));
});
