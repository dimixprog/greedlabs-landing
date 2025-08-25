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
  padding-top: var(--spacing-xs);
  z-index: 10;
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
  padding: var(--spacing-md);
  z-index: 11;
}
#logo-and-social{
  padding: var(--spacing-sm) var(--spacing-2xl);
}

#logo-and-social .logo{
  padding-top: var(--spacing-sm);
}

.footer-social{
  margin-right: var(--spacing-lg);
}

.footer-social img{
  width: 2.5rem;
  margin: var(--spacing-sm);
}

#email{
  padding-left: var(--spacing-2xl);
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: var(--spacing-sm);
}

#copyright{
  padding-left: var(--spacing-2xl);
  font-size: 1rem;
  font-weight: 500;
  padding-top: var(--spacing-md);
}

/* Mobile devices (max-width: 560px) */
@media (max-width: 560px) {
  #logo-and-social{
    padding: var(--spacing-md) 0;
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
    margin-top: 0;
  }
  .footer-container {
    top: 3px;
    border-radius: 0;
    padding: var(--spacing-xs);
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
    margin: var(--spacing-xs);
  }
  #email {
    font-size: 1rem;
  }
  #copyright {
    font-size: 0.5rem;
    padding-top: var(--spacing-xs);
  }
}
</style>