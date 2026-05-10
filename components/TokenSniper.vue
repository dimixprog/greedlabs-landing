<!-- components/TokenSniper.vue -->
<!-- Supply acquisition gauge: shows 80%+ supply secured at block 0 -->
<template>
  <div ref="root" class="acquisition-wrap">

    <!-- Gauge SVG -->
    <svg class="gauge-svg" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#34FBFF"/>
          <stop offset="100%" stop-color="#1586F4"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glowPulse" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
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

      <!-- Fill arc — JS-driven sweep -->
      <circle
        class="gauge-fill"
        :class="{ 'gauge-fill--pulse': done }"
        cx="110" cy="110" r="80"
        fill="none"
        stroke="url(#gaugeGrad)"
        stroke-width="10"
        stroke-linecap="round"
        :stroke-dasharray="`${fillDash} 503`"
        transform="rotate(-225 110 110)"
        :filter="done ? 'url(#glowPulse)' : 'url(#glow)'"
      />

      <!-- Tick marks at 25%, 50%, 75% -->
      <g class="gauge-ticks" stroke="rgba(255,255,255,0.15)" stroke-width="1.5">
        <line x1="110" y1="26" x2="110" y2="18" transform="rotate(-157.5 110 110)"/>
        <line x1="110" y1="26" x2="110" y2="18" transform="rotate(-90 110 110)"/>
        <line x1="110" y1="26" x2="110" y2="18" transform="rotate(-22.5 110 110)"/>
      </g>

      <!-- Centre text: stat -->
      <text x="110" y="105" text-anchor="middle" class="gauge-main-num" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="38" fill="url(#gaugeGrad)">{{ displayNum }}%+</text>
      <text x="110" y="128" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-weight="500" font-size="11" letter-spacing="2" fill="rgba(255,255,255,0.45)">SUPPLY ACQUIRED</text>

      <!-- Left label: 0% -->
      <text x="22" y="168" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)">0%</text>
      <!-- Right label: 100% -->
      <text x="198" y="168" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)">100%</text>
    </svg>

    <!-- Stats row below gauge -->
    <div class="acq-stats" :class="{ 'acq-stats--visible': statsVisible }">
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

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const TARGET_FILL = 302
const TARGET_NUM  = 80
const DURATION    = 1600
const START_DELAY = 200

const fillDash     = ref(0)
const displayNum   = ref(0)
const done         = ref(false)
const statsVisible = ref(false)
const root         = ref(null)

let observer = null
let animated = false

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}

function runAnimation() {
  if (animated) return
  animated = true

  setTimeout(() => {
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const t       = Math.min(elapsed / DURATION, 1)
      const eased   = easeOut(t)

      fillDash.value   = Math.round(TARGET_FILL * eased)
      displayNum.value = Math.round(TARGET_NUM  * eased)

      if (t < 1) {
        requestAnimationFrame(tick)
      } else {
        fillDash.value    = TARGET_FILL
        displayNum.value  = TARGET_NUM
        done.value        = true
        statsVisible.value = true
      }
    }

    requestAnimationFrame(tick)
  }, START_DELAY)
}

onMounted(() => {
  nextTick(() => {
    observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) runAnimation() },
      { threshold: 0.3 }
    )
    if (root.value) observer.observe(root.value)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

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

/* Pulsing glow on the fill arc once sweep completes */
@keyframes gauge-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.65; }
}

.gauge-fill--pulse {
  animation: gauge-pulse 2.4s ease-in-out infinite;
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

  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.acq-stats--visible {
  opacity: 1;
  transform: translateY(0);
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
