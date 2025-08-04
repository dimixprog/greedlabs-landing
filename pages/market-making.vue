<!-- pages/market-maker.vue -->
<template>
  <div>
    <div class="hero-wrapper">
    <Hero id="market_making" class="grid grid-cols-7 justify-between items-center margin-container">
      <div class="col-span-4">
        <h2 class="colorized-text">{{ $t("market_making.market_making") }}</h2>
        <p>{{ $t("market_making.market_making_desc") }}</p>
        <ConsultButton />
      </div>
      <CandlesCube class="col-span-3 m-auto"/>
    </Hero>
    </div>
    <div class="anchor"><span id="dex-services"></span></div>
    <Hero id="dex" class="grid grid-cols-7 justify-between items-center margin-container">
      <div class="col-span-4">
        <h2 class="colorized-text">{{ $t("market_making.dex") }}</h2>
        <p>{{ $t("market_making.dex_desc") }}</p>
        <ConsultButton />
      </div>
      <Fly3Cubes class="col-span-3 m-auto"/>
    </Hero>
    <div class="anchor"><span id="volume-management"></span></div>
    <div  id="volume" class="big-card mb-8 margin-container">
      <h3 class="colorized-text">{{ $t("market_making.volume_control") }}</h3>
      <p>{{ $t("market_making.volume_control_desc") }}</p>
      <div class="grid grid-cols-2 gap-8 w-full">
        <div class="empty-subcard">  
          <div style="width: 100%; height: 100%; position: relative;">
            <dotlottie-player src="https://lottie.host/647debde-c561-4abc-b40f-836b9e599645/UwFs2Ekisi.lottie" background="transparent" speed="1" direction="1" mode="normal" loop autoplay style="width: 100%; height: 100%;"></dotlottie-player>
          </div> 
        </div>
        <div class="empty-subcard">
          <div style="width: 100%; height: 100%; position: relative;">
            <dotlottie-player src="https://lottie.host/de2b8e7b-be61-4d12-84c1-c81296f1bbe4/lhVBuj5nra.lottie" background="transparent" speed="1" direction="1" mode="normal" loop autoplay style="width: 100%; height: 100%;"></dotlottie-player>
          </div> 
        </div>
      </div>
    </div>
    <div class="anchor"><span id="price-control"></span></div>
    <div class="anchor"><span id="anti-snipe"></span></div>
    <div class="grid grid-cols-2 gap-8 mb-8 margin-container">
      <FlipCard
        :front-title="$t('market_making.anti_snape')"
        :back-text="$t('market_making.anti_snape_desc')"
        img-src="/anti-snape.webp"
      />
      <FlipCard 
        :front-title="$t('market_making.control_prices')"
        :back-text="$t('market_making.control_prices_desc')"
        img-src="/control-prices.webp" 
      />
    </div>
    <div class="anchor"><span id="token-launch"></span></div>
    <Hero id="start_tokens" class="grid grid-cols-7 justify-between items-center margin-container">
      <div class="col-span-4">
        <h2 class="colorized-text">{{ $t("market_making.start_tokens") }}</h2>
        <p>{{ $t("market_making.start_tokens_desc") }}</p>
        <ConsultButton />
      </div>
      <div class="col-span-3 m-auto">
        <video style="object-fit: cover; width: 100%; height: 100%;" preload="auto" playsinline="" autoplay="" loop="" muted="">
          <source src="https://dl.dropboxusercontent.com/scl/fi/oslgex5k4x3u2if34l5uc/Plant.mp4?rlkey=d5o1jerjn26j0dsjbieisyjk6&amp;st=bk7tr4n6&amp;dl=0" type="video/mp4">
        </video>
      </div>
    </Hero>
    <div  id="prof-support" class="mb-8 margin-container">
      <h2 class="colorized-text">{{ $t("market_making.prof_support") }}</h2>
      <div class="flex justify-between items-center">
        <div class="w-full">
          <LifeCyclic />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1160 1" fill="none"> <line y1="0.5" x2="1160" y2="0.5" stroke="url(#paint0_linear_868_2555)"></line> <defs> <linearGradient id="paint0_linear_868_2555" x1="0" y1="6" x2="4640" y2="6" gradientUnits="userSpaceOnUse"> <stop stop-color="#34FBFF"></stop> <stop offset="1" stop-color="#1586F4"></stop> </linearGradient> </defs> </svg>
          <div class="work-with-text">{{ $t("market_making.work_with") }}</div>
          <Vue3Marquee class="marquee" :clone="true" :duration="15" :gradient="true" :gradient-color="[34, 34, 34]" gradientLength="1%">
              <img src="/logos/orca.svg" alt="orca logo"/>
              <img src="/logos/jupiter.svg" class="jupiter" alt="jupiter logo" />
              <img src="/logos/pancake.svg" alt="pancake logo" />
              <img src="/logos/uniswap.svg" alt="uniswap logo" />
              <img src="/logos/ray.svg" alt="ray logo" />
              <img src="/logos/stone.svg" alt="stone logo" />
              <img src="/logos/med.svg" alt="med logo" />
          </Vue3Marquee>
        </div>
      </div>
    </div>
    <div class="services-container margin-container">
      <div class="anchor"><span id="cex-services"></span></div>
      <Hero id="cex-services" class="grid grid-cols-7 justify-between items-center">
        <div class="col-span-4">
          <h2 class="colorized-text">{{ $t("market_making.cex") }}</h2>
          <p>{{ $t("market_making.cex_desc") }}</p>
          <ConsultButton />
        </div>
        <div class="col-span-3 m-auto">
          <img src="/public/logo3DCube.webp" alt="logo">
        </div>
      </Hero>
      <!-- Три карточки в одну строку -->
      <div class="anchor"><span id="liquidity-management"></span></div>
      <div class="anchor"><span id="cex-listing"></span></div>
      <div class="anchor"><span id="order-optimization"></span></div>
      <div class="grid grid-cols-2  grid-rows-2 gap-8 w-full">
        <Card 
          :title="$t('market_making.cex_listing')"
          :text="$t('market_making.cex_listing_desc')"
          :text_bottom=true
          class="col-span-1" 
        />
        <Card 
          :title="$t('market_making.optimization_orders')"
          :text="$t('market_making.optimization_orders_desc')"
          :text_bottom=true
          class="col-span-1 row-span-2" 
        />
        <Card 
          :title="$t('market_making.liquidity_manage')"
          :text="$t('market_making.liquidity_manage_desc')"
          :text_bottom=true 
          class="col-span-1"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 { font-size: 50px; font-weight: 700; }

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

#market_making::before{
  height: 75rem;
  border-width: 5px;
}

.life-cyclic-h3 { color: #fff; font-weight: 700; font-size: 3rem; padding-bottom: 1.5rem; }
.life-cyclic-p { font-size: 2rem; line-height: 1; font-weight: 500; padding-bottom: 12rem; }
.text-services { vertical-align: middle; color: #ffffff; font-size: 300%; font-family: 'Montserrat', Arial, sans-serif; line-height: 1.1; font-weight: 700; background-position: center center; border-color: transparent; border-style: solid; color: #ffffff; text-align: center; z-index: 3; padding-top: 3%; padding-bottom: 3%; }
/* Дополнительные стили для соответствия отступам из образца */
/*.services-container p { font-size: 1.5rem; line-height: 1; font-weight: 500; padding-bottom: 3rem; text-align: center; max-width: 60%; margin: 0 auto; }*/

#dex{
  overflow: hidden;
}

#dex div:first-child{
  padding-top: 10rem;
}
/* Стили для большой карточки УПРАВЛЕНИЕ ОБЪЕМОМ (как front flip-card, без +) */
.big-card { 
  background-color: #222222; 
  border-radius: 30px; 
  box-sizing: border-box; 
  padding: 30px; 
  display: flex; 
  flex-direction: column; 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  color: white; 
}

.anchor {
  position:relative;
}
.anchor #dex-services, .anchor #anti-snipe,
  .anchor #volume-management, .anchor #price-control,
  .anchor #token-launch, .anchor #cex-services, 
  .anchor #liquidity-management, .anchor #cex-listing,
  .anchor #order-optimization{
  position:absolute; top:-20vh;
}

.big-card h3 { 
  font-size: 2rem; 
  font-weight: 700; 
  margin-bottom: 1rem; 
}
.big-card p { 
  vertical-align: middle; 
  color: #777777; 
  font-size: 1.2rem; 
  font-family: 'Montserrat', Arial, sans-serif; 
  line-height: 1.1; 
  font-weight: 600; 
  background-position: center center; 
  border-color: transparent; 
  border-style: solid;
  margin-bottom: 1rem; 
}

.empty-subcard { 
  border-radius: 30px; 
  box-sizing: border-box; 
  background-color: #222222;
}

.flip-card .image-block {
  padding-top: 5rem;
}

#prof-support{
  background-color: #222222;
  border: 0;
  border-radius: 5rem;
  padding: 30px; 
  display: flex; 
  flex-direction: column;
}
.marquee{
  max-width: inherit;
}

.marquee img {
  width: 7rem;
  margin-right: 10rem;
}

.marquee img.jupiter{
  width: 12rem;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Styling for the "РАБОТАЕМ С" text */
.work-with-text {
  text-align: center;
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.5rem;
  user-select: none;
  font-weight: 700;
  margin-top: 2rem;
}

@media (min-width: 2241px) {
  #market_making::before {
    height: 70rem;
  }
}

@media (min-width: 1472px) and (max-width: 2240px) {
  #market_making::before {
    height: 60rem;
  }
}

@media (min-width: 1212px) and (max-width: 1471px) {
  #market_making::before {
    height: 50rem;
  }
}

@media (min-width: 1025px) and (max-width: 1211px) {
  #market_making::before {
    height: 50rem;
  }
}

/* Responsiveness */
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

  #start_tokens div:first-child, #market_making div:first-child, #dex div:first-child { order: 1; }
  #start_tokens div:last-child, #market_making div:last-child, #dex div:last-child { order: -1; } 

  #market_making div:first-child, #dex div:first-child {
    order: 1;
    margin-top: 15rem;
}

  #market_making div.hero-text-container {
    padding-top: 15rem;
  }

  #market-making .hero-media-container img {
    max-width: 200px;
    padding-top: 5rem;
    margin-left: 0;
  }

  h2 {
    font-size: 40px;
  }

  .big-card {
    padding: 20px;
  }

  .big-card h3 {
    font-size: 1.8rem;
  }

  .big-card p {
    font-size: 1.1rem;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .work-with-text {
    font-size: 1rem;
  }

  .text-services {
    font-size: 250%;
  }

  .services-container p {
    max-width: 80%;
    font-size: 1.3rem;
  }

  .flip-card .image-block {
    padding-top: 3rem;
  }

  #prof-support {
    padding: 20px;
    border-radius: 3rem;
  }

  .life-cyclic-h3 {
    font-size: 2.5rem;
  }

  .life-cyclic-p {
    font-size: 1.5rem;
    padding-bottom: 8rem;
  }

  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Планшеты (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  #market_making::before {
    height: 75rem;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 32px;
  }

  .hero {
    padding: 20px;
  }

  #market_making div.hero-text-container {
    padding-top: 10rem;
  }

  #market-making .hero-media-container img {
    max-width: 150px;
    padding-top: 3rem;
  }

  .big-card {
    padding: 15px;
  }

  .big-card h3 {
    font-size: 1.6rem;
  }

  .big-card p {
    font-size: 1rem;
  }

  .work-with-text {
    font-size: 0.9rem;
  }

  .text-services {
    font-size: 200%;
  }

  .services-container p {
    max-width: 90%;
    font-size: 1.1rem;
  }

  .life-cyclic-h3 {
    font-size: 2rem;
  }

  .life-cyclic-p {
    font-size: 1.2rem;
    padding-bottom: 6rem;
  }

  .grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 640px) {
  #market_making::before{
    height: 65rem;
  }

  #market_making div:first-child, #dex div:first-child {
      margin-top: 10rem;
  }

  .hero-media-container video {
    max-width: 100%;
    width: 100%;
  }

  #market-making .hero-media-container img {
    max-width: 150px;
    padding-top: 2rem;
    margin-left: 0;
  }

  h2 {
    font-size: 28px;
  }
  p {
    font-size: 20px;
  }

  .big-card {
    padding: 10px;
  }

  .big-card h3 {
    font-size: 1.4rem;
  }

  .big-card p {
    font-size: 0.9rem;
  }

  .work-with-text {
    font-size: 0.8rem;
  }

  .text-services {
    font-size: 180%;
  }

  .services-container p {
    max-width: 100%;
    font-size: 1rem;
  }

  .flip-card .image-block {
    padding-top: 2rem;
  }

  #prof-support {
    padding: 15px;
    border-radius: 2rem;
  }

  .life-cyclic-h3 {
    font-size: 1.8rem;
  }

  .life-cyclic-p {
    font-size: 1rem;
    padding-bottom: 4rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 18px;
  }
  .hero {
    padding: 10px;
  }

  #market_making div.hero-text-container {
    padding-top: 5rem;
  }

  #market-making .hero-media-container img {
    max-width: 120px;
    padding-top: 1rem;
  }

  .big-card {
    padding: 8px;
  }

  .big-card h3 {
    font-size: 1.2rem;
  }

  .big-card p {
    font-size: 0.8rem;
  }

  .marquee-container {
    --logo-size: 40px;
    --gap: 8px;
  }
  .marquee-strip {
    animation-duration: 7s;
  }

  .marquee-strip img {
    height: 40px;
    width: 40px;
  }

  .work-with-text {
    font-size: 0.7rem;
  }

  .text-services {
    font-size: 150%;
  }

  .services-container p {
    font-size: 0.9rem;
  }

  .life-cyclic-h3 {
    font-size: 1.5rem;
  }

  .life-cyclic-p {
    font-size: 0.9rem;
    padding-bottom: 2rem;
  }
}
</style>



<script setup>
// Импорт необходимых модулей и компонентов (аналогично образцу)
import 'swiper/css'
import 'swiper/css/navigation'
import Fly3Cubes from '~/components/Fly3Cubes.vue';

</script>
