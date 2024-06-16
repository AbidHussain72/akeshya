<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header/>
  <RouterView class="margin-section"/>
</template>

<style scoped>
.margin-section{
  margin-top: 120px;
}
</style>
