<script setup lang="ts">
  import IconFile from './icons/IconFile.vue';
  import IconKebab from './icons/IconKebab.vue';
</script>

<template>
  <div class="document">
    <div class="document--header">
      <h4>Recent Documents</h4>
      <div class="document--view-all">View All Documents</div>
    </div>
    
    <div class="document-list">
      <div class="document-list--row document-list--header">
        <div class="document-list--header document-list--header--document-name">Document Name</div>
        <div class="document-list--header document-list--header--date">Received On</div>
      </div>
      <div class="document-list--row">
        <IconFile class="document-list--file-icon" />
        <div class="document-list--document-name">Degree in Info Sys</div>
        <div class="document-list--date">29 Jun 2021</div>
        <IconKebab class="document-list--kebab-icon" />
      </div>
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
</style>