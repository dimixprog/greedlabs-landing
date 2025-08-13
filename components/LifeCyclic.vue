<template>
  <section class="relative text-white py-2 overflow-hidden">
    <!-- SVG Кривая с градиентом и тенью -->
    <svg
      ref="svgRef"
      class="svg-path absolute z-10 left-0 top-0 w-full pointer-events-none"
      :style="{ height: `${svgHeight}px` }"
      viewBox="0 0 1180 508"
      preserveAspectRatio="none"
      v-show="!isMobile"
    >
      <!-- Glow тень (основной путь с фильтром) -->
      <path
        d="M10.5 492.5C91.7 497.8 283.2 499.9 373 428.5C490.5 335 669.1 133.2 825.5 77.5C959 30 1104.8 16.3 1170 12.5"
        fill="none"
        stroke="url(#lineGradient)"
        stroke-width="6"
        filter="url(#glow)"
        class="svg-path-initial"
        :class="{ 'svg-path-animated': pathAnimated }"
      />

      <!-- Основная линия -->
      <path
        ref="svgPathRef"
        d="M10.5 492.5C91.7 497.8 283.2 499.9 373 428.5C490.5 335 669.1 133.2 825.5 77.5C959 30 1104.8 16.3 1170 12.5"
        fill="none"
        stroke="url(#lineGradient)"
        stroke-width="3"
        class="svg-path-initial"
        :class="{ 'svg-path-animated': pathAnimated }"
      />

      <defs>
        <linearGradient id="lineGradient" x1="10.5" y1="253.7" x2="1170" y2="253.7" gradientUnits="userSpaceOnUse">
          <stop stop-color="#34FBFF" />
          <stop offset="1" stop-color="#1586F4" />
        </linearGradient>
        <!-- Эффект свечения -->
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
    <!-- Каскадные колонки -->
    <div ref="blocksWrap" class="relative z-20 mx-auto px-1" :style="{ minHeight: `${svgHeight}px` }">
      <div v-if="isMobile" class="flex flex-row justify-between life-cyclic-mobile gap-3">
        <!-- Mobile -->
        <!-- Колонка 1: item 0 и 1 -->
        <div class="flex flex-col col-life-wrapper">
          <div
            v-for="i in [0, 1, 2, 3]"
            :ref="el => cardRefs[i] = el"
            :key="i"
            class="col-life"
            :style="{ paddingTop: i === 0 ? '0px' : `${offsets[i]}px` }"
          >
            <div class="flex flex-row">
              <b>{{ translatedItems[i].title }}</b>
              <!--<h3>0{{ i + 1 }}.</h3>-->
            </div>
            <p>{{ translatedItems[i].desc }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="isTablet" class="flex flex-row justify-between life-cyclic-mobile gap-3">
        <!-- Tablet -->
        <!-- Колонка 1: item 0 и 1 -->
        <div class="flex flex-col w-1/2 col-life-wrapper">
          <div
            v-for="i in [0, 1]"
            :ref="el => cardRefs[i] = el"
            :key="i"
            class="col-life"
            :style="{ paddingTop: i === 0 ? '0px' : `${offsets[i]}px` }"
          >
            <div class="flex flex-row">
              <b>{{ translatedItems[i].title }}</b>
              <!--<h3>0{{ i + 1 }}.</h3>-->
            </div>
            <p>{{ translatedItems[i].desc }}</p>
          </div>
        </div>

        <!-- Колонка 2: item 2 и 3 -->
        <div class="flex flex-col w-1/2 col-life-wrapper" :style="{ marginTop: column2Offset + 'px' }">
          <div
            v-for="i in [2, 3]"
            :ref="el => cardRefs[i] = el"
            :key="i"
            class="col-life"
            :style="{ paddingTop: '0px' }"
          >
            <div class="flex flex-row">
              <b>{{ translatedItems[i].title }}</b>
<!--              <h3>0{{ i + 1 }}.</h3>-->
            </div>
            <p>{{ translatedItems[i].desc }}</p>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-row life-cyclic justify-between">
        <!-- Desktop -->
        <div
          v-for="(item, i) in translatedItems"
          :ref="el => cardRefs[i] = el"
          :key="i"
          class="col-life"
          :style="{ paddingTop: i === 0 ? '0px' : `${offsets[i]}px` }"
        >
          <div class="flex flex-row">
            <b>{{ item.title }}</b>
<!--            <h3>0{{ i + 1 }}.</h3>-->
          </div>
          <p>{{ item.desc }}</p>
        </div>
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

const column2Offset = ref(0) // Новый offset для второго столбца (мобильного)
const mobileSvgHeight = ref(0)

const isMobile = ref(false)
const isTablet = ref(false)

const updateMobileFlag = () => {
    if (typeof window !== 'undefined') {
      isTablet.value = window.innerWidth <= 1024 && window.innerWidth > 641
      isMobile.value = window.innerWidth <= 640
    }
  }

const calculateOffsets = async () => {
  await nextTick()

  offsets.value = [0, 0, 0, 0]
  column2Offset.value = 0
  mobileSvgHeight.value = 0

  const width = window.innerWidth
  const isTablet = width <= 1024 && width > 641
  const isMobile = width <= 640

  console.log(isMobile.value)
  console.log(isTablet.value)

  if (isMobile) {
    offsets.value = [0, 0, 0, 0]
  } else if (isTablet) {
    // Mobile: высота блока 0 и 1 -> margin-top для колонки 2
    const col0 = cardRefs.value[0]
    const col1 = cardRefs.value[1]
    const col2 = cardRefs.value[2]
    const col3 = cardRefs.value[3]

    let totalHeight = 0
    let totalHeight2 = 0

    if (col0) {
      const children = col0.querySelectorAll('div, p')
      children.forEach(child => totalHeight += child.offsetHeight)
    }
    if (col1) {
      const children = col1.querySelectorAll('div, p')
      children.forEach(child => totalHeight += child.offsetHeight)
    }
    if (col2) {
      const children = col2.querySelectorAll('div, p')
      children.forEach(child => totalHeight2 += child.offsetHeight)
    }
    if (col3) {
      const children = col3.querySelectorAll('div, p')
      children.forEach(child => totalHeight2 += child.offsetHeight)
    }


    column2Offset.value = totalHeight + 24 // 24px — отступ между колонками
    mobileSvgHeight.value = totalHeight + totalHeight2
  } else {
    let acc = 0
    offsets.value = translatedItems.value.map((_, i) => {
      if (i === 0) return 0
      const prevCol = cardRefs.value[i - 1]
      if (!prevCol) return acc
      let textHeight = 0
      const children = prevCol.querySelectorAll('div, p')
      children.forEach(child => {
        textHeight += child.offsetHeight
      })
      acc += textHeight + 16
      return acc
    })
  }

  const lastColHeight = cardRefs.value[3]?.offsetHeight || 0
  if (isMobile) {
    svgHeight.value = Math.max(mobileSvgHeight.value, 400)
  }else{
    svgHeight.value = Math.max((offsets.value[3] || column2Offset.value) + lastColHeight, 400)
  }
}

onMounted(async () => {
  calculateOffsets(window)
  updateMobileFlag(window)

  await nextTick()

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
    resizeTimeout = setTimeout(() => {
      updateMobileFlag()
      calculateOffsets()
    }, 200)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateOffsets)
})
</script>

<style scoped>
.life-cyclic > .col-life {
  border-right: 2px solid rgba(255,255,255,0.16);
  min-width: 0;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Текст начинается сверху */
  align-items: flex-start;
  padding: 0 3px 0 15px;
  background: transparent;
  position: relative;
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.7s cubic-bezier(0.37,0,0.16,1);
}
.life-cyclic > .col-life:first-child { border-left: 2px solid rgba(255,255,255,0.16); }

.life-cyclic-mobile > .col-life-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.life-cyclic-mobile .col-life b{
 margin-bottom: 0;
 font-size: 1.3rem;
 line-height: 1;
}

.life-cyclic-mobile .col-life p{
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.col-life h3 {
  color: #fff;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 4px;
}
.col-life b {
  display: block;
    font-size: 1.8rem;
    line-height: 29px;
    margin-bottom: 10px;
    font-weight: 600;
}
.col-life p {
  font-size: 1.2rem;
    line-height: 1;
    font-weight: 500;
    color: #ffffff;
    margin-top: 1rem;
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
  /*stroke: transparent; /* Полностью скрывает линию до анимации */
}

.svg-path {
  padding-top: 3rem;
  padding-bottom: 10rem;
}

/* SVG анимация пути */
@keyframes drawPath {
  0% {
    stroke-dashoffset: 1600;
    stroke-opacity: 0;
  }
  20% {
    stroke-opacity: 0.3;
  }
  100% {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
}

.svg-path-animated {
  stroke-dasharray: 1600;
  stroke-dashoffset: 1600;
  animation: drawPath 4s ease-in-out forwards;
}

/* Тень с задержкой */
.svg-path-shadow {
  animation-delay: 0.1s; /* Отставание 0.1 секунды */
}

/* Responsive styles for life-cyclic container and columns */
@media (max-width: 1024px) {
  .svg-path[data-v-3094d0e0] {
    padding-bottom: unset;
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
