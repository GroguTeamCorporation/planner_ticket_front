import { defineStore } from 'pinia';
import axios from 'axios';

export const useImageStore = defineStore({
 id: 'imageStore',
 state: () => ({
    images: {} as Record<string, string>, // Almacena las imágenes por ID de evento
 }),
 actions: {
    async fetchImage(eventImage: string) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/images/${eventImage}.jpg`, {
          responseType: 'blob', // Especifica que esperas un blob como respuesta
        });
        const imageUrl = URL.createObjectURL(response.data); // Crea una URL para el blob
        this.images[eventImage] = imageUrl; // Almacena la URL de la imagen en el estado
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
      }
    },
 },
});
