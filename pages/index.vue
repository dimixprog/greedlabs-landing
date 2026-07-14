<!-- pages/index.vue — unified market making landing page -->
<template>
  <div>
    <!-- ═══════════════════════════════════════════
         1. HERO
    ═══════════════════════════════════════════ -->
    <div class="hero-wrapper">
      <Hero id="start_way" class="grid grid-cols-7 justify-between items-center margin-container">
        <div class="col-span-4">
          <div class="hero-eyebrow">{{ $t("index.start_way_eyebrow") }}</div>
          <h1 class="colorized-text">
            {{ $t("index.start_way") }}
          </h1>
          <p>
            {{ $t("index.start_way_desc") }}
          </p>
          <div class="cta-group">
            <ConsultButton />
            <a href="https://t.me/greedlabs_bot" target="_blank" rel="noopener" class="pilot-btn">
              {{ $t("index.free_trial_badge") }}
            </a>
          </div>
        </div>

        <ClientOnly>
          <div class="hero-media-container col-span-3 m-auto">
            <HeroLiveChart />
          </div>
        </ClientOnly>
      </Hero>

      <div class="work-with-text">{{ $t("market_making.work_with") }}</div>
      <Vue3Marquee class="marquee" :duration="40" :gradient="true" :gradient-color="[17, 17, 17]" gradientLength="6%">
        <a class="marquee-item" href="https://raydium.io" target="_blank" rel="noopener noreferrer"><img src="/logos/raydium.png" alt="Raydium"/></a>
        <a class="marquee-item" href="https://orca.so" target="_blank" rel="noopener noreferrer"><img src="/logos/orca.svg" alt="Orca"/></a>
        <a class="marquee-item" href="https://jup.ag" target="_blank" rel="noopener noreferrer"><img src="/logos/jupiter.svg" alt="Jupiter"/></a>
        <a class="marquee-item" href="https://meteora.ag" target="_blank" rel="noopener noreferrer"><img src="/logos/meteora.svg" alt="Meteora"/></a>
        <a class="marquee-item" href="https://uniswap.org" target="_blank" rel="noopener noreferrer"><img src="/logos/uniswap.png" alt="Uniswap"/></a>
        <a class="marquee-item" href="https://pancakeswap.finance" target="_blank" rel="noopener noreferrer"><img src="/logos/pancakeswap.png" alt="PancakeSwap"/></a>
        <a class="marquee-item" href="https://ston.fi" target="_blank" rel="noopener noreferrer"><img src="/logos/stonfi.svg" alt="StonFi"/></a>
        <a class="marquee-item" href="https://dedust.io" target="_blank" rel="noopener noreferrer"><img src="/logos/dedust.png" alt="DeDust"/></a>
        <a class="marquee-item" href="https://phemex.com" target="_blank" rel="noopener noreferrer"><img src="/logos/phemex.png" alt="Phemex"/></a>
        <a class="marquee-item" href="https://mexc.com" target="_blank" rel="noopener noreferrer"><img src="/logos/mexc.svg" alt="MEXC"/></a>
        <a class="marquee-item marquee-item--partner" href="https://x.com/Alphamind_labs" target="_blank" rel="noopener noreferrer"><img src="/partners/alphamind.svg" alt="AlphaMind"/></a>
        <a class="marquee-item marquee-item--partner" href="https://astrena.ai" target="_blank" rel="noopener noreferrer"><img src="/partners/astrena.svg" alt="Astrena"/></a>
        <a class="marquee-item marquee-item--partner" href="https://cwarelabs.com" target="_blank" rel="noopener noreferrer"><img src="/partners/cware.svg" alt="CWare"/></a>
        <a class="marquee-item marquee-item--partner" href="https://x.com/Drft_Party" target="_blank" rel="noopener noreferrer"><img src="/partners/drft.png" alt="DRFT"/></a>
        <a class="marquee-item marquee-item--partner" href="https://gagarin.world" target="_blank" rel="noopener noreferrer"><img src="/partners/gagarin.svg" alt="Gagarin"/></a>
        <a class="marquee-item marquee-item--partner" href="https://kucoin.com" target="_blank" rel="noopener noreferrer"><img src="/partners/kucoin.svg" alt="KuCoin"/></a>
        <!-- duplicate set for seamless infinite loop -->
        <a class="marquee-item" href="https://raydium.io" target="_blank" rel="noopener noreferrer"><img src="/logos/raydium.png" alt="Raydium"/></a>
        <a class="marquee-item" href="https://orca.so" target="_blank" rel="noopener noreferrer"><img src="/logos/orca.svg" alt="Orca"/></a>
        <a class="marquee-item" href="https://jup.ag" target="_blank" rel="noopener noreferrer"><img src="/logos/jupiter.svg" alt="Jupiter"/></a>
        <a class="marquee-item" href="https://meteora.ag" target="_blank" rel="noopener noreferrer"><img src="/logos/meteora.svg" alt="Meteora"/></a>
        <a class="marquee-item" href="https://uniswap.org" target="_blank" rel="noopener noreferrer"><img src="/logos/uniswap.png" alt="Uniswap"/></a>
        <a class="marquee-item" href="https://pancakeswap.finance" target="_blank" rel="noopener noreferrer"><img src="/logos/pancakeswap.png" alt="PancakeSwap"/></a>
        <a class="marquee-item" href="https://ston.fi" target="_blank" rel="noopener noreferrer"><img src="/logos/stonfi.svg" alt="StonFi"/></a>
        <a class="marquee-item" href="https://dedust.io" target="_blank" rel="noopener noreferrer"><img src="/logos/dedust.png" alt="DeDust"/></a>
        <a class="marquee-item" href="https://phemex.com" target="_blank" rel="noopener noreferrer"><img src="/logos/phemex.png" alt="Phemex"/></a>
        <a class="marquee-item" href="https://mexc.com" target="_blank" rel="noopener noreferrer"><img src="/logos/mexc.svg" alt="MEXC"/></a>
        <a class="marquee-item marquee-item--partner" href="https://x.com/Alphamind_labs" target="_blank" rel="noopener noreferrer"><img src="/partners/alphamind.svg" alt="AlphaMind"/></a>
        <a class="marquee-item marquee-item--partner" href="https://astrena.ai" target="_blank" rel="noopener noreferrer"><img src="/partners/astrena.svg" alt="Astrena"/></a>
        <a class="marquee-item marquee-item--partner" href="https://cwarelabs.com" target="_blank" rel="noopener noreferrer"><img src="/partners/cware.svg" alt="CWare"/></a>
        <a class="marquee-item marquee-item--partner" href="https://x.com/Drft_Party" target="_blank" rel="noopener noreferrer"><img src="/partners/drft.png" alt="DRFT"/></a>
        <a class="marquee-item marquee-item--partner" href="https://gagarin.world" target="_blank" rel="noopener noreferrer"><img src="/partners/gagarin.svg" alt="Gagarin"/></a>
        <a class="marquee-item marquee-item--partner" href="https://kucoin.com" target="_blank" rel="noopener noreferrer"><img src="/partners/kucoin.svg" alt="KuCoin"/></a>
      </Vue3Marquee>
    </div>

    <!-- ═══════════════════════════════════════════
         2. STATS / SOCIAL PROOF
    ═══════════════════════════════════════════ -->
    <div id="clients" class="stat_container py-lg px-md flex flex-col gap-4 fadeup_block margin-container">
      <div class="self-center">
        <h2>{{ $t("index.clients") }}</h2>
      </div>
      <div id="statBlock" ref="statBlock" class="grid grid-cols-4 justify-around">
        <div class="flex flex-col items-center">
          <b><CounterCard :startAmount='0' :endAmount='50' :duration='1' suffix='+'/></b>
          <p class="stat-item">{{ $t("index.clients_dex_title") }}</p>
        </div>
        <div class="flex flex-col items-center">
          <b><CounterCard :startAmount='0' :endAmount='100' :duration='1' suffix='+'/></b>
          <p class="stat-item">{{ $t("index.clients_project_title") }}</p>
        </div>
        <div class="flex flex-col items-center">
          <b><CounterCard :startAmount='0' :endAmount='40' :duration='1' suffix='+'/></b>
          <p class="stat-item">{{ $t("index.clients_users_title") }}</p>
        </div>
        <div class="flex flex-col items-center">
          <b><CounterCard :startAmount='0' :endAmount='12' :duration='1' prefix='$' suffix='B+'/></b>
          <p class="stat-item">{{ $t("index.clients_volume_title") }}</p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         3. SERVICES OVERVIEW
    ═══════════════════════════════════════════ -->
    <div id="services" class="margin-container">
      <div class="section-eyebrow">{{ $t("services.eyebrow") }}</div>
      <h2 class="section-title">{{ $t("services.title") }}</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">◈</div>
          <h3>{{ $t("services.dex_title") }}</h3>
          <p>{{ $t("services.dex_desc") }}</p>
        </div>
        <div class="service-card">
          <div class="service-icon">◉</div>
          <h3>{{ $t("services.cex_title") }}</h3>
          <p>{{ $t("services.cex_desc") }}</p>
        </div>
        <div class="service-card">
          <div class="service-icon">◎</div>
          <h3>{{ $t("services.launch_title") }}</h3>
          <p>{{ $t("services.launch_desc") }}</p>
        </div>
        <div class="service-card">
          <div class="service-icon">◐</div>
          <h3>{{ $t("services.volume_title") }}</h3>
          <p>{{ $t("services.volume_desc") }}</p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         4. WHAT YOUR CHART LOOKS LIKE WITH US
    ═══════════════════════════════════════════ -->
    <div id="candle-section" class="big-card margin-container">
      <div class="candle-layout">
        <div class="candle-text">
          <div class="section-eyebrow">PERFORMANCE</div>
          <h3 class="colorized-text">{{ $t("market_making.candle_section_title") }}</h3>
          <p class="ob-section-desc">{{ $t("market_making.candle_section_desc") }}</p>
          <div class="candle-stats">
            <div class="candle-stat">
              <span class="candle-stat-val">×4+</span>
              <span class="candle-stat-key">Volume</span>
            </div>
            <div class="candle-stat">
              <span class="candle-stat-val">↓60%</span>
              <span class="candle-stat-key">Volatility</span>
            </div>
            <div class="candle-stat">
              <span class="candle-stat-val">↑</span>
              <span class="candle-stat-key">Trend holds</span>
            </div>
          </div>
        </div>
        <div class="candle-chart-wrap">
          <CandleChart />
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         5. HOW IT WORKS
    ═══════════════════════════════════════════ -->
    <div id="how-it-works" class="margin-container">
      <div class="section-eyebrow">{{ $t("how_it_works.eyebrow") }}</div>
      <h2 class="section-title">{{ $t("how_it_works.title") }}</h2>
      <div class="hiw-grid">
        <div class="hiw-step">
          <div class="hiw-num">{{ $t("how_it_works.step1_num") }}</div>
          <h3>{{ $t("how_it_works.step1_title") }}</h3>
          <p>{{ $t("how_it_works.step1_desc") }}</p>
        </div>
        <div class="hiw-connector"></div>
        <div class="hiw-step">
          <div class="hiw-num">{{ $t("how_it_works.step2_num") }}</div>
          <h3>{{ $t("how_it_works.step2_title") }}</h3>
          <p>{{ $t("how_it_works.step2_desc") }}</p>
        </div>
        <div class="hiw-connector"></div>
        <div class="hiw-step">
          <div class="hiw-num">{{ $t("how_it_works.step3_num") }}</div>
          <h3>{{ $t("how_it_works.step3_title") }}</h3>
          <p>{{ $t("how_it_works.step3_desc") }}</p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         5. DEX SERVICES
    ═══════════════════════════════════════════ -->
    <div class="anchor"><span id="dex-services"></span></div>
    <div id="dex" class="launch-wrapper margin-container">
      <div class="dex-header">
        <div class="dex-text">
          <div class="launch-eyebrow">{{ $t("market_making.dex_eyebrow") }}</div>
          <h2 class="colorized-text">{{ $t("market_making.dex") }}</h2>
          <p class="launch-lead">{{ $t("market_making.dex_lead") }}</p>
          <p class="launch-desc">{{ $t("market_making.dex_desc") }}</p>
          <ConsultButton />
        </div>
        <Fly3Cubes class="dex-cubes" />
      </div>

      <div class="dex-coverage">
        <div class="dex-coverage-col">
          <div class="dex-coverage-label">{{ $t("market_making.dex_chains_label") }}</div>
          <div class="dex-tags">
            <span class="dex-tag dex-tag-chain">Solana</span>
            <span class="dex-tag dex-tag-chain">TON</span>
            <span class="dex-tag dex-tag-chain">Ethereum</span>
            <span class="dex-tag dex-tag-chain">BSC</span>
            <span class="dex-tag dex-tag-chain">Base</span>
            <span class="dex-tag dex-tag-chain">SUI</span>
            <span class="dex-tag dex-tag-chain">AVAX</span>
            <span class="dex-tag dex-tag-chain dex-tag-more">+ 10 other chains</span>
          </div>
        </div>
        <div class="dex-coverage-divider"></div>
        <div class="dex-coverage-col">
          <div class="dex-coverage-label">{{ $t("market_making.dex_dexes_label") }}</div>
          <div class="dex-tags">
            <span class="dex-tag">Raydium</span>
            <span class="dex-tag">Orca</span>
            <span class="dex-tag">Meteora</span>
            <span class="dex-tag">Pump.fun</span>
            <span class="dex-tag">PumpSwap</span>
            <span class="dex-tag">Uniswap</span>
            <span class="dex-tag">PancakeSwap</span>
            <span class="dex-tag">Trader Joe</span>
            <span class="dex-tag">StonFi</span>
            <span class="dex-tag">DeDust</span>
            <span class="dex-tag">Aerodrome</span>
            <span class="dex-tag">Velodrome</span>
            <span class="dex-tag dex-tag-more">+ 20 other DEXes</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         7. BUBBLEMAPS BEFORE / AFTER
    ═══════════════════════════════════════════ -->
    <div id="bubblemap-section" class="big-card pb-2xl margin-container">
      <h3 class="colorized-text">{{ $t("market_making.bubblemap_section_title") }}</h3>
      <p class="ob-section-desc">{{ $t("market_making.bubblemap_section_desc") }}</p>
      <BubbleMapCompare />
    </div>

    <!-- ═══════════════════════════════════════════
         8. TOKEN LAUNCH
    ═══════════════════════════════════════════ -->
    <div class="anchor"><span id="token-launch"></span></div>
    <div class="launch-wrapper margin-container">
      <Hero id="start_tokens" class="grid grid-cols-7 justify-between items-center">
        <div class="col-span-4">
          <div class="launch-eyebrow">{{ $t("market_making.start_tokens_eyebrow") }}</div>
          <h2 class="colorized-text">{{ $t("market_making.start_tokens") }}</h2>
          <p class="launch-lead">{{ $t("market_making.start_tokens_lead") }}</p>
          <p class="launch-desc">{{ $t("market_making.start_tokens_desc") }}</p>
          <ConsultButton />
        </div>
        <div class="col-span-3 flex items-center justify-center">
          <TokenSniper />
        </div>
      </Hero>
    </div>

    <!-- ═══════════════════════════════════════════
         9. CEX SERVICES
    ═══════════════════════════════════════════ -->
    <div class="launch-wrapper margin-container">
      <div class="anchor"><span id="cex-services"></span></div>
      <Hero id="cex" class="grid grid-cols-7 justify-between items-center">
        <div class="col-span-4">
          <div class="launch-eyebrow">{{ $t("market_making.cex_eyebrow") }}</div>
          <h2 class="colorized-text">{{ $t("market_making.cex") }}</h2>
          <p class="launch-lead">{{ $t("market_making.cex_lead") }}</p>
          <p class="launch-desc">{{ $t("market_making.cex_desc") }}</p>
          <ConsultButton />
        </div>
        <div class="col-span-3 flex items-center justify-center">
          <OrderBookWidget />
        </div>
      </Hero>
      <div class="anchor"><span id="liquidity-management"></span></div>
      <div class="anchor"><span id="cex-listing"></span></div>
      <div class="anchor"><span id="order-optimization"></span></div>
      <div class="cex-feat-grid">
        <div class="cex-feat-card">
          <div class="cex-feat-stat">{{ $t('market_making.cex_listing_stat') }}</div>
          <div class="cex-feat-divider"></div>
          <h3 class="cex-feat-title">{{ $t('market_making.cex_listing') }}</h3>
          <p class="cex-feat-desc">{{ $t('market_making.cex_listing_desc') }}</p>
        </div>
        <div class="cex-feat-card">
          <div class="cex-feat-stat">{{ $t('market_making.optimization_orders_stat') }}</div>
          <div class="cex-feat-divider"></div>
          <h3 class="cex-feat-title">{{ $t('market_making.optimization_orders') }}</h3>
          <p class="cex-feat-desc">{{ $t('market_making.optimization_orders_desc') }}</p>
        </div>
        <div class="cex-feat-card">
          <div class="cex-feat-stat">{{ $t('market_making.liquidity_manage_stat') }}</div>
          <div class="cex-feat-divider"></div>
          <h3 class="cex-feat-title">{{ $t('market_making.liquidity_manage') }}</h3>
          <p class="cex-feat-desc">{{ $t('market_making.liquidity_manage_desc') }}</p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         10. ORDERBOOK BEFORE / AFTER
    ═══════════════════════════════════════════ -->
    <div id="orderbook-comparison" ref="obSection" class="big-card pb-2xl margin-container">
      <h3 class="colorized-text">{{ $t("market_making.orderbook_section_title") }}</h3>
      <p class="ob-section-desc">{{ $t("market_making.orderbook_section_desc") }}</p>
      <div class="ob-grid">
        <!-- BEFORE -->
        <div class="ob-card">
          <div class="ob-card-label ob-label-before">{{ $t("market_making.orderbook_before_title") }}</div>
          <svg class="depth-chart" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <polygon class="fill-buy" points="0,30 110,30 130,150 0,150" fill="rgba(52,251,255,0.12)"/>
            <polyline class="line-buy" points="0,30 110,30 130,150" fill="none" stroke="#34FBFF" stroke-width="2" pathLength="1"/>
            <polygon class="fill-sell" points="170,150 190,30 300,30 300,150" fill="rgba(255,80,80,0.12)"/>
            <polyline class="line-sell" points="170,150 190,30 300,30" fill="none" stroke="#FF5050" stroke-width="2" pathLength="1"/>
            <rect class="mid-gap" x="130" y="130" width="40" height="20" fill="rgba(255,255,255,0.04)" rx="2"/>
            <line class="mid-gap" x1="130" y1="150" x2="170" y2="150" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="3,3"/>
          </svg>
          <div class="ob-meta">
            <span class="ob-spread ob-spread-wide">{{ $t("market_making.spread_before") }}</span>
            <span class="ob-depth ob-depth-shallow">{{ $t("market_making.depth_before") }}</span>
          </div>
        </div>
        <!-- AFTER -->
        <div class="ob-card ob-card-after">
          <div class="ob-card-label ob-label-after">{{ $t("market_making.orderbook_after_title") }}</div>
          <svg class="depth-chart" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <polygon class="fill-buy" points="0,5 138,5 148,150 0,150" fill="rgba(52,251,255,0.18)"/>
            <polyline class="line-buy" points="0,5 138,5 148,150" fill="none" stroke="#34FBFF" stroke-width="2.5" pathLength="1"/>
            <polygon class="fill-sell" points="152,150 162,5 300,5 300,150" fill="rgba(255,80,80,0.18)"/>
            <polyline class="line-sell" points="152,150 162,5 300,5" fill="none" stroke="#FF5050" stroke-width="2.5" pathLength="1"/>
            <line class="mid-line" x1="148" y1="150" x2="152" y2="150" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
          </svg>
          <div class="ob-meta">
            <span class="ob-spread ob-spread-tight">{{ $t("market_making.spread_after") }}</span>
            <span class="ob-depth ob-depth-deep">{{ $t("market_making.depth_after") }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         11. VOLUME MANAGEMENT
    ═══════════════════════════════════════════ -->
    <div class="anchor"><span id="volume-management"></span></div>
    <div id="volume" class="big-card pb-2xl margin-container">
      <h3 class="colorized-text">{{ $t("market_making.volume_control") }}</h3>
      <p class="ob-section-desc">{{ $t("market_making.volume_control_desc") }}</p>
      <div class="feature-list">
        <div class="feature-item">
          <div class="feature-dot"></div>
          <div>
            <strong>Two-Sided Quoting</strong>
            <span>We continuously place bids and asks so real buyers and sellers always have a counterparty — no gaps, no dead order books.</span>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-dot"></div>
          <div>
            <strong>Slippage Reduction</strong>
            <span>Deep resting liquidity at multiple price levels absorbs market orders without moving the price — critical for larger trades and institutional participants.</span>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-dot"></div>
          <div>
            <strong>On-Chain Monitoring</strong>
            <span>We track external liquidity flows, wallet concentration, and trade patterns in real time to detect and respond to abnormal market conditions.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         12. PROFESSIONAL SUPPORT
    ═══════════════════════════════════════════ -->
    <div id="prof-support" class="pb-2xl margin-container">
      <h2>{{ $t("market_making.prof_support") }}</h2>
      <div class="prof-support-grid">
        <div class="prof-card">
          <div class="prof-card-num">01</div>
          <strong>{{ $t("market_making.prof_support_1_title") }}</strong>
          <p>{{ $t("market_making.prof_support_1_desc") }}</p>
        </div>
        <div class="prof-card">
          <div class="prof-card-num">02</div>
          <strong>{{ $t("market_making.prof_support_2_title") }}</strong>
          <p>{{ $t("market_making.prof_support_2_desc") }}</p>
        </div>
        <div class="prof-card">
          <div class="prof-card-num">03</div>
          <strong>{{ $t("market_making.prof_support_3_title") }}</strong>
          <p>{{ $t("market_making.prof_support_3_desc") }}</p>
        </div>
        <div class="prof-card">
          <div class="prof-card-num">04</div>
          <strong>{{ $t("market_making.prof_support_4_title") }}</strong>
          <p>{{ $t("market_making.prof_support_4_desc") }}</p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         13. FAQ
    ═══════════════════════════════════════════ -->
    <div id="faq" class="margin-container">
      <div class="section-eyebrow">{{ $t("faq.eyebrow") }}</div>
      <h2 class="section-title">{{ $t("faq.title") }}</h2>
      <div class="faq-list">
        <div
          v-for="i in 7"
          :key="i"
          class="faq-item"
          :class="{ open: faqOpen === i }"
          @click="faqOpen = faqOpen === i ? null : i"
        >
          <div class="faq-question">
            <span>{{ $t(`faq.q${i}`) }}</span>
            <div class="faq-chevron">{{ faqOpen === i ? '−' : '+' }}</div>
          </div>
          <div class="faq-answer">
            <p>{{ $t(`faq.a${i}`) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         14. VERIFY OUR TEAM
    ═══════════════════════════════════════════ -->
    <VerifyTg />

    <!-- GetConsult is rendered by default.vue layout -->
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Fly3Cubes from '~/components/Fly3Cubes.vue'
import CandleChart from '~/components/CandleChart.vue'
import BubbleMapCompare from '~/components/BubbleMapCompare.vue'
import TokenSniper from '~/components/TokenSniper.vue'
import OrderBookWidget from '~/components/OrderBookWidget.vue'
import ChainNetwork from '~/components/ChainNetwork.vue'

// SEO Meta
useSeoMeta({
  title: 'GREED Labs — Crypto Market Making for Token Projects',
  description: 'Institutional market making across 50+ CEX and 30+ DEX on 17 chains. Deep liquidity, tight spreads, and algorithmic execution for token projects at every stage.',
  ogTitle: 'GREED Labs — Crypto Market Making for Token Projects',
  ogDescription: 'Institutional market making across 50+ CEX and 30+ DEX on 17 chains. Deep liquidity, tight spreads, and algorithmic execution for token projects at every stage.',
  ogUrl: 'https://greedlabs.org/',
  ogType: 'website',
  ogImage: 'https://greedlabs.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs',
  twitterImage: 'https://greedlabs.org/og-image.png'
})

// FAQ + Breadcrumb structured data (GEO / rich results)
const { t } = useI18n()
useHead({
  link: [{ rel: 'canonical', href: 'https://greedlabs.org/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: Array.from({ length: 7 }, (_, idx) => {
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
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greedlabs.org/' }
        ]
      })
    }
  ]
})

const statBlock = ref(null)
const obSection = ref(null)
const { $device } = useNuxtApp()
const isSafari = ref(null)
const faqOpen = ref(null)

onMounted(() => {
  isSafari.value = $device.isSafari

  nextTick(() => {
    const animatedPs = statBlock.value.querySelectorAll('.stat-item')
    animatedPs.forEach(el => {
      el.classList.remove('fadeInUp')
      el.style.opacity = '0'
      el.style.transform = 'translateY(70px)'
    })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animatedPs.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('fadeInUp')
              }, idx)
            })
            observer.unobserve(statBlock.value)
          }
        })
      },
      { threshold: 0.8 }
    )
    if (statBlock.value) observer.observe(statBlock.value)

    if (obSection.value) {
      const obObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              obSection.value.classList.add('ob-animated')
              obObserver.unobserve(obSection.value)
            }
          })
        },
        { threshold: 0.3 }
      )
      obObserver.observe(obSection.value)
    }
  })
})
</script>

<style scoped>
/* ── Section gaps ──────────────────────────────────── */
/* Every major block gets breathing room below it */
.hero-wrapper,
#clients,
#services,
.big-card,
#prof-support,
.launch-wrapper,
.services-container-unused,
#how-it-works,
#faq,
#verify-team {
  margin-bottom: var(--spacing-xl);
}

/* ── Token Launch wrapper ──────────────────────────── */
.launch-wrapper {
  background: linear-gradient(135deg, rgba(52,251,255,0.04) 0%, rgba(21,134,244,0.04) 100%);
  border: 1px solid rgba(52, 251, 255, 0.14);
  border-radius: 24px;
  padding: var(--spacing-2xl) var(--spacing-xl);
  position: relative;
  overflow: hidden;
}
/* top accent line */
.launch-wrapper::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #34FBFF 0%, #1586F4 100%);
  border-radius: 24px 24px 0 0;
}
/* ensure headings inside launch-wrapper match hero h2 sizing */
.launch-wrapper h2 {
  font-size: 50px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}
@media (max-width: 768px) {
  .launch-wrapper h2 { font-size: 32px; }
}
@media (max-width: 640px) {
  .launch-wrapper h2 { font-size: 28px; }
}

.launch-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: rgba(52, 251, 255, 0.7);
  margin-bottom: var(--spacing-sm);
  font-family: 'Montserrat', Arial, sans-serif;
}
.launch-lead {
  font-size: 1.15rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.45;
  margin-bottom: var(--spacing-sm);
}
.launch-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.55;
  margin-bottom: var(--spacing-lg);
}
@media (max-width: 640px) {
  .launch-wrapper {
    padding: var(--spacing-lg) var(--spacing-md);
    border-radius: 16px;
  }
  .launch-lead { font-size: 1rem; }
  .launch-desc { font-size: 0.9rem; }
}

/* ── CEX Feature Cards ─────────────────────────────── */
.cex-feat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  width: 100%;
  margin-top: var(--spacing-lg);
}
.cex-feat-card {
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  transition: border-color 0.25s, box-shadow 0.25s;
}
.cex-feat-card:hover {
  border-color: rgba(52, 251, 255, 0.3);
  box-shadow: 0 0 24px rgba(52, 251, 255, 0.07);
}
.cex-feat-stat {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #34FBFF 0%, #1586F4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat', Arial, sans-serif;
  letter-spacing: -0.02em;
}
.cex-feat-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #34FBFF, #1586F4);
  border-radius: 2px;
  margin: 2px 0;
}
.cex-feat-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin: 0;
}
.cex-feat-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  margin: 0;
}
@media (max-width: 900px) {
  .cex-feat-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  .cex-feat-stat { font-size: 2.5rem; }
}
@media (max-width: 640px) {
  .cex-feat-card { padding: var(--spacing-md); }
  .cex-feat-stat { font-size: 2rem; }
  .cex-feat-title { font-size: 1.1rem; }
  .cex-feat-desc { font-size: 0.85rem; }
}

/* Tighter on mobile */
@media (max-width: 640px) {
  .hero-wrapper,
  #clients,
  #services,
  .big-card,
  #prof-support,
  .launch-wrapper,
  .services-container-unused,
  #how-it-works,
  #faq {
    margin-bottom: var(--spacing-lg);
  }
}

/* ── Hero ──────────────────────────────────────────── */
.hero-wrapper {
  padding-top: 220px;
  padding-bottom: var(--spacing-3xl);
  background-image: url("/hero-background.webp");
  background-color: rgba(17, 17, 17, 1.0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  border-image: linear-gradient(to right, rgba(52, 251, 255, 1) 0%, rgba(21, 134, 244, 1) 100%) 1;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-width: 5px;
}
.hero-wrapper .hero {
  padding-top: 0;
  margin-top: 0;
  margin-bottom: var(--spacing-xl);
}
@media (max-width: 640px) {
  .hero-wrapper {
    padding-top: 90px;
  }
  .hero-wrapper .hero {
    margin-top: 0;
    margin-bottom: var(--spacing-md);
  }
}
#start_way::before {
  height: 60rem;
  border-width: 5px;
}

.hero-eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  padding: 6px 14px;
  background: rgba(21, 134, 244, 0.12);
  border: 1px solid rgba(21, 134, 244, 0.35);
  border-radius: 100px;
  color: #1586F4;
  font-size: 11px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-media-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.pilot-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 16px 28px;
  border: 1.5px solid rgba(52, 251, 255, 0.35);
  border-radius: 12px;
  color: rgba(52, 251, 255, 0.85);
  font-size: 15px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}
.pilot-btn:hover {
  background: rgba(52, 251, 255, 0.06);
  border-color: #34FBFF;
  color: #34FBFF;
}

/* ── Section headers ────────────────────────────────── */
.section-eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: #1586F4;
  font-size: 11px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  font-family: 'Montserrat', Arial, sans-serif;
}

/* ── Stats / Clients ────────────────────────────────── */
#clients { padding-top: var(--spacing-lg); }
#clients h2 {
  color: #ffffff;
  font-size: 2rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.9;
}
#clients p {
  color: rgba(180, 190, 210, 0.85);
  font-size: 1rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 0.5rem;
}
#clients b {
  font-size: 5rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  white-space: nowrap;
  background: linear-gradient(135deg, #34FBFF 0%, #1586f4 60%, #34FBFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 18px rgba(52, 251, 255, 0.25));
}
#statBlock {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}
#statBlock > div:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}
.stat_container {
  position: relative;
  padding: var(--spacing-lg);
  border-radius: 7rem;
  background:
    linear-gradient(rgba(12, 12, 14, 0.85), rgba(12, 12, 14, 0.85)) padding-box,
    linear-gradient(135deg, rgba(52, 251, 255, 0.55) 0%, rgba(21, 134, 244, 0.35) 50%, rgba(52, 251, 255, 0.12) 100%) border-box;
  border: 1px solid transparent;
  box-shadow:
    0 0 80px rgba(21, 134, 244, 0.07),
    0 0 160px rgba(52, 251, 255, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}
.stat-item {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.fadeInUp {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Services grid ──────────────────────────────────── */
#services {
  padding-top: 0;
  padding-bottom: var(--spacing-lg);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
.service-card {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.service-card:hover {
  border-color: rgba(52, 251, 255, 0.25);
  box-shadow: 0 0 24px rgba(52, 251, 255, 0.06);
}
.service-icon {
  font-size: 1.5rem;
  color: #34FBFF;
  line-height: 1;
}
.service-card h3 {
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}
.service-card p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.5;
  margin: 0;
}

/* ── Shared card styles ─────────────────────────────── */
.big-card {
  background-color: #222222;
  border-radius: 30px;
  box-sizing: border-box;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}
.big-card h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}
.big-card p {
  color: #777777;
  font-size: 1.2rem;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  border-color: transparent;
  border-style: solid;
  margin-bottom: 1rem;
}
.ob-section-desc {
  color: #777 !important;
  font-size: 1.1rem !important;
  font-weight: 400 !important;
  line-height: 1.6 !important;
  margin-bottom: var(--spacing-lg) !important;
}

/* ── Feature list (Volume Management) ──────────────── */
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: var(--spacing-md);
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
}
.feature-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34FBFF;
  margin-top: 6px;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(52, 251, 255, 0.5);
}
.feature-item strong {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #fff;
  margin-bottom: 4px;
}
.feature-item span {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.5;
}

/* ── Candle chart two-column ────────────────────────── */
.candle-layout {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: var(--spacing-xl);
  align-items: center;
}
.candle-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
.candle-text .ob-section-desc {
  margin-bottom: 0 !important;
}
.candle-chart-wrap {
  width: 100%;
}
.candle-stats {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  margin-top: var(--spacing-sm);
}
.candle-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 16px;
  min-width: 80px;
}
.candle-stat-val {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
  font-family: 'Montserrat', Arial, sans-serif;
  background: linear-gradient(135deg, #34FBFF 0%, #1586F4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.candle-stat-key {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
}
@media (max-width: 768px) {
  .candle-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

/* ── Orderbook comparison ───────────────────────────── */
#orderbook-comparison {
  margin-top: var(--spacing-2xl);
}
.ob-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: var(--spacing-md);
}
.ob-card {
  background: #1b1b1b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.ob-card-after {
  border-color: rgba(52, 251, 255, 0.25);
  box-shadow: 0 0 24px rgba(52, 251, 255, 0.06);
}
.ob-card-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}
.ob-label-before { color: #888; }
.ob-label-after  { color: #34FBFF; }
.depth-chart {
  width: 100%;
  height: 130px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
}
.ob-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ob-spread, .ob-depth {
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  padding: 3px 10px;
  border-radius: 20px;
}
.ob-spread-wide   { background: rgba(255, 80, 80, 0.15);  color: #FF8080; }
.ob-spread-tight  { background: rgba(52, 251, 255, 0.12); color: #34FBFF; }
.ob-depth-shallow { background: rgba(255, 255, 255, 0.06); color: #888; }
.ob-depth-deep    { background: rgba(52, 251, 255, 0.12); color: #34FBFF; }

/* ── Orderbook chart animation ─────────────────────── */
.depth-chart .line-buy,
.depth-chart .line-sell {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.depth-chart .fill-buy,
.depth-chart .fill-sell,
.depth-chart .mid-gap,
.depth-chart .mid-line {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.ob-card-label {
  opacity: 0;
  transition: opacity 0.4s ease;
}
.ob-meta {
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
/* BEFORE card reveal */
.ob-animated .ob-card:not(.ob-card-after) .ob-card-label       { opacity: 1; transition-delay: 0s; }
.ob-animated .ob-card:not(.ob-card-after) .line-buy             { stroke-dashoffset: 0; transition-delay: 0.1s; }
.ob-animated .ob-card:not(.ob-card-after) .fill-buy             { opacity: 1; transition-delay: 0.25s; }
.ob-animated .ob-card:not(.ob-card-after) .line-sell            { stroke-dashoffset: 0; transition-delay: 0.35s; }
.ob-animated .ob-card:not(.ob-card-after) .fill-sell            { opacity: 1; transition-delay: 0.5s; }
.ob-animated .ob-card:not(.ob-card-after) .mid-gap              { opacity: 1; transition-delay: 0.55s; }
.ob-animated .ob-card:not(.ob-card-after) .ob-meta              { opacity: 1; transform: translateY(0); transition-delay: 0.6s; }
/* AFTER card reveal (staggered) */
.ob-animated .ob-card-after .ob-card-label                      { opacity: 1; transition-delay: 0.65s; }
.ob-animated .ob-card-after .line-buy                           { stroke-dashoffset: 0; transition-delay: 0.75s; }
.ob-animated .ob-card-after .fill-buy                           { opacity: 1; transition-delay: 0.9s; }
.ob-animated .ob-card-after .line-sell                          { stroke-dashoffset: 0; transition-delay: 1.0s; }
.ob-animated .ob-card-after .fill-sell                          { opacity: 1; transition-delay: 1.15s; }
.ob-animated .ob-card-after .mid-line                           { opacity: 1; transition-delay: 1.2s; }
.ob-animated .ob-card-after .ob-meta                            { opacity: 1; transform: translateY(0); transition-delay: 1.25s; }
@keyframes ob-after-glow {
  0%   { box-shadow: 0 0 24px rgba(52, 251, 255, 0.06); }
  50%  { box-shadow: 0 0 48px rgba(52, 251, 255, 0.22), 0 0 80px rgba(52, 251, 255, 0.08); }
  100% { box-shadow: 0 0 24px rgba(52, 251, 255, 0.10); }
}
.ob-animated .ob-card-after {
  animation: ob-after-glow 1.4s ease 1.0s both;
}

/* ── DEX section ───────────────────────────────────── */
#dex { overflow: hidden; }

.dex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}
.dex-text {
  flex: 1 1 0%;
  min-width: 0;
}

.dex-cubes {
  flex-shrink: 0;
  width: 280px;
  height: 280px;
}
@media (max-width: 768px) {
  .dex-cubes { display: none; }
}
@media (max-width: 640px) {
  .dex-header { display: block; }
}
.dex-coverage {
  display: flex;
  gap: var(--spacing-2xl);
  align-items: flex-start;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.dex-coverage-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.08);
  align-self: stretch;
  flex-shrink: 0;
}
.dex-coverage-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1 1 0%;
  min-width: 0;
}
.dex-coverage-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.3);
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
}
.dex-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.dex-tag {
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.65);
  white-space: nowrap;
}
.dex-tag-chain {
  background: rgba(21, 134, 244, 0.1);
  border-color: rgba(21, 134, 244, 0.3);
  color: #6bb8ff;
}
.dex-tag-more {
  background: rgba(255, 255, 255, 0.02);
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.35);
  font-style: italic;
}
.dex-tag-more {
  opacity: 0.55;
  font-style: italic;
}

/* ── Anchors ────────────────────────────────────────── */
.anchor { position: relative; }
.anchor #dex-services,
.anchor #volume-management,
.anchor #token-launch, .anchor #cex-services,
.anchor #liquidity-management, .anchor #cex-listing,
.anchor #order-optimization {
  position: absolute;
  top: -160px;
}

#how-it-works {
  scroll-margin-top: 160px;
}

/* ── Prof support ───────────────────────────────────── */
#prof-support {
  background-color: #222222;
  border: 0;
  border-radius: 5rem;
  padding-right: var(--spacing-2xl);
  padding-left: var(--spacing-2xl);
  display: flex;
  flex-direction: column;
}
#prof-support h2 {
  line-height: 1.1;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}
.prof-support-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: var(--spacing-lg);
}
.prof-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.prof-card-num {
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Montserrat', Arial, sans-serif;
  color: rgba(52, 251, 255, 0.25);
  line-height: 1;
  margin-bottom: 0.25rem;
}
.prof-card strong {
  font-size: 0.9rem;
  font-weight: 700;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.prof-card p {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.45);
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.5;
  margin: 0;
}

/* ── Marquee ────────────────────────────────────────── */
.marquee { max-width: inherit; }
.marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  flex-shrink: 0;
}
.marquee-item img {
  height: 2.5rem;
  width: auto;
  display: block;
  filter: grayscale(1) opacity(0.55);
  transition: filter 0.3s ease;
}
.marquee-item--partner img { height: 2rem; }
.marquee-item:hover img { filter: grayscale(0) opacity(1); }
.work-with-text {
  text-align: center;
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: var(--spacing-lg);
  user-select: none;
  font-weight: 700;
  margin-top: var(--spacing-2xl);
}

/* ── How It Works ───────────────────────────────────── */
#how-it-works {
  padding-top: 0;
  padding-bottom: var(--spacing-lg);
}
.hiw-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: start;
  gap: 1rem;
}
.hiw-step {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.hiw-num {
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Montserrat', Arial, sans-serif;
  color: rgba(52, 251, 255, 0.2);
  line-height: 1;
}
.hiw-step h3 {
  font-size: 1.15rem;
  font-weight: 700;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #fff;
  margin: 0;
}
.hiw-step p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.55;
  margin: 0;
}
.hiw-connector {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, #34FBFF, #1586F4);
  align-self: center;
  opacity: 0.4;
}

/* ── FAQ ────────────────────────────────────────────── */
#faq {
  padding-top: 0;
  padding-bottom: var(--spacing-lg);
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
}
.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: background 0.2s;
}
.faq-item:last-child { border-bottom: none; }
.faq-item:hover { background: rgba(255, 255, 255, 0.02); }
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  gap: 1rem;
}
.faq-question span {
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #fff;
}
.faq-chevron {
  font-size: 1.4rem;
  font-weight: 300;
  color: #34FBFF;
  flex-shrink: 0;
  line-height: 1;
  width: 1.5rem;
  text-align: center;
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}
.faq-item.open .faq-answer {
  max-height: 200px;
  padding: 0 1.5rem 1.25rem;
}
.faq-answer p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
}


/* ── h2 global ──────────────────────────────────────── */
h2 { font-size: 50px; font-weight: 700; }

/* ═══════════════════════════════════════════════════════
   BREAKPOINTS
═══════════════════════════════════════════════════════ */
@media (min-width: 2241px) {
  #start_way::before { height: 70rem; }
}
@media (min-width: 1472px) and (max-width: 2240px) {
  #start_way::before { height: 60rem; }
}
@media (min-width: 1212px) and (max-width: 1471px) {
  #start_way::before { height: 50rem; }
  #clients b { font-size: 56px; }
}
@media (min-width: 1025px) and (max-width: 1211px) {
  #start_way::before { height: 40rem; }
  #clients b { font-size: 56px; }
}

@media (max-width: 1024px) {
  .hero-media-container { justify-content: center; max-width: 480px; margin: 0 auto; }
  .hero { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .hero div { grid-column: span 2 / span 2; }
  #start_way div:first-child,
  #start_tokens div:first-child, #cex div:first-child { order: 1; }
  #start_way div:last-child,
  #start_tokens div:last-child, #cex div:last-child { order: -1; }
  .ob-grid { grid-template-columns: 1fr; }
  .grid-cols-2 { grid-template-columns: 1fr; gap: 20px; }
  .big-card { padding: var(--spacing-md); }
  .big-card h3 { font-size: 1.8rem; }
  .big-card p  { font-size: 1.1rem; }
  .work-with-text { font-size: 1rem; }
  #prof-support { padding: 20px; border-radius: 3rem; }
  .prof-support-grid { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .dex-coverage { flex-direction: column; gap: var(--spacing-md); }
  .dex-coverage-col { flex: 0 0 auto; }
  .dex-coverage-divider { width: 100%; height: 1px; align-self: auto; }
  .hiw-grid { grid-template-columns: 1fr; }
  .hiw-connector { display: none; }
  #clients { padding: var(--spacing-md); min-height: auto; border-radius: 40px; }
  #clients b { font-size: 48px; }
  #clients p { font-size: 0.7rem; }
  #clients h2 { font-size: 1.2rem; letter-spacing: 0.02em; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  #start_way::before { height: 56rem; }
}

@media (max-width: 768px) {
  h2 { font-size: 32px; }
  .section-title { font-size: 1.8rem; }
  .big-card { padding: var(--spacing-md); }
  .big-card h3 { font-size: 1.6rem; }
  .big-card p  { font-size: 1rem; }
  .work-with-text { font-size: 0.9rem; }
  #prof-support { padding: 20px; border-radius: 3rem; }
}

@media (max-width: 640px) {
  h2 { font-size: 24px; }
  p  { font-size: 16px; }
  #start_way::before { height: 45rem; }
  .hero-media-container { max-width: 100%; }
  .pilot-btn { padding: 12px 20px; font-size: 13px; border-radius: 10px; }
  .hero-eyebrow { font-size: 10px; }
  .big-card { padding: var(--spacing-md); }
  .big-card h3 { font-size: 1.4rem; }
  .big-card p  { font-size: 0.9rem; }
  .marquee-item { padding: 0 18px; }
  .marquee-item img { height: 2rem; }
  .services-grid { grid-template-columns: 1fr; }
  .prof-support-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 1.5rem; }

  #statBlock { grid-template-columns: repeat(2, minmax(0, 1fr)); padding-top: 0; padding-bottom: 0; }

  /* Remove double-stacked spacing */
  #orderbook-comparison { margin-top: 0; }

  #clients b  { font-size: 2.4rem; }
  #clients p  { font-size: 0.75rem; }
  #clients h2 { font-size: 1.3rem; }
}

@media (max-width: 520px) {
  #statBlock { grid-template-columns: repeat(2, minmax(0, 1fr)); flex-direction: column; }
  #clients b { font-size: 2rem; }
  #clients p { font-size: 0.75rem; letter-spacing: 0.03em; }
}

@media (max-width: 480px) {
  h2 { font-size: 20px; }
  p  { font-size: 14px; }
  .big-card { padding: var(--spacing-md); }
  .big-card h3 { font-size: 1.2rem; }
  .big-card p  { font-size: 0.8rem; }
  .marquee-item { padding: 0 14px; }
  .marquee-item img { height: 1.75rem; }
}
</style>
