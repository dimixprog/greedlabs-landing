<script setup>
const FAQ_COUNT = 7
const { t } = useI18n()

// SEO meta + self-canonical (this page owns the FAQ content for search/AI engines)
useSeoMeta({
  title: 'FAQ — Crypto Market Making Questions Answered | GREED Labs',
  description: 'Answers to common questions about crypto market making: how it works, supported CEX/DEX and chains, onboarding time, our free 2-week pilot, Bubblemaps optimization, and weekly reporting.',
  ogTitle: 'FAQ — Crypto Market Making Questions Answered | GREED Labs',
  ogDescription: 'Answers to common questions about crypto market making: supported exchanges and chains, onboarding, our free pilot, and weekly reporting.',
  ogUrl: 'https://greedlabs.org/faq',
  ogType: 'website',
  ogImage: 'https://greedlabs.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs',
  twitterImage: 'https://greedlabs.org/og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://greedlabs.org/faq' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: Array.from({ length: FAQ_COUNT }, (_, idx) => {
          const n = idx + 1
          return {
            '@type': 'Question',
            name: t(`faq.q${n}`),
            acceptedAnswer: { '@type': 'Answer', text: t(`faq.a${n}`) }
          }
        })
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('faq.breadcrumbHome'), item: 'https://greedlabs.org/' },
          { '@type': 'ListItem', position: 2, name: t('faq.breadcrumbFaq'), item: 'https://greedlabs.org/faq' }
        ]
      })
    }
  ]
})
</script>

<template>
  <div class="faq-page margin-container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <NuxtLink to="/">{{ $t('faq.breadcrumbHome') }}</NuxtLink>
      <span class="crumb-sep">/</span>
      <span aria-current="page">{{ $t('faq.breadcrumbFaq') }}</span>
    </nav>

    <p class="faq-lead">{{ $t('faq.lead') }}</p>

    <FaqSection :count="FAQ_COUNT" title-tag="h1" />
  </div>
</template>

<style scoped>
.faq-page {
  padding-top: 200px; /* clear the position:fixed header — matches /blog */
  padding-bottom: var(--spacing-2xl);
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}
.breadcrumbs {
  font-size: 0.8rem;
  font-family: 'Montserrat', Arial, sans-serif;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: var(--spacing-lg);
}
.breadcrumbs a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumbs a:hover { color: #34FBFF; }
.crumb-sep { margin: 0 0.5rem; color: rgba(255, 255, 255, 0.25); }
.faq-lead {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Montserrat', Arial, sans-serif;
  max-width: 680px;
  margin-bottom: var(--spacing-xl);
}

@media (max-width: 640px) {
  .faq-page { padding-top: 120px; }
  .faq-lead { font-size: 0.9rem; }
}
</style>
