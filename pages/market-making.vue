<!-- pages/market-maker.vue -->
<template>
  <div>
    <Hero id="market_making" class="grid grid-cols-7 justify-between items-center">
      <div class="col-span-4">
        <h2 class="colorized-text">{{ $t("market_making.market_making") }}</h2>
        <p>{{ $t("market_making.market_making_desc") }}</p>
        <ConsultButton />
      </div>
      <CandlesCube class="col-span-3 m-auto"/>
    </Hero>
    <div class="anchor"><span id="dex-services"></span></div>
    <Hero id="dex" class="grid grid-cols-7 justify-between items-center">
      <div class="col-span-4">
        <h2 class="colorized-text">{{ $t("market_making.dex") }}</h2>
        <p>{{ $t("market_making.dex_desc") }}</p>
        <ConsultButton />
      </div>
      <Fly3Cubes class="col-span-3 m-auto"/>
    </Hero>
    <div class="anchor"><span id="volume-management"></span></div>
    <div  id="volume" class="big-card w-full mb-8">
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
    <div class="grid grid-cols-2 gap-8 w-full mb-8">
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
    <Hero class="flex justify-between items-center">
      <div>
        <h2 class="colorized-text">Запуск токенов</h2>
        <p>Полноценный и качественный запуск токена — это сложная задача, требующая детальной проработки.</p>
        <button class="bg-[#1586F4] cursor-pointer transition-colors transition-border duration-200 ease-in-out shadow-[0_0_10px_rgb(21,134,244)] hover:shadow-[0_0_7px_rgb(21,134,244),0_0_13px_rgb(21,134,244),0_0_18px_rgb(21,134,244),0_0_50px_rgb(21,134,244)] px-6 py-3 text-lg rounded-2xl text-white font-semibold">Бесплатная консультация</button>
      </div>
      <video style="object-fit: cover; width: 50%; height: 50%;" preload="auto" playsinline="" autoplay="" loop="" muted="">
        <source src="https://dl.dropboxusercontent.com/scl/fi/oslgex5k4x3u2if34l5uc/Plant.mp4?rlkey=d5o1jerjn26j0dsjbieisyjk6&amp;st=bk7tr4n6&amp;dl=0" type="video/mp4">
      </video>
    </Hero>
    <div  id="prof-support" class="mb-8">
      <h2>Почему профессиональная поддержка так важна при запуске?</h2>
      <div class="flex justify-between items-center">
        <div>
          <div class="grid grid-cols-4 gap-8 mt-12">
            <div>
              <h3 class="life-cyclic-h3">01.</h3>
              <p class="life-cyclic-p">Максимизируйте видимость вашего токена<br>С нашей помощью ваш токен окажется на всех ключевых биржах!</p>
            </div>
            <div>
              <h3 class="life-cyclic-h3">02.</h3>
              <p class="life-cyclic-p">Подумайте заранее о ликвидности и волатильности токена в первые минуты и часы на рынке.<br>C нашей помощью ваш токен быстрее окажется на ключевых биржах!</p>
            </div>
            <div>
              <h3 class="life-cyclic-h3">03.</h3>
              <p class="life-cyclic-p">Хороший план – это большая часть дела.<br>Наша опытная команда обеспечит эффективную стратегию листинга для вашего актива.</p>
            </div>
            <div>
              <h3 class="life-cyclic-h3">04.</h3>
              <p class="life-cyclic-p">Не оставляйте успех на удачу<br>Воспользуйтесь поддержкой нашей опытной команды для уверенного и прогнозируемого старта на рынке.</p>
            </div>
          </div>
          <div class="work-with-text">РАБОТАЕМ С</div>
          <div class="marquee-container">
            <div class="marquee-strip">
              <!-- repeat icons to make continuous effect -->
              <img src="/logos/orca.svg" alt="orca logo"/>
              <img src="/logos/jupiter.svg" alt="jupiter logo" />
              <img src="/logos/pancake.svg" alt="pancake logo" />
              <img src="/logos/uniswap.svg" alt="uniswap logo" />
              <img src="/logos/ray.svg" alt="ray logo" />
              <img src="/logos/stone.svg" alt="stone logo" />
              <img src="/logos/med.svg" alt="med logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-container">
      <div class="anchor"><span id="cex-services"></span></div>
      <h2 class="text-services">УСЛУГИ CEX</h2>
      <!-- Три карточки в одну строку -->
       <div class="anchor"><span id="liquidity-management"></span></div>
      <div class="anchor"><span id="cex-listing"></span></div>
      <div class="anchor"><span id="order-optimization"></span></div>
      <div class="grid grid-cols-2 gap-8 w-full">
        <Card 
          :title="$t('market_making.cex_listing')"
          :text="$t('market_making.cex_listing_desc')"
          class="" 
        />
        <Card 
          :title="$t('market_making.optimization_orders')"
          :text="$t('market_making.optimization_orders_desc')"
          class="" 
        />
        <Card 
          :title="$t('market_making.liquidity_manage')"
          :text="$t('market_making.liquidity_manage_desc')" 
          class=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 { font-size: 50px; font-weight: 700; }
.life-cyclic-h3 { color: #fff; font-weight: 700; font-size: 3rem; padding-bottom: 1.5rem; }
.life-cyclic-p { font-size: 2rem; line-height: 1; font-weight: 500; padding-bottom: 12rem; }
.text-services { vertical-align: middle; color: #ffffff; font-size: 300%; font-family: 'Montserrat', Arial, sans-serif; line-height: 1.1; font-weight: 700; background-position: center center; border-color: transparent; border-style: solid; color: #ffffff; text-align: center; z-index: 3; padding-top: 3%; padding-bottom: 3%; }
/* Дополнительные стили для соответствия отступам из образца */
.services-container p { font-size: 1.5rem; line-height: 1; font-weight: 500; padding-bottom: 3rem; text-align: center; max-width: 60%; margin: 0 auto; }

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

.marquee-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  background: transparent;
  /* Optional: set height depending on icon size */
  /*height: 70px;*/ /* adjust based on icons size */
}

.marquee-strip {
  display: flex;
  width: max-content;
  animation: marquee 15s infinite linear;
  /*animation: marquee 20s linear infinite;*/
  /* gap between icons */
  gap: 14%;
}

.marquee-strip img {
  height: 109px;  /* uniform icon height */
  width: 109px;   /* uniform icon width */
  flex-shrink: 0;
  margin: 0 auto;
}

/*@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}*/

@keyframes marquee {
  0% {
      transform: translateX(0px); 
  }
}

/* Styling for the "РАБОТАЕМ С" text */
.work-with-text {
  text-align: center;
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.5rem;
  user-select: none;
  font-weight: 700;
}
</style>

<script setup>
// Импорт необходимых модулей и компонентов (аналогично образцу)
import 'swiper/css'
import 'swiper/css/navigation'
import Fly3Cubes from '~/components/Fly3Cubes.vue';

</script>
