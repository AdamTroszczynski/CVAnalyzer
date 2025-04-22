<template>
  <section class="p-[20px] bg-grey flex flex-col items-center font-mulish">
    <template v-if="checkValidQuery">
      aa
    </template>
    <template v-else>
      <NoFileBanner @click-action="startAnalysis" :title="'Rozpocznij analizę CV'"
        :description="'Prześlij plik CV w formacie PDF lub DOCX, aby rozpocząć analizę'" :input-name="'cvPageCv'"
        :file-types="'.pdf, .docx'" :input-description="'PDF, DOCX'" />
    </template>
  </section>

</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NoFileBanner from '@/widgets/NoFileBanner.vue';
import { useForm } from 'vee-validate';
import z from 'zod'
import { toTypedSchema } from '@vee-validate/zod';

const route = useRoute();

const checkValidQuery = computed<boolean>(() => {
  return route.query.hasOwnProperty('id')
})

const validationSchema = toTypedSchema(z.object({
  cvPageCv: z.instanceof(File)
}))

const { values, meta, validate } = useForm({ validationSchema });

const startAnalysis = async (): Promise<void> => {
  await validate();
  console.log(values)
}


</script>
