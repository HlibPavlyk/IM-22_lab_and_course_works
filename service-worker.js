/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c79de3cb0a70105334db982bff64fe42"
  },
  {
    "url": "assets/css/0.styles.d4dab244.css",
    "revision": "53f44db6e68fc951ae7605c3a4fe8ac6"
  },
  {
    "url": "assets/img/relational-schema.86a18e10.png",
    "revision": "86a18e10b86c915b9e22d574e8c5dba2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66f6fd47.js",
    "revision": "9861f1acd35b8cdae58c97c641a020c0"
  },
  {
    "url": "assets/js/11.c1b62882.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.610edd6e.js",
    "revision": "b450fc29d5a03df7dacbea21e5acf1f1"
  },
  {
    "url": "assets/js/13.685fefd1.js",
    "revision": "329392e254b7c42877bdd9be0419daf3"
  },
  {
    "url": "assets/js/14.e87425e5.js",
    "revision": "7e6e78346124412195991dd1ef11bfae"
  },
  {
    "url": "assets/js/15.ebf38a50.js",
    "revision": "21e30b797528e6510270412867bde0ba"
  },
  {
    "url": "assets/js/16.c43e1fef.js",
    "revision": "b922b4cb0204e33e9c9984d59708a2ac"
  },
  {
    "url": "assets/js/17.3fb5cdee.js",
    "revision": "666592bb25546b198f987ac0b84a4d6a"
  },
  {
    "url": "assets/js/18.1c3f2d6b.js",
    "revision": "017e9fef077983d0805a63b724fa6f9b"
  },
  {
    "url": "assets/js/19.19f206bb.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.09c15333.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.cdbd61eb.js",
    "revision": "35264ee7a7a9fb62fb412f005253f72c"
  },
  {
    "url": "assets/js/21.bab7edc1.js",
    "revision": "396d2b2e585e50355c911671b53630a1"
  },
  {
    "url": "assets/js/22.8e1ee6b9.js",
    "revision": "f946ad555c29988b9609351394da4409"
  },
  {
    "url": "assets/js/23.74853ab5.js",
    "revision": "84ea8034415030012ee9aababfc55c86"
  },
  {
    "url": "assets/js/24.7e995c20.js",
    "revision": "d191a9e586cdb4a5ff1665e488cb574b"
  },
  {
    "url": "assets/js/26.a388051f.js",
    "revision": "9052f0ce80ac768f33661d8b7dc67bcd"
  },
  {
    "url": "assets/js/3.37ff259d.js",
    "revision": "9d2b51430537848cac2ea5124482a938"
  },
  {
    "url": "assets/js/4.62df5e3a.js",
    "revision": "668bc91fb4500762c33bec844d358f72"
  },
  {
    "url": "assets/js/5.d88780df.js",
    "revision": "88bd2154a5a31259593a37aed60e5a1b"
  },
  {
    "url": "assets/js/6.5ed3022e.js",
    "revision": "b50cd9da878e7aae7509ae04522359c6"
  },
  {
    "url": "assets/js/7.c09e37a9.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
  },
  {
    "url": "assets/js/8.57abb3f8.js",
    "revision": "a323d6e61a5078e66e9a97db0719672c"
  },
  {
    "url": "assets/js/9.a50bcd73.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.f4896eee.js",
    "revision": "ad9e9538713732ec6249d4176456a5ec"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d92312de6dcd1dd9c9d45c2fcbfa6c7c"
  },
  {
    "url": "design/index.html",
    "revision": "314ab650981b265fffa0428e9f750fc5"
  },
  {
    "url": "index.html",
    "revision": "188cdde1252295c18ab6135763264c0d"
  },
  {
    "url": "intro/index.html",
    "revision": "1a40969864509564e23f5e3dc5773755"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "847df1ce25831072f7756baeaaa7d1f8"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "76e37f3f43cab9e29d680007f31928ad"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "274e0a7cc6ab956d9ba304397981c1bb"
  },
  {
    "url": "software/index.html",
    "revision": "5152118ac3606776b4dc66186d569b45"
  },
  {
    "url": "test/index.html",
    "revision": "3276cabb9763b3319e557c8c58321e26"
  },
  {
    "url": "use cases/index.html",
    "revision": "1d6cd36d97f27941fae304766d175876"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
