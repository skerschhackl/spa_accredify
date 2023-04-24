<script setup lang="ts">
  defineProps<{
    name: string,
    isPersonal: boolean
  }>()
</script>

<template>
  <div class="greeting">
      <h2 class="greeting--headline">
        Hi, {{ name }} 👋
      </h2>
      <div v-if="isPersonal" class="greeting--sub-headline">
        Manage your documents.
      </div>
      <div v-else class="greeting--sub-headline">
        Manage your documents issued by SMU Academy or track your career goal.
      </div>
  </div>
</template>

<style scoped>
  .greeting {
    margin-bottom: 56px;
  }
  .greeting--headline {
    /* font is not free, need to be updated */
    /* font-family: 'Pulp Display', sans-serif; */
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-bold);
    line-height: 44px;
  }
  .greeting--sub-headline {
    color: var(--color-text-light);
    line-height: 24px;
    margin-top: 8px;
  }
</style>