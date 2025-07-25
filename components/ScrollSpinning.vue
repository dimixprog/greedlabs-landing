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

function onScroll() {
  if (!isVisible) return; // Не применяем эффекты, если элемент ещё не видим

  const scrollTop = window.scrollY;
  const effectiveScroll = Math.max(0, scrollTop - startScrollY); // Локальный скролл относительно входа в viewport

  const angle = effectiveScroll * 0.3; // Вращение начинается с 0
  const scaleFactor = 0.001; // Коэффициент увеличения (настройте)
  let scale = 1 + (effectiveScroll * scaleFactor); // Масштаб начинается с 1
  // scale = Math.min(scale, 2); // Опционально: лимит (верните, если нужно)

  document.documentElement.style.setProperty('--bg-rotate', `${angle}deg`);
  document.documentElement.style.setProperty('--bg-scale', scale);

  // Для отладки: выводим в консоль
  console.log('Effective scroll:', effectiveScroll, 'Scale:', scale);
}

onMounted(() => {
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
    threshold: 0.1 // Активировать, когда 10% элемента видно (настройте от 0 до 1)
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
  overflow: hidden;
  min-height: 400px;
  min-width: 600px;
}

/* Вращающийся и масштабируемый фон через before */
.scroll-rotate-container::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px; /* Начальный размер */
  height: 600px;
  transform: translate(-50%, -50%) rotate(var(--bg-rotate, 0deg)) scale(var(--bg-scale, 1));
  background-image: url('/thing.png');
  background-size: cover;
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
</style>
