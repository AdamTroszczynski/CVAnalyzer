<template>
  <div
    class="border relative w-full py-[40px] rounded-[12px] border-dashed flex justify-center items-center md:py-[50px]"
    :class="errorMessage ? 'border-red' : 'border-softDark/40'">
    <input @change="changeInput" type="file" class="absolute opacity-0 w-full h-full cursor-pointer" :name="name"
      :accept="fileTypes" />
    <div class="flex flex-col justify-center items-center">
      <CheckIcon v-if="fileSelected" :is-blue="true" class="w-[40px] h-[40px] md:w-[45px] md:h-[45px]" />
      <UploadIcon v-else :is-blue="true" class="w-[40px] h-[40px] md:w-[45px] md:h-[45px]" />
      <h4 class="text-dark text-[0.9rem] md:text-[1rem]">
        {{ fileSelected ? 'Click, to change file' : 'Click, to choose file' }}
      </h4>
      <h5 class="text-softDark text-[0.7rem] md:text-[0.8rem]">{{ description }}</h5>
      <span v-if="fileSelected"
        class="absolute text-[0.8rem] font-medium mt-[30px] bottom-[10px] text-black/80 md:text-[0.9rem]">
        {{ value?.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import UploadIcon from '@/components/icons/UploadIcon.vue';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import { toTypedSchema } from '@vee-validate/zod';
import z from 'zod';


const props = defineProps({
  fileTypes: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  fileSelected: {
    type: Boolean,
    default: false
  }
})

const { value, errorMessage } = useField(() => props.name, toTypedSchema(z.instanceof(File)));

const emits = defineEmits<(e: 'changeAction') => void>()

const changeInput = async (input: Event) => {
  const target = input.target as HTMLInputElement;
  if (target.files == null || target.files.length == 0) return;
  const file = target.files[0];
  value.value = file;
  emits('changeAction');
}


</script>
