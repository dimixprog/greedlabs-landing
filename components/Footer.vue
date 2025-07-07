<template>
    <footer>
      <div class="footer-container">
        <div class="flex flex-row justify-between items-center">
          <img src="~/public/greed_logo.svg" width="190" height="70" alt="greed_logo">
          <div class="footer-social flex flex-row gap-4">
            <a href="https://www.linkedin.com/company/greedlabs">
              <img src="~/public/logos/linkedin.svg" alt="linkedin logo">
            </a>
            <a href="https://x.com/GREED_Labs">
              <img src="~/public/logos/x.svg" alt="linkedin logo">
            </a>
            <a href="https://t.me/greedlabs">
              <img src="~/public/logos/telegram.svg" alt="linkedin logo">
            </a>
          </div>
        </div>
        <a href="mailto:hello@greedlabs.org">
          hello@greedlabs.org
        </a>
        <p>
          © 2017-2025 GREED LABS. All rights reserved.
        </p>
      </div>
    </footer>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
footer {
  position: relative;

  /* background-color: rgb(51, 250, 255); */
  background: linear-gradient(135deg, #33fcff, #1488f4);

  border-radius: 50px;

  overflow: visible;

  height: 200px;
  width: 100%;
  padding: 0px;
  padding-top: 10px;
  
    
    /* background-color: #c0c0c046; */
}
.footer-container {

  position: absolute;
  top: 4px; /* или больше, если нужно сильнее перекрыть */
  left: 0px;
  right: 0;
  margin: auto;

  /* position: absolute; */
  background-color: #1b1b1b;

  height: 200px;
  border-radius: 50px;
  /* width: 100%; */

  margin: auto;
  padding: 30px;
}
</style>