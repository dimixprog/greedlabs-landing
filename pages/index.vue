<!-- pages/index.vue -->
<template>
  <div>
    <div class="hero-wrapper">
      <Hero id="start_way" class="grid grid-cols-7 justify-between items-center margin-container">
        <div class="col-span-4">
          <h2 class="colorized-text">
            {{ $t("index.start_way") }}
          </h2>
          <p>
            {{ $t("index.start_way_desc") }}
          </p>
          <ConsultButton />
        </div>

        <div class="hero-media-container col-span-3 m-auto">
          <video src="~/public/index_hero_1.webm" autoplay muted loop playsinline preload="auto"></video>
        </div>
      </Hero>
    </div>

    <Hero id="market_making" class="grid grid-cols-7 justify-between items-center pt-[120px] margin-container">
      <div class="hero-text-container col-span-4">
        <h2 class="colorized-text">{{ $t("index.market_making") }}</h2>
        <p>
          {{ $t("index.market_making_desc") }}
        </p>
        <a href="/market-making" class="text-jump-link">
          <span class="text">{{
            $t("index.more")
          }}
          </span>
          <span class="svg-arrow-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="6120 5099 24 24" class="arrow-svg">
              <path fill="#1586f4" d="M 6133.4697 5104.4697 C 6133.7626 5104.1768 6134.2374 5104.1768 6134.5303 5104.4697C 6136.5303 5106.4697 6138.5303 5108.4697 6140.5303 5110.4697C 6140.8232 5110.7626 6140.8232 5111.2374 6140.5303 5111.5303C 6138.5303 5113.5303 6136.5303 5115.5303 6134.5303 5117.5303C 6134.2374 5117.8232 6133.7626 5117.8232 6133.4697 5117.5303C 6133.1768 5117.2374 6133.1768 5116.7626 6133.4697 5116.4697C 6135.0429 5114.8965 6136.6161 5113.3232 6138.1893 5111.75C 6133.4595 5111.75 6128.7297 5111.75 6124 5111.75C 6123.5858 5111.75 6123.25 5111.4142 6123.25 5111C 6123.25 5110.5858 6123.5858 5110.25 6124 5110.25C 6128.7297 5110.25 6133.4595 5110.25 6138.1893 5110.25C 6136.6161 5108.6768 6135.0429 5107.1035 6133.4697 5105.5303"></path>
            </svg>
          </span>
        </a>
      </div>
      <ClientOnly>
        <CandlesCube class="col-span-3 m-auto"/>
      </ClientOnly>
    </Hero>

    <Hero id="development" class="grid grid-cols-7 justify-between items-center margin-container">
      <Cubes3D class="col-span-3 m-auto"/>
      <div class="hero-text-container col-span-4">
        <h2 class="colorized-text">{{ $t("index.development") }}</h2>
        <p>
          {{ $t("index.development_desc") }}
        </p>
        <a href="/development" class="text-jump-link">
          <span class="text">{{
            $t("index.more")
          }}
          </span>
          <span class="svg-arrow-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="6120 5099 24 24" class="arrow-svg">
              <path fill="#1586f4" d="M 6133.4697 5104.4697 C 6133.7626 5104.1768 6134.2374 5104.1768 6134.5303 5104.4697C 6136.5303 5106.4697 6138.5303 5108.4697 6140.5303 5110.4697C 6140.8232 5110.7626 6140.8232 5111.2374 6140.5303 5111.5303C 6138.5303 5113.5303 6136.5303 5115.5303 6134.5303 5117.5303C 6134.2374 5117.8232 6133.7626 5117.8232 6133.4697 5117.5303C 6133.1768 5117.2374 6133.1768 5116.7626 6133.4697 5116.4697C 6135.0429 5114.8965 6136.6161 5113.3232 6138.1893 5111.75C 6133.4595 5111.75 6128.7297 5111.75 6124 5111.75C 6123.5858 5111.75 6123.25 5111.4142 6123.25 5111C 6123.25 5110.5858 6123.5858 5110.25 6124 5110.25C 6128.7297 5110.25 6133.4595 5110.25 6138.1893 5110.25C 6136.6161 5108.6768 6135.0429 5107.1035 6133.4697 5105.5303"></path>
            </svg>
          </span>
        </a>
      </div>
    </Hero>

    <Hero id="consulting" class="grid grid-cols-7 justify-between items-center margin-container">
      <div class="col-span-3">
        <h2 class="colorized-text">{{ $t("index.consulting") }}</h2>
        <p>{{ $t("index.consulting_desc") }}</p>
        <a href="/consulting" class="text-jump-link">
          <span class="text">{{
            $t("index.more")
          }}
          </span>
          <span class="svg-arrow-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="6120 5099 24 24" class="arrow-svg">
              <path fill="#1586f4" d="M 6133.4697 5104.4697 C 6133.7626 5104.1768 6134.2374 5104.1768 6134.5303 5104.4697C 6136.5303 5106.4697 6138.5303 5108.4697 6140.5303 5110.4697C 6140.8232 5110.7626 6140.8232 5111.2374 6140.5303 5111.5303C 6138.5303 5113.5303 6136.5303 5115.5303 6134.5303 5117.5303C 6134.2374 5117.8232 6133.7626 5117.8232 6133.4697 5117.5303C 6133.1768 5117.2374 6133.1768 5116.7626 6133.4697 5116.4697C 6135.0429 5114.8965 6136.6161 5113.3232 6138.1893 5111.75C 6133.4595 5111.75 6128.7297 5111.75 6124 5111.75C 6123.5858 5111.75 6123.25 5111.4142 6123.25 5111C 6123.25 5110.5858 6123.5858 5110.25 6124 5110.25C 6128.7297 5110.25 6133.4595 5110.25 6138.1893 5110.25C 6136.6161 5108.6768 6135.0429 5107.1035 6133.4697 5105.5303"></path>
            </svg>
          </span>
        </a>
      </div>
      <div class="col-span-1"></div>
      <ClientOnly>
        <OrbitTrail class="col-span-3  m-auto"/>
      </ClientOnly>
    </Hero>

    <div class="flex itams-center margin-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3" viewBox="0 0 1060 2" fill="none"><rect width="1060" height="2" fill="url(#paint0_linear_1228_237)"/><defs><linearGradient id="paint0_linear_1228_237" x1="0" y1="1" x2="1060" y2="1" gradientUnits="userSpaceOnUse"><stop stop-color="#D4D4D4" stop-opacity="0"/><stop offset="0.26" stop-color="#6E6E6E" stop-opacity="0.530612"/><stop offset="0.49" stop-color="#D4D4D4"/><stop offset="0.695" stop-color="#636363" stop-opacity="0.539216"/><stop offset="1" stop-color="#474747" stop-opacity="0"/></linearGradient></defs></svg>
    </div>

    <div id="about_us" class="flex flex-col items-center mb-[120px] margin-container">
      <h2 class="colorized-text">{{ $t("index.about_us") }}</h2>
      <p>
        {{ $t("index.about_us_desc") }}
      </p>
      <div class="flex items-center justify-center">
        <img class="gif" src="~/public/MConvertereu_retrof.gif" alt="MConvertereu">
        <img class="inside_image" src="~/public/logo_opacity.webp" alt="MConvertereu">
      </div>
    </div>

    <div id="team" class="margin-container">
      <h2>{{ $t("index.team") }}</h2>
      <div class="grid grid-cols-2 gap-16 mx-8 flex-row justify-between mb-[120px] mx-auto">
        <div class="photo_card pl-4" id="Dmitry-Vasilev-card">
          <h3 class="mt-[50%]">{{ $t("index.dmitry") }}</h3>
          <p class="role">{{ $t("index.dmitry_role") }}</p>
          <p class="experience">{{ $t("index.dmitry_experience") }}</p>
          <div class="social">
            <a href="https://x.com/VasDm_GreedLabs" target="_blank" rel="noopener">
              <svg class="t-persons-social-links__svg" role="presentation" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48">
                <g clip-path="url(#clip0_3697_102)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0
                  37.2548 10.7452 48 24 48ZM33.3482 14L25.9027 22.4686H25.9023L34 34H28.0445L22.5915 26.2348L15.7644 34H14L21.8082 25.1193L14 14H19.9555L25.119
                  21.3532L31.5838 14H33.3482ZM22.695 24.1101L23.4861 25.2173V25.2177L28.8746 32.7594H31.5847L24.9813 23.5172L24.1902 22.4099L19.1103
                  15.2997H16.4002L22.695 24.1101Z" fill="#1586f4"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3697_102">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        <div class="photo_card pl-4" id="Georgy-Kozyrev-card">
          <h3 class="mt-[50%]">{{ $t("index.georgy") }}</h3>
          <p class="role">{{ $t("index.georgy_role") }}</p>
          <p class="experience">{{ $t("index.georgy_experience") }}</p>
          <div class="social">
            <a href="https://x.com/realweb3dev" target="_blank" rel="noopener">
              <svg class="t-persons-social-links__svg" role="presentation" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
              viewBox="0 0 48 48"><g clip-path="url(#clip0_3697_102)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452
                 0 24C0 37.2548 10.7452 48 24 48ZM33.3482 14L25.9027 22.4686H25.9023L34 34H28.0445L22.5915 26.2348L15.7644 34H14L21.8082 25.1193L14
                 14H19.9555L25.119 21.3532L31.5838 14H33.3482ZM22.695 24.1101L23.4861 25.2173V25.2177L28.8746 32.7594H31.5847L24.9813 23.5172L24.1902
                 22.4099L19.1103 15.2997H16.4002L22.695 24.1101Z" fill="#1586f4"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3697_102">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://linkedin.com/in/gkozyrev" target="_blank" rel="noopener">
              <svg role="presentation" class="t-persons-social-links__svg" width="35" height="35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858
                50 50 50Zm23-31.0002V52.363c0-8.9114-4.7586-13.0586-11.1079-13.0586-5.1234 0-7.4123 2.8199-8.6942 4.7942v-4.1124h-9.6468c.1297
                2.7235 0 29.0136 0 29.0136h9.6484v-16.203c0-.8675.0657-1.731.3203-2.3513.6981-1.7351 2.284-3.5286 4.9491-3.5286 3.4905 0 4.8859
                2.6611 4.8859 6.5602v15.5227H73ZM53.1979 44.0986v.094h-.0632c.0069-.0111.0148-.0228.0229-.0346.0137-.0198.0281-.0401.0403-.0594ZM28
                31.0123C28 28.1648 30.1583 26 33.4591 26c3.3016 0 5.3302 2.1648 5.3934 5.0123 0 2.7851-2.0918 5.0156-5.4567 5.0156h-.064c-3.2351
                0-5.3318-2.2305-5.3318-5.0156Zm10.2177 37.9875h-9.6445V39.9862h9.6445v29.0136Z" fill="#1586f4"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="clients" class="stat_container p-4 flex flex-col gap-4 fadeup_block margin-container">
      <div class="self-center">
        <h2>{{ $t("index.clients") }}</h2>
      </div>
        <div id="statBlock" ref="statBlock" class="grid grid-cols-3 justify-around">
          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='50' :duration='1' suffix='+'/></b>
            <p class="stat-item">{{ $t("index.clients_dex_title") }}</p>
          </div>

          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='60' :duration='1' suffix='+'/></b>
            <p class="stat-item">{{ $t("index.clients_project_title") }}</p>
          </div>

          <div class="flex flex-col items-center">
            <b><CounterCard :startAmount='0' :endAmount='1' :duration='100' suffix='+'/></b>
            <p class="stat-item">{{ $t("index.clients_users_title") }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
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
#start_way::before{
  height: 60rem;
  border-width: 5px;
}

.hero-media-container {
  position: relative;
}

.hero-media-container video {
  width: 576px; /* Fixed max from original clamp */
  height: auto;
}

.hero a {
  color: #1586f4;
  font-size: 1.7rem; /* Fixed max */
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  border-width: 0px;
  border-radius: 15px;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transition: background-color 0s ease-in-out, color 0s ease-in-out, border-color 0s ease-in-out;
}

.text-jump-link {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.svg-arrow-wrapper {
  margin-left: 8px;
  display: flex;
  align-items: center;
}

.arrow-svg {
  transition: none;
  width: 40px;
  height: 40px;
}

.text-jump-link:hover .arrow-svg,
.text-jump-link:focus .arrow-svg {
  animation: jumpRightSVG 0.6s ease-out forwards;
}

@keyframes jumpRightSVG {
  from { transform: translateX(0); }
  to   { transform: translateX(12px); }
}

#development div.hero-media-container {
  overflow: hidden;
}

#market-making .hero-media-container img {
  width: 400px; /* Fixed max */
  height: auto;
  padding-top: 150px; /* Fixed max */
  margin-left: 80px; /* Fixed max */
}

#development .hero-text-container{
  padding-left: 8rem;
}

#about_us {
  position: relative;
}

#about_us h2 {
  font-size: 50px; /* Fixed max */
  font-weight: 700;
  text-align: center;
}

#about_us p {
  vertical-align: middle;
  color: #ffffff;
  font-size: 30px; /* Fixed max */
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.2;
  font-weight: 500;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  margin: 0 auto;
  text-align: center;
  padding: 0 20%;
  padding-bottom: 3rem;
}

#about_us .gif {
  border-radius: 20px;
  width: 100vw;
  height: auto;
}

#about_us .inside_image {
  position: absolute;
  width: auto;
  height: auto;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
}

#team h2 {
  font-size: 56px; /* Fixed max */
  text-align: center;
  line-height: 1.2;
  font-weight: 700;
  padding-top: 0px;
  padding-bottom: 40px;
  font-family: 'Montserrat';
  letter-spacing: 0px;
}

#team h3 {
  font-size: 32px; /* Fixed max */
  line-height: 1;
  color: #ffffff;
  font-weight: 700;
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: 'Montserrat';
}

#team .role {
  font-size: 20px; /* Fixed max */
  line-height: 1;
  color: #ffffff;
  font-weight: 500;
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-family: 'Montserrat';
}

#team .experience {
  font-size: 18px; /* Fixed max */
  line-height: 1;
  color: #ffffff;
  font-weight: 400;
  padding-top: 0px;
  padding-bottom: 0px; /* Fixed negative to 0 */
  font-family: 'Montserrat';
  text-transform: uppercase;
}

#team .social {
  padding-top: 1rem;
}

#team .social a {
  float: left;
  padding-right: 1rem;
}

#clients{
  padding-top: 8rem;
}

#clients h2 {
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
}

#clients p {
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

#clients b {
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

.photo_card {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 40px;
  width: 100%;
  /*height: 600px; Fixed max */
  border-radius: 30px;
}

#Dmitry-Vasilev-card {
  background-image: url("/dima.png");
}

#Georgy-Kozyrev-card {
  background-image: url("/georgy.png");
}

@media (min-width: 2241px) {
  #start_way::before {
    height: 70rem;
  }
}

@media (min-width: 1472px) and (max-width: 2240px) {
  #start_way::before {
    height: 60rem;
  }
}

@media (min-width: 1024px) and (max-width: 1471px) {
  #team h3 {
    font-size: 18px;
  }

  #team .role {
    font-size: 15px;
  }

  #team .experience {
    font-size: 12px;
  }
}

@media (min-width: 1212px) and (max-width: 1471px) {
  #start_way::before {
    height: 50rem;
  }
  .photo_card {
      height: 30rem;
  }
  #clients b {
    font-size: 80px;
  }

  #clients p {
    font-size: 24px;
  }
}

@media (min-width: 1025px) and (max-width: 1211px) {
  #start_way::before {
    height: 40rem;
  }
  #clients b {
    font-size: 80px;
  }

  #clients p {
    font-size: 24px;
  }
}

/* Tablets and smaller desktops (max-width: 1024px) */
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

  #start_way div:first-child, #market_making div:first-child, #consulting div:first-child { order: 1; }
  #start_way div:last-child, #market_making div:last-child, #consulting div:last-child { order: -1; }

  #market_making div.hero-text-container {
    padding-top: 15rem;
  }

  #market-making .hero-media-container img {
    max-width: 200px;
    padding-top: 5rem;
    margin-left: 0;
  }

  #development .hero-text-container{
    padding-left: unset;
  }

  #about_us .inside_image {
    width: 15vw;
  }

  #about_us p {
    padding: 0 5%;
  }

  .photo_card {
    height: auto;
    padding: 15px 20px;
  }

  #team .grid-cols-2 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  #clients {
    padding: 20px;
    min-height: auto;
    border-radius: 40px;
  }

  #clients b {
    font-size: 80px;
  }

  #clients p {
    font-size: 24px;
  }

  #clients h2 {
    font-size: 32px;
  }

  #team h2 {
    font-size: 32px;
    margin-bottom: 1.5rem;
  }
}

/* Планшеты (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  #start_way::before {
    height: 56rem;
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

  #start_way::before{
    height: 45rem;
  }

  #about_us .inside_image {

  }

  #about_us p {
    font-size: 1rem;
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

  .photo_card {
    padding: 10px 15px;
  }

  #team h3 {
    font-size: 18px;
  }

  #team .role {
    font-size: 15px;
  }

  #team .experience {
    font-size: 12px;
  }

  #statBlock{
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-top: 0;
    padding-bottom: 0;
  }

  #clients b {
    font-size: 3.5rem;
  }

  #clients p {
    font-size: 1rem;
  }

  #clients h2 {
    font-size: 2rem;
  }

  #team h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  #team h3 {
    font-size: 1.5rem;
  }

  #team .role {
    font-size: 1.125rem;
  }

  #team .experience {
    font-size: 1rem;
  }
}

@media (max-width: 520px) {
  #statBlock{
    flex-direction: column;
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
  #consulting{
    margin-bottom: 2%;
  }

  #about_us{
    margin-top: 10%;
  }
</style>
