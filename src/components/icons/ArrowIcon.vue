<template>
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-90">
    <path :class="isBlue ? 'fill-blue' : isSoftDark ? 'fill-softDark' : 'fill-white'"
      d="M1.00057 14.9732H19.0006C19.1828 14.9727 19.3614 14.9224 19.5173 14.8279C19.6731 14.7333 19.8001 14.5981 19.8848 14.4367C19.9694 14.2753 20.0085 14.0939 19.9977 13.912C19.9869 13.73 19.9267 13.5545 19.8236 13.4042L10.8236 0.40425C10.4506 -0.13475 9.55257 -0.13475 9.17857 0.40425L0.178574 13.4042C0.0743986 13.5542 0.0133079 13.7298 0.00193892 13.912C-0.00943004 14.0943 0.0293576 14.2761 0.114088 14.4379C0.198818 14.5996 0.32625 14.735 0.482538 14.8294C0.638826 14.9238 0.817994 14.9735 1.00057 14.9732Z" />
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
