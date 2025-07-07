<template>
  <div class="scroll-rotate-container">
    
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

function onScroll() {
  const scrollTop = window.scrollY
  const angle = scrollTop * 0.3
  document.documentElement.style.setProperty('--bg-rotate', `${angle}deg`)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.scroll-rotate-container {
  position: relative;
  padding: 100px 20px;
  overflow: hidden;
  min-height: 400px;
  min-width: 600px;
}

/* вращающийся фон через before */
.scroll-rotate-container::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%) rotate(var(--bg-rotate, 0deg));
  background-image: url('/thing.png');
  background-size: cover;
  background-position: center;
  /* opacity: 0.2; */
  z-index: 0;
  will-change: transform;
  pointer-events: none;
}

.text-content {
  position: relative;
  z-index: 1;
}
</style>
