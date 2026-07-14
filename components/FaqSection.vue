<script setup>
import { ref } from 'vue'

defineProps({
  // Number of Q/A pairs stored under the `faq.qN` / `faq.aN` i18n keys
  count: { type: Number, default: 7 },
  // Render the heading as h1 on the dedicated /faq page, h2 inside the homepage section
  titleTag: { type: String, default: 'h2' }
})

const faqOpen = ref(null)
</script>

<template>
  <div class="faq-block">
    <div class="section-eyebrow">{{ $t('faq.eyebrow') }}</div>
    <component :is="titleTag" class="section-title">{{ $t('faq.title') }}</component>
    <div class="faq-list">
      <div
        v-for="i in count"
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
</template>

<style scoped>
/* ── Section header (mirrors homepage tokens) ─────────── */
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

/* ── FAQ accordion ────────────────────────────────────── */
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
  max-height: 400px;
  padding: 0 1.5rem 1.25rem;
}
.faq-answer p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .section-title { font-size: 1.8rem; }
}
@media (max-width: 640px) {
  .section-title { font-size: 1.5rem; }
}
</style>
