'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "732f7c66a1380237aa5a2012539a8c07",
"assets/AssetManifest.bin.json": "b537be1e1543a10225eafa02534a9a0c",
"assets/AssetManifest.json": "b899fb02d3aaf3f7096698b932a2655c",
"assets/assets/doc/arabic.pdf": "579e7183054fbba7baba086af5643a21",
"assets/assets/doc/english.pdf": "e1a1f3a82c6a846678ae2845afaf1650",
"assets/assets/dummy/1.jpg": "c910225ae57404de81da7fac712cfa22",
"assets/assets/dummy/2.jpg": "96c22ad4e8a2c08156f56776c8003cda",
"assets/assets/dummy/3.jpg": "5e614555caaad0bd6672f9ed8b257215",
"assets/assets/image/add.svg": "a361c47a6302867efe130eafb422166c",
"assets/assets/image/auto_mode.svg": "7ed8420853bc9d644dcb4d31d2c0e84f",
"assets/assets/image/auto_renew.svg": "b20bc26599d33b4d7e5fc881d5741677",
"assets/assets/image/auto_renew_off.svg": "a58d2f407c4f48b1ed0e23670e4ab20b",
"assets/assets/image/bank_transfer.svg": "873c1c0c0e93f22c92547b7a0b1d1c93",
"assets/assets/image/cart.svg": "3efbe1238258da4f958d0ef95f300284",
"assets/assets/image/cart_empty.svg": "77d3a175eeaa745764426ba836cba2e1",
"assets/assets/image/dark_mode.svg": "7df81054dc5c961222d346ae07632a07",
"assets/assets/image/delete.svg": "9399d99c0bb1954198016a63e54b8d99",
"assets/assets/image/document.svg": "15849c66b811a93a5fab5d8f7ce48ddf",
"assets/assets/image/download_icon.svg": "e49e263dfc53da20df00938e3e043a25",
"assets/assets/image/error.svg": "52eb13c8a397f78b79ebec111fce1cfb",
"assets/assets/image/eye.svg": "e69dcb5a7b902d3c51be46840a2dc4d6",
"assets/assets/image/gate_access.svg": "125e4c41f833f89f1ccea51fbb9a5cd7",
"assets/assets/image/gate_close.svg": "b94a3f717607c01cd8c737d174b7d7ac",
"assets/assets/image/globe.png": "4f7f84f2c86b9f160afca84d815494c1",
"assets/assets/image/home.svg": "529360eaa5c49f1abbcdbf22e8c136e1",
"assets/assets/image/keypad_back.svg": "884f1ffbd5b3fb69a3d27cbe6525c34c",
"assets/assets/image/light_mode.svg": "85d9a754813f74f086f600debfc7fe20",
"assets/assets/image/location.svg": "aa2580dc94875b5e772c2eb3634099e3",
"assets/assets/image/logo.svg": "1487f54173b406fda7420672b38b02b8",
"assets/assets/image/logo_vert.png": "57a390cc1ae7b7d8a5c45938c7316b1a",
"assets/assets/image/maintainance.png": "f56920813fe1ff91ca7c12d90f39deb1",
"assets/assets/image/minuse.svg": "e852d580e8369cb74638d7c2001ff29c",
"assets/assets/image/my_storage.svg": "f5ba8fd267eba1cb113c26140bd16e16",
"assets/assets/image/no_login.svg": "8015286c9e1b90e348ef22e2a95a3317",
"assets/assets/image/no_storage_data.svg": "b6f82c1385d998e98d389ee245938fa5",
"assets/assets/image/payout.html": "1aa83f5db284ed69e99fa94d0e7a25a0",
"assets/assets/image/rent_now.svg": "0b75b3cb96e5228e8f4e8b109d4c8e18",
"assets/assets/image/sadad.svg": "d4d1ef99a7b902cfefae16dead456ac7",
"assets/assets/image/settings.svg": "39a92f88719d309baaec2d42374465bd",
"assets/assets/image/storage_permission.svg": "6873d8a81a6ec9a576e9e783919acd5a",
"assets/assets/image/store.svg": "7e8f07f64fdf333290baeaf3a2444534",
"assets/assets/image/visa.svg": "3fa2ace9285566b4eb9fa8dd73a944ad",
"assets/assets/image/welcome_frnd.svg": "1e9d3e15d292eded3f9f37901d4f148a",
"assets/assets/image/welcome_frnd_bg.svg": "abe6748fd8cdd687b250548a02707552",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1a11231c2b2c6fc339c52fc5571989ca",
"assets/NOTICES": "6950416b241686b6fe1e4d652132d719",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "1b5f1bc9ec11c2b30df844c3d403f2e4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9393d8c318bc68662408381882f36c16",
"/": "9393d8c318bc68662408381882f36c16",
"main.dart.js": "dc0fbe48f8c8b56bc141ecd7fb0aa422",
"manifest.json": "ef75e52a1d9da38eaf18f2e1b064e54c",
"version.json": "7d73b25ebfdbec2db6b34d33288fa060"};
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
