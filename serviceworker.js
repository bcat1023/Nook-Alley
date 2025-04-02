// Idea: Make this its own project, a service worker that cache's content and can refresh it when needed or upon request.

// Todo: Consider not caching the mp4 files, or have some check to cache the one the browser needs
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('Nook-Alley Cache 1.20.6').then(function (cache) {
      return cache.addAll([
        '/videos/webm/home.webm',
        '/videos/webm/CiscoVEN401SEPromo.webm',
        '/videos/webm/FCC-IDPromo.webm',
        '/videos/webm/TheIdeaGrailsPromo.webm',
        '/videos/webm/QRMachinePromo.webm',
        '/videos/webm/TitanNetworkPromo.webm',
        '/videos/webm/video0.webm',

        //'/videos/legacy/home.mp4',
        //'/videos/legacy/CiscoVEN401SEPromo.mp4',
        //'/videos/legacy/FCC-IDPromo.mp4',
        //'/videos/legacy/TheIdeaGrailsPromo.mp4',
        //'/videos/legacy/TitanNetworkPromo.mp4',
        //'/videos/legacy/video0.mp4'

        '/js/error.js',
        '/js/navigation.js',
        '/js/paths.js',

        '/images/iMac_Bezel_Resized.png'
      ]);
    }),
  );
});

self.addEventListener('activate', function (event) {
  var cacheWhitelist = ['Nook-Alley Cache 1.20.7']; // Add your new cache name here

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete caches that are no longer needed
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
