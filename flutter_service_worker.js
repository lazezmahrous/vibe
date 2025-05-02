'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "97ac907d3a99647738cd8f1caec43358",
"assets/AssetManifest.bin.json": "d3e2e9d4dfebb9e71155df8afbe9123d",
"assets/AssetManifest.json": "fe52c9df65964c8c87f0a5d92c9d92f5",
"assets/assets/fonts/Alexandria-Black.ttf": "d9c06f0e216cb8c8ed690753d71633a6",
"assets/assets/fonts/Alexandria-Bold.ttf": "e99b8ddebba0cac64db2993f74612b7e",
"assets/assets/fonts/Alexandria-ExtraBold.ttf": "a337766c63d23553eb5cf3cd54c04f3c",
"assets/assets/fonts/Alexandria-Light.ttf": "f48e9701d8eb3978b6f0b0573d4ccb71",
"assets/assets/fonts/Alexandria-Medium.ttf": "e38c523cd467463f76f344df6f3370b3",
"assets/assets/fonts/Alexandria-Regular.ttf": "eb1edb76d34baf8e9e46c1de0f106246",
"assets/assets/fonts/Alexandria-SemiBold.ttf": "2795944be28b9f2d4c7dfb3a132043f2",
"assets/assets/images/app_dark_splash_screen.jpg": "f6ba966eabe3ef7a357aba5065ae1484",
"assets/assets/images/app_icon.jpg": "f1b9dc8a0a3c377b943973d4949484ad",
"assets/assets/images/app_light_splash_screen.jpg": "177da8af6ca6c54d84d6a4478d544293",
"assets/assets/images/app_logo_android_12.png": "53cae633731812e6c7a76763f08795ae",
"assets/assets/images/branding_dark.png": "1cafbb8c00b6f3e702251138f46d45ea",
"assets/assets/images/branding_light.png": "599dbeb08ab51b9b58aef42d72d8d4a0",
"assets/assets/images/logo_with_out_background_for_app.png": "b731671e21f237d24aa51977debda8c3",
"assets/assets/images/my_logo.jpg": "1954634ff493f71f387a141d8f166a4f",
"assets/assets/images/sound-wave.gif": "ae4890d00121926c0910cc3b4e15c1af",
"assets/assets/sounds/nature/birds%2520-%2520%25D8%25B7%25D9%258A%25D9%2588%25D8%25B1.mp3": "8b04cd57aa42b2397b26e1ea1c4a59d2",
"assets/assets/sounds/nature/birds-singing-calm-river%2520-%2520%25D8%25B5%25D9%2588%25D8%25AA%2520%25D8%25B7%25D9%258A%25D9%2588%25D8%25B1%2520%25D9%2588%25D9%2586%25D9%2587%25D8%25B1%2520%25D9%2587%25D8%25A7%25D8%25AF%25D8%25A6.mp3": "87c910cadf8a72b5d43df486c3848557",
"assets/assets/sounds/nature/calm-nature-sounds%2520-%2520%25D8%25A7%25D8%25B5%25D9%2588%25D8%25A7%25D8%25AA%2520%25D9%2585%25D9%2586%2520%25D8%25A7%25D9%2584%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D8%25A9.mp3": "d4fdfa5a107b74012f568fd4777bdfcd",
"assets/assets/sounds/nature/computer-keyboard-typing-%25D8%25B5%25D9%2588%25D8%25AA%2520%25D9%2583%25D8%25AA%25D8%25A7%25D8%25A8%25D8%25A9%2520%25D8%25B9%25D9%2584%25D9%258A%2520%25D8%25A7%25D9%2584%25D9%2583%25D9%258A%25D8%25A8%25D9%2588%25D8%25B1%25D8%25AF.mp3": "8f9933a2d9b865a8ec86147d77e09a3f",
"assets/assets/sounds/nature/jungle-nature-229896.mp3": "90e7eb907a91a465188d12fb687d9c01",
"assets/assets/sounds/nature/light-spring-rain%2520-%2520%25D8%25B5%25D9%2588%25D8%25AA%2520%25D9%2585%25D8%25B7%25D8%25B1%2520%25D8%25AE%25D9%2581%25D9%258A%25D9%2581.mp3": "d215bba4731202ef238ef6072b1ef68a",
"assets/assets/sounds/nature/morning-nature-sounds-246034.mp3": "48685db67b13bbe3ea2e1e3387015097",
"assets/assets/sounds/nature/nature-birds-singing-217212.mp3": "2f10ebe68af9ee26be2f28664bd12ee4",
"assets/assets/sounds/nature/rain%2520-%2520%25D9%2585%25D8%25B7%25D8%25B1.mp3": "d0277f9d1404a709e068715cc643ff23",
"assets/assets/sounds/nature/rain0%2520-%2520%25D9%2585%25D8%25B7%25D8%25B1.mp3": "c23fde84ae51d4889cd36928c302f2fe",
"assets/assets/sounds/nature/sleep-water-nature%2520-%2520%25D8%25B5%25D9%2588%25D8%25AA%2520%25D9%2585%25D9%258A%25D8%25A7%25D8%25A9%2520%25D9%2584%25D9%2586%25D9%2588%25D9%2585.mp3": "d9397cac5ca3a8c81d6c9a56898dbe89",
"assets/assets/sounds/noise/blue-noise-by-digitalspa-250234.wav": "28956268972506d01c00f61834d6da44",
"assets/assets/sounds/noise/cafe-noise-32940.mp3": "554d0012129145d9e2ecf9475a0939d4",
"assets/assets/sounds/noise/soft-brown-noise-299934.mp3": "c19097f803c37bfd91945500e58a836f",
"assets/assets/sounds/noise/soothing-deep-noise-293777.mp3": "be9665ae432500820bef7d705a607a7a",
"assets/assets/sounds/noise/white-noise-179828.mp3": "c0dae4693b0a54c4e96e0cac0abd80c2",
"assets/assets/sounds/street/cafe-noise-32940.mp3": "554d0012129145d9e2ecf9475a0939d4",
"assets/assets/sounds/street/generic-crowd-background-noise-31310.mp3": "f867888042ce08feb1810cdc042c2809",
"assets/assets/sounds/street/inside-a-taxi-59864.mp3": "29e459b3855e5970fb95e1769b0035f7",
"assets/assets/sounds/street/people-having-lunch-79586.mp3": "a9bcc60a5ec9267bdde31d31aaedc7c7",
"assets/assets/svgs/facebook.svg": "a0d54e7c84c4a100c7460b0b250c497a",
"assets/assets/svgs/headphone.svg": "54613972a91ce444fcd53fd3bd966623",
"assets/assets/svgs/linkedin.svg": "7d20bd1e4710a12ba1a1321e69580000",
"assets/assets/svgs/whatsapp.svg": "7f5989f9473fae5d1cf92150bbcedca1",
"assets/FontManifest.json": "6c9b8715ecf2b4dbad76354411e03f50",
"assets/fonts/MaterialIcons-Regular.otf": "a5cc644108514679fcd2f7b271a3d7d7",
"assets/NOTICES": "8ca4663b5805e5b2f61a3c17040b72bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b7a4dec53c97badddccdaf470cf85e6f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "02b1d0215e723204b250e1c8a03aea98",
"icons/Icon-192.png": "44f53717158c5f40d18bd109fe8c91fd",
"icons/Icon-512.png": "0cc998fe41bec1b3244e5ec39877f542",
"icons/Icon-maskable-192.png": "44f53717158c5f40d18bd109fe8c91fd",
"icons/Icon-maskable-512.png": "0cc998fe41bec1b3244e5ec39877f542",
"index.html": "c854d89be341cc39323929e9b7d34bfd",
"/": "c854d89be341cc39323929e9b7d34bfd",
"main.dart.js": "e8021f117637632091ba4164815b17b4",
"manifest.json": "7f02487685206b436db0408d2d9130b0",
"splash/img/dark-background.png": "b26f706fbc472c0674f16511428d68fb",
"splash/img/light-background.png": "28854f9b193edd274702118498dda949",
"version.json": "beeea317db91207222ee547c1b1c4f4b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
