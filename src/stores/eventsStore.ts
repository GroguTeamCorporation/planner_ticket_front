
import { defineStore } from 'pinia';
import type { Event } from '@/interfaces/EventInterface';

import axios from 'axios';
import router from '@/router';

export const useEventsStore = defineStore({
  id: 'eventsStore',
  state: () => ({
    allEvents: [] as Event[],
    lastFetchTime: 0,
  }),
  actions: {
    async fetchEvents() {
      const tenMinutesInMilliseconds = 10 * 60 * 1000;
      const now = Date.now();
      if (this.lastFetchTime + tenMinutesInMilliseconds > now) {
        return;
      }
      
      const response = await axios.get("http://localhost:8080/api/v1/events");
      this.allEvents = response.data;
      this.lastFetchTime = now;
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


