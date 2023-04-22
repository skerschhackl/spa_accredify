<script setup lang="ts">
  import type CareerGoal from '@/types/CareerGoal';
  const colorDonutForeground = '#E8E9EB';
  const colorDonutSection = '#493DF5';

  defineProps<{
    latestCareerGoal: CareerGoal
  }>()

  const getProgress = (goal: { progress: number; }) => {
    return goal?.progress || 0
  }

</script>

<template>
  <div class="career-goal">
    <h4>Career Goal</h4>
    <div class="career-goal--wrapper">
      <div class="career-goal--header">Your Progress</div>
      <div class="career-goal--donut">
        <vc-donut 
          :foreground="colorDonutForeground"
          :sections="[{ value:  getProgress(latestCareerGoal), color: colorDonutSection }]"
          :size="180"
          :thickness="14"
          ><div class="career-goal--donut-text">{{ getProgress(latestCareerGoal) }}%</div></vc-donut>
      </div>
      <div>I want to become a</div>
      <h4>{{ latestCareerGoal?.name }}</h4>

      <div class="career-goal--link">View Insights</div>
    </div>
  </div>
</template>

<style scoped>
  h4 {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-bold);
    line-height: 32px;
  }
  .career-goal--wrapper {
    border: 1px solid var(--color-border);
    margin-top: 16px;
    padding: 20px;
    border-radius: 6px;
    font-size: var(--font-size-small);
    text-align: center;
  }
  .career-goal--header {
    font-weight: var(--font-weight-bold);
    color: var(--color-text-light);
  }
  .career-goal--donut {
    margin: 24px 20px;
  }
  .career-goal--donut-text {
    font-size: var(--font-size-h2);
    color: var(--color-donut-text);
    font-weight: var(--font-weight-bold);
  }
  .career-goal--link {
    margin-top: 24px;
    margin-bottom: 13px;
    color: var(--color-background-user-initials);
    font-weight: var(--font-weight-bold);
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