<template>
  <BaseCard class="md:max-w-[850px]">
    <div class="flex flex-col items-center gap-[25px] px-[5px] py-[15px] md:gap-[40px]">
      <div class="flex p-[15px] justify-center w-fit items-center rounded-full bg-lightBlue">
        <FileIcon :is-blue="true" class="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </div>

      <div class="flex flex-col gap-[10px]">
        <h2 class="text-center font-bold text-[1.2rem] md:text-[1.4rem]">{{ title }}</h2>
        <h3 v-if="description" class="text-center font-medium text-[0.9rem] md:text-[1rem]">{{ description }}</h3>
      </div>

      <div class="flex flex-col gap-[15px] w-full md:gap-[30px]">
        <div class="flex gap-[10px] justify-center items-center">
          <UploadWidget :input-name="inputName" :input-file-types="fileTypes" :description="inputDescription" />
          <UploadWidget v-if="isDoubleInput" :input-name="secondInputName" :input-file-types="secondInputFileTypes"
            :description="secondInputDescription" />
        </div>
        <BaseButton @click-action="emits('clickAction')">
          <MagicIcon /> Start analysis
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import FileIcon from '@/components/icons/FileIcon.vue';
import UploadWidget from './UploadWidget.vue';
import BaseCard from '@/components/cards/BaseCard.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import MagicIcon from '@/components/icons/MagicIcon.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  inputName: {
    type: String,
    required: true
  },
  fileTypes: {
    type: String,
    required: true
  },
  inputDescription: {
    type: String,
    required: false
  },
  isDoubleInput: {
    type: Boolean,
    default: false
  },
  secondInputName: {
    type: String,
    required: false,
    default: ''
  },
  secondInputFileTypes: {
    type: String,
    required: false,
    default: ''
  },
  secondInputDescription: {
    type: String,
    required: false
  }
})

const emits = defineEmits<(e: 'clickAction') => void>();

</script>
