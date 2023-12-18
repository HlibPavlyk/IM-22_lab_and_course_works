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
    "revision": "497c2458e2d628c3317990ee92051d5a"
  },
  {
    "url": "assets/css/0.styles.f0f7288f.css",
    "revision": "3c0a1ed287f123cbefe883bb4d94d616"
  },
  {
    "url": "assets/img/dataset_category_created_success.fae9e874.png",
    "revision": "fae9e87441a4fde9b5900154826595f4"
  },
  {
    "url": "assets/img/dataset_category_empty_error_description.4030c279.png",
    "revision": "4030c279d797c238eb35c8438cf00c48"
  },
  {
    "url": "assets/img/dataset_category_empty_error_name.a052905e.png",
    "revision": "a052905e9f7929fc4ebdadd636161666"
  },
  {
    "url": "assets/img/dataset_category_get_id_key_error.2a479bc2.png",
    "revision": "2a479bc2932688984781121a09e09e92"
  },
  {
    "url": "assets/img/dataset_category_get_id_success.744187c6.png",
    "revision": "744187c6713c291c01a694c4ce1562e5"
  },
  {
    "url": "assets/img/dataset_category_get_success.72ea8107.png",
    "revision": "72ea81073548015445419eb9e058aef1"
  },
  {
    "url": "assets/img/dataset_category_register_error_name.0b9d9b9b.png",
    "revision": "0b9d9b9b3b20ddda7f07f8e2cbe8c9ed"
  },
  {
    "url": "assets/img/dataset_created_empty_error_description.dee21236.png",
    "revision": "dee2123694770b0e2719645b5d7572c9"
  },
  {
    "url": "assets/img/dataset_created_empty_error_name.cdb60a60.png",
    "revision": "cdb60a604be9a3696f51fe70c61e988c"
  },
  {
    "url": "assets/img/dataset_created_key_category_error.5bc74728.png",
    "revision": "5bc74728e39c46236806632470ae3e15"
  },
  {
    "url": "assets/img/dataset_created_key_user_error.c415a573.png",
    "revision": "c415a573b0570070d3f866305f1b8cad"
  },
  {
    "url": "assets/img/dataset_created_register_error_name.6b8a5a1a.png",
    "revision": "6b8a5a1a3490ad6440d85f1893901ad8"
  },
  {
    "url": "assets/img/dataset_created_success.bc7f105b.png",
    "revision": "bc7f105b307ae2314e04996daa58776c"
  },
  {
    "url": "assets/img/dataset_delete_key_error.a85aac31.png",
    "revision": "a85aac3179a72e92cb37af7db9700547"
  },
  {
    "url": "assets/img/dataset_delete_success.45ad3ce1.png",
    "revision": "45ad3ce18ad42e97c2f18d8786f9ba71"
  },
  {
    "url": "assets/img/dataset_get_id_key_error.70494b0e.png",
    "revision": "70494b0e9ebe6d6cc005113621ffe3c5"
  },
  {
    "url": "assets/img/dataset_get_id_success.11ddcc09.png",
    "revision": "11ddcc09b455b3bc23cbdbd59a657236"
  },
  {
    "url": "assets/img/dataset_get_success.b562e37f.png",
    "revision": "b562e37fc44ce9b6b666f600ae61ac5b"
  },
  {
    "url": "assets/img/dataset_put_empty_error_description.6047089c.png",
    "revision": "6047089cdefdeeb2e864b7d5f97189b2"
  },
  {
    "url": "assets/img/dataset_put_empty_error_name.610e2cdb.png",
    "revision": "610e2cdbceb81f09ce454c954c28930d"
  },
  {
    "url": "assets/img/dataset_put_key_category_error.44298585.png",
    "revision": "4429858503c9c4494f2683e62022f7b3"
  },
  {
    "url": "assets/img/dataset_put_key_error.4e711f88.png",
    "revision": "4e711f889328606a2d1186b1c0e9f7d8"
  },
  {
    "url": "assets/img/dataset_put_key_user_error.ed4d4f0c.png",
    "revision": "ed4d4f0c25f1874e9c6155925c84e45b"
  },
  {
    "url": "assets/img/dataset_put_register_error_name.a2c2f1eb.png",
    "revision": "a2c2f1eb6c9e64fc411e03a46c118510"
  },
  {
    "url": "assets/img/dataset_put_success.f8ac579a.png",
    "revision": "f8ac579a2dc2f394c06ea5b700b83176"
  },
  {
    "url": "assets/img/file_created_empty_error_content.897e1d0b.png",
    "revision": "897e1d0b7b3e74d00cef31437fa859f1"
  },
  {
    "url": "assets/img/file_created_empty_error_description.7b50fbc5.png",
    "revision": "7b50fbc5033e9d4ae5107bced7d829a8"
  },
  {
    "url": "assets/img/file_created_empty_error_name.1ea9a155.png",
    "revision": "1ea9a1552876266030f2fad65b044cc7"
  },
  {
    "url": "assets/img/file_created_key_error_dataset.34c54a22.png",
    "revision": "34c54a2261a21e24e1d54262721eb395"
  },
  {
    "url": "assets/img/file_created_register_error_name.2cba8a57.png",
    "revision": "2cba8a57c09c4a129d981907681a05c6"
  },
  {
    "url": "assets/img/file_created_success.fc030794.png",
    "revision": "fc030794f416fc978cdeb201df20b7db"
  },
  {
    "url": "assets/img/file_delete_key_error.284d603b.png",
    "revision": "284d603b7afaa7034c8974d81d2c9af7"
  },
  {
    "url": "assets/img/file_delete_success.8fe34032.png",
    "revision": "8fe3403226fe657baf23f5c1f9c9032f"
  },
  {
    "url": "assets/img/file_get_id_key_error.515f5dff.png",
    "revision": "515f5dffefd5d6096aaf42437ac1e64d"
  },
  {
    "url": "assets/img/file_get_id_success.ed8eade4.png",
    "revision": "ed8eade4e4d3038dfae1eebd8dd50960"
  },
  {
    "url": "assets/img/file_get_success.42229103.png",
    "revision": "422291034abbff6248fe3b560e125369"
  },
  {
    "url": "assets/img/rel_delete_file.3edc0454.png",
    "revision": "3edc04543d0185efdd0555a570323bc9"
  },
  {
    "url": "assets/img/rel_get_category_result.c2752cae.png",
    "revision": "c2752cae5e95616d35f4a8ac383d8062"
  },
  {
    "url": "assets/img/rel_get_category.9f242dd3.png",
    "revision": "9f242dd3eabcad2e370b920c8db7085c"
  },
  {
    "url": "assets/img/rel_get_dataset_result.f8c85c77.png",
    "revision": "f8c85c77bd37813c2060acba80578a73"
  },
  {
    "url": "assets/img/rel_get_dataset.6b951805.png",
    "revision": "6b9518059977ba364e66b873183eeb79"
  },
  {
    "url": "assets/img/rel_get_file_result.85066777.png",
    "revision": "850667775452aa68ca0c690139038357"
  },
  {
    "url": "assets/img/rel_get_file.a81ad0a0.png",
    "revision": "a81ad0a057d42b6ae1d9ce1af5124ed8"
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
    "url": "assets/img/user_created_empty_error_email.051c132c.png",
    "revision": "051c132ca69ece91b0d8ffc8ae410d44"
  },
  {
    "url": "assets/img/user_created_empty_error_firstname.8ff93ed8.png",
    "revision": "8ff93ed86d6d5372f50910cbd9f05cab"
  },
  {
    "url": "assets/img/user_created_empty_error_lastname.562783cf.png",
    "revision": "562783cfbe019c342d11341703357a76"
  },
  {
    "url": "assets/img/user_created_empty_error_password.328008da.png",
    "revision": "328008da5feacd02fcf58b1ed1c37b59"
  },
  {
    "url": "assets/img/user_created_empty_error_username.abc316de.png",
    "revision": "abc316de2445f4450e4b8638627dbc6e"
  },
  {
    "url": "assets/img/user_created_register_error_email.ac06cafc.png",
    "revision": "ac06cafcf66584eb0788b39d621867d7"
  },
  {
    "url": "assets/img/user_created_register_error_password.e8429b21.png",
    "revision": "e8429b211b0f0d0b2b27d7bb45ce9412"
  },
  {
    "url": "assets/img/user_created_register_error_username.bf1a8d28.jpg",
    "revision": "bf1a8d280f0b6d9d3d1e1cb3abe0c63f"
  },
  {
    "url": "assets/img/user_created_success.10078447.jpg",
    "revision": "10078447f1cba70346180a49053b2d86"
  },
  {
    "url": "assets/img/user_delete_key_error.daee7e74.png",
    "revision": "daee7e7457e85dbaf1e9123ccbfeb956"
  },
  {
    "url": "assets/img/user_delete_success.4829479a.png",
    "revision": "4829479a41393f89e1e96ce6723c341a"
  },
  {
    "url": "assets/img/user_get_id_success.774a46b9.png",
    "revision": "774a46b96ad06751f58634a600e206e1"
  },
  {
    "url": "assets/img/user_get_success.80e8a27f.png",
    "revision": "80e8a27fe71e32972fd50f78deaf610e"
  },
  {
    "url": "assets/img/user_put_empty_error_email.97299847.png",
    "revision": "972998473c59b3d60595b80146dcbf2c"
  },
  {
    "url": "assets/img/user_put_empty_error_firstname.2623d7ae.png",
    "revision": "2623d7ae15059586c67e27158a68827f"
  },
  {
    "url": "assets/img/user_put_empty_error_lastname.b9e7d11d.png",
    "revision": "b9e7d11d12e731459bb30afeab60290f"
  },
  {
    "url": "assets/img/user_put_empty_error_password.73b133dc.png",
    "revision": "73b133dc77454354d8c9cd12992e1199"
  },
  {
    "url": "assets/img/user_put_empty_error_username.997679c3.png",
    "revision": "997679c39090c6d24a3c18cf6c9cf955"
  },
  {
    "url": "assets/img/user_put_key_error.ff145628.png",
    "revision": "ff1456282cf5482be2dd6b150d948f1b"
  },
  {
    "url": "assets/img/user_put_register_error_email.7027b127.png",
    "revision": "7027b127f31a884e8f41b4e15a726600"
  },
  {
    "url": "assets/img/user_put_register_error_password.7b9b333e.png",
    "revision": "7b9b333e0ddf93222027b37fec9280b8"
  },
  {
    "url": "assets/img/user_put_register_error_username.e3983802.png",
    "revision": "e3983802c4a9ee6113353444d07664d3"
  },
  {
    "url": "assets/img/user_put_success.ad208ca2.png",
    "revision": "ad208ca28973f8b22604e1a1a4d31dce"
  },
  {
    "url": "assets/js/10.e123d3fc.js",
    "revision": "c6dc90bcb23defc60c9fc909f45abc9c"
  },
  {
    "url": "assets/js/11.e369dcaf.js",
    "revision": "03dcc8e6b439c67fa73eac9431fa65b1"
  },
  {
    "url": "assets/js/12.80e93f43.js",
    "revision": "1f3ca428ba1101d02814388fe67d38dd"
  },
  {
    "url": "assets/js/13.bfa8f4f2.js",
    "revision": "d05e3bd8c828f404640f70adecabbfd3"
  },
  {
    "url": "assets/js/14.fdf49e36.js",
    "revision": "9655db08a3f187e78fea3dfab9a34b93"
  },
  {
    "url": "assets/js/15.61879d69.js",
    "revision": "5a8c7e7dbee79589b2a5a3aa9a65fe33"
  },
  {
    "url": "assets/js/16.2bf8acbb.js",
    "revision": "8768bfecc43056adeb8875b58e630717"
  },
  {
    "url": "assets/js/17.e8a490ba.js",
    "revision": "8a5377b318b93d1f629dd8da09ab939c"
  },
  {
    "url": "assets/js/18.e7d26894.js",
    "revision": "5bef6a44cd0be3757abc87ce285b8506"
  },
  {
    "url": "assets/js/19.b0de145d.js",
    "revision": "33d55766ef376887e785d74ed7ac82b2"
  },
  {
    "url": "assets/js/2.e786013c.js",
    "revision": "7aa53c400d09cf8b8369b3eed18d8bd7"
  },
  {
    "url": "assets/js/20.bf78b1c0.js",
    "revision": "4afd3af4f254d1efce80429ca2225137"
  },
  {
    "url": "assets/js/21.4c717474.js",
    "revision": "afb805311ee06e714727b09f4963d1c7"
  },
  {
    "url": "assets/js/22.93a348e2.js",
    "revision": "692907ff2f0111b7cf83d55a29a964f0"
  },
  {
    "url": "assets/js/23.9e3640bd.js",
    "revision": "4340b7da65782c8358687c86ecf51e8a"
  },
  {
    "url": "assets/js/24.fb7f6867.js",
    "revision": "6ea19ca97cee62022858f8c10a548ca8"
  },
  {
    "url": "assets/js/26.9eb6e3b6.js",
    "revision": "1d40e2b41cdf8e38c8254d56731cd6b6"
  },
  {
    "url": "assets/js/3.236c75f8.js",
    "revision": "cb6b5e480a125ad6544446860d9bf4f0"
  },
  {
    "url": "assets/js/4.6a853a05.js",
    "revision": "6cc7688128bc7eb67e34a1fc0fbeeccb"
  },
  {
    "url": "assets/js/5.5f90cb99.js",
    "revision": "cd940496d6426a5fdf483efc962c9bcd"
  },
  {
    "url": "assets/js/6.77190505.js",
    "revision": "89b69476a142d9484a83afc230eb1bde"
  },
  {
    "url": "assets/js/7.0360651f.js",
    "revision": "db3203023b5fd9cbe7e6b28e06fe47d2"
  },
  {
    "url": "assets/js/8.9409efa8.js",
    "revision": "384a92c5aa959600eba9ccdec98dc957"
  },
  {
    "url": "assets/js/9.07f3436d.js",
    "revision": "6b6bcffa34861fb008a6cf5c0e478324"
  },
  {
    "url": "assets/js/app.92cd43f7.js",
    "revision": "437dc17c8aaa3ff3de74078d01457d03"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b9ffd8acb48221f011f0f4af07051d1d"
  },
  {
    "url": "design/index.html",
    "revision": "6066efcd097b8df7688c98123d342105"
  },
  {
    "url": "index.html",
    "revision": "9e4343e7e8020cc87e2edcc9099175e5"
  },
  {
    "url": "intro/index.html",
    "revision": "f3c47099dc6a5cd46ee4ff3b3370f308"
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
    "revision": "7489f481550689d36107b160cf766d7c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "44ca03f9739d4047a74e4fab62f8da2f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ff5b52fa43171739c5664b2430ad3f70"
  },
  {
    "url": "software/index.html",
    "revision": "84d4f0ee4a4f3b3c586a7b0f17a52d13"
  },
  {
    "url": "test/index.html",
    "revision": "531e674ee65907f89d41a2bcc88b166a"
  },
  {
    "url": "use cases/index.html",
    "revision": "abb1c4874c4384b8295ed91d9f220f69"
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
