<template>
  <div class="card product-card h-100">
    <img 
      :src="product.image || 'https://via.placeholder.com/300x200?text=Sin+Imagen'" 
      class="card-img-top" 
      :alt="product.title"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-truncate" :title="product.title">
        {{ product.title }}
      </h5>
      <p class="card-text text-muted small flex-grow-1">
        {{ truncateDescription(product.description, 80) }}
      </p>
      
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="badge bg-secondary">{{ product.category }}</span>
        <span class="fw-bold text-primary fs-5">${{ formatPrice(product.price) }} COP</span>
      </div>

      <div class="d-grid">
        <button 
          class="btn btn-primary btn-sm" 
          @click="$emit('view-details', product)"
        >
          👁️ Ver Detalles
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      title: 'Producto',
      description: 'Descripción del producto',
      price: 0,
      image: '',
      category: 'general'
    })
  }
})

// Emits para comunicación con el padre
defineEmits(['view-details'])

// Helper para truncar descripción
function truncateDescription(text, maxLength) {
  if (!text) return 'Sin descripción'
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

// Formatear precio en pesos colombianos
function formatPrice(price) {
  return new Intl.NumberFormat('es-CO').format(price * 4000)
}
</script>

<style scoped>
.product-card {
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  background-color: #f8f9fa;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  min-height: 2.5rem;
}

.card-text {
  font-size: 0.85rem;
  line-height: 1.4;
  min-height: 3rem;
}

.btn-sm {
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
}
</style>
