<script setup lang="ts">

  import 'bootstrap-icons/font/bootstrap-icons.css';
</script>
<template>
    <footer class="text-white-50 text-center text-lg-start position-fixed bottom-0 w-100">
     <div class="container p-1 pb-0">
      <div class="row-auto d-flex justify-content-between align-items-center">
           <div>
             <a href="#" class="me-4 text-reset" target="_blank">
              <i class="bi bi-spotify"></i>
             </a>
             <a href="https://www.tiktok.com" class="me-4 text-reset" target="_blank" >
               <i class="bi bi-tiktok"></i>
             </a>
             <a href="https://www.facebook.com" class="me-4 text-reset" target="_blank" >
               <i class="bi bi-facebook"></i>
             </a>
             <a href="https://www.instagram.com" class="me-4 text-reset" target="_blank">
               <i class="bi bi-instagram"></i>
             </a>
             <a href="https://www.instagram.com" class="me-4 text-reset" target="_blank">
              <i class="bi bi-discord"></i>
             </a>
           </div>
           <p class="text-center p-3" >
             © 2023 Copyright | Derechos Reservados de PlanerTickect
           </p>
      </div>
     </div>
    </footer>
    </template>

  <style scoped  lang="scss">
    @import '../assets/footer.scss';
  </style>

</script>

<template>
 <footer>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-3">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-tiktok"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-spotify"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-discord"></i></a>
        </li>
      </ul>
      <span class="navbar-text">
        &#169; Copyright 2023 | TicketPlanner
      </span>
    </div>
  </div>
</nav>
    
 </footer>
</template>


<style scoped lang="scss">
    @import '../assets/footer.scss';
</style>
