<template>
  <div class="card-wrapper" @click="toggleFlip">
    <div class="flip-card" :class="{ shrinking: shrinking, flipped: showBack }">
      <div class="card-face card-front" v-show="!showBack">
        <div style="width: 50%;">
          <h3 class="colorized-text">{{ frontTitle }}</h3>
          <p>{{ frontText }}</p>
        </div>
        <div class="image-block" :style="{ display: imgSrc ? 'block' : 'none' }">
          <img :src="imgSrc" :alt="frontTitle"/>
        </div>
      </div>
      <div class="card-face card-back" v-show="showBack">
        <div>
          <h3>{{ backTitle }}</h3>
          <p>{{ backText }}</p>
        </div>
      </div>
    </div>
    <!-- Значок независимый, поверх карточки -->
    <div class="icon-overlay">
      <svg width="54" height="54" viewBox="0 0 54 54" preserveAspectRatio="meet" xmlns="http://www.w3.org/2000/svg" class="icon-svg" :class="{ minus: flipped }">
        <circle cx="27" cy="27" r="27" fill="#1b1b1b"/> <!-- Черный фон (круг) -->
        <rect class="horizontal" x="13.5" y="25" width="27" height="4" fill="white" />
        <rect class="vertical" x="25" y="13.5" width="4" height="27" fill="white" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const flipped = ref(false)
const shrinking = ref(false)
const showBack = ref(false)

const toggleFlip = () => {
  flipped.value = !flipped.value
  shrinking.value = true; // Start X-shrink
  setTimeout(() => {
    showBack.value = !showBack.value; // Switch side (color change)
    shrinking.value = false; // Start X-expand
  }, 300); // Half of 1.2s
}

defineProps({
  frontTitle: String,
  frontText: String,
  backTitle: String,
  backText: String,
  imgSrc: String,
})
</script>

<style scoped>
.card-wrapper {
  perspective: 1000px;
  width: 100%;
  height: 250px;
  cursor: pointer;
  position: relative; /* Для позиционирования overlay */
  min-height: 250px;
}

.flip-card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* Half duration for shrink/expand */
  will-change: transform;
  transform-origin: center center; /* Compress to center */
}

.flip-card.shrinking {
  transform: scaleX(0); /* Shrink only on X-axis (sides to center) */
}

.flip-card:not(.shrinking) {
  transform: scaleX(1); /* Expand from center */
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  backface-visibility: hidden;
  min-height: 250px;
}

.card-face h3 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 2%;
}

.card-face p {
  vertical-align: middle;
  color: #ffffff;
  font-size: 1.7rem;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.1;
  font-weight: 500;
}

.card-face .image-block {
  width: 100%;
}

/* Передняя сторона — серый фон */
.card-front {
  background-color: #222222;
}

/* Задняя сторона — синий фон */
.card-back {
  background-color: rgb(21,134,244);
  padding-right: 15%;
}

/* Независимый оверлей для значка (поверх карточки, не flips) */
.icon-overlay {
  position: absolute;
  top: 20px; /* Adjust position as needed, e.g., from video */
  right: 20px;
  z-index: 10; /* Above card */
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Анимация + to - (visible during flip, + on front, - on back) */
.icon-svg .horizontal,
.icon-svg .vertical {
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.icon-svg.minus .vertical {
  transform: rotate(90deg); /* + to - during flip */
}

.icon-svg.minus .horizontal {
  transform: rotate(180deg); /* Full transition effect as in video */
}

@media (min-width: 2000px) {
  .card-wrapper {
    height: 550px;
  }
}

@media (min-width: 1024px) {
  .icon-overlay svg{
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 640px) {
  .card-wrapper {
    margin-left: 6%;
    margin-right: 6%;
    width: auto;
    height: 250px;
    min-height: 250px;
  }
  .card-face {
    min-height: 250px;
  }

  .card-face h3 {
    font-size: 1.5rem;
  }

  .card-face p {
    font-size: 1.2rem;;
  }
}

@media (max-width: 480px) {
  .card-face h3 {
    font-size: 1.3rem;
  }

  .card-face p {
    font-size: 1rem;;
  }
}
</style>
