'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b8336caffc8452d33890424f1df52d66",
".git/config": "21093060c8915cc16c8b645cb9f4081b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "c1bf085b7d1d43464044c4aea56b5379",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e20795fa11073d47c446f4d4f1f8c800",
".git/logs/refs/heads/master": "e20795fa11073d47c446f4d4f1f8c800",
".git/logs/refs/remotes/origin/master": "7c021571fc7c3e6212dddf30be00acb8",
".git/objects/06/299fbcf7222e3aecba6533c192cca5503b3cc3": "22c7a63661fb9ec10401ff6ead1608fd",
".git/objects/0e/f521c1fb35ad180097ebc6e101ea44934b7edb": "6bbe046e3a59b69597c2c55a1448b44a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/ed4a5cdcba159dabe196c4c96f65b7578a0c9e": "e58fa3f5bc29b79483380b686bb2873d",
".git/objects/27/f9d98d036f7509c0635899c477fb89baef1b4b": "bb8738751d144c893d7f376f26b50cb8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/d58875636b97b4548037fa8580ec152ef091c1": "8513aebb523c5c3ec657019f737ca725",
".git/objects/4b/0cb2e8513d0ce6804ae6f55970ba2ed517acd6": "2abe4e079a76fc219c2232d9985a4bf2",
".git/objects/4b/cde99f4cc702a76b180ec2fc9b134c1a7f3079": "7a276e862064010b35e670d068eb4cb2",
".git/objects/4e/53b20deb3c78bedac35636c24721ec84d6140c": "496c4b3ddb17398aa07d2f85f506e386",
".git/objects/58/a4247a82fc416f38c451fd9b1b5599b722d332": "da029327c38ea85d9cc8d9b32facd923",
".git/objects/60/c3445c81878b5c5842a169538671e553094c98": "2d3ed7df5f971cf39c35fad6b18fd0e8",
".git/objects/64/91ba65273992d584edeb87ecac80871401eec7": "5a67d692b4b093aad303ebebdc748493",
".git/objects/67/8e13e4ed8d65b010f872d09ec13f39e7b8f3aa": "d1795533e04e238f1fe5f16d7a2338ef",
".git/objects/6a/84bf47d80103707df850fe2a6f5412497f2616": "ae88afb2353a0c3c7b71762e77c57886",
".git/objects/72/9d61b7941f45c917754d1d0c5c3753ea17c11f": "1837356013d2811b077ed02908327fe9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/80ba8d8303edd9f231e2f3b70b99679872fcf3": "3f6646891bb885256cff1e99dfab206b",
".git/objects/7c/91eae4fa117dc8ac04d51afd5d65b6a372e418": "cc7d82ef40e9f3da5a93f175db0136b4",
".git/objects/7e/b7dd4d7c75674c8ced4e91e6a62192d7dce32c": "284507f4af4b66024d4af5a3123525b9",
".git/objects/80/b34666339995ce0590571c2941779317be6dca": "a81ec60b6f92c259a630fe7c207212a2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f5d3a8ac53ccc23093327e4c8030a9c1f18fb7": "ddf990a82367e42c4ae5cbd07dd3c8c5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/539dfbcee6f563f15c8f50597efa1bf8f59f0a": "55834e67ccfc47577b27f3a0ecf06796",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/99/8feff14fef1700b0cac970fe0349153523316a": "0945d79b61f4a3c862cf662c3acd272d",
".git/objects/9f/55e9d3c71f59142b582c39173b01c267fd28a7": "c305c7c15199b8458fb46cf8d45c98f0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/ea3b9487bd6ed90cbdb7fc9beee09dc700163c": "3a0f9641389d583df0a33109fa037696",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b3/ad7c739d0a3ef5153307bd1191998e632bc4c1": "74d57b0355a29472196d21890d08b4bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/265a2a512e7d563d69f35b71a7177cb4ab0fd3": "c982799e48afaf96d587708d47ddd66d",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d3/c2e3ad580a08e26325b6f205adf2ec9888fa99": "d04009a1a2b356cfdedee6325a6b83fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/c39eca94854a9c10577a501785d4446490b0e5": "a1c12b12169210d740cead5095227516",
".git/objects/f7/8d18e50c464ad4f4bc14e6b9ca8761de4ddcee": "427853576730bcb0a11cb2a72b93de4c",
".git/refs/heads/master": "ef09eba3c1d4d77ab34f9c352027b282",
".git/refs/remotes/origin/master": "ef09eba3c1d4d77ab34f9c352027b282",
"assets/AssetManifest.json": "c33864ce9bdb193cee6c0928473cd2ea",
"assets/assets/bg.png": "1993050927195c1f7618a8242cf3569b",
"assets/assets/courseBanner.jpg": "f713426086da9478dc69b0edc1ceacf5",
"assets/assets/followersBanner.jpg": "99b522193e2c7ef42d96eb18f2da1f11",
"assets/assets/gradient.png": "e5d4a2d330a906b6318358306ded4886",
"assets/assets/placeholderImage.png": "8eea97ab40c879d8db69dfdca7beab28",
"assets/assets/placeholderImage1.png": "38da8c3138f261f0265cda1a1c71ceae",
"assets/assets/placeholderVideo.jpg": "a4ad7089c5ab65618d7dfd845e2fa17c",
"assets/assets/user.png": "80d35342c6c643d92900c004f26b69fa",
"assets/FontManifest.json": "a3cd6d3714d3b0d9f19c158cf3fdd184",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/NOTICES": "6ec3a85a8e0f060cdf77bb5192da094e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bff103241873832a9a497850c847d972",
"/": "bff103241873832a9a497850c847d972",
"main.dart.js": "27308ec71b190b2f16549c48cdf4da7d",
"manifest.json": "614e68c2b9ca28eb1431b3d8b4a94331",
"version.json": "343b4bd592c7f92f598175c0c09348ff"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
