import { createRouter, createWebHistory } from 'vue-router'
import UserLoginView from '../views/UserLoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserLoginView
    },
    {
      path: '/personal',
      name: 'personal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserPersonalView.vue')
    },
    {
      path: '/managed',
      name: 'managed',
      component: () => import('../views/UserManagedView.vue')
    }
  ]
})

export default router
