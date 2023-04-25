<script setup lang="ts">
  import IconHome from '@/components/icons/IconHome.vue';
  import IconFile from '@/components/icons/IconFile.vue';
  import IconBulb from '@/components/icons/IconBulb.vue';
  import IconShield from '@/components/icons/IconShield.vue';
  import IconCog from '@/components/icons/IconCog.vue';
</script>

<template>
  <nav class="nav-bar">
    <div class="nav-bar nav-bar--icon">
      <img class="nav-bar--logo" alt="SPA logo" src="@/assets/logo.svg"/>
    </div>
    <div class="nav-bar nav-bar--icon nav-bar--home"><IconHome /></div>
    <div class="nav-bar nav-bar--icon nav-bar--documents"><IconFile /></div>
    <div class="nav-bar nav-bar--icon nav-bar--news"><IconBulb /></div>
    <div class="nav-bar nav-bar--icon nav-bar--security"><IconShield /></div>
    <div class="nav-bar nav-bar--icon nav-bar--settings"><IconCog /></div>
  </nav>
</template>

<style scoped >
.nav-bar {
  width: var(--width-nav-bar);
  color: var(--color-nav-bar-icon-disabled);
}

.nav-bar a {
  color: var(--color-nav-bar-icon);
  transition: 0.4s;
}

.nav-bar a:hover {
  transform: scale(1.1);
  transition: 0.4s;
}

.nav-bar--icon {
  width: 60px;
  height: 60px;
  display: grid;
  justify-content: center;
  align-content: center;
}

.nav-bar--logo {
  width: 40px;
  height: 40px;
}

.nav-bar--icon:first-of-type {
  margin: 8px 0 28px;
}
</style>