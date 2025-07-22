<!-- pages/index.vue -->
<template>
  <div>
    <Hero id="start_way" class="grid grid-cols-7 justify-between items-center">
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

    <Hero id="market_making" class="grid grid-cols-7 justify-between items-center pt-[120px]">
      <div class="hero-text-container col-span-4">
        <h2 class="colorized-text">{{ $t("index.market_making") }}</h2>
        <p>
          {{ $t("index.market_making_desc") }}
        </p>
        <a href="/market-maker">{{ $t("index.more") }}</a>
      </div>
      <ClientOnly>
        <CandlesCube class="col-span-3 m-auto"/>
      </ClientOnly>
    </Hero>

    <Hero id="development" class="grid grid-cols-7 justify-between items-center">
      <Cubes3D class="col-span-3 m-auto"/>
      <div class="hero-text-container col-span-4">
        <h2 class="colorized-text">{{ $t("index.development") }}</h2>
        <p>
          {{ $t("index.development_desc") }}
        </p>
        <a href="/development">{{ $t("index.more") }}</a>
      </div>
    </Hero>

    <Hero id="consulting" class="grid grid-cols-7 justify-between items-center">
      <div class="col-span-3">
        <h2 class="colorized-text">{{ $t("index.consulting") }}</h2>
        <p>{{ $t("index.consulting_desc") }}</p>
        <a href="/consulting">{{ $t("index.more") }}</a>
      </div>
      <div class="col-span-1"></div>
      <ClientOnly>
        <OrbitTrail class="col-span-3  m-auto"/>
      </ClientOnly>
    </Hero>


    <div id="about_us" class="flex flex-col items-center mb-[120px]">
      <h2 class="colorized-text">{{ $t("index.about_us") }}</h2>
      <p>
        {{ $t("index.about_us_desc") }}
      </p>
      <div class="flex items-center justify-center">
        <img class="gif" src="~/public/MConvertereu_retrof.gif" alt="MConvertereu">
        <img class="inside_image" src="~/public/logo_opacity.webp" alt="MConvertereu">
      </div>
    </div>

    <div id="team">
      <h2>{{ $t("index.team") }}</h2>
      <div class="grid grid-cols-2 gap-16 mx-8 flex-row justify-between mb-[120px]">
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

    <div id="clients" class="stat_container border border-gray-300 p-4 rounded-[80px] min-h-[540px] flex flex-col p-[60px] gap-4">
      <div class="self-center text-2xl mb-[60px]">
        <h2>{{ $t("index.clients") }}</h2>
      </div>

      <div class="flex flex-row justify-around">
        <div class="flex flex-col items-center">
          <b>{{ $t("index.clients_dex_count") }}</b>
          <p>{{ $t("index.clients_dex_title") }}</p>
        </div>

        <div class="flex flex-col items-center">
          <b>{{ $t("index.clients_project_count") }}</b>
          <p>{{ $t("index.clients_project_title") }}</p>
        </div>

        <div class="flex flex-col items-center">
          <b>{{ $t("index.clients_users_count") }}</b>
          <p>{{ $t("index.clients_users_title") }}</p>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
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
  width: 100%;
  height: auto;
}

#about_us .inside_image {
  position: absolute;
  width: auto;
  height: auto;
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

#clients h2 {
  vertical-align: middle;
  color: #ffffff;
  font-size: 2.2rem;
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
  font-size: 2rem;
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
  font-size: 128px; /* Fixed max */
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}

.photo_card {
  background-position: center -100px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 40px;
  width: 100%;
  height: 600px; /* Fixed max */
  border-radius: 30px;
}

#Dmitry-Vasilev-card {
  background-image: url("/dima.png");
}

#Georgy-Kozyrev-card {
  background-image: url("/georgy.png");
}

/* Media Queries for Basic Adjustments (without clamp) */

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

  #team h3 {
    font-size: 24px;
  }

  #team .role {
    font-size: 20px;
  }

  #team .experience {
    font-size: 16px;
  }
}

/* Mobile devices (max-width: 640px) */
@media (max-width: 640px) {
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
    max-height: 400px;
    padding: 10px 15px;
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
</style>
