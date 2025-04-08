<template>
  <header
    class="bg-white p-[10px] flex justify-between items-center border-b border-softDark/20 md:p-[20px] lg:px-[60px]">
    <div class="flex gap-[5px] items-center lg:gap-[10px]">
      <LogoIcon :is-blue="true" />
      <span class="font-mulish font-semibold text-blue text-[1.125rem] lg:text-[20px]">CV Analyzer</span>
    </div>
    <div class="flex gap-[10px] items-center">
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue';
</script>
