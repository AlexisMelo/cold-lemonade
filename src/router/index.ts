import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import WhoAreWe from "@/views/WhoAreWe.vue";
import Contact from "@/views/Contact.vue";
import NosChansons from "@/views/NosChansons.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/qui-sommes-nous',
    name: 'QuiSommesNous',
    component: WhoAreWe
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/nos-chanson',
    name: 'NosChansons',
    component: NosChansons
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
