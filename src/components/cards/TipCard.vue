<template>
  <div class="flex gap-[10px] text-softDark font-semibold text-[0.9rem] md:text-[1rem]">
    <TipIcon class="min-w-[20px] min-h-[20px] mt-[5px]" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import TipIcon from '@/components/icons/TipIcon.vue';


</script>
