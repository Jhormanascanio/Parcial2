<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand mb-0 h1">Mi Negocio</a>
      <div class="d-flex align-items-center">
        <!-- Aquí puede ir avatar, botones, etc. -->
        <slot name="actions"></slot>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Componente simple de encabezado (Navbar).
// No contiene lógica compleja: es puramente presentacional y reutilizable.
</script>

<style scoped>
.navbar-brand {
  font-weight: 700;
}
</style>
