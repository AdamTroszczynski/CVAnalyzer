<template>
  <div @click="emit('clickAction', id)"
    class="bg-grey px-[15px] py-[20px] cursor-pointer flex justify-between items-center rounded-[12px] w-full">
    <div class="flex gap-[15px] items-center">
      <FileIcon class="w-[20px]" v-if="type === 'cv'" :is-blue="true" />
      <JobsIcon class="w-[20px]" v-else-if="type === 'offer'" :is-blue="true" />
      <MatchIcon class="w-[20px]" v-else :is-blue="true" />
      <div class="flex flex-col leading-[15px] gap-[5px] items-start justify-center">
        <h3 class="text-dark font-bold text-[0.9rem] md:text-[0.95rem]">{{ title }}</h3>
        <h4 class="text-softDark text-[0.8rem] flex gap-[5px] md:text-[0.85rem]">
          <span class="hidden md:block">Przeanalizowano: {{ date }}</span>
          <span class="md:hidden">{{ date }}</span>
        </h4>
      </div>
    </div>
    <h3 v-if="type !== 'offer'" class="text-green text-[0.85rem] flex gap-[5px] md:text-[1rem] font-semibold"
      :class="result >= 75 ? 'text-green' : result >= 50 ? 'text-orange' : 'text-red'">
      {{ `${result}% ` }}
      <span class="hidden md:block">{{ type === 'cv' ? 'ocena' : 'dopasowania' }}</span>
    </h3>
  </div>
</template>

<script setup lang="ts">
import FileIcon from '@/components/icons/FileIcon.vue';
import { type AnalysisType } from '@/types/CommonTypes';
import type { PropType } from 'vue';
import JobsIcon from '@/components/icons/JobsIcon.vue';
import MatchIcon from '@/components/icons/MatchIcon.vue';

defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  type: {
    type: String as PropType<AnalysisType>,
    default: 'cv'
  }
})

const emit = defineEmits<(e: 'clickAction', id: string) => void>();

</script>
