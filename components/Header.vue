<script setup>
import { useWindowSize } from '@vueuse/core'
const { t } = useI18n()
const { width } = useWindowSize()
const breakpoint = 768
</script>

<template>
  <header>
    <img src="~/public/greed_logo.svg" width="190" height="70" alt="greed_logo">

    <Dropout>
      <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">УСЛУГИ DEX</a>
      <a href="/market-making/1" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 pl-8">Anti-snipe protection</a>
      <a href="/market-making/2" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 pl-8">Управление объемом</a>
      <a href="/market-making/2" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 pl-8">Контроль цен</a>
      <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Запуск токена</a>
      <a href="/contact" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Услуги CEX</a>
      <a href="/market-making/1" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 pl-8">Управление ликвидностью</a>
      <a href="/market-making/2" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 pl-8">Листинг на CEXs</a>
      <a href="/market-making/2" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 pl-8">Оптимизация ордеров</a>
    </Dropout>

    <nav>
      <!-- <a>Market making</a> -->
      <a href="development">Разработка</a>
      <a href="consulting">Консалтинг</a>
      <a href="about">О нас</a>
      <a href="soon">Скоро</a>
    </nav>
    <div class="lang-switcher">
      en ru
    </div>
    <div class="contact us">Свяжитесь с нами</div>
    <!-- <p v-if="width < breakpoint">Mobile component</p>
        <p v-else >Desktop component</p> -->
  </header>
</template>

<style scoped>
header {

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 1623px;

  z-index: 1000;
  /* чтобы был выше других элементов */

  border-radius: 20px;


  max-height: 114px;
  /* background-color: rgba(255, 255, 255, 0.01);; */
  /* background-image: url("header_background.png"); */
  backdrop-filter: blur(50px)
}

header::before {
  content: "";
  position: absolute;
  inset: 0;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  /* прозрачная рамка */

  background-color: rgba(255, 255, 255, 0.03);
  /* прозрачный фон */

  z-index: -1;
  /* за содержимым */
}

nav {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

a {
  /* padding: 0.5rem 1rem; */
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}

a:hover {
  color: #1686f4;
}
</style>
