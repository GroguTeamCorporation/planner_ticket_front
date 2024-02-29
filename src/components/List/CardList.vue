<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useListUsStore } from "../../stores/listUsStore";
import { useImageStore } from "../../stores/imagesStore";

const listUsStore = useListUsStore();
const router = useRouter();
const itemsPerPage = 3;
const currentPage = ref(1);
const allEvents = computed(() => listUsStore.allEvents);
const imageStore = useImageStore();
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
  await listUsStore.fetchEvents();
};

fetchEvents();

watchEffect(() => {
  allEvents.value.forEach((event) => {
    imageStore.fetchImage(event.image);
  });
});
</script>

<template>
  <div class="events">
    <div class="events-cards">
      <div
        v-for="(event, index) in paginatedEvents"
        :key="event.id"
        class="event-card"
      >
        <img
          :src="imageStore.images[event.image]"
          :alt="event.title"
          class="img-fluid rounded-start"
        />
        <div class="col-md-12">
          <div class="info-card">
            <h3>{{ event.title }}</h3>
            <h5>{{ event.date }}</h5>
          </div>
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
  height: 40%;
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

      width: 54rem;
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
