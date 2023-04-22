<script setup lang="ts">
  import { watchEffect, ref } from 'vue';

  import type Document from '@/types/Document';
  import type CareerGoal from '@/types/CareerGoal';
  import { urlCareerGoalData, urlDocumentData } from '@/components/constants/urlConstants';
  import { getJSON } from '@/utils/requestUtils';
  import UserGreeting from '@/components/UserGreeting.vue';
  import UserDocumentList from '@/components/UserDocumentList.vue';
  import UserCareerGoals from '@/components/UserCareerGoals.vue';
  
  defineProps<{
    name: string,
    isPersonal: boolean
  }>()

  const documentsData = ref({} as Document)
  const latestCareerGoal = ref({} as CareerGoal);

  const error = ref('');

  watchEffect(async (newDoc) => {
    if (newDoc.length > 0) {
      try {
        const response = await getJSON(urlDocumentData);
        documentsData.value = response.data;
      } catch (e) {
        error.value = 'We are sorry - there was an error loading your document data.'
      }
    }
  });
  
  watchEffect(async (newGoal) => {
    if (newGoal.length > 0) {
      try {
        const response = await getJSON(urlCareerGoalData);
        const maxId = Math.max.apply(null, response.data.map((item: { id: any; }) => item.id));
        latestCareerGoal.value = response.data.find( (item: { id: number; }) => {return item.id === maxId})
      } catch (e) {
        error.value = 'We are sorry - there was an error loading your career goal data.'
      }
    }
  });

</script>

<template>
  <main>
    <UserGreeting :isPersonal="isPersonal" :name="name" />
    <div :class="{'user-content-wrapper': !isPersonal}">
      <UserCareerGoals v-if="!isPersonal" :latestCareerGoal="latestCareerGoal" />
      <UserDocumentList :documents="documentsData" /> 
    </div>
  </main>
</template>

<style scoped>
  .user-content-wrapper {
    display: flex;
    gap: 32px;
  }
</style>