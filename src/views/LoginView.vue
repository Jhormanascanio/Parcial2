<template>
  <div class="login-container">
    <div class="container py-5">
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-md-5">
          <div class="card shadow-lg border-0">
            <div class="card-body p-5">
              <div class="text-center mb-4">
                <h2 class="fw-bold text-primary">🌴 Trópico Rebelde</h2>
                <p class="text-muted">Moda con Actitud</p>
              </div>

              <!-- Alerta de validación -->
              <div v-if="alert.message" :class="`alert alert-${alert.type} alert-dismissible fade show`" role="alert">
                {{ alert.message }}
                <button type="button" class="btn-close" @click="alert.message = ''" aria-label="Close"></button>
              </div>

              <form @submit.prevent="handleLogin" novalidate>
                <div class="mb-3">
                  <label for="username" class="form-label fw-semibold">Usuario</label>
                  <input 
                    id="username" 
                    v-model="credentials.username" 
                    type="text" 
                    class="form-control form-control-lg" 
                    placeholder="Ingrese su usuario"
                    required 
                  />
                </div>

                <div class="mb-4">
                  <label for="password" class="form-label fw-semibold">Contraseña</label>
                  <input 
                    id="password" 
                    v-model="credentials.password" 
                    type="password" 
                    class="form-control form-control-lg" 
                    placeholder="Ingrese su contraseña"
                    required 
                  />
                </div>

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    {{ loading ? 'Validando...' : 'Iniciar Sesión' }}
                  </button>
                </div>
              </form>

              <hr class="my-4" />
              
              <div class="bg-light p-3 rounded">
                <p class="small mb-2 fw-semibold">Credenciales de prueba:</p>
                <ul class="small mb-0">
                  <li><strong>admin</strong> / admin123</li>
                  <li><strong>vendedor</strong> / vendedor123</li>
                  <li><strong>demo</strong> / demo123</li>
                </ul>
              </div>

              <div class="mt-3">
                <p class="small text-muted text-center mb-0">
                  ⚠️ <em>Nota educativa:</em> Esta validación usa JSON local y no representa un sistema de autenticación real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import usuariosData from '../data/usuarios.json'

const router = useRouter()
const credentials = ref({ username: '', password: '' })
const loading = ref(false)
const alert = ref({ message: '', type: 'danger' })

async function handleLogin() {
  // Limpiar alertas previas
  alert.value = { message: '', type: 'danger' }

  // Validar campos vacíos
  if (!credentials.value.username.trim() || !credentials.value.password.trim()) {
    alert.value = { 
      message: 'Por favor complete todos los campos.', 
      type: 'warning' 
    }
    return
  }

  loading.value = true

  // Simular delay de red (opcional, para UX)
  await new Promise(resolve => setTimeout(resolve, 800))

  try {
    // Buscar usuario en el JSON
    const usuario = usuariosData.usuarios.find(
      u => u.username === credentials.value.username && 
           u.password === credentials.value.password
    )

    if (usuario) {
      // Credenciales correctas
      alert.value = { 
        message: `✅ Bienvenido ${usuario.nombre}! Redirigiendo al dashboard...`, 
        type: 'success' 
      }

      // Guardar sesión en localStorage
      localStorage.setItem('user', JSON.stringify({
        id: usuario.id,
        username: usuario.username,
        nombre: usuario.nombre,
        rol: usuario.rol
      }))

      // Redirigir al dashboard después de mostrar mensaje
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } else {
      // Credenciales incorrectas
      alert.value = { 
        message: '❌ Usuario o contraseña incorrectos. Intente nuevamente.', 
        type: 'danger' 
      }
    }
  } catch (error) {
    console.error('Error en login:', error)
    alert.value = { 
      message: 'Error al procesar el login. Consulte la consola.', 
      type: 'danger' 
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
  min-height: 100vh;
}

.card {
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.25rem rgba(37, 99, 235, 0.25);
}

.btn-primary {
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
