<template>
  <div class="products-view">
    <div class="container-fluid">
      <!-- Encabezado -->
      <div class="row mb-4">
        <div class="col">
          <h2 class="fw-bold text-dark">🌴 Catálogo Trópico Rebelde</h2>
          <p class="text-muted">Descubre nuestra colección de moda rebelde</p>
        </div>
      </div>

      <!-- Alertas -->
      <div v-if="alert.message" :class="`alert alert-${alert.type} alert-dismissible fade show`" role="alert">
        {{ alert.message }}
        <button type="button" class="btn-close" @click="alert.message = ''" aria-label="Close"></button>
      </div>

      <!-- Filtros y búsqueda -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <input 
                v-model="searchQuery" 
                type="text" 
                class="form-control" 
                placeholder="🔍 Buscar producto..."
              />
            </div>
            <div class="col-md-3">
              <select v-model="selectedCategory" class="form-select">
                <option value="">Todas las categorías</option>
                <option v-for="cat in categories" :key="cat" :value="cat">
                  {{ cat }}
                </option>
              </select>
            </div>
            <div class="col-md-2">
              <button class="btn btn-secondary w-100" @click="toggleView">
                {{ viewMode === 'grid' ? '📋 Lista' : '🔲 Cuadrícula' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3 text-muted">Cargando prendas desde la API...</p>
      </div>

      <!-- Vista en cuadrícula -->
      <div v-else-if="viewMode === 'grid'" class="row g-4">
        <div v-for="product in filteredProducts" :key="product.id" class="col-md-6 col-lg-4 col-xl-3">
          <ProductCardComponent 
            :product="product"
            @view-details="viewProductDetails"
          />
        </div>
      </div>

      <!-- Vista en tabla -->
      <div v-else class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-light">
                <tr>
                  <th>ID</th>
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th class="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in filteredProducts" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>
                    <img 
                      :src="product.image" 
                      :alt="product.title" 
                      style="width: 50px; height: 50px; object-fit: cover;"
                      class="rounded"
                    />
                  </td>
                  <td>{{ product.title }}</td>
                  <td>
                    <span class="badge bg-secondary">{{ product.category }}</span>
                  </td>
                  <td class="fw-bold text-primary">${{ formatPrice(product.price) }} COP</td>
                  <td class="text-center">
                    <button class="btn btn-info btn-sm" @click="viewProductDetails(product)">
                      👁️ Ver
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Mensaje si no hay productos -->
      <div v-if="!loading && filteredProducts.length === 0" class="text-center py-5">
        <p class="text-muted fs-5">No se encontraron prendas</p>
      </div>
    </div>

    <!-- Modal de detalles -->
    <div class="modal fade" id="detailsModal" tabindex="-1" ref="detailsModalRef">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">👁️ Detalles de la Prenda</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-if="selectedProduct">
            <div class="row">
              <div class="col-md-5">
                <img 
                  :src="selectedProduct.image" 
                  :alt="selectedProduct.title" 
                  class="img-fluid rounded"
                />
              </div>
              <div class="col-md-7">
                <h4>{{ selectedProduct.title }}</h4>
                <p class="text-muted">{{ selectedProduct.description }}</p>
                <hr />
                <p><strong>Categoría:</strong> <span class="badge bg-secondary">{{ selectedProduct.category }}</span></p>
                <p><strong>Precio:</strong> <span class="text-primary fs-4 fw-bold">${{ formatPrice(selectedProduct.price) }} COP</span></p>
                <p><strong>ID:</strong> {{ selectedProduct.id }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Modal } from 'bootstrap'
import ProductCardComponent from '../components/ProductCardComponent.vue'

// Estado
const products = ref([])
const categories = ref(['Hombre', 'Mujer', 'Accesorios', 'Calzado'])
const loading = ref(false)
const viewMode = ref('grid')
const searchQuery = ref('')
const selectedCategory = ref('')
const alert = ref({ message: '', type: 'success' })

// Modales
const detailsModalRef = ref(null)
let detailsModal = null

const selectedProduct = ref(null)

// Productos locales con imágenes de la carpeta img/
const localProducts = [
  // SECCIÓN HOMBRE - CAMISAS OVERSIZE
  {
    id: 1,
    title: 'Camisa Oversize Negra',
    description: 'Camisa oversize de algodón premium. Estilo urbano y cómodo, perfecta para looks casuales modernos.',
    price: 18.99,
    image: '/img/oversize1.png',
    category: 'Hombre'
  },
  {
    id: 2,
    title: 'Camisa Oversize Blanca',
    description: 'Camisa oversize clásica en color blanco. Diseño minimalista ideal para cualquier ocasión.',
    price: 18.99,
    image: '/img/oversize2.png',
    category: 'Hombre'
  },
  {
    id: 3,
    title: 'Camisa Oversize Gris',
    description: 'Camisa oversize en tono gris neutro. Versátil y moderna, combina con todo tu guardarropa.',
    price: 18.99,
    image: '/img/oversize3.png',
    category: 'Hombre'
  },
  {
    id: 4,
    title: 'Camisa Oversize Azul',
    description: 'Camisa oversize en azul vibrante. Estilo relajado con toque rebelde y atrevido.',
    price: 19.99,
    image: '/img/oversize4.png',
    category: 'Hombre'
  },
  {
    id: 5,
    title: 'Camisa Oversize Estampada',
    description: 'Camisa oversize con diseño exclusivo. Perfecta para destacar con actitud y personalidad.',
    price: 21.99,
    image: '/img/oversize5.png',
    category: 'Hombre'
  },
  // SECCIÓN HOMBRE - PANTALONES
  {
    id: 6,
    title: 'Pantalón Casual Negro',
    description: 'Pantalón de corte moderno en negro. Tela resistente y cómoda para uso diario.',
    price: 29.99,
    image: '/img/pantalon1.png',
    category: 'Hombre'
  },
  {
    id: 7,
    title: 'Pantalón Deportivo',
    description: 'Pantalón estilo jogger con cintura elástica. Comodidad máxima para tu día a día.',
    price: 27.50,
    image: '/img/pantalon2.png',
    category: 'Hombre'
  },
  {
    id: 8,
    title: 'Pantalón Cargo Urbano',
    description: 'Pantalón cargo con múltiples bolsillos. Funcional y con estilo urbano contemporáneo.',
    price: 32.99,
    image: '/img/pantalon3.png',
    category: 'Hombre'
  },
  {
    id: 9,
    title: 'Pantalón Chino Beige',
    description: 'Pantalón chino de corte slim. Elegante y versátil para looks más formales.',
    price: 34.50,
    image: '/img/pantalon4.png',
    category: 'Hombre'
  },
  {
    id: 10,
    title: 'Pantalón Denim Clásico',
    description: 'Pantalón de mezclilla azul oscuro. Diseño atemporal que nunca pasa de moda.',
    price: 35.99,
    image: '/img/pantalon5.png',
    category: 'Hombre'
  },
  // SECCIÓN HOMBRE - SACOS
  {
    id: 11,
    title: 'Saco Casual Gris',
    description: 'Saco de corte moderno en gris. Perfecto para eventos semi-formales o salidas elegantes.',
    price: 49.99,
    image: '/img/saco1.png',
    category: 'Hombre'
  },
  {
    id: 12,
    title: 'Saco Formal Negro',
    description: 'Saco clásico en negro. Elegancia y sofisticación para ocasiones especiales.',
    price: 54.99,
    image: '/img/saco2.png',
    category: 'Hombre'
  }
]

// Computed
const filteredProducts = computed(() => {
  let filtered = products.value

  // Filtrar por búsqueda
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    )
  }

  // Filtrar por categoría
  if (selectedCategory.value) {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  return filtered
})

// Métodos
function loadProducts() {
  loading.value = true
  try {
    // Usar productos locales en lugar de la API
    products.value = localProducts
    showAlert('Catálogo cargado correctamente', 'success')
  } catch (error) {
    showAlert('Error al cargar el catálogo', 'danger')
    console.error(error)
  } finally {
    loading.value = false
  }
}

function viewProductDetails(product) {
  selectedProduct.value = product
  detailsModal.show()
}

function toggleView() {
  viewMode.value = viewMode.value === 'grid' ? 'table' : 'grid'
}

function showAlert(message, type = 'success') {
  alert.value = { message, type }
  setTimeout(() => {
    alert.value = { message: '', type: 'success' }
  }, 5000)
}

function formatPrice(price) {
  return new Intl.NumberFormat('es-CO').format(price * 4000)
}

// Lifecycle
onMounted(() => {
  detailsModal = new Modal(detailsModalRef.value)
  loadProducts()
})
</script>

<style scoped>
.products-view {
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

.table-hover tbody tr:hover {
  background-color: rgba(37, 99, 235, 0.05);
  cursor: pointer;
}
</style>
