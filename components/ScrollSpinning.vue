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

function updateTopMargin() {
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
}

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
  if (!isVisible) return; // Не применяем эффекты, если элемент ещё не видим

  const scrollTop = window.scrollY;
  const effectiveScroll = Math.max(0, scrollTop - startScrollY); // Локальный скролл относительно входа в viewport

  let angle = -60 + effectiveScroll * 0.03; // Вращение начинается с 0
  const scaleFactor = 0.00025; // Коэффициент увеличения (настройте)
  const translateFactor = 0.05; // Коэффициент перемещения (настройте)
  let scale = 1 + (effectiveScroll * scaleFactor); // Масштаб начинается с 1
  let translate = 70 - (effectiveScroll * translateFactor); // Смещение начинается с 1
  scale = Math.min(scale, 1.3); // Опционально: лимит (верните, если нужно)
  angle = Math.min(angle, 30); // Опционально: лимит (верните, если нужно)
  translate = Math.max(translate, 10); // Опционально: лимит (верните, если нужно)

  document.documentElement.style.setProperty('--bg-translate', `-${translate}%`);
  document.documentElement.style.setProperty('--bg-rotate', `${angle}deg`);
  document.documentElement.style.setProperty('--bg-scale', scale);

  

  // Для отладки: выводим в консоль
  console.log('Effective scroll:', effectiveScroll, 'Scale:', scale);
}

onMounted(() => {
  updateTopMargin();
  updateFontAndPadding();
  window.addEventListener('resize', () => {
    updateTopMargin();
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

@media (min-width: 1200px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
  }
}

@media (min-width: 1500px) {
  .scroll-rotate-container::before {
    width: 40vw;
    height: 40vw;
    /*top: 100%;*/
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
