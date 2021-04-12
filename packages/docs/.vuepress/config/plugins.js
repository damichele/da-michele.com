module.exports = [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
    // ['@vuepress/blog'],
    [
        '@vuepress/google-analytics',
        {
            'ga': 'UA-174975409-1'
        }
    ],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ['@vuepress/search', {
        searchMaxSuggestions: 10
    }],
    ['check-md'],
    [
        'vuepress-plugin-container',
        {
            type: 'menulink',
            before: info => `<div class="menulink" align="center"><a :href="$withBase($localePath + 'menu.html')">`,
            after: '</a></div>'
        }
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'right',
            defaultTitle: ''
        }
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'teammember',
            before: info => `<div class="teammember">`,
            after: '</div>'
        }
    ],
    [
        'sitemap',
        {
            hostname: 'https://da-michele.com',
            exclude: [
                '/404.html'
            ]
        }
    ]
]
