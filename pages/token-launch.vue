<script setup>
const { t } = useI18n()

useSeoMeta({
  title: 'Token Launch Support — Fair Launch & Liquidity from Block 0 | GREED Labs',
  description: 'Full-stack crypto token launch support: contract architecture, deployment, exchange listings, anti-snipe protection, and liquidity bootstrapping from block 0. Open into a deep, stable market.',
  ogTitle: 'Token Launch Support — Fair Launch & Liquidity from Block 0 | GREED Labs',
  ogDescription: 'Contract to market: architecture, deployment, listings, and liquidity bootstrapping from block 0 — so your token opens into a deep, defensible market.',
  ogUrl: 'https://greedlabs.org/token-launch',
  ogType: 'website',
  ogImage: 'https://greedlabs.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs',
  twitterImage: 'https://greedlabs.org/og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://greedlabs.org/token-launch' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Token Launch Support',
        serviceType: 'Crypto Token Launch Support',
        provider: { '@type': 'Organization', name: 'GREED Labs', url: 'https://greedlabs.org' },
        areaServed: 'Worldwide',
        description: t('token_launch_page.intro'),
        url: 'https://greedlabs.org/token-launch'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greedlabs.org/' },
          { '@type': 'ListItem', position: 2, name: t('token_launch_page.breadcrumb'), item: 'https://greedlabs.org/token-launch' }
        ]
      })
    }
  ]
})

const whyPoints = [1, 2, 3, 4]
</script>

<template>
  <div class="tl-page margin-container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      <span class="crumb-sep">/</span>
      <span aria-current="page">{{ $t('token_launch_page.breadcrumb') }}</span>
    </nav>

    <div class="tl-hero">
      <div class="tl-hero-text">
        <div class="tl-eyebrow">{{ $t('market_making.start_tokens_eyebrow') }}</div>
        <h1 class="colorized-text tl-title">{{ $t('token_launch_page.h1') }}</h1>
        <p class="tl-lead">{{ $t('market_making.start_tokens_lead') }}</p>
        <p class="tl-desc">{{ $t('token_launch_page.intro') }}</p>
        <ConsultButton />
      </div>
      <div class="tl-hero-visual">
        <TokenSniper />
      </div>
    </div>

    <section class="tl-why">
      <h2 class="tl-why-title">{{ $t('token_launch_page.why_title') }}</h2>
      <div class="tl-why-grid">
        <div v-for="n in whyPoints" :key="n" class="card tl-why-card">
          <h3 class="tl-why-card-title">{{ $t(`market_making.prof_support_${n}_title`) }}</h3>
          <p class="tl-why-card-desc">{{ $t(`market_making.prof_support_${n}_desc`) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tl-page {
  padding-top: 200px; /* clear the position:fixed header — matches /blog and /faq */
  padding-bottom: var(--spacing-3xl);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.breadcrumbs {
  font-size: 0.8rem;
  font-family: 'Montserrat', Arial, sans-serif;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: var(--spacing-lg);
}
.breadcrumbs a { color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.2s; }
.breadcrumbs a:hover { color: #34FBFF; }
.crumb-sep { margin: 0 0.5rem; color: rgba(255, 255, 255, 0.25); }

.tl-hero {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}
.tl-eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: #1586F4;
  font-size: 11px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.tl-title { font-size: 3rem; font-weight: 700; margin: 0 0 var(--spacing-md); line-height: 1.1; }
.tl-lead {
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.5;
  margin-bottom: var(--spacing-sm);
}
.tl-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--spacing-lg);
  max-width: 620px;
}
.tl-hero-visual { display: flex; align-items: center; justify-content: center; }

.tl-why { margin-top: var(--spacing-4xl); }
.tl-why-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
  font-family: 'Montserrat', Arial, sans-serif;
}
.tl-why-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-md);
}
.tl-why-card { margin: 0; }
.tl-why-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 var(--spacing-xs);
  font-family: 'Montserrat', Arial, sans-serif;
}
.tl-why-card-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

@media (max-width: 900px) {
  .tl-hero { grid-template-columns: 1fr; gap: var(--spacing-xl); }
  .tl-hero-visual { order: -1; }
  .tl-why-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .tl-page { padding-top: 120px; }
  .tl-title { font-size: 2.1rem; }
  .tl-why { margin-top: var(--spacing-2xl); }
  .tl-why-title { font-size: 1.5rem; }
}
</style>
