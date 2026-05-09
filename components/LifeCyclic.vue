<template>
  <section class="steps-section text-white py-2">
    <div class="steps-grid">
      <div
        v-for="(item, i) in translatedItems"
        :ref="el => cardRefs[i] = el"
        :key="i"
        class="step-col"
      >
        <div class="step-number">0{{ i + 1 }}</div>
        <b class="step-title">{{ item.title }}</b>
        <p class="step-desc">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cardRefs = ref([])
const items = [
  { titleKey: 'market_making.prof_support_1_title', descKey: 'market_making.prof_support_1_desc' },
  { titleKey: 'market_making.prof_support_2_title', descKey: 'market_making.prof_support_2_desc' },
  { titleKey: 'market_making.prof_support_3_title', descKey: 'market_making.prof_support_3_desc' },
  { titleKey: 'market_making.prof_support_4_title', descKey: 'market_making.prof_support_4_desc' },
]

const translatedItems = computed(() =>
  items.map(item => ({
    title: t(item.titleKey),
    desc: t(item.descKey),
  }))
)

onMounted(async () => {
  await nextTick()

  cardRefs.value.forEach(el => {
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
  })

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeinup')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  cardRefs.value.forEach(el => el && observer.observe(el))
})
</script>

<style scoped>
.steps-section {
  width: 100%;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.step-col {
  padding: 2rem 2rem 2rem 1.5rem;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.37, 0, 0.16, 1), transform 0.8s cubic-bezier(0.37, 0, 0.16, 1);
  position: relative;
}

.step-col::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1px;
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, #34FBFF 0%, #1586F4 100%);
}

.step-col:nth-child(1) { transition-delay: 0s; }
.step-col:nth-child(2) { transition-delay: 0.12s; }
.step-col:nth-child(3) { transition-delay: 0.24s; }
.step-col:nth-child(4) { transition-delay: 0.36s; }

.step-number {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(90deg, #34FBFF 0%, #1586F4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Montserrat', Arial, sans-serif;
  letter-spacing: -0.02em;
}

.step-title {
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  color: #fff;
}

.step-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.fadeinup {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .step-col:nth-child(3),
  .step-col:nth-child(4) {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
}

@media (max-width: 640px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
  .step-col:not(:first-child) {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
  .step-col {
    padding: 1.5rem 1rem;
  }
  .step-number {
    font-size: 2rem;
  }
}
</style>
