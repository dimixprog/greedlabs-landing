<!-- pages/index.vue -->
<template>
  <div>

    <Consulting />

    <h2>НАШИ УСЛУГИ</h2>
    <div class="grid grid-cols-2 gap-4 w-full">

      <div class="card min-h-[400px]">
        <h3 class="colorized-text col-span-1 w-1/3 w-full">ТЕХНИЧЕСКИЙ КОНСАЛТИНГ</h3>
      </div>
      <div class="card min-h-[400px]">
        <h3 class="colorized-text col-span-1 w-2/3 w-full">ПОДДЕРЖКА</h3>
      </div>

      <div class="card min-h-[400px]">
        <h3 class="colorized-text col-span-1 w-1/2">VC ПОДДЕРЖКА</h3>
      </div>
      <div class="card min-h-[400px]">
        <h3 class="colorized-text col-span-1 w-1/2">РАЗРАБОТКА ТОКЕНОМИКИ</h3>
      </div>

      <div class="card min-h-[400px]">
        <h3 class="colorized-text">ТЕХНИЧЕСКИЙ АУДИТ</h3>
      </div>
    </div>

    <h2 class="colorized-text">Преимущества консальтинга для криптопроектов:</h2>
    <hr class="border-t-2 border-blue-400 my-4">

    <div class="grid grid-cols-[1fr_4fr] gap-4">
      <LoadingCircular />
      <div>
        <h3>Глубокий анализ рынка</h3>
        <p>Наша команда из аналитиков, разработчиков и специалистов по web3-бизнесу, активно взаимодействует с ведущими
          игроками отрасли и находится в контексте всех новшеств. Мы создаем уникальные решения, которые помогут вашему
          проекту выделиться и достичь успеха на конкурентном рынке.</p>
      </div>
      <SpinningGear />

      <div>
        <h3>Технические навыки</h3>
        <p>Техническая инфраструктура определяет половину успеха проекта. Мы предоставим ценные советы по вопросам сбора
          команды, архитектуры, безопасности и поступательного развития инфраструктуры вашего проекта.</p>
      </div>

      <img src="/consulting_circle.svg" width="150" height="150">
      <div>
        <h3>Стратегическое планирование</h3>
        <p>Мы предоставляем ценные советы по ключевым элементам цепочки, которые играют важную роль в создании успешной
          дорожной карты вашего бизнеса. Давайте вместе выстроим стратегию, которая выведет ваш проект на новый уровень!
        </p>
      </div>

    </div>


  </div>
</template>