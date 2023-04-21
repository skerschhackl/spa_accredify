<script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  import type User from '@/types/User';
  import { getJSON } from '../utils/requestUtils.js';
  import { urlUserData } from './constants/urlConstants';


  const person = {} as User
  const user = ref(person);
  const error = ref('');

  watchEffect(async (newUser) => {
    if (newUser.length > 0) {
      try {
        const response = await getJSON(urlUserData);
        user.value = response.data; 
      } catch (e) {
        error.value = 'We are sorry - there was an error loading your user data.'
      }
    } 
  });

</script>

<template>
  <div class="greeting">
    <span v-if="error">
      {{ error }}
    </span>
    <span v-else>
      <h2 class="greeting--headline">
        Hi, {{ user?.name }} 👋
      </h2>
      <div v-if="user?.current_organisation?.is_personal === true" class="greeting--sub-headline">
        Manage your documents.
      </div>
      <div v-else class="greeting--sub-headline">
        Manage your documents issued by SMU Academy or track your career goal.
      </div>
    </span>
  </div>
</template>

<style scoped>
  .greeting {
    margin-bottom: 56px;
  }
  .greeting--headline {
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