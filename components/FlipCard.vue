<template>
  <div class="card-wrapper" @click="flipped = !flipped">
    <div class="flip-card" :class="{ flipped }">
      <div class="card-face card-front">
        <h3 class="colorized-text">{{ frontTitle }}</h3>
        <p>{{ frontText }}</p>
      </div>
      <div class="card-face card-back">
        <h3>{{ backTitle }}</h3>
        <p>{{ backText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const flipped = ref(false)

defineProps({
  frontTitle: String,
  frontText: String,
  backTitle: String,
  backText: String
})
</script>

<style scoped>
.card-wrapper {
  perspective: 1000px;
  width: 100%;
  height: 200px;
  cursor: pointer;
}

.flip-card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1.4s cubic-bezier(.5,.42,.4,1.25);
  will-change: transform;
}

.flip-card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  border: 1px solid rgba(255, 255, 255, 0.1); /* прозрачная рамка */
  color: white;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Передняя сторона — серый фон */
.card-front {
  background-color: #1d1d1d;
}

/* Задняя сторона — синий фон */
.card-back {
  background-color: rgb(21,134,244);
  transform: rotateY(180deg);
}
</style>
