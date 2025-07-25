<template>
<div class="floating-bars-wrapper">
  <img src="/consulting_circle.svg" class="circle-bg" alt="Кольцо" />
  <div class="black-cube"></div>
  <div class="floating-bar bar1"></div>
  <div class="floating-bar bar2"></div>
  <div class="floating-bar bar3"></div>
</div>
</template>
<style scoped>
.floating-bars-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-bg {
  width: 100%;
  height: 100%;
  display: block;
  z-index: 3;
}

.black-cube{
  background-color: #1b1b1b;
    background-position: center center;
    bottom: 0;
    z-index: 2;
    width: 50%;
    height: 40%;
    position: absolute;
}

.floating-bar {
  position: absolute;
    width: 10%;
    height: 30%;
    background-color: #d9d9d9;
    border-radius: 2rem;
    box-shadow: 0 0 3px 1px #a3a3a3;
    z-index: 1;
    transform: translate(-50%, 100%);
}

.bar1 {
  left: 35%;
}

.bar2 {
  left: 50%;
}

.bar3 {
  left: 65%;
}

/* Анимация для всех баров — выезжают только на 80% высоты! */
.bar1 { animation: vertBarAnim 10s cubic-bezier(.33,.5,.66,1) infinite; animation-delay: 0s; }
.bar2 { animation: vertBarAnim 10s cubic-bezier(.33,.5,.66,1) infinite; animation-delay: 4s; }
.bar3 { animation: vertBarAnim 10s cubic-bezier(.33,.5,.66,1) infinite; animation-delay: 2s; }

/* Вариант: если хотите разброс по радиусу, задайте .bar1/.bar2/.bar3 разные left + top значения */

@keyframes vertBarAnim {
  0% {
    opacity: 1;
    transform: translate(-50%, 100%);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, 60%);
  }
  40%,
  60% {
    opacity: 1;
    transform: translate(-50%, 20%); /* максимум – бар виден на 80% своей длины */
  }
  80% {
    opacity: 1;
    transform: translate(-50%, 60%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 100%);
  }
}
</style>