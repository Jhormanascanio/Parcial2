<template>
  <div class="d-flex">
    <SidebarComponent :items="menuItems" />
    <div class="flex-grow-1 d-flex flex-column min-vh-100">
      <NavbarComponent>
        <template #actions>
          <!-- espacio para botones de acción en el navbar -->
          <button class="btn btn-outline-secondary btn-sm">Perfil</button>
        </template>
      </NavbarComponent>

      <main class="p-4">
        <!-- Aquí se renderizan las vistas hijas del dashboard -->
        <router-view />
      </main>

      <footer class="mt-auto text-center py-3 border-top bg-white">
        © {{ new Date().getFullYear() }} Mi Negocio - Todos los derechos reservados
      </footer>
    </div>
  </div>
</template>

<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'

const menuItems = [
  { label: 'Productos', path: '/dashboard/productos' },
  { label: 'Clientes', path: '/dashboard/clientes' }
]
</script>

<style scoped>
main {
  background-color: #f8f9fa;
  min-height: 60vh;
  border-radius: 6px;
}
</style>
