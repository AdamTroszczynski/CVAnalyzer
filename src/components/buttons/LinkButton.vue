<template>
  <RouterLink :to="to" class="flex gap-[10px] text-[12px] items-center px-[5px] pb-[10px] min-h-[30px]"
    :class="isSelected ? 'text-blue font-medium border-b-2 border-blue' : 'text-softDark'">
    <component v-if="icon" :is="icon" :is-blue="isSelected" :is-soft-dark="!isSelected" />
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: [String, Object],
    required: true,
    validator: (val) => {
      return typeof val == 'object' && val !== null ? val.hasOwnProperty('name') : true;
    }
  },
  icon: {
    type: [Object, Function],
    required: false
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})
</script>
