<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="card-title mb-4">Iniciar sesión</h3>

            <div v-if="alert.message" :class="`alert alert-${alert.type}`" role="alert">
              {{ alert.message }}
            </div>

            <form @submit.prevent="onSubmit" novalidate>
              <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input id="username" v-model="credentials.username" type="text" class="form-control" required />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input id="password" v-model="credentials.password" type="password" class="form-control" required />
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Entrar
                </button>
              </div>
            </form>

            <hr />
            <p class="small text-muted">Credenciales de ejemplo: <strong>admin / admin123</strong> o <strong>user / user123</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const credentials = ref({ username: '', password: '' })
const loading = ref(false)
const alert = ref({ message: '', type: 'danger' })

async function onSubmit() {
  alert.value = { message: '', type: 'danger' }
  if (!credentials.value.username || !credentials.value.password) {
    alert.value = { message: 'Por favor complete el usuario y la contraseña.', type: 'warning' }
    return
  }

  loading.value = true
  try {
    // usuarios.json ubicado en la carpeta `public` (ruta relativa al servidor)
    const res = await fetch('/usuarios.json', { cache: 'no-store' })
    if (!res.ok) throw new Error('No se pudo cargar la lista de usuarios')
    const users = await res.json()

    const found = users.find(u => u.username === credentials.value.username && u.password === credentials.value.password)
    if (found) {
      alert.value = { message: `Bienvenido ${found.name}. Redirigiendo...`, type: 'success' }
      // pequeña espera para mostrar el mensaje
      setTimeout(() => {
        router.push('/dashboard')
      }, 700)
    } else {
      alert.value = { message: 'Credenciales inválidas. Intente nuevamente.', type: 'danger' }
    }
  } catch (err) {
    console.error(err)
    alert.value = { message: 'Error al validar. Revise la consola.', type: 'danger' }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.card { border-radius: 0.6rem; }
</style>
