// Router mínimo con rutas para el Dashboard y sus vistas hijas.
import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import ClientsView from '../views/ClientsView.vue'

const routes = [
  {
    path: '/dashboard',
    component: DashboardView,
    children: [
      { path: 'productos', component: ProductView },
      { path: 'clientes', component: ClientsView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
