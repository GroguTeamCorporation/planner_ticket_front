
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useEventsStore } from "../../stores/eventsStore";
import axios from 'axios';

const eventsStore = useEventsStore();
const router = useRouter();

const itemsPerPage = 3;
const currentPage = ref(1);

const allEvents = computed(() => eventsStore.allEvents);

const paginatedEvents = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = currentPage.value * itemsPerPage;
  return allEvents.value.slice(startIndex, endIndex);
});

const pages = computed(() => Math.ceil(allEvents.value.length / itemsPerPage));

const changePage = (page: number) => {
  if (page >= 1 && page <= pages.value) {
    currentPage.value = page;
  }
};

const fetchEvents = async () => {
  await eventsStore.fetchEvents();
};

fetchEvents();




async function sendAddList(path="/list") {

      await axios.post('/api/list_us');
    
      console.log('Evento agregado con éxito');
   
      
}




</script>


<template>
  <div class="events">
    <div class="events-cards">
      <div
        v-for="(event, index) in paginatedEvents"
        :key="event.id"
        class="event-card"
      >
        <img :src="event.image" :alt="event.title" />
        <div class="info-card">
          <h3>{{ event.title }}</h3>
          <h5>Descripción: {{ event.description }}</h5>
          <h5>Fecha: {{ event.date }}</h5>
          <h5>Hora: {{ event.time }}</h5>
          <h5>Aforo: {{ event.capacity }}</h5>
          <h5>Ubicación: {{ event.location }}</h5>
     
          <button type="submit" class="btn btn-secondary" @click="sendAddList()" >Asistir</button>
        </div>
      </div>
    </div>
    <nav aria-label="page" class="page">
      <ul
        class="pagination active pagination-lg justify-content-center"
        aria-current="page"
      >
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button
            class="page-link"
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
          >
            <i class="bi bi-arrow-left"></i>
          </button>
        </li>
        <li class="page-item" v-for="page in pages" :key="page">
          <button class="page-link" @click="changePage(page)">
            {{ page }}
          </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === pages }">
          <button
            class="page-link"
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === pages"
          >
            <i class="bi bi-arrow-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">

.events {
margin-top: 5rem;
  height: 60%;
  .events-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    color: white;
    font-size: 1rem;
    .event-card {
      font-size: 1rem;
      margin: 1rem;
      padding: 1rem;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);

      width: 24rem !important;
      font-size: 100%;

      img {
        width: 15rem;
        height: 10rem;
        cursor: pointer;
      }
      .info-card {
        padding: 1rem;
        margin: -1rem;
        margin-top: 1rem;
        button {
          font-size: 1rem;
          display: inline-block;
          position: relative;
          margin-left: 10rem;
        }
      }
    }
  }
}
.page {
  margin-bottom: 10rem;
  margin-top: 1rem;
}
</style>
