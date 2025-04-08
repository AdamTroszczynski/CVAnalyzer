import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CvAnalysisView from '@/views/CvAnalysisView.vue'
import OfferAnalysisView from '@/views/OfferAnalysisView.vue'
import MatchView from '@/views/MatchView.vue'
import ExportView from '@/views/ExportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/analysis',
      name: 'analysis',
      children: [{
        path: 'cv',
        name: 'cvAnalysis',
        component: CvAnalysisView
      }, {
        path: 'offer',
        name: 'offerAnalysis',
        component: OfferAnalysisView
      }, {
        path: 'match',
        name: 'matchAnalysis',
        component: MatchView
      }]
    },
    {
      path: '/export',
      name: 'export',
      component: ExportView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/'
    }
  ],
})

export default router
