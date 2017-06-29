<style scoped>
.loading-wrapper{
  text-align: center;
}
</style>

<template>
  <div v-if="isLoading" class="loading-wrapper">
    <svg class="progress-circular progress-circular--indeterminate">
      <circle class="progress-circular__background"/>
      <circle class="progress-circular__primary progress-circular--indeterminate__primary"/>
      <circle class="progress-circular__secondary progress-circular--indeterminate__secondary"/>
    </svg>
  </div>
  <div v-else>
  </div>
</template>

<script>
export default {
  name: 'loading-indicator',
  props: {
    isLoading: Boolean,
  },
};
</script>
