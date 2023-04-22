<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import UtilityNavBar from './components/UtilityNavBar.vue';

  import { ref, watchEffect } from 'vue';
  import type User from '@/types/User';
  import { getJSON } from './utils/requestUtils.js';
  import { urlUserData } from './components/constants/urlConstants';
  import UserManagedView from './views/UserManagedView.vue';
  import UserPersonalView from './views/UserPersonalView.vue';

  const user = ref({} as User);
  const error = ref(false);
  const name = ref('');
  const isPersonal = ref(true);

  watchEffect(async (newUser) => {
    if (newUser.length > 0) {
      try {
        const response = await getJSON(urlUserData);
        user.value = response.data;

        name.value = response?.data?.name;
        isPersonal.value = response?.data?.current_organisation?.is_personal;
      } catch (e) {
        error.value = true;
      }
    }
  });

</script>

<template>
  <NavBar />
  <main class="page-wrapper">
    <UtilityNavBar v-if="!error" :name="name" />
    <div class="page-content">
      <span v-if="error">
        We are sorry - there was an error loading your user data.
      </span>
      <!-- <UserManagedView v-if="!isPersonal" :name="name" :isPersonal="isPersonal" /> -->
      <UserPersonalView :name="name" :isPersonal="isPersonal" />
    </div>
  </main>
</template>
