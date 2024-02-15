import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import RegisterView from '../views/RegisterView.vue'
import ListView from '../views/ListView.vue'
import AdminView from '../views/AdminView.vue'
import { useAuthStore } from '@/stores/authStore'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/user/:userId/events',
    name: 'list',
    component: () => import('../views/ListView.vue'),
    meta: { requiresAuth: true },
    props: true // Habilita pasar props a través de la ruta
  },
  
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }   }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    next({ name: 'login' })
  } else if (to.meta.requiresAdmin && !store.user.isAdmin) { 
  } else {
    next()   }
})

export default router
