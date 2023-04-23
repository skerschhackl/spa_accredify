<template>
  <div class="loading--wrapper">
    <div class="loading--spinner"></div>
  </div>
</template>

<style scoped>
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); } 
  }
  .loading--wrapper {
    display: flex;
    margin-top: 5rem;
    align-items: center;
    justify-content: center;
  }
  .loading--spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: var(--color-loading-spinner);
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
</style>