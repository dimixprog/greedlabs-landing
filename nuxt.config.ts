// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs',
          type: 'module'
        },
         {
           src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_PUBLIC_GTAG_ID}`,
           async: true
         },
         {
           innerHTML: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NUXT_PUBLIC_GTAG_ID}');
           `,
           type: 'text/javascript'
         },
         {
           innerHTML: `
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();
             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

             ym(${process.env.NUXT_PUBLIC_YM_ID}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
             });
           `,
           type: 'text/javascript'
         }
      ],
      noscript: [
        {
          innerHTML: '<div><img src="https://mc.yandex.ru/watch/12345678" style="position:absolute; left:-9999px;" alt="" /></div>'
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
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

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

})
