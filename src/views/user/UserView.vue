<script setup lang="ts">
  import UserGreeting from '@/views/user/UserGreeting.vue';
  import UserDocumentList from '@/views/user/UserDocumentList.vue';
  import UserCareerGoals from '@/views/user/UserCareerGoals.vue';
  
  export interface Props {
    name?: string | undefined
    isPersonal?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    name: '',
    isPersonal: false
  })
  
</script>

<template>
  <main>
    <UserGreeting :isPersonal="isPersonal" :name="name" />
    <div :class="{'user-content-wrapper': !isPersonal}">
      <UserCareerGoals v-if="!isPersonal" />
      <UserDocumentList /> 
    </div>
  </main>
</template>

<style scoped>
  .user-content-wrapper {
    display: flex;
    gap: 32px;
  }
</style>