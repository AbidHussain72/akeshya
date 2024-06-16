<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><RouterLink to='/'><img src="https://akeshya.com/assets/img/logo.png" alt="" class="img-fluid">AKESHYA</RouterLink></h1>
        
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><RouterLink class="nav-link scrollto " to="/" active-class="active-link">Home</RouterLink></li>
          <li><RouterLink class='nav-link scrollto' to='/about' active-class="active-link">About</RouterLink></li>
          <li><RouterLink class="nav-link scrollto" to="/services" active-class="active-link">Services</RouterLink></li>
          <li><RouterLink class='getstarted scrollto' to='/contact' active-class="active-link">Contact us</RouterLink></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

</template>

<style scoped>
.active-class{
  color: blue;
}
</style>
