import { createGtm } from '@gtm-support/vue-gtm'
import {defineNuxtPlugin, useRouter} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.env.NODE_ENV !== 'production') return // Optional: Skip in dev mode
    nuxtApp.vueApp.use(createGtm({
        id: process.env.GOOGLE_ANALYTICS_ID,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: process.env.NODE_ENV !== 'production', // Enable debug in non-production
        loadScript: true,
        vueRouter: useRouter(), // Sync with Nuxt router for page tracking
        trackOnNextTick: false,
    }))
})
