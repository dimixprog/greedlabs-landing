<template>
    <div class="hero-media-container">
        <video class="charts_flow" src="~/public/index_hero_2.webm" autoplay muted loop playsinline preload="auto"></video>
        <img class="cube_with_logo" src="~/public/logo_cube.png" alt="logo cube">
    </div>
</template>

<style scoped>
.hero-media-container {
    position: relative;
}
.charts_flow{
    height: 32rem;
}
.cube_with_logo{
    position: absolute;
    top: 30rem;
    left: 8rem;
    width: 25rem;
}

    /* Мобильные устройства (max-width: 768px) */
@media (max-width: 768px) {
  h2 {
    font-size: 32px;
  }
  .hero {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;
    padding: 0 10px;
  }
  .hero h2 {
    font-size: 32px;
    text-align: center;
  }
  .hero p {
    font-size: 18px;
    text-align: center;
    padding-bottom: 3%;
  }
  .hero button {
    font-size: 16px;
    height: 60px;
    padding: 0 30px;
  }
  .hero::before {
    height: 120%; /* Уменьшаем высоту для мобильных */
  }
}

@media (max-width:570px) {
  .cube_with_logo {
    position: absolute;
    top: 25rem;
    left: 2rem;
    width: 25rem;
  }
}
@media (max-width:480px) {
  .cube_with_logo {
    top: 24rem;
    left: 3.5rem;
    width: 15rem;
  }
}

@media (min-width: 571px) and(max-width:640px) {
  .cube_with_logo {
    position: absolute;
    top: 30rem;
    left: 4rem;
    width: 25rem;
  }
}

/* Планшеты (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .hero h2 {
    font-size: 40px;
  }
  .hero p {
    font-size: 24px;
  }
  .hero button {
    font-size: 16px;
    height: 70px;
    padding: 0 40px;
  }
  .hero::before {
    height: 56rem;
  }
}
@media (min-width: 1024px) and (max-width: 1171px) {
  h2 {
    font-size: 40px;
  }
  .cube_with_logo{
    top: 26rem;
    left: 3rem;
}
}

@media (min-width: 1172px) and (max-width: 1271px) {
  .cube_with_logo{
    top: 27rem;
    left: 4rem;
}
}

@media (min-width: 1272px) and (max-width: 1371px) {
  .cube_with_logo{
    top: 28rem;
    left: 5rem;
}
}

@media (min-width: 1372px) and (max-width: 1471px) {
  .cube_with_logo{
    top: 29rem;
    left: 6rem;
}
}
@media (min-width: 1471px) and (max-width: 5000px) {
  .cube_with_logo {
      top: 30rem;
      left: 6rem;
      width: 28rem;
  }
}
</style>
