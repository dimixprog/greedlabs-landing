<!-- pages/index.vue -->
<template>
  <div>
    <div class="hero-wrapper">
      <Hero id="consulting" class="grid grid-cols-7 justify-between items-center container">
        <div class="col-span-4">
          <h2 class="colorized-text">{{ $t("consulting.consulting") }}</h2>
          <p>{{ $t("consulting.consulting_desc") }}</p>
          <ConsultButton />
        </div>
        <ClientOnly>
          <OrbitTrail class="col-span-3"/>
        </ClientOnly>
      </Hero>
    </div>

    <h2 class="text-services  container">{{ $t("consulting.our_services") }}</h2>
    <div id="our-services" class="grid grid-cols-5 gap-8 w-full mb-8 container">
      <Card class="col-span-3" :title="$t('consulting.tech_consulting')" title_wrap/>
      <Card class="col-span-2" :title="$t('consulting.support')" />
    </div>
    <div id="our-services" class="grid grid-cols-5 gap-8 w-full mb-8 container">
      <Card class="col-span-2" :title="$t('consulting.vc_support')" title_wrap/>
      <Card class="col-span-3" :title="$t('consulting.tokenomics_development')" title_wrap/>
    </div>
    <div id="our-services" class="grid grid-cols-1 gap-8 w-full container">
      <Card :title="$t('consulting.tech_audit')" title_wrap/>
    </div>

    <hr class="full-width-line">

    <h2 class="colorized-text container">{{ $t("consulting.advantages_of_consalting") }}</h2>
    <hr class="border-t-2 border-blue-400 my-4">

    <div id="advantages-group" class="grid grid-cols-7 gap-4 container">
      <LoadingCircular class="col-span-2"/>
      <div class="advantages col-span-5">
        <h3>{{ $t("consulting.deep_analysis") }}</h3>
        <p>{{ $t("consulting.deep_analysis_desc") }}</p>
      </div>
      <SpinningGear class="col-span-2"/>

      <div class="advantages col-span-5">
        <h3>{{ $t("consulting.tech_skills") }}</h3>
        <p>{{ $t("consulting.tech_skills_desc") }}</p>
      </div>

      <FloatingBars  class="col-span-2"/>
      <div class="advantages col-span-5">
        <h3>{{ $t("consulting.strategic_planning") }}</h3>
        <p>{{ $t("consulting.strategic_planning_desc") }}</p>
      </div>

    </div>

  </div>
</template>

<style scoped>
h2 { font-size: 50px; font-weight: 700; }
.hero {
    margin-bottom: 8%;
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

.full-width-line{
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 8rem;
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

@media (min-width: 1425px) and (max-width: 1680px){
  .advantages[data-v-d5f28c20] {
    padding-left: 3rem;
    padding-top: 5rem;
  }
}

@media (min-width: 1025px) and (max-width: 1424px) {
  .advantages[data-v-d5f28c20] {
    padding-left: 3rem;
    padding-top: 3rem;
  }
  .advantages h3 {
    font-size: 2rem;
  }
  .advantages p {
    font-size: 1.5rem;
    padding-bottom: 5rem;
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

@media (max-width: 1024px) {
  .hero-media-container video {
    max-width: 100%;
    width: 100%;
  }
  .hero, #advantages-group{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .hero div{
    grid-column: span 2 / span 2;
  }

  #consulting div:first-child { order: 1; }
  #consulting div:last-child { order: -1; } 

  .advantages {
    padding-left: 0;
    padding-top: 0;
  }

  .loader-wrapper, .gear-container, .floating-bars-wrapper {
    width: 50%;
    margin: 0 auto;
  }
  h2 {
    font-size: 40px;
  }
}

@media (max-width: 900px) {
  #our-services {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0;
    margin-bottom: 0;
  }
  #our-services .card-wrapper{
    margin-bottom: 2rem;
  }
  .advantages h3 {
    font-size: 2rem;
  }
  .advantages p {
    font-size: 1.5rem;
    padding-bottom: 5rem;
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