<template>
  <button class="consult-btn">{{ $t("free_consult") }}</button>
</template>

<style scoped>
.consult-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 44px;
  height: auto;
  background: #1586F4;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 17px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: box-shadow 0.25s ease, transform 0.2s ease;
  box-shadow: 0 4px 20px rgba(21, 134, 244, 0.4);
  white-space: nowrap;
}

.consult-btn:hover {
  box-shadow: 0 0 0 1.5px rgba(52, 251, 255, 0.5), 0 6px 32px rgba(21, 134, 244, 0.65);
  transform: translateY(-2px);
}

.consult-btn:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .consult-btn {
    padding: 14px 32px;
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .consult-btn {
    padding: 12px 24px;
    font-size: 13px;
    border-radius: 10px;
  }
}
</style>
