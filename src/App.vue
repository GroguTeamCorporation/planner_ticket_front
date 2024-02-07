<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Slider from './components/Slider.vue';

</script>

<template>
  <header>
    <Navbar/>
  </header>
    <Slider/>
  <footer>
    <Footer/>
  </footer>
  <RouterView />
</template>

<style scoped></style>
