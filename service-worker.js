self.addEventListener('install', event => {
    console.log('This is service worker');
});
  
self.addEventListener('fetch', event => {
    console.log('Inside fetch', event.request.url);
});