<script setup lang="ts">
import { useEventsStore } from '../../stores/eventsStore';



const { currentPage, changePage, pages } = useEventsStore();
const eventsStore = useEventsStore();

const sendAddList = (id: any) => {
  eventsStore.navigateToLogin(id);
};
</script>

   


</script>
<template>

  <div class="events">
    <div class="events-cards">
        <div v-for="(event, index) in eventsStore.paginatedEvents" :key="event.id" class="event-card">
        <img :src="event.image" :alt="event.title">
        <div class="info-card">
          <h3>{{ event.title }}</h3>
          <h5>Descripción: {{ event.description }}</h5>
          <h5>Fecha: {{ event.date_event }}</h5>
          <h5>Hora: {{ event.time_event }}</h5>
          <h5>Aforo: {{ event.capacity }}</h5>
          <h5>Ubicación: {{ event.location }}</h5>
        
          <button @click="sendAddList(event.id)">Añadir</button>
         </div>
      </div>
    </div>
    <nav aria-label="page" class="page">
      <ul class="pagination active pagination-lg justify-content-center" aria-current="page">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1"><i
              class="bi bi-arrow-left"></i></button>
        </li>
        <li class="page-item" v-for="page in pages" :key="page">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === pages }">
          <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === pages"><i
              class="bi bi-arrow-right"></i></button>
        </li>
      </ul>
    </nav>
</div>
</template>

<style lang="scss">
</style>
