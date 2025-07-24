<!-- pages/index.vue -->
<template>
  <div>

    <Hero id="consulting" class="grid grid-cols-7 justify-between items-center">
      <div class="col-span-4">
        <h2 class="colorized-text">{{ $t("consulting.consulting") }}</h2>
        <p>{{ $t("consulting.consulting_desc") }}</p>
        <ConsultButton />
      </div>
      <ClientOnly>
        <OrbitTrail class="col-span-3"/>
      </ClientOnly>
    </Hero>

    <h2 class="text-services">{{ $t("consulting.our_services") }}</h2>
    <div class="grid grid-cols-5 gap-8 w-full mb-8">
      <Card class="col-span-3" :title="$t('consulting.tech_consulting')" title_wrap/>
      <Card class="col-span-2" :title="$t('consulting.support')" />
    </div>
    <div class="grid grid-cols-5 gap-8 w-full mb-8">
      <Card class="col-span-2" :title="$t('consulting.vc_support')" title_wrap/>
      <Card class="col-span-3" :title="$t('consulting.tokenomics_development')" title_wrap/>
    </div>
    <div class="grid grid-cols-1 gap-8 w-full">
      <Card :title="$t('consulting.tech_audit')" title_wrap/>
    </div>

    <h2 class="colorized-text">{{ $t("consulting.advantages_of_consalting") }}</h2>
    <hr class="border-t-2 border-blue-400 my-4">

    <div class="grid grid-cols-7 gap-4">
      <LoadingCircular class="col-span-2"/>
      <div class="advantages col-span-5">
        <h3>Глубокий анализ рынка</h3>
        <p>Наша команда из аналитиков, разработчиков и специалистов по web3-бизнесу, активно взаимодействует с ведущими
          игроками отрасли и находится в контексте всех новшеств. Мы создаем уникальные решения, которые помогут вашему
          проекту выделиться и достичь успеха на конкурентном рынке.</p>
      </div>
      <SpinningGear class="col-span-2"/>

      <div class="advantages col-span-5">
        <h3>Технические навыки</h3>
        <p>Техническая инфраструктура определяет половину успеха проекта. Мы предоставим ценные советы по вопросам сбора
          команды, архитектуры, безопасности и поступательного развития инфраструктуры вашего проекта.</p>
      </div>

      <img class="col-span-2 floating_bars" src="/consulting_circle.svg">
      <FloatingBars />
      <div class="advantages col-span-5"">
        <h3>Стратегическое планирование</h3>
        <p>Мы предоставляем ценные советы по ключевым элементам цепочки, которые играют важную роль в создании успешной
          дорожной карты вашего бизнеса. Давайте вместе выстроим стратегию, которая выведет ваш проект на новый уровень!
        </p>
      </div>

    </div>

  </div>
</template>

<style scoped>
h2 { font-size: 50px; font-weight: 700; }
.hero {
    margin-bottom: 8%;
}

#consulting::before{
  height: 60rem;
  border-width: 5px;
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
.card-wrapper[data-v-29c414df] {
    height: 450px;
}

.advantages{
  padding-left: 13rem;
  padding-top: 8rem;
}

.advantages h3{
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 1.5rem;
}

.advantages p{
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;
  padding-bottom: 12rem;
}

@media (min-width: 2341px) {
  #consulting::before {
    height: 70rem;
  }
}

@media (min-width: 1648px) and (max-width: 2340px) {
  #consulting::before {
    height: 60rem;
  }
}

@media (min-width: 1388px) and (max-width: 1647px) {
  #consulting::before {
    height: 50rem;
  }
}

@media (min-width: 1212px) and (max-width: 1387px) {
  #consulting::before {
    height: 40rem;
  }
}

@media (min-width: 1025px) and (max-width: 1211px) {
  #consulting::before {
    height: 40rem;
  }
}

/* Планшеты (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  #consulting::before {
    height: 40rem;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  #consulting::before {
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
  #consulting::before{
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