<!-- layouts/default.vue -->

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="mainContainer">

    <Header />


    <main>
      <slot />

      <GetConsult />
    </main>

    <Footer />

  </div>
</template>

<style>
.card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* color: white; */
  background-color: #222222;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
}
html {
  padding: 0px;
  margin: 0px;
}
body {
    background-color: #1d1d1d;
    color: white;
    font-family: 'Montserrat',Arial,sans-serif;
    padding: 0px;
    margin: 0px;
}
/* h1, h2, h3, h4, h5, h6 {
    text-align: center;
} */
.colorized-text {
  background: linear-gradient(0.273turn,rgba(52,251,255,1) 0%,rgba(21,134,244,1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<style scoped>
header {
  padding: 1rem;
}
main {
  padding: 6%;
  /* padding-top: 6%; */
  margin: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>