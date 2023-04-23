<script setup lang="ts">
  import IconBell from '@/components/icons/IconBell.vue';
  import IconChevron from '@/components/icons/IconChevron.vue';
  import { getInitials } from '@/utils/userUtils.js';
  
  defineProps<{
    name: string | undefined
  }>()

</script>

<template>
  <div v-if="name" class="utility-nav-bar">
    <div class="utility-nav-bar--content">
      <IconBell class="utility-nav-bar--bell-icon" />
      <div class="utility-nav-bar--initials">
        {{ getInitials(name) }}
      </div>
      <div class="utility-nav-bar--username">
        {{ name }}
      </div>
      <IconChevron class="utility-nav-bar--chevron" />
    </div>
  </div>
</template>

<style scoped >
  .utility-nav-bar {
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    border-bottom: 1px solid var(--color-border);
    font-size: var(--font-size-small);
  } 
  .utility-nav-bar--content {
    display: flex;
    align-items: center;
    margin-right: 32px;
  }
  .utility-nav-bar--initials {
    background-color: var(--color-background-user-initials);
    border-radius: 50%;
    color: var(--color-user-initials);
    font-size: var(--font-size-tiny);
    padding: 2px;
    text-align: center;
    width: 24px;
    height: 24px;
    display: grid;
    align-content: center;
  }
  .utility-nav-bar--username {
    margin: 0 8px;
  }
  .utility-nav-bar--bell-icon {
    margin-right: 35px;
  }
</style>