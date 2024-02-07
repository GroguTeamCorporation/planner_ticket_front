<script setup lang="ts">
  
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../assets/img/logo.png" alt="" width="150" height="100"></a>
      <button class="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" data-bs-theme="dark">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/register">Register</RouterLink>
            
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/list">List</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin">Admin</RouterLink>
          </li>
        </ul>
      </div>
   </div>
  </nav>
</template>


<style scoped lang="scss">
    @import '../assets/Navbar.scss';
    @import url('https://fonts.googleapis.com/css2?family=Peralta&display=swap');
</style>