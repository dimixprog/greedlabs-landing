<template>
  <div class="card-wrapper" @click="flipped = !flipped">
    <div class="flip-card" :class="{ flipped }">
      <div class="card-face card-front">
        <div style="width: 50%;">
          <h3 class="colorized-text">{{ frontTitle }}</h3>
          <p>{{ frontText }}</p>
        </div>
        <div class="image-block" :style="{ display: imgSrc ? 'block' : 'none' }">
          <img :src="imgSrc" :alt="frontTitle"/>
        </div>
        <div>
          <div class="plus">
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#1b1b1b"/>
              <rect x="46" y="25" width="8" height="50" fill="white"/>
              <rect x="25" y="46" width="50" height="8" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="card-face card-back">
        <div>
          <h3>{{ backTitle }}</h3>
          <p>{{ backText }}</p>
        </div>
        <div>
          <div class="plus">
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#1b1b1b"/>
              <rect x="25" y="46" width="50" height="8" fill="white"/>
            </svg>
          </div>
        </div>
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
  backText: String,
  imgSrc: String,
})
</script>

<style scoped>
.card-wrapper {
  perspective: 1000px;
  width: 100%;
  height: 350px;
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
  border-radius: 30px;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid rgba(255, 255, 255, 0.1); /* прозрачная рамка */
  color: white;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.card-face h3{
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 2%;
}

.card-face p{
  vertical-align: middle;
    color: #ffffff;
    font-size: 18px;
    font-family: 'Montserrat', Arial, sans-serif;
    line-height: 1.1;
    font-weight: 500;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
}

.card-face .image-block {
  width: 100%;
}

.plus{
  border-radius: 3000px 3000px 3000px 3000px;
  background-color: #1b1b1b;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}

/* Передняя сторона — серый фон */
.card-front {
  background-color: #222222;
}

/* Задняя сторона — синий фон */
.card-back {
  background-color: rgb(21,134,244);
  transform: rotateY(180deg);
}
</style>
