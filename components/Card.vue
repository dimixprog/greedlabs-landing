<template>
  <div class="card-wrapper" @click="flipped = !flipped">
    <div class="flip-card" :class="{ flipped }">
      <div class="card-face">
        <div :class="{ 'text-bottom': text_bottom }">
          <h3 class="colorized-text" :style="{ wordSpacing: title_wrap ? '100vw' : 'normal' }">{{ title }}</h3>
          <p :style="{ wordSpacing: text_wrap ? '100vw' : 'normal' }">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const flipped = ref(false)

defineProps({
  title: String,
  text: String,
  title_wrap: Boolean,
  text_wrap: Boolean,
  text_bottom: Boolean,
})
</script>

<style scoped>
.card-wrapper {
  perspective: 1000px;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.flip-card{
  height: 350px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1.4s cubic-bezier(.5,.42,.4,1.25);
  will-change: transform;
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
  background-color: #222222;
  border: 2px solid rgb(70 70 70 / 10%);
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

/* Передняя сторона — серый фон */
.card-front {
  background-color: #222222;
}

.text-bottom{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 640px) {
  .card-wrapper {
    margin-left: 6%;
    margin-right: 6%;
    width: auto;
    height: 250px;
    min-height: 250px;
    grid-row: unset;
  }

  .flip-card{
    height: 250px;
  }

  .card-face {
    min-height: 250px;
    padding: 15px;
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
    font-size: 1rem;
  }

  .card-face p {
    font-size: 0.8rem;
  }
}
</style>
