'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9bcdff4b8c626a1d86c0a52b9e9575c1",
"assets/AssetManifest.bin.json": "e895246aef52d1ad3a79f9850b46cb8c",
"assets/AssetManifest.json": "bb5ff7ac0f866a3950f8e1549f14bcad",
"assets/assets/doc/arabic.pdf": "579e7183054fbba7baba086af5643a21",
"assets/assets/doc/english.pdf": "e1a1f3a82c6a846678ae2845afaf1650",
"assets/assets/doc/recaptcha.html": "e06f3b3550a6210ea600f99b349ae406",
"assets/assets/dummy/1.jpg": "c910225ae57404de81da7fac712cfa22",
"assets/assets/dummy/2.jpg": "96c22ad4e8a2c08156f56776c8003cda",
"assets/assets/dummy/3.jpg": "5e614555caaad0bd6672f9ed8b257215",
"assets/assets/home/certified.svg": "66c58dee2d784d490fc2baaae84e2ef4",
"assets/assets/home/clients/1.webp": "f8eb5dfe104a307a195942047f9ab991",
"assets/assets/home/clients/10.webp": "824d56769d5a91783d7985d78a5bcda6",
"assets/assets/home/clients/11.webp": "d89ad50dfcbb0e92dd16502682900e66",
"assets/assets/home/clients/12.webp": "7826575e873aa96f7e16d7ec187190ca",
"assets/assets/home/clients/2.webp": "abdcc35debeaf60583d3a93f5c1c8127",
"assets/assets/home/clients/3.webp": "3a4b864d0eea24c5676ae8051da85024",
"assets/assets/home/clients/4.png": "44dba13780812035a3a1f4974952fedb",
"assets/assets/home/clients/5.svg": "eaf64d5dd9c3ec78f24837ec4d52021f",
"assets/assets/home/clients/6.png": "b5553bf517b2572802fa234663ff9055",
"assets/assets/home/clients/7.webp": "ff9e8306f3aa9a4d986ff710f471283a",
"assets/assets/home/clients/8.svg": "ce1d5aac4315bc04f97314c7f8a44e49",
"assets/assets/home/clients/9.webp": "229f436aa8fbdd563e2ed1efa9d7aab6",
"assets/assets/home/commercial_goods.webp": "ad9a2adef1d9d4fc85aaaab0dd87a398",
"assets/assets/home/cosmetics_and_perfumes.webp": "ec94b2e83237db6cafd1b810d6868e74",
"assets/assets/home/customer_service.svg": "0791e9970074d3e9ccab567e166c0912",
"assets/assets/home/dammam.webp": "4e622f84ea212a25c67f4ed864df3f5d",
"assets/assets/home/easy_access.svg": "ad55ecbf0c35d348c0dbb58f4e5e03a3",
"assets/assets/home/flexible_contracts.svg": "fd823827189c3b70d0c29ce4e782fff8",
"assets/assets/home/food_and_beverages.webp": "abcea2ee3a1a893af59ef6e1a0d5bd78",
"assets/assets/home/furniture.webp": "65270f191dd7fdead31aeb3a23694960",
"assets/assets/home/insurance.svg": "f327d309d44d7114f1ec6377acfa6399",
"assets/assets/home/jeddah.webp": "d1f43ee19a2188a7c9065d2c51c2e873",
"assets/assets/home/medical_equipment.webp": "3a4b3730e33a1d6a61a55e567f29298c",
"assets/assets/home/meeting_rooms.jpg": "5cec4eea79d8a8e82a65e5187b195391",
"assets/assets/home/monitoring_system.svg": "1975d93700afc41694dd0e7980f231ff",
"assets/assets/home/online_booking.svg": "cafaf6169609cd37991b0a3274140589",
"assets/assets/home/personal_belongings.webp": "ea0f40c02f9a95ccab616253606affab",
"assets/assets/home/privacy.svg": "a8a104055a45a42dcd596c640fff5e3e",
"assets/assets/home/private_office.jpg": "81ce47b87e540860cf1b1bf296b4ee90",
"assets/assets/home/riyadh.webp": "c0eb2767b4309c0096618977e66b4e10",
"assets/assets/home/self_storage.jpg": "26fa659b93ae4101ff123797035942cd",
"assets/assets/home/smart_access.webp": "b4c6b913603f07195d6019984ccc3bcb",
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
"assets/assets/image/image_circle.svg": "678cb8cc781bfa8e5819f4024adb55c7",
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
"assets/assets/image/rent_now.svg": "0b75b3cb96e5228e8f4e8b109d4c8e18",
"assets/assets/image/sadad.svg": "d4d1ef99a7b902cfefae16dead456ac7",
"assets/assets/image/send_plane.svg": "cfd234cba2fd91ddabab65a97668ad25",
"assets/assets/image/settings.svg": "39a92f88719d309baaec2d42374465bd",
"assets/assets/image/storage_permission.svg": "6873d8a81a6ec9a576e9e783919acd5a",
"assets/assets/image/store.svg": "7e8f07f64fdf333290baeaf3a2444534",
"assets/assets/image/take_tour.jpg": "4d67b8d5cd147de3730ca793f7abf94d",
"assets/assets/image/visa.svg": "3fa2ace9285566b4eb9fa8dd73a944ad",
"assets/assets/image/welcome_frnd.svg": "1e9d3e15d292eded3f9f37901d4f148a",
"assets/assets/image/welcome_frnd_bg.svg": "abe6748fd8cdd687b250548a02707552",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9e104c56d9c9336019ce83bb73a80f43",
"assets/NOTICES": "0480da7961a000ced1c4402700f1b9c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/geideapay/assets/bg.png": "8b3c726e97d08ef63bedea1a7f37e15f",
"assets/packages/geideapay/assets/bg1.png": "c86f864b4a71b4408e170c19ba4424f1",
"assets/packages/geideapay/assets/card_bg.png": "9b5cd474f849beb2c6b5aaf71a145ca6",
"assets/packages/geideapay/assets/images/american_express.png": "fac1ed63030230003fa52ee8f98aa8dc",
"assets/packages/geideapay/assets/images/dinners_club.png": "24450426cbb1e5b657356b6cca621956",
"assets/packages/geideapay/assets/images/discover.png": "c3a58509fe14ba54b0ca0ff29ee5619d",
"assets/packages/geideapay/assets/images/dob.png": "33734b76a856e9b07934793d83a14cae",
"assets/packages/geideapay/assets/images/jcb.png": "82658437070a16f35238c2f989a00c2a",
"assets/packages/geideapay/assets/images/mastercard.png": "6aecef820a950ef57140f79e07da916a",
"assets/packages/geideapay/assets/images/successful.png": "bd7cfa16ecd2b480ca4875fbf8d6f9e2",
"assets/packages/geideapay/assets/images/verve.png": "d9e7f9a5b6987ec61b7c2d0bd7db1271",
"assets/packages/geideapay/assets/images/visa.png": "a8b02279da904c1f40e041b20cbaf49c",
"assets/packages/geideapay/assets/logo.png": "6b99db4d09f04d0eb8513729bf989bbf",
"assets/packages/geideapay/assets/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/geideapay/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/geideapay/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/geideapay/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/geideapay/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/geideapay/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
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
"flutter_bootstrap.js": "dc8c624958dea0e691024a4e82fe09a5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f8b12a0709bf0165dfdcce92166a2e5",
"/": "1f8b12a0709bf0165dfdcce92166a2e5",
"main.dart.js": "91fec74094ebe6549369927e59432ae3",
"manifest.json": "947fc1165c6eff7d2f70a779d48f5e93",
"version.json": "dae75354dffd07b0ef0d0fb4e910aa27"};
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
