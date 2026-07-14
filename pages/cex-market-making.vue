<script setup>
const { t } = useI18n()

useSeoMeta({
  title: 'CEX Market Making — Institutional Liquidity Across 50+ Exchanges | GREED Labs',
  description: 'Institutional-grade CEX market making across 50+ centralized exchanges. Deep order books, ~0.2% spreads, and delta-neutral risk management on Binance, OKX, Bybit, Gate.io, KuCoin and more.',
  ogTitle: 'CEX Market Making — Institutional Liquidity Across 50+ Exchanges | GREED Labs',
  ogDescription: 'Deep order books, tight spreads, and delta-neutral risk management across 50+ centralized exchanges — running simultaneously.',
  ogUrl: 'https://greedlabs.org/cex-market-making',
  ogType: 'website',
  ogImage: 'https://greedlabs.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs',
  twitterImage: 'https://greedlabs.org/og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://greedlabs.org/cex-market-making' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CEX Market Making',
        serviceType: 'Centralized Exchange Market Making',
        provider: { '@type': 'Organization', name: 'GREED Labs', url: 'https://greedlabs.org' },
        areaServed: 'Worldwide',
        description: t('cex_page.intro'),
        url: 'https://greedlabs.org/cex-market-making'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greedlabs.org/' },
          { '@type': 'ListItem', position: 2, name: t('cex_page.breadcrumb'), item: 'https://greedlabs.org/cex-market-making' }
        ]
      })
    }
  ]
})

const features = [
  { stat: 'market_making.cex_listing_stat', title: 'market_making.cex_listing', desc: 'market_making.cex_listing_desc' },
  { stat: 'market_making.optimization_orders_stat', title: 'market_making.optimization_orders', desc: 'market_making.optimization_orders_desc' },
  { stat: 'market_making.liquidity_manage_stat', title: 'market_making.liquidity_manage', desc: 'market_making.liquidity_manage_desc' }
]
</script>

<template>
  <div class="svc-page margin-container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      <span class="crumb-sep">/</span>
      <span aria-current="page">{{ $t('cex_page.breadcrumb') }}</span>
    </nav>

    <div class="svc-hero">
      <div class="svc-hero-text">
        <div class="svc-eyebrow">{{ $t('market_making.cex_eyebrow') }}</div>
        <h1 class="colorized-text svc-title">{{ $t('cex_page.h1') }}</h1>
        <p class="svc-lead">{{ $t('market_making.cex_lead') }}</p>
        <p class="svc-desc">{{ $t('cex_page.intro') }}</p>
        <ConsultButton />
      </div>
      <div class="svc-hero-visual">
        <OrderBookWidget />
      </div>
    </div>

    <section class="svc-features-section">
      <h2 class="svc-section-title">{{ $t('cex_page.features_title') }}</h2>
      <div class="svc-feat-grid">
        <div v-for="f in features" :key="f.title" class="card svc-feat-card">
          <div class="svc-feat-stat">{{ $t(f.stat) }}</div>
          <div class="svc-feat-divider"></div>
          <h3 class="svc-feat-title">{{ $t(f.title) }}</h3>
          <p class="svc-feat-desc">{{ $t(f.desc) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.svc-page {
  padding-top: 200px;
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

.svc-hero {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}
.svc-eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: #1586F4;
  font-size: 11px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.svc-title { font-size: 3rem; font-weight: 700; margin: 0 0 var(--spacing-md); line-height: 1.1; }
.svc-lead {
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.5;
  margin-bottom: var(--spacing-sm);
}
.svc-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--spacing-lg);
  max-width: 620px;
}
.svc-hero-visual { display: flex; align-items: center; justify-content: center; }

.svc-features-section { margin-top: var(--spacing-4xl); }
.svc-section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
  font-family: 'Montserrat', Arial, sans-serif;
}
.svc-feat-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-md);
}
.svc-feat-card { margin: 0; }
.svc-feat-stat {
  font-size: 2.2rem;
  font-weight: 700;
  color: #34FBFF;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
}
.svc-feat-divider { height: 1px; background: rgba(255, 255, 255, 0.1); margin: var(--spacing-md) 0; }
.svc-feat-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 var(--spacing-xs);
  font-family: 'Montserrat', Arial, sans-serif;
}
.svc-feat-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

@media (max-width: 900px) {
  .svc-hero { grid-template-columns: 1fr; gap: var(--spacing-xl); }
  .svc-hero-visual { order: -1; }
  .svc-feat-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .svc-page { padding-top: 120px; }
  .svc-title { font-size: 2.1rem; }
  .svc-features-section { margin-top: var(--spacing-2xl); }
  .svc-section-title { font-size: 1.5rem; }
}
</style>
