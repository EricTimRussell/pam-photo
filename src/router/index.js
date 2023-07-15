import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleriesView from '../views/GalleriesView.vue'
import AboutView from '../views/AboutView.vue'
import SignInView from '../views/SignInView.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/galleries',
      name: 'Galleries',
      component: GalleriesView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/sign-in',
      name: 'Sign-In',
      component: SignInView
    },
    {
      path: '/admin/:id',
      name: 'Admin',
      component: AdminView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
