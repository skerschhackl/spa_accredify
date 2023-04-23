<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import UtilityNavBar from '@/components/UtilityNavBar.vue';
  import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue';
  import Notification from '@/components/widgets/Notification.vue';

  import { computed, ref, watchEffect } from 'vue';
  import User from '@/types/User';
  import { getJSON } from '@/utils/requestUtils.js';
  import { urlUserData } from '@/components/constants/urlConstants';
  import UserView from '@/views/UserView.vue';

  const person = ref(new User);
  const error = ref(false);
  const isLoading = ref(false);

  watchEffect(async (newUser) => {
    if (newUser.length > 0) {
      isLoading.value = true;
      try {
        const response = await getJSON(urlUserData);
        person.value.populateFromJSON(response.data);
     } catch (e) {
        error.value = true;
      }
    }
    isLoading.value = false;
  });

  const isEmpty = computed(() => { return person.value.data === undefined })
  const isPersonalAccount = computed(() => person.value.data?.current_organisation.is_personal || false )

</script>

<template>
  <NavBar />
  <main class="page-wrapper">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <div v-else-if="!isEmpty">
      <UtilityNavBar :name="person.data?.name" />
      <div class="page-content">
        <span v-if="error">
          <Notification :msg="'We are sorry - there was an error loading your user data.'"/>
        </span>
        <UserView 
          :name="person.data?.name" 
          :isPersonal="isPersonalAccount" />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .notification--wrapper {
    margin-bottom: 2rem; 
  }  
</style>
