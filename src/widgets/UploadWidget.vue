<template>
  <BaseCard v-if="title || icon" :title="title" :icon="icon">
    <FileInput :name="inputName" :file-types="inputFileTypes" :description="description" :file-selected="fileSelected"
      @change-action="() => { fileSelected = true }" />
  </BaseCard>
  <FileInput v-else :name="inputName" :file-types="inputFileTypes" :description="description"
    :file-selected="fileSelected" @change-action="() => { fileSelected = true }" />
</template>

<script setup lang="ts">
import BaseCard from '@/components/cards/BaseCard.vue';
import FileInput from '@/components/inputs/FileInput.vue';
import { ref, type Ref } from 'vue';

defineProps({
  title: {
    type: String,
    required: false,
  },
  icon: {
    type: Object,
    required: false
  },
  inputName: {
    type: String,
    required: true,
  },
  inputFileTypes: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false
  }
})

const fileSelected: Ref<boolean> = ref(false)

</script>
