<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
  import UtilityNavBar from './components/UtilityNavBar.vue';
  import userData from './utils/UserData.js';
</script>

<template>
  <NavBar />
  <main class="page-wrapper">
    <UtilityNavBar :firstName="userData.firstName" :lastName="userData.lastName" />
    <div class="page-content">
      <RouterView />
    </div>
  </main>
</template>
