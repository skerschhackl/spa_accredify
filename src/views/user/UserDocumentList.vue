<script setup lang="ts">
  import { watchEffect, ref } from 'vue';
  import Document from '@/types/Document';
  import { urlDocumentData } from '@/components/constants/urlConstants';
  import { getJSON } from '@/utils/requestUtils';
  import { formatDate } from '@/utils/dateUtils';
  import IconFile from '@/components/icons/IconFile.vue';
  import IconKebab from '@/components/icons/IconKebab.vue';
  import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue';
  import Notification from '@/components/widgets/Notification.vue';

  const documents = ref(new Document);
  const hasData = ref(false);
  const error = ref('');
  const isLoading = ref(false);

  const loadData = async () => {
    isLoading.value = true;
      try {
        const response = await getJSON(urlDocumentData);
        documents.value.populateFromJSON(response);
        hasData.value = !!documents.value.data || false;
      } catch (e) {
        error.value = 'We are sorry - there was an error loading your document data.'
      }
  }

  watchEffect(async (newDoc) => {
    if (newDoc.length > 0) {
      await loadData();
    }
    isLoading.value = false;
  });

  // make refs visible for tests
  defineExpose({ documents, hasData, error, isLoading });
  
</script>

<template>
  <div class="document">
    <div class="document--header">
      <h4>Recent Documents</h4>
      <div class="document--view-all">View All Documents</div>
    </div>

    <div v-if="isLoading">
      <LoadingSpinner />
    </div>

    <div v-if="error !== ''" class="document-list">
      <Notification :msg="error"/>
    </div>
    
    <div v-if="hasData" class="document-list">
      <div class="document-list--row document-list--header">
        <div class="document-list--header document-list--header--document-name">Document Name</div>
        <div class="document-list--header document-list--header--date">Received On</div>
      </div>
      <div v-for="d in documents.data.data" :key="d['id']" class="document-list--row">
        <IconFile class="document-list--file-icon" />
        <div class="document-list--document-name">{{ d['document_name'] }}</div>
        <div class="document-list--date">{{ formatDate(d['received_on']) }}</div>
        <IconKebab class="document-list--kebab-icon" />
      </div>
    </div>

    <div v-if="!hasData" class="document-list">
      <div class="document-list--error">Nothing here yet</div>
    </div>
  </div>
</template>

<style scoped>
  .document {
    width: 100%;
  }
  .document--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .document--view-all {
    margin-left: auto;
    color: var(--color-background-user-initials);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
  }
  h4 {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-bold);
    line-height: 32px;
  }
  .document-list {
    border: 1px solid var(--color-border);
    margin-top: 16px;
    padding: 32px 24px;
    border-radius: 6px;
    font-size: var(--font-size-small);
  }
  .document-list--row {
    display: flex;
    border-bottom: 1px solid var(--color-border);
    padding: 20px;
    align-items: center;
  }
  
  .document-list--header {
    font-weight: var(--font-weight-bold);
    color: var(--color-text-light);
  }

  .document-list--header--date {
    margin-left: auto;
    margin-right: 56px;
  }

  .document-list--document-name {
    font-weight: var(--font-weight-bold);
  }

  .document-list--date {
    margin-left: auto;
  }
  .document-list--file-icon {
    margin-right: 20px;
    color: var(--color-background-user-initials);
  }
  .document-list--kebab-icon {
    color: var(--color-text-light);
    margin-left: 32px;
    min-width: 24px;
  }
  .document-list--error {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
</style>