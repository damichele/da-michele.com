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
    "revision": "9bdf56617a1e1ee7007f0c764e57cd3f"
  },
  {
    "url": "assets/css/0.styles.d5521e63.css",
    "revision": "5f6971e5ff791beb379852785f5a1b82"
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
    "url": "assets/js/24.85354f6a.js",
    "revision": "07cf89e9012633bd2c295dd141e2662d"
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
    "url": "assets/js/31.b14e4e54.js",
    "revision": "9700e427ae9654d69dd31015f498a711"
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
    "url": "assets/js/app.38a52d64.js",
    "revision": "f5a4f43e0161bfffc8a87ae812e1db8c"
  },
  {
    "url": "en/imprint.html",
    "revision": "2b93d39a4d9f6f496f6666e1c278d6e5"
  },
  {
    "url": "en/index.html",
    "revision": "d67b667cf15386ab04710d0c1bee1c11"
  },
  {
    "url": "en/legal/privacy.html",
    "revision": "a8f63268994b12821d33c9d61c825f92"
  },
  {
    "url": "en/legal/terms.html",
    "revision": "7c38b102dac31e70b8b28f1ad98c74eb"
  },
  {
    "url": "en/menu.html",
    "revision": "815b0f936ca3acc9a8723b9ac43aa37c"
  },
  {
    "url": "en/restaurant/about.html",
    "revision": "7f212e606fe3a5daa547147133e6af25"
  },
  {
    "url": "en/restaurant/career.html",
    "revision": "f3603fb5877b2157918f7b91752248ef"
  },
  {
    "url": "en/restaurant/voucher.html",
    "revision": "8a47603030d5ce6b2ceb0ee09342bfdc"
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
    "url": "fonts/labtop-secundo/labtop-secundo_bold-italic.ttf",
    "revision": "e018ac9e0b2dd3ac555cd62c296b0cd8"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_bold-italic.woff",
    "revision": "fd44924db514ff67e86df3dade52156c"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_bold.ttf",
    "revision": "905c6ceb49341048d29861bd975f32d7"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_bold.woff",
    "revision": "50808cd9eed58490e0ed36bb672d0724"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_italic.ttf",
    "revision": "3033653c688fde0258bdc9f7b0b13153"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_italic.woff",
    "revision": "e20064776566a065c102cdd126f05061"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_superwide.ttf",
    "revision": "7b5ef92e4cfbc74be1a388110fdd27be"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_superwide.woff",
    "revision": "b68c7f012051be4f81546a3bbdde4de0"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_wide.ttf",
    "revision": "1dfd3124d2531f53cd54f75b5e52d83b"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_wide.woff",
    "revision": "f0c9bd6b9b66c039791d45560fb2fe14"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo.ttf",
    "revision": "fe80d71375eb7bddae484293a7835a00"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo.woff",
    "revision": "58827773e4e6040cec184f1c77ae1045"
  },
  {
    "url": "imprint.html",
    "revision": "39ec144b1490974f65a8aadc61240dd1"
  },
  {
    "url": "index.html",
    "revision": "2ea38a93b5ff29d58d905cc8d4d2d9f5"
  },
  {
    "url": "legal/privacy.html",
    "revision": "6c92fb08d7614f121c74039800423eb5"
  },
  {
    "url": "legal/terms.html",
    "revision": "7ec42cfdf069952e71f2928a28f4a74e"
  },
  {
    "url": "logo.png",
    "revision": "c6b5413250479a0c39620f18fc4af4ac"
  },
  {
    "url": "menu.html",
    "revision": "8d7497c329b3e3f7c2284bdd89105d12"
  },
  {
    "url": "restaurant/about.html",
    "revision": "c01ac99aba3a84f5c2c1b622d8ed48f7"
  },
  {
    "url": "restaurant/career.html",
    "revision": "42773c5d22864532d8b91442f83d1014"
  },
  {
    "url": "restaurant/voucher.html",
    "revision": "17f282b53cea04bf7715655395a886d3"
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
