<!-- components/OrderBookWidget.vue -->
<!-- Static order book visualization for the CEX services hero -->
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
        <span class="ob-amount">{{ row.amount }}</span>
        <span class="ob-total">{{ row.total }}</span>
      </div>
    </div>

    <!-- Spread -->
    <div class="ob-spread">
      <span class="ob-spread-pct">0.18%</span>
      <span class="ob-spread-label">SPREAD</span>
      <span class="ob-spread-mid">1.0420</span>
    </div>

    <!-- Bids (buy side) -->
    <div class="ob-side ob-bids">
      <div class="ob-row" v-for="row in bids" :key="row.price">
        <div class="ob-depth bid-depth" :style="{ width: row.depth + '%' }"></div>
        <span class="ob-price bid-price">{{ row.price }}</span>
        <span class="ob-amount">{{ row.amount }}</span>
        <span class="ob-total">{{ row.total }}</span>
      </div>
    </div>

    <!-- Footer badge -->
    <div class="ob-footer">
      <span class="ob-badge">50+ venues · simultaneous</span>
    </div>
  </div>
</template>

<script setup>
const asks = [
  { price: '1.0516', amount: '12,400', total: '13,040', depth: 38 },
  { price: '1.0498', amount: '28,700', total: '30,130', depth: 55 },
  { price: '1.0476', amount: '19,200', total: '20,115', depth: 44 },
  { price: '1.0461', amount: '41,500', total: '43,413', depth: 72 },
  { price: '1.0442', amount: '9,800',  total: '10,233', depth: 28 },
]
const bids = [
  { price: '1.0420', amount: '34,100', total: '35,533', depth: 64 },
  { price: '1.0403', amount: '22,600', total: '23,511', depth: 48 },
  { price: '1.0387', amount: '51,200', total: '53,181', depth: 88 },
  { price: '1.0369', amount: '15,700', total: '16,279', depth: 36 },
  { price: '1.0350', amount: '8,300',  total: '8,591',  depth: 22 },
]
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
}

/* Depth bar behind row */
.ob-depth {
  position: absolute;
  top: 0; bottom: 0;
  right: 0;
  pointer-events: none;
  opacity: 0.12;
  border-radius: 2px 0 0 2px;
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
}
.ob-spread-label {
  font-size: 0.55rem;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.28);
}
.ob-spread-mid {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.45);
}

/* Footer */
.ob-footer {
  display: flex;
  justify-content: center;
  padding: 10px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.ob-badge {
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: rgba(52, 251, 255, 0.5);
  font-family: 'Courier New', monospace;
}

/* Responsive */
@media (max-width: 640px) {
  .ob-wrap { max-width: 300px; }
  .ob-row { font-size: 0.6rem; padding: 3px 12px; }
  .ob-header, .ob-spread, .ob-footer { padding-left: 12px; padding-right: 12px; }
}
</style>
