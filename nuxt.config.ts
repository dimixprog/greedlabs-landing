// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs',
          type: 'module'
        }
      ]
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'dotlottie-player'
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/google-analytics', '@nuxtjs/yandex-metrika'],

  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 700]
      },
      'Open Sans': {
        wght: [300, 400, 500, 600, 700] // Загружаем Light, Regular и Bold
      }
    }
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix', // или 'prefix_except_default' для /ru/ и /
  },
  yandexMetrika: {
    id: process.env.YANDEX_METRICA_ID, // Loads '98956194'
    webvisor: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    debug: process.env.NODE_ENV !== 'production',
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use your GA ID
  },
})
