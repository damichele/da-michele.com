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
    "revision": "71da785818035f3077c38bc51faaff76"
  },
  {
    "url": "assets/css/0.styles.975c0afc.css",
    "revision": "87b359e2a9d419f3bcd85e5b96c5d837"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.67a2dc7a.js",
    "revision": "31b70d1acb38bdf6dd131afd9e9a14d8"
  },
  {
    "url": "assets/js/11.d5fa13d2.js",
    "revision": "63d9ae346087dce9302b6baf1c6f9c5b"
  },
  {
    "url": "assets/js/12.f6149a54.js",
    "revision": "cb43dd5af3a14d10371ab764a58a4979"
  },
  {
    "url": "assets/js/13.eff515e9.js",
    "revision": "1475217ec3917419854aed200d2804ba"
  },
  {
    "url": "assets/js/14.c2414df1.js",
    "revision": "a49742a71b82f81e61a979fcd2fc1948"
  },
  {
    "url": "assets/js/15.a4f8e58f.js",
    "revision": "4e824a1c2615e9c59b49c833b9ea15d9"
  },
  {
    "url": "assets/js/16.25e58113.js",
    "revision": "836e5c57153b65ed2f4285cd8e83b524"
  },
  {
    "url": "assets/js/17.95239ee3.js",
    "revision": "9f764cc2cf5436196ee98839512bda40"
  },
  {
    "url": "assets/js/18.61ec450c.js",
    "revision": "5af2e04b47588587059709179689eb0f"
  },
  {
    "url": "assets/js/19.26051175.js",
    "revision": "37906fa4997a8ce0ac52a55059d49adf"
  },
  {
    "url": "assets/js/2.f7f087cd.js",
    "revision": "851a32ae5c8bad369f6229243ac29b94"
  },
  {
    "url": "assets/js/20.ba75ddc4.js",
    "revision": "538c6fa095d0dd9df27491b2472e97a8"
  },
  {
    "url": "assets/js/21.a41194e2.js",
    "revision": "b1857f4d93e3fe6d77a59397c77f39fd"
  },
  {
    "url": "assets/js/22.115b537e.js",
    "revision": "58ba591bfea24ea1b03071bb93985780"
  },
  {
    "url": "assets/js/23.2de9abb2.js",
    "revision": "154b8bd60b84c9cb5b8f656e51cae177"
  },
  {
    "url": "assets/js/24.014046d3.js",
    "revision": "727e9e9b3e4c4f9775555f45cc88c7cd"
  },
  {
    "url": "assets/js/25.8b99f691.js",
    "revision": "0078b698c00cbad44837abf5160d9e46"
  },
  {
    "url": "assets/js/26.c3d88c9e.js",
    "revision": "8e7108334c6d7c9b5656cc7ef1841f20"
  },
  {
    "url": "assets/js/27.edb5e5aa.js",
    "revision": "4eb0693eaa1370000f00da06ee2c47cf"
  },
  {
    "url": "assets/js/28.c4429478.js",
    "revision": "5375a398d79731568d5bd7f5c5a88fce"
  },
  {
    "url": "assets/js/29.dd48377c.js",
    "revision": "6ac513ef97d6be5fd03244c862048c3e"
  },
  {
    "url": "assets/js/3.ac5af648.js",
    "revision": "95c0ecb1134a611b2c50ec127e2bccf7"
  },
  {
    "url": "assets/js/30.0ac4190d.js",
    "revision": "64c9bccbce87ab84121e570dbdef73d5"
  },
  {
    "url": "assets/js/31.e8ed0a23.js",
    "revision": "69af42569171c48da1070f00e3aed6ab"
  },
  {
    "url": "assets/js/32.ef38ed75.js",
    "revision": "d05e5e260e19ac8b26c6b043655e7f49"
  },
  {
    "url": "assets/js/33.e6f6ed5b.js",
    "revision": "af2e96bf27565e9675b7dfa3ca6d09aa"
  },
  {
    "url": "assets/js/34.fec53fcc.js",
    "revision": "3e9780367470936789e4f8d81040989d"
  },
  {
    "url": "assets/js/4.104247e0.js",
    "revision": "1150effecd35ae55f629da71778bf045"
  },
  {
    "url": "assets/js/5.429cf1eb.js",
    "revision": "28ff08d12c5b11cf714eaf33fee71309"
  },
  {
    "url": "assets/js/6.a93edc28.js",
    "revision": "b1736644034ba1ae09240aa13e9fb48d"
  },
  {
    "url": "assets/js/7.118e37f8.js",
    "revision": "6ea14cf8293e78c43fd5dad836194db2"
  },
  {
    "url": "assets/js/8.911792d2.js",
    "revision": "820c9a546c474ce47c4d828b2717b9b4"
  },
  {
    "url": "assets/js/9.b56e2071.js",
    "revision": "1816665521e258ebb1c4838722aaabff"
  },
  {
    "url": "assets/js/app.f06c6070.js",
    "revision": "23d884fb0bd83cf79f0bd95b08c1d7d3"
  },
  {
    "url": "en/imprint.html",
    "revision": "ceec5f2c0747ef2f8efb7d7dfdc1459e"
  },
  {
    "url": "en/index.html",
    "revision": "35d01694047c0c70e9eeebdfa1fdc224"
  },
  {
    "url": "en/legal/privacy.html",
    "revision": "d53af1dfb196ab5c27b4e30750afd142"
  },
  {
    "url": "en/legal/terms.html",
    "revision": "45b142fe19dc8d13ea6a989c3ea45593"
  },
  {
    "url": "en/menu.html",
    "revision": "a68bbc3a891cb4bb3ab6be809bafc1f5"
  },
  {
    "url": "en/restaurant/about.html",
    "revision": "4c0b0f234de90548c92e89681708b8f7"
  },
  {
    "url": "en/restaurant/career.html",
    "revision": "13137eab4aa5e4fc74fcd41bd9c0d195"
  },
  {
    "url": "en/restaurant/voucher.html",
    "revision": "d22e52f107cb9d5166fddb3390e91b19"
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
    "revision": "47dc4b03392fa654ce54a77dd5e51cfd"
  },
  {
    "url": "index.html",
    "revision": "41c79cc202cba0579d6bb5b8ca6d8a61"
  },
  {
    "url": "legal/privacy.html",
    "revision": "53a4e1ed11f30cda72cb5c0a1d140bd2"
  },
  {
    "url": "legal/terms.html",
    "revision": "d56b5a49cf1644d78d8eab047915be63"
  },
  {
    "url": "logo.png",
    "revision": "c6b5413250479a0c39620f18fc4af4ac"
  },
  {
    "url": "menu.html",
    "revision": "93b23b99b7427d9613ba69b4c37807a6"
  },
  {
    "url": "restaurant/about.html",
    "revision": "1f24fbd7330f860c9eb23ce1a447b717"
  },
  {
    "url": "restaurant/career.html",
    "revision": "3e9e230dfd8d6e0b0ccd84416a16c869"
  },
  {
    "url": "restaurant/voucher.html",
    "revision": "cc4caa3762cfdf2d469a03a4435064c5"
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
