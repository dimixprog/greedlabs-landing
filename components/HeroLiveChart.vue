<template>
  <div ref="wrapper" class="hero-live-chart">
    <canvas ref="canvasEl"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const wrapper  = ref(null)
const canvasEl = ref(null)
let raf = null
let ro  = null
let startTime  = null
let lastProgress = -1

// Dynamic Y range — lerps toward visible candle range each frame
let rMin = null
let rMax = null

const CYCLE_MS = 9000
const HOLD_MS  = 2500

// OHLC: [open, high, low, close]
// BEFORE (0–11): choppy sideways market, big swings, no direction
// AFTER  (12–31): MM active — breakout + uptrend with organic pullbacks
const MM_IDX = 12
const candles = [
  // ── Before: volatile sideways, wide wicks, no trend ──
  [100.0, 105.8, 95.5, 103.2],   // big green, choppy open
  [103.2, 107.0, 98.5, 100.4],   // red, tall upper wick
  [100.4, 105.5, 96.0, 97.8],    // red, big wick down
  [97.8,  104.8, 96.2, 102.5],   // green recovery, long wicks
  [102.5, 106.0, 99.5, 100.8],   // doji — long wicks, tiny body
  [100.8, 108.5, 98.0, 99.5],    // red, huge wick up (failed breakout)
  [99.5,  103.5, 93.5, 95.2],    // red drop, long wick below
  [95.2,  103.8, 94.5, 101.5],   // green recovery
  [101.5, 106.5, 99.0, 100.0],   // doji, small body
  [100.0, 104.0, 95.0, 97.5],    // red, new low attempt
  [97.5,  105.5, 96.8, 103.5],   // green, grinding back up
  [103.5, 106.5, 99.5, 101.0],   // small red — exhaustion
  // ── After: MM activates — breakout runs G G G, R R panic, G G G G, etc ──
  [101.0, 110.5, 100.5, 109.0],  // G breakout, wicks show battle
  [109.0, 116.0, 108.5, 114.5],  // G continuation, clean
  [114.5, 121.0, 114.0, 119.5],  // G strong push — 3 greens in a row
  [119.5, 121.0, 111.5, 112.5],  // R deep pullback (open 119.5, low 111.5)
  [112.5, 113.5, 105.5, 107.0],  // R panic continuation, new low wick
  [107.0, 120.5, 106.5, 119.0],  // G massive hammer — MM floor holds
  [119.0, 125.5, 118.5, 124.0],  // G clean continuation
  [124.0, 128.5, 123.5, 127.5],  // G quiet coil, small body
  [127.5, 136.0, 127.0, 134.5],  // G breakout to new high — 4 greens
  [134.5, 136.0, 127.5, 129.5],  // R single red dip, long lower wick
  [129.5, 137.5, 129.0, 136.5],  // G recovery
  [136.5, 144.0, 136.0, 142.5],  // G strong push
  [142.5, 149.5, 142.0, 148.0],  // G continuation ATH — 3 greens
  [148.0, 151.0, 144.5, 145.5],  // R small tired candle
  [145.5, 153.0, 145.0, 151.5],  // G recovery
  [151.5, 158.5, 151.0, 157.5],  // G push higher — 2 greens
  [157.5, 159.0, 149.0, 151.0],  // R drop, scary (open 157.5, low 149)
  [151.0, 152.0, 143.5, 145.0],  // R panic continuation — looks like reversal
  [145.0, 163.5, 144.5, 161.5],  // G massive V-recovery, huge wick down
  [161.5, 170.5, 161.0, 169.5],  // G climax explosion — final 2 greens
]

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function drawCandle(ctx, open, high, low, close, cx, bW, yFn, partialP) {
  const p     = partialP ?? 1
  const green = close >= open
  const col   = green ? '#00D87A' : '#FF3B5C'
  const glow  = green ? 'rgba(0,216,122,0.6)' : 'rgba(255,59,92,0.6)'

  const wickP = Math.min(1, p * 1.6)
  const effH  = open + (high  - open) * wickP
  const effL  = open - (open  - low)  * wickP
  const effC  = open + (close - open) * p

  const top  = Math.min(yFn(open), yFn(effC))
  const bot  = Math.max(yFn(open), yFn(effC))
  const bodyH = Math.max(1.5, bot - top)

  ctx.save()
  ctx.shadowColor = glow
  ctx.shadowBlur  = 5
  ctx.strokeStyle = col
  ctx.lineWidth   = 1.5
  ctx.beginPath()
  ctx.moveTo(cx, yFn(effH))
  ctx.lineTo(cx, yFn(effL))
  ctx.stroke()

  ctx.shadowBlur = 14
  ctx.fillStyle  = col
  ctx.fillRect(cx - bW / 2, top, bW, bodyH)
  ctx.restore()
}

function niceGridLevels(min, max) {
  const range = max - min
  // Pick a step that gives ~4-6 lines
  const rawStep = range / 5
  const mag     = Math.pow(10, Math.floor(Math.log10(rawStep)))
  const step    = Math.ceil(rawStep / mag) * mag
  const levels  = []
  const start   = Math.ceil(min / step) * step
  for (let p = start; p <= max + 0.001; p += step) {
    levels.push(Math.round(p * 10) / 10)
  }
  return levels
}

function drawFrame(cv, progress, ts) {
  // Reset range on new cycle
  if (progress < lastProgress) { rMin = null; rMax = null }
  lastProgress = progress

  const dpr = window.devicePixelRatio || 1
  const ctx  = cv.getContext('2d')
  const W = cv.width  / dpr
  const H = cv.height / dpr

  ctx.save()
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, W, H)

  const scale = Math.min(1, W / 480)
  const PL = 14, PR = Math.round(48 * scale), PT = 28, PB = 24
  const cW = W - PL - PR
  const cH = H - PT - PB
  const n  = candles.length

  const slotW = cW / n
  const bW    = slotW * 0.62
  const xAt   = i => PL + (i + 0.5) * slotW

  const totalSlots = progress * n
  const drawnFull  = Math.min(n - 1, Math.floor(totalSlots))
  const partialP   = totalSlots - Math.floor(totalSlots)

  // Compute visible price extent from drawn candles
  const visEnd = Math.min(n, drawnFull + 2)
  let tMin = Infinity, tMax = -Infinity
  for (let i = 0; i < visEnd; i++) {
    const [o, h, l, c] = candles[i]
    tMin = Math.min(tMin, l)
    tMax = Math.max(tMax, h)
  }
  // Ensure minimum visible range of 10 units
  const mid    = (tMin + tMax) / 2
  const half   = Math.max(5, (tMax - tMin) / 2)
  tMin = mid - half - 1.5
  tMax = mid + half + 1.5

  // Lerp range toward target (smooth zoom-out effect)
  if (rMin === null) { rMin = tMin; rMax = tMax }
  else {
    rMin += (tMin - rMin) * 0.035
    rMax += (tMax - rMax) * 0.035
  }

  const yAt = p => PT + (1 - (p - rMin) / (rMax - rMin)) * cH

  // MM divider x
  const mmX    = xAt(MM_IDX) - slotW / 2
  const mmFrac = MM_IDX / n

  // ── Zone tints ──────────────────────────────────────────────
  ctx.fillStyle = 'rgba(255,255,255,0.013)'
  ctx.fillRect(PL, PT, mmX - PL, cH)
  if (progress > mmFrac) {
    ctx.fillStyle = 'rgba(52,251,255,0.02)'
    ctx.fillRect(mmX, PT, PL + cW - mmX, cH)
  }

  // ── Grid lines (dynamic) ────────────────────────────────────
  const grid = niceGridLevels(rMin, rMax)
  const fs = Math.max(6, Math.round(8 * scale))
  ctx.font = `500 ${fs}px Montserrat, sans-serif`
  grid.forEach(p => {
    const gy = yAt(p)
    if (gy < PT - 2 || gy > PT + cH + 2) return
    ctx.beginPath()
    ctx.moveTo(PL, gy)
    ctx.lineTo(PL + cW, gy)
    ctx.strokeStyle = 'rgba(255,255,255,0.055)'
    ctx.lineWidth   = 1
    ctx.stroke()
    ctx.fillStyle  = 'rgba(255,255,255,0.22)'
    ctx.textAlign  = 'left'
    ctx.fillText(p.toString(), PL + cW + 6, gy + 3)
  })

  // ── Candles ─────────────────────────────────────────────────
  for (let i = 0; i < drawnFull && i < n; i++) {
    const [o, h, l, c] = candles[i]
    drawCandle(ctx, o, h, l, c, xAt(i), bW, yAt, 1)
  }

  // Forming candle
  if (drawnFull < n && partialP > 0) {
    const [o, h, l, c] = candles[drawnFull]
    drawCandle(ctx, o, h, l, c, xAt(drawnFull), bW, yAt, partialP)
  }

  // Live oscillation on last candle during hold
  if (progress >= 1) {
    const [o, h, l, c] = candles[n - 1]
    const osc = Math.sin(ts * 0.0022) * 0.3
    drawCandle(ctx, o, h, l, c + osc, xAt(n - 1), bW, yAt, 1)
  }

  // ── MM START divider ─────────────────────────────────────────
  if (progress > mmFrac) {
    const fade = Math.min(1, (progress - mmFrac) / 0.035)
    ctx.save()
    ctx.globalAlpha = fade

    ctx.setLineDash([5, 4])
    ctx.beginPath()
    ctx.moveTo(mmX, PT)
    ctx.lineTo(mmX, PT + cH)
    ctx.strokeStyle = 'rgba(52,251,255,0.55)'
    ctx.lineWidth   = 1.5
    ctx.stroke()
    ctx.setLineDash([])

    const mmFs = Math.max(6, Math.round(7.5 * scale))
    const pW = Math.round(68 * scale), pH = Math.round(17 * scale), pX = mmX + 4, pY = PT + 6
    rrect(ctx, pX, pY, pW, pH, 4)
    ctx.fillStyle = 'rgba(52,251,255,0.14)'
    ctx.fill()
    ctx.fillStyle = '#34FBFF'
    ctx.font      = `700 ${mmFs}px Montserrat, sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText('MM START', pX + pW / 2, pY + pH * 0.68)
    ctx.restore()
  }

  // ── Zone labels ──────────────────────────────────────────────
  const labelFs = Math.max(5, Math.round(7 * scale))
  ctx.font      = `600 ${labelFs}px Montserrat, sans-serif`
  ctx.textAlign = 'center'
  ctx.fillStyle = 'rgba(255,255,255,0.1)'
  ctx.fillText('BEFORE', PL + (mmX - PL) / 2, PT + cH + 15)

  if (progress > mmFrac + 0.02) {
    const fade = Math.min(1, (progress - mmFrac - 0.02) / 0.04)
    ctx.save()
    ctx.globalAlpha = fade
    ctx.fillStyle   = 'rgba(52,251,255,0.32)'
    ctx.fillText('AFTER', mmX + (PL + cW - mmX) / 2, PT + cH + 15)
    ctx.restore()
  }

  // ── Current price dot + badge ────────────────────────────────
  const lastIdx   = Math.min(n - 1, progress >= 1 ? n - 1 : drawnFull)
  const [lo, , , lc] = candles[lastIdx]
  const dispC = progress >= 1
    ? lc + Math.sin(ts * 0.0022) * 0.3
    : (drawnFull < n ? lo + (lc - lo) * partialP : lc)

  const dotX = xAt(lastIdx)
  const dotY = yAt(dispC)

  const pulse = (Math.sin(ts * 0.004) + 1) / 2
  ctx.beginPath()
  ctx.arc(dotX, dotY, 5 + pulse * 11, 0, Math.PI * 2)
  ctx.strokeStyle = `rgba(52,251,255,${0.25 * (1 - pulse)})`
  ctx.lineWidth   = 1
  ctx.stroke()

  ctx.save()
  ctx.shadowColor = '#34FBFF'
  ctx.shadowBlur  = 14
  ctx.beginPath()
  ctx.arc(dotX, dotY, 4, 0, Math.PI * 2)
  ctx.fillStyle = '#34FBFF'
  ctx.fill()
  ctx.restore()
  ctx.beginPath()
  ctx.arc(dotX, dotY, 2, 0, Math.PI * 2)
  ctx.fillStyle = '#fff'
  ctx.fill()

  const pStr = dispC.toFixed(1)
  const priceFs = Math.max(7, Math.round(9 * scale))
  ctx.font = `700 ${priceFs}px Montserrat, sans-serif`
  const tw = ctx.measureText(pStr).width
  const bp = 5, bh = 16
  const bx = dotX + 9, by = dotY - bh / 2
  if (bx + tw + bp * 2 < W - 2) {
    rrect(ctx, bx, by, tw + bp * 2, bh, 3)
    ctx.fillStyle   = 'rgba(6,14,26,0.92)'
    ctx.fill()
    ctx.strokeStyle = 'rgba(52,251,255,0.42)'
    ctx.lineWidth   = 1
    ctx.stroke()
    ctx.fillStyle  = '#34FBFF'
    ctx.textAlign  = 'left'
    ctx.fillText(pStr, bx + bp, by + 11.5)
  }

  // ── LIVE badge ───────────────────────────────────────────────
  const livePulse = (Math.sin(ts * 0.0025) + 1) / 2
  ctx.save()
  ctx.globalAlpha = 0.55 + livePulse * 0.4
  ctx.beginPath()
  ctx.arc(PL + cW - 5, PT - 11, 3.2, 0, Math.PI * 2)
  ctx.fillStyle = '#FF3B5C'
  ctx.fill()
  ctx.restore()
  ctx.fillStyle  = 'rgba(255,255,255,0.38)'
  ctx.font       = `700 ${fs}px Montserrat, sans-serif`
  ctx.textAlign  = 'right'
  ctx.fillText('LIVE', PL + cW - 11, PT - 8)

  ctx.restore()
}

function resizeCanvas() {
  const el = wrapper.value
  const cv = canvasEl.value
  if (!el || !cv) return
  const dpr = window.devicePixelRatio || 1
  const w   = el.clientWidth
  const h   = el.clientHeight
  if (!w || !h) return
  cv.width        = w * dpr
  cv.height       = h * dpr
  cv.style.width  = w + 'px'
  cv.style.height = h + 'px'
}

function loop(ts) {
  if (!startTime) startTime = ts
  const phase    = (ts - startTime) % (CYCLE_MS + HOLD_MS)
  const progress = phase < CYCLE_MS ? ease(phase / CYCLE_MS) : 1
  if (canvasEl.value) drawFrame(canvasEl.value, progress, ts)
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  ro = new ResizeObserver(() => resizeCanvas())
  ro.observe(wrapper.value)
  raf = requestAnimationFrame(loop)
})

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
  ro?.disconnect()
})
</script>

<style scoped>
.hero-live-chart {
  width: 100%;
  max-width: 520px;
  aspect-ratio: 520 / 340;
  border-radius: 20px;
  overflow: hidden;
  background: #080e1a;
  border: 1px solid rgba(52, 251, 255, 0.1);
  box-shadow:
    0 0 60px rgba(52, 251, 255, 0.07),
    0 0 0 1px rgba(52, 251, 255, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
