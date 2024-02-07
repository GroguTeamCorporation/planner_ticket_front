 <template>
  
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">AÑADIR</button>
  
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Añadir Evento</h5>
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
                    <label for="location" class="form-label">Localización</label>
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
                <button type="submit" class="btn btn-primary">Añadir</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import axios from 'axios';
  import { ref, type Ref } from 'vue';

  interface FormData {

    title: string;
    date: string;
    time: string;
    location: string;
    capacity: number;
    description: string;
    image: File | null;
}
  
  const formData: Ref<FormData> = ref({
    title: '',
    date: '',
    time: '',    
    location: '',
    capacity: 0,
    description: '',  
    image: null, 
  });
  
/*   const addEvent = () => {
  // Implementa la lógica para agregar el evento, incluido el manejo de la imagen
  // Después, cierra el modal y actualiza la lista de eventos (si es necesario)
  console.log('Evento agregado:', formData.value);
  clearForm(); // Limpia el formulario después de agregar el evento
}; */


const addEvent = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/events', formData.value);
    if (response.status === 200) {
      console.log('Evento agregado con éxito:', response.data);
      // Aquí puedes realizar acciones adicionales, como actualizar la lista de eventos.
    } else {
      console.error('Error al agregar el evento:', response.data.error);
      // Maneja el error de acuerdo a tus necesidades.
    }
    closeModal();
    clearForm();
  } catch (error) {
    console.error('Error al enviar los datos al servidor:', error.message);
    // Maneja el error de conexión o cualquier otro error que pueda ocurrir.
  }
};

/* const closeModal = () => {
    $('#exampleModal').modal('hide');  
};
 */
 const closeModal = () => {
  const modal = document.getElementById('exampleModal');
  if (modal) {
    modal.classList.remove('show'); // Oculta el modal
    modal.style.display = 'none'; // Opcional: oculta el modal completamente
  }
};
  
  const handleImageChange = (event) => {
  // Aquí puedes manejar la lógica para almacenar la imagen en formData.image
  console.log('Imagen seleccionada:', event.target.files[0]);
  formData.value.image = event.target.files[0];
};

/* const handleImageChange = (event: Event) => {
// Manejar el cambio de la imagen
const target = event.target as HTMLInputElement;
if (target.files) {
formData.image = target.files[0];
console.log('Imagen seleccionada:', formData.image);
}
}; */


  const clearForm = () => {
  // Limpia el formulario
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
