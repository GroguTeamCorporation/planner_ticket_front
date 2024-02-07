<template>
  <div id="main-container">
    <div class="login-container">
      <img class="logo" :src="'/src/assets/images/logo 1.png'">

      <form class="login-form" @submit.prevent="registrarse">
        <label class ="label" for="nombre">Nombre:</label>
        <input class="input-field" type="text" v-model="nombre" required>

        <label class="label" for="email">Email:</label>
        <input class="input-field" type="email" v-model="email" required>

        <label class="label" for="password">Contraseña:</label>
        <input class="input-field" type="password" v-model="password" required>

        <button class="login-button" type="submit">Aceptar</button>
      </form>

     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      email: "",
      password: ""
    };
  },
  methods: {
    registrarse() {
      // Lógica para enviar la solicitud de registro al backend
      console.log("Solicitud de registro enviada");
    }
  }
};
</script>

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
  margin: 25%;
  margin-top: 12%;
  margin-left: 38%;
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


</style>



