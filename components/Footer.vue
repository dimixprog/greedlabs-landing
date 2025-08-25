<template>
    <footer>
      <div class="footer-container">
        <div id="logo-and-social" class="flex flex-row justify-between items-center">
          <img class="logo" src="~/public/greed_logo.svg" width="190" height="70" alt="greed_logo">
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
        <a id="email" href="mailto:hello@greedlabs.org">
          hello@greedlabs.org
        </a>
        <p id="copyright">
          {{ $t("footer.copyright") }}
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
  background: linear-gradient(135deg, #33fcff, #1488f4);
  border-radius: 75px;
  overflow: visible;
  height: 280px;
  width: 100%;
  padding: 0px;
  padding-top: 10px;
}
.footer-container {
  position: absolute;
  top: 5px;
  left: 0px;
  right: 0;
  background-color: #1b1b1b;
  height: 280px;
  border-radius: 75px;
  margin: auto;
  padding: 20px;
}
#logo-and-social{
  padding: 1rem 5rem;
}

#logo-and-social .logo{
  padding-top: 1rem;
}

.footer-social{
  margin-right: 2rem;
}

.footer-social img{
  width: 2.5rem;
  margin: 0.8rem;
}

#email{
  padding-left: 5rem;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 1rem;
}

#copyright{
  padding-left: 5rem;
  font-size: 1rem;
  font-weight: 500;
  padding-top: 1.5rem;
}

/* Mobile devices (max-width: 560px) */
@media (max-width: 560px) {
  #logo-and-social{
    padding: 1.5rem 0;
    justify-content: center;
  }
  .footer-social {
    margin-right: 0;
  }
  #email{
    padding-left: 0;
  }

  #copyright{
    padding-left: 0;
  }
}
@media (max-width: 480px) {
  footer{
    border-radius: 0;
    height: auto;
  }
  .footer-container {
    top: 3px;
    border-radius: 0;
    padding: 0.5rem;
    height: auto;
  }
  #logo-and-social {
    padding: 0;
    justify-content: space-between;
  }
  #logo-and-social .logo{
    width: 40%;
    height: 100%;
  }
  .footer-social img {
    width: 1.5rem;
    margin: 0.5rem;
  }
  #email {
    font-size: 1rem;
  }
  #copyright {
    font-size: 0.5rem;
    padding-top: 0.5rem;
  }
}
</style>