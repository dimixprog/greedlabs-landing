<template>
  <svg
    viewBox="0 0 580 260"
    xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:auto;display:block;border-radius:16px;background:#161b22"
  >
    <!-- Horizontal grid lines -->
    <line
      v-for="(y, i) in gridYs" :key="'g'+i"
      :x1="ML" :y1="y" :x2="CW" :y2="y"
      stroke="rgba(255,255,255,0.05)" stroke-width="1"
    />

    <!-- Price axis labels -->
    <text
      v-for="(p, i) in gridPrices" :key="'pl'+i"
      :x="CW + 6" :y="gridYs[i] + 4"
      fill="rgba(255,255,255,0.22)" font-size="9"
      font-family="Montserrat,sans-serif"
    >{{ p }}</text>

    <!-- Volume area separator -->
    <line :x1="ML" y1="196" :x2="CW" y2="196" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

    <!-- Zone background tints -->
    <rect :x="ML" y="0" :width="mmX - ML" height="192" fill="rgba(255,255,255,0.012)" rx="0"/>
    <rect :x="mmX" y="0" :width="CW - mmX" height="192" fill="rgba(52,251,255,0.018)" rx="0"/>

    <!-- MM START dashed divider -->
    <line
      :x1="mmX" y1="8" :x2="mmX" y2="192"
      stroke="rgba(52,251,255,0.5)" stroke-width="1.5" stroke-dasharray="5,4"
    />

    <!-- MM START label — fixed padding -->
    <rect :x="mmX + 6" y="8" width="72" height="18" fill="rgba(52,251,255,0.12)" rx="4"/>
    <text
      :x="mmX + 42" y="21"
      fill="#34FBFF" font-size="8.5" font-family="Montserrat,sans-serif"
      font-weight="700" letter-spacing="0.8" text-anchor="middle"
    >MM START</text>

    <!-- BEFORE / AFTER zone labels -->
    <text
      :x="ML + (mmIndex * slotW) / 2" y="187"
      fill="rgba(255,255,255,0.15)" font-size="8"
      font-family="Montserrat,sans-serif" text-anchor="middle"
      font-weight="600" letter-spacing="1.5"
    >BEFORE</text>
    <text
      :x="mmX + ((candles.length - mmIndex) * slotW) / 2" y="187"
      fill="rgba(52,251,255,0.3)" font-size="8"
      font-family="Montserrat,sans-serif" text-anchor="middle"
      font-weight="600" letter-spacing="1.5"
    >AFTER</text>

    <!-- Volume bars -->
    <rect
      v-for="(c, i) in candles" :key="'v'+i"
      :x="cx(i) - BW/2"
      :y="volTop + (1 - c[4] / volMax) * volH"
      :width="BW"
      :height="c[4] / volMax * volH"
      :fill="c[3] >= c[0] ? '#26a69a' : '#ef5350'"
      opacity="0.45" rx="1"
    />

    <!-- Wicks -->
    <line
      v-for="(c, i) in candles" :key="'w'+i"
      :x1="cx(i)" :y1="py(c[1])"
      :x2="cx(i)" :y2="py(c[2])"
      :stroke="c[3] >= c[0] ? '#26a69a' : '#ef5350'"
      stroke-width="1.5"
    />

    <!-- Bodies -->
    <rect
      v-for="(c, i) in candles" :key="'b'+i"
      :x="cx(i) - BW/2"
      :y="Math.min(py(c[0]), py(c[3]))"
      :width="BW"
      :height="Math.max(2, Math.abs(py(c[3]) - py(c[0])))"
      :fill="c[3] >= c[0] ? '#26a69a' : '#ef5350'"
      rx="1.5"
    />
  </svg>
</template>

<script setup>
// ── Layout ──────────────────────────────────────────────────────
const W = 580, ML = 8, MR = 44, MT = 10
const CW = W - MR
const CHART_H = 178          // candle zone: MT → 188
const volTop = 200, volH = 52, volMax = 90
const BW = 14                // candle body width
const mmIndex = 8            // MM starts at this candle index

// ── Candle data: [open, high, low, close, volume] ────────────────
// BEFORE (0–7): dead market — tight range, tiny bodies, almost no volume
// AFTER  (8–19): active market — healthy volatility, uptrend, real volume
const candles = [
  // ── Before: flat, thin bodies, near-zero wicks, minimal volume ──
  [42, 43.5, 40.5, 41,   8],
  [41, 42.5, 40,   42,   5],
  [42, 43,   40.5, 40.5, 6],
  [40.5, 42, 39.5, 40,   7],
  [40, 42,   38.5, 39,   9],
  [39, 41,   38.5, 40,   5],
  [40, 41.5, 38,   38.5, 7],
  [38.5, 41, 37.5, 40,   8],
  // ── After: breakout + healthy uptrend, mix of green/red, real candles ──
  [40, 47, 38.5, 46,   46],  // breakout green
  [46, 52, 44,   49,   54],  // strong green
  [49, 51, 44.5, 46,   42],  // pullback red
  [46, 53, 45,   52,   60],  // green
  [52, 57, 50,   55,   65],  // green
  [55, 57, 50.5, 52,   50],  // pullback red
  [52, 60, 51,   59,   72],  // strong green
  [59, 64, 57,   62,   68],  // green
  [62, 67, 58.5, 65,   76],  // green
  [65, 68, 60,   61,   55],  // pullback red
  [61, 71, 60,   69,   82],  // strong green
  [69, 77, 67,   75,   90],  // climax green
]

const slotW = (CW - ML) / candles.length
const mmX   = ML + mmIndex * slotW
const pMin  = 33, pRange = 79 - 33

function cx(i) { return ML + i * slotW + slotW / 2 }
function py(p) { return MT + (1 - (p - pMin) / pRange) * CHART_H }

const gridPrices = [40, 50, 60, 70]
const gridYs     = gridPrices.map(p => py(p))
</script>
