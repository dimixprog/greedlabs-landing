<template>
  <svg
    ref="svg"
    class="gear-container"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="5520 4910 285 270"
    :style="{ overflow: 'visible' }"
  >
    <defs>
      <!-- Твои градиенты -->
      <linearGradient id="tSvgGradient16edfc5298a" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stop-color="hsl(0,0%,95.54%)" />
        <stop offset="12%" stop-color="hsl(0,0%,38.82%)" />
        <stop offset="24%" stop-color="hsl(0,0%,49.02%)" />
        <stop offset="33%" stop-color="hsl(0,0%,100%)" />
        <stop offset="42%" stop-color="hsl(0,0%,100%)" />
        <stop offset="50%" stop-color="hsl(0,0%,52.55%)" />
        <stop offset="58%" stop-color="hsl(0,0%,100%)" />
        <stop offset="69%" stop-color="hsl(0,0%,69.41%)" />
        <stop offset="77%" stop-color="hsl(0,0%,29.02%)" />
        <stop offset="83%" stop-color="hsl(0,0%,100%)" />
        <stop offset="92%" stop-color="hsl(0,0%,60%)" />
      </linearGradient>
      <linearGradient id="paint0_linear_876_2860" x1="47.0889" y1="74.1778" x2="402.778" y2="309.733" gradientUnits="userSpaceOnUse">
        <stop stop-color="#636363" />
        <stop offset="0.102836" stop-color="white" />
        <stop offset="0.21" stop-color="#7D7D7D" />
        <stop offset="0.325" stop-color="white" />
        <stop offset="0.42" stop-color="white" />
        <stop offset="0.5" stop-color="#868686" />
        <stop offset="0.585" stop-color="white" />
        <stop offset="0.685" stop-color="#B1B1B1" />
        <stop offset="0.765" stop-color="#4A4A4A" />
        <stop offset="0.83" stop-color="white" />
        <stop offset="0.92" stop-color="#999999" />
      </linearGradient>
    </defs>

    <!-- Группа, которую будем вращать -->
    <g ref="gearRotateGroup">
      <path
        fill="none"
        stroke="#999"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 5530 5056.7252 C 5530 5048.9519 5530 5041.1785 5530 5033.4052 C 5530 5019.6253 5541.2625 5008.2309 5555.1751 5008.2309 C 5579.1574 5008.2309 5588.9624 4991.2709 5576.9051 4970.4683 C 5570.015 4958.5434 5574.1225 4943.0407 5586.1799 4936.1508 C 5593.8208 4931.7783 5601.4617 4927.4058 5609.1026 4923.0333 C 5619.5699 4916.8058 5633.0851 4920.5158 5639.3124 4930.9833 C 5639.7983 4931.8225 5640.2842 4932.6616 5640.7701 4933.5008 C 5652.695 4954.3034 5672.3049 4954.3034 5684.3625 4933.5008 C 5684.8483 4932.6616 5685.3342 4931.8225 5685.8201 4930.9833 C 5692.0474 4920.5158 5705.5624 4916.8058 5716.0299 4923.0333 C 5723.6708 4927.4058 5731.3116 4931.7783 5738.9524 4936.1508 C 5751.01 4943.0407 5755.1175 4958.5434 5748.2275 4970.4683 C 5736.1698 4991.2709 5745.9749 5008.2309 5769.9574 5008.2309 C 5783.737 5008.2309 5795.1322 5019.4928 5795.1322 5033.4052 C 5795.1322 5041.1785 5795.1322 5048.9519 5795.1322 5056.7252 C 5795.1322 5070.5053 5783.8695 5081.9002 5769.9574 5081.9002 C 5745.9749 5081.9002 5736.1698 5098.8602 5748.2275 5119.6628 C 5755.1175 5131.7202 5751.01 5147.0904 5738.9524 5153.9802 C 5731.3116 5158.3531 5723.6708 5162.726 5716.0299 5167.0988 C 5705.5624 5173.3262 5692.0474 5169.6153 5685.8201 5159.1477 C 5685.3342 5158.3086 5684.8483 5157.4694 5684.3625 5156.6303 C 5672.4375 5135.8277 5652.8274 5135.8277 5640.7701 5156.6303 C 5640.2842 5157.4694 5639.7983 5158.3086 5639.3124 5159.1477 C 5633.0851 5169.6153 5619.5699 5173.3262 5609.1026 5167.0988 C 5601.4617 5162.726 5593.8208 5158.3531 5586.1799 5153.9802 C 5574.1225 5147.0904 5570.015 5131.5877 5576.9051 5119.6628 C 5588.9624 5098.8602 5579.1574 5081.9002 5555.1751 5081.9002C 5541.2625 5081.9002 5530 5070.5053 5530 5056.7252Z"
      />
    </g>

    <!-- Центр -->
    <g transform="translate(5617.82 5000.32) scale(1)">
      <path
        d="M44.75 84.5C66.704 84.5 84.5 66.704 84.5 44.75C84.5 22.796075 66.704 5 44.75 5C22.796075 5 5 22.796075 5 44.75C5 66.704 22.796075 84.5 44.75 84.5Z"
        stroke="url(#paint0_linear_876_2860)"
        stroke-width="10"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
  </svg>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const gearRotateGroup = ref(null);

let angle = 0;
let animationId = null;

function rotate() {
  angle = (angle + 1) % 360;
  if (gearRotateGroup.value) {
    // Вращаем вокруг центра viewBox
    gearRotateGroup.value.setAttribute('transform', `rotate(${angle} 5662.5 5045)`);
  }
  animationId = requestAnimationFrame(rotate);
}

onMounted(() => {
  rotate();
});

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.gear-container {
  width: 150px;
  height: 150px;
  display: block;
}
</style>
