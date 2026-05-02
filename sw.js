const CACHE_NAME = 'ammar-survey-v2';
const assets = [
  'p1_survey.html',
  'p2_stakeout.html',
  'p3_db_manager.html',
  'p4_session_manager.html',
  'manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});