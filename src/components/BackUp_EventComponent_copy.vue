 <template>  
    <div id="containerBtn">
      <button type="button" class="buttonForm" id="addbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">AÑADIR</button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content"  style="background-color: #5E6572; color: #000000;">
        <div class="modal-header d-flex justify-content-center align-items-center">
          <h5 class="modal-title" id="exampleModalLabel" style="color: #EEF1EF;">Nuevo Evento</h5>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addEvent" class="row g-3 justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="m-3">
                <label for="title" class="form-label">Título</label>
                <input v-model="formData.title" type="text" class="form-control" id="title" required />
              </div>
              <div class="m-3">
                <label for="date" class="form-label">Fecha</label>
                <input v-model="formData.date" type="date" class="form-control" id="date" required />
              </div>
              <div class="m-3">
                <label for="time" class="form-label">Hora</label>
                <input type="text" class="form-control" id="time" v-model="formData.time" @input="handleTimeInput" :class="{ 'is-invalid': timeErrorMessage }" required>
                <div v-if="timeErrorMessage" class="invalid-feedback">
                  {{ timeErrorMessage }}
                </div>
              </div>
              <div class="m-3">
                <label for="capacity" class="form-label">Entradas disponibles</label>
                <input v-model="formData.capacity" type="number" class="form-control" id="capacity" required />
              </div>
              <div class="m-3">
                <label for="description" class="form-label">Descripción</label>
                <textarea v-model="formData.description" class="form-control" id="description" required></textarea>
              </div>
            </div>
            <div class="col-md-4">
              <div class="m-3">
                <label for="image" class="form-label">Añadir imagen</label>
                <input type="file" class="form-control" id="image" @change="handleImageChange" required/>
              </div>
            </div>

            <div class="col-md-2 mt-5">
              <div  class="d-flex flex-column align-items-center">
                <button type="button" class="buttonForm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="buttonForm" @click="clearForm">Borrar</button>
                <button type="submit" class="buttonForm">Guardar</button>
              </div>
            </div>
          </form>

          <div v-for="event in allEvents" :key="event.id" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ event.title }}</h5>
              <p class="card-text">Descripción: {{ event.description }}</p>
              <p class="card-text">Ubicación: {{ event.location }}</p>
              <p class="card-text">Entradas disponibles: {{ event.capacity }}</p>
              <p class="card-text">Fecha: {{ event.date }}</p>
              <p class="card-text">Hora: {{ event.time }}</p>
              <img :src="event.image || ''" alt="Imagen del evento" class="img-fluid"  />
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>  
  </template>
  
  <script setup lang="ts">
  import axios from 'axios';
  import { ref, type Ref } from 'vue';
  import type { Event} from '@/interfaces/EventInterface';
  import { useEventsStore } from "@/stores/eventsStore";
  

  interface FormData {
    title: string;
    description: string;
    location: string;
    capacity: number;
    date: string;
    time: string;
    image: File | null;
}  
  const formData: Ref<FormData> = ref({
    title: '',
    description: '',    
    location: '',
    capacity: 0,   
    date: '',
    time: '',   
    image: null, 
  });

  const allEvents = ref<Event[]>([]);   
  
  const timeErrorMessage = ref('');

const eventsStore = useEventsStore();

const addEvent = async () => {
  try {
    if (formData.value.image && ((formData.value.image as any) instanceof File || (formData.value.image as any) instanceof Blob)) {
      const imageFormData = new FormData();
      imageFormData.append('file', formData.value.image);
      const imageResponse = await axios.post('http://localhost:8080/api/v1/images', imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const imageName = imageResponse.data;  

      const eventData = {
        ...formData.value,
        image: '/images/' + imageName
      };

      const eventResponse = await axios.post('http://localhost:8080/api/v1/events', eventData);
     
      await eventsStore.fetchEvents();

      // allEvents.value = eventsStore.allEvents;
          
      clearForm();
      $('#exampleModal').modal('hide');

    } else {
      console.error('No se ha seleccionado ninguna imagen para subir.');
    }
  } catch (error: any) {
    console.error('Error al enviar los datos al servidor:', error.message);
  }
};


const handleImageChange = (event: any) => {
  console.log('Imagen seleccionada:', event.target.files[0]);
  formData.value.image = event.target.files[0];
};

const clearForm = () => {
formData.value.title = '';
formData.value.date = '';
formData.value.time = '';
formData.value.location = '';
formData.value.capacity = 0;
formData.value.description = '';
formData.value.image = null;
};

const handleTimeInput = () => {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!regex.test(formData.value.time)) {    
    timeErrorMessage.value = 'Formato de hora no válido (00:00)';
  } else {
    timeErrorMessage.value = '';
  }
};

  </script>
  
  <style scoped lang="scss">
  @import '../assets/admin.scss';
  </style>
