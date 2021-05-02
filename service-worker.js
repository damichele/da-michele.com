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
    "revision": "54f1ec0a1fb37aa9290e1a630479f748"
  },
  {
    "url": "assets/css/0.styles.8372cebf.css",
    "revision": "8b8a09a45e261699ae4b57c456a0c080"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.82d7a141.js",
    "revision": "ecf2576d2148c57570b0a078651068ef"
  },
  {
    "url": "assets/js/11.484d34d3.js",
    "revision": "77212cdea94b85220f712d7eaed97af4"
  },
  {
    "url": "assets/js/12.b93aa3b4.js",
    "revision": "496cf3d8f0e198ea42d27304193ce851"
  },
  {
    "url": "assets/js/13.746bb345.js",
    "revision": "5e3642ff5ffad4a07fb742b19176e090"
  },
  {
    "url": "assets/js/14.a6e54faa.js",
    "revision": "10c45bc9cbf862ac79be84009222169a"
  },
  {
    "url": "assets/js/15.c15802d0.js",
    "revision": "5277bb2396585aec4f2d77e7901358e7"
  },
  {
    "url": "assets/js/16.9a8fcb9e.js",
    "revision": "d01b0784b5fdda59011b44b1317ed409"
  },
  {
    "url": "assets/js/17.f6ed8bdc.js",
    "revision": "caed912605d8857de2fb5b89a4febcba"
  },
  {
    "url": "assets/js/18.d26ac263.js",
    "revision": "60c66baf914323b6b89cf55e6d324086"
  },
  {
    "url": "assets/js/19.b070b47b.js",
    "revision": "90e2db02fc0241e46d1814232b363895"
  },
  {
    "url": "assets/js/2.b3499f26.js",
    "revision": "c355228b1ce13dc6be99183712990cf0"
  },
  {
    "url": "assets/js/20.76b74ff8.js",
    "revision": "7a349d0b4d96b42f70218856d48d9934"
  },
  {
    "url": "assets/js/21.f9e09a92.js",
    "revision": "d35818f2157817aaba2571187466e38a"
  },
  {
    "url": "assets/js/22.98b3fd54.js",
    "revision": "7bcff78bd62bc54bd6e54567e8fdf9a2"
  },
  {
    "url": "assets/js/23.4a2c813c.js",
    "revision": "9cbe6be2eeef4662b7d893d0865bf3a0"
  },
  {
    "url": "assets/js/24.4d770b9c.js",
    "revision": "46d499786af04237200ad9a389afdfec"
  },
  {
    "url": "assets/js/25.d5c13b0c.js",
    "revision": "bc6dddf0b0fbdb1b4161a8d78d268ace"
  },
  {
    "url": "assets/js/26.1c236eea.js",
    "revision": "62c511c7ebad0279f68247ff49056021"
  },
  {
    "url": "assets/js/27.9ed96961.js",
    "revision": "b02c54a389f0103e03b746c00b318907"
  },
  {
    "url": "assets/js/28.56944db7.js",
    "revision": "034d9a90283d3d6e2c48149b64451b4a"
  },
  {
    "url": "assets/js/29.6a8b9273.js",
    "revision": "c562db965c1388ade24386198eb08190"
  },
  {
    "url": "assets/js/3.f2f47344.js",
    "revision": "b451d185bfb721f58a74c43836c49a34"
  },
  {
    "url": "assets/js/30.d3986de1.js",
    "revision": "e69619b1e8ed5f5ca632937954715451"
  },
  {
    "url": "assets/js/31.88fcf888.js",
    "revision": "cce7ddfaa8281c49f4593be868769ef9"
  },
  {
    "url": "assets/js/32.a1d970ef.js",
    "revision": "13f598ce52307c014bd09c80f4f9b264"
  },
  {
    "url": "assets/js/33.b242f35b.js",
    "revision": "c938587f84bc75d629d5b3aa3031e68b"
  },
  {
    "url": "assets/js/34.d565eea7.js",
    "revision": "5f3d4ff495290ca7bcb4b5ed230af87a"
  },
  {
    "url": "assets/js/35.3232091a.js",
    "revision": "5fe6055388b38a2b0dfa5743df06bcfa"
  },
  {
    "url": "assets/js/4.b82ea536.js",
    "revision": "1b05b81c583f5d6b4e62e7fd07c153b0"
  },
  {
    "url": "assets/js/5.0a3e9f67.js",
    "revision": "9a2aaa139e02231b654fddc4a58df073"
  },
  {
    "url": "assets/js/6.faafc504.js",
    "revision": "9219737bcd38e15dc91165d262fdada9"
  },
  {
    "url": "assets/js/7.366544da.js",
    "revision": "7d3fe18eb006c3606c16c12d04d19151"
  },
  {
    "url": "assets/js/8.5d31645b.js",
    "revision": "6be7194c1453a1765fc15733565b37f2"
  },
  {
    "url": "assets/js/9.4ac765ef.js",
    "revision": "ea6635112dde547e932305c4e4d8455e"
  },
  {
    "url": "assets/js/app.293d3375.js",
    "revision": "100f3a91d26ebc115c88824bace20708"
  },
  {
    "url": "en/imprint.html",
    "revision": "bc25a6cde6954c68f20068325c99e537"
  },
  {
    "url": "en/index.html",
    "revision": "9dfb524305e9a193c20b23b836b3b4d6"
  },
  {
    "url": "en/legal/privacy.html",
    "revision": "fe1f14d36d28c5b3da5c8f8a812cb720"
  },
  {
    "url": "en/legal/terms.html",
    "revision": "bdc1da0ef6a2501f37673181dad13364"
  },
  {
    "url": "en/menu.html",
    "revision": "a55bb764087ded3b2baae294715c9885"
  },
  {
    "url": "en/restaurant/about.html",
    "revision": "00751e6868966130e9110dda0327ee07"
  },
  {
    "url": "en/restaurant/career.html",
    "revision": "ea5f2e3207c4c94620fd540ae28583db"
  },
  {
    "url": "en/restaurant/voucher.html",
    "revision": "7de88ae5589f9441c87a97b289985566"
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
    "revision": "75e3ec1b7dcd0a8e4cd14778b63fa70e"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_bold.ttf",
    "revision": "793512fa7f537ac0445e4ef280b55f83"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_italic.ttf",
    "revision": "a7bba6313d3d926b442437a527e44bd1"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_superwide.ttf",
    "revision": "4afdf099048e4981fe802dcc9c917f53"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo_wide.ttf",
    "revision": "34f4ebaaa00f18dffd568778aff490a7"
  },
  {
    "url": "fonts/labtop-secundo/labtop-secundo.ttf",
    "revision": "db2a9b991a3f430a96eb93fa1324a452"
  },
  {
    "url": "imprint.html",
    "revision": "ed593923b05aac24f5a7bb9379ef6928"
  },
  {
    "url": "index.html",
    "revision": "c990a08530273526194360e794b41fbb"
  },
  {
    "url": "legal/privacy.html",
    "revision": "600a2814f542a3aee5c56b7ed697373e"
  },
  {
    "url": "legal/terms.html",
    "revision": "fb9151e0d4719b0b2e7b81ca06e52989"
  },
  {
    "url": "logo.png",
    "revision": "c6b5413250479a0c39620f18fc4af4ac"
  },
  {
    "url": "menu.html",
    "revision": "7a57ee90b3dc373e7ad27533f56330d4"
  },
  {
    "url": "restaurant/about.html",
    "revision": "fd779233b30f6db0a2e65718cfb75e6f"
  },
  {
    "url": "restaurant/career.html",
    "revision": "1ebd2637cd5603e0ce029a477e7b31e9"
  },
  {
    "url": "restaurant/voucher.html",
    "revision": "5c4d761ecad3f8f32f133c5b1678de72"
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
