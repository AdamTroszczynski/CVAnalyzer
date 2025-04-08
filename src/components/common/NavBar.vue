<template>
  <nav
    class="w-full px-[15px] pt-[15px] flex items-center gap-[5vw] justify-center bg-white border-b border-softDark/20 lg:justify-start lg:px-[60px] lg:pt-[25px] max-h-[46px] lg:max-h-[56px]">
    <LinkButton :icon="FileIcon" :to="{ name: 'cvAnalysis' }" :is-selected="route.name === 'cvAnalysis'">
      <span class="lg:hidden">CV</span>
      <span class="hidden lg:block">CV Analysis</span>
    </LinkButton>
    <LinkButton :icon="JobsIcon" :to="{ name: 'offerAnalysis' }" :is-selected="route.name === 'offerAnalysis'">
      <span class="lg:hidden">Offer</span>
      <span class="hidden lg:block">Offer Analysis</span>
    </LinkButton>
    <LinkButton :icon="MatchIcon" :to="{ name: 'matchAnalysis' }" :is-selected="route.name === 'matchAnalysis'">
      <span class="lg:hidden">Match</span>
      <span class="hidden lg:block">Match CV & Job offer</span>
    </LinkButton>
    <LinkButton :icon="ExportIcon" :to="{ name: 'export' }" :is-selected="route.name === 'export'">
      <span class="lg:hidden">Export</span>
      <span class="hidden lg:block">Generated documents / Export</span>
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
