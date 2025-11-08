<template>
  <footer class="footer bg-dark text-white py-4 mt-auto">
    <div class="container-fluid px-4">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">
            © {{ currentYear }} <strong>{{ companyName }}</strong> - Todos los derechos reservados
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <p class="mb-0 text-white-50 small">
            Desarrollado con ❤️ usando Vue 3 y Bootstrap 5.3
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// Props
defineProps({
  companyName: {
    type: String,
    default: 'Trópico Rebelde'
  }
})

// Año actual dinámico
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  border-top: 3px solid var(--primary-color);
  font-size: 0.9rem;
}

.footer strong {
  color: var(--accent-color);
}
</style>
