module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  telemetry: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  server: {
    port: 30021, // default: 3000
    //host: //'0.0.0.0', // default: localhost
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "P2P strongly stands for the phrase 'Plan To Perfection'. It is what we believe as our motto for our clients." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '' }

    ],
    script: [
      // {
      //   src: "/js/main.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/js/coreui.bundle.min.js",
      //   type: "text/javascript"
      // },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
      '~assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/vue-paginate', mode: 'client' },
    { src: '~/plugins/vue-slider', mode: 'client' },
    { src: '~/plugins/vue-splide-slider', mode: 'client' },
    { src: '~/plugins/vue-glide-slider', mode: 'client' },
    { src: '~/plugins/star-rating', mode: 'client' },
    { src: '~/plugins/mixin' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
    ['nuxt-lazy-load', {
        images: true,
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
        directiveOnly: true,
    }]
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [
      "gsap"
    ]
  },
  router: {
    linkActiveClass: 'active'
  }
}
