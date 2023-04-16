<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main class="page">
    <RouterView />
  </main>
</template>
