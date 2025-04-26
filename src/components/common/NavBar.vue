<template>
  <nav
    class="w-full px-[10px] md:px-[20px]  pt-[15px] flex items-center gap-[5vw] bg-white border-b border-softDark/20 justify-start lg:px-[60px] lg:pt-[15px] max-h-[48px] lg:h-[48px] lg:max-h-[48px]">
    <LinkButton :icon="FileIcon" :to="{ name: 'cvAnalysis' }" :is-selected="route.name === 'cvAnalysis'">
      <span class="lg:hidden">CV</span>
      <span class="hidden lg:block">Analiza CV</span>
    </LinkButton>
    <LinkButton :icon="JobsIcon" :to="{ name: 'offerAnalysis' }" :is-selected="route.name === 'offerAnalysis'">
      <span class="lg:hidden">Oferta</span>
      <span class="hidden lg:block">Analiza oferty pracy</span>
    </LinkButton>
    <LinkButton :icon="MatchIcon" :to="{ name: 'matchAnalysis' }" :is-selected="route.name === 'matchAnalysis'">
      <span class="lg:hidden">Dopasowanie</span>
      <span class="hidden lg:block">Dopasowanie CV - oferta pracy</span>
    </LinkButton>
    <LinkButton :icon="ExportIcon" :to="{ name: 'export' }" :is-selected="route.name === 'export'">
      <span class="lg:hidden">Eksport</span>
      <span class="hidden lg:block">Wygenerowanie dokumenty / Eksport</span>
    </LinkButton>

  </nav>
</template>

<script setup lang="ts">
import LinkButton from '@/components/buttons/LinkButton.vue';
import FileIcon from '@/components/icons/FileIcon.vue';
import JobsIcon from '@/components/icons/JobsIcon.vue';
import MatchIcon from '@/components/icons/MatchIcon.vue';
import ExportIcon from '@/components/icons/ExportIcon.vue'
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
