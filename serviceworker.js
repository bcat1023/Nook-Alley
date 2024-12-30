  self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('Nook-Alley Video Cache').then(function (cache) {
        return cache.addAll([
          '/videos/webm/home.webm',
          '/videos/webm/video0.webm',
          '/videos/webm/video1.webm',
          '/videos/webm/video2.webm',
          '/videos/webm/video3.webm',

          '/videos/legacy/home.mp4',
          '/videos/legacy/video0.mp4',
          '/videos/legacy/video1.mp4',
          '/videos/legacy/video2.mp4',
          '/videos/legacy/video3.mp4'
        ]);
      }),
    );
  });