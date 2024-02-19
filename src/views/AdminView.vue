<script setup lang="ts">
import EventComponent from '@/components/EventComponent.vue';
import CardEvent from '../components/Home/CardEvents.vue';
</script>

<template>
  <main>
<div id="eventComponent">
  <EventComponent />
</div>
<CardEvent />
  </main>
</template>

<style scoped lang="scss">
    @import '../assets/admin.scss';
</style>
