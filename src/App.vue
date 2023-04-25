<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import UtilityNavBar from '@/components/UtilityNavBar.vue';
  import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue';
  import Notification from '@/components/widgets/Notification.vue';

  import { ref, watchEffect } from 'vue';
  import User from '@/types/User';
  import { getJSON } from '@/utils/requestUtils.js';
  import { urlUserData } from '@/components/constants/urlConstants';
  import { urlUserDataManaged } from '@/components/constants/urlConstants';
  import UserView from '@/views/user/UserView.vue';


  const person = ref(new User);
  const hasData = ref(false);
  const hasError = ref(false);
  const isLoading = ref(false);
  const url = ref(urlUserData);

  watchEffect(async (newUser) => {
    if (newUser.length > 0) {
      isLoading.value = true;
      try {
        const response = await getJSON(url.value);
        person.value.populateFromJSON(response.data);
        hasData.value = !!person.value.data || false;
     } catch (e) {
      hasError.value = true;
      }
    }
    isLoading.value = false;
  });

  const changeUser = () => {
    url.value = (url.value === urlUserData) ? urlUserDataManaged : urlUserData;
  }

  // make refs visible for tests
  defineExpose({ person, hasData, hasError, isLoading });

</script>

<template>
  <NavBar />
  <main class="page-wrapper">
    <!-- this button was added to make it easy to switch between managed and personal user -->
    <!-- ideally it should be its own component -->
    <!-- it will be removed, once the api is served via the backend -->
    <div class="switch-user--wrapper">
      <button @click="changeUser" class="switch-user--button">
        Show
        <template v-if="person?.data?.current_organisation?.is_personal"> Managed </template>
        <template v-else> Personal </template>
        User
      </button>
    </div>
    <!-- end switch button -->
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <div v-if="hasError" class="page-content--notification-wrapper">
      <Notification :msg="'We are sorry - there was an error loading your user data.'"/>
    </div>
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
  .page-wrapper {
    background-color: var(--color-background-page);
    min-height: 100vh;
    min-width: calc(100% - var(--width-nav-bar));
    border-top-left-radius: var(--border-radius-large);
  }
  .page-content {
    margin: 48px 144px; 
  }
  .notification--wrapper {
    margin-bottom: 2rem; 
  }  
  .page-content--notification-wrapper {
    margin: 20px;
  }
  .page-content--error {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .switch-user--wrapper {
    margin: 16px;
    position: absolute;
    z-index: 100;
  }
  .switch-user--button {
    background: var(--color-background-page);
    border: 1px solid var(--color-button-border);
    padding: 7px;
    border-radius: var(--border-radius-small);
    color: var(--color-button-text);
  }
  .switch-user--button:hover {
    color: var(--color-button-text-hover);
    border-color: var(--color-button-text-hover);
    cursor: pointer;
  }
</style>
