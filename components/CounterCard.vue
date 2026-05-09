<template>
  <div ref="counterBlock">
    <!-- SSR fallback: visible to scrapers and before hydration -->
    <span v-if="!isMounted">{{ prefix }}{{ endAmount }}{{ suffix }}</span>
    <vue3-autocounter
      v-else
      ref="counter"
      :startAmount="Number(startAmount)"
      :endAmount="Number(endAmount)"
      :duration="Number(duration)"
      :prefix="prefix"
      :suffix="suffix"
      :decimals="0"
      :autoinit="false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Vue3Autocounter from 'vue3-autocounter'

const counterBlock = ref(null)
const counter = ref(null)
const isMounted = ref(false)

defineProps({
  startAmount: [String, Number],
  endAmount: [String, Number],
  duration: [String, Number],
  prefix: { type: String, default: '' },
  suffix: [String]
})

onMounted(() => {
  isMounted.value = true
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (counter.value) counter.value.start()
            observer.unobserve(counterBlock.value)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(counterBlock.value)
  })
})
</script>
