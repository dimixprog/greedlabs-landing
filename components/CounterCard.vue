<template>
  <div ref="counterBlock">
    <vue3-autocounter
      ref="counter"
      :startAmount="Number(startAmount)"
      :endAmount="Number(endAmount)"
      :duration="Number(duration)"
      prefix=""
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

// Корректно типизируем пропсы (числовые значения)
defineProps({
  startAmount: [String, Number],
  endAmount: [String, Number],
  duration: [String, Number],
  suffix: [String]
})

onMounted(() => {
  // Запустить счётчик, если блок появляется в зоне видимости
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
