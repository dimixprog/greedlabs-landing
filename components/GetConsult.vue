<template>
  <section id="contact" class="consult-section flex-col">
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
      <img class="card-img left" src="/abce99a6-f01f-4ab1-b.webp" alt="" />
      <img class="card-img right" src="/0c34ea9a-7833-4628-8.webp" alt="" />
      <div class="consult-form-box">
        <div class="consult-content">
          <p class="consult-line">GET A FREE CONSULTATION</p>
          <p class="consult-line">Get a free consultation on our products and services!</p>
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
  /* Extend background to cover footer border radius */
  margin-bottom: -75px;
  padding-bottom: calc(var(--spacing-4xl) + 75px);
}

.consult-bg-svg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -25rem;
  width: 100rem;
  height: auto;
  pointer-events: none;
  z-index: 2;
  -webkit-filter: blur(50px);
  filter: blur(50px);
}

.consult-white-glow{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -25rem;
  width: 50rem;
  height: auto;
  pointer-events: none;
  z-index: 2;
  filter: blur(50px);
}

.consult-bg-svg svg {
  width: 100%;
  height: auto;
  display: block;
}

.consult-cards {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.card-img {
  position: absolute;
  width: 25rem;
  height: 30rem;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.4;
  border-radius: 25px;
  top: 2rem;
  z-index: 2;
}

.card-img.left {
  left: -5rem;
  transform: rotate(-12deg);
  z-index: 3;
}

.card-img.right {
  right: -5rem;
  transform: rotate(12deg);
  z-index: 3;
}

.consult-form-box {
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 30px;
  width: 80%;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 4;
}

.consult-section h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 var(--spacing-lg);
  letter-spacing: 0.6px;
  text-align: center;
}

.consult-section p {
  font-size: 1.8rem;
  color: #ffffff;
  margin: 0 0 var(--spacing-2xl);
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
}

.consult-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-4xl);
}

.consult-line {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  line-height: 1.2;
}

.consult-line:first-child {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.consult-line:last-of-type {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.consult-form-box form::before {
  background-image: url('/9e3a6181-04f5-40b9-9.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.4;
  padding: var(--spacing-3xl) var(--spacing-4xl);
  border-radius: 30px;
}

.consult-form-box input {
  height: 80px;
  padding: 0 var(--spacing-xl);
  border-radius: 25px;
  border: 1px solid #1586f4;
  background: #1b1b1b;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  transition: background 0.2s;
}

.consult-form-box input::placeholder {
  color: #a0a0a0;
}

.consult-form-box input:focus {
  background: #282828;
}

.submit-btn {
  height: 80px;
  border-radius: 25px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(21, 134, 244, 0.6);
  transition: box-shadow 0.2s, background 0.2s;
  border-color: #ffffff;
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 1);
}

.submit-btn:hover {
  background: #0066cc;
  box-shadow: 0 0 24px rgba(21, 134, 244, 0.9);
}

/* Responsiveness */
@media (max-width: 1024px) {
  .consult-section {
    /*padding: 70px 0 110px;*/
    min-height: 680px;
    margin-bottom: -75px;
    padding-bottom: calc(var(--spacing-4xl) + 75px);
  }
  .consult-bg-svg {
    bottom: -100px;
    width: 60rem;
  }
  .card-img {
    top: var(--spacing-lg);
  }
  .consult-section h2 {
    font-size: 30px;
  }
  .consult-section p {
    font-size: 18px;
  }
  .consult-line:first-child {
    font-size: 2rem;
  }
  .consult-line:last-of-type {
    font-size: 1.2rem;
  }
  .submit-btn {
    height: 70px;
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .consult-section {
    /*padding: 50px 0 90px;*/
    min-height: 560px;
    margin-bottom: -75px;
    padding-bottom: calc(var(--spacing-3xl) + 75px);
  }
  .consult-bg-svg {
    bottom: -80px;
    width: 50rem;
  }
  .card-img {
    width: 20rem;
    height: 25rem;
    top: var(--spacing-md);
  }
  .card-img.left {
    left: -100px;
  }
  .card-img.right {
    right: -100px;
  }
  .consult-section h2 {
    font-size: 26px;
  }
  .consult-section p {
    font-size: 16px;
    margin-bottom: var(--spacing-xl);
  }
  .consult-content {
    padding: var(--spacing-lg) var(--spacing-xl);
  }
  .consult-line:first-child {
    font-size: 1.8rem;
  }
  .consult-line:last-of-type {
    font-size: 1.1rem;
  }
  .submit-btn {
    height: 60px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .consult-section {
    padding: var(--spacing-lg) 0 var(--spacing-3xl);
    min-height: 480px;
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
    padding: var(--spacing-xs) var(--spacing-xs);
    max-width: 100%;
    border-radius: 25px;
  }
  .consult-content {
    padding: 0;
  }
  .consult-section h2 {
    font-size: 22px;
  }
  .consult-section p {
    font-size: 14px;
    margin-bottom: var(--spacing-lg);
  }
  .consult-line,
  .submit-btn {
    height: 55px;
    font-size: 0.8rem;
  }
}
</style>
