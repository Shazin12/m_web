'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d4c60c6660f56f038e97fa7860e3767",
"assets/AssetManifest.bin.json": "bafee7009700a9e210b25b18a8bd27e2",
"assets/AssetManifest.json": "7e4525065e66d7c0ec2d05a877bd70d1",
"assets/assets/doc/arabic.pdf": "579e7183054fbba7baba086af5643a21",
"assets/assets/doc/english.pdf": "e1a1f3a82c6a846678ae2845afaf1650",
"assets/assets/doc/recaptcha.html": "e06f3b3550a6210ea600f99b349ae406",
"assets/assets/dummy/1.jpg": "c910225ae57404de81da7fac712cfa22",
"assets/assets/dummy/2.jpg": "96c22ad4e8a2c08156f56776c8003cda",
"assets/assets/dummy/3.jpg": "5e614555caaad0bd6672f9ed8b257215",
"assets/assets/image/add.svg": "a361c47a6302867efe130eafb422166c",
"assets/assets/image/appstore.png": "576f5ae09c6defbc21d3ecd7a5b80ec3",
"assets/assets/image/arab_person.svg": "ee6c102c03337c3b91e69e41cd0a4ca2",
"assets/assets/image/auto_mode.svg": "7ed8420853bc9d644dcb4d31d2c0e84f",
"assets/assets/image/auto_renew.svg": "b20bc26599d33b4d7e5fc881d5741677",
"assets/assets/image/auto_renew_off.svg": "a58d2f407c4f48b1ed0e23670e4ab20b",
"assets/assets/image/bank_transfer.svg": "873c1c0c0e93f22c92547b7a0b1d1c93",
"assets/assets/image/bulb.svg": "8233b0efd7944f025e8d852535f921d8",
"assets/assets/image/cart.svg": "3efbe1238258da4f958d0ef95f300284",
"assets/assets/image/cart_empty.svg": "77d3a175eeaa745764426ba836cba2e1",
"assets/assets/image/dark_mode.svg": "7df81054dc5c961222d346ae07632a07",
"assets/assets/image/delete.svg": "9399d99c0bb1954198016a63e54b8d99",
"assets/assets/image/document.svg": "15849c66b811a93a5fab5d8f7ce48ddf",
"assets/assets/image/download_icon.svg": "e49e263dfc53da20df00938e3e043a25",
"assets/assets/image/error.svg": "d0e13c92aa1e307e310040e930628941",
"assets/assets/image/eye.svg": "e69dcb5a7b902d3c51be46840a2dc4d6",
"assets/assets/image/facebook.png": "c105b086966eda2f5bf8fdd06815eabf",
"assets/assets/image/footer_logo.png": "cf614de8ea558c5ff1715d0bf63e1adb",
"assets/assets/image/gate_access.svg": "125e4c41f833f89f1ccea51fbb9a5cd7",
"assets/assets/image/gate_close.svg": "b94a3f717607c01cd8c737d174b7d7ac",
"assets/assets/image/globe.png": "4f7f84f2c86b9f160afca84d815494c1",
"assets/assets/image/home.svg": "529360eaa5c49f1abbcdbf22e8c136e1",
"assets/assets/image/image_circle.svg": "678cb8cc781bfa8e5819f4024adb55c7",
"assets/assets/image/instagram.png": "e872d31626c13a94bfaed6485ceaff5e",
"assets/assets/image/keypad_back.svg": "884f1ffbd5b3fb69a3d27cbe6525c34c",
"assets/assets/image/light_mode.svg": "85d9a754813f74f086f600debfc7fe20",
"assets/assets/image/linkdin.png": "4df243f7b36c07d9e6ac1cc4cf3a5b2c",
"assets/assets/image/location.svg": "aa2580dc94875b5e772c2eb3634099e3",
"assets/assets/image/logo.svg": "1487f54173b406fda7420672b38b02b8",
"assets/assets/image/logo_vert.png": "57a390cc1ae7b7d8a5c45938c7316b1a",
"assets/assets/image/maintainance.png": "f56920813fe1ff91ca7c12d90f39deb1",
"assets/assets/image/minuse.svg": "e852d580e8369cb74638d7c2001ff29c",
"assets/assets/image/my_storage.svg": "f5ba8fd267eba1cb113c26140bd16e16",
"assets/assets/image/no_login.svg": "8015286c9e1b90e348ef22e2a95a3317",
"assets/assets/image/no_storage_data.svg": "b6f82c1385d998e98d389ee245938fa5",
"assets/assets/image/playstore.png": "9effef8c6692bfb7a0c0706e31635ce5",
"assets/assets/image/rent_now.svg": "0b75b3cb96e5228e8f4e8b109d4c8e18",
"assets/assets/image/sadad.svg": "d4d1ef99a7b902cfefae16dead456ac7",
"assets/assets/image/sar_currency.svg": "597736d44c12d8e9378b06035bec011c",
"assets/assets/image/send_plane.svg": "cfd234cba2fd91ddabab65a97668ad25",
"assets/assets/image/settings.svg": "39a92f88719d309baaec2d42374465bd",
"assets/assets/image/star.svg": "b15c1ffe156ba1a38415812823794130",
"assets/assets/image/storage_permission.svg": "6873d8a81a6ec9a576e9e783919acd5a",
"assets/assets/image/store.svg": "7e8f07f64fdf333290baeaf3a2444534",
"assets/assets/image/tiktok.png": "de065cdd921c976ae529709702af7200",
"assets/assets/image/twitter.png": "e07a039d662dd4cb5511204cdb25af73",
"assets/assets/image/visa.svg": "3fa2ace9285566b4eb9fa8dd73a944ad",
"assets/assets/image/welcome_frnd.svg": "1e9d3e15d292eded3f9f37901d4f148a",
"assets/assets/image/welcome_frnd_bg.svg": "abe6748fd8cdd687b250548a02707552",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "20aca85968a0c29ab9036e233d9164e9",
"assets/NOTICES": "f1b778a323b46bbb87e9d86db9ece2db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "3b28be288109940ddabf1ae579de84c3",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "17cb7bf7f40c72da3f0e0888355cdfaf",
"icons/Icon-192.png": "f21817dcebb1d338362b5b692d337235",
"icons/Icon-512.png": "a08cdfe2dff47702387e1a8ad3520eef",
"icons/Icon-maskable-192.png": "f21817dcebb1d338362b5b692d337235",
"icons/Icon-maskable-512.png": "a08cdfe2dff47702387e1a8ad3520eef",
"index.html": "352b15bcf059e1c1dc6b4991ceed2e83",
"/": "352b15bcf059e1c1dc6b4991ceed2e83",
"main.dart.js": "5fa757eb0e0e83ded4000d82867c8b94",
"main.dart.mjs": "548b6f3064fe008dfa8eda6556265091",
"main.dart.wasm": "32381ff775630d62b54c986aab8389dc",
"manifest.json": "3e97b7c01a484edf54d2696cc668a097",
"test_index.html": "fb251d7faefbf37b595751d9f928932a",
"version.json": "cbb914ad0daf37f402075a2bb9212d7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
