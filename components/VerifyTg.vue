<template>
  <section id="verify-team" class="margin-container verify-section">
    <div class="verify-card">
      <div class="verify-shield" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 5v7c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V5l-9-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="verify-head">
        <span class="verify-eyebrow">{{ $t('verify.eyebrow') }}</span>
        <h2 class="verify-title">{{ $t('verify.title') }}</h2>
        <p class="verify-tagline">{{ $t('verify.tagline') }}</p>
      </div>

      <form class="verify-form" @submit.prevent="check">
        <div class="verify-input-wrap">
          <span class="verify-at">@</span>
          <input
            v-model="username"
            type="text"
            class="verify-input"
            :placeholder="$t('verify.placeholder')"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            @input="onInput"
          />
        </div>
        <button type="submit" class="verify-btn" :disabled="loading || !username.trim()">
          <span v-if="loading" class="verify-spinner"></span>
          <span v-else>{{ $t('verify.button') }}</span>
        </button>
      </form>

      <Transition name="verify-fade">
        <div v-if="result" :class="['verify-result', result.kind]">
          <div class="verify-result-icon" aria-hidden="true">
            <span v-if="result.kind === 'ok'">✓</span>
            <span v-else>✕</span>
          </div>
          <div class="verify-result-text">
            <strong>{{ $t(`verify.result.${result.kind}_title`) }}</strong>
            <span>{{ $t(`verify.result.${result.kind}_desc`) }}</span>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const loading = ref(false)
const result = ref(null)

function onInput() {
  if (result.value) result.value = null
}

async function check() {
  const raw = username.value.trim().replace(/^@/, '')
  if (!raw) return
  loading.value = true
  result.value = null
  try {
    const res = await $fetch('/api/verify-tg', {
      method: 'POST',
      body: { username: raw }
    })
    if (res.verified) {
      result.value = { kind: 'ok' }
    } else if (res.reason === 'invalid_format') {
      result.value = { kind: 'invalid' }
    } else {
      result.value = { kind: 'fail' }
    }
  } catch (e) {
    const status = e?.response?.status ?? e?.statusCode
    result.value = { kind: status === 429 ? 'rate' : 'error' }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.verify-section {
  margin-bottom: var(--spacing-xl);
  scroll-margin-top: 160px;
}

.verify-card {
  position: relative;
  background:
    radial-gradient(120% 100% at 0% 0%, rgba(52, 251, 255, 0.06) 0%, transparent 55%),
    radial-gradient(120% 100% at 100% 100%, rgba(21, 134, 244, 0.07) 0%, transparent 55%),
    #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: var(--spacing-2xl) var(--spacing-xl);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  column-gap: var(--spacing-lg);
  row-gap: var(--spacing-md);
  align-items: center;
  overflow: hidden;
}

.verify-shield {
  grid-row: 1 / 3;
  grid-column: 1;
  width: 72px;
  height: 72px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #34FBFF;
  background: rgba(52, 251, 255, 0.08);
  border: 1px solid rgba(52, 251, 255, 0.22);
  box-shadow: 0 0 32px rgba(52, 251, 255, 0.12);
  flex-shrink: 0;
}
.verify-shield svg {
  width: 36px;
  height: 36px;
}

.verify-head {
  grid-row: 1;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.verify-eyebrow {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #34FBFF;
  text-transform: uppercase;
}
.verify-title {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.15;
  margin: 0;
  color: #fff;
  letter-spacing: -0.01em;
}
.verify-tagline {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  line-height: 1.5;
}

.verify-form {
  grid-row: 2;
  grid-column: 2;
  display: flex;
  gap: 10px;
  align-items: stretch;
}

.verify-input-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.verify-input-wrap:focus-within {
  border-color: rgba(52, 251, 255, 0.55);
  box-shadow: 0 0 0 3px rgba(52, 251, 255, 0.1);
}
.verify-at {
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  padding-left: 18px;
  user-select: none;
}
.verify-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 16px 18px 16px 8px;
  color: #fff;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  min-width: 0;
}
.verify-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.verify-btn {
  background: linear-gradient(135deg, #1586f4 0%, #0a6dc9 100%);
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 0 30px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: filter 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 4px 24px rgba(21, 134, 244, 0.3);
  min-width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.verify-btn:hover:not(:disabled) {
  filter: brightness(1.1);
  box-shadow: 0 6px 32px rgba(21, 134, 244, 0.45);
}
.verify-btn:active:not(:disabled) {
  transform: translateY(1px);
}
.verify-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  box-shadow: none;
}

.verify-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: verify-spin 0.7s linear infinite;
}
@keyframes verify-spin {
  to { transform: rotate(360deg); }
}

.verify-result {
  grid-row: 3;
  grid-column: 2;
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid transparent;
}
.verify-result.ok {
  background: rgba(52, 251, 255, 0.07);
  border-color: rgba(52, 251, 255, 0.28);
}
.verify-result.fail,
.verify-result.invalid,
.verify-result.rate,
.verify-result.error {
  background: rgba(255, 80, 80, 0.07);
  border-color: rgba(255, 80, 80, 0.28);
}
.verify-result-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: 'Montserrat', Arial, sans-serif;
  flex-shrink: 0;
  font-size: 0.9rem;
}
.verify-result.ok .verify-result-icon {
  background: rgba(52, 251, 255, 0.2);
  color: #34FBFF;
}
.verify-result.fail .verify-result-icon,
.verify-result.invalid .verify-result-icon,
.verify-result.rate .verify-result-icon,
.verify-result.error .verify-result-icon {
  background: rgba(255, 80, 80, 0.2);
  color: #FF8080;
}
.verify-result-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  line-height: 1.4;
  min-width: 0;
}
.verify-result-text strong {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 0.92rem;
  font-weight: 700;
  color: #fff;
}
.verify-result-text span {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.55);
}

.verify-fade-enter-active,
.verify-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.verify-fade-enter-from,
.verify-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .verify-card {
    padding: var(--spacing-xl) var(--spacing-md);
    grid-template-columns: 1fr;
    row-gap: var(--spacing-md);
    text-align: left;
  }
  .verify-shield {
    grid-row: auto;
    grid-column: 1;
    width: 56px;
    height: 56px;
    border-radius: 16px;
  }
  .verify-shield svg { width: 28px; height: 28px; }
  .verify-head, .verify-form, .verify-result {
    grid-row: auto;
    grid-column: 1;
  }
  .verify-title { font-size: 1.5rem; }
  .verify-form { flex-direction: column; }
  .verify-btn { padding: 14px 20px; min-width: 0; }
}
@media (max-width: 480px) {
  .verify-card {
    padding: var(--spacing-lg) var(--spacing-md);
    border-radius: 20px;
  }
  .verify-title { font-size: 1.3rem; }
}
</style>
