<!-- pages/index.vue -->
<template>
  <div>

    <Hero class="grid grid-cols-7 justify-between items-center">
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

      <img src="/consulting_circle.svg" width="150" height="150">
      <div class="advantages">
        <h3>Стратегическое планирование</h3>
        <p>Мы предоставляем ценные советы по ключевым элементам цепочки, которые играют важную роль в создании успешной
          дорожной карты вашего бизнеса. Давайте вместе выстроим стратегию, которая выведет ваш проект на новый уровень!
        </p>
      </div>

    </div>

  </div>
</template>

<style>
h2 { font-size: 50px; font-weight: 700; }
.hero {
    margin-bottom: 8%;
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
</style>