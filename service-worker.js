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
    "revision": "a5d66b78084266b67199269e1783eb3d"
  },
  {
    "url": "assets/css/0.styles.d3aedfe9.css",
    "revision": "e607cd495b3362420eefb03b9c6eac05"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4d4bb784.js",
    "revision": "686f092dd60f9e03bab62b6c583aeac4"
  },
  {
    "url": "assets/js/11.597f3750.js",
    "revision": "520b3384c70e6680d566a90bd43da9d0"
  },
  {
    "url": "assets/js/12.81701fe2.js",
    "revision": "6c47817d21fc9657d5e3819f4538550b"
  },
  {
    "url": "assets/js/13.c129a935.js",
    "revision": "9f0fad60a7b3f4d8abd0ece5d3d53064"
  },
  {
    "url": "assets/js/14.63b6d1ac.js",
    "revision": "2f17757c459794ef9e96c271ffaed257"
  },
  {
    "url": "assets/js/15.9e030d9a.js",
    "revision": "72ada507a73ae01908deba426365e18e"
  },
  {
    "url": "assets/js/16.5884a407.js",
    "revision": "5bc38027c51348e8d1486df4e6e7dbd3"
  },
  {
    "url": "assets/js/17.d669fade.js",
    "revision": "e2efb1810e85cc949379612974940419"
  },
  {
    "url": "assets/js/18.ea9dd8e3.js",
    "revision": "e1dfb24cb71516f3ae0a331c338e89e9"
  },
  {
    "url": "assets/js/19.672531fd.js",
    "revision": "12cb6893ee0a3f1297f45edaaf4df28f"
  },
  {
    "url": "assets/js/2.2ef2994c.js",
    "revision": "33ae6f2c17dde880128f65d1620633e5"
  },
  {
    "url": "assets/js/20.cd11f911.js",
    "revision": "771f1a3550960eed1de7631e84c0414c"
  },
  {
    "url": "assets/js/21.6ed0d075.js",
    "revision": "b99f41931aa626202d5ee8f2ee4edf95"
  },
  {
    "url": "assets/js/22.d74ab79c.js",
    "revision": "16b3be6c1c366d02a4053df9a59e5c22"
  },
  {
    "url": "assets/js/23.c4c23302.js",
    "revision": "24c1958656bd50dcbbc7e66aa1f6d4f6"
  },
  {
    "url": "assets/js/24.12840196.js",
    "revision": "4eab68a48a5fae4e006185c9739e989a"
  },
  {
    "url": "assets/js/25.6b72f89f.js",
    "revision": "983a72278db158b1d3d35c3972ebdbe8"
  },
  {
    "url": "assets/js/26.184de9f5.js",
    "revision": "a07414016be0e6709176f627a2863f0c"
  },
  {
    "url": "assets/js/27.f6d5cdcb.js",
    "revision": "eadc0f7c53586837fe3c6d604365c741"
  },
  {
    "url": "assets/js/28.dbcd83cd.js",
    "revision": "1cce20d345271960ea80c131b5db3df5"
  },
  {
    "url": "assets/js/29.d0d44e8c.js",
    "revision": "53cfe93c3d411473a105d7d8cbc7d1f9"
  },
  {
    "url": "assets/js/3.0f25dc07.js",
    "revision": "11eb18744195f30d1280e4104bc633a3"
  },
  {
    "url": "assets/js/30.a9467309.js",
    "revision": "2d5331a2a6670780878087d2e3408f32"
  },
  {
    "url": "assets/js/31.9c150522.js",
    "revision": "3d5284e36d8d7c6d07c9f6fe207a226c"
  },
  {
    "url": "assets/js/32.4804ffb9.js",
    "revision": "824228fd4f1a42f1999032b98dbd041e"
  },
  {
    "url": "assets/js/33.988a1238.js",
    "revision": "d8f42fe6d3d9c2f89a2435149ef988d5"
  },
  {
    "url": "assets/js/34.6cae327e.js",
    "revision": "f92369203a415d593881dd00000d3f39"
  },
  {
    "url": "assets/js/35.cb05be37.js",
    "revision": "bdb4af18f3666a8cf8f8e4b3276fd362"
  },
  {
    "url": "assets/js/4.c9536427.js",
    "revision": "b9ebf834d2a3394391b2ee52bad9ae78"
  },
  {
    "url": "assets/js/5.e4b8af8a.js",
    "revision": "f77c37429195195bc2e2679c83e45833"
  },
  {
    "url": "assets/js/6.5dea4f4a.js",
    "revision": "ca1017175c937eda90e3d0a624792638"
  },
  {
    "url": "assets/js/7.7b0f0ba9.js",
    "revision": "c252026cbc508e7c27a311f8c6de689a"
  },
  {
    "url": "assets/js/8.92bc4ebe.js",
    "revision": "7e5f33a3ef145db4e13cc2044f6df79c"
  },
  {
    "url": "assets/js/9.e98e07f9.js",
    "revision": "f411f6367ed9d00e74e5f240ab30fa7e"
  },
  {
    "url": "assets/js/app.1f417e90.js",
    "revision": "4e76fe061afc61b9ab26e26ba53098ab"
  },
  {
    "url": "en/imprint.html",
    "revision": "67f736956625b1256dba53f3b5e0f28c"
  },
  {
    "url": "en/index.html",
    "revision": "7e62b2e928b77fe333a68cd6b10a445e"
  },
  {
    "url": "en/legal/privacy.html",
    "revision": "dccf6a3a3f189263077be10abc665f2a"
  },
  {
    "url": "en/legal/terms.html",
    "revision": "c52e35f58636db69a7561329c2d865e8"
  },
  {
    "url": "en/menu.html",
    "revision": "f0b77eae85eb9979ecb4693197e9581d"
  },
  {
    "url": "en/restaurant/about.html",
    "revision": "233bab3fecc7e7e55572bc51a9b9b015"
  },
  {
    "url": "en/restaurant/career.html",
    "revision": "23ee895d5925953f2441ac089c21d91a"
  },
  {
    "url": "en/restaurant/voucher.html",
    "revision": "1c082996dd98deb5212e105c65541edb"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "b5bb7370a1d8514edf0090e43db133f0"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "7efdd38b497b53b7107614b869f66f05"
  },
  {
    "url": "favicons/apple-touch-icon-120x120.png",
    "revision": "fc9d9f7c68218a99d621dd6b78a745df"
  },
  {
    "url": "favicons/apple-touch-icon-152x152.png",
    "revision": "d9453d0a95f7f015c04e2e62fa026819"
  },
  {
    "url": "favicons/apple-touch-icon-180x180.png",
    "revision": "56900fa18962879e8dd552a51d12d4f9"
  },
  {
    "url": "favicons/apple-touch-icon-60x60.png",
    "revision": "0e11ab71d77f64ab799e91048c41c564"
  },
  {
    "url": "favicons/apple-touch-icon-76x76.png",
    "revision": "c1e3727217fe03a3923fdbf309066bd1"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "56900fa18962879e8dd552a51d12d4f9"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "51b3bb4949d0db2091ca582624fb2179"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "44bc95cf9f64175d6dccdf020d8de6bf"
  },
  {
    "url": "favicons/msapplication-icon-144x144.png",
    "revision": "a61a7b078cbfb225be2fbedd676cba7e"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "b8524378e89f69630ed097dafe9386dc"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "e73e46c8348e3f1b662620eac4ad31b8"
  },
  {
    "url": "imprint.html",
    "revision": "6e9f8562729547c80f88fafd62a8a244"
  },
  {
    "url": "index.html",
    "revision": "7aadfb3e11f0c50a8daa3ef94f2565b8"
  },
  {
    "url": "legal/privacy.html",
    "revision": "fdeac3e509c2f89467257d82c9bd3bf1"
  },
  {
    "url": "legal/terms.html",
    "revision": "a2a50597ec823b3343a187b976dcf45e"
  },
  {
    "url": "logo.png",
    "revision": "c6b5413250479a0c39620f18fc4af4ac"
  },
  {
    "url": "menu.html",
    "revision": "36be515f41b367d73885fc59e833e293"
  },
  {
    "url": "restaurant/about.html",
    "revision": "71fe811078892a9f572f8c5ce5d531e9"
  },
  {
    "url": "restaurant/career.html",
    "revision": "542ea299134ef24cc4aa43771f23ed79"
  },
  {
    "url": "restaurant/voucher.html",
    "revision": "c17ab1ddab5e36da0d6977433ba1dc01"
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
