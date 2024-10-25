  self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('Nook-Alley Video Cache').then(function (cache) {
        return cache.addAll([
          '/videos/home.mp4',
          '/videos/video0.mp4',
          '/videos/video1.mp4',
          '/videos/video2.mp4',
          '/videos/video3.mp4'
        ]);
      }),
    );
  });