<template>
   <div id="main-container">
       <div class="login-container">
         <img class="logo" :src="'/src/assets/images/logo 1.png'" />
  
         <form class="login-form" @submit.prevent="registerUser">
           <label class="label" for="username">Nombre de usuario:</label>
           <input class="input-field" type="text" v-model="username" required />
  
           <label class="label" for="email">Email:</label>
           <input class="input-field" type="email" v-model="email" required />
  
           <label class="label" for="password">Contraseña:</label>
           <input class="input-field" type="password" v-model="password" required />
  
           <button class="login-button" type="submit">Aceptar</button>
         </form>
       </div>
   </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import type { IRegisterUser } from '@/models/IRegisterUser'; 

  const username = ref('');
  const email = ref('');
  const password = ref('');
  const isSubmitting = ref(false);
  
  const registerUser = async () => {
   isSubmitting.value = true;
  
   const data: IRegisterUser = {
      username: username.value,
      email: email.value,
      password: password.value,
      role: 'ROLE_USER', 
      isAuthenticated: false,
   };
  
   try {
      const response = await axios.post('http://localhost:8080/api/v1/users', data);
      console.log('Usuario registrado exitosamente:', response.data);
   } catch (error) {
      console.error('Error al registrar usuario:', error);
   } finally {
      isSubmitting.value = false;
   }
  };
  </script>
  
  <style scoped>
  /* Estilos existentes */
  </style>
 
 <style scoped>
 @font-face {
  font-family: 'fuente';
  src: url('../assets/fonts/Peralta-Regular.ttf');
  font-weight: normal;
  font-style: normal;
 }
 
 #main-container {
  background-image: url('/src/assets/images/fondo-loginview.png');
  background-size: cover;
  background-position: center;
  margin: 0;
  height: 100vh;
  overflow: hidden;
 }
 
 .logo {
  width: 25%;
  margin-left: 35%;
  margin-top: 5%;
 }
 
 .login-container {
  width: 450px;
  height: 520px;
  margin: auto;
  margin-top: 12%;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(250, 247, 247, 0.1);
  background: rgb(58, 58, 57);
  opacity: 0.9;
 }
 
 .login-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
 }
 
 .input-field {
  margin-bottom: 30px;
  padding: 8px;
  border: 2px solid #2a5381;
  border-radius: 6px;
 }
 
 .login-button {
  background-color: white;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 30%;
  margin-left: 35%;
  margin-top: 5%;
  transition: 0.3s;
  font-family: 'fuente';
 }
 
 .login-button:hover {
  background-color: #2a5381;
  color: white;
 }
 
 .label {
  color: whitesmoke;
 }
 
 @media screen and (max-width: 600px) {
  .logo {
     width: 40%;
     margin-top: 20%;
  }
  .login-container{
     width: 80%;
     margin-top: 25%;
  }
  .login-form{
     padding: 1px;
  }
  .input-field{
     margin-bottom: 15px;
  }
  .login-button{
     width: 70%;
     margin-left: 10%;
  }
 }
 </style>