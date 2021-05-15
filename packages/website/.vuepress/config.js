module.exports = context => ({
  base: '/',
  dest: '../../docs',
  locales: {
    '/': {
      lang: 'de-DE',
      title: 'Ristorante da Michele',
      description: 'Das Ristorante da Michele bietet eine täglich wechselnde Karte mit frischen Fisch- und Fleischgerichten sowie den üblichen italienischen Klassikern.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Ristorante da Michele',
      description: 'The Ristorante da Michele offers a daily changing menu with fresh fish and meat dishes as well as the usual Italian classics.'
    }
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'author', content: 'Ristorante Da Michele, Baden-Baden' }],
    ['meta', { name: 'keywords', content: 'ristorante,da michele,baden-baden,italian restaurant' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `/favicons/safari-pinned-tab.svg` }],
    ['link', { rel: 'alternate icon', type: 'image/png', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#6699cc' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#000000' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'geo.position', content: '48.786975;8.1936724' }],
    ['meta', { name: 'geo.region', content: 'DE' }],
    ['meta', { name: 'geo.placename', content: 'Baden-Baden' }],
    ['meta', { name: 'twitter:title', content: 'Ristorante da Michele, Baden-Baden' }],
    // set 'twitter:description' on page-by-page basis
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image:src', content: 'https://da-michele.com/social/social_banner_16x9.webp' }],
    ['meta', { property: 'og:title', content: 'Ristorante da Michele, Baden-Baden' }],
    // set 'og:description' on page-by-page basis
    ['meta', { property: 'og:site_name', content: 'Ristorante da Michele' }],
    ['meta', { property: 'og:image', content: 'https://da-michele.com/social/social_banner_1x1.webp' }],
    ['meta', { property: 'og:image:secure_url', content: 'https://da-michele.com/social/social_banner_1x1.webp' }],
    ['meta', { property: 'og:image:width', content: '416' }],
    ['meta', { property: 'og:image:height', content: '416' }],
    ['meta', { property: 'og:image:alt', content: 'Ristorante da Michele, Baden-Baden' }],
    ['meta', { property: 'og:image', content: 'https://da-michele.com/social/social_banner_4x3.webp' }],
    ['meta', { property: 'og:image:secure_url', content: 'https://da-michele.com/social/social_banner_4x3.webp' }],
    ['meta', { property: 'og:image:width', content: '555' }],
    ['meta', { property: 'og:image:height', content: '416' }],
    ['meta', { property: 'og:image:alt', content: 'Ristorante da Michele, Baden-Baden' }],
    ['meta', { property: 'og:image', content: 'https://da-michele.com/social/social_banner_16x9.webp' }],
    ['meta', { property: 'og:image:secure_url', content: 'https://da-michele.com/social/social_banner_16x9.webp' }],
    ['meta', { property: 'og:image:width', content: '740' }],
    ['meta', { property: 'og:image:height', content: '416' }],
    ['meta', { property: 'og:image:alt', content: 'Ristorante da Michele, Baden-Baden' }]
  ],
  themeConfig: {
    // repo: 'da-michele/da-michele.com',
    prefersTheme: { light: [7, 20], dark: [20, 7] },
    docsRepo: 'da-michele/da-michele.com',
    docsDir: 'packages/website',
    editLinks: false,
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'Deutsch 🇩🇪',
        selectText: '🌐 Sprachen',
        ariaLabel: 'Wähle eine Sprache',
        editLinkText: 'Diese Seite auf GitHub ändern',
        nav: require('./config/nav/de'),
        logo: '/logo.png',
        searchPlaceholder: 'Suchen ...',
        serviceWorker: {
          updatePopup: {
            message: 'Neuer Inhalt ist verfügbar.',
            buttonText: 'Neu laden'
          }
        },
        sidebar: require('./config/sidebar/de')
      },
      '/en/': {
        label: 'English 🇺🇸🇬🇧',
        selectText: '🌐 Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        nav: require('./config/nav/en'),
        logo: '/logo.png',
        searchPlaceholder: 'Search ...',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        sidebar: require('./config/sidebar/en')
      }
    }
  },
  plugins: require('./config/plugins'),
  extraWatchFiles: [
    '.vuepress/config/nav/en.js',
    '.vuepress/config/nav/de.js',
    '.vuepress/config/sidebar/en.js',
    '.vuepress/config/sidebar/de.js',
    '.vuepress/config/plugins.js'
  ],
  markdown: {
    lineNumbers: true
  }
})
