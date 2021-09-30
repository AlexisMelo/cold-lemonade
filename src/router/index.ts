import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
