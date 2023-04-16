<script setup lang="ts">
  import userUtils from '../utils/UserUtils.js';
  import userData from '../utils/UserData.js';
</script>

<template>
  <div class="greeting">
    <h2 class="greeting--headline">
      Hi, {{ userUtils.getUserName(userData.firstName, userData.lastName) }} 👋
    </h2>
    <div class="greeting--sub-headline">
      Manage your documents.
    </div>
  </div>
</template>

<style scoped>
  .greeting--headline {
    /* font-family: 'Pulp Display', sans-serif; */
    font-size: var(--font-size-headline);
    font-weight: var(--font-weight-bold);
    line-height: 44px;
  }
  .greeting--sub-headline {
    color: var(--color-text-light);
    line-height: 24px;
    margin-top: 8px;
  }
</style>