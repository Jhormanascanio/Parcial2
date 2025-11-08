<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
// App.vue es el punto de entrada principal
// Todas las vistas se cargan a través del router-view
</script>

<style>
/* Estilos globales mínimos */
#app {
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
