<template>
  <section class="relative text-white py-2 overflow-hidden">
    <!-- SVG Кривая с градиентом и тенью -->
    <svg
      ref="svgRef"
      class="absolute z-10 left-0 top-0 w-full pointer-events-none"
      :style="{ height: `${svgHeight}px` }"
      viewBox="0 0 1180 508"
      preserveAspectRatio="none"
    >
      <!-- Тень (дубликат пути с фильтром и задержкой) -->
      <path
        d="M10.5 492.5C91.7 497.8 283.2 499.9 373 428.5C490.5 335 669.1 133.2 825.5 77.5C959 30 1104.8 16.3 1170 12.5"
        fill="none"
        stroke="url(#lineGradient)"
        stroke-width="5"
        filter="url(#shadowBlur)"
        class="svg-path-initial"
        :class="{ 'svg-path-animated svg-path-shadow': pathAnimated }"
      />
      <!-- Основная линия -->
      <path
        ref="svgPathRef"
        d="M10.5 492.5C91.7 497.8 283.2 499.9 373 428.5C490.5 335 669.1 133.2 825.5 77.5C959 30 1104.8 16.3 1170 12.5"
        fill="none"
        stroke="url(#lineGradient)"
        stroke-width="5"
        class="svg-path-initial"
        :class="{ 'svg-path-animated': pathAnimated }"
      />
      <defs>
        <linearGradient id="lineGradient" x1="10.5" y1="253.7" x2="1170" y2="253.7" gradientUnits="userSpaceOnUse">
          <stop stop-color="#34FBFF" />
          <stop offset="1" stop-color="#1586F4" />
        </linearGradient>
        <!-- Фильтр для тени (Gaussian Blur) -->
        <filter id="shadowBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
    <!-- Каскадные колонки -->
    <div ref="blocksWrap" class="relative z-20 flex flex-row life-cyclic justify-between mx-auto px-1" :style="{ minHeight: `${svgHeight}px` }">
      <div
        v-for="(item, i) in translatedItems"
        :ref="el => cardRefs[i] = el"
        :key="i"
        class="col-life"
        :style="{ marginTop: i === 0 ? '0px' : `${offsets[i]}px` }"
      >
        
        <div class="flex flex-row">
          <b>{{ item.title }}</b>
          <h3>0{{ i + 1 }}.</h3>
        </div>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n' // Импорт i18n для подстановки переводов

const { t } = useI18n() // Получаем функцию t для переводов

const cardRefs = ref([])
const items = [
  {
    titleKey: 'market_making.prof_support_1_title',
    descKey: 'market_making.prof_support_1_desc',
  },
  {
    titleKey: 'market_making.prof_support_2_title',
    descKey: 'market_making.prof_support_2_desc',
  },
  {
    titleKey: 'market_making.prof_support_3_title',
    descKey: 'market_making.prof_support_3_desc',
  },
  {
    titleKey: 'market_making.prof_support_4_title',
    descKey: 'market_making.prof_support_4_desc',
  },
]

// Computed для подстановки переводов
const translatedItems = computed(() => {
  return items.map(item => ({
    ...item,
    title: item.titleKey ? t(item.titleKey) : item.title, // Подставляем перевод для title
    desc: item.descKey ? t(item.descKey) : item.desc, // Подставляем перевод для desc
  }))
})

const offsets = ref([0, 0, 0, 0])
const pathAnimated = ref(false)
const svgRef = ref(null)
const svgPathRef = ref(null)
const blocksWrap = ref(null)
const svgHeight = ref(400)

let resizeTimeout = null

const calculateOffsets = async () => {
  await nextTick()

  offsets.value = [0, 0, 0, 0] // Сброс перед расчётом
  let acc = 0

  // Проверяем ширину для режима
  const width = window.innerWidth
  const isMobile = width <= 640
  const isTablet = width <= 1024 && width > 640

  if (isMobile || isTablet) {
    // На мобильных/таблетах обнуляем отступы
    offsets.value = [0, 0, 0, 0]
  } else {
    // Desktop: полный каскад
    offsets.value = translatedItems.value.map((_, i) => {
      if (i === 0) return 0

      const prevCol = cardRefs.value[i - 1]
      if (!prevCol) return acc
      let textHeight = 0
      const children = prevCol.querySelectorAll('h3, b, p')
      children.forEach(child => {
        textHeight += child.offsetHeight
      })

      acc += textHeight + 16
      return acc
    })
  }

  const lastColHeight = cardRefs.value[3]?.offsetHeight || 0
  svgHeight.value = Math.max(offsets.value[3] + 50, 400) // Минимальная высота 400px
}

onMounted(() => {
  calculateOffsets()

  // Анимация появления колонок
  cardRefs.value.forEach((el, idx) => {
    el.classList.remove('fadeinup') // если hot reload
    el.style.opacity = 0
    el.style.transform = 'translateY(60px)'
  })
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeinup')
          observer.unobserve(entry.target)

          // Если это 4-я колонка, запустить анимацию SVG с задержкой
          if (entry.target === cardRefs.value[3]) {
            setTimeout(() => { pathAnimated.value = true }, 500)
          }
        }
      })
    },
    { threshold: 0.3 }
  )
  cardRefs.value.forEach(el => el && observer.observe(el))

  // Debounce resize
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(calculateOffsets, 200) // Debounce 200ms
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateOffsets)
})
</script>

<style scoped>
.life-cyclic > .col-life {
  border-right: 1.5px solid rgba(255,255,255,0.16);
  min-width: 0;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Текст начинается сверху */
  align-items: flex-start;
  padding: 0 30px 36px 0;
  background: transparent;
  position: relative;
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.7s cubic-bezier(0.37,0,0.16,1);
}
.life-cyclic > .col-life:last-child { border-right: none; }
.col-life h3 {
  color: #fff;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 4px;
}
.col-life b {
  display: block;
  font-size: 23px;
  line-height: 29px;
  margin-bottom: 10px;
}
.col-life p {
  color: #e3e3e3;
  font-size: 17px;
  line-height: 22px;
}

/* Анимация появления */
.fadeinup {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: all 0.9s cubic-bezier(0.37,0,0.16,1);
}

/* Изначальное скрытие SVG пути */
.svg-path-initial {
  stroke-opacity: 0;
  stroke: transparent; /* Полностью скрывает линию до анимации */
}

/* SVG анимация пути */
@keyframes drawPath {
  0%   { stroke-dashoffset: 2200; stroke-opacity: 0; stroke: #34FBFF; stroke-width: 6; }
  10%  { stroke-opacity: 0.3; } /* Плавное появление */
  60%  { stroke-dashoffset: 1000; stroke-opacity: 1; stroke: #1586F4; stroke-width: 8; }
  90%  { stroke: #1586F4; stroke-width: 6; }
  100% { stroke-dashoffset: 0; stroke-opacity: 1; stroke: #1586F4; stroke-width: 5; }
}
.svg-path-animated {
  stroke-dasharray: 2200;
  stroke-dashoffset: 2200;
  animation: drawPath 7.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards; /* Плавный старт, скорость в 2 раза меньше */
}

/* Тень с задержкой */
.svg-path-shadow {
  animation-delay: 0.1s; /* Отставание 0.1 секунды */
}

/* Responsive styles for life-cyclic container and columns */
@media (max-width: 1024px) {
  .life-cyclic {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  .life-cyclic > .col-life {
    width: calc(50% - 10px);
    margin-top: 0 !important; /* remove margin-top for clean stacking */
  }
}
@media (max-width: 640px) {
  .life-cyclic {
    flex-direction: column;
    gap: 10px;
  }
  .life-cyclic > .col-life {
    width: 100% !important;
    margin-top: 0 !important; /* remove margin-top for vertical stack */
  }
}
</style>
