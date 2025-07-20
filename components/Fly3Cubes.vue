<template>
  <div class="hero-media-container">
    <div id="one" class="animated-elem">
      <div class="tn-atom__sbs-anim-wrapper" id="sbs-one">
        <div class="tn-atom">
          <img class="tn-atom__img" src="https://optim.tildacdn.com/tild6331-6330-4334-b064-646531633936/-/resize/470x/-/format/webp/1.png.webp" alt="" />
        </div>
      </div>
    </div>
    
    <div id="two" class="animated-elem">
      <div class="tn-atom__sbs-anim-wrapper" id="sbs-two">
        <div class="tn-atom">
          <img class="tn-atom__img" src="https://optim.tildacdn.com/tild6465-6262-4262-b264-313165626330/-/resize/380x/-/format/webp/2.png.webp" alt="" />
        </div>
      </div>
    </div>
    
    <div id="three" class="animated-elem">
      <div class="tn-atom__sbs-anim-wrapper" id="sbs-three">
        <div class="tn-atom">
          <img class="tn-atom__img" src="https://optim.tildacdn.com/tild6138-6633-4462-a262-666637613836/-/resize/259x/-/format/webp/3.png.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-media-container {
  position: relative;
  width: 50%;
  height: 50%;
}

.animated-elem {
  position: absolute;
  box-sizing: border-box;
  display: table;
  visibility: visible;
  height: auto;
}

#one {
  /*left: 520px;
  top: 27px;
  width: 392px;*/
}

#sbs-one {
  animation: sbs-one 24s infinite linear;
  backface-visibility: hidden;
  display: inherit;
  width: inherit;
  height: inherit;
  transform: translateX(63.6723px) translateY(203.172px) rotate(-76.9855deg) scale(0.826348);
}

#sbs-one .tn-atom {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  border-radius: 0;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transform-origin: center center;
}

#sbs-one .tn-atom__img {
  width: 100%;
  display: block;
  border-radius: 0;
  object-position: center center;
}

#two {
  /*left: 903px;
  top: 241px;
  width: 317px;*/
}

#sbs-two {
  animation: sbs-two 24s infinite linear;
  backface-visibility: hidden;
  display: inherit;
  width: inherit;
  height: inherit;
  transform: translateX(-49.995px) translateY(27.4409px) rotate(-345.34deg) scale(0.96241);
}

#sbs-two .tn-atom {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  border-radius: 0;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transform-origin: center center;
}

#sbs-two .tn-atom__img {
  width: 100%;
  display: block;
  border-radius: 0;
  object-position: center center;
}

#three {
  /*left: 724px;
  top: 353px;
  width: 216px;*/
}

#sbs-three {
  animation: sbs-three 24s infinite linear;
  backface-visibility: hidden;
  display: inherit;
  width: inherit;
  height: inherit;
  transform: translateX(-11.2708px) translateY(-63.1167px) rotate(-327.033deg);
}

#sbs-three .tn-atom {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  border-radius: 0;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transform-origin: center center;
}

#sbs-three .tn-atom__img {
  width: 100%;
  display: block;
  border-radius: 0;
  object-position: center center;
}

/* Анимации (сохранены без изменений) */
@keyframes sbs-one {
  0% { transform: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); animation-timing-function: 0; }
  33.33% { transform: translateX(110px) translateY(351px) rotate(-133deg) scale(0.7, 0.7); animation-timing-function: 0; }
  66.66% { transform: translateX(394px) translateY(186px) rotate(-200deg) scale(0.78, 0.78); animation-timing-function: 0; }
  100% { transform: translateX(0px) translateY(0px) rotate(-360deg) scale(1, 1); }
}

@keyframes sbs-two {
  0% { transform: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); animation-timing-function: 0; }
  33.33% { transform: translateX(-419px) translateY(-237px) rotate(-160deg) scale(1.5, 1.5); animation-timing-function: 0; }
  66.66% { transform: translateX(-266px) translateY(146px) rotate(-282deg) scale(0.8, 0.8); animation-timing-function: 0; }
  100% { transform: translateX(0px) translateY(0px) rotate(-360deg) scale(1, 1); }
}

@keyframes sbs-three {
  0% { transform: translateX(0px) translateY(0px) rotate(0deg); animation-timing-function: 0; }
  33.33% { transform: translateX(193px) translateY(-91px) rotate(-67deg); animation-timing-function: 0; }
  66.66% { transform: translateX(-40px) translateY(-224px) rotate(-243deg); animation-timing-function: 0; }
  100% { transform: translateX(0px) translateY(0px) rotate(-360deg); }
}
</style>
