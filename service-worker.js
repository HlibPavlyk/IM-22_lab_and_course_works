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
    "revision": "e2c1ffc39c7625a135b7ba4b66072f02"
  },
  {
    "url": "assets/css/0.styles.fb77016b.css",
    "revision": "4934813b78b14fe01dfe8a98d088f88d"
  },
  {
    "url": "assets/img/relational-schema.a1d70381.png",
    "revision": "a1d70381c4dad1d0e644bd6842d8da14"
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
    "url": "assets/js/12.77a48f7c.js",
    "revision": "71dfc61d295cbe4b2945f1f16410cf5f"
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
    "url": "assets/js/15.7f6d7623.js",
    "revision": "974b48eb9cfacf5debeaefd083d0d6cf"
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
    "url": "assets/js/18.9eedd394.js",
    "revision": "453fcf87e87509c7d9c6e966fc756e13"
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
    "url": "assets/js/5.01993805.js",
    "revision": "6d5176ba3b4c2fa125c6a9aeb57b6aa7"
  },
  {
    "url": "assets/js/6.d2d7c328.js",
    "revision": "52d18539e934aaf4d345354d67942f01"
  },
  {
    "url": "assets/js/7.c09e37a9.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
  },
  {
    "url": "assets/js/8.b4676580.js",
    "revision": "c3e88a6d81fe19bf5c7fc15c982c3c4c"
  },
  {
    "url": "assets/js/9.a50bcd73.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.e6da3aeb.js",
    "revision": "564cb69fa91fbc07355c14f81a584285"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f1c27f480d0a6c459be75629cf4a2c6a"
  },
  {
    "url": "design/index.html",
    "revision": "77f4ade5f99048791ac1124e95da1ccd"
  },
  {
    "url": "index.html",
    "revision": "b0b789e808f14c3dd6d707213b1f1d8a"
  },
  {
    "url": "intro/index.html",
    "revision": "e1c8e827b7424aee5ef7af1fe89a2c8a"
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
    "revision": "58d02f8a9e531d8407422dde75125bc8"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6c567b2fc1e9a5be1d8fd53c1c43323f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "089d254efc92a33063469f2f17605d4d"
  },
  {
    "url": "software/index.html",
    "revision": "473303148f43441ca00f45d0dbb3cd21"
  },
  {
    "url": "test/index.html",
    "revision": "8930c5ba802bb77d6cfc16bae2003c07"
  },
  {
    "url": "use cases/index.html",
    "revision": "37c547a741ee10517b54426172f65a94"
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
