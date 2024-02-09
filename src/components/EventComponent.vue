 <template>
  
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">AÑADIR</button>
  
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nuevo Evento</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addEvent">

                <div class="mb-3">
                    <label for="title" class="form-label">Título</label>
                    <input v-model="formData.title" type="text" class="form-control" id="title" required>
                </div>

                <div class="mb-3">
                    <label for="date_event" class="form-label">Fecha</label>
                    <input v-model="formData.date" type="date" class="form-control" id="date_event" required>
                </div>

                <div class="mb-3">
                    <label for="time_event" class="form-label">Hora</label>
                    <input v-model="formData.time" type="time" class="form-control" id="time_event" required>
                </div>

                <div class="mb-3">
                    <label for="location" class="form-label">Ubicación</label>
                    <input v-model="formData.location" type="text" class="form-control" id="location" required>
                </div>

                <div class="mb-3">
                    <label for="capacity" class="form-label">Entradas disponibles</label>
                    <input v-model="formData.capacity" type="number" class="form-control" id="capacity" required>
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Descripción</label>
                    <textarea v-model="formData.description" class="form-control" id="description" required></textarea>
                </div>
  
                <div class="mb-3">
                    <label for="image" class="form-label">Seleccionar imagen</label>
                    <input type="file" class="form-control" id="image" @change="handleImageChange" />
                </div>
    
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger" @click="clearForm">Borrar</button>
                <button type="submit" class="btn btn-primary" id="close" >Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import axios from 'axios';
  import { ref, type Ref } from 'vue';
  import type { Event} from '@/interfaces/EventInterface';

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

  // Variable reactiva para almacenar la lista de eventos
  const eventList = ref<Event[]>([]);  

  const addEvent = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/events', formData.value, {
    });

      if (response.status === 200) {
        const newEvent: Event = {
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          location: response.data.location,
          capacity: response.data.capacity,
          date_event: response.data.date_event,
          time_event: response.data.time_event,
          image: response.data.image,
        };

        console.log('Evento agregado con éxito:', newEvent);
        eventList.value.push(newEvent);
        closeModal();
        clearForm();
      } else {
        console.error('Error al agregar el evento:', response.data.error);
      }
  } catch (error: any) {
    console.error('Error al enviar los datos al servidor:', error.message);
  }
};

 const closeModal = () => {
  const modal = document.getElementById('close');
  if (modal) {
    modal.classList.remove('show'); 
    modal.style.display = 'none'; 
  }
};
 
  
const handleImageChange = (event: any) => {
  // lógica para almacenar la imagen en formData.image
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

  </script>
  
  <style scoped lang="scss">

  </style>
