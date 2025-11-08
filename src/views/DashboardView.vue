<template>
<<<<<<< HEAD
  <div class="dashboard-layout d-flex">
    <!-- Sidebar reutilizable -->
    <SidebarComponent :menuItems="menuItems" />

    <!-- Área principal con Navbar y contenido -->
=======
  <div class="container py-4">
    <h1>Tienda - Panel de Control</h1>
    <nav class="my-3">
      <a class="btn btn-link" :href="'/dashboard/productos'">Productos</a>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// Placeholder Dashboard
</script>

<style scoped>
</style>
<template>
  <div class="d-flex">
    <SidebarComponent :items="menuItems" />
>>>>>>> 83219ff927eb918c061175c01cf2571805142c7c
    <div class="flex-grow-1 d-flex flex-column min-vh-100">
      <!-- Navbar reutilizable -->
      <NavbarComponent business-name="Trópico Rebelde">
        <template #actions>
          <button class="btn btn-outline-light btn-sm">
            🔔 Notificaciones
          </button>
        </template>
      </NavbarComponent>

      <!-- Contenido principal (router-view para vistas hijas) -->
      <main class="flex-grow-1 p-4 bg-light">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Footer reutilizable -->
      <FooterComponent company-name="Trópico Rebelde" />
    </div>
  </div>
</template>

<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

// Configuración del menú lateral
const menuItems = [
  { label: 'Productos', path: '/dashboard/productos', icon: '👗' },
  { label: 'Clientes', path: '/dashboard/clientes', icon: '👥' }
]
</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  background-color: var(--light-bg);
}

main {
  background-color: #f1f5f9;
  border-radius: 0;
}

/* Transiciones para cambio de rutas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
