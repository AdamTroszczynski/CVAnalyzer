<template>
  <section class="p-[15px] flex flex-col font-mulish md:p-[20px] lg:px-[60px] bg-grey gap-[35px] md:gap-[55px]">
    <div class="flex flex-col gap-[5px]">
      <h1 class="text-dark text-[1.6rem] font-bold md:text-[1.8rem]">Witaj, User!</h1>
      <h2 class="text-softDark font-medium text-[0.9rem] md:text-[1rem] w-max">Rozpocznij analizę swojego CV i oferty
        pracy.
      </h2>
    </div>

    <div class="flex flex-col gap-[15px] md:flex-row md:gap-[30px]">
      <UploadWidget :title="'Upload CV'" :icon="FileIcon" :input-name="'homePageCv'" :input-file-types="'.pdf, .docx'"
        :description="'PDF, DOCX'" />
      <UploadWidget :title="'Upload Oferty'" :icon="JobsIcon" :input-name="'homePageOffer'"
        :input-file-types="'.pdf, .txt'" :description="'PDF, TXT'" />
    </div>

    <div class="flex flex-col gap-[20px] md:flex-row">
      <BaseButton @click-action="cvAnalysisClick">
        <FileIcon class="w-[17px] h-[17px]" />Analiza CV
      </BaseButton>
      <BaseButton @click-action="offerAnalysisClick">
        <JobsIcon class="w-[17px] h-[17px]" />Analiza oferty pracy
      </BaseButton>
      <BaseButton @click-action="matchAnalysisClick">
        <MatchIcon class="w-[17px] h-[17px]" />Dopasowanie CV do oferty
      </BaseButton>
    </div>

    <BaseCard :title="'Ostatnie Analizy'">
      <RecordCard :id="'1'" :title="'Senior Developer'" :date="'12.01.2025'" :result="67" :type="'cv'" />
      <RecordCard :id="'2'" :title="'Project Manager'" :date="'10.01.2025'" :result="75" :type="'offer'" />
      <RecordCard :id="'3'" :title="'Senior architect'" :date="'10.01.2025'" :result="75" :type="'match'" />
    </BaseCard>

  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import FileIcon from '@/components/icons/FileIcon.vue';
import JobsIcon from '@/components/icons/JobsIcon.vue';
import UploadWidget from '@/widgets/UploadWidget.vue';
import MatchIcon from '@/components/icons/MatchIcon.vue';
import { toTypedSchema } from '@vee-validate/zod';
import z from 'zod';
import { computed, ref, type Ref } from 'vue';
import { useForm, type TypedSchema } from 'vee-validate';
import BaseCard from '@/components/cards/BaseCard.vue';
import RecordCard from '@/components/cards/RecordCard.vue';

const selectedSchema: Ref<number> = ref(0)

const cvValidationSchema = toTypedSchema(
  z.object({
    homePageCv: z.instanceof(File)
  })
);

const offerValidationSchema = toTypedSchema(
  z.object({
    homePageOffer: z.instanceof(File)
  })
);

const matchValidationSchema = toTypedSchema(
  z.object({
    homePageCv: z.instanceof(File),
    homePageOffer: z.instanceof(File)
  })
);

const schemas = [
  cvValidationSchema,
  offerValidationSchema,
  matchValidationSchema
]

const selectSchema = computed<TypedSchema>(() => {
  return schemas[selectedSchema.value];
})

const { values, meta, validate } = useForm({ validationSchema: selectSchema })

const cvAnalysisClick = async (): Promise<void> => {
  selectedSchema.value = 0;
  await validate();
  console.log(meta.value.valid)
  console.log(values)
}

const offerAnalysisClick = async (): Promise<void> => {
  selectedSchema.value = 1;
  await validate();
  console.log(meta.value.valid)
  console.log(values)
}

const matchAnalysisClick = async (): Promise<void> => {
  selectedSchema.value = 2;
  await validate();
  console.log(meta.value.valid)
  console.log(values)
}

</script>
