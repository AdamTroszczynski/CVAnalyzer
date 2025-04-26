<template>
  <header
    class="bg-white font-mulish max-h-[71px] p-[10px] flex justify-between items-center border-b border-softDark/20 md:p-[20px] lg:px-[60px]">
    <RouterLink :to="'/'" class="flex gap-[5px] items-center lg:gap-[10px]">
      <LogoIcon :is-blue="true" />
      <span class="font-semibold text-blue text-[1.125rem] lg:text-[1.25rem]">Idealne CV<span
          class="text-[0.9rem] text-blue/70">.pl</span></span>
    </RouterLink>
    <div class="flex gap-[30px] items-center">
      <div class="hidden md:flex gap-[10px] items-center font-semibold text-black">
        <span class="flex gap-[5px] items-center">
          400
          <CoinIcon class="w-[20px] h-[20px]" />
        </span>
        <button
          class="px-[10px] cursor-pointer py-[5px] flex items-center justify-center bg-blue text-white font-bold rounded-[12px]">
          Dodaj kredyty
        </button>
      </div>
      <button class="flex gap-[10px] cursor-pointer items-center">
        <div class="bg-[url('/images/avatar.jpg')] h-[35px] rounded-[18px] w-[35px] bg-cover"></div>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue';
import CoinIcon from '@/components/icons/CoinIcon.vue';
</script>
