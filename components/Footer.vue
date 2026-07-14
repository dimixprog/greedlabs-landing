<template>
  <footer>
    <div class="footer-container">
      <div class="footer-body">
        <!-- Brand -->
        <div class="footer-brand">
          <img class="logo" src="~/public/greed-logo.svg" width="160" height="58" alt="GREED Labs logo">
          <p class="footer-tagline">{{ $t('footer.tagline') }}</p>
          <a class="footer-email" href="mailto:hello@greedlabs.org">hello@greedlabs.org</a>
        </div>

        <!-- Nav links -->
        <div class="footer-nav">
          <p class="footer-nav-title">{{ $t('footer.quick_links') }}</p>
          <nav>
            <a href="/">{{ $t('nav.marketMaking') }}</a>
            <NuxtLink to="/dex-market-making">{{ $t('nav.dexServices') }}</NuxtLink>
            <NuxtLink to="/cex-market-making">{{ $t('nav.cexServices') }}</NuxtLink>
            <NuxtLink to="/token-launch">{{ $t('nav.tokenLaunch') }}</NuxtLink>
            <NuxtLink to="/faq">{{ $t('nav.faq') }}</NuxtLink>
          </nav>
        </div>

        <!-- Social -->
        <div class="footer-social-col">
          <p class="footer-nav-title">Follow Us</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/greedlabs" aria-label="LinkedIn">
              <img src="~/public/logos/linkedin.svg" alt="LinkedIn">
            </a>
            <a href="https://x.com/GREED_Labs" aria-label="X (Twitter)">
              <img src="~/public/logos/x.svg" alt="X">
            </a>
            <a href="https://t.me/greedlabs" aria-label="Telegram">
              <img src="~/public/logos/telegram.svg" alt="Telegram">
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-copyright">{{ $t('footer.copyright') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
footer {
  position: relative;
  background: linear-gradient(135deg, #34fbff, #1488f4);
  border-radius: 32px;
  width: 100%;
  padding: 2px;
  z-index: 10;
}

.footer-container {
  background: #131517;
  border-radius: 30px;
  padding: var(--spacing-2xl) var(--spacing-3xl) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.footer-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

/* Brand column */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.logo {
  display: block;
}

.footer-tagline {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.5;
  margin: 0;
  max-width: 22ch;
}

.footer-email {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-email:hover {
  color: #34fbff;
}

/* Nav column */
.footer-nav-title {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 0 var(--spacing-md);
}

.footer-nav nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-nav nav a {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-nav nav a:hover {
  color: #34fbff;
}

/* Social column */
.footer-social-col {
  display: flex;
  flex-direction: column;
}

.footer-social {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-md);
  align-items: center;
}

.footer-social a {
  opacity: 0.65;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
}

.footer-social a:hover {
  opacity: 1;
}

.footer-social img {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding-top: var(--spacing-md);
  display: flex;
  justify-content: flex-end;
}

.footer-copyright {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 400;
}

/* Tablet */
@media (max-width: 768px) {
  .footer-container {
    padding: var(--spacing-xl) var(--spacing-xl) var(--spacing-md);
  }

  .footer-body {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    justify-content: center;
  }
}

/* Mobile */
@media (max-width: 480px) {
  footer {
    border-radius: 20px;
    padding: 1.5px;
  }

  .footer-container {
    border-radius: 19px;
    padding: var(--spacing-lg) var(--spacing-md) var(--spacing-sm);
    gap: var(--spacing-lg);
  }

  .footer-body {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .footer-brand {
    grid-column: 1;
  }

  .footer-bottom {
    justify-content: center;
  }

  .footer-copyright {
    font-size: 0.72rem;
    text-align: center;
  }
}
</style>
