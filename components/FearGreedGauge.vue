<template>
  <div class="fg-gauge">
    <div class="fg-header">
      <span class="fg-title">Fear &amp; Greed Index</span>
      <span class="fg-live"><span class="fg-live-dot"></span>LIVE</span>
    </div>

    <svg :viewBox="`0 0 ${VW} ${VH}`" xmlns="http://www.w3.org/2000/svg">
      <!-- track under segments -->
      <path :d="trackPath" fill="none" stroke="rgba(255,255,255,0.05)" :stroke-width="ARC_W" stroke-linecap="round" />

      <!-- colored segments -->
      <path
        v-for="(seg, i) in segments"
        :key="i"
        :d="seg.path"
        fill="none"
        :stroke="seg.color"
        :stroke-width="ARC_W"
        stroke-linecap="round"
        :opacity="activeSegment === i ? 1 : 0.28"
        class="fg-seg"
      />

      <!-- ticks -->
      <line
        v-for="t in ticks"
        :key="'t' + t.g"
        :x1="t.x1" :y1="t.y1" :x2="t.x2" :y2="t.y2"
        stroke="rgba(255,255,255,0.14)"
        stroke-width="1.5"
      />

      <!-- end labels -->
      <text :x="polar(0, R).x" :y="polar(0, R).y + 26" class="fg-end-label" text-anchor="middle">0</text>
      <text :x="polar(180, R).x" :y="polar(180, R).y + 26" class="fg-end-label" text-anchor="middle">100</text>

      <!-- glowing dot on arc at current value -->
      <circle :cx="tip.x" :cy="tip.y" r="12" :fill="glowColor" opacity="0.18" />
      <circle :cx="tip.x" :cy="tip.y" r="5" :fill="valueColor" class="fg-tip" />
      <circle :cx="tip.x" :cy="tip.y" r="2" fill="#fff" />

      <!-- needle -->
      <g :transform="`rotate(${needleAngle} ${CX} ${CY})`">
        <polygon
          :points="`${CX - 4},${CY} ${CX + 4},${CY} ${CX},${CY - NEEDLE_LEN}`"
          :fill="valueColor"
          class="fg-needle"
        />
        <circle :cx="CX" :cy="CY" r="11" fill="#0b1322" :stroke="valueColor" stroke-width="2" />
        <circle :cx="CX" :cy="CY" r="3.5" :fill="valueColor" />
      </g>
    </svg>

    <div class="fg-readout">
      <div class="fg-value" :style="{ color: valueColor, textShadow: `0 0 24px ${glowColor}` }">
        {{ Math.round(displayValue) }}
      </div>
      <div class="fg-label" :style="{ color: valueColor }">{{ label }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ── Geometry ─────────────────────────────────────────────
const VW = 400
const VH = 232
const CX = 200
const CY = 196
const R = 148
const ARC_W = 20
const NEEDLE_LEN = 104
const GAP = 2.2 // degrees trimmed off each segment edge

// gauge angle g: 0 = value 0 (left), 180 = value 100 (right)
function polar (g, r) {
  const theta = (180 - g) * Math.PI / 180
  return { x: CX + r * Math.cos(theta), y: CY - r * Math.sin(theta) }
}

function arcPath (g1, g2, r) {
  const p1 = polar(g1, r)
  const p2 = polar(g2, r)
  return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`
}

const SEGMENT_COLORS = ['#FF3B5C', '#FF7A4D', '#FFC24D', '#9BE84D', '#00D87A']

const segments = SEGMENT_COLORS.map((color, i) => ({
  color,
  path: arcPath(i * 36 + GAP, (i + 1) * 36 - GAP, R)
}))

const trackPath = arcPath(0, 180, R)

const ticks = []
for (let v = 10; v < 100; v += 10) {
  if (v % 20 === 0) continue // skip where segment gaps already sit
  const g = v * 1.8
  const a = polar(g, R - ARC_W / 2 - 6)
  const b = polar(g, R - ARC_W / 2 - 14)
  ticks.push({ g, x1: a.x, y1: a.y, x2: b.x, y2: b.y })
}

// ── Animation ────────────────────────────────────────────
const displayValue = ref(0)
let raf = null
let start = null

const SWEEP_MS = 2600
const TARGET = 78

function easeOutBack (t) {
  const c1 = 1.2
  return 1 + (c1 + 1) * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

function loop (ts) {
  if (!start) start = ts
  const el = ts - start
  if (el < SWEEP_MS) {
    // initial sweep from 0 → TARGET with slight overshoot
    displayValue.value = Math.max(0, Math.min(100, TARGET * easeOutBack(el / SWEEP_MS)))
  } else {
    // live wander around the greed zone
    const t = (el - SWEEP_MS) / 1000
    const wander =
      Math.sin(t * 0.42) * 7 +
      Math.sin(t * 1.31 + 1.7) * 2.5 +
      Math.sin(t * 3.7 + 0.4) * 0.8
    displayValue.value = Math.max(0, Math.min(100, TARGET + wander))
  }
  raf = requestAnimationFrame(loop)
}

onMounted(() => { raf = requestAnimationFrame(loop) })
onUnmounted(() => { if (raf) cancelAnimationFrame(raf) })

// ── Derived state ────────────────────────────────────────
const needleAngle = computed(() => displayValue.value / 100 * 180 - 90)
const tip = computed(() => polar(displayValue.value * 1.8, R))

const activeSegment = computed(() => Math.min(4, Math.floor(displayValue.value / 20)))
const valueColor = computed(() => SEGMENT_COLORS[activeSegment.value])
const glowColor = computed(() => valueColor.value + '66')

const label = computed(() => {
  const v = displayValue.value
  if (v < 20) return 'EXTREME FEAR'
  if (v < 40) return 'FEAR'
  if (v < 60) return 'NEUTRAL'
  if (v < 80) return 'GREED'
  return 'EXTREME GREED'
})
</script>

<style scoped>
.fg-gauge {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  container-type: inline-size;
  pointer-events: none;
  user-select: none;
}
/* soft ambient glow blending the dial into the page background */
.fg-gauge::before {
  content: '';
  position: absolute;
  inset: -15% -10%;
  background: radial-gradient(ellipse 55% 50% at 50% 55%, rgba(52, 251, 255, 0.06), transparent 70%);
  pointer-events: none;
}

.fg-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  margin-bottom: 1.5cqw;
}
.fg-title {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: clamp(0.6rem, 2.2cqw, 0.85rem);
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}
.fg-live {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.38);
}
.fg-live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #FF3B5C;
  animation: fg-pulse 1.6s ease-in-out infinite;
}
@keyframes fg-pulse {
  0%, 100% { opacity: 0.5; box-shadow: 0 0 0 0 rgba(255, 59, 92, 0.4); }
  50%      { opacity: 1;   box-shadow: 0 0 0 4px rgba(255, 59, 92, 0); }
}

svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.fg-seg {
  transition: opacity 0.4s ease;
  filter: drop-shadow(0 0 10px currentColor);
}
.fg-tip {
  filter: drop-shadow(0 0 10px currentColor);
}
.fg-needle {
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.15));
}

.fg-end-label {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 11px;
  font-weight: 600;
  fill: rgba(255, 255, 255, 0.25);
}

.fg-readout {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8cqw;
  padding-top: 1cqw;
  pointer-events: none;
}
.fg-value {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: clamp(1.8rem, 11cqw, 3.8rem);
  font-weight: 800;
  line-height: 1;
  transition: color 0.3s ease;
  font-variant-numeric: tabular-nums;
}
.fg-label {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: clamp(0.65rem, 3cqw, 1rem);
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}
</style>
