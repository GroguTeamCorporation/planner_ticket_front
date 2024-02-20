import { defineStore } from 'pinia';
import type { Event } from '@/interfaces/EventInterface';
import axios from 'axios';
import router from '@/router';
import type {EventResponse} from '../interfaces/EventResponse';
import type {EventPayload} from '../interfaces/EventPayload';


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
    
    
    async sendAddList(event: Event) {
      try {
        const token = localStorage.getItem('access_token');
        const payload: EventPayload = {
     
          id: event.id,
    title: event.title,
    description: event.description,
    location: event.location,
    capacity: event.capacity,
    date: event.date,
    time: event.time,
    image: event.image ,
          
        };
    
        const response = await axios.post<EventResponse>('http://localhost:8080/api/v1/list_us', payload, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            
          },
        });
       console.log(response.data.message); 
      } catch (error) {
        console.error('No se pudo agregar el evento en la lista', error);
      }
    }
    
  },
});


