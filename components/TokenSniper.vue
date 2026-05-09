<!-- components/TokenSniper.vue -->
<!-- Supply acquisition gauge: shows 80%+ supply secured at block 0 -->
<template>
  <div class="acquisition-wrap">

    <!-- Gauge SVG -->
    <svg class="gauge-svg" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#34FBFF"/>
          <stop offset="100%" stop-color="#1586F4"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Track arc (270°, from -225° rotated) -->
      <circle
        class="gauge-track"
        cx="110" cy="110" r="80"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        stroke-width="10"
        stroke-linecap="round"
        stroke-dasharray="377 503"
        transform="rotate(-225 110 110)"
      />

      <!-- Fill arc (~80% of 270° = ~302) -->
      <circle
        class="gauge-fill"
        cx="110" cy="110" r="80"
        fill="none"
        stroke="url(#gaugeGrad)"
        stroke-width="10"
        stroke-linecap="round"
        stroke-dasharray="302 503"
        transform="rotate(-225 110 110)"
        filter="url(#glow)"
      />

      <!-- Tick marks at 25%, 50%, 75% -->
      <g class="gauge-ticks" stroke="rgba(255,255,255,0.15)" stroke-width="1.5">
        <!-- 25% -->
        <line x1="110" y1="26" x2="110" y2="18" transform="rotate(-157.5 110 110)"/>
        <!-- 50% -->
        <line x1="110" y1="26" x2="110" y2="18" transform="rotate(-90 110 110)"/>
        <!-- 75% -->
        <line x1="110" y1="26" x2="110" y2="18" transform="rotate(-22.5 110 110)"/>
      </g>

      <!-- Centre text: stat -->
      <text x="110" y="105" text-anchor="middle" class="gauge-main-num" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="38" fill="url(#gaugeGrad)">80%+</text>
      <text x="110" y="128" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-weight="500" font-size="11" letter-spacing="2" fill="rgba(255,255,255,0.45)">SUPPLY ACQUIRED</text>

      <!-- Left label: 0% -->
      <text x="22" y="168" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)">0%</text>
      <!-- Right label: 100% -->
      <text x="198" y="168" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)">100%</text>
    </svg>

    <!-- Stats row below gauge -->
    <div class="acq-stats">
      <div class="acq-stat">
        <span class="acq-stat-val">0</span>
        <span class="acq-stat-key">BLOCK</span>
      </div>
      <div class="acq-divider"></div>
      <div class="acq-stat">
        <span class="acq-stat-val">#1</span>
        <span class="acq-stat-key">FIRST TX</span>
      </div>
      <div class="acq-divider"></div>
      <div class="acq-stat">
        <span class="acq-stat-val">&lt;50ms</span>
        <span class="acq-stat-key">ENTRY TIME</span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.acquisition-wrap {
  width: 100%;
  max-width: 380px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.gauge-svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

/* Stats row */
.acq-stats {
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  max-width: 300px;
  margin-top: 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 12px 0;
}

.acq-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}

.acq-stat-val {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}

.acq-stat-key {
  font-family: 'Courier New', monospace;
  font-size: 0.48rem;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.3);
}

.acq-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 640px) {
  .acquisition-wrap { max-width: 280px; }
  .acq-stats { max-width: 240px; }
  .acq-stat-val { font-size: 0.95rem; }
}
</style>
