<template>
  <aside class="sidebar bg-dark text-white d-flex flex-column" style="width: 260px; min-height: 100vh;">
    <div class="p-4">
      <h5 class="text-white-50 text-uppercase small mb-3">Menú Principal</h5>
      <ul class="nav nav-pills flex-column gap-2">
        <li v-for="item in menuItems" :key="item.path" class="nav-item">
          <router-link 
            class="nav-link d-flex align-items-center" 
            :to="item.path"
            active-class="active"
          >
            <span class="me-2">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Información adicional en el footer del sidebar -->
    <div class="mt-auto p-4 border-top border-secondary">
      <div class="small text-white-50">
        <p class="mb-1">Conectado como:</p>
        <p class="fw-bold text-white mb-0">{{ userName }}</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Props para personalizar el menú
defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { label: 'Productos', path: '/dashboard/productos', icon: '�' },
      { label: 'Clientes', path: '/dashboard/clientes', icon: '👥' }
    ]
  }
})

const userName = ref('Usuario')

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  if (user.nombre) {
    userName.value = user.nombre
  }
})
</script>

<style scoped>
.sidebar {
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #cbd5e1;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: translateX(5px);
}

.nav-link.active {
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.4);
}

h5 {
  letter-spacing: 1px;
  font-weight: 600;
}
</style>
