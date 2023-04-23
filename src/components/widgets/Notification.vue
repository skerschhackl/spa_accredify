<script setup lang="ts">

  export interface Props {
    type?: string
    msg: string
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'error' // for now only used for errors, can be extended - eg success, warning, notice
  })

</script>

<template>
  <div :class="`notification--wrapper--${type} notification--wrapper`">
    <div class="notification--text">
      {{ msg }}
    </div>
  </div>
</template>
  
<style scoped>
  .notification--wrapper {
    display: flex;
    border: 1px solid var(--color-border);
    color: var(--color-text-notification);
    border-radius: var(--border-radius-small);
    padding: 20px;
    text-align: left;
  }  
  .notification--wrapper--error {
    color: var(--color-text-notification-error);
    border-color: var(--color-border-notification-error);
  }
</style>