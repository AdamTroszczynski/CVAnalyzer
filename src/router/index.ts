import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalizedGeneric, type RouteLocationNormalizedLoadedGeneric } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CvAnalysisView from '@/views/CvAnalysisView.vue'
import OfferAnalysisView from '@/views/OfferAnalysisView.vue'
import MatchView from '@/views/MatchView.vue'
import ExportView from '@/views/ExportView.vue'
import { useTestStore } from '@/stores/counter'

type SavedIdGetter = (store: ReturnType<typeof useTestStore>) => string | null | undefined

const createIdRedirectGuard = (getSavedId: SavedIdGetter) => {
  return (to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedLoadedGeneric, next: NavigationGuardNext) => {
    const testStore = useTestStore();
    const savedId = getSavedId(testStore);

    if (!to.query.id && savedId) {
      next({
        name: to.name,
        query: { id: savedId }
      });
    } else {
      next();
    }
  }
}

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
        component: CvAnalysisView,
        beforeEnter: createIdRedirectGuard(store => store.savedCvId)
      }, {
        path: 'offer',
        name: 'offerAnalysis',
        component: OfferAnalysisView,
        beforeEnter: createIdRedirectGuard(store => store.savedOfferId)
      }, {
        path: 'match',
        name: 'matchAnalysis',
        component: MatchView,
        beforeEnter: createIdRedirectGuard(store => store.savedMatchId)
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
