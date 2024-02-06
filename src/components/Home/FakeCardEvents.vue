Copiar
<script setup lang="ts">
import { useFakeDataStore } from '../../stores/fakeDataStore';
import type { Event }from '@/interfaces/EventInterface';

const { currentPage, changePage, pages } = useFakeDataStore();
const fakeDataStore = useFakeDataStore();
const sendAddList = (id: any) => {
    fakeDataStore.navigateToLogin(id);
};
</script>

<template>
    <div class="events">
        <div class="events-cards">
            <div v-for="event in fakeDataStore.fakeEvents" :key="event.id" class="event-card">
                <img :src="event.image" :alt="event.title">
                <div class="info-card">
                    <h3>{{ event.title }}</h3>
                    <h6>Descripción: {{ event.description }}</h6>
                    <h6>Fecha: {{ event.date_event }}</h6>
                    <h6>Hora: {{ event.time_event }}</h6>
                    <h5>Aforo: {{ event.capacity }}</h5>
                    <h5>Ubicación: {{ event.location }}</h5>
                    <button type="button" class="btn btn-secondary" @click="sendAddList(event.id)">Añadir</button>
                </div>
            </div>
        </div>
        <nav aria-label="page" class="page">
            <ul class="pagination active pagination-lg justify-content-center" aria-current="page">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1"><i
                            class="bi bi-arrow-left"></i></button>
                </li>
                <li class="page-item" v-for="page in pages" :key="page">
                    <button class="page-link" @click="changePage(page)">{{ page }}</button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === pages }">
                    <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === pages"><i
                            class="bi bi-arrow-right"></i></button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss">

.events{
height: 60%;
.events-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    color:white;
    font-size:1rem;
 .event-card {
    font-size:1rem;
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    background-color: rgba(0,  0,  0,  0.8); 
    
    max-width: 18rem;
    font-size: 100%;
 
   img {
     width: 15rem;
     height: 10rem;
     cursor: pointer;
    
   }
   .info-card{
   
       padding:1rem;
       margin:-1rem;
       margin-top: 1rem;
       button{
        
           font-size:1rem;
           display: inline-block;
           position: relative;
           margin-left: 10rem;
       }
   }
   

 }
}}
.page{
    margin-bottom: 10rem;
    margin-top: 1rem;
   }
    
</style>
