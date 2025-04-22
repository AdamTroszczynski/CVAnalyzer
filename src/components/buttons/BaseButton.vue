<template>
  <button @click="emits('clickAction')"
    class="w-full bg-blue text-white flex cursor-pointer justify-center items-center rounded-[8px] py-[10px] gap-[8px] font-poppins font-semibold text-[0.9rem] active:scale-95 duration-300 md:text-[1.1rem]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

const emits = defineEmits<(e: 'clickAction') => void>()
</script>
