<!-- components/OrderBookWidget.vue -->
<!-- Animated order book visualization for the CEX services hero -->
<template>
  <div class="ob-wrap">
    <div class="ob-header">
      <span class="ob-title">ORDER BOOK</span>
      <span class="ob-pair">TOKEN / USDT</span>
    </div>

    <!-- Asks (sell side) -->
    <div class="ob-side ob-asks">
      <div class="ob-row" v-for="row in asks" :key="row.price">
        <div class="ob-depth ask-depth" :style="{ width: row.depth + '%' }"></div>
        <span class="ob-price ask-price">{{ row.price }}</span>
        <span class="ob-amount" :class="{ flash: row.changed }">{{ row.amount }}</span>
        <span class="ob-total">{{ row.total }}</span>
      </div>
    </div>

    <!-- Spread -->
    <div class="ob-spread">
      <span class="ob-spread-pct">{{ spread }}%</span>
      <span class="ob-spread-label">SPREAD</span>
      <span class="ob-spread-mid">{{ midPrice }}</span>
    </div>

    <!-- Bids (buy side) -->
    <div class="ob-side ob-bids">
      <div class="ob-row" v-for="row in bids" :key="row.price">
        <div class="ob-depth bid-depth" :style="{ width: row.depth + '%' }"></div>
        <span class="ob-price bid-price">{{ row.price }}</span>
        <span class="ob-amount" :class="{ flash: row.changed }">{{ row.amount }}</span>
        <span class="ob-total">{{ row.total }}</span>
      </div>
    </div>

    <!-- Footer badge -->
    <div class="ob-footer">
      <span class="ob-badge">50+ venues · simultaneous</span>
      <span class="ob-live-dot"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

function fmtPrice(p) { return p.toFixed(4) }
function fmtAmt(n)   { return n.toLocaleString('en-US', { maximumFractionDigits: 0 }) }
function jitter(val, pct) { return val + val * pct * (Math.random() * 2 - 1) }

// Numeric source-of-truth (never re-ordered, prices stay fixed)
const askNums = [
  { price: 1.0516, amount: 12400, depth: 38 },
  { price: 1.0498, amount: 28700, depth: 55 },
  { price: 1.0476, amount: 19200, depth: 44 },
  { price: 1.0461, amount: 41500, depth: 72 },
  { price: 1.0442, amount: 9800,  depth: 28 },
]
const bidNums = [
  { price: 1.0420, amount: 34100, depth: 64 },
  { price: 1.0403, amount: 22600, depth: 48 },
  { price: 1.0387, amount: 51200, depth: 88 },
  { price: 1.0369, amount: 15700, depth: 36 },
  { price: 1.0350, amount: 8300,  depth: 22 },
]

function makeRow(n) {
  return { price: fmtPrice(n.price), amount: fmtAmt(n.amount), total: fmtAmt(n.price * n.amount), depth: n.depth, changed: false }
}

const asks = ref(askNums.map(makeRow))
const bids = ref(bidNums.map(makeRow))
const spread   = ref('0.18')
const midPrice = ref(fmtPrice(1.0420))

let timer

function tick() {
  const ai = Math.floor(Math.random() * askNums.length)
  const bi = Math.floor(Math.random() * bidNums.length)

  // Mutate numeric state, then patch only the changed fields in-place
  const a = askNums[ai]
  a.amount = Math.max(1000, Math.round(jitter(a.amount, 0.08)))
  a.depth  = Math.min(95, Math.max(10, Math.round(jitter(a.depth, 0.1))))
  const ar = asks.value[ai]
  ar.amount  = fmtAmt(a.amount)
  ar.total   = fmtAmt(a.price * a.amount)
  ar.depth   = a.depth
  ar.changed = true
  setTimeout(() => { ar.changed = false }, 400)

  const b = bidNums[bi]
  b.amount = Math.max(1000, Math.round(jitter(b.amount, 0.08)))
  b.depth  = Math.min(95, Math.max(10, Math.round(jitter(b.depth, 0.1))))
  const br = bids.value[bi]
  br.amount  = fmtAmt(b.amount)
  br.total   = fmtAmt(b.price * b.amount)
  br.depth   = b.depth
  br.changed = true
  setTimeout(() => { br.changed = false }, 400)

  if (Math.random() < 0.3) {
    const mid = parseFloat(midPrice.value) + (Math.random() - 0.5) * 0.0004
    midPrice.value = fmtPrice(Math.max(1.03, Math.min(1.06, mid)))
    spread.value = ((0.0015 + Math.random() * 0.001) / parseFloat(midPrice.value) * 100).toFixed(2)
  }
}

onMounted(() => { timer = setInterval(tick, 900) })
onUnmounted(() => { clearInterval(timer) })
</script>

<style scoped>
.ob-wrap {
  width: 100%;
  max-width: 380px;
  margin: auto;
  background: rgba(10, 10, 18, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  font-family: 'Courier New', Courier, monospace;
}

/* Header */
.ob-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.ob-title {
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}
.ob-pair {
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  color: rgba(52, 251, 255, 0.7);
}

/* Sides */
.ob-side {
  display: flex;
  flex-direction: column;
  padding: 4px 0;
}

/* Rows */
.ob-row {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4px 16px;
  font-size: 0.68rem;
  line-height: 1.4;
  overflow: hidden;
  transition: background 0.25s;
}

/* Depth bar behind row */
.ob-depth {
  position: absolute;
  top: 0; bottom: 0;
  right: 0;
  pointer-events: none;
  opacity: 0.12;
  border-radius: 2px 0 0 2px;
  transition: width 0.6s ease;
}
.ask-depth { background: #ff5555; }
.bid-depth { background: #34FBFF; }

/* Price colors */
.ob-price { font-weight: 600; position: relative; z-index: 1; }
.ask-price { color: #ff6b6b; }
.bid-price { color: #34FBFF; }

.ob-amount, .ob-total {
  text-align: right;
  color: rgba(255, 255, 255, 0.45);
  position: relative;
  z-index: 1;
  transition: color 0.25s;
}

/* Flash highlight when a row updates */
.ob-amount.flash {
  color: rgba(255, 255, 255, 0.9);
}

/* Spread bar */
.ob-spread {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.ob-spread-pct {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  transition: color 0.3s;
}
.ob-spread-label {
  font-size: 0.55rem;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.28);
}
.ob-spread-mid {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.45);
  transition: color 0.3s;
}

/* Footer */
.ob-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.ob-badge {
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: rgba(52, 251, 255, 0.5);
  font-family: 'Courier New', monospace;
}

/* Live dot */
.ob-live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34FBFF;
  animation: pulse-dot 1.4s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.7); }
}

/* Responsive */
@media (max-width: 640px) {
  .ob-wrap { max-width: 300px; }
  .ob-row { font-size: 0.6rem; padding: 3px 12px; }
  .ob-header, .ob-spread, .ob-footer { padding-left: 12px; padding-right: 12px; }
}
</style>
