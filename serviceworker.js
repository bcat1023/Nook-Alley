// Todo: Consider not caching the mp4 files, or have some check to cache the one the browser needs
self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('Nook-Alley Cache').then(function (cache) {
        return cache.addAll([
          '/videos/webm/home.webm',
          '/videos/webm/CiscoVEN401SEPromo.webm',
          '/videos/webm/FCC-IDPromo.webm',
          '/videos/webm/TheIdeaGrailsPromo.webm',
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
        ]);
      }),
    );
  });