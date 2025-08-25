<!-- layouts/default.vue -->

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="mainContainer" id="root">

    <Header />


    <main>
      <slot />

      <GetConsult />
    </main>

    <Footer />

  </div>
</template>

<style>
/* CSS Variables for Standardized Spacing */
:root {
  /* Base spacing scale (8px base) */
  --spacing-xs: 8px;    /* 8px */
  --spacing-sm: 16px;   /* 16px */
  --spacing-md: 24px;   /* 24px */
  --spacing-lg: 32px;   /* 32px */
  --spacing-xl: 48px;   /* 48px */
  --spacing-2xl: 64px;  /* 64px */
  --spacing-3xl: 96px;  /* 96px */
  --spacing-4xl: 128px; /* 128px */
  
  /* Section spacing */
  --section-padding-y: var(--spacing-3xl);
  --section-padding-x: var(--spacing-lg);
  
  /* Component spacing */
  --component-padding: var(--spacing-md);
  --card-padding: var(--spacing-lg);
  
  /* Container margins */
  --container-margin-x: 6%;
}

/* Utility Classes for Padding */
.p-xs { padding: var(--spacing-xs); }
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }
.p-xl { padding: var(--spacing-xl); }
.p-2xl { padding: var(--spacing-2xl); }
.p-3xl { padding: var(--spacing-3xl); }
.p-4xl { padding: var(--spacing-4xl); }

/* Padding Top */
.pt-xs { padding-top: var(--spacing-xs); }
.pt-sm { padding-top: var(--spacing-sm); }
.pt-md { padding-top: var(--spacing-md); }
.pt-lg { padding-top: var(--spacing-lg); }
.pt-xl { padding-top: var(--spacing-xl); }
.pt-2xl { padding-top: var(--spacing-2xl); }
.pt-3xl { padding-top: var(--spacing-3xl); }
.pt-4xl { padding-top: var(--spacing-4xl); }

/* Padding Bottom */
.pb-xs { padding-bottom: var(--spacing-xs); }
.pb-sm { padding-bottom: var(--spacing-sm); }
.pb-md { padding-bottom: var(--spacing-md); }
.pb-lg { padding-bottom: var(--spacing-lg); }
.pb-xl { padding-bottom: var(--spacing-xl); }
.pb-2xl { padding-bottom: var(--spacing-2xl); }
.pb-3xl { padding-bottom: var(--spacing-3xl); }
.pb-4xl { padding-bottom: var(--spacing-4xl); }

/* Padding Left */
.pl-xs { padding-left: var(--spacing-xs); }
.pl-sm { padding-left: var(--spacing-sm); }
.pl-md { padding-left: var(--spacing-md); }
.pl-lg { padding-left: var(--spacing-lg); }
.pl-xl { padding-left: var(--spacing-xl); }
.pl-2xl { padding-left: var(--spacing-2xl); }
.pl-3xl { padding-left: var(--spacing-3xl); }
.pl-4xl { padding-left: var(--spacing-4xl); }

/* Padding Right */
.pr-xs { padding-right: var(--spacing-xs); }
.pr-sm { padding-right: var(--spacing-sm); }
.pr-md { padding-right: var(--spacing-md); }
.pr-lg { padding-right: var(--spacing-lg); }
.pr-xl { padding-right: var(--spacing-xl); }
.pr-2xl { padding-right: var(--spacing-2xl); }
.pr-3xl { padding-right: var(--spacing-3xl); }
.pr-4xl { padding-right: var(--spacing-4xl); }

/* Padding X (horizontal) */
.px-xs { padding-left: var(--spacing-xs); padding-right: var(--spacing-xs); }
.px-sm { padding-left: var(--spacing-sm); padding-right: var(--spacing-sm); }
.px-md { padding-left: var(--spacing-md); padding-right: var(--spacing-md); }
.px-lg { padding-left: var(--spacing-lg); padding-right: var(--spacing-lg); }
.px-xl { padding-left: var(--spacing-xl); padding-right: var(--spacing-xl); }
.px-2xl { padding-left: var(--spacing-2xl); padding-right: var(--spacing-2xl); }
.px-3xl { padding-left: var(--spacing-3xl); padding-right: var(--spacing-3xl); }
.px-4xl { padding-left: var(--spacing-4xl); padding-right: var(--spacing-4xl); }

/* Padding Y (vertical) */
.py-xs { padding-top: var(--spacing-xs); padding-bottom: var(--spacing-xs); }
.py-sm { padding-top: var(--spacing-sm); padding-bottom: var(--spacing-sm); }
.py-md { padding-top: var(--spacing-md); padding-bottom: var(--spacing-md); }
.py-lg { padding-top: var(--spacing-lg); padding-bottom: var(--spacing-lg); }
.py-xl { padding-top: var(--spacing-xl); padding-bottom: var(--spacing-xl); }
.py-2xl { padding-top: var(--spacing-2xl); padding-bottom: var(--spacing-2xl); }
.py-3xl { padding-top: var(--spacing-3xl); padding-bottom: var(--spacing-3xl); }
.py-4xl { padding-top: var(--spacing-4xl); padding-bottom: var(--spacing-4xl); }

/* Section Spacing */
.section-spacing { padding: var(--section-padding-y) var(--section-padding-x); }
.section-spacing-y { padding-top: var(--section-padding-y); padding-bottom: var(--section-padding-y); }
.section-spacing-x { padding-left: var(--section-padding-x); padding-right: var(--section-padding-x); }

video {
  outline: none;
  border: none;
  box-shadow: none;
  background: none;
}
video:focus {
  outline: none;
}
.card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* color: white; */
  background-color: #222222;
  border-radius: 12px;
  padding: var(--card-padding);
  margin: var(--spacing-sm);
}
html {
  padding: 0px;
  margin: 0px;
}
#root{
  max-width: 3000px;
  margin: 0 auto;
}
body {
    background-color: #1b1b1b;
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
.margin-container {
  margin-left: var(--container-margin-x);
  margin-right: var(--container-margin-x);
  max-width: 3000px;
}

@media (max-width: 640px) {
  .margin-container {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (min-width:2000px) {
  main{
    zoom:1.2;
  }
}

@media (max-width:1999px) {
  .margin-container {
    padding-left: unset;
    padding-right: unset;
  }
}

@media (min-width:2650px) {
  .margin-container {
    /*padding-left: unset;
    padding-right: unset;
    margin-left: auto;
    margin-right: auto;*/
  }
}

@media (min-width:3000px) {
  main{
    zoom:1.2;
  }
}
</style>

<style scoped>
#root {
  white-space: pre-line;
}
header {
  padding: 1rem;
}
main {
  padding-bottom: 0;
  margin: 0px;
  max-width: 3000px;
  margin: 0 auto;

  /*display: flex;
  flex-direction: column;
  align-items: center;*/
}
</style>