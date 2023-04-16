<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
  import UtilityNavBar from './components/UtilityNavBar.vue';
</script>

<template>
  <NavBar />
  <main class="page-wrapper">
    <UtilityNavBar firstName="Gerald" lastName="Goh" />
    <div class="page-content">
      <RouterView />
    </div>
  </main>
</template>
