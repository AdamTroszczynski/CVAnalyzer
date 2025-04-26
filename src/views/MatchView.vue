<template>
  <section class="p-[20px] bg-grey flex flex-col items-center font-mulish">
    <template v-if="checkValidQuery">
      aa
    </template>
    <template v-else>
      <NoFileBanner @click-action="startAnalysis" :type="'match'" :title="'Rozpocznij dopasowanie CV do oferty pracy'"
        :description="'Prześlij plik CV oraz oferty pracy, aby rozpocząć analizę'" :input-name="'matchPageCv'"
        :file-types="'.pdf, .docx'" :input-description="'CV'" :is-double-input="true"
        :second-input-description="'Oferta pracy'" :second-input-name="'matchPageOffer'"
        :second-input-file-types="'.pdf, .txt'" />
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
  matchPageCv: z.instanceof(File),
  matchPageOffer: z.instanceof(File)
}))

const { values, meta, validate } = useForm({ validationSchema });

const startAnalysis = async (): Promise<void> => {
  await validate();
  console.log(values)
}


</script>
