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
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device'
  ],

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
    id: 'YOUR_YANDEX_METRICA_ID', // Replace with your Yandex Metrica ID (e.g., '12345678')
    webvisor: true, // Optional: Enable session replay
    clickmap: true, // Optional: Enable click map
    trackLinks: true, // Optional: Track outbound links
    accurateTrackBounce: true, // Optional: Accurate bounce tracking
    // debug: process.env.NODE_ENV !== 'production', // Enable debug in non-production
  },
  vite: {
    server: {
      allowedHosts: ['covetously-articulate-damselfly.cloudpub.ru'] // Разрешаем доступ с этого домена
    }
  }
})