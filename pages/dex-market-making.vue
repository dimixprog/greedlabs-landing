<script setup>
const { t } = useI18n()

useSeoMeta({
  title: 'DEX Market Making — On-Chain Liquidity Across 17 Chains | GREED Labs',
  description: 'Institutional DEX market making across 17 chains and 30+ decentralized exchanges. Tight spreads, slippage protection, anti-snipe, and real-time on-chain monitoring on Solana, EVM, and TON.',
  ogTitle: 'DEX Market Making — On-Chain Liquidity Across 17 Chains | GREED Labs',
  ogDescription: 'Native liquidity across Solana, EVM, and TON — continuous two-sided quoting, tight spreads, and real-time on-chain analysis.',
  ogUrl: 'https://greedlabs.org/dex-market-making',
  ogType: 'website',
  ogImage: 'https://greedlabs.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs',
  twitterImage: 'https://greedlabs.org/og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://greedlabs.org/dex-market-making' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DEX Market Making',
        serviceType: 'Decentralized Exchange Market Making',
        provider: { '@type': 'Organization', name: 'GREED Labs', url: 'https://greedlabs.org' },
        areaServed: 'Worldwide',
        description: t('dex_page.intro'),
        url: 'https://greedlabs.org/dex-market-making'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greedlabs.org/' },
          { '@type': 'ListItem', position: 2, name: t('dex_page.breadcrumb'), item: 'https://greedlabs.org/dex-market-making' }
        ]
      })
    }
  ]
})

const chains = ['Solana', 'TON', 'Ethereum', 'BSC', 'Base', 'SUI', 'AVAX', '+ 10 other chains']
const protocols = ['Raydium', 'Orca', 'Meteora', 'Pump.fun', 'PumpSwap', 'Uniswap', 'PancakeSwap', 'Trader Joe', 'StonFi', 'DeDust', 'Aerodrome', 'Velodrome', '+ 20 other DEXes']
</script>

<template>
  <div class="svc-page margin-container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      <span class="crumb-sep">/</span>
      <span aria-current="page">{{ $t('dex_page.breadcrumb') }}</span>
    </nav>

    <div class="svc-hero">
      <div class="svc-hero-text">
        <div class="svc-eyebrow">{{ $t('market_making.dex_eyebrow') }}</div>
        <h1 class="colorized-text svc-title">{{ $t('dex_page.h1') }}</h1>
        <p class="svc-lead">{{ $t('market_making.dex_lead') }}</p>
        <p class="svc-desc">{{ $t('dex_page.intro') }}</p>
        <ConsultButton />
      </div>
      <div class="svc-hero-visual">
        <Fly3Cubes />
      </div>
    </div>

    <section class="svc-coverage-section">
      <h2 class="svc-section-title">{{ $t('dex_page.coverage_title') }}</h2>
      <div class="svc-coverage card">
        <div class="svc-coverage-col">
          <div class="svc-coverage-label">{{ $t('market_making.dex_chains_label') }}</div>
          <div class="svc-tags">
            <span v-for="c in chains" :key="c" class="svc-tag svc-tag-chain">{{ c }}</span>
          </div>
        </div>
        <div class="svc-coverage-divider"></div>
        <div class="svc-coverage-col">
          <div class="svc-coverage-label">{{ $t('market_making.dex_dexes_label') }}</div>
          <div class="svc-tags">
            <span v-for="p in protocols" :key="p" class="svc-tag">{{ p }}</span>
          </div>
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

.svc-coverage-section { margin-top: var(--spacing-4xl); }
.svc-section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
  font-family: 'Montserrat', Arial, sans-serif;
}
.svc-coverage {
  display: grid;
  grid-template-columns: 1fr auto 1.4fr;
  gap: var(--spacing-xl);
  align-items: start;
}
.svc-coverage-label {
  font-size: 11px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: var(--spacing-md);
}
.svc-coverage-divider { width: 1px; background: rgba(255, 255, 255, 0.1); align-self: stretch; }
.svc-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.svc-tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.svc-tag-chain { color: #fff; border-color: rgba(52, 251, 255, 0.25); }

@media (max-width: 900px) {
  .svc-hero { grid-template-columns: 1fr; gap: var(--spacing-xl); }
  .svc-hero-visual { order: -1; }
  .svc-coverage { grid-template-columns: 1fr; gap: var(--spacing-lg); }
  .svc-coverage-divider { display: none; }
}
@media (max-width: 640px) {
  .svc-page { padding-top: 120px; }
  .svc-title { font-size: 2.1rem; }
  .svc-coverage-section { margin-top: var(--spacing-2xl); }
  .svc-section-title { font-size: 1.5rem; }
}
</style>
