// Router completo con guards de navegación
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import ClientsView from '../views/ClientsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresGuest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    redirect: '/dashboard/productos',
    children: [
      {
        path: 'productos',
        name: 'Productos',
        component: ProductView,
        meta: { requiresAuth: true }
      },
      {
        path: 'clientes',
        name: 'Clientes',
        component: ClientsView,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de navegación global
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user')
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirigir al login si intenta acceder a rutas protegidas
    next('/login')
  } else if (to.meta.requiresGuest && isAuthenticated) {
    // Si ya está autenticado y trata de ir al login, redirigir al dashboard
    next('/dashboard')
  } else {
    next()
  }
})

export default router
