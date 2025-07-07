<template>
    <div class="hero">
        <slot />
    </div>
</template>

<style>
.hero h2 {
    font-size: 50px;
    font-weight: 700;
}
.hero p {
    font-size: 18px;
    font-weight: 500;
}
</style>

<style scoped>
.hero::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: url("/hero_background.webp");

  background-color: rgba(17, 17, 17, 1.0);
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}
.hero {
    display: flex;

    /* z-index: 10; */
    height: 100vh;
}
</style>