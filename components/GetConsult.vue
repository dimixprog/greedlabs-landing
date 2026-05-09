<template>
  <section id="contact" class="consult-section">
    <div class="consult-bg-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="5634.6494140625 5169.6494140625 1068.701171875 645.00732421875">
        <path fill="#1586F4" stroke="none" fill-opacity="1" stroke-width="1" stroke-opacity="1" font-size-adjust="none" id="tSvg1396f1c505c" title="Path 2" d="M 6702.350615683733 5622.931340886213 C 6702.350615683733 5541.913842506434 6455.635126377188 5170.649552162947 6151.293972780299 5170.649552162947 C 5846.955152300713 5170.649552162947 5635.649384316267 5541.913842506434 5635.649384316267 5622.931340886213 C 5635.649384316267 5703.948839265993 5846.955152300713 5813.6566811324865 6151.293972780299 5813.6566811324865C 6455.635126377188 5813.6566811324865 6702.350615683733 5703.948839265993 6702.350615683733 5622.931340886213Z"></path>
        <defs></defs>
      </svg>
    </div>
    <div class="consult-white-glow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="5946 5541 550 333"> <path fill="white" stroke="none" fill-opacity="1" stroke-width="1" stroke-opacity="1" font-size-adjust="none" id="tSvg13a28f020ba" title="Path 1" d="M 6494.999847412109 5774.819877929687 C 6494.999847412109 5733.114877929687 6368.25234741211 5541.9998779296875 6211.904847412109 5541.9998779296875 C 6055.55484741211 5541.9998779296875 5946.999847412109 5733.114877929687 5946.999847412109 5774.819877929687 C 5946.999847412109 5816.524877929687 6055.55484741211 5872.9998779296875 6211.904847412109 5872.9998779296875C 6368.25234741211 5872.9998779296875 6494.999847412109 5816.524877929687 6494.999847412109 5774.819877929687Z"></path> <defs></defs> </svg>
    </div>

    <div class="consult-cards">
      <img class="card-img left" src="/consult-left.webp" alt="" />
      <img class="card-img right" src="/consult-right.webp" alt="" />

      <div class="consult-form-box">
        <div class="consult-content">
          <div class="consult-eyebrow">FREE OFFER</div>
          <h2 class="consult-title colorized-text">{{ $t('get_consult.get_consult') }}</h2>
          <p class="consult-desc">{{ $t('get_consult.get_consult_desc') }}</p>
          <ConsultButton class="submit-btn"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.consult-section {
  position: relative;
  background: #191b1f;
  padding: var(--spacing-xl) 0 var(--spacing-4xl);
  overflow: hidden;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -75px;
  padding-bottom: calc(var(--spacing-4xl) + 75px);
}

.consult-bg-svg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -8rem;
  width: 90rem;
  height: auto;
  pointer-events: none;
  z-index: 1;
  filter: blur(60px);
  opacity: 0.7;
}

.consult-white-glow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -8rem;
  width: 40rem;
  height: auto;
  pointer-events: none;
  z-index: 1;
  filter: blur(55px);
  opacity: 0.12;
}

.consult-bg-svg svg,
.consult-white-glow svg {
  width: 100%;
  height: auto;
  display: block;
}

.consult-cards {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.card-img {
  position: absolute;
  width: 24rem;
  height: 30rem;
  object-fit: cover;
  opacity: 0.25;
  border-radius: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%);
}

.card-img.left {
  left: -3rem;
  transform: translateY(-50%) rotate(-10deg);
}

.card-img.right {
  right: -3rem;
  transform: translateY(-50%) rotate(10deg);
}

.consult-form-box {
  position: relative;
  z-index: 4;
  width: 72%;
  border-radius: 28px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(52,251,255,0.25) 0%, rgba(21,134,244,0.15) 50%, rgba(255,255,255,0.06) 100%);
}

.consult-form-box::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 28px;
  background: rgba(25, 27, 31, 0.85);
  backdrop-filter: blur(48px);
  -webkit-backdrop-filter: blur(48px);
  z-index: -1;
}

.consult-content {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-3xl) var(--spacing-4xl);
  border-radius: 28px;
  background: rgba(25, 27, 31, 0.7);
  backdrop-filter: blur(48px);
  -webkit-backdrop-filter: blur(48px);
}

.consult-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(52, 251, 255, 0.8);
  text-transform: uppercase;
  padding: 5px 14px;
  border: 1px solid rgba(52, 251, 255, 0.25);
  border-radius: 100px;
  background: rgba(52, 251, 255, 0.05);
}

.consult-title {
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.15;
  text-align: center;
  letter-spacing: -0.01em;
}

.consult-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  line-height: 1.6;
  text-align: center;
  font-weight: 400;
  max-width: 38ch;
}

.submit-btn {
  margin-top: var(--spacing-sm);
  min-width: 220px;
}

/* Responsiveness */
@media (max-width: 1024px) {
  .consult-section {
    min-height: 580px;
    margin-bottom: -75px;
    padding-bottom: calc(var(--spacing-4xl) + 75px);
  }
  .consult-bg-svg {
    width: 60rem;
  }
  .consult-form-box {
    width: 80%;
  }
  .consult-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .consult-section {
    min-height: 520px;
    margin-bottom: -75px;
    padding-bottom: calc(var(--spacing-3xl) + 75px);
  }
  .consult-bg-svg {
    width: 50rem;
  }
  .card-img {
    width: 18rem;
    height: 24rem;
  }
  .card-img.left {
    left: -4rem;
  }
  .card-img.right {
    right: -4rem;
  }
  .consult-form-box {
    width: 90%;
  }
  .consult-title {
    font-size: 1.75rem;
  }
  .consult-content {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
}

@media (max-width: 480px) {
  .consult-section {
    min-height: 460px;
    margin-bottom: 0;
    padding-bottom: var(--spacing-xs);
  }
  .consult-bg-svg {
    bottom: -200px;
    width: 200vw;
  }
  .card-img {
    display: none;
  }
  .consult-form-box {
    width: 95%;
    border-radius: 20px;
  }
  .consult-content {
    padding: var(--spacing-xl) var(--spacing-md);
    border-radius: 20px;
  }
  .consult-title {
    font-size: 1.5rem;
  }
  .consult-desc {
    font-size: 0.9rem;
  }
}
</style>
