export default {
  target: 'server',

  head: {
    title: 'rusonyx',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' }, {accept: 'application/json'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/css/main.css'
  ],

  plugins: [
    // '@/plugins/axios'
  ],

  loading: { color: '#FF9B06' },

  router: {
    prefetchLinks: false
  },


  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/style-resources'
  ],

  axios: {
    baseURL: 'https://api.rusonyx.staj.fun/api/',
  },

  build: {
    // optimizeCss: true,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'
    }
  },

  server: {
    port: 8085 // default: 3000
  },

  publicRuntimeConfig: {
    imgURL: 'https://api.rusonyx.staj.fun/storage/'
  }
}
