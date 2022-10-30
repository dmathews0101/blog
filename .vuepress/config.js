// .vuepress/config.js

module.exports = {
    title: 'Web',
    description: 'Short Notes on Front-End Web Development',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'JavaScript', link: '/javascript/' },
            { text: 'Summary', link: '/summary/' },
            { text: 'About me', link: 'https://github.com/dawnnmathews' }
        ],
        // sidebar: 'auto',
        sidebar: {
            '/summary/': [
                ''
            ],
            '/javascript/': [
                '',
                'dataattributes',
                'datasetproperty'
            ]
        },
        displayAllHeaders: true
    }
}