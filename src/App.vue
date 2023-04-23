<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import UtilityNavBar from './components/UtilityNavBar.vue';

  import { computed, ref, watchEffect } from 'vue';
  import User from '@/types/User';
  import { getJSON } from './utils/requestUtils.js';
  import { urlUserData } from './components/constants/urlConstants';
  import UserPersonalView from './views/UserPersonalView.vue';

  const person = ref(new User);
  const error = ref(false);

  watchEffect(async (newUser) => {
    if (newUser.length > 0) {
      try {
        const response = await getJSON(urlUserData);
        person.value.populateFromJSON(response.data);
     } catch (e) {
        error.value = true;
      }
    }
  });

  const isEmpty = computed(() => { return person.value.data === undefined })
  const isPersonalAccount = computed(() => person.value.data?.current_organisation.is_personal || false )

</script>

<template>
  <NavBar />
  <main class="page-wrapper">
      <UtilityNavBar :name="person.data?.name" />
      <div class="page-content">
        <span v-if="error">
          We are sorry - there was an error loading your user data.
        </span>
        <UserPersonalView 
          :name="person.data?.name" 
          :isPersonal="isPersonalAccount" />
      </div>
  </main>
</template>
