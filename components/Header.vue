<template>
  <header class="header desktop-header" @mouseenter="closeAllMenus"  @mouseleave="closeAllMenus">
    <div class="header-background"></div>
    <div class="header-logo">
      <a href="/">
        <img src="/greed-logo.svg" alt="GREED Labs" />
      </a>
    </div>
    <nav class="header-nav">
      <a href="/#dex-services" class="nav-link">{{ $t('nav.dexServices') }}</a>
      <a href="/#token-launch" class="nav-link">{{ $t('nav.tokenLaunch') }}</a>
      <a href="/#cex-services" class="nav-link">{{ $t('nav.cexServices') }}</a>
      <a href="/#how-it-works" class="nav-link">{{ $t('nav.howItWorks') }}</a>
      <a href="/#verify-team" class="nav-link">{{ $t('nav.verifyTeam') }}</a>
    </nav>
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
            <a href="https://x.com/greed_labs" class="contact-link" target="_blank">
              <img class="contact-icon" src="~/public/logos/x.svg" alt="x logo">
              X.com
            </a>
          </div>
          <div class="contact-section">
            <a href="https://t.me/greedlabs_bot" class="consultation-btn" target="_blank">
              {{ $t('nav.freeConsultation') }}
            </a>
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
          <img src="/greed-logo.svg" alt="GREED Labs" />
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
  <Transition name="menu-fade">
    <div v-if="isMobileMenuOpen" class="mobile-menu-overlay">
      <div class="mobile-menu-background"></div>
      <div class="mobile-menu-container">
        <div class="mobile-menu-top"></div>
        <nav class="mobile-nav">
          <a href="/#dex-services" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-index">01</span>
            <span class="nav-text">{{ $t('nav.dexServices') }}</span>
            <span class="nav-arrow">→</span>
          </a>
          <a href="/#token-launch" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-index">02</span>
            <span class="nav-text">{{ $t('nav.tokenLaunch') }}</span>
            <span class="nav-arrow">→</span>
          </a>
          <a href="/#cex-services" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-index">03</span>
            <span class="nav-text">{{ $t('nav.cexServices') }}</span>
            <span class="nav-arrow">→</span>
          </a>
          <a href="/#how-it-works" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-index">04</span>
            <span class="nav-text">{{ $t('nav.howItWorks') }}</span>
            <span class="nav-arrow">→</span>
          </a>
          <a href="/#verify-team" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-index">05</span>
            <span class="nav-text">{{ $t('nav.verifyTeam') }}</span>
            <span class="nav-arrow">→</span>
          </a>
        </nav>
        <div class="mobile-menu-footer">
          <div class="mobile-contacts">
            <a href="mailto:hello@greedlabs.org" class="mobile-contact-link">
              <img class="contact-icon" src="~/public/logos/mail.svg" alt="mail logo">
              <span>hello@greedlabs.org</span>
            </a>
            <a href="https://t.me/greedlabs" class="mobile-contact-link" target="_blank">
              <img class="contact-icon" src="~/public/logos/telegram.svg" alt="telegram logo">
              <span>Telegram</span>
            </a>
            <a href="https://linkedin.com/company/greedlabs" class="mobile-contact-link" target="_blank">
              <img class="contact-icon" src="~/public/logos/linkedin.svg" alt="linkedin logo">
              <span>LinkedIn</span>
            </a>
            <a href="https://x.com/greed_labs" class="mobile-contact-link" target="_blank">
              <img class="contact-icon" src="~/public/logos/x.svg" alt="x logo">
              <span>X.com</span>
            </a>
          </div>
          <a href="https://t.me/greedlabs_bot" class="mobile-consultation-btn" target="_blank">
            {{ $t('nav.freeConsultation') }}
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isContactMenuOpen = ref(false)
const isTouch = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const openContactMenu = () => {
  if (!isTouch.value) {
    isContactMenuOpen.value = true
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
  }
}

const keepMenuOpen = () => {}

const closeAllMenus = () => {
  isContactMenuOpen.value = false
}

const handleClickOutside = (event) => {
  if (isTouch.value && !event.target.closest('.nav-item, .contact-dropdown, .dropdown-menu, .contact-dropdown-menu')) {
    closeAllMenus()
  }
}

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
  padding: 0 3vw;
  box-sizing: border-box;
  border-radius: 30px;
}

.header-background {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.header-logo img {
  width: 12rem;
  height: auto;
  display: block;
  padding-top: var(--spacing-xs);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-left: var(--spacing-2xl);
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
  gap: var(--spacing-xs);
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
  padding: var(--spacing-lg);
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

.contact-dropdown {
  position: relative;
  height: 100%;
  align-items: center;
  display: flex;
}

.contact-button {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  padding: 0.7rem 1.4rem;
  background: #1586f4;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.contact-button:hover {
  background: #1a90ff;
}

.contact-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  width: clamp(240px, 22vw, 320px);
  z-index: -2;
  right: -1.5vw;
}

.dropdown-background {
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.contact-section {
  margin-bottom: clamp(8px, 1.5vw, 14px);
}

.contact-section:last-child {
  margin-bottom: 0;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: clamp(13px, 1vw, 16px);
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.2s ease;
  font-weight: 600;
}

.contact-link:hover {
  color: #1586f4;
}

.contact-icon {
  flex-shrink: 0;
  width: 1.4rem;
  height: 1.4rem;
}

.consultation-btn {
  width: 100%;
  background: #1586f4;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 14px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  font-size: clamp(12px, 0.9vw, 15px);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
  text-decoration: none;
  display: block;
  text-align: center;
  box-shadow: 0 4px 20px rgba(21, 134, 244, 0.3);
}

.consultation-btn:hover {
  background: #1a90ff;
  box-shadow: 0 6px 28px rgba(21, 134, 244, 0.45);
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
  padding: 0 var(--spacing-md);
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
  width: clamp(38px, 13vw, 48px);
  height: clamp(38px, 13vw, 48px);
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
  gap: 9px;
  z-index: 1;
}

.hamburger-line {
  width: clamp(22px, 9.5vw, 36px);
  height: 6px;
  background-color: white;
  border-radius: 100px;
  transition: all 0.3s ease;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(10.6px, 10.6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(10.6px, -10.6px);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: 999998;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(160deg, #0d1117 0%, #111827 50%, #0a0f1e 100%);
}

.mobile-menu-overlay::before {
  content: '';
  position: fixed;
  top: -20%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, rgba(21, 134, 244, 0.12) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.mobile-menu-background {
  display: none;
}

.mobile-menu-container {
  padding: 0 28px 32px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.mobile-menu-top {
  height: 85px;
  display: flex;
  align-items: center;
}

.mobile-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 20px 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'Montserrat', Arial, sans-serif;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  padding: 18px 20px;
  border-radius: 14px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.mobile-nav-link:hover::before,
.mobile-nav-link:active::before {
  opacity: 1;
}

.mobile-nav-link:hover {
  color: white;
}

.mobile-nav-link:hover .nav-arrow {
  color: #1586f4;
  transform: translateX(4px);
}

.nav-index {
  font-size: 11px;
  font-weight: 700;
  color: #1586f4;
  letter-spacing: 0.05em;
  min-width: 22px;
  font-family: 'Montserrat', Arial, sans-serif;
}

.nav-text {
  font-size: clamp(20px, 5.5vw, 26px);
  font-weight: 600;
  flex: 1;
  letter-spacing: -0.01em;
}

.nav-arrow {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.25);
  transition: all 0.2s ease;
  font-weight: 400;
}

.mobile-menu-footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.mobile-contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
}

.mobile-contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: clamp(12px, 3.5vw, 14px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.mobile-contact-link:hover,
.mobile-contact-link:active {
  color: white;
  background: rgba(21, 134, 244, 0.12);
  border-color: rgba(21, 134, 244, 0.3);
}

.mobile-contact-link .contact-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.mobile-consultation-btn {
  display: block;
  width: 100%;
  background: linear-gradient(90deg, #1586f4, #0066cc);
  color: white;
  padding: 18px 24px;
  border-radius: 14px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  font-size: clamp(14px, 4vw, 17px);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.01em;
  box-shadow: 0 4px 24px rgba(21, 134, 244, 0.25);
}

.mobile-consultation-btn:hover {
  background: linear-gradient(90deg, #1a90ff, #0077ee);
  box-shadow: 0 6px 32px rgba(21, 134, 244, 0.4);
  transform: translateY(-1px);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
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
  .contact-button{
    font-size: 1rem;
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
