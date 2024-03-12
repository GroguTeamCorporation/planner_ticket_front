<template>
    <div id="main-container">
        <div class="login-container">
            <img class="logo" :src="'/src/assets/images/logo 1.png'">
        
            <form class="login-form" @submit.prevent= "login">
                <label class="label" for="username">User:</label>
                <input class="input-field" type="text" v-model="username" required>
                
                <label class="label" for="password">Password:</label>
                <input class="input-field" type="password" v-model="password" required>
                
                <button  class="login-button" type="submit">Iniciar sesion</button>
            </form>
            <div class="additional">
              <p>¿No eres usuario? <router-link to="/register">REGISTRATE</router-link></p>
        <p>¿Olvidaste la contraseña? <a href="#">HAZ CLICK AQUI</a></p>
            </div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      //  la solicitud de inicio de sesión al backend
      this.$axios.post("http://localhost:8080/api/login", {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log(response.data);
      
      })
      .catch(error => {
        console.error(error);
        
      });
    }
  }
};
</script>
<style scoped>

@font-face{
  font-family: 'fuente';
  src:url('../assets/fonts/Peralta-Regular.ttf');
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


.logo{
    width:25%;
    margin-left:35%;
    margin-top: 5%;
}

.login-container {

  width: 450px;
  height: 520px;
  margin:auto;
  margin-top: 12%;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(250, 247, 247, 0.1);
  background:rgb(58, 58, 57);
  opacity: 0.9;
  
}

.login-form {
  display: flex;
  flex-direction: column;
  padding:20px ;
  
}

.input-field {
  margin-bottom: 30px;
  padding: 8px;
  border: 2px solid #2a5381;
  border-radius: 6px;
  
}

.login-button {
  background-color:white;
  color:black;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width:30%;
  margin-left: 35%;
  margin-top: 5%;
  transition: 0.3s;
  font-family: 'fuente' ;
}

.login-button:hover {
  background-color: #2a5381;
  color : white;
}
.additional {
  margin-top: 20px;
  text-align: center;
  
}

.additional p {
  margin: 5px 0;
  color: whitesmoke;
  
  
}

.additional a {
  color: #4295e2;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'fuente';
}
.label {
  color: whitesmoke;
}
@media screen and (max-width: 600px) {
  .logo {
    width: 40%;
    margin-top: 10%;
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


