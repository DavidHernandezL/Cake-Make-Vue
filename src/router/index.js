import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutView.vue'
import Dashboard from '../views/dashboardView.vue'
import Cakes from '../views/CakesView.vue'
import MakeCakeView from '@/views/makeCakeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/cakes',
    name: 'cakes',
    component: Cakes
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/create',
    name: 'create',
    component: MakeCakeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
