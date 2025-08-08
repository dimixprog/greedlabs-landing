<template>
  <div id="scroll-rotate-container" class="scroll-rotate-container" ref="container">
    
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const container = ref(null); // Ссылка на DOM-элемент контейнера
let observer = null;
let startScrollY = 0; // Стартовая позиция скролла, когда элемент вошёл в viewport
let isVisible = false; // Флаг видимости

/*function updateTopMargin() {
  const maxWidth = 3000;
  const minWidth = 300;

  const maxHeight = 2000;
  const minHeight = 400;

  const minNegativePercent = 0; // минимальный отступ (%)
  const maxNegativePercent = 100; // максимальный отступ (%)

  const width = Math.max(minWidth, Math.min(maxWidth, window.innerWidth));
  const height = Math.max(minHeight, Math.min(maxHeight, window.innerHeight));

  const widthRatio = (width - minWidth) / (maxWidth - minWidth);
  const heightRatio = (height - minHeight) / (maxHeight - minHeight);

  // Итоговое значение: среднее между влиянием ширины и высоты
  const combinedRatio = (widthRatio + heightRatio) / 2;

  const percent = minNegativePercent + (maxNegativePercent - minNegativePercent) * combinedRatio;

  return percent;
  //document.documentElement.style.setProperty('--top-margin', `${percent}%`);
}*/

function updateFontAndPadding() {
  const maxWidth = 3000;
  const minWidth = 300;

  // Значения для H3
  const minFontH3 = 1.5; // rem
  const maxFontH3 = 3;   // rem

  const minPbH3 = 0.5;   // rem
  const maxPbH3 = 1.5;   // rem

  // Значения для P
  const minFontP = 1.2;  // rem
  const maxFontP = 1.8;  // rem

  const minPbP = 3;      // rem
  const maxPbP = 15;     // rem

  const width = Math.max(minWidth, Math.min(maxWidth, window.innerWidth));
  const ratio = (width - minWidth) / (maxWidth - minWidth);

  // Интерполяция значений
  const fontH3 = minFontH3 + (maxFontH3 - minFontH3) * ratio;
  const pbH3 = minPbH3 + (maxPbH3 - minPbH3) * ratio;

  const fontP = minFontP + (maxFontP - minFontP) * ratio;
  const pbP = minPbP + (maxPbP - minPbP) * ratio;

  const root = document.documentElement;

  root.style.setProperty('--fontH3', `${fontH3}rem`);
  root.style.setProperty('--pbH3', `${pbH3}rem`);

  root.style.setProperty('--fontP', `${fontP}rem`);
  root.style.setProperty('--pbP', `${pbP}rem`);
}

function onScroll() {
  if (!isVisible) return;

  if (startScrollY === null) {
    startScrollY = window.scrollY;
  }

  const scrollTop = window.scrollY;
  const effectiveScroll = Math.max(0, scrollTop - startScrollY);
  const width = window.innerWidth;

  // Коэффициенты по умолчанию
  let angleBase = -60;
  let angleFactor = 0.03;
  let scaleFactor = 0.00025;
  let translateFactor = 0.05;

  let maxAngle = 30;
  let maxScale = 1.3;
  let maxTranslate = 100; // 👈 максимум, насколько можем опустить вниз
  const initialTranslate = -70; // 👈 фиксированное начальное значение

  // Адаптация под ширину экрана
  if (width < 400) {
    angleFactor = 0.01;
    scaleFactor = 0.00015;
    translateFactor = 0.08;
    maxAngle = 10;
    maxScale = 1.1;
    maxTranslate = 180;
  } else if (width < 600) {
    angleFactor = 0.015;
    scaleFactor = 0.00018;
    translateFactor = 0.075;
    maxAngle = 15;
    maxScale = 1.15;
    maxTranslate = 160;
  } else if (width < 800) {
    angleFactor = 0.02;
    scaleFactor = 0.0002;
    translateFactor = 0.07;
    maxAngle = 20;
    maxScale = 1.2;
    maxTranslate = 150;
  } else if (width < 1100) {
    angleFactor = 0.05;
    scaleFactor = 0.0002;
    translateFactor = 0.2;
    maxAngle = 40;
    maxScale = 2;
    maxTranslate = 290;
  } else if (width < 1100) {
    angleFactor = 0.02;
    scaleFactor = 0.0002;
    translateFactor = 0.16;
    maxAngle = 20;
    maxScale = 1.2;
    maxTranslate = 250;
  } else if (width < 1200) {
    angleFactor = 0.025;
    scaleFactor = 0.00022;
    translateFactor = 0.13;
    maxAngle = 25;
    maxScale = 1.25;
    maxTranslate = 170;
  } else if (width < 1500) {
    angleFactor = 0.03;
    scaleFactor = 0.00025;
    translateFactor = 0.1;
    maxAngle = 30;
    maxScale = 1.3;
    maxTranslate = 130;
  } else if (width < 1600) {
    angleFactor = 0.032;
    scaleFactor = 0.00027;
    translateFactor = 0.075;
    maxAngle = 35;
    maxScale = 1.35;
    maxTranslate = 130;
  } else if (width < 1800) {
    angleFactor = 0.032;
    scaleFactor = 0.00027;
    translateFactor = 0.065;
    maxAngle = 35;
    maxScale = 1.35;
    maxTranslate = 90;
  } else if (width < 2000) {
    angleFactor = 0.032;
    scaleFactor = 0.00027;
    translateFactor = 0.055;
    maxAngle = 35;
    maxScale = 1.35;
    maxTranslate = 40;
  } else if (width < 2200) {
    angleFactor = 0.032;
    scaleFactor = 0.00027;
    translateFactor = 0.055;
    maxAngle = 35;
    maxScale = 1.35;
    maxTranslate = 30;
  } else if (width < 2400) {
    angleFactor = 0.032;
    scaleFactor = 0.00027;
    translateFactor = 0.055;
    maxAngle = 35;
    maxScale = 1.35;
    maxTranslate = 20;
  } else if (width < 2500) {
    angleFactor = 0.034;
    scaleFactor = 0.00028;
    translateFactor = 0.05;
    maxAngle = 38;
    maxScale = 1.38;
    maxTranslate = 15;
  } else if (width < 2800) {
    angleFactor = 0.035;
    scaleFactor = 0.00029;
    translateFactor = 0.045;
    maxAngle = 40;
    maxScale = 1.4;
    maxTranslate = -5;
  } else {
    angleFactor = 0.03;
    scaleFactor = 0.00025;
    translateFactor = 0.05;
    maxAngle = 30;
    maxScale = 1.3;
    maxTranslate = -10;
  }

  // Вычисления
  let angle = angleBase + effectiveScroll * angleFactor;
  let scale = 1 + (effectiveScroll * scaleFactor);
  let translate = initialTranslate + (effectiveScroll * translateFactor); // 👈 теперь вниз

  // Ограничения
  scale = Math.min(scale, maxScale);
  angle = Math.min(angle, maxAngle);
  translate = Math.min(translate, maxTranslate); // 👈 ограничение вниз

  // Применение в CSS
  document.documentElement.style.setProperty('--bg-translate', `${translate}%`);
  document.documentElement.style.setProperty('--bg-rotate', `${angle}deg`);
  document.documentElement.style.setProperty('--bg-scale', scale);

  // Отладка
  // console.log({ width, angle, scale, translate });
}


onMounted(() => {
  //updateTopMargin();
  window.addEventListener('resize', () => {
    //updateTopMargin();
    updateFontAndPadding();
  });

  // Настраиваем Intersection Observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible) {
        // Элемент вошёл в viewport — активируем
        isVisible = true;
        startScrollY = window.scrollY; // Фиксируем стартовую позицию
        onScroll(); // Применяем сразу
        console.log('Элемент вошёл в viewport! Старт эффектов.');
      }
      // Опционально: если вышел из viewport, можно сбросить isVisible = false;
    });
  }, {
    threshold: 1 // Активировать, когда 10% элемента видно (настройте от 0 до 1)
  });

  if (container.value) {
    observer.observe(container.value); // Начинаем наблюдать за контейнером
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Начальный вызов (если элемент уже видим)
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  if (observer) observer.disconnect(); // Очищаем observer
});
</script>

<style scoped>
.scroll-rotate-container {
  position: relative;
  padding: 100px 20px;
  min-height: 40vh;
  /*min-width: 600px;*/
}

/* Вращающийся и масштабируемый фон через before */
.scroll-rotate-container::before {
  content: "";
  position: absolute;
  top: 100%;/*var(--top-margin, 100%);*/ 
  left: 50%;
  width: 50vw; /* Начальный размер */
  max-width: 1200px;
  height: 50vw;
  max-height: 1200px;
  transform: translate(-50%, var(--bg-translate, -70%)) rotate(var(--bg-rotate, -60deg)) scale(var(--bg-scale, 1));
  background-image: url('/thing.png');
  background-size: contain;
  background-position: center;
  /* opacity: 0.2; */ /* Если нужно */
  z-index: 0;
  will-change: transform;
  pointer-events: none;
  transition: transform 0.1s ease-out; /* Плавность */
}

.text-content {
  position: relative;
  z-index: 1;
}

@media (max-width: 600px) {
  .scroll-rotate-container::before {
    width: 70vw;
    height: 70vw;
    max-width: 200px;
    max-height: 200px;
  }
}

@media (min-width: 300px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 30%;
  }
}

@media (min-width: 400px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 35%;
  }
}

@media (min-width: 600px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 40%;
  }
}

@media (min-width: 750px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 45%;
  }
}

@media (min-width: 800px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 50%;
  }
}

@media (min-width: 1000px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 55%;
  }
}

@media (min-width: 1200px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 65%;
  }
}

@media (min-width: 1500px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 70%;
  }
}

@media (min-width: 1700px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 75%;
  }
}

@media (min-width: 2000px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 80%;
  }
}

@media (min-width: 2300px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 85%;
  }
}

@media (min-width: 2500px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 90%;
  }
}

@media (min-width: 2700px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    top: 100%;
  }
}
</style>

<style>
.life-cycle h3{
  font-size: var(--fontH3, 3rem);
  padding-bottom: var(--pbH3, 1.5rem);
}
.life-cycle p{
  font-size: var(--fontP, 1.8rem);
  padding-bottom: var(--pbP, 15rem);
}
</style>
