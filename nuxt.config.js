export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'proyecto_ing',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/vee-validate.js',
    './plugins/vueToasted.js',
    './plugins/login.js',
    './plugins/api.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Módulo Nuxt.js para validaciones usando Vee-Validate
    [
      'nuxt-validate',
      {
        lang: 'es',
        nuxti18n: {
          locale: {
            'es-MX': 'ex_MX',
          },
        },
        fieldsBagName: 'veeFields',
      },
    ],
    // Módulo Nuxt.js acceso universal para almacenamiento local
    '@nuxtjs/universal-storage',
  ],

  // Configuración de módulo Nuxt.js para almacenamiento local
  storage: {
    vuex: {
      namespace: 'storage',
    },
    cookie: {
      prefix: '',
      options: {
        path: '/',
      },
    },
    localStorage: {
      prefix: '',
    },
    ignoreExceptions: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://localhost:44340/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },

  // Configuración de middleware para validación de autenticación
  middleware: [''],
}
