<!-- pages/development.vue -->
<template>
  <div>
    <div class="hero-wrapper">
    <Hero id="development" class="grid grid-cols-7 justify-between items-center margin-container">
      <div class="col-span-4">
        <h2 class="colorized-text">{{ $t("dev.dev") }}</h2>
        <p>{{ $t("dev.dev_desc") }}</p>
        <ConsultButton />
      </div>

      <Cubes3D  class="col-span-3 m-auto"/>
    </Hero>
    </div>

    <div class="services-container margin-container">
      <h2 class="text-services">{{ $t("dev.our_services") }}</h2>

      <!-- Первая строка: 2 карточки -->
      <div class="grid grid-cols-2 gap-8 w-full mb-8">
        <FlipCard 
          :front-title="$t('dev.design')"
          :front-text="$t('dev.design_front')"
          :back-text="$t('dev.design_back')"
        />
        <FlipCard 
          :front-title="$t('dev.development')"
          :front-text="$t('dev.development_front')"
          :back-text="$t('dev.development_back')"
        />
      </div>

      <!-- Остальные: 3 карточки в строку -->
      <div class="grid grid-cols-3 gap-8 w-full">
        <FlipCard 
          :front-title="$t('dev.web3')"
          :front-text="$t('dev.web3_front')"
          :back-text="$t('dev.web3_back')"
        />
        <FlipCard 
          :front-title="$t('dev.dapp')"
          :front-text="$t('dev.dapp_front')"
          :back-text="$t('dev.dapp_back')"
        />
        <FlipCard 
          :front-title="$t('dev.web_apps')"
          :front-text="$t('dev.web_apps_front')"
          :back-text="$t('dev.web_apps_back')"
        />
      </div>
    </div>


    <h2 class="colorized-text mt-24 mb-24 margin-container">{{ $t("dev.life_cycle") }}</h2>
    <hr />

    <div class="grid grid-cols-7 justify-between items-start life-cycle-cards margin-container">
      <ScrollSpinning class="col-span-3"/>
      <div class="life-cycle col-span-4">
        <h3 class="pt-32">{{ $t("dev.analysis") }}</h3>
        <p>{{ $t("dev.analysis_desc") }}</p>

        <h3>{{ $t("dev.development_cycle") }}</h3>
        <p>{{ $t("dev.development_cycle_desc") }}</p>


        <h3>{{ $t("dev.testing") }}</h3>
        <p>{{ $t("dev.testing_desc") }}</p>
      </div>
    </div>

    <hr class="full-width-line">

    <div class="tech-stack margin-container">
      <h2 class="colorized-text">{{ $t("dev.tech_stack") }}</h2>
      <p>{{ $t("dev.tech_stack_desc") }}</p>
      <div class="flex flex-row tech-stack-cards">
        <div class="languages card w-full">
          <img class="colorized-text self-center" src="/code_symbol.png" alt="code symbil" width="256">
          <p class="colorized-text ">{{ $t("dev.lang_and_frameworks") }}</p>
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
          <p class="colorized-text ">{{ $t("dev.blockhain") }}</p>
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

<hr class="full-width-line">

    <div class="why-we pb-12 margin-container">
      <h2 class="colorized-text mt-24 mb-16">{{ $t("dev.who_we") }}</h2>

      <hr class="border-t-2 border-blue-400 my-4">

      <div class="why-we-cards grid grid-cols-3 gap-32 pt-16">
        <div>
          <h3 class="colorized-text">{{ $t("dev.hight_quality") }}</h3>
          <p>{{ $t("dev.hight_quality_desc") }}</p>
        </div>

        <div>
          <h3 class="colorized-text">{{ $t("dev.transparency") }}</h3>
          <p>{{ $t("dev.transparency_desc") }}</p>
        </div>

        <div>
          <h3 class="colorized-text">{{ $t("dev.expectations") }}</h3>
          <p>{{ $t("dev.expectations_desc") }}</p>
        </div>
      </div>
    </div>

<hr class="full-width-line">
    
      <div id="stat" class="stat_container p-4 flex flex-col gap-4 margin-container">
        <div id="statBlock" ref="statBlock" class="grid grid-cols-3 justify-around">
          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='10' :duration='1' suffix='K+'/></b>
            <p class="stat-item">{{ $t("dev.clients_dex_title") }}</p>
          </div>

          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='50' :duration='1' suffix='+'/></b>
            <p class="stat-item">{{ $t("dev.clients_project_title") }}</p>
          </div>

          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='400' :duration='1' suffix='K+'/></b>
            <p class="stat-item">{{ $t("dev.clients_users_title") }}</p>
          </div>
        </div>
        <div class="self-center">
          <h2>{{ $t("dev.achievements") }}</h2>
        </div>
      </div>

    <div id="cases" class="margin-container">
      <h2 class="colorized-text cases-title">{{ $t("dev.cases") }}</h2>
      <p class="cases-desc">
        {{ $t("dev.cases_desc") }}
      </p>
    
      <div class="cases-block-cards grid grid-cols-2 gap-5 justify-items-center">
        <div class="project">
          <h3 class="colorized-text">{{ $t("dev.cases_nft") }}</h3>
          <p>{{ $t("dev.cases_nft_desc") }}</p>
          <Swiper :modules="[Navigation]" navigation loop slides-per-view="1" class="my-swiper">
            <SwiperSlide v-for="(img, idx) in images1" :key="idx">
              <img :src="img" class="slide-img" alt="slide" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="project">
          <h3 class="colorized-text">{{ $t("dev.cases_gamefi") }}</h3>
          <p>{{ $t("dev.cases_gamefi_desc") }}</p>
          <div class="slider"></div>
          <Swiper :modules="[Navigation]" navigation loop slides-per-view="1" class="my-swiper">
            <SwiperSlide v-for="(img, idx) in images2" :key="idx">
              <img :src="img" class="slide-img" alt="slide" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="project">
          <h3 class="colorized-text">{{ $t("dev.cases_starts_tokens") }}</h3>
          <p>{{ $t("dev.cases_starts_tokens_desc") }}</p>
          <div class="slider"></div>
          <Swiper :modules="[Navigation]" navigation loop slides-per-view="1" class="my-swiper">
            <SwiperSlide v-for="(img, idx) in images3" :key="idx">
              <img :src="img" class="slide-img" alt="slide" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="project">
          <h3 class="colorized-text">{{ $t("dev.cases_web3") }}</h3>
          <p>{{ $t("dev.cases_web3_desc") }}</p>
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

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
//import Vue3Autocounter from 'vue3-autocounter'

import { ref, onMounted, nextTick } from 'vue'

const statBlock = ref(null)

onMounted(() => {
  nextTick(() => {
    // Находим все <p> внутри statBlock с классом stat-item — только они будут анимироваться
    const animatedPs = statBlock.value.querySelectorAll('.stat-item')

    // Скрываем их изначально
    animatedPs.forEach(el => {
      el.classList.remove('fadeInUp')
      el.style.opacity = '0'
      el.style.transform = 'translateY(70px)'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            //показываем
            animatedPs.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('fadeInUp')
              }, idx)
            })
            observer.unobserve(statBlock.value)
          }
        })
      },
      { threshold: 0.8 }
    )

    if (statBlock.value)
      observer.observe(statBlock.value)
  })
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

<style scoped>
h2 {
    font-size: 4rem;
    font-weight: 700;
}

.hero-wrapper {
  padding-top: 6%;
  background-image: url("/hero_background.webp");

  background-color: rgba(17, 17, 17, 1.0);
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  border-image: linear-gradient(to right, rgba(52, 251, 255, 1) 0%, rgba(21, 134, 244, 1) 100%) 1;
    border-style: solid;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-width: 5px;
}
.hero-wrapper .hero{
  padding-top: 0;
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

.full-width-line{
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 8rem;
}

.why-we h3{
  font-size: 2.7rem;
  font-weight: 700;
  padding-bottom: 1.5rem;
}

.why-we p{
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

#stat{
  /*padding-top: 8rem;*/
}

#stat h2 {
  vertical-align: middle;
  color: #ffffff;
  font-size: 3.3rem;
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
  font-size: 3rem;
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
  font-size: 12rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}


#statBlock{
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.stat_container{
  border: 1px solid #ffffff;
  padding: 2rem;
  border-radius: 7rem;
}

.stat-item {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 1s cubic-bezier(0.4,0,0.2,1), transform 1s cubic-bezier(0.4,0,0.2,1);
}

.fadeInUp {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1),
              transform 0.6s cubic-bezier(0.4,0,0.2,1);
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
  max-width: 250px;
  height: 150px;
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

@media (min-width: 780px) {
  .my-swiper {
    max-width: 650px;
    height: 450px;
  }
}

@media (min-width: 1024px) {
  .my-swiper {
    max-width: 350px;
    height: 200px;
  }
}

@media (min-width: 1080px) {
  .my-swiper {
    max-width: 450px;
    height: 250px;
  }
}

@media (min-width: 1280px) {
  .my-swiper {
    max-width: 550px;
    height: 300px;
  }
}

@media (min-width: 1480px) {
  .my-swiper {
    max-width: 650px;
    height: 350px;
  }
}

@media (min-width: 1750px) {
  .my-swiper {
    max-width: 750px;
    height: 400px;
  }
}

@media (min-width: 2000px) {
  .my-swiper {
    max-width: 550px;
    height: 350px;
  }
}

@media (min-width: 2241px) {
  #development::before {
    height: 70rem;
  }
}

@media (min-width: 2250px) {
  .my-swiper {
    max-width: 650px;
    height: 400px;
  }
}

@media (min-width: 2580px) {
  .my-swiper {
    max-width: 750px;
    height: 450px;
  }
}

@media (min-width: 2950px) {
  .my-swiper {
    max-width: 850px;
    height: 500px;
  }
}

@media (min-width: 1648px) and (max-width: 2240px) {
  #development::before {
    height: 60rem;
  }
}

@media (max-width: 2000px) {
  h2 {
    font-size: 50px;
    font-weight: 700;
  }
  .tech-stack h2{
    font-size: 4rem;
  }

  .tech-stack p{
    font-size: 2rem;
  }
  .why-we h3{
    font-size: 2rem;
    padding-bottom: 1rem;
  }

  .why-we p{
    font-size: 1.2rem;
  }
}

@media (min-width: 1387px) and (max-width: 2400px) {
  #stat b {
    font-size: 120px;
  }

  #stat p {
    font-size: 32px;
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
  #stat b {
    font-size: 80px;
  }

  #stat p {
    font-size: 24px;
  }
}

@media (min-width: 1025px) and (max-width: 1211px) {
  #development::before {
    height: 40rem;
  }
  #statBlock b {
        font-size: 80px;
    }
    
  #stat p {
    font-size: 2rem;
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
  #statBlock b {
      font-size: 80px;
  }
  .cases-block-cards{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
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
  #statBlock b {
    font-size: 3rem;
  }
  #statBlock p {
    font-size: 2rem;
  }
}

@media (max-width: 860px){
  .my-swiper {
    width: 100%;
    max-width: 600px;
    height: 400px;
}
.tech-stack h2[data-v-5205731b] {
    font-size: 2rem;
}
}

@media (min-width: 641px) and (max-width: 768px) {
  #development::before {
    height: 65rem;
  }
  #statBlock{
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-top: 0;
    padding-bottom: 0;
  }
  #statBlock b {
    font-size: 8rem;
  }
  #statBlock p {
    font-size: 3rem;
  }
}

@media (max-width: 660px){
  .my-swiper {
    max-width: 400px;
    height: 250px;
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
  
  #statBlock{
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-top: 0;
    padding-bottom: 0;
  }

  #statBlock b {
    font-size: 5rem;
  }

  #stat p {
    font-size: 2rem;
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
<style>
  .swiper-button-prev, .swiper-button-next{
    background-color: #363636;
    padding: 4%;
    border-radius: 50%;
  }

  .swiper-button-active{
    background-color: #20b1f8;
  }

  .my-swiper .swiper-button-prev{
    margin-left: 2%;
  }

  .my-swiper .swiper-button-prev::after{
    color: #2e677e;
  }

  .my-swiper .swiper-button-next{
    margin-right: 2%;
  }

  .my-swiper .swiper-button-next::after{
    color: #2e677e;
  }
</style>
