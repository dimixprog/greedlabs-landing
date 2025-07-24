<!-- pages/development.vue -->
<template>
  <div>
    <Hero id="development" class="grid grid-cols-7 justify-between items-center">
      <div class="col-span-4">
        <h2 class="colorized-text">РАЗРАБОТКА</h2>
        <p>
          Мы поможем воплотить идеи в реальность,<br>
          доработать MVP, улучшить метрики. Разрабатываем Web3-утилиты,<br>
          Dapps, решения для CEX и DEX, и многое другое.<br>
          Мы вас ждём!
        </p>
        <ConsultButton />
      </div>

      <Cubes3D  class="col-span-3 m-auto"/>
    </Hero>

    <div class="services-container">
      <h2 class="text-services">НАШ СПЕКТР УСЛУГ</h2>

      <!-- Первая строка: 2 карточки -->
      <div class="grid grid-cols-2 gap-8 w-full mb-8">
        <FlipCard front-title="ДИЗАЙН" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
        <FlipCard front-title="РАЗРАБОТКА" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
      </div>

      <!-- Остальные: 3 карточки в строку -->
      <div class="grid grid-cols-3 gap-8 w-full">
        <FlipCard front-title="WEB3 - УТИЛИТЫ"
          front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
        <FlipCard front-title="DAPP" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
        <FlipCard front-title="WEBAPPS" front-text="Разработка дизайна и графики: сайты, приложения, иконки и тд."
          back-text="Графика и дизайн – это лицо любого проекта. Он придает проекту уникальный стиль и помогает продавать." />
      </div>
    </div>


    <h2 class="colorized-text mt-24 mb-24">Жизненный цикл проекта</h2>
    <hr />

    <div class="flex justify-between items-center life-cycle-cards">
      <ScrollSpinning />
      <div class="life-cycle">
        <h3 class="pt-32">Анализ</h3>
        <p>
          Проработка бизнес-логики проекта,
          описание его деталей и системы техническим языком.<br>
          Первая и важнейшая стадия, которая определяет весь дальнейший ход проекта.
        </p>

        <h3>Разработка</h3>
        <p>
          На этой стадии ваша идея воплощается в жизнь и вы можете наблюдать это в еженедельных отчетах.<br>
          Мы не только пишем код, но и готовим сервера, базы данных и всю систему в целом к использованию "в бою".
        </p>


        <h3>Тестирование</h3>
        <p>
          Последняя, но не по значению, стадия, на которой мы проверяем насколько ваш проект готов в выпуску в свет.<br>
          Мы проводим целый ряд тестов для подтверждения качества и надежности.
        </p>
      </div>
    </div>



    <div class="tech-stack">
      <h2 class="colorized-text">ТЕХНОЛОГИЧЕСКИЙ СТЕК</h2>
      <p>
        У нашей команды обширный стек и опыт работы.
        Мы не ограничены в языках и фреймворках, что позволяет нам использовать на каждом проекте наиболее оптимальный
        набор инструментов.
      </p>
      <div class="flex flex-row tech-stack-cards">
        <div class="languages card w-full">
          <img class="colorized-text self-center" src="/code_symbol.png" alt="code symbil" width="256">
          <p class="colorized-text ">Языки и фреймворки</p>
          <div class="grid grid-cols-3 gap-8 items-center place-items-center">
            <img src="/logos/python.svg" alt="python logo" width="64" height="64">
            <img src="/logos/go.svg" alt="go logo" width="179" height="64">
            <img src="/logos/react.svg" alt="react logo" width="74" height="64">
            <img src="/logos/vue_js.svg" alt="vue js logo" width="74" height="64">
            <img src="/logos/js.svg" alt="JavaScript logo" width="74" height="64">
            <img src="/logos/node_js.svg" alt="Node.js logo" width="74" height="64">
          </div>
        </div>
        <div class="languages card w-full">
          <img class="colorized-text self-center" src="/bridge_symbol.png" alt="code symbil" width="128">
          <p class="colorized-text ">Блокчейны</p>
          <div class="grid grid-cols-3 gap-8 items-center place-items-center">
            <img src="/logos/etherium.svg" alt="etherium logo" width="44" height="64">
            <img src="/logos/solana.svg" alt="solana logo" width="84" height="64">
            <img src="/logos/binance.svg" alt="binance logo" width="64" height="64">
            <img src="/logos/blockchain4.svg" alt="vue js logo" width="64" height="64">
            <img src="/logos/toncoin.svg" alt="toncoin logo" width="84" height="64">
            <img src="/logos/tron.svg" alt="tron logo" width="84" height="64">
          </div>
        </div>
      </div>
    </div>

    <div class="why-we py-12">
      <h2 class="colorized-text mt-24 mb-16">Почему мы?</h2>
      <hr>

      <div class="why-we-cards grid grid-cols-3 gap-8 pt-16">
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


    
      <div id="stat" ref="statBlock" class="stat_container border border-gray-300 p-4 rounded-[4rem] flex flex-col pt-[60px] gap-4">
        <div class="flex flex-row justify-around">
          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='10' :duration='1' suffix='K+'/></b>
            <p>{{ $t("index.clients_dex_title") }}</p>
          </div>

          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='50' :duration='1' suffix='+'/></b>
            <p>{{ $t("index.clients_project_title") }}</p>
          </div>

          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='400' :duration='1' suffix='K+'/></b>
            <p>{{ $t("index.clients_users_title") }}</p>
          </div>
        </div>
        <div class="self-center">
          <h2>НАШИ ДОСТИЖЕНИЯ</h2>
        </div>
      </div>

    <div id="cases">
      <h2 class="colorized-text cases-title">НАШИ КЕЙСЫ</h2>
      <p class="cases-desc">
        Проекты которые прошли через GREED Labs
      </p>
    
      <div class="cases-block-cards grid grid-cols-2 gap-5 justify-items-center">
        <div class="project">
          <h3 class="colorized-text">Рынок NFT</h3>
          <p>{{ $t("dev.cases_nft_desc") }}</p>
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


  </div>
</template>

<style scoped>
h2 {
    font-size: 50px;
    font-weight: 700;
}

#development::before{
  height: 60rem;
  border-width: 5px;
}

.life-cycle h3{
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 1.5rem;
}

.life-cycle p{
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;
  padding-bottom: 12rem;
}

.tech-stack h2{
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 1.5rem;
  text-align: center;
}

.tech-stack p{
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 500;
  padding-bottom: 3rem;
  text-align: center;
  max-width: 60%;
  margin: 0 auto;
}

.languages{
  padding-bottom: 3rem;
}

.languages .self-center{
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.languages p{
  font-size: 2rem;
  font-weight: 700;
}

.why-we h3{
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 1rem;
}

.why-we p{
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
}

#stat h2 {
  vertical-align: middle;
  color: #ffffff;
  font-size: 3rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  line-height: 1.1;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

#stat p {
  vertical-align: middle;
  color: #ffffff;
  font-size: 2rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  text-align: center;
}

#stat b {
  vertical-align: middle;
  color: #ffffff;
  font-size: 128px; /* Fixed max */
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}

#cases{
  margin-top: 5rem;
}

#cases .cases-title{
  text-align: center;
}

#cases .cases-desc{
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 5rem;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
}

.project h3{
  font-size: 2rem;
  font-weight: 700;
}

.project p{
  font-size: 1.3rem;
  color: #787878;
  font-weight: 500;
  text-align: center;
}

.my-swiper {
  width: 100%;
  max-width: 800px;
  height: 500px;
  /* Фиксированная высота — обязательно */
  margin: 20px auto;
}

.my-swiper .swiper-slide{
      padding: 1rem;
    background-color: #292929;
    border-radius: 2rem;
}
.my-swiper .swiper-slide img{
    border-radius: 2rem;
}

.swiper-button-prev, .swiper-button-next{
    background-color: #787878;
}

.my-swiper .swiper-button-prev{

}

.my-swiper .swiper-button-next{

}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
}

.text-services{
  vertical-align: middle;
  color: #ffffff;
  font-size: 300%;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.1;
  font-weight: 700;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  color: #ffffff;
  text-align: center;
  z-index: 3;
  padding-top: 3%;
  padding-bottom: 3%;
}

@media (min-width: 2241px) {
  #development::before {
    height: 70rem;
  }
}

@media (max-width: 1905px) {
.cases-block-cards{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: 1648px) and (max-width: 2240px) {
  #development::before {
    height: 60rem;
  }
}

@media (min-width: 1388px) and (max-width: 1647px) {
  #development::before {
    height: 50rem;
  }
}

@media (max-width: 1387px) {
  .services-container div:last-child{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .life-cycle-cards{
    flex-direction: column;
  }
  .why-we-cards{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: 1212px) and (max-width: 1387px) {
  #development::before {
    height: 40rem;
  }
}

@media (min-width: 1025px) and (max-width: 1211px) {
  #development::before {
    height: 40rem;
  }
}

@media (max-width: 1024px) {
  .hero-media-container video {
    max-width: 100%;
    width: 100%;
  }
  .hero{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .hero div{
    grid-column: span 2 / span 2;
  }
  #development .hero-text-container{
    padding-left: unset;
  }
  #development div:first-child { order: 1; }
  #development div:last-child { order: -1; } 
}

@media (max-width: 968px) {
  .services-container div{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .services-container div:last-child{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .tech-stack-cards, .why-we-cards, .cases-block-cards{
    flex-direction: column;
  }
}

/* Планшеты (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  #development::before {
    height: 40rem;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  #development::before {
    height: 65rem;
  }
}

/* Mobile devices (max-width: 640px) */
@media (max-width: 640px) {
  h2 {
    font-size: 28px;
  }
  p {
    font-size: 20px;
  }
  #development::before{
    height: 60rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 18px;
  }
}
</style>



<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
//import Vue3Autocounter from 'vue3-autocounter'

import { ref, onMounted } from 'vue'

const statBlock = ref(null)
const hoursCounter = ref(null)
const projectsCounter = ref(null)
const linesCodeCounter = ref(null)

// Запуск анимации блока и автосчётчика при попадании блока в зону видимости
onMounted(() => {
  const animatedEls = statBlock.value.querySelectorAll('.stat-item, .fadeup_block')
  animatedEls.forEach(el => {
    el.classList.remove('fadeInUp')
    el.style.opacity = 0
    el.style.transform = 'translateY(70px)'
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animatedEls.forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('fadeInUp')
            }, idx * 150)
          })
          if (hoursCounter.value) hoursCounter.value.start()
          observer.unobserve(statBlock.value)
          if (projectsCounter.value) projectsCounter.value.start()
          observer.unobserve(statBlock.value)
          if (linesCodeCounter.value) linesCodeCounter.value.start()
          observer.unobserve(statBlock.value)
        }
      })
    },
    { threshold: 0.4 }
  )
  observer.observe(statBlock.value)
})

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
