<template>
    <div class="loader-wrapper">

        <svg class="loader" viewBox="0 0 36 36" overflow="visible">
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
    const duration = 2000; // 2 seconds for full circle
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
    width: 100px;
    height: 100px;
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
