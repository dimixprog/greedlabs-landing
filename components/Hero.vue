<template>
    <div class="hero">
        <slot />
    </div>
</template>

<style>
.hero{
    margin-bottom: 15%;
    margin-top: 5%;
}

.hero h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 2%;
    line-height: 1;
}
.hero p {
    vertical-align: middle;
    color: #ffffff;
    font-size: 30px;
    font-family: 'Montserrat', Arial, sans-serif;
    line-height: 1.2;
    font-weight: 500;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    padding-bottom: 5%;
}
.hero button{
    color: #ffffff;
    font-size: 18px;
    font-family: 'Montserrat', Arial, sans-serif;
    line-height: 1.55;
    font-weight: 600;
    letter-spacing: -0.5px;
    border-radius: 30px 30px 30px 30px;
    background-position: center center;
    border-color: #ffffff;
    border-style: solid;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 1);
    height: 80px;
    padding: 0 50px;
}

/* Мобильные устройства (max-width: 768px) */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    /*align-items: center;*/
    margin-bottom: 10%;
    padding: 0 10px;
  }
  .hero h2 {
    font-size: 32px;
    /*text-align: center;*/
  }
  .hero p {
    font-size: 18px;
    /*text-align: center;*/
    padding-bottom: 3%;
  }
  .hero button {
    font-size: 16px;
    height: 60px;
    padding: 0 30px;
  }
}

/* Mobile devices (max-width: 640px) */
@media (max-width: 640px) {
  .hero {
    overflow: hidden;
    margin-left: 3% !important;
    margin-right: 3% !important;
  }
  .hero button {
    font-size: 12px;
    border-radius: 20px 20px 20px 20px;
    height: 50px;
    padding: 0 20px;
  }
}
</style>

<style scoped>
/* Адаптивные стили */


/* Планшеты (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .hero div h2 {
    font-size: 40px;
  }
  .hero div p {
    font-size: 24px;
  }
  .hero div button {
    font-size: 16px;
    height: 70px;
    padding: 0 40px;
  }
}

/* Десктопы (min-width: 1025px) */
@media (min-width: 1025px) {
  .hero {
    overflow: hidden;
    flex-direction: row;
    justify-content: space-between;
  }
}
@media (min-width: 1471px) {
  .hero .colorized-text {
    font-size: 40rem;
  }
  .hero p {
    font-size: 24rem;
  }
  .hero button {
    font-size: 16rem;
    height: 70px;
    padding: 0 4rem;
  }
}
</style>