<template>
    <div class="hero">
        <slot />
    </div>
</template>

<style>
.hero{
    margin-bottom: var(--spacing-2xl);
    margin-top: var(--spacing-lg);
}

.hero h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
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
    padding-bottom: var(--spacing-lg);
}

/* Мобильные устройства (max-width: 768px) */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    /*align-items: center;*/
    margin-bottom: var(--spacing-xl);
    padding: 0;
  }
  .hero h2 {
    font-size: 32px;
    /*text-align: center;*/
  }
  .hero p {
    font-size: 18px;
    /*text-align: center;*/
    padding-bottom: var(--spacing-sm);
  }
}

/* Mobile devices (max-width: 640px) */
@media (max-width: 640px) {
  .hero {
    overflow: hidden;
    margin-bottom: var(--spacing-lg);
    margin-top: 0;
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
}
</style>