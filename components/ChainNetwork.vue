<!-- components/ChainNetwork.vue -->
<!-- Static DEX coverage visual: chains on the left, protocols on the right, lines connecting them -->
<template>
  <div class="cn-wrap">

    <!-- Left column: chain nodes -->
    <div class="cn-col cn-chains">
      <div class="cn-node chain-node" v-for="c in chains" :key="c.name" :style="{ '--accent': c.color }">
        <span class="cn-dot"></span>
        <span class="cn-label">{{ c.name }}</span>
      </div>
    </div>

    <!-- Centre: connection lines (SVG) -->
    <svg class="cn-lines" viewBox="0 0 60 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#34FBFF" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#1586F4" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
      <!-- A few representative connection lines -->
      <line x1="0" y1="20"  x2="60" y2="20"  stroke="url(#lineGrad)" stroke-width="0.8"/>
      <line x1="0" y1="60"  x2="60" y2="60"  stroke="url(#lineGrad)" stroke-width="0.8"/>
      <line x1="0" y1="100" x2="60" y2="100" stroke="url(#lineGrad)" stroke-width="0.8"/>
      <line x1="0" y1="140" x2="60" y2="60"  stroke="url(#lineGrad)" stroke-width="0.5" stroke-opacity="0.4"/>
      <line x1="0" y1="180" x2="60" y2="140" stroke="url(#lineGrad)" stroke-width="0.5" stroke-opacity="0.4"/>
      <line x1="0" y1="20"  x2="60" y2="140" stroke="url(#lineGrad)" stroke-width="0.4" stroke-opacity="0.25"/>
      <line x1="0" y1="60"  x2="60" y2="180" stroke="url(#lineGrad)" stroke-width="0.4" stroke-opacity="0.25"/>
      <line x1="0" y1="100" x2="60" y2="220" stroke="url(#lineGrad)" stroke-width="0.4" stroke-opacity="0.25"/>
    </svg>

    <!-- Right column: protocol nodes -->
    <div class="cn-col cn-protocols">
      <div class="cn-node proto-node" v-for="p in protocols" :key="p">
        <span class="cn-label">{{ p }}</span>
        <span class="cn-dot"></span>
      </div>
    </div>

  </div>
</template>

<script setup>
const chains = [
  { name: 'Solana',   color: '#9945FF' },
  { name: 'TON',      color: '#0098EA' },
  { name: 'Ethereum', color: '#627EEA' },
  { name: 'BSC',      color: '#F0B90B' },
  { name: 'Base',     color: '#0052FF' },
  { name: 'SUI',      color: '#6FBCF0' },
]

const protocols = [
  'Raydium',
  'Uniswap',
  'StonFi',
  'Meteora',
  'PumpSwap',
  'Aerodrome',
]
</script>

<style scoped>
.cn-wrap {
  width: 100%;
  max-width: 380px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: center;
  gap: 0;
  padding: 16px 0;
}

/* Columns */
.cn-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cn-protocols { align-items: flex-end; }

/* Nodes */
.cn-node {
  display: flex;
  align-items: center;
  gap: 8px;
}
.proto-node { flex-direction: row-reverse; }

.cn-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #34FBFF, #1586F4);
  flex-shrink: 0;
}
.chain-node .cn-dot {
  background: var(--accent, #34FBFF);
  box-shadow: 0 0 6px var(--accent, #34FBFF);
}

.cn-label {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
}
.chain-node .cn-label { color: rgba(255, 255, 255, 0.85); }

/* SVG lines */
.cn-lines {
  width: 100%;
  height: 100%;
  min-height: 200px;
}

/* Responsive */
@media (max-width: 640px) {
  .cn-wrap { max-width: 300px; }
  .cn-label { font-size: 0.68rem; }
}
</style>
