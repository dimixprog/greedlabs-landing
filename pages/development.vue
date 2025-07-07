<!-- pages/index.vue -->
<template>
  <div>

    <Hero class="flex justify-between items-center">
      <div>
        <h2 class="colorized-text">РАЗРАБОТКА</h2>
        <p>
          Мы поможем воплотить идеи в реальность,<br>
          доработать MVP, улучшить метрики. Разрабатываем Web3-утилиты,<br>
          Dapps, решения для CEX и DEX, и многое другое.<br>
          Мы вас ждём!
        </p>
        <button class="bg-[#1586F4] cursor-pointer
         transition-colors transition-border duration-200 ease-in-out
         shadow-[0_0_10px_rgb(21,134,244)]
         hover:shadow-[0_0_7px_rgb(21,134,244),0_0_13px_rgb(21,134,244),0_0_18px_rgb(21,134,244),0_0_50px_rgb(21,134,244)]
         px-6 py-3 text-lg rounded-2xl text-white font-semibold">Бесплатная консультация</button>
      </div>

      <Cubes3D />
    </Hero>

    <div class="services-container">
      <h2 class="text-4xl">НАШ СПЕКТР УСЛУГ</h2>

      <!-- Первая строка: 2 карточки -->
      <div class="grid grid-cols-2 gap-4 w-full mb-4">
        <FlipCard front-title="ДИЗАЙН" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
        <FlipCard front-title="РАЗРАБОТКА" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
      </div>

      <!-- Остальные: 3 карточки в строку -->
      <div class="grid grid-cols-3 gap-4 w-full">
        <FlipCard front-title="WEB3 - УТИЛИТЫ"
          front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
        <FlipCard front-title="DAPP" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
        <FlipCard front-title="WEBAPPS" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
      </div>
    </div>


    <h2 class="colorized-text text-4xl">Жизненный цикл проекта</h2>
    <hr />

    <div class="flex justify-between items-center">
      <ScrollSpinning />
      <div>
        <h3 class="colorized-text text-4xl pt-32">Анализ</h3>
        <p class="pb-32 text-2xl">
          Проработка бизнес-логики проекта,
          описание его деталей и системы техническим языком.<br>
          Первая и важнейшая стадия, которая определяет весь дальнейший ход проекта.
        </p>

        <h3 class="colorized-text text-4xl">Разработка</h3>
        <p class="pb-32 text-2xl">
          На этой стадии ваша идея воплощается в жизнь и вы можете наблюдать это в еженедельных отчетах.<br>
          Мы не только пишем код, но и готовим сервера, базы данных и всю систему в целом к использованию "в бою".
        </p>


        <h3 class="colorized-text text-4xl">Тестирование</h3>
        <p class="pb-32 text-2xl">
          Последняя, но не по значению, стадия, на которой мы проверяем насколько ваш проект готов в выпуску в свет.<br>
          Мы проводим целый ряд тестов для подтверждения качества и надежности.
        </p>
      </div>
    </div>



    <div class="tech-stack">
      <h2 class="colorized-text text-4xl">ТЕХНОЛОГИЧЕСКИЙ СТЕК</h2>
      <p>
        У нашей команды обширный стек и опыт работы.
        Мы не ограничены в языках и фреймворках, что позволяет нам использовать на каждом проекте наиболее оптимальный
        набор инструментов.
      </p>
      <div class="flex flex-row">
        <div class="colorized-text languages card w-full">
          <img class="self-center" src="/code_symbol.png" alt="code symbil" width="128" height="64">
          <p>Языки и фреймворки</p>
          <div class="grid grid-cols-3 gap-4">
            <img src="/logos/python.svg" alt="python logo" width="64" height="64">
            <img src="/logos/go.svg" alt="go logo" width="64" height="64">
            <img src="/logos/react.svg" alt="react logo" width="64" height="64">
            <img src="/logos/vue_js.svg" alt="vue js logo" width="64" height="64">
            <img src="/logos/js.svg" alt="JavaScript logo" width="64" height="64">
            <img src="/logos/node_js.svg" alt="Node.js logo" width="64" height="64">
          </div>
        </div>
        <div class="colorized-text languages card w-full">
          <p>Блокчейны</p>
          <div class="grid grid-cols-3 gap-4">
            <img src="/logos/etherium.svg" alt="etherium logo" width="64" height="64">
            <img src="/logos/blockchain2.svg" alt="go logo" width="64" height="64">
            <img src="/logos/blockchain3.svg" alt="react logo" width="64" height="64">
            <img src="/logos/blockchain4.svg" alt="vue js logo" width="64" height="64">
            <img src="/logos/blockchain5.svg" alt="JavaScript logo" width="64" height="64">
            <img src="/logos/blockchain6.svg" alt="Node.js logo" width="64" height="64">
          </div>
        </div>
      </div>
    </div>

    <div class="why-we py-12">
      <h2 class="colorized-text text-4xl">Почему мы?</h2>
      <hr>

      <div class="flex flex-row">
        <div>
          <h3 class="colorized-text">Высокое качество</h3>
          <p>Каждый день мы боремся за качество в вашем
            проекте: подбираем наиболее подходящие
            инструменты, проводим несколько этапов
            тестирования и применяем только лучшие практики.
          </p>
        </div>

        <div>
          <h3 class="colorized-text">Прозрачность</h3>
          <p>
            В процессе работы вы имеете возможность
            отслеживать задачи в реальном времени,
            а также получаете регулярные отчеты о работе и
            прогнозы по срокам.
          </p>
        </div>

        <div>
          <h3 class="colorized-text">Соответствие ожиданиям</h3>
          <p>
            Вся наша работа направлена на
            воплощение ваших идей в точности и в
            срок. На этапе анализа мы тщательно
            разбираем и согласовываем ваше видение
            проекта, а на этапе разработки мы
            согласовываем уже результаты и сроки.
          </p>
        </div>
      </div>
    </div>


    <div class="stat_container">
      <h3>НАШИ ДОСТИЖЕНИЯ</h3>
    </div>


    <h2 class="colorized-text">НАШИ КЕЙСЫ</h2>
    <p>
      Проекты которые прошли через GREED Labs
    </p>


    <div class="grid grid-cols-2 gap-5 justify-items-center">
      <div class="project">
        <h3 class="colorized-text">Рынок NFT</h3>
        <p>NFT – проекты в разных сетях и на разных мараетплейсах.</p>
        <Swiper :modules="[Navigation]" navigation loop slides-per-view="1" class="my-swiper">
          <SwiperSlide v-for="(img, idx) in images1" :key="idx">
            <img :src="img" class="slide-img" alt="slide" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="project">
        <h3 class="colorized-text">GameFi</h3>
        <p>Игровые проекты, работающие на базе рандомизатра и на реферальной системе.</p>
        <div class="slider"></div>
        <Swiper :modules="[Navigation]" navigation loop slides-per-view="1" class="my-swiper">
          <SwiperSlide v-for="(img, idx) in images2" :key="idx">
            <img :src="img" class="slide-img" alt="slide" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="project">
        <h3 class="colorized-text">Запуск токенов</h3>
        <p>Запуск токенов, организация пресейлов и разработка лаунчпадов и дэшбордов.</p>
        <div class="slider"></div>
        <Swiper :modules="[Navigation]" navigation loop slides-per-view="1" class="my-swiper">
          <SwiperSlide v-for="(img, idx) in images3" :key="idx">
            <img :src="img" class="slide-img" alt="slide" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="project">
        <h3 class="colorized-text">Сложные Web3-решения</h3>
        <p>Разработка аналитических инструментов, а также систем для бизнеса на базе блокчейн.</p>
        <div class="slider"></div>
        <Swiper :modules="[Navigation]" navigation loop slides-per-view="1" class="my-swiper">
          <SwiperSlide v-for="(img, idx) in images4" :key="idx">
            <img :src="img" class="slide-img" alt="slide" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>


  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
}

.my-swiper {
  width: 100%;
  max-width: 600px;
  height: 300px;
  /* Фиксированная высота — обязательно */
  margin: 20px auto;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
}
</style>



<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation'


// Список изображений
const images1 = [
  '/dev_slider_1/1.png',
  '/dev_slider_1/2.png',
  '/dev_slider_1/3.png',
]

const images2 = [
  '/dev_slider_2/1.png',
  '/dev_slider_2/2.png',
]

const images3 = [
  '/dev_slider_3/1.png',
  '/dev_slider_3/2.png',
  '/dev_slider_3/3.png',
  '/dev_slider_3/4.png',
  '/dev_slider_3/5.png',
  '/dev_slider_3/6.png',
]

const images4 = [
  '/dev_slider_4/1.png',
  '/dev_slider_4/2.webp',
  '/dev_slider_4/3.webp',
  '/dev_slider_4/4.png',
  '/dev_slider_4/5.webp',
  '/dev_slider_4/6.webp',
  '/dev_slider_4/7.png',
  '/dev_slider_4/8.png',
  '/dev_slider_4/9.png',
  '/dev_slider_4/10.png',
  '/dev_slider_4/11.png',
  '/dev_slider_4/12.png',
]
</script>
