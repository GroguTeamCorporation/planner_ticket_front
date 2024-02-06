import { defineStore } from 'pinia';

export const useFakeDataStore = defineStore({
  id: 'fakeDataStore',
  state: () => ({
    itemsPerPage:  3,
    currentPage:  1,
    fakeEvents: [
      {
        id: 1,
        title: "Camela",
        description: "Descripción del evento de muestra 1",
        location: "Ubicación de muestra 1",
        capacity: "Capacidad de muestra 1",
        date_event: "2024-02-05",
        time_event: "18:00",
        image: "./src/assets/img/concert1.jpg",
      },
      {
        id: 2,
        title: "La Oreja de Van Gogh",
        description: "Descripción del evento de muestra 2",
        location: "Ubicación de muestra 2",
        capacity: "Capacidad de muestra 2",
        date_event: "2024-02-10",
        time_event: "19:00",
        image: "./src/assets/img/concert2.jpg",
      },
      {
        id: 3,
        title: "Pimpinela",
        description: "Descripción del evento de muestra 1",
        location: "Ubicación de muestra 1",
        capacity: "Capacidad de muestra 1",
        date_event: "2024-02-05",
        time_event: "18:00",
        image: "./src/assets/img/concert1.jpg",
      },
      {
        id: 4,
        title: "José José",
        description: "Descripción del evento de muestra 2",
        location: "Ubicación de muestra 2",
        capacity: "Capacidad de muestra 2",
        date_event: "2024-02-10",
        time_event: "19:00",
        image: "./src/assets/img/concert2.jpg",
      },
      {
        id: 5,
        title: "Amaral",
        description: "Descripción del evento de muestra 1",
        location: "Ubicación de muestra 1",
        capacity: "Capacidad de muestra 1",
        date_event: "2024-02-05",
        time_event: "18:00",
        image: "./src/assets/img/concert1.jpg",
      },
      {
        id: 6,
        title: "Alejandro Sanz",
        description: "Descripción del evento de muestra 2",
        location: "Ubicación de muestra 2",
        capacity: "Capacidad de muestra 2",
        date_event: "2024-02-10",
        time_event: "19:00",
        image: "./src/assets/img/concert2.jpg",
      },
      // Agrega más eventos de muestra según sea necesario
    ],
  }),
  getters: {
    pages(state) {
      return Math.ceil(state.fakeEvents.length / state.itemsPerPage);
    },
    paginatedEvents(state) {
      const startIndex = (state.currentPage -  1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return state.fakeEvents.slice(startIndex, endIndex);
    },
  },
  actions: {
    changePage(newPage: number) {
      if (newPage >=  1 && newPage <= this.pages) {
        this.currentPage = newPage;
      }
    },
    navigateToLogin(id: any) {
      // Lógica para navegar al login...
    },
  },
});
