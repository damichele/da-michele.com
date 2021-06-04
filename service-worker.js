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
    "revision": "b5a6ae5b3ebafa1500796e8b648e612a"
  },
  {
    "url": "assets/css/0.styles.64354af8.css",
    "revision": "87b359e2a9d419f3bcd85e5b96c5d837"
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
    "url": "assets/js/13.421d1dc0.js",
    "revision": "275ae25f02213e330442fcf606d57ffb"
  },
  {
    "url": "assets/js/14.e9eb4eab.js",
    "revision": "8f383171578098383e4b48d33e5886dd"
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
    "url": "assets/js/17.3b9af7b4.js",
    "revision": "29fe980e02541abbe8183aa5e0c07ece"
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
    "url": "assets/js/2.5cfbdf5d.js",
    "revision": "4f11821a7b1a8f43b81258c6aac95245"
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
    "url": "assets/js/24.3b70cbe9.js",
    "revision": "4a5b2c2dffa3c266bad8e607dae16133"
  },
  {
    "url": "assets/js/25.bd6f26b6.js",
    "revision": "b8d047d0209582119b92eb5c36d00c04"
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
    "url": "assets/js/31.b557d161.js",
    "revision": "a23fefdf2cbb6f5ac5a4a6a9c250e9aa"
  },
  {
    "url": "assets/js/32.3bbcf53c.js",
    "revision": "182936bddef223fb9508361784e33de8"
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
    "url": "assets/js/5.c8a6f5b1.js",
    "revision": "004217b6ad79572ad729e5eb08961f2b"
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
    "url": "assets/js/app.6389db8f.js",
    "revision": "e987f678423bcc293f03171f85b8c58c"
  },
  {
    "url": "en/imprint.html",
    "revision": "06b0f64865dd741cdcc84562bb7ddfa1"
  },
  {
    "url": "en/index.html",
    "revision": "c7384a9d4f21e919a1f61928b37bba3a"
  },
  {
    "url": "en/legal/privacy.html",
    "revision": "89afd276e34eaf4a2d3a8102d525828c"
  },
  {
    "url": "en/legal/terms.html",
    "revision": "9b8990d72ec0221f6293aa9eccffcc25"
  },
  {
    "url": "en/menu.html",
    "revision": "8240604f368299a82fd8865a6e27df71"
  },
  {
    "url": "en/restaurant/about.html",
    "revision": "c7171ecc744424041ab8293d3442de31"
  },
  {
    "url": "en/restaurant/career.html",
    "revision": "8c736f8aba0b7d8b8c8285d4399b6d54"
  },
  {
    "url": "en/restaurant/voucher.html",
    "revision": "e67ca49eaaec50cc088bcc231e2eb67b"
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
    "url": "fonts/lato/Lato-Black.ttf",
    "revision": "e631d2735799aa943d93d301abf423d2"
  },
  {
    "url": "fonts/lato/Lato-Black.woff",
    "revision": "9617ba4bd466ff411e2bda15dc89b851"
  },
  {
    "url": "fonts/lato/Lato-BlackItalic.ttf",
    "revision": "2e26a9163cb4974dcba1bea5107d4492"
  },
  {
    "url": "fonts/lato/Lato-BlackItalic.woff",
    "revision": "5bdfbeebb7c2f00e4d2d3623a74c91e9"
  },
  {
    "url": "fonts/lato/Lato-Bold.ttf",
    "revision": "85d339d916479f729938d2911b85bf1f"
  },
  {
    "url": "fonts/lato/Lato-Bold.woff",
    "revision": "5409e910a6964c1014056c9488c58956"
  },
  {
    "url": "fonts/lato/Lato-BoldItalic.ttf",
    "revision": "f98d18040a766b7bc4884b8fcc154550"
  },
  {
    "url": "fonts/lato/Lato-BoldItalic.woff",
    "revision": "33159950020310f26329dc20bce9c149"
  },
  {
    "url": "fonts/lato/Lato-Italic.ttf",
    "revision": "7582e823ef0d702969ea0cce9afb326d"
  },
  {
    "url": "fonts/lato/Lato-Italic.woff",
    "revision": "4726abfcf1b6378cc52227fac116214f"
  },
  {
    "url": "fonts/lato/Lato-Light.ttf",
    "revision": "2fe27d9d10cdfccb1baef28a45d5ba90"
  },
  {
    "url": "fonts/lato/Lato-Light.woff",
    "revision": "2cf063e5bea5c34bc2140749a80e9d33"
  },
  {
    "url": "fonts/lato/Lato-LightItalic.ttf",
    "revision": "4d80ac573c53d192dafd99fdd6aa01e9"
  },
  {
    "url": "fonts/lato/Lato-LightItalic.woff",
    "revision": "601068f8268b69af20d5cb1849b3139f"
  },
  {
    "url": "fonts/lato/Lato-Regular.ttf",
    "revision": "2d36b1a925432bae7f3c53a340868c6e"
  },
  {
    "url": "fonts/lato/Lato-Regular.woff",
    "revision": "66423886e2d29be757450fa6a3d17392"
  },
  {
    "url": "fonts/lato/Lato-Thin.ttf",
    "revision": "9a77fbaa85fa42b73e3b96399daf49c5"
  },
  {
    "url": "fonts/lato/Lato-Thin.woff",
    "revision": "1db543fea9d430298db7697702961621"
  },
  {
    "url": "fonts/lato/Lato-ThinItalic.ttf",
    "revision": "4ac7208bbe0e3593ce9464f013607751"
  },
  {
    "url": "fonts/lato/Lato-ThinItalic.woff",
    "revision": "8526e9375fdff96e23f4582d453a8ffa"
  },
  {
    "url": "imprint.html",
    "revision": "d08fede47e851debb5173193ec4d3418"
  },
  {
    "url": "index.html",
    "revision": "6dab2713ff8447258915b6aa381f85f3"
  },
  {
    "url": "legal/privacy.html",
    "revision": "8b39f85993f6d3a27c89be3e89a30b6b"
  },
  {
    "url": "legal/terms.html",
    "revision": "b6233a176f776ecdf4ea9ee5eefb3778"
  },
  {
    "url": "logo.png",
    "revision": "c6b5413250479a0c39620f18fc4af4ac"
  },
  {
    "url": "menu.html",
    "revision": "cda704a9ec79fff7c70727636adf5062"
  },
  {
    "url": "restaurant/about.html",
    "revision": "1c75a0af2d8985d862ffbb4aa784b62d"
  },
  {
    "url": "restaurant/career.html",
    "revision": "c0fa906e31911f9a9e62315eb89d174a"
  },
  {
    "url": "restaurant/voucher.html",
    "revision": "0ca5736e96494eb23497cd43d1db48ba"
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
