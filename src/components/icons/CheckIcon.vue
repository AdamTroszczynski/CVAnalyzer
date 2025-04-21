<template>
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 7L7 13L17 1" :class="isBlue ? 'stroke-blue' : isSoftDark ? 'stroke-softDark' : 'stroke-white'"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

</template>

<script setup lang="ts">
defineProps({
  isBlue: {
    type: Boolean,
    default: false
  },
  isSoftDark: {
    type: Boolean,
    default: false
  }
})
</script>
