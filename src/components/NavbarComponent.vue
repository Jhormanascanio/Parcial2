<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div class="container-fluid px-4">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <span class="fs-4 fw-bold">🏪 {{ businessName }}</span>
      </a>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle d-flex align-items-center" 
              href="#" 
              role="button" 
              data-bs-toggle="dropdown"
            >
              <span class="me-2">👤</span>
              <span>{{ userName }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
              <li><a class="dropdown-item" href="#">Configuración</a></li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item text-danger" href="#" @click.prevent="handleLogout">
                  🚪 Cerrar Sesión
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Slot para acciones personalizadas -->
        <div class="ms-3">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Props
defineProps({
  businessName: {
    type: String,
    default: 'Trópico Rebelde'
  }
})

const router = useRouter()
const userName = ref('Usuario')

onMounted(() => {
  // Obtener nombre del usuario desde localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  if (user.nombre) {
    userName.value = user.nombre
  }
})

function handleLogout() {
  if (confirm('¿Está seguro que desea cerrar sesión?')) {
    localStorage.removeItem('user')
    router.push('/login')
  }
}
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.nav-link {
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  transform: translateY(-2px);
}

.dropdown-item:active {
  background-color: var(--primary-color);
}
</style>
