<template>
  <header class="header desktop-header" @mouseenter="closeAllMenus"  @mouseleave="closeAllMenus">
    <div class="header-background"></div>
    <div class="header-logo">
      <a href="/">
        <img src="/greed_logo.svg" alt="GREED Labs" />
      </a>
    </div>
    <nav class="header-nav">
      <div class="nav-item market-making" 
           @mouseenter="openMarketMenu"
           @mouseleave="keepMenuOpen"
           @click="toggleMarketMenu">
        <a href="market-making" class="nav-link" @click="handleLinkClick">
          {{ $t('nav.marketMaking') }}
          <svg class="dropdown-arrow" :class="{ 'rotated': isMarketMenuOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="5786.73681640625 4997 11.5263671875 8.75"> 
            <path fill="#ffffff" fill-opacity="1" stroke="" stroke-opacity="0" stroke-width="1" id="tSvg47a8afa93b" 
              d="M 5792.5 4998L 5797.263139720814 5004.75L 5787.736860279186 5004.75Z" title="Polygon 1">
            </path>
          </svg>
        </a>
        <div v-if="isMarketMenuOpen" class="dropdown-menu" @mouseenter="keepMenuOpen" @mouseleave="closeMarketMenu">
          <div class="dropdown-background"></div>
          <div class="dropdown-content">
            <div class="dropdown-section">
              <a href="market-making#dex-services" class="dropdown-link main">{{ $t('nav.dexServices') }}</a>
              <a href="market-making#anti-snipe" class="dropdown-link sub">{{ $t('nav.antiSnipe') }}</a>
              <a href="market-making#volume-management" class="dropdown-link sub">{{ $t('nav.volumeManagement') }}</a>
              <a href="market-making#price-control" class="dropdown-link sub">{{ $t('nav.priceControl') }}</a>
            </div>
            <div class="dropdown-section">
              <a href="market-making#token-launch" class="dropdown-link main">{{ $t('nav.tokenLaunch') }}</a>
            </div>
            <div class="dropdown-section">
              <a href="market-making#cex-services" class="dropdown-link main">{{ $t('nav.cexServices') }}</a>
              <a href="market-making#liquidity-management" class="dropdown-link sub">{{ $t('nav.liquidityManagement') }}</a>
              <a href="market-making#cex-listing" class="dropdown-link sub">{{ $t('nav.cexListing') }}</a>
              <a href="market-making#order-optimization" class="dropdown-link sub">{{ $t('nav.orderOptimization') }}</a>
            </div>
          </div>
        </div>
      </div>
      <a href="development" class="nav-link">{{ $t('nav.development') }}</a>
      <a href="consulting" class="nav-link">{{ $t('nav.consulting') }}</a>
    </nav>
    <div class="language-switcher">
      <a href="#" id="ru-link" class="lang-link first-lang" :class="{ 'active': currentLang === 'ru' }" @click.prevent="switchLanguage('ru')">RU</a>
      <div class="lang-background" @click.prevent="changeLanguage(currentLang)">
        <div class="lang-indicator" :class="{ 'eng': currentLang === 'en' }" @click.prevent="changeLanguage(currentLang)"></div>
      </div>
      <a href="#" id="eng-link" class="lang-link second-lang" :class="{ 'active': currentLang === 'en' }" @click.prevent="switchLanguage('en')">ENG</a>
    </div>
    <div class="contact-dropdown" 
         @mouseenter="openContactMenu" 
         @mouseleave="keepMenuOpen"
         @click="toggleContactMenu">
      <a class="contact-button">
        {{ $t('nav.contactUs') }}
      </a>
      <div v-if="isContactMenuOpen" class="contact-dropdown-menu" @mouseenter="keepMenuOpen" @mouseleave="closeContactMenu">
        <div class="dropdown-background"></div>
        <div class="dropdown-content">
          <div class="contact-section">
            <a href="mailto:hello@greedlabs.org" class="contact-link">
              <img class="contact-icon" src="~/public/logos/mail.svg" alt="mail logo">
              hello@greedlabs.org
            </a>
            <a href="https://t.me/greedlabs" class="contact-link" target="_blank">
              <img class="contact-icon" src="~/public/logos/telegram.svg" alt="telegram logo">
              Telegram
            </a>
            <a href="https://linkedin.com/company/greedlabs" class="contact-link" target="_blank">
              <img class="contact-icon" src="~/public/logos/linkedin.svg" alt="linkedin logo">
              LinkedIn
            </a>
            <a href="https://x.com/greedlabs" class="contact-link" target="_blank">
              <img class="contact-icon" src="~/public/logos/x.svg" alt="x logo">
              X.com
            </a>
          </div>
          <div class="contact-section">
            <button class="consultation-btn" @click="scrollToConsultation">
              {{ $t('nav.freeConsultation') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header class="mobile-header">
    <div class="mobile-header-container">
      <div class="mobile-header-background"></div>
      <div class="mobile-logo">
        <a href="/">
          <img src="/greed_logo.svg" alt="GREED Labs" />
        </a>
      </div>
      <div class="hamburger-container" @click="toggleMobileMenu">
        <div class="hamburger-background"></div>
        <div class="hamburger-lines">
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
        </div>
      </div>
    </div>
  </header>
  <div v-if="isMobileMenuOpen" class="mobile-menu-overlay">
    <div class="mobile-menu-background"></div>
    <div class="mobile-menu-container">
      <div class="mobile-menu-header">
        <div class="language-switcher">
          <a href="#" id="ru-link" class="lang-link first-lang" :class="{ 'active': currentLang === 'ru' }" @click.prevent="switchLanguage('ru')">RU</a>
          <div class="lang-background" @click.prevent="changeLanguage(currentLang)">
            <div class="lang-indicator" :class="{ 'eng': currentLang === 'en' }" @click.prevent="changeLanguage(currentLang)"></div>
          </div>
          <a href="#" id="eng-link" class="lang-link second-lang" :class="{ 'active': currentLang === 'en' }" @click.prevent="switchLanguage('en')">ENG</a>
        </div>
      </div>
      <nav class="mobile-nav">
        <div class="mobile-nav-section">
          <a href="market-making" class="mobile-nav-link main" @click="closeMobileMenu">{{ $t('nav.marketMaking') }}</a>
        </div>
        <div class="mobile-nav-section">
          <a href="market-making#dex-services" class="mobile-nav-link main" @click="closeMobileMenu">{{ $t('nav.dexServices') }}</a>
          <a href="market-making#anti-snipe" class="mobile-nav-link sub" @click="closeMobileMenu">{{ $t('nav.antiSnipe') }}</a>
          <a href="market-making#volume-management" class="mobile-nav-link sub" @click="closeMobileMenu">{{ $t('nav.volumeManagement') }}</a>
          <a href="market-making#price-control" class="mobile-nav-link sub" @click="closeMobileMenu">{{ $t('nav.priceControl') }}</a>
        </div>
        <div class="mobile-nav-section">
          <a href="market-making#token-launch" class="mobile-nav-link main" @click="closeMobileMenu">{{ $t('nav.tokenLaunch') }}</a>
        </div>
        <div class="mobile-nav-section">
          <a href="market-making#cex-services" class="mobile-nav-link main" @click="closeMobileMenu">{{ $t('nav.cexServices') }}</a>
          <a href="market-making#liquidity-management" class="mobile-nav-link sub" @click="closeMobileMenu">{{ $t('nav.liquidityManagement') }}</a>
          <a href="market-making#cex-listing" class="mobile-nav-link sub" @click="closeMobileMenu">{{ $t('nav.cexListing') }}</a>
        </div>
        <div class="mobile-nav-section">
          <a href="development" class="mobile-nav-link main" @click="closeMobileMenu">{{ $t('nav.development') }}</a>
        </div>
        <div class="mobile-nav-section">
          <a href="consulting" class="mobile-nav-link main" @click="closeMobileMenu">{{ $t('nav.consulting') }}</a>
        </div>
      </nav>
      <div class="mobile-contacts">
        <a href="mailto:hello@greedlabs.org" class="mobile-contact-link">
          <img class="contact-icon" src="~/public/logos/mail.svg" alt="mail logo"> hello@greedlabs.org
        </a>
        <a href="https://t.me/greedlabs" class="mobile-contact-link">
          <img class="contact-icon" src="~/public/logos/telegram.svg" alt="telegram logo"> Telegram
        </a>
        <a href="https://linkedin.com/company/greedlabs" class="mobile-contact-link">
          <img class="contact-icon" src="~/public/logos/linkedin.svg" alt="linkedin logo"> LinkedIn
        </a>
        <a href="https://x.com/greedlabs" class="mobile-contact-link">
          <img class="contact-icon" src="~/public/logos/x.svg" alt="x logo"> X.com
        </a>
      </div>
      <button class="mobile-consultation-btn" @click="scrollToConsultation">
        {{ $t('nav.freeConsultation') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const i18n = useI18n()

const isMobileMenuOpen = ref(false)
const isMarketMenuOpen = ref(false)
const isContactMenuOpen = ref(false)
const currentLang = ref(i18n.locale.value || 'ru')
const isTouch = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const openMarketMenu = () => {
  if (!isTouch.value) {
    isMarketMenuOpen.value = true
    isContactMenuOpen.value = false
  }
}

const closeMarketMenu = () => {
  if (!isTouch.value) {
    isMarketMenuOpen.value = false
  }
}

const handleLinkClick = (event) => {
  if (isTouch.value && !isMarketMenuOpen.value) {
    toggleMarketMenu(event)
    event.preventDefault()
  }
}

const toggleMarketMenu = (event) => {
  if (isTouch.value) {
    event.stopPropagation()
    isMarketMenuOpen.value = !isMarketMenuOpen.value
    isContactMenuOpen.value = false
  }
}

const openContactMenu = () => {
  if (!isTouch.value) {
    isContactMenuOpen.value = true
    isMarketMenuOpen.value = false
  }
}

const closeContactMenu = () => {
  if (!isTouch.value) {
    isContactMenuOpen.value = false
  }
}

const toggleContactMenu = (event) => {
  if (isTouch.value) {
    event.stopPropagation()
    isContactMenuOpen.value = !isContactMenuOpen.value
    isMarketMenuOpen.value = false
  }
}

const keepMenuOpen = () => {}

const closeAllMenus = () => {
  isMarketMenuOpen.value = false
  isContactMenuOpen.value = false
}

const switchLanguage = async (lang) => {
  await i18n.setLocale(lang)
  currentLang.value = lang
}

const changeLanguage = (current) => {
  const newLang = current === 'ru' ? 'en' : 'ru'
  switchLanguage(newLang)
}

const scrollToConsultation = () => {
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  closeMobileMenu()
  closeAllMenus()
}

const handleClickOutside = (event) => {
  if (isTouch.value && !event.target.closest('.nav-item, .contact-dropdown, .dropdown-menu, .contact-dropdown-menu')) {
    closeAllMenus()
  }
}

watch(() => i18n.locale.value, (newLang) => {
  currentLang.value = newLang
})

watch(isMobileMenuOpen, (newValue) => {
  if (process.client) {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

const handleScroll = () => {
  closeAllMenus()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  if (process.client) {
    isTouch.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1023) {
        isMobileMenuOpen.value = false
      }
    })
    currentLang.value = i18n.locale.value
    if (isTouch.value) {
      document.addEventListener('click', handleClickOutside)
    }
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
    if (isTouch.value) {
      document.removeEventListener('click', handleClickOutside)
    }
  }
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  max-width: calc(3000px - 5.7%);
  width: 88vw;
  min-width: 340px;
  margin: 0 auto;
  height: 120px;
  z-index: 999999;
  display: flex;
  align-items: center;
  padding: 0 1.5vw;
  box-sizing: border-box;
  border-radius: 30px;
}

.header-background {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 30px;
  z-index: -1;
}

.header-logo img {
  width: 12rem;
  height: auto;
  display: block;
  padding-top: 0.5rem;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-left: 3rem;
  flex: 1;
  min-width: 0;
  position: relative;
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  align-items: center;
  display: flex;
}

.nav-item, .contact-dropdown {
  cursor: pointer;
}

.nav-link {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: #1586f4;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  width: 1vw;
  transform: rotate(-180deg);
}

.dropdown-arrow.rotated {
  transform: rotate(-270deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: clamp(-10px, -2vw, -20px);
  width: 40rem;
  z-index: -2;
}

.dropdown-background {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 2rem;
}

.dropdown-content {
  position: relative;
  padding: 2rem;
  z-index: 1;
}

.dropdown-section {
  margin-bottom: clamp(8px, 1.5vw, 15px);
}

.dropdown-section:last-child {
  margin-bottom: 0;
}

.dropdown-link {
  display: block;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.1vw;
  color: white;
  text-decoration: none;
  padding: clamp(3px, 0.6vw, 6px) 0;
  transition: color 0.2s ease;
  line-height: 1;
}

.dropdown-link.main {
  font-weight: 600;
  margin-bottom: clamp(3px, 0.5vw, 5px);
}

.dropdown-link.sub {
  font-weight: 500;
  color: #d2d2d2;
  padding-left: clamp(5px, 1vw, 10px);
}

.dropdown-link:hover {
  color: #1586f4;
}

.language-switcher {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 2rem;
}

.lang-background {
  width: 3.5rem;
  height: 1.7rem;
  background-color: #151515;
  border-radius: 100px;
  margin-right: 1rem;
  cursor: pointer;
}

.lang-indicator {
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  width: 1.3rem;
  height: 1.3rem;
  background-color: #1586f4;
  border-radius: 100px;
  transition: transform 0.3s ease;
}

.lang-indicator.eng {
  transform: translateX(1.6rem);
}

.lang-link {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
  text-decoration: none;
  padding: 0;
  z-index: 1;
  transition: color 0.2s ease;
}

.lang-link.active {
  color: #1586f4;
}

.lang-link:hover {
  color: #1586f4;
}

#ru-link{
  padding-right: 1rem;
}

.contact-dropdown {
  position: relative;
  height: 100%;
  align-items: center;
  display: flex;
}

.contact-button {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  padding: 1.6rem 1.3rem;
  border: 1px solid white;
  border-radius: 25px;
  transition: all 0.2s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.contact-button:hover {
  background-color: #1586f4;
  border-color: white;
}

.contact-dropdown-menu {
  position: absolute;
  top: 100%;
  width: 17vw;
  margin-top: 0;
  z-index: -2;
  right: -1.5vw;
}

.contact-section {
  margin-bottom: clamp(8px, 1.5vw, 15px);
}

.contact-section:last-child {
  margin-bottom: 0;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1vw;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.1vw;
  color: white;
  text-decoration: none;
  padding: 0.3vw 0;
  transition: color 0.2s ease;
  font-weight: 600;
}

.contact-link:hover {
  color: #1586f4;
}

.contact-icon {
  flex-shrink: 0;
  width: 1.5vw;
  height: 1.5vw;
}

.consultation-btn {
  width: 100%;
  background: linear-gradient(45deg, #1586f4, #0066cc);
  color: white;
  border: none;
  padding: 1vw 0;
  border-radius: 2rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 0.9vw;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1vw;
}

.consultation-btn:hover {
  background: linear-gradient(45deg, #141a45, #141a45);
}

.mobile-header {
  display: none;
  position: fixed;
  top: 13px;
  left: 20px;
  right: 20px;
  height: 59px;
  z-index: 999999;
}

.mobile-header-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
}

.mobile-header-background {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  z-index: -1;
}

.mobile-logo img {
  display: block;
  width: clamp(60px, 25vw, 99px);
  height: auto;
}

.hamburger-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(30px, 10vw, 39px);
  height: clamp(30px, 10vw, 39px);
  cursor: pointer;
}

.hamburger-background {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 11px;
}

.hamburger-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 1;
}

.hamburger-line {
  width: clamp(20px, 8vw, 30px);
  height: 4px;
  background-color: white;
  border-radius: 100px;
  transition: all 0.3s ease;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /*height: 100%;*/
  z-index: 999998;
  overflow-y: scroll;
}

.mobile-menu-background {
  position: absolute;
  inset: 0;
  background-color: rgba(43, 43, 43, 0.95);
  backdrop-filter: blur(20px);
  z-index: -1;
  height: 150%;
}

.mobile-menu-container {
  padding: clamp(40px, 15vh, 80px) clamp(10px, 5vw, 20px) clamp(10px, 5vw, 20px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(20px, 8vh, 40px);
}

.mobile-menu-logo img {
  display: block;
  width: clamp(60px, 25vw, 99px);
  height: auto;
}

.mobile-language-switcher {
  position: relative;
  display: flex;
  align-items: center;
  gap: clamp(5px, 2vw, 10px);
}

.mobile-lang-background {
  position: absolute;
  width: clamp(40px, 15vw, 60px);
  height: clamp(15px, 6vw, 25px);
  background-color: #151515;
  border-radius: 100px;
}

.mobile-lang-indicator {
  position: absolute;
  left: clamp(3px, 1vw, 5px);
  top: clamp(3px, 1vw, 5px);
  width: clamp(10px, 4vw, 15px);
  height: clamp(10px, 4vw, 15px);
  background-color: #1586f4;
  border-radius: 100px;
  transition: transform 0.3s ease;
}

.mobile-lang-indicator.eng {
  transform: translateX(clamp(20px, 8vw, 30px));
}

.mobile-lang-link {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: clamp(11px, 4vw, 14px);
  font-weight: 400;
  color: white;
  text-decoration: none;
  padding: clamp(3px, 1vw, 5px) clamp(8px, 3vw, 15px);
  z-index: 1;
}

.mobile-lang-link.active {
  color: #1586f4;
}

.mobile-menu-icon {
  display: flex;
  justify-content: center;
  margin-bottom: clamp(20px, 8vh, 40px);
}

.mobile-menu-icon svg {
  width: clamp(40px, 15vw, 60px);
  height: clamp(40px, 15vw, 60px);
}

.mobile-nav {
  flex: 1;
  margin-bottom: clamp(15px, 6vh, 30px);
}

.mobile-nav-section {
  margin-bottom: clamp(10px, 4vh, 20px);
}

.mobile-nav-link {
  display: block;
  font-family: 'Montserrat', Arial, sans-serif;
  color: white;
  text-decoration: none;
  padding: clamp(4px, 1.5vw, 8px) 0;
  transition: color 0.2s ease;
  line-height: 1.55;
}

.mobile-nav-link.main {
  font-size: clamp(14px, 5vw, 18px);
  font-weight: 600;
  margin-bottom: clamp(5px, 2vw, 10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: clamp(5px, 2vw, 10px);
}

.mobile-nav-link.sub {
  font-size: clamp(12px, 4.5vw, 16px);
  font-weight: 400;
  color: #d2d2d2;
  padding-left: clamp(10px, 4vw, 20px);
  margin-bottom: clamp(3px, 1vw, 5px);
}

.mobile-nav-link:hover {
  color: #1586f4;
}

.mobile-contacts {
  margin-bottom: clamp(15px, 6vh, 30px);
}

.mobile-contacts a{
  display: flex;
  align-items: center;
}

.mobile-contacts img {
  float: left;
  margin-right: 1rem;
}

.mobile-contact-link {
  display: block;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: clamp(12px, 4.5vw, 16px);
  color: white;
  text-decoration: none;
  padding: clamp(5px, 2vw, 10px) 0;
  transition: color 0.2s ease;
}

.mobile-contact-link:hover {
  color: #1586f4;
}

.mobile-consultation-btn {
  width: 100%;
  background: linear-gradient(45deg, #1586f4, #0066cc);
  color: white;
  border: none;
  padding: clamp(10px, 4vw, 20px) clamp(12px, 4.5vw, 24px);
  border-radius: 15px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  font-size: clamp(14px, 5vw, 18px);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: clamp(10px, 4vh, 20px);
}

.mobile-consultation-btn:hover {
  background: linear-gradient(45deg, #0066cc, #004499);
}
@media (max-width: 2600px) {
  .dropdown-menu {
    width: 30rem;
  }
}

@media (max-width: 2000px) {
  .dropdown-menu {
    width: 25rem;
  }
}

@media (min-width: 2000px) {
  .header a, .header p {
    font-size: 1.8rem;
  }
}

@media (max-width: 1500px) {
  .dropdown-menu {
    width: 20rem;
  }
}

@media (max-width: 1388px) {
  .nav-link {
    font-size: 1rem;
  }
  .lang-link{
    font-size: 1rem;
  }
  .contact-button{
    font-size: 1rem;
  }
  .lang-background {
    width: 2.4rem;
    height: 1.2rem;
    margin-right: 1rem;
  }
  .lang-indicator {
    width: 0.8rem;
    height: 0.8rem;
  }
  .lang-indicator.eng {
    transform: translateX(1rem);
  }
}

@media (max-width: 1200px) {
  .header {
    height: 64px;
  }
  .header-nav {
    gap: 1rem;
  }
  .contact-button{
    padding: 0.6rem 0.6rem;
    border-radius: 15px;
  }
}

@media (max-width: 1023px) {
  .desktop-header {
    display: none;
  }
  .mobile-header {
    display: block;
  }
}

@media (max-width: 768px) {
  .mobile-header {
    left: 15px;
    right: 15px;
  }
}

@media (max-width: 480px) {
  .mobile-header {
    left: 10px;
    right: 10px;
  }
}

@media (max-width: 360px) {
  .mobile-header {
    left: 5px;
    right: 5px;
  }
}
</style>
