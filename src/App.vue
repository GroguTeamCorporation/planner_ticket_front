<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <header>
    <Navbar/>
  </header>
   
  <footer>
    <Footer/>
  </footer>
  <RouterView />
</template>

<style scoped></style>
