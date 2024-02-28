<script setup lang="ts">
    import {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse
    } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  const collapse1 = ref(false);
</script>
<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
  <MDBNavbar expand="lg" container class="navbar">
    <MDBNavbarBrand href="#"><img src="../assets/img/logo.png" alt="" width="150" height="100"></MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent" class="icono">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#" active>
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </MDBNavbarItem>
        <MDBNavbarItem href="#">
          <RouterLink class="nav-link" to="/login">Login</RouterLink>
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          <RouterLink class="nav-link" to="/register">Register</RouterLink>
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          <RouterLink class="nav-link" to="/list">List</RouterLink>
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          <RouterLink class="nav-link" to="/admin">Admin</RouterLink>
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          <RouterLink class="nav-link" to="/logout">Logout</RouterLink>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>
<style scoped lang="scss">
    @import '../assets/Navbar.scss';
    @import url('https://fonts.googleapis.com/css2?family=Peralta&display=swap');
    
</style>