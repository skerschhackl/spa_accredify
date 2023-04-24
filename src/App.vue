<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import UtilityNavBar from '@/components/UtilityNavBar.vue';
  import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue';
  import Notification from '@/components/widgets/Notification.vue';

  import { ref, watchEffect } from 'vue';
  import User from '@/types/User';
  import { getJSON } from '@/utils/requestUtils.js';
  import { urlUserData } from '@/components/constants/urlConstants';
  import UserView from '@/views/user/UserView.vue';


  const person = ref(new User);
  const hasData = ref(false);
  const hasError = ref(false);
  const isLoading = ref(false);

  watchEffect(async (newUser) => {
    if (newUser.length > 0) {
      isLoading.value = true;
      try {
        const response = await getJSON(urlUserData);
        person.value.populateFromJSON(response.data);
        hasData.value = !!person.value.data || false;
     } catch (e) {
      hasError.value = true;
      }
    }
    isLoading.value = false;
  });


  // make refs visible for tests
  defineExpose({ person, hasData, hasError, isLoading });

</script>

<template>
  <NavBar />
  <main class="page-wrapper">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <span v-if="hasError">
      <Notification :msg="'We are sorry - there was an error loading your user data.'"/>
    </span>
    <div v-if="hasData">
      <UtilityNavBar :name="person.data.name" />
      <div class="page-content">
        <UserView 
          :name="person.data.name" 
          :isPersonal="person.data.current_organisation.is_personal" />
      </div>
    </div>
    <template v-else >
      <div class="page-content--error">Nothing here yet</div>
    </template>
  </main>
</template>

<style scoped>
  .notification--wrapper {
    margin-bottom: 2rem; 
  }  
  .page-content--error {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
</style>
