import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import QuiSommesNous from "@/views/QuiSommesNous.vue";
import Contact from "@/views/Contact.vue";
import SongsList from "@/views/SongsList.vue";
import SongDetails from "@/views/SongDetails.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/qui-sommes-nous',
    name: 'QuiSommesNous',
    component: QuiSommesNous
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/nos-chansons',
    name: 'NosChansons',
    component: SongsList
  },
  {
    path: '/chanson/:id',
    name: 'Chanson',
    component: SongDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
