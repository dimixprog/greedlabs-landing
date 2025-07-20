<template>
    <div class="loader-wrapper">

        <svg class="loader" viewBox="0 0 36 36" overflow="visible">
            <svg width="100%" height="100%" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="path-1-inside-1_979_138" fill="white"> <path d="M270 135C270 209.558 209.558 270 135 270C60.4416 270 0 209.558 0 135C0 60.4416 60.4416 0 135 0C209.558 0 270 60.4416 270 135ZM32.4833 135C32.4833 191.618 78.3816 237.517 135 237.517C191.618 237.517 237.517 191.618 237.517 135C237.517 78.3816 191.618 32.4833 135 32.4833C78.3816 32.4833 32.4833 78.3816 32.4833 135Z"></path> </mask> <path d="M270 135C270 209.558 209.558 270 135 270C60.4416 270 0 209.558 0 135C0 60.4416 60.4416 0 135 0C209.558 0 270 60.4416 270 135ZM32.4833 135C32.4833 191.618 78.3816 237.517 135 237.517C191.618 237.517 237.517 191.618 237.517 135C237.517 78.3816 191.618 32.4833 135 32.4833C78.3816 32.4833 32.4833 78.3816 32.4833 135Z" stroke="url(#paint0_linear_979_138)" stroke-width="2" mask="url(#path-1-inside-1_979_138)"></path> <defs> <linearGradient id="paint0_linear_979_138" x1="23" y1="46" x2="325" y2="246" gradientUnits="userSpaceOnUse"> <stop stop-color="#636363"></stop> <stop offset="0.102836" stop-color="white"></stop> <stop offset="0.21" stop-color="#7D7D7D"></stop> <stop offset="0.325" stop-color="white"></stop> <stop offset="0.42" stop-color="white"></stop> <stop offset="0.5" stop-color="#868686"></stop> <stop offset="0.585" stop-color="white"></stop> <stop offset="0.685" stop-color="#B1B1B1"></stop> <stop offset="0.765" stop-color="#4A4A4A"></stop> <stop offset="0.83" stop-color="white"></stop> <stop offset="0.92" stop-color="#999999"></stop> </linearGradient> </defs> </svg>
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
                </filter>
            </defs>

            <!-- оставь только прогресс -->
            <circle
                class="progress"
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#999"
                stroke-width="4"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="strokeDashoffset"
                filter="url(#glow)"
            />
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const radius = 16;
const circumference = 2 * Math.PI * radius;
const progress = ref(0);
const strokeDashoffset = ref(circumference);

onMounted(() => {
    const duration = 4000; // 4 seconds for full circle
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    function animate() {
        progress.value = frame / totalFrames;
        strokeDashoffset.value = circumference * (1 - progress.value);

        frame++;
        if (frame > totalFrames) {
            frame = 0;
        }
        requestAnimationFrame(animate);
    }

    animate();
});
</script>

<style scoped>
.loader-wrapper {
    background-color: transparent;
    width: 100%;
    height: 100%;
}

.loader {
    background-color: transparent;
    overflow: visible;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.progress {
    transition: stroke-dashoffset 0s linear;
    box-shadow: 0 0 10px rgb(116, 116, 116);
}
</style>
