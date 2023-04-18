import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CollectionsView from '../views/CollectionsView.vue'
import AboutView from '../views/AboutView.vue'
import SignInView from '../views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collections',
      name: 'Collections',
      component: CollectionsView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/sign-in',
      name: 'Sign-In',
      component: SignInView
    },
  ]
})

export default router
