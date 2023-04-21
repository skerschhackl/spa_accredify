<script setup lang="ts">
  import UserGreeting from '../components/UserGreeting.vue';
  import UserDocumentList from '../components/UserDocumentList.vue';
  
  defineProps<{
    name: string,
    isPersonal: boolean
  }>()

</script>

<template>
  <main>
    <UserGreeting :isPersonal="isPersonal" :name="name" />
    <UserDocumentList />
  </main>
</template>
