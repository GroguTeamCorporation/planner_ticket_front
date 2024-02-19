import { defineStore } from 'pinia';
import type { Event } from '@/interfaces/EventInterface';
import axios from 'axios';
import router from '@/router';

export const useListUsStore = defineStore({
  id: 'listUsStore',
  state: () => ({
    allEvents: [] as Event[],
  }),
  actions: {
    async fetchEvents() {
      try {
        // Recupera el token de acceso del almacenamiento local
        const token = localStorage.getItem('access_token');

        const response = await axios.get("http://localhost:8080/api/v1/list_us", {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        this.allEvents = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    navigateToLogin(id: number | string) {
      if (typeof id === 'number' || typeof id === 'string') {
        router.push({ name: 'Editar', params: { id: id } });
      } else {
        console.error('El ID debe ser un número o cadena');
      }
    },
  },
});



