import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import('../views/ImprintView.vue')
  },
  {
    path: '/privacypolicy',
    name: 'privacyPolicy',
    component: () => import('../views/PrivacyPolicyView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
