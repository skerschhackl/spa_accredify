<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import IconHome from './icons/IconHome.vue';
  import IconFile from './icons/IconFile.vue';
  import IconBulb from './icons/IconBulb.vue';
  import IconShield from './icons/IconShield.vue';
  import IconCog from './icons/IconCog.vue';
</script>

<template>
  <nav class="nav-bar">
    <div class="nav-bar nav-bar--icon">
      <RouterLink to="/"><img class="nav-bar--logo" alt="SPA logo" src="@/assets/logo.svg"/></RouterLink>
    </div>
    <div class="nav-bar nav-bar--icon nav-bar--home">
      <RouterLink to="/"><IconHome /></RouterLink>
    </div>
    <div class="nav-bar nav-bar--icon nav-bar--documents"><IconFile /></div>
    <div class="nav-bar nav-bar--icon nav-bar--news"><IconBulb /></div>
    <div class="nav-bar nav-bar--icon nav-bar--security"><IconShield /></div>
    <div class="nav-bar nav-bar--icon nav-bar--settings"><IconCog /></div>
  </nav>
</template>