<template>
    <div class="home-container">
    <router-view />
    <TheContent></TheContent>
    <TheFooter></TheFooter>
    </div>
</template>
<script lang="ts" setup>

import TheContent from '../components/home/TheContent.vue';
import TheFooter from '../components/home/TheFooter.vue';

</script>
  
<style>
.home-container{
    background-image: url('@/assets/rostro2.png');
    background-size: cover;
    background-repeat: no-repeat;
    font-family: monospace;
    position: relative;
    z-index: 1;
}

.content {
    position: relative;
}

</style>