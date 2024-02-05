// fakeDataStore.ts
import { defineStore } from 'pinia';

export const useFakeDataStore = defineStore({
  id: 'fakeDataStore',
  state: () => ({
    fakeEvents: [
      {
        id: 1,
        title: 'Evento de muestra 1',
        description: 'Descripción del evento de muestra 1',
        location: 'Ubicación de muestra 1',
        capacity: 'Capacidad de muestra 1',
        date_event: '2024-02-05',
        time_event: '18:00',
        image: './src/assets/img/concert1.jpg',
      },
      {
        id: 2,
        title: 'Evento de muestra 2',
        description: 'Descripción del evento de muestra 2',
        location: 'Ubicación de muestra 2',
        capacity: 'Capacidad de muestra 2',
        date_event: '2024-02-10',
        time_event: '19:00',
        image: './src/assets/img/concert2.jpg',
      },
      {
        id: 3,
        title: 'Evento de muestra 1',
        description: 'Descripción del evento de muestra 1',
        location: 'Ubicación de muestra 1',
        capacity: 'Capacidad de muestra 1',
        date_event: '2024-02-05',
        time_event: '18:00',
        image: './src/assets/img/concert1.jpg',
      },
      {
        id: 4,
        title: 'Evento de muestra 2',
        description: 'Descripción del evento de muestra 2',
        location: 'Ubicación de muestra 2',
        capacity: 'Capacidad de muestra 2',
        date_event: '2024-02-10',
        time_event: '19:00',
        image: './src/assets/img/concert2.jpg',
      },
      {
        id: 5,
        title: 'Evento de muestra 1',
        description: 'Descripción del evento de muestra 1',
        location: 'Ubicación de muestra 1',
        capacity: 'Capacidad de muestra 1',
        date_event: '2024-02-05',
        time_event: '18:00',
        image: './src/assets/img/concert1.jpg',
      },
      {
        id: 6,
        title: 'Evento de muestra 2',
        description: 'Descripción del evento de muestra 2',
        location: 'Ubicación de muestra 2',
        capacity: 'Capacidad de muestra 2',
        date_event: '2024-02-10',
        time_event: '19:00',
        image: './src/assets/img/concert2.jpg',
      },
      // Agrega más eventos de muestra según sea necesario
    ],
    itemsPerPage: 4,
    currentPage: 1,
    lastFetchTime: 0,
  }),
  getters: {
    pages: (state) => Math.ceil(state.fakeEvents.length / state.itemsPerPage),
    paginatedEvents: (state) => {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return state.fakeEvents.slice(startIndex, endIndex);
    },
  },
  actions: {
    changePage(page: number) {
      if (page >= 1 && page <= this.pages) {
        this.currentPage = page;
      }
    },
    navigateToLogin(id: number | string) {
      // Lógica para redirigir al usuario, si es necesario
    },
  },
});
