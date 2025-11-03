<template>
  <aside class="bg-light border-end" style="width: 240px; min-height: 100vh;">
    <div class="p-3">
      <h5 class="mb-3">Menú</h5>
      <ul class="nav nav-pills flex-column">
        <li v-for="item in items" :key="item.path" class="nav-item mb-1">
          <router-link class="nav-link" :to="item.path">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { label: 'Productos', path: '/dashboard/productos' },
      { label: 'Clientes', path: '/dashboard/clientes' }
    ]
  }
})
</script>

<style scoped>
.nav-link {
  color: #444;
}
.nav-link.router-link-active {
  background-color: #0d6efd;
  color: #fff;
}
</style>
