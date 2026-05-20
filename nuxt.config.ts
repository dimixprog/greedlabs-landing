// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs',
          type: 'module'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GREED Labs',
            url: 'https://greedlabs.org',
            logo: 'https://greedlabs.org/greed-logo.svg',
            email: 'hello@greedlabs.org',
            sameAs: [
              'https://t.me/greedlabs',
              'https://x.com/GREED_Labs',
              'https://www.linkedin.com/company/greedlabs'
            ],
            description: 'Institutional-grade crypto market making. Cross-venue liquidity, tight spreads, and algorithmic execution trusted by token projects at every stage — from launch to scale.',
            founder: [
              { '@type': 'Person', name: 'Dmitry Vasilyev', jobTitle: 'Co-founder, CEO' },
              { '@type': 'Person', name: 'George Kozyrev', jobTitle: 'Co-founder, CTO' }
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Market Making Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'DEX Market Making',
                    description: 'Full on-chain coverage across Solana, EVM, and TON. Tight spread management, slippage protection, volume strategy, and Bubblemaps optimization.',
                    url: 'https://greedlabs.org/#dex-services'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'CEX Market Making',
                    description: 'Institutional-grade routing, deep liquidity pools, and advanced risk-managed trading across centralized platforms.',
                    url: 'https://greedlabs.org/#cex-services'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Token Launch Support',
                    description: 'Full-stack launch support from contract to market: architecture, deployment, listings, market bootstrapping, and long-term growth.',
                    url: 'https://greedlabs.org/#token-launch'
                  }
                }
              ]
            }
          })
        },
        ...(process.env.NODE_ENV !== 'development' ? [
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
        ] : [])
      ],
      noscript: [
        {
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/${process.env.NUXT_PUBLIC_YM_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`
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

  runtimeConfig: {
    tgVerified: ''
  },

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
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
  },
  vite: {
    server: {
      allowedHosts: ['covetously-articulate-damselfly.cloudpub.ru', 'huskily-victorious-gecko.cloudpub.ru'] // Разрешаем доступ с этого домена
    }
  }
})
