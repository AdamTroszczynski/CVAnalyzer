<template>
  <section class="p-[20px] bg-grey flex flex-col items-center font-mulish gap-[30px]">
    <template v-if="checkValidQuery">
      <BaseCard :title="'Ocena AI'" class="md:max-w-[400px]">
        <div class="flex w-full justify-center items-center flex-col gap-[20px]">
          <div class="flex flex-col justify-center items-center gap-[5px]">
            <div
              class="border-[7px] border-blue/90 rounded-full p-[15px] w-[100px] h-[100px] flex justify-center items-center">
              <span class="text-blue text-[2rem] font-bold">85</span>
            </div>
          </div>
          <div
            class="flex flex-col gap-[10px] w-full text-softDark font-medium text-[0.9rem] md:text-[1rem] md:font-semibold">
            <div class="flex justify-between items-center">
              <span>Kompletność</span>
              <span class="text-green">90%</span>
            </div>
            <div class="flex justify-between items-center">
              <span>Czytelność</span>
              <span class="text-green">85%</span>
            </div>
            <div class="flex justify-between items-center">
              <span>Profesionalizm</span>
              <span class="text-orange">75%</span>
            </div>
          </div>
        </div>
      </BaseCard>

      <BaseCard :title="'Sugestie AI'" class="md:max-w-[400px]">
        <TipCard>Dodaj więcej szczegółów o osiągnięciach w TechCorp Solutions</TipCard>
        <TipCard>Uwzględnij konkretne technologie w sekcji umiejętności</TipCard>
        <TipCard>Rozszerz opis projektów w Digital Solutions</TipCard>
      </BaseCard>
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
import { useForm } from 'vee-validate';
import z from 'zod'
import { toTypedSchema } from '@vee-validate/zod';
import NoFileBanner from '@/widgets/NoFileBanner.vue';
import BaseCard from '@/components/cards/BaseCard.vue';
import TipCard from '@/components/cards/TipCard.vue';

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
