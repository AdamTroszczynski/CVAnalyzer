import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  const savedCvId: Ref<string | null> = ref(null);
  const savedOfferId: Ref<string | null> = ref(null);
  const savedMatchId: Ref<string | null> = ref(null);


  const testObjCv = ref({
    cv: {
      data: {
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'jan.kowalski@email.com',
        phone: '+48 123 456 789',
        link: 'linkedin.com/in/jankowalski'
      },
      workExperience: [
        {
          title: 'Senior Software Developer',
          company: 'TechCorp Solutions',
          startDate: '2022',
          endDate: '',
          tasks: ['Prowadzenie zespołu', 'Implementacja mikrousług']
        },
        {
          title: 'Software Developer',
          company: 'Digital solutions',
          startDate: '2019',
          endDate: '2022',
          tasks: ['Prowadzenie zespołu', 'Implementacja mikrousług']
        },
      ],
      educations: [
        { degree: '', school: '', startDate: '', endDate: '' }
      ],
      skills: [],
      languages: [
        {
          lang: 'en',
          level: 'b2'
        }
      ],
    },
    ratings: {
      total: 85,
      complexity: 90,
      clearly: 85,
      professionalism: 75
    },
    aiSuggestions: ['', '']

  })

  return { testObjCv, savedCvId, savedOfferId, savedMatchId }
})
