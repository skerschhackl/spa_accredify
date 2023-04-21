<script setup lang="ts">
  import UserGreeting from '../components/UserGreeting.vue';
  import UserDocumentList from '../components/UserDocumentList.vue';
  import UserCareerGoals from '../components/UserCareerGoals.vue';

  defineProps<{
    name: string,
    isPersonal: boolean
  }>()

</script>

<template>
  <main>
    <UserGreeting :isPersonal="isPersonal" :name="name" />
    <div class="managed-user-view">
      <UserCareerGoals />
      <UserDocumentList />
    </div>
  </main>
</template>

<style scoped>

  .managed-user-view {
    display: flex;
    gap: 32px;
  }
</style>