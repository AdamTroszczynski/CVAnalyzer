<template>
  <div
    class="flex flex-col bg-white border border-softDark/20 p-[15px] rounded-[8px] shadow-xl gap-[20px] w-full md:p-[25px]">
    <div v-if="title || icon" class="flex justify-between items-center">
      <h3 v-if="title" class="font-bold md:text-[1.2rem]">{{ title }}</h3>
      <component v-if="icon" :is="icon" :is-blue="true" class="md:w-[20px] md:h-[20px]" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
  },
  icon: {
    type: Object,
    required: false
  },
})
</script>
