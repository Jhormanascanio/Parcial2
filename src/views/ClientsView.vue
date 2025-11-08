<template>
  <div class="clients-view">
    <div class="container-fluid">
      <!-- Encabezado -->
      <div class="row mb-4">
        <div class="col">
          <h2 class="fw-bold text-dark">👥 Gestión de Clientes</h2>
          <p class="text-muted">Administra tu base de datos de clientes</p>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary" @click="showCreateForm">
            ➕ Nuevo Cliente
          </button>
        </div>
      </div>

      <!-- Estadísticas -->
      <div class="row mb-4">
        <div class="col-md-3">
          <div class="card bg-primary text-white">
            <div class="card-body">
              <h6 class="card-subtitle mb-2">Total Clientes</h6>
              <h2 class="card-title mb-0">{{ clients.length }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-success text-white">
            <div class="card-body">
              <h6 class="card-subtitle mb-2">Clientes Activos</h6>
              <h2 class="card-title mb-0">{{ activeClients }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-warning text-white">
            <div class="card-body">
              <h6 class="card-subtitle mb-2">Nuevos Este Mes</h6>
              <h2 class="card-title mb-0">{{ newThisMonth }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-info text-white">
            <div class="card-body">
              <h6 class="card-subtitle mb-2">Promedio Compras</h6>
              <h2 class="card-title mb-0">${{ avgPurchases }}</h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Búsqueda -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <input 
                v-model="searchQuery" 
                type="text" 
                class="form-control" 
                placeholder="🔍 Buscar cliente por nombre o email..."
              />
            </div>
            <div class="col-md-3">
              <select v-model="statusFilter" class="form-select">
                <option value="">Todos los estados</option>
                <option value="active">Activos</option>
                <option value="inactive">Inactivos</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabla de clientes -->
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-light">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Estado</th>
                  <th>Compras</th>
                  <th class="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in filteredClients" :key="client.id">
                  <td>{{ client.id }}</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="avatar-circle me-2">
                        {{ client.name.charAt(0) }}
                      </div>
                      <strong>{{ client.name }}</strong>
                    </div>
                  </td>
                  <td>{{ client.email }}</td>
                  <td>{{ client.phone }}</td>
                  <td>
                    <span :class="`badge ${client.status === 'active' ? 'bg-success' : 'bg-secondary'}`">
                      {{ client.status === 'active' ? 'Activo' : 'Inactivo' }}
                    </span>
                  </td>
                  <td>
                    <span class="badge bg-primary">${{ client.totalPurchases }}</span>
                  </td>
                  <td class="text-center">
                    <div class="btn-group btn-group-sm" role="group">
                      <button class="btn btn-info" @click="viewDetails(client)">
                        👁️
                      </button>
                      <button class="btn btn-warning" @click="editClient(client)">
                        ✏️
                      </button>
                      <button class="btn btn-danger" @click="deleteClient(client)">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Mensaje si no hay clientes -->
      <div v-if="filteredClients.length === 0" class="text-center py-5">
        <p class="text-muted fs-5">No se encontraron clientes</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Datos de ejemplo (en producción vendría de una API)
const clients = ref([
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '555-0001',
    status: 'active',
    totalPurchases: 1250,
    registeredDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'María González',
    email: 'maria.gonzalez@email.com',
    phone: '555-0002',
    status: 'active',
    totalPurchases: 3400,
    registeredDate: '2024-02-20'
  },
  {
    id: 3,
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    phone: '555-0003',
    status: 'inactive',
    totalPurchases: 500,
    registeredDate: '2023-11-10'
  },
  {
    id: 4,
    name: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    phone: '555-0004',
    status: 'active',
    totalPurchases: 2100,
    registeredDate: '2024-03-05'
  },
  {
    id: 5,
    name: 'Luis Fernández',
    email: 'luis.fernandez@email.com',
    phone: '555-0005',
    status: 'active',
    totalPurchases: 890,
    registeredDate: '2024-10-15'
  }
])

const searchQuery = ref('')
const statusFilter = ref('')

// Computed
const filteredClients = computed(() => {
  let filtered = clients.value

  // Filtrar por búsqueda
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query)
    )
  }

  // Filtrar por estado
  if (statusFilter.value) {
    filtered = filtered.filter(c => c.status === statusFilter.value)
  }

  return filtered
})

const activeClients = computed(() => 
  clients.value.filter(c => c.status === 'active').length
)

const newThisMonth = computed(() => {
  const currentMonth = new Date().getMonth()
  return clients.value.filter(c => {
    const clientMonth = new Date(c.registeredDate).getMonth()
    return clientMonth === currentMonth
  }).length
})

const avgPurchases = computed(() => {
  const total = clients.value.reduce((sum, c) => sum + c.totalPurchases, 0)
  return (total / clients.value.length).toFixed(2)
})

// Métodos
function showCreateForm() {
  alert('Formulario de creación de cliente (por implementar)')
}

function viewDetails(client) {
  alert(`Ver detalles de: ${client.name}`)
}

function editClient(client) {
  alert(`Editar cliente: ${client.name}`)
}

function deleteClient(client) {
  if (confirm(`¿Eliminar a ${client.name}?`)) {
    const index = clients.value.findIndex(c => c.id === client.id)
    if (index !== -1) {
      clients.value.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.clients-view {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.avatar-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.card {
  transition: all 0.3s ease;
}

.table-hover tbody tr:hover {
  background-color: rgba(37, 99, 235, 0.05);
  cursor: pointer;
}
</style>
