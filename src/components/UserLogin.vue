<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './HelloWorld.vue'
</script>
<template>
  <div class="wrapper">
    <HelloWorld msg="Pick your User" />

    <nav>
      <RouterLink to="/personal">Personal User</RouterLink>
      <RouterLink to="/managed">Managed User</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

