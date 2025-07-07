<!-- pages/index.vue -->
<template>
  <div>

    <Hero>
      <div class="hero-text-container">
        <h2 class="colorized-text">
          Начните свой путь вместе с<br>
          профессионалами рынка.
        </h2>
        <p>
          Прямо сейчас поддержим ваш проект на любом этапе<br>
          развития — от первых идей до полноценного запуска<br>
          на рынок и дальнейшего роста.
        </p>

        <button class="bg-[#1586F4] cursor-pointer
         transition-colors transition-border duration-200 ease-in-out
         shadow-[0_0_10px_rgb(21,134,244)]
         hover:shadow-[0_0_7px_rgb(21,134,244),0_0_13px_rgb(21,134,244),0_0_18px_rgb(21,134,244),0_0_50px_rgb(21,134,244)]
         px-6 py-3 text-lg rounded-2xl text-white font-semibold">Бесплатная консультация</button>
      </div>

      <div class="hero-media-container">
        <video src="~/public/index_hero_1.webm" autoplay muted loop playsinline preload="auto"></video>
      </div>
    </Hero>

    <hr />

    <Hero class="pt-[120px]">
      <div class="hero-text-container">
        <h2 class="colorized-text">MARKET MAKING</h2>
        <p>
          Повышаем доходность, ликвидность и стабильность вашего токена с
          помощью рыночных стратегий и автоматизации торговли.
        </p>
        <a href="/market-maker">Подробнее ➡️</a>
      </div>
      <div class="hero-media-container relative">
        <video src="~/public/index_hero_2.webm" class="absolute top-[-200px] left-[80px]" autoplay muted loop
          playsinline preload="auto">
        </video>
        <img src="~/public/logo_cube.png" alt="logo cube">
      </div>
    </Hero>

    <Hero>
      <Cubes3D />
      <div class="hero-text-container">
        <h2 class="colorized-text">РАЗРАБОТКА</h2>
        <p>
          Мы поможем воплотить идеи в реальность,
          доработать MVP, улучшить метрики. Разрабатываем Web3-утилиты,
          Dapps, решения для CEX и DEX, и многое другое.
        </p>
        <a href="/market-maker">Подробнее ➡️</a>
      </div>
    </Hero>

    <Consulting />


    <div class="flex flex-col items-center mb-[120px]">
      <h2 class="colorized-text text-4xl">О НАС</h2>
      <p class="text-2xl">
        Мы - команда опытных трейдеров, программистов и аналитиков, которые занимаются разработкой первоклассных
        финтех-решений в сфере криптовалют.
      </p>
    </div>


    <h2 class="text-4xl">Команда</h2>
    <div class="flex flex-row justify-between mb-[120px]">
      <div class="photo_card pl-4" id="Dmitriy-Vasilev-card">
        <h3 class="mt-[50%]">Дмитрий Васильев</h3>
        <p class="mb-1">Соучредитель, генеральный директор</p>
        <p>БОЛЕЕ 6 ЛЕТ ОБЩЕГО ОПЫТА РАБОТЫ В WEB3</p>
      </div>

      <div class="photo_card pl-4" id="Georgy-Kozyrev-card">
        <h3 class="mt-[50%]">Георгий Козырев</h3>
        <p class="mb-1">Соучредитель, технический директор</p>
        <p>5 лет в области блокчейн-инженерии</p>
      </div>
    </div>

    <div class="stat_container border border-gray-300 p-4 rounded-[80px] min-h-[540px] flex flex-col p-[60px] gap-4">
      <div class="self-center text-2xl mb-[60px]">
        <p>НАШИ КЛИЕНТЫ УСПЕШНО<br>ПРОХОДЯТ ВСЕ ЭТАПЫ РОСТА</p>
      </div>

      <div class="flex flex-row justify-around">
        <div class="">
          <b class="text-7xl">50+</b>
          <p>Интеграция CEX и DEX</p>
        </div>

        <div>
          <b class="text-7xl">60+</b>
          <p>Проектов запущено</p>
        </div>

        <div>
          <b class="text-7xl">1М+</b>
          <p>Привлечено пользователей</p>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.photo_card {
  background-position: center -100px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 600px;
  height: 550px;
}

#Dmitriy-Vasilev-card {
  background-image: url("/dima.png");
}

#Georgy-Kozyrev-card {
  background-image: url("/georgy.png");
}
</style>