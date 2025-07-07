<template>
    <div class="hero-media-container">
      <div class="main-cube">
        <img src="~/public/3d_cubes.png" alt="3d cubes">
      </div>
      

      <img class="bcube-1 cube" src="~/public/mini_black_cube.png">
      <img class="bcube-2 cube" src="~/public/mini_black_cube.png">

      <img class="cube-1 cube" src="~/public/mini_blue_cube.png">
      <img class="cube-2" src="~/public/mini_blue_cube.png">
      <img class="cube-3 cube" src="~/public/mini_blue_cube.png">
    </div>
</template>

<style scoped>

.hero-media-container {
  position: relative;
}

.main-cube {
  filter: drop-shadow(0 0 50px rgba(0, 123, 255, 0.45));
}

.cube {
  width: 150px;
  height: 150px;
  position: absolute;

  animation: move-linear 4s infinite alternate ease-in-out;
}

.bcube-1 {
  top: -10%;
  left: 50%;
}

.bcube-2 {
  top: 40%;
  left: 70%;
}

.cube-1 {
  top: 0px;
  scale: 0.45;
  left: -5%;
}

.cube-2 {
  width: 150px;
  height: 150px;
  position: absolute;
  animation: move-flipped 4s infinite alternate ease-in-out;
  top: 20%;
  left: 0;
}

.cube-3 {
  top: 40%;
  left: -10%;
  scale: 0.75;
}

@keyframes move-flipped {
  from {
    transform: scaleX(-1) translateX(0);
  }
  to {
    transform: scaleX(-1) translate(100px, 100px);
  }
}


@keyframes move-linear {
  from {
    transform: translateX(0);
  }
  to {
    transform: translate(100px, 100px);
  }
}

</style>