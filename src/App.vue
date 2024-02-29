<template>
    <TheMenu>
    </TheMenu>
    <div class="overlay">
        </div>
    <router-view />

</template>

<script lang="ts" setup>
import TheMenu from './components/home/TheMenu.vue';

</script>
<style>

@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Bold.ttf");
  font-weight: 700;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Regular.ttf");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Light.ttf");
  font-weight: 200;
  font-display: swap;
  font-style: normal;
}
body {
    margin: 0;
    padding: 0;
}
.overlay {
    position: absolute;
    top: 13%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 45%;
    height: 174%;
    background-color: rgba(127, 41, 53, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: -1;
}


</style>